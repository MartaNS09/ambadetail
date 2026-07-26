"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaTelegram,
  FaVk,
} from "react-icons/fa";
import "./page.scss";

export default function ContactsClient() {
  const [isVisible, setIsVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Введите ваше имя";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Введите ваш email";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Введите корректный email";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Введите сообщение";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        const telegramRes = await fetch("/api/send-to-telegram", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const emailRes = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (telegramRes.ok || emailRes.ok) {
          setFormSubmitted(true);
          setTimeout(() => setFormSubmitted(false), 5000);
          setFormData({ name: "", email: "", message: "" });
        } else {
          console.error("Ошибка отправки");
        }
      } catch (error) {
        console.error("Ошибка:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const titleParts = ["Контакты"];

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Адрес",
      content: "210020, г. Витебск, ул. П. Бровки, 6А",
      link: null,
    },
    {
      icon: <Phone size={24} />,
      title: "Телефон",
      content: "+375 29 223 03 22",
      link: "tel:+375292230322",
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      content: "info@ambadetail.by",
      link: "mailto:info@ambadetail.by",
    },
    {
      icon: <Clock size={24} />,
      title: "Режим работы",
      content: "Пн–Пт: 10:00–19:00\nСб–Вс: 10:00–17:00",
      link: null,
    },
  ];

  return (
    <>
      <h1 className="sr-only">
        Контакты детейлинг студии Ambadetail в Витебске — адрес, телефон, email,
        режим работы
      </h1>
      <section
        className="contacts-hero"
        aria-label="Контакты детейлинг студии Ambadetail в Витебске"
      >
        <div className="contacts-hero__bg">
          <Image
            src="/images/services/bugatti.webp"
            alt="Детейлинг студия Ambadetail в Витебске — свяжитесь с нами"
            fill
            priority
            className="contacts-hero__image"
            sizes="100vw"
            quality={85}
          />
          <div className="contacts-hero__overlay" aria-hidden="true"></div>
        </div>
        <div className="container contacts-hero__container">
          <div className="contacts-hero__content">
            <h1 className="contacts-hero__title">
              {titleParts.map((part, partIndex) => (
                <span
                  key={partIndex}
                  className="contacts-hero__title-word"
                  style={{ display: "inline-block", marginRight: "0.3em" }}
                >
                  {part.split("").map((letter, letterIndex) => (
                    <span
                      key={letterIndex}
                      className={`contacts-hero__title-letter ${
                        isVisible ? "contacts-hero__title-letter--visible" : ""
                      }`}
                      style={{
                        transitionDelay: `${(partIndex * 10 + letterIndex) * 0.02}s`,
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              ))}
            </h1>
            <p className="contacts-hero__subtitle">
              Свяжитесь с нами любым удобным способом. Мы всегда рады помочь!
            </p>
          </div>
        </div>
      </section>

      <div className="contacts-content">
        <div className="container">
          <div className="contacts-grid">
            <div className="contacts-form">
              <div className="contacts-form__header">
                <h2 className="contacts-form__title">Написать нам</h2>
                <p className="contacts-form__subtitle">
                  Заполните форму, и мы свяжемся с вами в ближайшее время
                </p>
              </div>

              {formSubmitted ? (
                <div className="contacts-form__success">
                  <CheckCircle size={48} />
                  <h3>Сообщение отправлено!</h3>
                  <p>Спасибо! Мы свяжемся с вами в ближайшее время.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contacts-form__form">
                  <div className="contacts-form__field">
                    <label htmlFor="name" className="contacts-form__label">
                      Имя <span className="contacts-form__required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={`contacts-form__input ${
                        errors.name ? "contacts-form__input--error" : ""
                      }`}
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <span className="contacts-form__error">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="contacts-form__field">
                    <label htmlFor="email" className="contacts-form__label">
                      Email <span className="contacts-form__required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`contacts-form__input ${
                        errors.email ? "contacts-form__input--error" : ""
                      }`}
                      placeholder="Введите ваш email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <span className="contacts-form__error">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="contacts-form__field">
                    <label htmlFor="message" className="contacts-form__label">
                      Сообщение{" "}
                      <span className="contacts-form__required">*</span>
                    </label>
                    <textarea
                      id="message"
                      className={`contacts-form__textarea ${
                        errors.message ? "contacts-form__textarea--error" : ""
                      }`}
                      rows={5}
                      placeholder="Опишите ваш вопрос или предложение..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && (
                      <span className="contacts-form__error">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="contacts-form__btn"
                    disabled={isLoading}
                  >
                    {isLoading ? "Отправка..." : "Отправить сообщение"}
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>

            <div className="contacts-info">
              <div className="contacts-info__header">
                <h2 className="contacts-info__title">
                  Предложить сотрудничество
                </h2>
                <p className="contacts-info__subtitle">
                  Мы открыты для деловых предложений и партнёрства
                </p>
              </div>

              <div className="contacts-info__list">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contacts-info__item">
                    <div className="contacts-info__icon">{item.icon}</div>
                    <div className="contacts-info__content">
                      <h3 className="contacts-info__item-title">
                        {item.title}
                      </h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="contacts-info__item-link"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="contacts-info__item-text">
                          {item.content.split("\n").map((line, i) => (
                            <span key={i}>
                              {line}
                              {i < item.content.split("\n").length - 1 && (
                                <br />
                              )}
                            </span>
                          ))}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="contacts-social">
                <h3 className="contacts-social__title">Мы в соцсетях</h3>
                <div className="contacts-social__links">
                  <a
                    href="https://www.instagram.com/ambassador__detailing?igsh=MXRwaXRtaGV4c2hlYg%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contacts-social__link"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={20} />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@ambassador___detailing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contacts-social__link"
                    aria-label="TikTok"
                  >
                    <FaTiktok size={20} />
                    <span>TikTok</span>
                  </a>
                  <a
                    href="https://youtube.com/@ambadetail"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contacts-social__link"
                    aria-label="YouTube"
                  >
                    <FaYoutube size={20} />
                    <span>YouTube</span>
                  </a>
                  <a
                    href="https://t.me/ambadetail"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contacts-social__link"
                    aria-label="Telegram"
                  >
                    <FaTelegram size={20} />
                    <span>Telegram</span>
                  </a>
                  <a
                    href="https://vk.com/ambadetail"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contacts-social__link"
                    aria-label="VK"
                  >
                    <FaVk size={20} />
                    <span>VK</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* НОВЫЙ БЛОК С КАРТОЙ — УЛУЧШЕННЫЙ */}
          <div className="contacts-map">
            <div className="contacts-map__header">
              <h2 className="contacts-map__title">Как нас найти</h2>
              <p className="contacts-map__subtitle">
                <span className="contacts-map__highlight">📍 Ориентир:</span>{" "}
                ул. П. Бровки, 6А, Витебск
              </p>
              <p className="contacts-map__subtitle">
                <span className="contacts-map__highlight">
                  ⏰ Режим работы:
                </span>{" "}
                Пн–Пт 10:00–19:00, Сб–Вс 10:00–17:00
              </p>
            </div>

            <div className="contacts-map__wrapper">
              <iframe
                src="https://yandex.by/map-widget/v1/?um=constructor%3ACTbx5Viq&source=constructor"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Карта проезда в детейлинг студию Ambadetail в Витебске"
                aria-label="Карта с адресом: Витебск, улица П. Бровки, 6А"
              />
            </div>

            {/* КНОПКИ ПОД КАРТОЙ */}
            <div className="contacts-map__actions">
              <a
                href="https://yandex.by/map-widget/v1/?um=constructor%3ACTbx5Viq&source=constructor"
                target="_blank"
                rel="noopener noreferrer"
                className="contacts-map__btn contacts-map__btn--outline"
                aria-label="Открыть карту в Яндексе"
              >
                <span className="contacts-map__btn-icon">🗺️</span>
                Открыть карту в Яндекс
              </a>
              <a
                href="https://yandex.by/maps/?rtext=~Витебск, улица Петруся Бровки, 6А&rtt=auto"
                target="_blank"
                rel="noopener noreferrer"
                className="contacts-map__btn contacts-map__btn--primary"
                aria-label="Проложить маршрут в Яндекс Картах"
              >
                <span className="contacts-map__btn-icon">🧭</span>
                Проложить маршрут
                <ArrowRight size={16} />
              </a>
            </div>

            {/* ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ */}
            <div className="contacts-map__info">
              <div className="contacts-map__info-item">
                <span className="contacts-map__info-icon">🚗</span>
                <span>Бесплатная парковка на территории</span>
              </div>
              <div className="contacts-map__info-item">
                <span className="contacts-map__info-icon">♿</span>
                <span>Доступ для маломобильных клиентов</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
