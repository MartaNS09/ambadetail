"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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

  const titleParts = ["Оклейка", "авто", "плёнкой", "в", "Витебске"];

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
    {
      question: "Сколько стоит оклейка капота в Витебске?",
      answer:
        "Стоимость зависит от размера капота и выбранной плёнки. Точную стоимость рассчитаем на консультации.",
    },
    {
      question: "Можно ли оклеить только фары?",
      answer:
        "Да, мы предлагаем оклейку фар защитной плёнкой — это защищает стекло от сколов и помутнения.",
    },
  ];

  return (
    <>
      <h1 className="sr-only">
        Оклейка авто плёнкой в Витебске — защита кузова PPF, винил, бронирование
      </h1>

      {/* ✅ ВИЗУАЛЬНЫЕ ХЛЕБНЫЕ КРОШКИ (для пользователей) */}
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
          <span className="breadcrumbs__current">Оклейка авто плёнкой</span>
        </div>
      </div>

      {/* HERO */}
      <section
        className="service-hero"
        aria-label="Оклейка авто плёнкой в Витебске — защита кузова PPF"
      >
        <div className="service-hero__bg">
          <Image
            src="/images/services/vinil.webp"
            alt="Оклейка авто плёнкой в Витебске — защита кузова автомобиля"
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
              PPF, винил, смена цвета.
            </p>
          </div>
        </div>
      </section>

      <div className="service-content">
        <div className="container">
          <div className="service-content__intro">
            <p className="service-content__intro-text">
              <strong>Оклейка авто плёнкой в Витебске</strong> — защита кузова
              антигравийной (PPF) плёнкой и полная смена цвета цветной
              полиуретановой плёнкой.
            </p>
          </div>

          {/* 🔥 ГЛАВНАЯ СЕКЦИЯ — С "ПРОФЕССИОНАЛЬНАЯ" 1 РАЗ */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Оклейка авто плёнкой в Витебске — надёжная защита и стиль
            </h2>
            <p>
              <strong>Оклейка авто плёнкой в Витебске</strong> — эффективный
              способ защитить лакокрасочное покрытие от сколов, царапин,
              химических реагентов и ультрафиолета. Наша студия предлагает{" "}
              <strong>профессиональную оклейку кузова PPF плёнкой</strong>, а
              также <strong>цветную полиуретановую плёнку</strong> для полной
              смены цвета автомобиля с сохранением блеска.
            </p>
            <p>
              Используем материалы ведущих брендов:{" "}
              <strong>Sunmax, XPEL, Llumar, Stek</strong>, которые обеспечивают
              долговечность, самовосстановление царапин и стойкость к выгоранию.{" "}
              <strong>Бронирование кузова плёнкой</strong> позволяет сохранить
              идеальное состояние авто даже при интенсивной эксплуатации в
              городских условиях Витебска.
            </p>
          </div>

          {/* ПРЕИМУЩЕСТВА */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Преимущества оклейки автомобиля защитной плёнкой
            </h2>
            <ul className="service-content__list">
              <li>
                <strong>Защита от сколов и царапин</strong> – плёнка толщиной до
                200 мкм поглощает удары камней и песка.
              </li>
              <li>
                <strong>Самовосстановление</strong> – мелкие царапины исчезают
                под воздействием тепла (солнце, горячая вода).
              </li>
              <li>
                <strong>Устойчивость к реагентам</strong> – не боится зимних
                реагентов, щелочей и кислот.
              </li>
              <li>
                <strong>Сохранение цвета</strong> – прозрачная PPF не желтеет,
                цветная плёнка даёт насыщенный оттенок.
              </li>
              <li>
                <strong>Долговечность</strong> – срок службы качественной плёнки
                достигает 5–7 лет.
              </li>
            </ul>
          </div>

          {/* БРЕНДЫ */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Плёнки для оклейки автомобиля в Витебске
            </h2>
            <ul className="service-content__brand-list">
              <li>
                <strong>Sunmax</strong> — надёжная защита, отличное соотношение
                цена/качество
              </li>
              <li>
                <strong>XPEL</strong> — премиальная защита, самовосстановление
                царапин
              </li>
              <li>
                <strong>Llumar</strong> — проверенная защита, долговечность
              </li>
              <li>
                <strong>Stek</strong> — инновационная защита, высокий блеск
              </li>
              <li>
                <strong>HEXIS</strong> — цветная полиуретановая плёнка, смена
                цвета
              </li>
            </ul>
          </div>

          {/* ЭТАПЫ */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Этапы оклейки автомобиля в Витебске
            </h2>
            <ol className="service-content__list">
              <li>
                <strong>Консультация</strong> – подбор плёнки под ваши задачи и
                бюджет.
              </li>
              <li>
                <strong>Подготовка кузова</strong> – мойка, обезжиривание, при
                необходимости лёгкая полировка.
              </li>
              <li>
                <strong>Раскрой материала</strong> – компьютерный раскрой или
                ручной по шаблонам.
              </li>
              <li>
                <strong>Оклейка</strong> – монтаж плёнки на капот, бампер,
                крылья, двери, крышу, фары, стойки.
              </li>
              <li>
                <strong>Сушка и контроль качества</strong> – проверка
                прилегания, устранение пузырей и складок.
              </li>
            </ol>
          </div>

          {/* ПОЧЕМУ МЫ */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Почему выбирают оклейку автомобиля в Ambadetail
            </h2>
            <ul className="service-content__list">
              <li>
                <strong>Опыт работы с автомобилями любых марок</strong> – от
                бюджетных до премиальных.
              </li>
              <li>
                <strong>Соблюдение технологии</strong> – используем оборудование
                и качественные материалы.
              </li>
              <li>
                <strong>Гарантия на работы</strong> – до 3 лет на монтаж и
                материалы.
              </li>
              <li>
                <strong>Удобное расположение в Витебске</strong> – ул. П.
                Бровки, 6А, бесплатная парковка.
              </li>
            </ul>
          </div>

          {/* ССЫЛКИ НА ДРУГИЕ УСЛУГИ */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Другие услуги детейлинг студии в Витебске
            </h2>
            <ul className="service-content__related-links">
              <li>
                <Link href="/uslugi/polirovka">Полировка авто в Витебске</Link>
              </li>
              <li>
                <Link href="/uslugi/khimchistka-salona">
                  Химчистка салона в Витебске
                </Link>
              </li>
              <li>
                <Link href="/uslugi/vosstanovlenie-lkp">
                  Восстановление ЛКП в Витебске
                </Link>
              </li>
              <li>
                <Link href="/uslugi/zashhitnye-pokrytiya">
                  Защитные покрытия в Витебске
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
              Часто задаваемые вопросы об оклейке авто плёнкой
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
              Цена оклейки автомобиля плёнкой в Витебске
            </h2>
            <SunmaxTable />
            <StekTable />
            <LlumarTable />
            <ColorFilmTable />
            <BrandsTable />
          </div>

          {/* SEO ТЕКСТ */}
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
                  Для расчета стоимости и записи на оклейку авто плёнкой в
                  Витебске обращайтесь к нашим администраторам.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
