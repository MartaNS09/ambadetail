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
  Instagram,
  Youtube,
} from "lucide-react";
import "./page.scss";

export default function ContactsPage() {
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
        // Отправка в Telegram
        const telegramRes = await fetch("/api/send-to-telegram", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        // Отправка на почту
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

  const socialLinks = [
    {
      icon: <Instagram size={20} />,
      name: "Instagram",
      href: "https://instagram.com/ambadetail",
      color: "#E4405F",
    },
    { name: "Telegram", href: "https://t.me/ambadetail", color: "#26A5E4" },
    { name: "ВКонтакте", href: "https://vk.com/ambadetail", color: "#0077FF" },
    {
      name: "TikTok",
      href: "https://tiktok.com/@ambadetail",
      color: "#000000",
    },
    {
      icon: <Youtube size={20} />,
      name: "YouTube",
      href: "https://youtube.com/@ambadetail",
      color: "#FF0000",
    },
  ];

  return (
    <>
      {/* Hero секция */}
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
                      className={`contacts-hero__title-letter ${isVisible ? "contacts-hero__title-letter--visible" : ""}`}
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
            {/* Форма обратной связи */}
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
                      className={`contacts-form__input ${errors.name ? "contacts-form__input--error" : ""}`}
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
                      className={`contacts-form__input ${errors.email ? "contacts-form__input--error" : ""}`}
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
                      className={`contacts-form__textarea ${errors.message ? "contacts-form__textarea--error" : ""}`}
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

            {/* Контактная информация */}
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

              {/* Социальные сети */}
              <div className="contacts-social">
                <h3 className="contacts-social__title">Мы в соцсетях</h3>
                <div className="contacts-social__links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contacts-social__link"
                      aria-label={social.name}
                    >
                      {social.icon || (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          {social.name === "Telegram" && (
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.02-.14-.05-.2-.07-.06-.18-.04-.25-.02-.11.02-1.87 1.19-5.28 3.49-.5.34-.95.51-1.36.5-.45-.01-1.31-.25-1.95-.46-.78-.25-1.4-.38-1.35-.81.03-.22.33-.45.92-.68 3.59-1.56 5.99-2.59 7.19-3.09 3.43-1.42 4.14-1.67 4.61-1.68.11 0 .35.02.51.16.12.11.16.26.18.38.02.12.02.28.01.42z" />
                          )}
                          {social.name === "ВКонтакте" && (
                            <path d="M15.07 2H8.93C3.86 2 2 3.86 2 8.93v6.14C2 20.14 3.86 22 8.93 22h6.14c5.07 0 6.93-1.86 6.93-6.93V8.93C22 3.86 20.14 2 15.07 2zm1.96 14.92c-.2.2-.46.3-.78.3h-1.51c-.52 0-.87-.13-1.05-.31-.21-.21-.38-.57-.53-.88-.2-.4-.38-.78-.61-1.04-.33-.38-.61-.44-.82-.44-.19 0-.39.07-.52.14-.16.1-.24.35-.24.77v1.37c0 .3-.08.44-.24.54-.16.1-.47.15-.92.15-.88 0-1.73-.37-2.38-.96-.87-.78-1.5-1.83-1.99-2.94-.54-1.23-.86-2.51-.89-3.12-.01-.2.06-.39.23-.54.14-.13.33-.2.53-.2h1.57c.29 0 .48.1.6.27.12.17.17.41.2.59.12.7.36 1.42.7 2.07.34.64.74 1.18 1.06 1.39.1.06.21.09.33.09.21 0 .35-.09.45-.27.12-.21.15-.49.15-.81v-2.1c-.01-.31-.08-.55-.21-.71-.11-.13-.18-.2-.36-.23-.06-.01-.1-.03-.13-.05-.11-.07-.12-.14-.14-.23-.02-.1.01-.19.09-.27.15-.15.5-.19.96-.19h1.33c.49 0 .63.11.73.31.09.2.08.66.08 1.07v.59c0 .1.01.2.06.28.05.08.13.12.22.12.15 0 .28-.07.41-.22.29-.32.59-.88.8-1.44.16-.43.28-.88.32-1.07.03-.13.08-.23.16-.29.08-.06.21-.09.38-.09h1.57c.29 0 .48.1.6.27.12.17.17.41.2.59.01.08.03.17.01.26-.05.33-.25 1.02-.58 1.8-.31.74-.77 1.55-1.17 2.09-.22.3-.44.57-.6.74-.11.13-.14.23-.08.36.05.12.18.21.33.33.31.24.69.61 1.02 1.05.35.47.61.99.75 1.45.08.28.04.47-.16.67z" />
                          )}
                          {social.name === "TikTok" && (
                            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v3.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.76-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.08.24-.13.49-.15.74-.07.82.13 1.66.49 2.4.31.64.86 1.17 1.55 1.44.47.18.98.23 1.48.13.55-.11 1.05-.39 1.45-.74.52-.45.85-1.07 1.01-1.73.19-.77.21-1.57.24-2.36.04-2.02.01-4.05.02-6.07.11-2.66.2-5.32.31-7.97z" />
                          )}
                        </svg>
                      )}
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Карта */}
          <div className="contacts-map">
            <h2 className="contacts-map__title">Как нас найти</h2>
            <div className="contacts-map__wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2362.456789012345!2d30.2046!3d55.1904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDExJzI1LjQiTiAzMMKwMTInMTYuNiJF!5e0!3m2!1sru!2sby!4v1234567890123!5m2!1sru!2sby"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта проезда в детейлинг студию Ambadetail в Витебске"
                aria-label="Карта с адресом: Витебск, улица П. Бровки, 6А"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
