"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import type { Lead, LeadStatus } from "@/lib/lead-types";
import { brandsForService, modelsForBrand } from "@/lib/car-brands";
import {
  BOOKING_SERVICES,
  DEFAULT_BOOKING_SERVICE,
} from "@/lib/booking-services";
import {
  bookingSlotError,
  minBookingDate,
  timeBounds,
} from "@/lib/studio-hours";
import {
  formatByn,
  priceForClass,
  WRAPPING_CALC_ITEMS,
  WRAPPING_SERVICE,
} from "@/lib/okleyka-works";
import { BYN_SIGN } from "@/lib/byn";
import "./page.scss";

const STATUS_LABEL: Record<LeadStatus, string> = {
  new: "Новая",
  in_progress: "В работе",
  confirmed: "Подтверждена",
  done: "Выполнена",
  cancelled: "Отменена",
};

const SOURCE_LABEL: Record<Lead["source"], string> = {
  booking: "Запись",
  certificate: "Сертификат",
  contact: "Сообщение",
};

const SERVICE_GROUPS = [
  { id: "wrapping", label: "Оклейка" },
  { id: "tint", label: "Тонировка" },
  { id: "interior", label: "Химчистка" },
  { id: "polish", label: "Полировка / керамика" },
  { id: "detailing", label: "Детейлинг / мойка" },
  { id: "certificate", label: "Сертификат" },
  { id: "other", label: "Прочее" },
] as const;

type ServiceGroupId = (typeof SERVICE_GROUPS)[number]["id"];
type SortMode = "date_desc" | "date_asc" | "service_asc";

const FIELD_LABEL: Record<string, string> = {
  service: "Услуга",
  phone: "Телефон",
  email: "Email",
  work: "Вид оклейки",
  brand: "Марка",
  model: "Модель",
  className: "Класс",
  zones: "Зоны",
  estimate: "Ориентир",
  date: "Дата",
  time: "Время",
  car: "Автомобиль",
  price: "Сумма",
  review: "Напоминание об отзыве",
  rescheduledFrom: "Перенос с",
  comment: "Комментарий клиента",
  nominal: "Номинал",
  recipient: "Получатель",
  message: "Сообщение",
};

const MONTH_LABEL = new Intl.DateTimeFormat("ru-BY", {
  month: "long",
  year: "numeric",
});

function formatWhen(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("ru-BY", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function leadServiceText(lead: Lead) {
  return (
    lead.payload.service ||
    lead.payload.work ||
    lead.payload.nominal ||
    lead.payload.message ||
    ""
  ).trim();
}

function serviceGroup(lead: Lead): ServiceGroupId {
  if (lead.source === "certificate") return "certificate";
  const text = leadServiceText(lead).toLowerCase();
  if (!text) return "other";
  if (/серт/.test(text)) return "certificate";
  if (/тонир|тонер|сфера|растонир|атермал|полусфер/.test(text)) return "tint";
  if (/хим|озон/.test(text)) return "interior";
  if (/полир|керам|воск|антидожд/.test(text)) return "polish";
  if (/оклей|пленк|плёнк|лайт|стандарт|прем|полик|антихром|бампер|капот|морда|винил|пуф|ppf|lite/.test(text)) {
    return "wrapping";
  }
  if (/детейл|мойк|мотор/.test(text)) return "detailing";
  return "other";
}

function leadDate(lead: Lead) {
  const raw = (lead.payload.date || "").trim();
  const match = raw.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
  if (match) {
    const day = Number(match[1]);
    const month = Number(match[2]);
    const year = Number(match[3]);
    const timeMatch = (lead.payload.time || "").match(/^(\d{1,2}):(\d{2})$/);
    const hour = timeMatch ? Number(timeMatch[1]) : 12;
    const minute = timeMatch ? Number(timeMatch[2]) : 0;
    return new Date(year, month - 1, day, hour, minute);
  }
  const created = new Date(lead.createdAt);
  return Number.isNaN(created.getTime()) ? new Date(0) : created;
}

function monthKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function monthTitle(key: string) {
  const [year, month] = key.split("-").map(Number);
  if (!year || !month) return key;
  return MONTH_LABEL.format(new Date(year, month - 1, 1));
}

function shortService(text: string) {
  if (!text) return "Без услуги";
  return text.length > 64 ? `${text.slice(0, 61)}…` : text;
}

function toInputDate(value: string) {
  const match = value.trim().match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  if (!match) return "";
  return `${match[3]}-${match[2]}-${match[1]}`;
}

function wrapQuote(zoneIds: string[], classNumber: number) {
  const items = WRAPPING_CALC_ITEMS.filter((item) => zoneIds.includes(item.id));
  const lines = items.map((item) => {
    const price = priceForClass(item, classNumber);
    if (price == null) return `${item.name}: уточняется`;
    return `${item.name}: ${item.from ? "от " : ""}${formatByn(price)}`;
  });
  const sum = items.reduce(
    (total, item) => total + (priceForClass(item, classNumber) ?? 0),
    0,
  );
  const from = items.some(
    (item) => item.from && priceForClass(item, classNumber) != null,
  );
  const estimate =
    items.length === 0 ? "" : `${from ? "от " : ""}${sum.toLocaleString("ru-RU")}\u00A0${BYN_SIGN}`;
  return { lines, estimate };
}

const EMPTY_DRAFT = {
  name: "",
  phone: "",
  date: "",
  time: "",
  service: DEFAULT_BOOKING_SERVICE,
  brand: "",
  model: "",
  zones: [] as string[],
  price: "",
  comment: "",
  staffNote: "",
  status: "new" as LeadStatus,
};

export default function AdminClient() {
  const [ready, setReady] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [error, setError] = useState("");
  const [source, setSource] = useState<"all" | Lead["source"]>("all");
  const [status, setStatus] = useState<"all" | LeadStatus>("all");
  const [month, setMonth] = useState("all");
  const [service, setService] = useState<"all" | ServiceGroupId>("all");
  const [sort, setSort] = useState<SortMode>("date_desc");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [draftStatus, setDraftStatus] = useState<LeadStatus>("new");
  const [draftNote, setDraftNote] = useState("");
  const [draftDate, setDraftDate] = useState("");
  const [draftTime, setDraftTime] = useState("");
  const [creating, setCreating] = useState(false);
  const [draft, setDraft] = useState(EMPTY_DRAFT);
  const [saving, setSaving] = useState(false);
  const wrapClassNumber =
    modelsForBrand(draft.service, draft.brand).find((item) => item.name === draft.model)
      ?.classNumber ?? 1;
  const zoneQuote =
    draft.service === WRAPPING_SERVICE
      ? wrapQuote(draft.zones, wrapClassNumber)
      : null;

  async function load() {
    const response = await fetch("/api/admin/leads");
    if (response.status === 401) {
      setAuthed(false);
      return;
    }
    const data = await response.json();
    if (!response.ok) {
      setError(data.error || "Не удалось загрузить заявки");
      setAuthed(true);
      return;
    }
    setLeads(data.leads);
    setAuthed(true);
    setError("");
  }

  useEffect(() => {
    load().finally(() => setReady(true));
  }, []);

  const selected = leads.find((item) => item.id === selectedId) || null;

  useEffect(() => {
    if (!selected) return;
    setDraftStatus(selected.status);
    setDraftNote(selected.staffNote);
    setDraftDate(toInputDate(selected.payload.date || ""));
    setDraftTime(selected.payload.time || "");
  }, [selected]);

  const months = useMemo(() => {
    const keys = new Set<string>();
    for (const item of leads) keys.add(monthKey(leadDate(item)));
    return [...keys].sort((a, b) => b.localeCompare(a));
  }, [leads]);

  const visible = useMemo(() => {
    const filtered = leads.filter((item) => {
      if (source !== "all" && item.source !== source) return false;
      if (status !== "all" && item.status !== status) return false;
      if (month !== "all" && monthKey(leadDate(item)) !== month) return false;
      if (service !== "all" && serviceGroup(item) !== service) return false;
      return true;
    });

    filtered.sort((a, b) => {
      if (sort === "service_asc") {
        const byService = leadServiceText(a).localeCompare(leadServiceText(b), "ru");
        if (byService !== 0) return byService;
      }
      const diff = leadDate(a).getTime() - leadDate(b).getTime();
      return sort === "date_asc" ? diff : -diff;
    });

    return filtered;
  }, [leads, source, status, month, service, sort]);

  async function onLogin(event: FormEvent) {
    event.preventDefault();
    setLoginError("");
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      setLoginError(data.error || "Не удалось войти");
      return;
    }
    setPassword("");
    await load();
  }

  async function onLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthed(false);
    setLeads([]);
    setSelectedId(null);
  }

  async function onSave(event: FormEvent) {
    event.preventDefault();
    if (!selected) return;
    const sameSlot =
      draftDate === toInputDate(selected.payload.date || "") &&
      draftTime === (selected.payload.time || "");
    if (!sameSlot) {
      const slotError = bookingSlotError(draftDate, draftTime);
      if (slotError) {
        setError(slotError);
        return;
      }
    }
    setSaving(true);
    setError("");
    try {
      const response = await fetch(`/api/admin/leads/${selected.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: draftStatus,
          staffNote: draftNote,
          date: draftDate,
          time: draftTime,
        }),
      });
      const data = await response.json();
      if (!response.ok || !data.lead) {
        setError(data.error || "Не удалось сохранить");
        return;
      }
      setLeads((prev) =>
        prev.map((item) => (item.id === data.lead.id ? data.lead : item)),
      );
    } finally {
      setSaving(false);
    }
  }

  async function onCreate(event: FormEvent) {
    event.preventDefault();
    const amount = zoneQuote ? zoneQuote.estimate : draft.price.trim();
    if (draft.service === WRAPPING_SERVICE && !zoneQuote?.lines.length) {
      setError("Выберите зоны оклейки");
      return;
    }
    const missing =
      !draft.name.trim() ||
      !draft.phone.trim() ||
      !draft.date ||
      !draft.time ||
      !draft.service ||
      !draft.brand ||
      !draft.model ||
      !amount ||
      !draft.comment.trim() ||
      !draft.staffNote.trim();
    if (missing) {
      setError("Заполните все поля");
      return;
    }
    const model = modelsForBrand(draft.service, draft.brand).find(
      (item) => item.name === draft.model,
    );
    if (!model) {
      setError("Выберите модель из списка");
      return;
    }
    const slotError = bookingSlotError(draft.date, draft.time);
    if (slotError) {
      setError(slotError);
      return;
    }
    setSaving(true);
    setError("");
    try {
      const response = await fetch("/api/admin/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: draft.name.trim(),
          phone: draft.phone.trim(),
          status: draft.status,
          staffNote: draft.staffNote.trim(),
          fields: {
            date: draft.date,
            time: draft.time,
            service: draft.service,
            brand: draft.brand,
            model: draft.model,
            className: String(model.classNumber),
            car: `${draft.brand} ${draft.model}`,
            zones: zoneQuote?.lines.join("\n") || "",
            estimate: zoneQuote?.estimate || "",
            price: amount,
            comment: draft.comment.trim(),
          },
        }),
      });
      const data = await response.json();
      if (!response.ok || !data.lead) {
        setError(data.error || "Не удалось создать заявку");
        return;
      }
      setLeads((prev) => [data.lead, ...prev.filter((item: Lead) => item.id !== data.lead.id)]);
      setSelectedId(data.lead.id);
      setCreating(false);
      setDraft(EMPTY_DRAFT);
    } finally {
      setSaving(false);
    }
  }

  if (!ready) {
    return <p className="admin__loading">Загрузка…</p>;
  }

  if (!authed) {
    return (
      <section className="admin">
        <div className="container admin__login">
          <h1>Админка заявок</h1>
          <p>Вход только для студии. Страница закрыта от поиска.</p>
          <form onSubmit={onLogin}>
            <label htmlFor="admin-password">Пароль</label>
            <input
              id="admin-password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {loginError && <p className="admin__error">{loginError}</p>}
            <button type="submit">Войти</button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className={creating ? "admin admin--creating" : "admin"}>
      <div className="container">
        <div className="admin__head">
          <div className="admin__title">
            <h1>Заявки</h1>
            <div className="admin__actions">
              <button
                type="button"
                className="admin__add"
                aria-label={creating ? "Закрыть форму" : "Новая заявка"}
                onClick={() => {
                  setCreating((value) => !value);
                  setSelectedId(null);
                }}
              >
                {creating ? "×" : "+"}
              </button>
              <button type="button" className="admin__logout" onClick={onLogout}>
                Выйти
              </button>
            </div>
          </div>
          {!creating && (
            <p className="admin__count">
              Показано {visible.length} из {leads.length}
            </p>
          )}
        </div>
        {error && <p className="admin__error">{error}</p>}
        <div className="admin__filters">
          <select
            value={month}
            onChange={(event) => setMonth(event.target.value)}
            aria-label="Месяц"
          >
            <option value="all">Все месяцы</option>
            {months.map((key) => (
              <option key={key} value={key}>
                {monthTitle(key)}
              </option>
            ))}
          </select>
          <select
            value={service}
            onChange={(event) =>
              setService(event.target.value as "all" | ServiceGroupId)
            }
            aria-label="Услуга"
          >
            <option value="all">Все услуги</option>
            {SERVICE_GROUPS.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as SortMode)}
            aria-label="Сортировка"
          >
            <option value="date_desc">Сначала новые даты</option>
            <option value="date_asc">Сначала старые даты</option>
            <option value="service_asc">По услуге</option>
          </select>
          <select
            value={source}
            onChange={(event) =>
              setSource(event.target.value as "all" | Lead["source"])
            }
            aria-label="Тип заявки"
          >
            <option value="all">Все типы</option>
            <option value="booking">Запись</option>
            <option value="certificate">Сертификат</option>
            <option value="contact">Сообщение</option>
          </select>
          <select
            value={status}
            onChange={(event) =>
              setStatus(event.target.value as "all" | LeadStatus)
            }
            aria-label="Статус"
          >
            <option value="all">Все статусы</option>
            {Object.entries(STATUS_LABEL).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <div className="admin__layout">
          <ul className="admin__list">
            {visible.length === 0 && <li className="admin__empty">Пока пусто</li>}
            {visible.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={item.id === selectedId ? "is-active" : ""}
                  onClick={() => {
                    setSelectedId(item.id);
                    setCreating(false);
                  }}
                >
                  <strong>{item.name}</strong>
                  <span>{shortService(leadServiceText(item))}</span>
                  <span>{item.phone || item.email || "без контакта"}</span>
                  <span>{STATUS_LABEL[item.status]}</span>
                  <time dateTime={leadDate(item).toISOString()}>
                    {formatWhen(leadDate(item).toISOString())}
                  </time>
                </button>
              </li>
            ))}
          </ul>
          {creating && (
            <form className="admin__card" onSubmit={onCreate}>
              <h2>Новая заявка</h2>
              <label htmlFor="new-name">Имя *</label>
              <input
                id="new-name"
                value={draft.name}
                onChange={(event) =>
                  setDraft((prev) => ({ ...prev, name: event.target.value }))
                }
                required
              />
              <label htmlFor="new-phone">Телефон *</label>
              <input
                id="new-phone"
                value={draft.phone}
                onChange={(event) =>
                  setDraft((prev) => ({ ...prev, phone: event.target.value }))
                }
                required
              />
              <div className="admin__split">
                <div>
                  <label htmlFor="new-date">Дата *</label>
                  <input
                    id="new-date"
                    type="date"
                    value={draft.date}
                    min={minBookingDate()}
                    onChange={(event) =>
                      setDraft((prev) => ({ ...prev, date: event.target.value }))
                    }
                    required
                  />
                </div>
                <div>
                  <label htmlFor="new-time">Время *</label>
                  <input
                    id="new-time"
                    type="time"
                    value={draft.time}
                    min={timeBounds(draft.date).min}
                    max={timeBounds(draft.date).max}
                    onChange={(event) =>
                      setDraft((prev) => ({ ...prev, time: event.target.value }))
                    }
                    required
                  />
                </div>
              </div>
              <label htmlFor="new-service">Услуга *</label>
              <select
                id="new-service"
                value={draft.service}
                required
                onChange={(event) => {
                  const service = event.target.value;
                  setDraft((prev) => {
                    const stillValid = modelsForBrand(service, prev.brand).some(
                      (item) => item.name === prev.model,
                    );
                    return {
                      ...prev,
                      service,
                      model: stillValid ? prev.model : "",
                      zones: service === WRAPPING_SERVICE ? prev.zones : [],
                    };
                  });
                }}
              >
                {BOOKING_SERVICES.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <label htmlFor="new-brand">Марка *</label>
              <select
                id="new-brand"
                value={draft.brand}
                required
                onChange={(event) =>
                  setDraft((prev) => ({
                    ...prev,
                    brand: event.target.value,
                    model: "",
                  }))
                }
              >
                <option value="">Выберите марку</option>
                {brandsForService(draft.service).map((item) => (
                  <option key={item.brand} value={item.brand}>
                    {item.brand}
                  </option>
                ))}
              </select>
              <label htmlFor="new-model">Модель *</label>
              <select
                id="new-model"
                value={draft.model}
                required
                disabled={!draft.brand}
                onChange={(event) =>
                  setDraft((prev) => ({ ...prev, model: event.target.value }))
                }
              >
                <option value="">
                  {draft.brand ? "Выберите модель" : "Сначала выберите марку"}
                </option>
                {modelsForBrand(draft.service, draft.brand).map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
              {draft.service === WRAPPING_SERVICE && (
                <fieldset className="admin__zones">
                  <legend>Зоны оклейки *</legend>
                  {(["full", "partial"] as const).map((tab) => (
                    <div key={tab}>
                      <p>{tab === "full" ? "Полная" : "Частичная"}</p>
                      {WRAPPING_CALC_ITEMS.filter((item) => item.tab === tab).map(
                        (item) => {
                          const classNumber =
                            modelsForBrand(draft.service, draft.brand).find(
                              (model) => model.name === draft.model,
                            )?.classNumber ?? 1;
                          const price = priceForClass(item, classNumber);
                          const checked = draft.zones.includes(item.id);
                          return (
                            <label key={item.id}>
                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={() =>
                                  setDraft((prev) => ({
                                    ...prev,
                                    zones: checked
                                      ? prev.zones.filter((id) => id !== item.id)
                                      : [...prev.zones, item.id],
                                  }))
                                }
                              />
                              <span>{item.name}</span>
                              <strong>
                                {price == null
                                  ? "Уточняется"
                                  : `${item.from ? "от " : ""}${formatByn(price)}`}
                              </strong>
                            </label>
                          );
                        },
                      )}
                    </div>
                  ))}
                  <p className="admin__zones-total">
                    {draft.brand && draft.model
                      ? `${wrapClassNumber} класс`
                      : "Цены 1 класса"}
                    {zoneQuote?.estimate ? ` · ${zoneQuote.estimate}` : ""}
                  </p>
                </fieldset>
              )}
              <label htmlFor="new-price">Сумма *</label>
              <input
                id="new-price"
                value={zoneQuote ? zoneQuote.estimate : draft.price}
                onChange={(event) =>
                  setDraft((prev) => ({ ...prev, price: event.target.value }))
                }
                readOnly={Boolean(zoneQuote)}
                required={!zoneQuote}
              />
              <label htmlFor="new-comment">Комментарий клиента *</label>
              <textarea
                id="new-comment"
                rows={3}
                value={draft.comment}
                onChange={(event) =>
                  setDraft((prev) => ({ ...prev, comment: event.target.value }))
                }
                required
              />
              <label htmlFor="new-status">Статус *</label>
              <select
                id="new-status"
                value={draft.status}
                required
                onChange={(event) =>
                  setDraft((prev) => ({
                    ...prev,
                    status: event.target.value as LeadStatus,
                  }))
                }
              >
                {Object.entries(STATUS_LABEL).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
              <label htmlFor="new-note">Комментарий студии *</label>
              <textarea
                id="new-note"
                rows={3}
                value={draft.staffNote}
                onChange={(event) =>
                  setDraft((prev) => ({ ...prev, staffNote: event.target.value }))
                }
                required
              />
              <button type="submit" disabled={saving}>
                {saving ? "Сохраняем…" : "Создать заявку"}
              </button>
            </form>
          )}
          {selected && !creating && (
            <form className="admin__card" onSubmit={onSave}>
              <p className="admin__source">{SOURCE_LABEL[selected.source]}</p>
              <h2>{selected.name}</h2>
              <dl>
                {selected.phone && (
                  <>
                    <dt>Телефон</dt>
                    <dd>
                      <a href={`tel:${selected.phone.replace(/[^\d+]/g, "")}`}>
                        {selected.phone}
                      </a>
                    </dd>
                  </>
                )}
                {selected.email && (
                  <>
                    <dt>Email</dt>
                    <dd>
                      <a href={`mailto:${selected.email}`}>{selected.email}</a>
                    </dd>
                  </>
                )}
                {Object.entries(selected.payload).map(([key, value]) =>
                  value ? (
                    <div key={key}>
                      <dt>{FIELD_LABEL[key] || key}</dt>
                      <dd>{value}</dd>
                    </div>
                  ) : null,
                )}
              </dl>
              <label htmlFor="lead-status">Статус</label>
              <select
                id="lead-status"
                value={draftStatus}
                onChange={(event) =>
                  setDraftStatus(event.target.value as LeadStatus)
                }
              >
                {Object.entries(STATUS_LABEL).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
              <div className="admin__split">
                <div>
                  <label htmlFor="lead-date">Дата записи</label>
                  <input
                    id="lead-date"
                    type="date"
                    value={draftDate}
                    onChange={(event) => setDraftDate(event.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="lead-time">Время</label>
                  <input
                    id="lead-time"
                    type="time"
                    value={draftTime}
                    onChange={(event) => setDraftTime(event.target.value)}
                  />
                </div>
              </div>
              <label htmlFor="lead-note">Комментарий студии</label>
              <textarea
                id="lead-note"
                value={draftNote}
                onChange={(event) => setDraftNote(event.target.value)}
                rows={5}
              />
              <button type="submit" disabled={saving}>
                {saving ? "Сохраняем…" : "Сохранить"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
