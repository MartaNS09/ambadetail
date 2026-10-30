"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { PriceTable, BrandsTable } from "./tables";
import { antikorFaqItems } from "./seo-data";
import InstallmentNote from "@/components/ui/InstallmentNote";
import "./page.scss";

export default function AntikorClient() {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const titleParts = ["Антикоррозийная", "обработка", "в", "Витебске"];

  return (
    <>
      <div className="breadcrumbs" aria-label="Навигационная цепочка">
        <div className="container">
          <Link href="/" prefetch={false} className="breadcrumbs__link">
            Главная
          </Link>
          <span className="breadcrumbs__separator">/</span>
          <Link href="/uslugi" prefetch={false} className="breadcrumbs__link">
            Услуги
          </Link>
          <span className="breadcrumbs__separator">/</span>
          <span className="breadcrumbs__current">Антикоррозийная обработка</span>
        </div>
      </div>

      <section
        className="service-hero"
        aria-label="Антикоррозийная обработка автомобиля в Витебске"
      >
        <div className="service-hero__bg">
          <Image
            src="/images/services/antikor.webp"
            alt="Антикоррозийная обработка автомобиля в Витебске — защита днища и арок"
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
              Антикор авто составом DINITROL. Стандарт от 1 300 Б̶, Премиум со
              снятием бамперов от 1 650 Б̶. Рассрочка до 5 месяцев.
            </p>
          </div>
        </div>
      </section>

      <div className="service-content">
        <div className="container">
          <InstallmentNote />
          <div className="service-content__intro">
            <p className="service-content__intro-text">
              <strong>Антикоррозийная обработка в Витебске</strong> в Ambadetail
              — защита кузова от соли, реагентов и влаги составом DINITROL.
              Стандарт от 1 300 Б̶, Премиум от 1 650 Б̶. Студия на ул. П.
              Бровки, 6А.
            </p>
            <p className="service-content__intro-text">
              <Link href="/zapisatsya">Записаться на антикор</Link>
              {" · "}
              <a href="tel:+375292230322">+375 29 223 03 22</a>
            </p>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Антикор авто в Витебске — защита от ржавчины
            </h2>
            <p>
              Реагенты и соль на дорогах Витебска быстрее всего бьют по днищу,
              порогам и аркам.{" "}
              <strong>Антикоррозийная обработка автомобиля</strong> составом
              DINITROL создаёт барьер между металлом и агрессивной средой:
              снимаем защиты для доступа, моем и сушим, наносим покрытие и
              собираем автомобиль с контролем качества.
            </p>
            <p>
              Два пакета: <strong>Стандарт</strong> и <strong>Премиум</strong>{" "}
              (со снятием двух бамперов и фар) — больше доступа к аркам и зонам
              коррозии.
            </p>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Состав обработки — DINITROL
            </h2>
            <ul className="service-content__list">
              <li>
                <strong>DINITROL</strong> — премиальная шведская линейка для
                днища, арок и защиты металла от влаги и реагентов.
              </li>
              <li>
                Подбираем объём работ под состояние кузова после осмотра.
              </li>
            </ul>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Пакеты антикоррозийной обработки
            </h2>
            <ul className="service-content__list">
              <li>
                <strong>Стандарт — от 1 300 Б̶</strong>: снятие подкрылков,
                защита днища, усилитель, термоэкраны, бак, выхлопная система.
              </li>
              <li>
                <strong>Премиум — от 1 650 Б̶</strong>: со снятием переднего и
                заднего бамперов — подкрылки, защита днища, усилитель,
                термоэкраны, бак, выхлопная система, фары.
              </li>
            </ul>
            <p>
              Финальную сумму согласуем после осмотра — до начала работ.
            </p>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Этапы антикоррозийной обработки в Витебске
            </h2>
            <ol className="service-content__list">
              <li>
                <strong>Осмотр и диагностика</strong> — состояние металла,
                выбор пакета и материалов.
              </li>
              <li>
                <strong>Разборка</strong> — подкрылки, защита днища, усилитель,
                термоэкраны; в Премиум — бамперы и фары.
              </li>
              <li>
                <strong>Мойка</strong> — днище и арки аппаратом высокого
                давления со спецхимией.
              </li>
              <li>
                <strong>Сушка</strong> — принудительная сушка в тёплом боксе,
                продувка полостей.
              </li>
              <li>
                <strong>Подготовка</strong> — зачистка очагов при необходимости,
                маскировка ЛКП.
              </li>
              <li>
                <strong>Обработка DINITROL</strong> — нанесение состава на
                днище, арки и открытые зоны.
              </li>
              <li>
                <strong>Сборка и контроль</strong> — установка защит и снятых
                элементов, проверка покрытия, документы.
              </li>
            </ol>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Почему антикор в Ambadetail
            </h2>
            <ul className="service-content__list">
              <li>
                <strong>Состав DINITROL</strong> — премиальная защита, не
                «безымянный» битум из канистры.
              </li>
              <li>
                <strong>Полный цикл</strong> — разборка, мойка, сушка,
                нанесение, сборка.
              </li>
              <li>
                <strong>Прозрачный расчёт</strong> — цена до старта работ после
                осмотра.
              </li>
              <li>
                <strong>Рассрочка до 5 месяцев</strong> без переплат на все
                пакеты.
              </li>
              <li>
                <strong>Удобная запись</strong> — онлайн или по телефону, адрес
                ул. П. Бровки, 6А.
              </li>
            </ul>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Другие услуги детейлинг студии в Витебске
            </h2>
            <ul className="service-content__related-links">
              <li>
                <Link href="/uslugi/okleyka-auto-plenkoy">
                  Оклейка авто в Витебске
                </Link>
              </li>
              <li>
                <Link href="/uslugi/polirovka">Полировка авто в Витебске</Link>
              </li>
              <li>
                <Link href="/uslugi/zashhitnye-pokrytiya">
                  Керамика для авто в Витебске
                </Link>
              </li>
              <li>
                <Link href="/uslugi/vosstanovlenie-lkp">
                  Восстановление ЛКП в Витебске
                </Link>
              </li>
              <li>
                <Link href="/uslugi/detailing-dvigatelya">
                  Детейлинг двигателя в Витебске
                </Link>
              </li>
            </ul>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Часто задаваемые вопросы об антикоре
            </h2>
            <div className="faq-accordion">
              {antikorFaqItems.map((item, index) => (
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
                    aria-controls={`faq-antikor-${index}`}
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
                    id={`faq-antikor-${index}`}
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
              Цена антикоррозийной обработки в Витебске
            </h2>
            <PriceTable />
            <BrandsTable />
          </div>

          <div className="seo-content">
            <h2 className="seo-title">
              Профессиональная антикоррозийная обработка в Витебске
            </h2>
            <p>
              <strong>Антикоррозийная обработка в Витебске</strong> в Ambadetail
              — антикор авто составом DINITROL. Пакет Стандарт от 1 300 Б̶,
              Премиум со снятием бамперов от 1 650 Б̶. Точная сумма после
              осмотра.
            </p>
            <p>
              Работаем Пн–Пт 10:00–19:00, Сб–Вс 10:00–17:00. Адрес: ул. П.
              Бровки, 6А. Можно совместить с{" "}
              <Link href="/uslugi/okleyka-auto-plenkoy">оклейкой PPF</Link> или{" "}
              <Link href="/uslugi/zashhitnye-pokrytiya">керамикой</Link> для
              комплексной защиты кузова.
            </p>
            <div className="seo-conclusion">
              <h4 className="seo-conclusion-title">
                Антикор авто в Витебске — запись в Ambadetail
              </h4>
              <p className="seo-conclusion-final">
                <strong>
                  Запишитесь на антикоррозийную обработку: ул. П. Бровки, 6А,
                  +375 29 223 03 22.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
