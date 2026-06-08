"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import "./page.scss";

export default function ContactsPage() {
  const [isVisible, setIsVisible] = useState(false);

  // SEO: устанавливаем все метатеги как на старом сайте
  useEffect(() => {
    document.title =
      "Контакты детейлинг студии в Витебске | Ambadetail - Ambadetail";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Контакты Ambadetail в Витебске: адрес, телефон, время работы. Запись на оклейку плёнкой, восстановление ЛКП и химчистку салона.",
    );

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      "content",
      "контакты ambadetail, детейлинг витебск контакты, оклейка пленкой витебск, химчистка салона витебск, восстановление лкп витебск",
    );

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute(
      "href",
      "https://ambadetail.vercel.app/contacts",
    );

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute(
      "content",
      "Контакты детейлинг студии в Витебске | Ambadetail",
    );

    let ogDescription = document.querySelector(
      'meta[property="og:description"]',
    );
    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute(
      "content",
      "Контакты Ambadetail в Витебске: адрес, телефон, время работы. Запись на оклейку плёнкой, восстановление ЛКП и химчистку салона.",
    );

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement("meta");
      ogImage.setAttribute("property", "og:image");
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute(
      "content",
      "https://ambadetail.vercel.app/images/home1.jpg",
    );

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute("content", "https://ambadetail.vercel.app/contacts");

    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement("meta");
      twitterTitle.setAttribute("name", "twitter:title");
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute(
      "content",
      "Контакты детейлинг студии в Витебске | Ambadetail",
    );

    let twitterDescription = document.querySelector(
      'meta[name="twitter:description"]',
    );
    if (!twitterDescription) {
      twitterDescription = document.createElement("meta");
      twitterDescription.setAttribute("name", "twitter:description");
      document.head.appendChild(twitterDescription);
    }
    twitterDescription.setAttribute(
      "content",
      "Контакты Ambadetail в Витебске: адрес, телефон, время работы. Запись на оклейку плёнкой, восстановление ЛКП и химчистку салона.",
    );

    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement("meta");
      twitterImage.setAttribute("name", "twitter:image");
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute(
      "content",
      "https://ambadetail.vercel.app/images/home1.jpg",
    );
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const titleParts = ["Контакты"];

  return (
    <>
      <section
        className="contacts-hero"
        aria-label="Контакты детейлинг студии Ambadetail в Витебске"
      >
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
              Свяжитесь с нами любым удобным способом. Мы всегда рады ответить
              на ваши вопросы.
            </p>
          </div>
        </div>
      </section>

      <div className="contacts-content">
        <div className="container">
          <div className="contacts-grid">
            <div className="contacts-info">
              <div className="contacts-info__card contacts-info__card--address">
                <div className="contacts-info__icon">
                  <MapPin size={28} />
                </div>
                <h3 className="contacts-info__title">Адрес студии</h3>
                <p className="contacts-info__text">
                  210020, г. Витебск
                  <br />
                  ул. П. Бровки, 6А
                </p>
                <a
                  href="https://yandex.by/maps/-/CDqQnIUm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contacts-info__link"
                >
                  Открыть на карте
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className="contacts-info__card contacts-info__card--phone">
                <div className="contacts-info__icon">
                  <Phone size={28} />
                </div>
                <h3 className="contacts-info__title">Телефон</h3>
                <a href="tel:+375292230322" className="contacts-info__phone">
                  +375 29 223 03 22
                </a>
                <p className="contacts-info__text-small">
                  Работаем ежедневно с 10:00 до 19:00
                </p>
              </div>

              <div className="contacts-info__card contacts-info__card--email">
                <div className="contacts-info__icon">
                  <Mail size={28} />
                </div>
                <h3 className="contacts-info__title">Email</h3>
                <a
                  href="mailto:info@ambadetail.by"
                  className="contacts-info__email"
                >
                  info@ambadetail.by
                </a>
                <p className="contacts-info__text-small">
                  Отвечаем в течение 24 часов
                </p>
              </div>

              <div className="contacts-info__card contacts-info__card--hours">
                <div className="contacts-info__icon">
                  <Clock size={28} />
                </div>
                <h3 className="contacts-info__title">Режим работы</h3>
                <p className="contacts-info__text">
                  Пн–Пт: 10:00–19:00
                  <br />
                  Сб–Вс: 10:00–17:00
                </p>
              </div>
            </div>

            <div className="contacts-map">
              <iframe
                src="https://yandex.by/map-widget/v1/?um=constructor%3A5a3b5a3b5a3b5a3b5a3b5a3b5a3b5a3b&source=constructor"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Карта расположения детейлинг студии Ambadetail в Витебске"
              />
            </div>
          </div>

          <div className="contacts-cta">
            <h2 className="contacts-cta__title">Остались вопросы?</h2>
            <p className="contacts-cta__text">
              Заполните форму обратной связи, и наш менеджер свяжется с вами в
              ближайшее время.
            </p>
            <Link href="#form" className="contacts-cta__btn">
              Задать вопрос
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
