import { neon } from "@neondatabase/serverless";
import {
  LEAD_SOURCES,
  LEAD_STATUSES,
  type Lead,
  type LeadSource,
  type LeadStatus,
} from "@/lib/lead-types";
import { BookingSlotError, bookingSlotError } from "@/lib/studio-hours";

export { LEAD_SOURCES, LEAD_STATUSES };
export type { Lead, LeadSource, LeadStatus };

function databaseUrl() {
  return process.env.DATABASE_URL || "";
}

export function databaseConfigured() {
  return databaseUrl().startsWith("postgres");
}

function sqlClient() {
  if (!databaseConfigured()) return null;
  return neon(databaseUrl());
}

type Sql = NonNullable<ReturnType<typeof sqlClient>>;

let schemaReady: Promise<void> | null = null;

async function ensureSchema(sql: Sql) {
  if (!schemaReady) {
    schemaReady = sql`
      CREATE TABLE IF NOT EXISTS leads (
        id text PRIMARY KEY,
        source text NOT NULL,
        name text NOT NULL,
        phone text NOT NULL DEFAULT '',
        email text NOT NULL DEFAULT '',
        payload text NOT NULL,
        status text NOT NULL DEFAULT 'new',
        staff_note text NOT NULL DEFAULT '',
        created_at timestamptz NOT NULL DEFAULT now(),
        updated_at timestamptz NOT NULL DEFAULT now()
      )
    `.then(() => undefined);
  }
  try {
    await schemaReady;
  } catch (error) {
    schemaReady = null;
    throw error;
  }
}

function asText(value: unknown, max = 4000) {
  return String(value ?? "").trim().slice(0, max);
}

export function cleanFields(input: unknown) {
  if (!input || typeof input !== "object" || Array.isArray(input)) return {};
  const fields: Record<string, string> = {};
  for (const [key, value] of Object.entries(input).slice(0, 40)) {
    if (!/^[a-zA-Z0-9_-]{1,40}$/.test(key)) continue;
    fields[key] = asText(value);
  }
  return fields;
}

function mapRow(row: Record<string, unknown>): Lead {
  let payload: Record<string, string> = {};
  try {
    const parsed = JSON.parse(String(row.payload || "{}"));
    payload = cleanFields(parsed);
  } catch {
    payload = {};
  }
  return {
    id: String(row.id),
    source: String(row.source) as LeadSource,
    name: String(row.name || ""),
    phone: String(row.phone || ""),
    email: String(row.email || ""),
    payload,
    status: String(row.status || "new") as LeadStatus,
    staffNote: String(row.staff_note || ""),
    createdAt: new Date(String(row.created_at)).toISOString(),
    updatedAt: new Date(String(row.updated_at)).toISOString(),
  };
}

function appointmentTimestamp(date: string, time: string) {
  const match = date.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  if (!match) return null;
  const clock = time.match(/^(\d{2}):(\d{2})$/);
  const hour = clock ? Number(clock[1]) : 10;
  const minute = clock ? Number(clock[2]) : 0;
  if (hour > 23 || minute > 59) return null;
  return new Date(
    Date.UTC(
      Number(match[3]),
      Number(match[2]) - 1,
      Number(match[1]),
      hour - 3,
      minute,
    ),
  ).toISOString();
}

export function normalizeDate(value: string) {
  const match = value.trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (match) return `${match[3]}.${match[2]}.${match[1]}`;
  if (/^\d{2}\.\d{2}\.\d{4}$/.test(value.trim())) return value.trim();
  return "";
}

export function normalizeTime(value: string) {
  const match = value.trim().match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return "";
  const hour = Number(match[1]);
  const minute = Number(match[2]);
  if (hour > 23 || minute > 59) return "";
  return `${String(hour).padStart(2, "0")}:${match[2]}`;
}

export async function createLead(input: {
  source: LeadSource;
  name: string;
  phone?: string;
  email?: string;
  fields: Record<string, string>;
  status?: LeadStatus;
  staffNote?: string;
}) {
  const sql = sqlClient();
  if (!sql) throw new Error("DATABASE_URL не задан");
  await ensureSchema(sql);
  const id = crypto.randomUUID();
  const name = asText(input.name, 200);
  const phone = asText(input.phone, 40);
  const email = asText(input.email, 200);
  const fields = cleanFields(input.fields);
  const date = normalizeDate(fields.date || "");
  const time = normalizeTime(fields.time || "");
  if (date) fields.date = date;
  if (time) fields.time = time;
  const payload = JSON.stringify(fields);
  const status = input.status && LEAD_STATUSES.includes(input.status) ? input.status : "new";
  const staffNote = asText(input.staffNote, 2000);
  const when = date ? appointmentTimestamp(date, time) : null;
  const rows = await sql`
    INSERT INTO leads (
      id, source, name, phone, email, payload, status, staff_note, created_at, updated_at
    )
    VALUES (
      ${id},
      ${input.source},
      ${name},
      ${phone},
      ${email},
      ${payload},
      ${status},
      ${staffNote},
      COALESCE(${when}::timestamptz, now()),
      now()
    )
    RETURNING id, source, name, phone, email, payload, status, staff_note, created_at, updated_at
  `;
  return mapRow(rows[0] as Record<string, unknown>);
}

export async function listLeads() {
  const sql = sqlClient();
  if (!sql) throw new Error("DATABASE_URL не задан");
  await ensureSchema(sql);
  const rows = await sql`
    SELECT id, source, name, phone, email, payload, status, staff_note, created_at, updated_at
    FROM leads
    ORDER BY created_at DESC
    LIMIT 1000
  `;
  return rows.map((row) => mapRow(row as Record<string, unknown>));
}

export async function updateLead(
  id: string,
  patch: { status: LeadStatus; staffNote: string; date?: string; time?: string },
) {
  const sql = sqlClient();
  if (!sql) throw new Error("DATABASE_URL не задан");
  await ensureSchema(sql);
  const current = await sql`
    SELECT payload FROM leads WHERE id = ${id}
  `;
  const existing = current[0] as { payload?: string } | undefined;
  if (!existing) return null;

  let payload: Record<string, string> = {};
  try {
    payload = cleanFields(JSON.parse(String(existing.payload || "{}")));
  } catch {
    payload = {};
  }

  const date = patch.date ? normalizeDate(patch.date) : payload.date || "";
  const time = patch.time !== undefined ? normalizeTime(patch.time) : payload.time || "";
  const slotChanged = date !== (payload.date || "") || time !== (payload.time || "");
  if (slotChanged) {
    const slotError = bookingSlotError(date, time);
    if (slotError) throw new BookingSlotError(slotError);
  }
  if (date && payload.date && payload.date !== date) {
    payload.rescheduledFrom = payload.date;
  }
  if (date) payload.date = date;
  payload.time = time;
  const when = date ? appointmentTimestamp(date, time) : null;

  const rows = await sql`
    UPDATE leads
    SET status = ${patch.status},
        staff_note = ${asText(patch.staffNote, 2000)},
        payload = ${JSON.stringify(payload)},
        created_at = COALESCE(${when}::timestamptz, created_at),
        updated_at = now()
    WHERE id = ${id}
    RETURNING id, source, name, phone, email, payload, status, staff_note, created_at, updated_at
  `;
  const row = rows[0];
  return row ? mapRow(row as Record<string, unknown>) : null;
}
