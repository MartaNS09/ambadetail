"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import "./page.scss";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubtitleVisible, setIsSubtitleVisible] = useState(false);
  const [isButtonsVisible, setIsButtonsVisible] = useState(false);

  // ТОЛЬКО АНИМАЦИИ - метатеги УДАЛЕНЫ
  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible(true), 50);
    const timer2 = setTimeout(() => setIsSubtitleVisible(true), 300);
    const timer3 = setTimeout(() => setIsButtonsVisible(true), 500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Первые 2 карточки
  const firstRowServices = [
    {
      title: "Химчистка салона",
      slug: "khimchistka-salona",
      image: "/images/services/salon.webp",
      alt: "Профессиональная химчистка салона автомобиля в Витебске. Удаление пятен, запахов, глубокая чистка.",
    },
    {
      title: "Оклейка кузова антигравийной цветной плёнкой",
      slug: "okleyka-auto-plenkoy",
      image: "/images/services/vinil.webp",
      alt: "Оклейка кузова автомобиля антигравийной цветной защитной плёнкой в Витебске. Защита ЛКП от сколов и царапин.",
    },
  ];

  // Вторые 2 карточки
  const secondRowServices = [
    {
      title: "Детейлинг двигателя",
      slug: "detailing-dvigatelya",
      image: "/images/services/detailing_dvigatelya.webp",
      alt: "Профессиональный детейлинг двигателя автомобиля в Витебске. Очистка моторного отсека, защита от коррозии.",
    },
    {
      title: "Полировка авто",
      slug: "polirovka",
      image: "/images/services/polirovka_kuzova.webp",
      alt: "Качественная полировка кузова автомобиля в Витебске. Восстановление блеска, удаление царапин и дефектов ЛКП.",
    },
  ];

  // Последние 3 карточки
  const thirdRowServices = [
    {
      title: "Восстановление ЛКП",
      slug: "vosstanovlenie-lkp",
      image: "/images/services/bugatti.webp",
      alt: "Восстановление лакокрасочного покрытия автомобиля в Витебске. Удаление сколов, царапин, восстановление заводского вида.",
    },
    {
      title: "Тонировка авто",
      slug: "tonirovka",
      image: "/images/services/tonirovka.webp",
      alt: "Профессиональная тонировка стёкол автомобиля в Витебске. Защита от УФ-лучей, улучшение внешнего вида.",
    },
    {
      title: "Защитные покрытия",
      slug: "zashhitnye-pokrytiya",
      image: "/images/services/lamba.webp",
      alt: "Нанесение защитных покрытий и керамики на автомобиль в Витебске. Долговременная защита кузова.",
    },
  ];

  const titleBeforeVitebsk = "Детейлинг студия в";
  const vitebsk = "Витебске";
  const titleLettersBefore = titleBeforeVitebsk.split("");

  return (
    <>
      <section
        className="hero"
        aria-label="Промо-блок детейлинг студии Ambadetail в Витебске"
      >
        <div className="hero__bg"></div>
        <div className="hero__overlay"></div>
        <div className="container hero__container">
          <div className="hero__content">
            <h1 className="hero__title">
              {titleLettersBefore.map((letter, index) => (
                <span
                  key={`before-${index}`}
                  className={`hero__title-letter ${isVisible ? "hero__title-letter--visible" : ""}`}
                  style={{ transitionDelay: `${index * 0.02}s` }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
              <span className="hero__title-space"> </span>
              <span
                className={`hero__title-word ${isVisible ? "hero__title-word--visible" : ""}`}
                style={{
                  transitionDelay: `${titleLettersBefore.length * 0.02}s`,
                }}
              >
                {vitebsk}
              </span>
            </h1>
            <p
              className={`hero__subtitle ${isSubtitleVisible ? "hero__subtitle--visible" : ""}`}
            >
              Полный комплекс услуг по уходу за автомобилем: от химчистки салона
              до оклейки защитной плёнкой
            </p>
            <div
              className={`hero__buttons ${isButtonsVisible ? "hero__buttons--visible" : ""}`}
            >
              <Link
                href="#services"
                className="btn btn--primary"
                aria-label="Перейти к списку услуг"
              >
                Наши услуги
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contacts"
                className="btn btn--outline"
                aria-label="Перейти на страницу контактов"
              >
                Связаться
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="services"
        aria-labelledby="services-title"
      >
        <div className="container">
          <h2 id="services-title" className="section-title">
            Услуги детейлинг студии
          </h2>

          <div className="services__row">
            {firstRowServices.map((service, index) => (
              <Link
                key={index}
                href={`/uslugi/${service.slug}`}
                className="service-card service-card--large"
                style={{ animationDelay: `${index * 0.1}s` }}
                aria-label={`Подробнее об услуге: ${service.title}. ${service.alt}`}
              >
                <div className="service-card__image-wrapper">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="service-card__image"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={85}
                  />
                  <div className="service-card__overlay">
                    <div className="service-card__content">
                      <h3 className="service-card__title">{service.title}</h3>
                      <span className="service-card__btn" aria-hidden="true">
                        ПОДРОБНО
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="services__row">
            {secondRowServices.map((service, index) => (
              <Link
                key={index}
                href={`/uslugi/${service.slug}`}
                className="service-card service-card--medium"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                aria-label={`Подробнее об услуге: ${service.title}. ${service.alt}`}
              >
                <div className="service-card__image-wrapper">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="service-card__image"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={85}
                  />
                  <div className="service-card__overlay">
                    <div className="service-card__content">
                      <h3 className="service-card__title">{service.title}</h3>
                      <span className="service-card__btn" aria-hidden="true">
                        ПОДРОБНО
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="services__row services__row--three">
            {thirdRowServices.map((service, index) => (
              <Link
                key={index}
                href={`/uslugi/${service.slug}`}
                className="service-card service-card--small"
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                aria-label={`Подробнее об услуге: ${service.title}. ${service.alt}`}
              >
                <div className="service-card__image-wrapper">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="service-card__image"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={85}
                  />
                  <div className="service-card__overlay">
                    <div className="service-card__content">
                      <h3 className="service-card__title">{service.title}</h3>
                      <span className="service-card__btn" aria-hidden="true">
                        ПОДРОБНО
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="info-section" aria-labelledby="info-title">
        <div className="container">
          <div className="info-grid">
            <div className="info-card info-card--about">
              <h2 id="info-title" className="info-card__title">
                Детейлинг студия в Витебске — комплексный уход за автомобилем
              </h2>
              <p className="info-card__text">
                Ambadetail — это профессиональная детейлинг студия в Витебске,
                где ваш автомобиль получает полный спектр услуг: от химчистки
                салона и полировки кузова до оклейки защитной плёнкой и
                нанесения керамики. Детейлинг в Витебске с нами означает
                индивидуальный подход, современное оборудование и
                гарантированный результат.
              </p>
            </div>

            <div className="info-card info-card--advantages">
              <h3 className="info-card__subtitle">Почему выбирают нас</h3>
              <ul className="advantages-list">
                <li className="advantages-list__item">
                  <span className="advantages-list__icon" aria-hidden="true">
                    ✓
                  </span>
                  <span>Современное оборудование</span>
                </li>
                <li className="advantages-list__item">
                  <span className="advantages-list__icon" aria-hidden="true">
                    ✓
                  </span>
                  <span>Опытные мастера</span>
                </li>
                <li className="advantages-list__item">
                  <span className="advantages-list__icon" aria-hidden="true">
                    ✓
                  </span>
                  <span>Гарантия качества</span>
                </li>
                <li className="advantages-list__item">
                  <span className="advantages-list__icon" aria-hidden="true">
                    ✓
                  </span>
                  <span>Индивидуальный подход</span>
                </li>
              </ul>
              <p className="info-card__text-small">
                Клиенты обращаются в нашу студию детейлинга в Витебске за
                качественной химчисткой салона, восстановлением лакокрасочного
                покрытия, тонировкой и защитой кузова.
              </p>
            </div>

            <div className="info-card info-card--full">
              <h3 className="info-card__subtitle">
                Услуги детейлинг студии в Витебске
              </h3>
              <p className="info-card__text">
                В перечень наших услуг входят химчистка салона и двигателя,
                полировка кузова, восстановление ЛКП по технологии Refiller F5,
                оклейка антигравийной и цветной полиуретановой плёнкой,
                тонировка стёкол, нанесение керамики и защитных покрытий.
                Детейлинг студия в Витебске Ambadetail расположена по адресу ул.
                П. Бровки, 6А.
              </p>
            </div>

            <div className="info-card info-card--booking">
              <h3 className="info-card__subtitle">
                Запись в детейлинг студию Витебска
              </h3>
              <p className="info-card__text">
                Чтобы записаться на детейлинг в Витебске, позвоните по номеру{" "}
                <a
                  href="tel:+375292230322"
                  className="info-card__phone-link"
                  aria-label="Позвонить по телефону +375 29 223 03 22 для записи на детейлинг"
                >
                  +375 29 223 03 22
                </a>{" "}
                или перейдите в{" "}
                <Link
                  href="/contacts"
                  className="info-card__contacts-link"
                  aria-label="Перейти на страницу контактов детейлинг студии"
                >
                  раздел Контакты
                </Link>
                . Мы работаем{" "}
                <strong>Пн–Пт 10:00–19:00, Сб–Вс 10:00–17:00</strong>.
              </p>
              <p className="info-card__tagline">
                Ambadetail — ваша детейлинг студия в Витебске для ухода за
                автомобилем на любом этапе.
              </p>
              <Link
                href="/contacts"
                className="btn btn--primary"
                aria-label="Перейти к форме записи на детейлинг"
              >
                Записаться
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
