"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { PriceTable, BrandsTable } from "./tables";
import "./page.scss";

export default function DetailingClient() {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const titleParts = ["Детейлинг", "двигателя"];

  const faqItems = [
    {
      question: "Не вредно ли мыть двигатель?",
      answer:
        "При профессиональном подходе мойка двигателя абсолютно безопасна. Мы используем специальные средства, защищаем электронику, контролируем температуру и давление воды.",
    },
    {
      question: "Сколько времени занимает детейлинг двигателя?",
      answer:
        "Время зависит от степени загрязнения: экспресс-чистка — 1,5-2 часа, стандартная — 3-4 часа, глубокая чистка — 4-6 часов.",
    },
    {
      question: "Можно ли мыть двигатель зимой?",
      answer:
        "Да, мы работаем круглый год. Зимой особенно важно удалять реагенты и соль.",
    },
    {
      question: "Что делать после детейлинга двигателя?",
      answer:
        "Первые 1-2 часа рекомендуется не эксплуатировать автомобиль для полной просушки.",
    },
    {
      question: "Можно ли мыть гибридные и электрические автомобили?",
      answer:
        "Да, мы имеем опыт работы с гибридами и электромобилями. Используем специальные технологии.",
    },
    {
      question: "Даете ли вы гарантию на работы?",
      answer:
        "Да, мы предоставляем гарантию на выполненные работы. Если в течение гарантийного периода возникают проблемы, мы устраняем их бесплатно.",
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
                      className={`service-hero__title-letter ${
                        isVisible ? "service-hero__title-letter--visible" : ""
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
            <p className="service-hero__subtitle">
              Профессиональная чистка и защита подкапотного пространства.
              Удаление масляных пятен, грязи, реагентов.
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
              дорожной грязи и реагентов.
            </p>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">Вопросы и ответы</h2>
            <div className="faq-accordion">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`faq-accordion__item ${
                    openFaq === index ? "faq-accordion__item--open" : ""
                  }`}
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
            <div className="seo-conclusion">
              <h4 className="seo-conclusion-title">
                Профессиональный детейлинг двигателя в Витебске — забота о
                сердце вашего автомобиля
              </h4>
              <p className="seo-conclusion-final">
                <strong>
                  Запишитесь на бесплатную диагностику подкапотного пространства
                  и получите рекомендации по детейлингу двигателя вашего
                  автомобиля в Витебске.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
