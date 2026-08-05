"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { PriceTable, BrandsTable } from "./tables";
import "./page.scss";

export default function PolirovkaClient() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // 🔥 ИЗМЕНЁННЫЙ ЗАГОЛОВОК — С "В ВИТЕБСКЕ"
  const titleParts = ["Полировка", "авто", "в", "Витебске"];

  return (
    <>
      <h1 className="sr-only">
        Полировка авто в Витебске — восстановление кузова, удаление царапин
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
          <span className="breadcrumbs__current">Полировка авто</span>
        </div>
      </div>

      <section
        className="service-hero"
        aria-label="Полировка автомобиля в Витебске"
      >
        <div className="service-hero__bg">
          <Image
            src="/images/services/polirovka_kuzova.webp"
            alt="Полировка кузова автомобиля в Витебске"
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
              Профессиональная полировка кузова. Удаление царапин, голограмм,
              возвращение зеркального блеска и насыщенного цвета.
            </p>
          </div>
        </div>
      </section>

      <div className="service-content">
        <div className="container">
          <div className="service-content__intro">
            <p className="service-content__intro-text">
              <strong>Полировка авто в Витебске</strong> — это профессиональное
              восстановление лакокрасочного покрытия.
            </p>
          </div>

          {/* 🔥 ГЛАВНАЯ СЕКЦИЯ — С "ПРОФЕССИОНАЛЬНАЯ" 1 РАЗ */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Полировка автомобиля в Витебске — восстановление блеска кузова
            </h2>
            <p>
              <strong>Полировка авто в Витебске</strong> – эффективный способ
              вернуть автомобилю первозданный блеск, удалить царапины,
              потёртости и голограммы. Наша студия предлагает{" "}
              <strong>профессиональную полировку кузова</strong> с
              использованием современных абразивных паст и полировальных машин.
              Восстанавливаем насыщенность цвета и зеркальный блеск ЛКП.
            </p>
            <p>
              Наши мастера работают с автомобилями любых марок и типов кузова.{" "}
              <strong>Детейлинг полировка</strong> позволяет устранить дефекты,
              возникшие в результате эксплуатации, неправильной мойки или
              воздействия реагентов. Результат превосходит ожидания — кузов
              выглядит как новый.
            </p>
          </div>

          {/* ПРЕИМУЩЕСТВА */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Преимущества полировки автомобиля в Ambadetail
            </h2>
            <ul className="service-content__list">
              <li>
                <strong>Удаление царапин и голограмм</strong> – возвращаем
                идеально гладкую поверхность.
              </li>
              <li>
                <strong>Восстановление цвета</strong> – глубокий насыщенный
                оттенок без помутнений.
              </li>
              <li>
                <strong>Защита от выгорания</strong> – полировка создаёт
                защитный слой от УФ-лучей.
              </li>
              <li>
                <strong>Долговременный эффект</strong> – результат сохраняется
                до 1 года.
              </li>
              <li>
                <strong>Подготовка к нанесению покрытий</strong> – идеальная
                база для керамики.
              </li>
            </ul>
          </div>

          {/* ЭТАПЫ */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Этапы полировки автомобиля в Витебске
            </h2>
            <ol className="service-content__list">
              <li>
                <strong>Диагностика ЛКП</strong> – оценка состояния, выявление
                дефектов.
              </li>
              <li>
                <strong>Мойка и обезжиривание</strong> – подготовка поверхности.
              </li>
              <li>
                <strong>Абразивная полировка</strong> – удаление глубоких
                царапин.
              </li>
              <li>
                <strong>Финишная полировка</strong> – создание зеркального
                блеска.
              </li>
              <li>
                <strong>Защитный слой</strong> – нанесение воска или керамики.
              </li>
            </ol>
          </div>

          {/* ПОЧЕМУ МЫ */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Почему выбирают полировку в Ambadetail
            </h2>
            <ul className="service-content__list">
              <li>
                <strong>Профессиональное оборудование</strong> – полировальные
                машины Rupes, Festool.
              </li>
              <li>
                <strong>Сертифицированные материалы</strong> – пасты 3M,
                Menzerna.
              </li>
              <li>
                <strong>Гарантия до 12 месяцев</strong> на выполненные работы.
              </li>
              <li>
                <strong>Удобное расположение в Витебске</strong> – ул. П.
                Бровки, 6А.
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
                <Link href="/uslugi/vosstanovlenie-lkp">
                  Восстановление ЛКП в Витебске
                </Link>
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

          {/* ТАБЛИЦЫ ЦЕН */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Цена полировки автомобиля в Витебске
            </h2>
            <PriceTable />
            <BrandsTable />
          </div>

          {/* SEO ТЕКСТ */}
          <div className="seo-content">
            <h2 className="seo-title">
              Профессиональная детейлинг полировка автомобиля в Витебске
            </h2>
            <div className="seo-conclusion">
              <h4 className="seo-conclusion-title">
                Профессиональная детейлинг полировка в Витебске — инвестиция в
                красоту и сохранность вашего авто
              </h4>
              <p className="seo-conclusion-final">
                <strong>
                  Запишитесь на бесплатную диагностику состояния ЛКП вашего
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
