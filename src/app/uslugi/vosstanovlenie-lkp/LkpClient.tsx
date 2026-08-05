"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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

  // 🔥 ИЗМЕНЁННЫЙ ЗАГОЛОВОК — С "В ВИТЕБСКЕ"
  const titleParts = ["Восстановление", "ЛКП", "в", "Витебске"];

  const faqItems = [
    {
      question: "Что такое технология Refiller F5?",
      answer:
        "Refiller F5 — технология восстановления лакокрасочного покрытия, направленная на улучшение внешнего вида и устранение выраженных дефектов без полной перекраски.",
    },
    {
      question: "Какие дефекты можно убрать при восстановлении ЛКП?",
      answer:
        "Чаще всего это потёртости, мелкие/средние царапины, помутнение, следы эксплуатации, сколы и выцветание.",
    },
    {
      question: "Сколько времени занимает восстановление ЛКП?",
      answer:
        "Срок зависит от класса автомобиля и объёма работ. Обычно требуется от одного дня и более.",
    },
    {
      question: "Нужно ли потом наносить защитное покрытие?",
      answer:
        "После восстановления ЛКП рекомендуем защиту (керамика/воск/антидождь) для долговременного сохранения результата.",
    },
    {
      question: "От чего зависит цена восстановления ЛКП?",
      answer:
        "На стоимость влияет класс автомобиля, состояние ЛКП, наличие сложных дефектов и объём работ.",
    },
    {
      question: "Даете ли гарантию на работы?",
      answer: "Да, предоставляем гарантию на выполненные работы до 3 лет.",
    },
  ];

  return (
    <>
      <h1 className="sr-only">
        Восстановление ЛКП автомобиля в Витебске по технологии Refiller F5
      </h1>

      {/* ✅ ВИЗУАЛЬНЫЕ ХЛЕБНЫЕ КРОШКИ */}
      <div className="breadcrumbs" aria-label="Навигационная цепочка">
        <div className="container">
          <Link href="/" className="breadcrumbs__link">
            Главная
          </Link>
          <span className="breadcrumbs__separator">/</span>
          <Link href="/uslugi" className="breadcrumbs__link">
            Услуги
          </Link>
          <span className="breadcrumbs__separator">/</span>
          <span className="breadcrumbs__current">Восстановление ЛКП</span>
        </div>
      </div>

      <section
        className="service-hero"
        aria-label="Восстановление ЛКП в Витебске по технологии Refiller F5"
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
              Восстановление лакокрасочного покрытия по технологии Refiller F5.
              Удаление царапин, сколов, возвращение блеска.
            </p>
          </div>
        </div>
      </section>

      <div className="service-content">
        <div className="container">
          <div className="service-content__intro">
            <p className="service-content__intro-text">
              <strong>Восстановление ЛКП в Витебске</strong> по технологии{" "}
              <strong>Refiller F5</strong> — профессиональное обновление
              лакокрасочного покрытия без полной перекраски.
            </p>
          </div>

          {/* 🔥 ГЛАВНАЯ СЕКЦИЯ — С "ПРОФЕССИОНАЛЬНАЯ" 1 РАЗ */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Восстановление ЛКП автомобиля в Витебске по технологии Refiller F5
            </h2>
            <p>
              <strong>Восстановление ЛКП в Витебске</strong> – профессиональное
              обновление лакокрасочного покрытия по технологии{" "}
              <strong>Refiller F5</strong>. Наша студия предлагает{" "}
              <strong>профессиональное восстановление ЛКП</strong> с устранением
              сколов, царапин, потёртостей и возвращением кузову насыщенного
              цвета и блеска без полной перекраски.
            </p>
            <p>
              Технология Refiller F5 применяется для восстановления заводского
              покрытия с сохранением его структуры. Подходит для автомобилей
              любых марок и возрастов. Экономит бюджет и время по сравнению с
              полной перекраской.
            </p>
          </div>

          {/* ПРЕИМУЩЕСТВА */}
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

          {/* ЭТАПЫ */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Этапы восстановления ЛКП в Витебске
            </h2>
            <ol className="service-content__list">
              <li>
                <strong>Диагностика</strong> – оценка состояния ЛКП, выявление
                дефектов.
              </li>
              <li>
                <strong>Подготовка</strong> – мойка и обезжиривание поверхности.
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

          {/* ПОЧЕМУ МЫ */}
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

          {/* 🔥 ССЫЛКИ НА ДРУГИЕ УСЛУГИ — ВНУТРЕННЯЯ ПЕРЕЛИНКОВКА */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Другие услуги детейлинг студии в Витебске
            </h2>
            <ul className="service-content__related-links">
              <li>
                <Link href="/uslugi/okleyka-auto-plenkoy">
                  Оклейка авто плёнкой в Витебске
                </Link>
              </li>
              <li>
                <Link href="/uslugi/khimchistka-salona">
                  Химчистка салона в Витебске
                </Link>
              </li>
              <li>
                <Link href="/uslugi/polirovka">Полировка авто в Витебске</Link>
              </li>
              <li>
                <Link href="/uslugi/tonirovka">Тонировка в Витебске</Link>
              </li>
              <li>
                <Link href="/uslugi/zashhitnye-pokrytiya">
                  Защитные покрытия в Витебске
                </Link>
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Часто задаваемые вопросы о восстановлении ЛКП
            </h2>
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

          {/* ТАБЛИЦЫ ЦЕН */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Цена восстановления ЛКП в Витебске
            </h2>
            <PriceTable />
            <BrandsTable />
          </div>

          {/* SEO ТЕКСТ */}
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
                  нашим администраторам в Витебске.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
