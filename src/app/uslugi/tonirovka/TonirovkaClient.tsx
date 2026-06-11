"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { PriceTable, BrandsTable } from "./tables";
import "./page.scss";

export default function TonirovkaClient() {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const titleParts = ["Тонировка"];

  const faqItems = [
    {
      question: "Какая тонировка лучше — обычная или атермальная?",
      answer:
        "Обычная тонировка даёт затемнение и приватность, атермальная — сильнее снижает нагрев и бликуемость при более 'светлом' внешнем виде.",
    },
    {
      question: "Сколько времени занимает тонировка автомобиля?",
      answer:
        "Срок зависит от типа кузова и объёма работ. Обычно занимает от нескольких часов.",
    },
    {
      question: "Можно ли мыть автомобиль сразу после тонировки?",
      answer: "Рекомендуем выдержать паузу, чтобы плёнка полностью 'села'.",
    },
    {
      question: "Остаются ли пузыри после тонировки?",
      answer:
        "Небольшая 'влага' или точечные следы могут быть сразу после работ и обычно уходят по мере высыхания.",
    },
    {
      question: "Даете ли гарантию на тонировку?",
      answer:
        "Да, даём гарантию на работы и материалы. Условия зависят от выбранной плёнки.",
    },
    {
      question: "От чего зависит цена тонировки?",
      answer:
        "Цена зависит от класса автомобиля, комплекта стёкол, типа плёнки и сложности работ.",
    },
  ];

  return (
    <>
      <section
        className="service-hero"
        aria-label="Тонировка автомобиля в Витебске"
      >
        <div className="service-hero__bg">
          <Image
            src="/images/services/tonirovka.webp"
            alt="Тонировка стёкол автомобиля в Витебске"
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
              Качественная тонировка стёкол автомобиля. Защита от УФ-лучей,
              улучшение внешнего вида, конфиденциальность.
            </p>
          </div>
        </div>
      </section>

      <div className="service-content">
        <div className="container">
          <div className="service-content__intro">
            <p className="service-content__intro-text">
              Тонировка авто в <strong>Витебске</strong> — это комфорт в салоне,
              защита от солнца и аккуратный внешний вид.
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
              Цена тонировки автомобиля
            </h2>
            <PriceTable />
            <BrandsTable />
          </div>

          <div className="seo-content">
            <h2 className="seo-title">
              Профессиональная тонировка автомобиля в Витебске
            </h2>
            <div className="seo-conclusion">
              <h4 className="seo-conclusion-title">
                Профессиональная тонировка автомобилей в Витебске — комфорт,
                безопасность, стиль
              </h4>
              <p className="seo-conclusion-final">
                <strong>
                  Запишитесь на бесплатную консультацию по тонировке вашего
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
