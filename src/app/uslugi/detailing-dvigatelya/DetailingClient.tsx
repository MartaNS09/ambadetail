"use client";

import Image from "next/image";
import Link from "next/link";
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

  // 🔥 ИЗМЕНЁННЫЙ ЗАГОЛОВОК — С "В ВИТЕБСКЕ"
  const titleParts = ["Детейлинг", "двигателя", "в", "Витебске"];

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
      <h1 className="sr-only">
        Детейлинг двигателя в Витебске — профессиональная чистка и защита
        подкапотного пространства
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
          <span className="breadcrumbs__current">Детейлинг двигателя</span>
        </div>
      </div>

      <section
        className="service-hero"
        aria-label="Детейлинг двигателя автомобиля в Витебске"
      >
        <div className="service-hero__bg">
          <Image
            src="/images/services/detailing_dvigatelya.webp"
            alt="Детейлинг двигателя автомобиля в Витебске — чистка мотора"
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
              <strong>Детейлинг двигателя в Витебске</strong> — это
              профессиональная очистка моторного отсека от масляных загрязнений,
              дорожной грязи и реагентов.
            </p>
          </div>

          {/* 🔥 ГЛАВНАЯ СЕКЦИЯ — С "ПРОФЕССИОНАЛЬНАЯ" 1 РАЗ */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Детейлинг двигателя в Витебске — чистота и безопасность
            </h2>
            <p>
              <strong>Детейлинг двигателя в Витебске</strong> – это комплексная
              очистка моторного отсека от масляных пятен, грязи, пыли и дорожных
              реагентов. Наша студия предлагает{" "}
              <strong>профессиональную чистку двигателя</strong> с
              использованием безопасных составов и контролируемой подачи воды.
              Все электрические компоненты защищаются от влаги.
            </p>
            <p>
              <strong>Чистка двигателя автомобиля</strong> – это не только
              эстетика, но и раннее выявление утечек, коррозии и других проблем.
              Регулярный детейлинг продлевает срок службы мотора и сохраняет его
              стоимость при продаже.
            </p>
          </div>

          {/* ПРЕИМУЩЕСТВА */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Преимущества детейлинга двигателя в Ambadetail
            </h2>
            <ul className="service-content__list">
              <li>
                <strong>Безопасная мойка</strong> – защита электроники и
                проводки.
              </li>
              <li>
                <strong>Удаление масляных пятен</strong> – возвращение чистоты.
              </li>
              <li>
                <strong>Защита от коррозии</strong> – обработка антикоррозийными
                составами.
              </li>
              <li>
                <strong>Улучшение внешнего вида</strong> – подкапотное
                пространство как новое.
              </li>
              <li>
                <strong>Ранняя диагностика</strong> – обнаружение утечек и
                дефектов.
              </li>
            </ul>
          </div>

          {/* ЭТАПЫ */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Этапы детейлинга двигателя в Витебске
            </h2>
            <ol className="service-content__list">
              <li>
                <strong>Диагностика</strong> – оценка состояния моторного
                отсека.
              </li>
              <li>
                <strong>Защита электроники</strong> – герметизация уязвимых зон.
              </li>
              <li>
                <strong>Нанесение составов</strong> – специальные средства для
                очистки.
              </li>
              <li>
                <strong>Мойка и ополаскивание</strong> – удаление грязи и химии.
              </li>
              <li>
                <strong>Сушка и защита</strong> – обработка пластика и резины.
              </li>
            </ol>
          </div>

          {/* ПОЧЕМУ МЫ */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Почему выбирают детейлинг двигателя в Ambadetail
            </h2>
            <ul className="service-content__list">
              <li>
                <strong>Опыт работы с любыми двигателями</strong> – бензин,
                дизель, гибрид.
              </li>
              <li>
                <strong>Сертифицированные средства</strong> – безопасные для
                резины и пластика.
              </li>
              <li>
                <strong>Гарантия до 3 месяцев</strong> на выполненные работы.
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
                <Link href="/uslugi/vosstanovlenie-lkp">
                  Восстановление ЛКП в Витебске
                </Link>
              </li>
              <li>
                <Link href="/uslugi/tonirovka">Тонировка в Витебске</Link>
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Часто задаваемые вопросы о детейлинге двигателя
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
              Цена детейлинга двигателя в Витебске
            </h2>
            <PriceTable />
            <BrandsTable />
          </div>

          {/* SEO ТЕКСТ */}
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
