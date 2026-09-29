"use client";

import { FormEvent, useMemo, useState, type ChangeEvent } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CalendarCheck, CheckCircle } from "lucide-react";
import {
  formatByRfPhone,
  isValidByRfPhone,
  PHONE_HINT,
} from "@/lib/phone";
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

export default function BookingClient() {
  const searchParams = useSearchParams();
  const initialService = useMemo(
    () => resolveService(searchParams.get("service")),
    [searchParams],
  );

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({ name: "", phone: "" });
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: initialService,
    date: "",
    car: "",
    comment: "",
  });

  const onChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "phone" ? formatByRfPhone(value) : value,
    }));
    if (name === "name" || name === "phone") {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError("");

    const nextFieldErrors = { name: "", phone: "" };
    if (!form.name.trim()) {
      nextFieldErrors.name = "Укажите имя.";
    }
    if (!form.phone.trim()) {
      nextFieldErrors.phone = "Укажите телефон.";
    } else if (!isValidByRfPhone(form.phone)) {
      nextFieldErrors.phone =
        "Укажите полный номер РБ (+375, 12 цифр) или РФ (+7, 11 цифр).";
    }
    setFieldErrors(nextFieldErrors);

    if (nextFieldErrors.name || nextFieldErrors.phone) {
      setError("Имя и телефон обязательны.");
      return;
    }

    const message = [
      "Заявка на запись",
      `Телефон: ${form.phone.trim()}`,
      `Услуга: ${form.service}`,
      form.date ? `Желаемая дата: ${form.date}` : "",
      form.car.trim() ? `Автомобиль: ${form.car.trim()}` : "",
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
                  Ваше имя
                  <span className="certificate-form__required" aria-hidden="true">
                    *
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
                  Телефон (РБ / РФ)
                  <span className="certificate-form__required" aria-hidden="true">
                    *
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
                  Желаемая дата
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={onChange}
                  />
                </label>
                <label>
                  Автомобиль
                  <input
                    name="car"
                    value={form.car}
                    onChange={onChange}
                    placeholder="Марка и модель, необязательно"
                  />
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
