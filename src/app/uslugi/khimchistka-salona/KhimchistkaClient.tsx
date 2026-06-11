"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { PriceTable, BrandsTable } from "./tables";
import "./page.scss";

export default function KhimchistkaClient() {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const titleParts = ["Химчистка", "салона"];

  const faqItems = [
    {
      question:
        "Сколько времени занимает химчистка салона и сколько сохнет салон?",
      answer:
        "Время зависит от загрязнений и объёма работ. После химчистки требуется время на сушку — обычно мы подбираем режим так, чтобы салон как можно быстрее был готов к эксплуатации.",
    },
    {
      question: "Удаляете ли запахи (табак, сырость, животные)?",
      answer:
        "Да, работаем с источником запаха и подбираем безопасные средства по материалам салона. Результат зависит от причины и давности запаха.",
    },
    {
      question: "Чистите ли потолок, багажник и ремни безопасности?",
      answer:
        "Да, выполняем чистку потолка, багажника и отдельных элементов. Итоговая стоимость зависит от класса авто и выбранного комплекса.",
    },
    {
      question: "Безопасно ли это для кожи и пластика?",
      answer:
        "Используем составы и технологии, рассчитанные на автомобильные материалы. Подбираем химию под тип кожи/текстиля и степень загрязнения.",
    },
    {
      question: "Нужно ли заранее подготавливать автомобиль?",
      answer:
        "Специальной подготовки не требуется. Достаточно убрать личные вещи из салона и багажника, чтобы мы могли качественно обработать все зоны.",
    },
    {
      question: "Можно ли сделать локальную химчистку (одно пятно/сиденье)?",
      answer:
        "Да, делаем локальную химчистку и удаление пятен. По фото/осмотру подскажем, что эффективнее — локально или комплексом.",
    },
  ];

  return (
    <>
      <section
        className="service-hero"
        aria-label="Химчистка салона автомобиля в Витебске"
      >
        <div className="service-hero__bg">
          <Image
            src="/images/services/salon.webp"
            alt="Химчистка салона автомобиля в Витебске"
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
                        transitionDelay: `${(partIndex * 12 + letterIndex) * 0.02}s`,
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              ))}
            </h1>
            <p className="service-hero__subtitle">
              Глубокая чистка салона автомобиля. Удаление пятен, запахов,
              бактерий. Озонирование и деликатная сухая чистка.
            </p>
          </div>
        </div>
      </section>

      <div className="service-content">
        <div className="container">
          <div className="service-content__intro">
            <p className="service-content__intro-text">
              Детейлинг‑химчистка салона в <strong>Витебске</strong> — это
              глубокая чистка сидений, ковров, потолка и пластика с аккуратной
              сушкой. Убираем пятна и запахи, возвращаем салону опрятный вид и
              комфорт.
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
              Цена химчистки автомобиля
            </h2>
            <PriceTable />
            <BrandsTable />
          </div>

          <div className="seo-content">
            <h2 className="seo-title">
              Детейлинг и химчистка автомобиля в Витебске
            </h2>
            <div className="seo-conclusion">
              <h4 className="seo-conclusion-title">
                Профессиональный детейлинг в Витебске — забота о вашем
                автомобиле и здоровье
              </h4>
              <p className="seo-conclusion-final">
                <strong>
                  Запишитесь на бесплатную диагностику и получите индивидуальный
                  расчет стоимости детейлинга для вашего автомобиля в Витебске.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
