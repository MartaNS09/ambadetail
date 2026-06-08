"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { PriceTable, BrandsTable } from "./tables";
import "./page.scss";

export default function ServicePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // SEO: устанавливаем все метатеги как на старом сайте
  useEffect(() => {
    document.title =
      "Детейлинг двигателя автомобиля в Витебске | Чистка мотора, мойка подкапотного пространства - Ambadetail";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Профессиональный детейлинг двигателя в Витебске. Безопасная чистка мотора, мойка подкапотного пространства, восстановление пластика и резины. Гарантия качества работ.",
    );

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      "content",
      "детейлинг двигателя Витебск, чистка двигателя авто, мойка мотора, чистка подкапотного пространства, мойка двигателя, чистка двигателя цена",
    );

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute(
      "href",
      "https://ambadetail.vercel.app/uslugi/detailing-dvigatelya",
    );

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute(
      "content",
      "Детейлинг двигателя автомобиля в Витебске | Чистка мотора, мойка подкапотного пространства",
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
      "Профессиональный детейлинг двигателя в Витебске. Безопасная чистка мотора, мойка подкапотного пространства, восстановление пластика и резины. Гарантия качества работ.",
    );

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement("meta");
      ogImage.setAttribute("property", "og:image");
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute(
      "content",
      "https://ambadetail.vercel.app/images/services/detailing_dvigatelya.webp",
    );

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute(
      "content",
      "https://ambadetail.vercel.app/uslugi/detailing-dvigatelya",
    );

    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement("meta");
      twitterTitle.setAttribute("name", "twitter:title");
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute(
      "content",
      "Детейлинг двигателя автомобиля в Витебске | Чистка мотора, мойка подкапотного пространства",
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
      "Профессиональный детейлинг двигателя в Витебске. Безопасная чистка мотора, мойка подкапотного пространства, восстановление пластика и резины. Гарантия качества работ.",
    );

    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement("meta");
      twitterImage.setAttribute("name", "twitter:image");
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute(
      "content",
      "https://ambadetail.vercel.app/images/services/detailing_dvigatelya.webp",
    );
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleFaqClick = (event: Event) => {
      const button = event.currentTarget as HTMLElement;
      const parent = button.closest(".seo-faq-item");
      if (parent) {
        parent.classList.toggle("open");
      }
    };

    const faqButtons = document.querySelectorAll(".seo-faq-question");
    faqButtons.forEach((button) => {
      button.addEventListener("click", handleFaqClick);
    });

    return () => {
      faqButtons.forEach((button) => {
        button.removeEventListener("click", handleFaqClick);
      });
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const titleParts = ["Детейлинг", "двигателя"];

  const faqItems = [
    {
      question: "Не вредно ли мыть двигатель?",
      answer:
        "При профессиональном подходе мойка двигателя абсолютно безопасна. Мы используем специальные средства, защищаем электронику, контролируем температуру и давление воды. Риск повреждений исключен.",
    },
    {
      question: "Сколько времени занимает детейлинг двигателя?",
      answer:
        "Время зависит от степени загрязнения: экспресс-чистка — 1,5-2 часа, стандартная — 3-4 часа, глубокая чистка — 4-6 часов, комплексный детейлинг — 6-8 часов.",
    },
    {
      question: "Можно ли мыть двигатель зимой?",
      answer:
        "Да, мы работаем круглый год. Зимой особенно важно удалять реагенты и соль. Мы проводим мойку в отапливаемом помещении, тщательно сушим все элементы.",
    },
    {
      question: "Что делать после детейлинга двигателя?",
      answer:
        "Первые 1-2 часа рекомендуется не эксплуатировать автомобиль для полной просушки. Далее — обычная эксплуатация. Мы даем рекомендации по поддержанию чистоты.",
    },
    {
      question: "Можно ли мыть гибридные и электрические автомобили?",
      answer:
        "Да, мы имеем опыт работы с гибридами и электромобилями. Используем специальные технологии и средства, безопасные для высоковольтной электроники.",
    },
    {
      question: "Даете ли вы гарантию на работы?",
      answer:
        "Да, мы предоставляем гарантию на выполненные работы. Если в течение гарантийного периода возникают проблемы, связанные с качеством чистки, мы устраняем их бесплатно.",
    },
  ];

  return (
    <>
      <section
        className="service-hero"
        aria-label="Детейлинг двигателя автомобиля в Витебске"
      >
        <div className="service-hero__bg">
          <Image
            src="/images/services/detailing_dvigatelya.webp"
            alt="Профессиональный детейлинг двигателя автомобиля в Витебске"
            fill
            priority
            className="service-hero__image"
            sizes="100vw"
            quality={85}
          />
          <div className="service-hero__overlay" aria-hidden="true"></div>
        </div>
        <div className="container service-hero__container">
          <div className="service-hero__content">
            <h1 className="service-hero__title">
              {titleParts.map((part, partIndex) => (
                <span
                  key={partIndex}
                  className="service-hero__title-word"
                  style={{ display: "inline-block", marginRight: "0.3em" }}
                >
                  {part.split("").map((letter, letterIndex) => (
                    <span
                      key={letterIndex}
                      className={`service-hero__title-letter ${isVisible ? "service-hero__title-letter--visible" : ""}`}
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
            <p className="service-hero__subtitle">
              Профессиональная чистка и защита подкапотного пространства.
              Удаление масляных пятен, грязи, реагентов с сохранением всех
              систем и узлов.
            </p>
          </div>
        </div>
      </section>

      <div className="service-content">
        <div className="container">
          <div className="service-content__intro">
            <p className="service-content__intro-text">
              <strong>Детейлинг двигателя</strong> в Витебске — это
              профессиональная очистка моторного отсека от масляных загрязнений,
              дорожной грязи и реагентов. Безопасно для электроники, резины и
              пластика. Продлевает срок службы двигателя.
            </p>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">Вопросы и ответы</h2>
            <div className="faq-accordion">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`faq-accordion__item ${openFaq === index ? "faq-accordion__item--open" : ""}`}
                >
                  <button
                    className="faq-accordion__button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openFaq === index}
                    aria-controls={`faq-content-${index}`}
                  >
                    <span className="faq-accordion__question">
                      {item.question}
                    </span>
                    <span className="faq-accordion__icon">
                      {openFaq === index ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </span>
                  </button>
                  <div
                    id={`faq-content-${index}`}
                    className="faq-accordion__content"
                    aria-hidden={openFaq !== index}
                  >
                    <div className="faq-accordion__answer">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Цена детейлинга двигателя
            </h2>
            <PriceTable />
            <BrandsTable />
          </div>

          <div className="seo-content">
            <h2 className="seo-title">
              Профессиональный детейлинг двигателя в Витебске
            </h2>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Что такое профессиональный детейлинг двигателя?
              </h3>
              <p>
                <span className="seo-highlight">Детейлинг двигателя</span> — это
                комплексная процедура глубокой очистки и восстановления
                подкапотного пространства автомобиля, включающая мойку
                двигателя, чистку всех узлов и агрегатов, а также защитную
                обработку пластиковых и резиновых элементов.
              </p>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Услуги детейлинга двигателя и подкапотного пространства
              </h3>
              <div className="seo-cards">
                <div className="seo-card">
                  <div className="seo-card-icon">🚿</div>
                  <h4 className="seo-card-title">Безопасная мойка двигателя</h4>
                  <p className="seo-card-text">
                    Профессиональная мойка с использованием щадящих средств и
                    технологий. Защита электроники, датчиков, разъемов.
                  </p>
                </div>
                <div className="seo-card">
                  <div className="seo-card-icon">✨</div>
                  <h4 className="seo-card-title">
                    Чистка и восстановление пластика
                  </h4>
                  <p className="seo-card-text">
                    Очистка пластиковых крышек, патрубков, кожухов.
                    Восстановление цвета, удаление желтизны и потускнения.
                  </p>
                </div>
                <div className="seo-card">
                  <div className="seo-card-icon">🔧</div>
                  <h4 className="seo-card-title">
                    Чистка металлических поверхностей
                  </h4>
                  <p className="seo-card-text">
                    Удаление коррозии, окислов, налета с металлических деталей.
                    Очистка радиатора, интеркулера, трубопроводов.
                  </p>
                </div>
                <div className="seo-card">
                  <div className="seo-card-icon">🛡️</div>
                  <h4 className="seo-card-title">Защитная обработка резины</h4>
                  <p className="seo-card-text">
                    Очистка и восстановление резиновых уплотнителей, патрубков,
                    сайлентблоков. Нанесение защитных составов.
                  </p>
                </div>
              </div>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Почему нельзя мыть двигатель самостоятельно?
              </h3>
              <div className="seo-alert">
                <strong className="seo-alert-title">
                  Риски самостоятельной мойки:
                </strong>
                <ul className="seo-alert-list">
                  <li>Повреждение электроники и датчиков</li>
                  <li>Короткое замыкание, выход из строя узлов</li>
                  <li>Попадание воды в цилиндры</li>
                  <li>Повреждение изоляции проводки</li>
                  <li>Коррозия металлических деталей</li>
                </ul>
              </div>
            </div>

            <div className="seo-conclusion">
              <h4 className="seo-conclusion-title">
                Профессиональный детейлинг двигателя в Витебске — забота о
                сердце вашего автомобиля
              </h4>
              <p>
                Двигатель — это сердце вашего автомобиля, и его чистота напрямую
                влияет на надежность, долговечность и безопасность эксплуатации.
              </p>
              <p className="seo-conclusion-final">
                <strong>
                  Запишитесь на бесплатную диагностику подкапотного пространства
                  и получите рекомендации по детейлингу двигателя вашего
                  автомобиля в Витебске. Позаботьтесь о надежности и
                  долговечности вашего авто!
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
