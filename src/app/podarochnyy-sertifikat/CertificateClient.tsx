"use client";

import { FormEvent, useState, type ChangeEvent } from "react";
import Link from "next/link";
import { CheckCircle, Gift } from "lucide-react";
import {
  formatByRfPhone,
  isValidByRfPhone,
  PHONE_HINT,
} from "@/lib/phone";
import "./page.scss";

const NOMINALS = ["100", "200", "300", "500", "1000"];

const SERVICES = [
  "Любая услуга на сумму сертификата",
  "Химчистка салона",
  "Полировка авто",
  "Оклейка авто плёнкой",
  "Тонировка авто",
  "Защитные покрытия",
  "Восстановление ЛКП",
  "Детейлинг двигателя",
];

export default function CertificateClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    nominal: "300",
    customNominal: "",
    service: SERVICES[0],
    recipient: "",
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
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim()) {
      setError("Укажите имя и email.");
      return;
    }

    if (!isValidByRfPhone(form.phone)) {
      setError(
        "Укажите полный номер РБ (+375, 12 цифр) или РФ (+7, 11 цифр).",
      );
      return;
    }

    const amount =
      form.nominal === "custom" ? form.customNominal.trim() : form.nominal;

    if (!amount) {
      setError("Укажите номинал сертификата.");
      return;
    }

    const message = [
      "Заявка на подарочный сертификат",
      `Телефон: ${form.phone.trim()}`,
      `Номинал: ${amount} BYN`,
      `Услуга: ${form.service}`,
      form.recipient.trim() ? `Получатель: ${form.recipient.trim()}` : "",
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
          email: form.email.trim(),
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
          <span className="breadcrumbs__current">Подарочный сертификат</span>
        </div>
      </div>

      <section className="certificate-hero" aria-label="Подарочный сертификат">
        <div className="container certificate-hero__content">
          <p className="certificate-hero__eyebrow">
            <Gift size={18} aria-hidden="true" /> Ambadetail · Витебск
          </p>
          <h1 className="certificate-hero__title">
            Подарочный сертификат на детейлинг
          </h1>
          <p className="certificate-hero__subtitle">
            Сертификат на химчистку, полировку, оклейку плёнкой, тонировку и
            другие услуги студии. Оформляем на выбранный номинал или конкретную
            услугу.
          </p>
        </div>
      </section>

      <div className="certificate-page">
        <div className="container certificate-grid">
          <div className="certificate-info">
            <h2>Как это работает</h2>
            <ol>
              <li>Выбираете номинал или услугу и оставляете заявку.</li>
              <li>Мы подтверждаем заказ и способ получения.</li>
              <li>
                Выдаём сертификат в студии на ул. П. Бровки, 6А, либо
                согласуем электронный вариант.
              </li>
              <li>
                Получатель записывается на услугу и оплачивает сертификатом.
              </li>
            </ol>

            <h2>На что можно потратить</h2>
            <ul>
              <li>Химчистка салона</li>
              <li>Полировка кузова</li>
              <li>Оклейка авто плёнкой (PPF и винил)</li>
              <li>Тонировка по ГОСТ РБ и РФ</li>
              <li>Керамика и жидкое стекло</li>
              <li>Восстановление ЛКП и детейлинг двигателя</li>
            </ul>

            <h2>Условия</h2>
            <ul>
              <li>Номинал от 100 BYN, можно указать свою сумму.</li>
              <li>Срок действия — 12 месяцев с даты оформления.</li>
              <li>Сертификат не обменивается на деньги.</li>
              <li>
                Если услуга дороже номинала, разницу можно доплатить в студии.
              </li>
            </ul>

            <p className="certificate-info__note">
              Вопросы:{" "}
              <a href="tel:+375292230322">+375 29 223 03 22</a>, ул. П. Бровки,
              6А, Витебск.
            </p>
          </div>

          <div className="certificate-form">
            <h2>Заказать сертификат</h2>
            {submitted ? (
              <div className="certificate-form__success">
                <CheckCircle size={40} />
                <h3>Заявка отправлена</h3>
                <p>Администратор свяжется с вами и подтвердит оформление.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <label>
                  Ваше имя
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    required
                    autoComplete="name"
                  />
                </label>
                <label>
                  Телефон (РБ / РФ)
                  <input
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    value={form.phone}
                    onChange={onChange}
                    required
                    autoComplete="tel"
                    placeholder="+375 (__) ___-__-__"
                    maxLength={19}
                    aria-describedby="certificate-phone-hint"
                  />
                  <span
                    id="certificate-phone-hint"
                    className="certificate-form__hint"
                  >
                    {PHONE_HINT}
                  </span>
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    autoComplete="email"
                  />
                </label>
                <label>
                  Номинал, BYN
                  <select
                    name="nominal"
                    value={form.nominal}
                    onChange={onChange}
                  >
                    {NOMINALS.map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                    <option value="custom">Своя сумма</option>
                  </select>
                </label>
                {form.nominal === "custom" && (
                  <label>
                    Своя сумма, BYN
                    <input
                      name="customNominal"
                      value={form.customNominal}
                      onChange={onChange}
                      inputMode="numeric"
                      required
                    />
                  </label>
                )}
                <label>
                  Услуга
                  <select
                    name="service"
                    value={form.service}
                    onChange={onChange}
                  >
                    {SERVICES.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Имя получателя
                  <input
                    name="recipient"
                    value={form.recipient}
                    onChange={onChange}
                    placeholder="Необязательно"
                  />
                </label>
                <label>
                  Комментарий
                  <textarea
                    name="comment"
                    value={form.comment}
                    onChange={onChange}
                    rows={4}
                  />
                </label>
                {error && <p className="certificate-form__error">{error}</p>}
                <button type="submit" disabled={loading}>
                  {loading ? "Отправляем…" : "Оставить заявку"}
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
