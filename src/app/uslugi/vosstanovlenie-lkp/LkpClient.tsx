"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { PriceTable, BrandsTable } from "./tables";
import "./page.scss";

export default function LkpClient() {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const titleParts = ["Восстановление", "ЛКП"];

  const faqItems = [
    {
      question: "Что такое технология Refiller F5?",
      answer:
        "Refiller F5 — технология восстановления лакокрасочного покрытия, направленная на улучшение внешнего вида и устранение выраженных дефектов.",
    },
    {
      question: "Какие дефекты можно убрать при восстановлении ЛКП?",
      answer:
        "Чаще всего это потёртости, мелкие/средние царапины, помутнение, следы эксплуатации.",
    },
    {
      question: "Сколько времени занимает восстановление ЛКП?",
      answer:
        "Срок зависит от класса автомобиля и объёма работ. Обычно требуется от одного дня и более.",
    },
    {
      question: "Нужно ли потом наносить защитное покрытие?",
      answer:
        "После восстановления ЛКП рекомендуем защиту (керамика/воск/антидождь).",
    },
    {
      question: "От чего зависит цена восстановления ЛКП?",
      answer:
        "На стоимость влияет класс автомобиля, состояние ЛКП, наличие сложных дефектов.",
    },
    {
      question: "Даете ли гарантию на работы?",
      answer: "Да, предоставляем гарантию на выполненные работы.",
    },
  ];

  return (
    <>
      <h1 className="sr-only">
        Восстановление ЛКП автомобиля в Витебске по технологии Refiller F5
      </h1>
      <section
        className="service-hero"
        aria-label="Восстановление ЛКП в Витебске"
      >
        <div className="service-hero__bg">
          <Image
            src="/images/services/bugatti.webp"
            alt="Восстановление лакокрасочного покрытия автомобиля в Витебске"
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
                      className={`service-hero__title-letter ${isVisible ? "service-hero__title-letter--visible" : ""}`}
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
              Восстановление лакокрасочного покрытия по технологии Refiller F5.
            </p>
          </div>
        </div>
      </section>

      <div className="service-content">
        <div className="container">
          <div className="service-content__intro">
            <p className="service-content__intro-text">
              Восстановление ЛКП в <strong>Витебске</strong> по технологии{" "}
              <strong>Refiller F5</strong> помогает вернуть блеск и глубину
              цвета.
            </p>
          </div>
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Восстановление ЛКП автомобиля в Витебске по технологии Refiller F5
            </h2>
            <p>
              <strong>Восстановление ЛКП в Витебске</strong> – это
              профессиональное обновление лакокрасочного покрытия по технологии{" "}
              <strong>Refiller F5</strong>. Метод позволяет устранить сколы,
              царапины, потёртости и вернуть кузову насыщенный цвет и блеск без
              полной перекраски.
            </p>
            <p>
              Технология Refiller F5 применяется для восстановления заводского
              покрытия с сохранением его структуры. Подходит для автомобилей
              любых марок и возрастов.
            </p>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Преимущества восстановления ЛКП по Refiller F5
            </h2>
            <ul className="service-content__list">
              <li>
                <strong>Удаление до 90% царапин и сколов</strong> – без
                перекраски.
              </li>
              <li>
                <strong>Сохранение заводского ЛКП</strong> – не нарушается
                структура покрытия.
              </li>
              <li>
                <strong>Быстрый результат</strong> – работы занимают от 1 дня.
              </li>
              <li>
                <strong>Долговечность</strong> – результат сохраняется до 3 лет.
              </li>
              <li>
                <strong>Экономия бюджета</strong> – дешевле полной перекраски.
              </li>
            </ul>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Этапы восстановления ЛКП в Витебске
            </h2>
            <ol className="service-content__list">
              <li>
                <strong>Диагностика</strong> – оценка состояния ЛКП.
              </li>
              <li>
                <strong>Подготовка</strong> – мойка и обезжиривание.
              </li>
              <li>
                <strong>Применение Refiller F5</strong> – восстановление
                покрытия.
              </li>
              <li>
                <strong>Финишная обработка</strong> – шлифовка и полировка.
              </li>
              <li>
                <strong>Защита</strong> – нанесение керамического покрытия.
              </li>
            </ol>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Почему выбирают восстановление ЛКП в Ambadetail
            </h2>
            <ul className="service-content__list">
              <li>
                <strong>Сертифицированная технология Refiller F5</strong>.
              </li>
              <li>
                <strong>Опыт работы с премиальными автомобилями</strong>.
              </li>
              <li>
                <strong>Гарантия до 3 лет</strong> на восстановленное покрытие.
              </li>
              <li>
                <strong>Удобное расположение</strong> – Витебск, ул. П. Бровки,
                6А.
              </li>
            </ul>
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
              Цена восстановления ЛКП
            </h2>
            <PriceTable />
            <BrandsTable />
          </div>

          <div className="seo-content">
            <h2 className="seo-title">
              Восстановление ЛКП автомобиля по технологии Refiller F5 в Витебске
            </h2>
            <div className="seo-conclusion">
              <h4 className="seo-conclusion-title">
                Восстановление ЛКП в Витебске — выбор профессионалов
              </h4>
              <p className="seo-conclusion-final">
                <strong>
                  Для консультации и записи на восстановление ЛКП обращайтесь к
                  нашим администраторам.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
