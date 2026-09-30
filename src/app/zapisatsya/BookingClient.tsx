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
import "../podarochnyy-sertifikat/page.scss";

export const BOOKING_SERVICES = [
  "Оклейка авто плёнкой",
  "Химчистка салона",
  "Полировка авто",
  "Тонировка авто",
  "Защитные покрытия",
  "Восстановление ЛКП",
  "Детейлинг двигателя",
  "Консультация / не знаю, что выбрать",
] as const;

const DEFAULT_BOOKING_SERVICE = "Оклейка авто плёнкой";

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
      }));
      setFieldErrors((prev) => ({ ...prev, model: "" }));
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
    if (name === "name" || name === "phone" || name === "model") {
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
      nextFieldErrors.model
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

    const message = [
      "Заявка на запись",
      `Телефон: ${form.phone.trim()}`,
      `Услуга: ${form.service}`,
      `Желаемая дата: ${form.date}`,
      `Автомобиль: ${carLine}`,
      form.comment.trim() ? `Комментарий: ${form.comment.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    setLoading(true);
    try {
      const response = await fetch("/api/send-to-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim() || "не указан",
          message,
        }),
      });

      if (!response.ok) {
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
          <Link href="/" className="breadcrumbs__link">
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
        <div className="container certificate-grid">
          <div className="certificate-info">
            <h2>Как проходит запись</h2>
            <ol>
              <li>Выбираете услугу и оставляете телефон.</li>
              <li>Менеджер связывается с вами в рабочее время.</li>
              <li>Согласовываем дату, объём работ и ориентир по цене.</li>
              <li>Приезжаете в студию на ул. П. Бровки, 6А.</li>
            </ol>

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
    </>
  );
}
