"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { PriceTable, BrandsTable } from "./tables";
import "./page.scss";

export default function ZashchitaClient() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // 🔥 ИЗМЕНЁННЫЙ ЗАГОЛОВОК — С "В ВИТЕБСКЕ"
  const titleParts = ["Защитные", "покрытия", "в", "Витебске"];

  return (
    <>
      <h1 className="sr-only">
        Защитные покрытия для автомобиля в Витебске — керамика, жидкое стекло,
        антидождь
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
          <span className="breadcrumbs__current">Защитные покрытия</span>
        </div>
      </div>

      <section
        className="service-hero"
        aria-label="Защитные покрытия для автомобиля в Витебске"
      >
        <div className="service-hero__bg">
          <Image
            src="/images/services/lamba.webp"
            alt="Нанесение защитных покрытий на автомобиль в Витебске"
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
              Керамическое покрытие, жидкое стекло, антидождь. Долговременная
              защита кузова и стёкол от внешних воздействий.
            </p>
          </div>
        </div>
      </section>

      <div className="service-content">
        <div className="container">
          <div className="service-content__intro">
            <p className="service-content__intro-text">
              <strong>Защитные покрытия в Витебске</strong> — это
              профессиональное нанесение керамики, жидкого стекла и гидрофобных
              составов. Защищаем кузов, стёкла, диски и салон от внешних
              воздействий.
            </p>
          </div>

          {/* 🔥 ГЛАВНАЯ СЕКЦИЯ — С "ПРОФЕССИОНАЛЬНАЯ" 1 РАЗ */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Защитные покрытия для автомобиля в Витебске — надёжная защита
              кузова
            </h2>
            <p>
              <strong>Защитные покрытия для автомобиля в Витебске</strong> – это
              надёжная защита кузова и стёкол от внешних воздействий. Наша
              студия предлагает{" "}
              <strong>профессиональное нанесение керамического покрытия</strong>
              , <strong>жидкое стекло</strong> и{" "}
              <strong>гидрофобные составы</strong> для долговременной защиты
              ЛКП, стёкол и дисков.
            </p>
            <p>
              <strong>Керамическое покрытие автомобиля</strong> создаёт твёрдый
              защитный слой, устойчивый к царапинам, реагентам и УФ-лучам.{" "}
              <strong>Жидкое стекло</strong> придаёт кузову глубокий блеск и
              гидрофобные свойства.
            </p>
          </div>

          {/* ПРЕИМУЩЕСТВА */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Преимущества защитных покрытий в Ambadetail
            </h2>
            <ul className="service-content__list">
              <li>
                <strong>Твёрдая защита от царапин</strong> – керамика до 9H по
                шкале твёрдости.
              </li>
              <li>
                <strong>Гидрофобный эффект</strong> – вода и грязь не
                задерживаются.
              </li>
              <li>
                <strong>Защита от УФ-лучей</strong> – предотвращает выгорание
                краски.
              </li>
              <li>
                <strong>Долговечность</strong> – защита сохраняется до 3 лет.
              </li>
              <li>
                <strong>Лёгкий уход</strong> – стойкость к загрязнениям.
              </li>
            </ul>
          </div>

          {/* ЭТАПЫ */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Этапы нанесения защитных покрытий в Витебске
            </h2>
            <ol className="service-content__list">
              <li>
                <strong>Диагностика кузова</strong> – оценка состояния ЛКП.
              </li>
              <li>
                <strong>Подготовка поверхности</strong> – мойка, обезжиривание.
              </li>
              <li>
                <strong>Нанесение базового слоя</strong> – подготовка под
                покрытие.
              </li>
              <li>
                <strong>Нанесение защитного слоя</strong> – керамика/жидкое
                стекло.
              </li>
              <li>
                <strong>Полимеризация</strong> – сушка и проверка качества.
              </li>
            </ol>
          </div>

          {/* ПОЧЕМУ МЫ */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Почему выбирают защитные покрытия в Ambadetail
            </h2>
            <ul className="service-content__list">
              <li>
                <strong>Сертифицированные покрытия</strong> – KAVACA, Ceramic
                Pro, Gyeon.
              </li>
              <li>
                <strong>Опыт работы с премиальными авто</strong>.
              </li>
              <li>
                <strong>Гарантия до 3 лет</strong> на покрытия.
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

          {/* ТАБЛИЦЫ ЦЕН */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Цена защитного покрытия автомобиля в Витебске
            </h2>
            <PriceTable />
            <BrandsTable />
          </div>

          {/* SEO ТЕКСТ */}
          <div className="seo-content">
            <h2 className="seo-title">
              Защитные покрытия для автомобиля в Витебске
            </h2>
            <div className="seo-conclusion">
              <h4 className="seo-conclusion-title">
                Защитные покрытия для автомобиля в Витебске — современная защита
                и уход
              </h4>
              <p className="seo-conclusion-final">
                <strong>
                  Запишитесь на бесплатную консультацию и подбор защитного
                  покрытия для вашего автомобиля в Витебске.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
