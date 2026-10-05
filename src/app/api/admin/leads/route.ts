import { NextRequest, NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import { createLead, databaseConfigured, listLeads } from "@/lib/leads";
import { LEAD_STATUSES, type LeadStatus } from "@/lib/lead-types";
import { bookingSlotError } from "@/lib/studio-hours";

export async function GET(request: NextRequest) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ success: false }, { status: 401 });
  }
  if (!databaseConfigured()) {
    return NextResponse.json(
      { success: false, error: "DATABASE_URL не задан" },
      { status: 503 },
    );
  }
  try {
    const leads = await listLeads();
    return NextResponse.json({ success: true, leads });
  } catch (error) {
    console.error("Lead list error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ success: false }, { status: 401 });
  }
  if (!databaseConfigured()) {
    return NextResponse.json(
      { success: false, error: "DATABASE_URL не задан" },
      { status: 503 },
    );
  }

  const body = await request.json().catch(() => ({}));
  const name = String(body?.name || "").trim();
  if (!name) {
    return NextResponse.json({ success: false, error: "Укажите имя" }, { status: 400 });
  }
  const status = String(body?.status || "new") as LeadStatus;
  if (!LEAD_STATUSES.includes(status)) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
  const fields =
    body?.fields && typeof body.fields === "object" && !Array.isArray(body.fields)
      ? (body.fields as Record<string, string>)
      : {};
  const slotError = bookingSlotError(String(fields.date || ""), String(fields.time || ""));
  if (slotError) {
    return NextResponse.json({ success: false, error: slotError }, { status: 400 });
  }

  try {
    const lead = await createLead({
      source: "booking",
      name,
      phone: body?.phone,
      email: body?.email,
      fields,
      status,
      staffNote: body?.staffNote,
    });
    return NextResponse.json({ success: true, lead });
  } catch (error) {
    console.error("Lead create error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
