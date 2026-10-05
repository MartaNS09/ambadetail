"use client";

import { FormEvent, useEffect, useMemo, useState, type ChangeEvent } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CalendarCheck, CheckCircle } from "lucide-react";
import {
  formatByRfPhone,
  isValidByRfPhone,
  PHONE_HINT,
} from "@/lib/phone";
import { brandsForService, modelsForBrand } from "@/lib/car-brands";
import { BOOKING_SERVICES } from "@/lib/booking-services";
import {
  formatByn,
  priceForClass,
  WRAPPING_CALC_ITEMS,
  WRAPPING_SERVICE,
  WRAPPING_WORKS,
} from "@/lib/okleyka-works";
import WrappingCalculator from "./WrappingCalculator";
import InstallmentNote from "@/components/ui/InstallmentNote";
import { postLead } from "@/lib/post-lead";
import "../podarochnyy-sertifikat/page.scss";

const DEFAULT_BOOKING_SERVICE = BOOKING_SERVICES[0];

function resolveService(raw: string | null): string {
  if (!raw) return DEFAULT_BOOKING_SERVICE;
  const decoded = decodeURIComponent(raw).trim();
  const match = BOOKING_SERVICES.find(
    (item) => item.toLowerCase() === decoded.toLowerCase(),
  );
  return match ?? DEFAULT_BOOKING_SERVICE;
}

function todayIso(): string {
  const now = new Date();
  return new Date(now.getTime() - now.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);
}

export default function BookingClient() {
  const searchParams = useSearchParams();
  const initialService = useMemo(
    () => resolveService(searchParams.get("service")),
    [searchParams],
  );

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    phone: "",
    date: "",
    brand: "",
    model: "",
    work: "",
  });
  const [minDate, setMinDate] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: initialService,
    date: "",
    brand: "",
    model: "",
    work: "",
    zones: [] as string[],
    comment: "",
  });

  useEffect(() => {
    setMinDate(todayIso());
  }, []);

  const onChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target;

    if (name === "service") {
      const nextModels = modelsForBrand(value, form.brand);
      const modelStillValid = nextModels.some((item) => item.name === form.model);
      setForm((prev) => ({
        ...prev,
        service: value,
        model: modelStillValid ? prev.model : "",
        work: value === WRAPPING_SERVICE ? prev.work : "",
        zones: value === WRAPPING_SERVICE ? prev.zones : [],
      }));
      setFieldErrors((prev) => ({ ...prev, model: "", work: "" }));
      return;
    }

    if (name === "brand") {
      setForm((prev) => ({ ...prev, brand: value, model: "" }));
      setFieldErrors((prev) => ({ ...prev, brand: "", model: "" }));
      return;
    }

    if (name === "date") {
      const today = todayIso();
      if (value && value < today) {
        setForm((prev) => ({ ...prev, date: "" }));
        setFieldErrors((prev) => ({
          ...prev,
          date: "Нельзя выбрать прошедшую дату.",
        }));
        return;
      }
      setForm((prev) => ({ ...prev, date: value }));
      setFieldErrors((prev) => ({ ...prev, date: "" }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: name === "phone" ? formatByRfPhone(value) : value,
    }));
    if (name === "name" || name === "phone" || name === "model" || name === "work") {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError("");

    const today = todayIso();
    const brandModels = modelsForBrand(form.service, form.brand);

    const nextFieldErrors = {
      name: "",
      phone: "",
      date: "",
      brand: "",
      model: "",
      work: "",
    };
    if (!form.name.trim()) {
      nextFieldErrors.name = "Укажите имя.";
    }
    if (!form.phone.trim()) {
      nextFieldErrors.phone = "Укажите телефон.";
    } else if (!isValidByRfPhone(form.phone)) {
      nextFieldErrors.phone =
        "Укажите полный номер РБ (+375, 12 цифр) или РФ (+7, 11 цифр).";
    }
    if (!form.date) {
      nextFieldErrors.date = "Укажите дату.";
    } else if (form.date < today) {
      nextFieldErrors.date = "Нельзя выбрать прошедшую дату.";
    }
    if (form.service === WRAPPING_SERVICE && !form.work && form.zones.length === 0) {
      nextFieldErrors.work = "Выберите зоны оклейки.";
    }
    if (!form.brand) {
      nextFieldErrors.brand = "Выберите марку.";
    } else if (brandModels.length > 0 && !form.model) {
      nextFieldErrors.model = "Выберите модель.";
    }
    setFieldErrors(nextFieldErrors);

    if (
      nextFieldErrors.name ||
      nextFieldErrors.phone ||
      nextFieldErrors.date ||
      nextFieldErrors.brand ||
      nextFieldErrors.model ||
      nextFieldErrors.work
    ) {
      setError("Заполните обязательные поля.");
      return;
    }

    const selectedModel = brandModels.find((item) => item.name === form.model);
    const carLine = [
      form.brand,
      form.model,
      selectedModel ? `класс ${selectedModel.classNumber}` : "",
    ]
      .filter(Boolean)
      .join(", ");

    const selectedZones = WRAPPING_CALC_ITEMS.filter((item) =>
      form.zones.includes(item.id),
    );
    const zoneLines = selectedZones.map((item) => {
      const price = priceForClass(item, selectedModel?.classNumber ?? 1);
      if (price == null) return `${item.name}: уточняется`;
      return `${item.name}: ${item.from ? "от " : ""}${formatByn(price)}`;
    });
    const zoneSum = selectedZones.reduce(
      (sum, item) =>
        sum + (priceForClass(item, selectedModel?.classNumber ?? 1) ?? 0),
      0,
    );
    const zoneFrom = selectedZones.some(
      (item) => item.from && priceForClass(item, selectedModel?.classNumber ?? 1) != null,
    );

    const message = [
      "Заявка на запись",
      `Телефон: ${form.phone.trim()}`,
      `Услуга: ${form.service}`,
      form.work ? `Вид оклейки: ${form.work}` : "",
      zoneLines.length ? `Зоны оклейки:\n${zoneLines.join("\n")}` : "",
      zoneLines.length
        ? `Ориентир по зонам: ${zoneFrom ? "от " : ""}${zoneSum.toLocaleString("ru-RU")} Б̶`
        : "",
      `Желаемая дата: ${form.date}`,
      `Автомобиль: ${carLine}`,
      form.comment.trim() ? `Комментарий: ${form.comment.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    setLoading(true);
    try {
      const [response, saved] = await Promise.all([
        fetch("/api/send-to-telegram", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim() || "не указан",
            message,
          }),
        }),
        postLead({
          source: "booking",
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          fields: {
            service: form.service,
            work: form.work.trim(),
            brand: form.brand,
            model: form.model,
            className: selectedModel ? String(selectedModel.classNumber) : "",
            zones: zoneLines.join("\n"),
            estimate: zoneLines.length
              ? `${zoneFrom ? "от " : ""}${zoneSum.toLocaleString("ru-RU")} Б̶`
              : "",
            date: form.date,
            comment: form.comment.trim(),
          },
        }),
      ]);

      if (!response.ok && !saved) {
        setError("Не удалось отправить заявку. Позвоните +375 29 223 03 22.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Не удалось отправить заявку. Позвоните +375 29 223 03 22.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="breadcrumbs" aria-label="Навигационная цепочка">
        <div className="container">
          <Link href="/" prefetch={false} className="breadcrumbs__link">
            Главная
          </Link>
          <span className="breadcrumbs__separator">/</span>
          <span className="breadcrumbs__current">Записаться</span>
        </div>
      </div>

      <section className="certificate-hero" aria-label="Запись на детейлинг">
        <div className="container certificate-hero__content">
          <p className="certificate-hero__eyebrow">
            <CalendarCheck size={18} aria-hidden="true" /> Ambadetail · Витебск
          </p>
          <h1 className="certificate-hero__title">Записаться на детейлинг</h1>
          <p className="certificate-hero__subtitle">
            Выберите услугу и оставьте контакты — менеджер перезвонит и
            подтвердит удобное время. Студия: ул. П. Бровки, 6А.
          </p>
        </div>
      </section>

      <div className="certificate-page">
        <div className="container">
          {form.service === WRAPPING_SERVICE && !submitted && (
            <WrappingCalculator
              classNumber={
                modelsForBrand(form.service, form.brand).find(
                  (item) => item.name === form.model,
                )?.classNumber ?? 1
              }
              hasModel={Boolean(form.brand && form.model)}
              selectedIds={form.zones}
              error={fieldErrors.work}
              onToggle={(id) => {
                setForm((prev) => ({
                  ...prev,
                  zones: prev.zones.includes(id)
                    ? prev.zones.filter((item) => item !== id)
                    : [...prev.zones, id],
                }));
                setFieldErrors((prev) => ({ ...prev, work: "" }));
              }}
              onClear={() => {
                setForm((prev) => ({ ...prev, zones: [] }));
              }}
            />
          )}
          <div className="certificate-grid">
          <div className="certificate-info">
            <h2>Как проходит запись</h2>
            <ol>
              <li>Выбираете услугу и оставляете телефон.</li>
              <li>Менеджер связывается с вами в рабочее время.</li>
              <li>Согласовываем дату, объём работ и ориентир по цене.</li>
              <li>Приезжаете в студию на ул. П. Бровки, 6А.</li>
            </ol>
            <InstallmentNote />

            <h2>Услуги для записи</h2>
            <ul>
              {BOOKING_SERVICES.filter(
                (item) => item !== "Консультация / не знаю, что выбрать",
              ).map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>

            <h2>Режим работы</h2>
            <ul>
              <li>Пн–Пт: 10:00–19:00</li>
              <li>Сб–Вс: 10:00–17:00</li>
            </ul>

            <p className="certificate-info__note">
              Или сразу позвоните:{" "}
              <a href="tel:+375292230322">+375 29 223 03 22</a>
            </p>
          </div>

          <div className="certificate-form">
            <h2>Форма записи</h2>
            {submitted ? (
              <div className="certificate-form__success">
                <CheckCircle size={40} />
                <h3>Заявка отправлена</h3>
                <p>Менеджер свяжется с вами в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <label>
                  <span>
                    Ваше имя
                    <span
                      className="certificate-form__required"
                      aria-hidden="true"
                    >
                      *
                    </span>
                  </span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    required
                    aria-required="true"
                    aria-invalid={Boolean(fieldErrors.name)}
                    autoComplete="name"
                    className={
                      fieldErrors.name
                        ? "certificate-form__input--invalid"
                        : undefined
                    }
                  />
                  {fieldErrors.name && (
                    <span className="certificate-form__error">
                      {fieldErrors.name}
                    </span>
                  )}
                </label>
                <label>
                  <span>
                    Телефон (РБ / РФ)
                    <span
                      className="certificate-form__required"
                      aria-hidden="true"
                    >
                      *
                    </span>
                  </span>
                  <input
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    value={form.phone}
                    onChange={onChange}
                    required
                    aria-required="true"
                    aria-invalid={Boolean(fieldErrors.phone)}
                    autoComplete="tel"
                    placeholder="+375 (__) ___-__-__"
                    maxLength={19}
                    aria-describedby="phone-hint"
                    className={
                      fieldErrors.phone
                        ? "certificate-form__input--invalid"
                        : undefined
                    }
                  />
                  <span
                    id="phone-hint"
                    className={
                      fieldErrors.phone
                        ? "certificate-form__error"
                        : "certificate-form__hint"
                    }
                  >
                    {fieldErrors.phone || PHONE_HINT}
                  </span>
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    autoComplete="email"
                    placeholder="Необязательно"
                  />
                </label>
                <label>
                  Услуга
                  <select
                    name="service"
                    value={form.service}
                    onChange={onChange}
                    required
                  >
                    {BOOKING_SERVICES.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </label>
                {form.service === WRAPPING_SERVICE && (
                  <label className="wrapping-work-select">
                    <span>
                      Вид оклейки
                      <span
                        className="certificate-form__required"
                        aria-hidden="true"
                      >
                        *
                      </span>
                    </span>
                    <select
                      name="work"
                      value={form.work}
                      onChange={onChange}
                      aria-required="true"
                      aria-invalid={Boolean(fieldErrors.work)}
                      className={
                        fieldErrors.work
                          ? "certificate-form__input--invalid"
                          : undefined
                      }
                    >
                      <option value="">Выберите из перечня</option>
                      {WRAPPING_WORKS.map((group) => (
                        <optgroup key={group.group} label={group.group}>
                          {group.items.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                    {fieldErrors.work && (
                      <span className="certificate-form__error">
                        {fieldErrors.work}
                      </span>
                    )}
                  </label>
                )}
                <label>
                  <span>
                    Марка
                    <span
                      className="certificate-form__required"
                      aria-hidden="true"
                    >
                      *
                    </span>
                  </span>
                  <select
                    name="brand"
                    value={form.brand}
                    onChange={onChange}
                    required
                    aria-required="true"
                    aria-invalid={Boolean(fieldErrors.brand)}
                    className={
                      fieldErrors.brand
                        ? "certificate-form__input--invalid"
                        : undefined
                    }
                  >
                    <option value="">Выберите марку</option>
                    {brandsForService(form.service).map((item) => (
                      <option key={item.brand} value={item.brand}>
                        {item.brand}
                      </option>
                    ))}
                  </select>
                  {fieldErrors.brand && (
                    <span className="certificate-form__error">
                      {fieldErrors.brand}
                    </span>
                  )}
                </label>
                <label>
                  <span>
                    Модель
                    <span
                      className="certificate-form__required"
                      aria-hidden="true"
                    >
                      *
                    </span>
                  </span>
                  <select
                    name="model"
                    value={form.model}
                    onChange={onChange}
                    required={modelsForBrand(form.service, form.brand).length > 0}
                    disabled={!form.brand}
                    aria-required="true"
                    aria-invalid={Boolean(fieldErrors.model)}
                    className={
                      fieldErrors.model
                        ? "certificate-form__input--invalid"
                        : undefined
                    }
                  >
                    <option value="">
                      {form.brand ? "Выберите модель" : "Сначала выберите марку"}
                    </option>
                    {modelsForBrand(form.service, form.brand).map((item) => (
                      <option key={`${item.classNumber}-${item.name}`} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  {fieldErrors.model && (
                    <span className="certificate-form__error">
                      {fieldErrors.model}
                    </span>
                  )}
                </label>
                <label>
                  <span>
                    Желаемая дата
                    <span
                      className="certificate-form__required"
                      aria-hidden="true"
                    >
                      *
                    </span>
                  </span>
                  <div className="certificate-form__date-wrap">
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={onChange}
                      required
                      aria-required="true"
                      aria-invalid={Boolean(fieldErrors.date)}
                      min={minDate || undefined}
                      className={
                        fieldErrors.date
                          ? "certificate-form__date certificate-form__input--invalid"
                          : "certificate-form__date"
                      }
                    />
                  </div>
                  {fieldErrors.date && (
                    <span className="certificate-form__error">
                      {fieldErrors.date}
                    </span>
                  )}
                </label>
                <label>
                  Комментарий
                  <textarea
                    name="comment"
                    value={form.comment}
                    onChange={onChange}
                    rows={4}
                    placeholder="Удобное время, детали по авто…"
                  />
                </label>
                {error && <p className="certificate-form__error">{error}</p>}
                <button type="submit" disabled={loading}>
                  {loading ? "Отправляем…" : "Отправить заявку"}
                </button>
                <p className="certificate-form__privacy">
                  Отправляя форму, вы соглашаетесь с{" "}
                  <Link href="/privacy">политикой конфиденциальности</Link>.
                </p>
              </form>
            )}
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
