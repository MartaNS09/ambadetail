"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  SunmaxTable,
  StekTable,
  LlumarTable,
  ColorFilmTable,
  BrandsTable,
} from "./tables";
import "./page.scss";

export default function OkleykaClient() {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(2);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const titleParts = ["Оклейка", "антигравийной", "плёнкой"];

  const faqItems = [
    {
      question:
        "Чем отличается прозрачная PPF от цветной полиуретановой пленки?",
      answer:
        "Обе пленки полиуретановые и защищают ЛКП. Прозрачная PPF сохраняет заводской цвет, а цветная полиуретановая пленка одновременно защищает кузов и меняет цвет автомобиля.",
    },
    {
      question: "Какие зоны лучше оклеить в первую очередь?",
      answer:
        "Чаще всего оклеивают зоны риска: капот, бампер, фары, зеркала, стойки и кромки дверей.",
    },
    {
      question: "Сколько времени занимает оклейка автомобиля плёнкой?",
      answer:
        "Срок зависит от объёма работ: частичная оклейка обычно занимает от 1 дня, полная — несколько дней.",
    },
    {
      question: "Нужно ли полировать кузов перед оклейкой?",
      answer:
        "Если есть выраженные дефекты, лёгкая полировка перед оклейкой улучшит внешний вид под плёнкой.",
    },
    {
      question: "Как ухаживать за плёнкой после оклейки?",
      answer:
        "Рекомендуем выдержать паузу после оклейки, затем использовать бережную мойку без абразивов.",
    },
    {
      question: "Останутся ли следы после снятия плёнки?",
      answer:
        "При корректном монтаже и снятии качественная плёнка обычно снимается без повреждения ЛКП.",
    },
    {
      question:
        "Когда выбрать цветную полиуретановую пленку вместо прозрачной?",
      answer:
        "Цветную полиуретановую пленку выбирают, когда нужна полная смена цвета с одновременной защитой ЛКП.",
    },
  ];

  return (
    <>
      <section
        className="service-hero"
        aria-label="Оклейка антигравийной плёнкой в Витебске"
      >
        <div className="service-hero__bg">
          <Image
            src="/images/services/vinil.webp"
            alt="Оклейка антигравийной плёнкой автомобиля в Витебске"
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
                <span key={partIndex} className="service-hero__title-word">
                  {part.split("").map((letter, letterIndex) => (
                    <span
                      key={letterIndex}
                      className={`service-hero__title-letter ${
                        isVisible ? "service-hero__title-letter--visible" : ""
                      }`}
                      style={{
                        transitionDelay: `${(partIndex * 15 + letterIndex) * 0.015}s`,
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              ))}
            </h1>
            <p className="service-hero__subtitle">
              Защита кузова автомобиля от сколов, царапин и агрессивной среды.
            </p>
          </div>
        </div>
      </section>

      <div className="service-content">
        <div className="container">
          <div className="service-content__intro">
            <p className="service-content__intro-text">
              Оклейка авто плёнкой в <strong>Витебске</strong>: защита кузова
              антигравийной (PPF) плёнкой и полная смена цвета цветной
              полиуретановой плёнкой.
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
              Цена оклейки автомобиля плёнкой
            </h2>
            <SunmaxTable />
            <StekTable />
            <LlumarTable />
            <ColorFilmTable />
            <BrandsTable />
          </div>

          <div className="seo-content">
            <h2 className="seo-title">
              Оклейка автомобиля защитной пленкой в Витебске
            </h2>
            <div className="seo-conclusion">
              <h4 className="seo-conclusion-title">
                Оклейка автомобиля защитной и цветной пленкой в Витебске
              </h4>
              <p className="seo-conclusion-final">
                <strong>
                  Для расчета стоимости и записи обращайтесь к нашим
                  администраторам.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
