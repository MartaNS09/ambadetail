"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import BlogPreview from "@/components/BlogPreview";
import Reviews from "@/components/Reviews";
// import BookingForm from "@/components/forms/BookingForm";
import "./page.scss";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubtitleVisible, setIsSubtitleVisible] = useState(false);
  const [isButtonsVisible, setIsButtonsVisible] = useState(false);

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

  const firstRowServices = [
    {
      title: "Химчистка салона",
      slug: "khimchistka-salona",
      image: "/images/services/salon.webp",
      alt: "Профессиональная химчистка салона автомобиля в Витебске. Удаление пятен, запахов, глубокая чистка.",
    },
    {
      title: "Оклейка авто плёнкой",
      slug: "okleyka-auto-plenkoy",
      image: "/images/services/vinil.webp",
      alt: "Оклейка кузова автомобиля антигравийной цветной защитной плёнкой в Витебске. Защита ЛКП от сколов и царапин.",
    },
  ];

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
              {/* Скрытый текст для поисковиков */}
              <span className="sr-only">
                Детейлинг студия Ambadetail в Витебске — полировка, химчистка,
                оклейка пленкой и защитные покрытия
              </span>

              {/* Анимированные буквы для пользователей */}
              <span aria-hidden="true">
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
              </span>
            </h1>

            {/* ПОДЗАГОЛОВОК */}
            <p
              className={`hero__subtitle ${isSubtitleVisible ? "hero__subtitle--visible" : ""}`}
            >
              <strong>Профессиональный детейлинг в Витебске</strong> —&nbsp;
              <span className="hero__subtitle-highlight">химчистка салона</span>
              ,&nbsp;
              <span className="hero__subtitle-highlight">полировка кузова</span>
              ,&nbsp;
              <span className="hero__subtitle-highlight">
                оклейка антигравийной пленкой
              </span>
              &nbsp; и&nbsp;
              <span className="hero__subtitle-highlight">
                защитные покрытия
              </span>
              &nbsp; для вашего автомобиля. Работаем в Витебске ежедневно.
            </p>

            {/* КНОПКИ + БЛОК С АДРЕСОМ */}
            <div className="hero__bottom-row">
              <div className="hero__buttons-wrapper">
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

                {/* Блок с адресом */}
                <div className="hero__info-block">
                  <div className="hero__info-item">
                    <span className="hero__info-icon">📍</span>
                    <span>ул. П. Бровки, 6А</span>
                  </div>
                  <div className="hero__info-item">
                    <span className="hero__info-icon">⏰</span>
                    <span>10:00–19:00</span>
                  </div>
                  <div className="hero__info-item">
                    <span className="hero__info-icon">📞</span>
                    <a href="tel:+375292230322" className="hero__info-phone">
                      +375 29 223 03 22
                    </a>
                  </div>
                </div>
              </div>
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
                      <h2 className="service-card__title">{service.title}</h2>
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
                      <h2 className="service-card__title">{service.title}</h2>
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
                      <h2 className="service-card__title">{service.title}</h2>
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
      {/* Блок "О нас" на главной */}
      <section className="about-home" aria-labelledby="about-home-title">
        <div className="container">
          <div className="about-home__content">
            <div className="about-home__text">
              <span className="about-home__badge">О нас</span>
              <h2 id="about-home-title" className="about-home__title">
                Профессиональная детейлинг студия в{" "}
                <span className="about-home__title-accent">Витебске</span>
              </h2>
              <p className="about-home__description">
                Ambadetail — это команда профессионалов, которая уже более 7 лет
                занимается детейлингом автомобилей в Витебске. Мы используем
                современное оборудование и сертифицированные материалы для
                достижения идеального результата.
              </p>
              <p className="about-home__description">
                Наши мастера регулярно проходят обучение и знают всё о
                восстановлении ЛКП, химчистке салона, оклейке плёнкой и защитных
                покрытиях. Мы гарантируем качество каждой работы и
                индивидуальный подход к каждому клиенту.
              </p>
              <Link href="/about" className="about-home__btn">
                Узнать больше
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="about-home__image">
              <div className="about-home__image-wrapper">
                <Image
                  src="/images/about/about-1.webp"
                  alt="Детейлинг студия Ambadetail в Витебске"
                  width={500}
                  height={400}
                  className="about-home__img"
                />
                <div className="about-home__image-overlay">
                  <span>7+ лет опыта</span>
                </div>
              </div>
            </div>
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
                Наша <strong>детейлинг студия в Витебске</strong> предлагает
                полный комплекс услуг для вашего автомобиля.
                <strong>Химчистка салона в Витебске</strong> от Ambadetail — это
                удаление пятен, запахов и бактерий с сохранением качества
                материалов. Мы используем профессиональное оборудование и
                безопасные составы для всех типов обивки: ткань, кожа,
                алькантара.
              </p>
              <p className="info-card__text">
                <strong>Полировка кузова в Витебске</strong> восстанавливает
                блеск, убирает царапины и голограммы.
                <strong>Оклейка авто плёнкой в Витебске</strong> защищает ЛКП от
                сколов, реагентов и УФ-лучей.
                <strong>Тонировка в Витебске</strong> — это комфорт, защита от
                солнца и приватность.
              </p>
              <p className="info-card__text">
                <strong>Детейлинг двигателя в Витебске</strong> продлевает срок
                службы мотора, а{" "}
                <strong>керамическое покрытие в Витебске</strong> сохраняет
                кузов на долгие годы.
                <strong>Восстановление ЛКП в Витебске</strong> по технологии
                Refiller F5 возвращает автомобилю заводской вид без перекраски.
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

            {/* <div className="info-card info-card--full">
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
            </div> */}
            <div className="info-card info-card--full">
              <h3 className="info-card__subtitle">
                Услуги детейлинг студии в Витебске
              </h3>
              <p className="info-card__text">В перечень наших услуг входят:</p>
              <ul className="info-card__services-list">
                <li>
                  <Link
                    href="/uslugi/khimchistka-salona"
                    className="info-card__service-link"
                  >
                    <strong>Химчистка салона</strong>
                  </Link>
                  — глубокая чистка всех поверхностей, удаление пятен и запахов.
                </li>
                <li>
                  <Link
                    href="/uslugi/polirovka"
                    className="info-card__service-link"
                  >
                    <strong>Полировка кузова</strong>
                  </Link>
                  — восстановление блеска, удаление царапин и голограмм.
                </li>
                <li>
                  <Link
                    href="/uslugi/okleyka-auto-plenkoy"
                    className="info-card__service-link"
                  >
                    <strong>Оклейка антигравийной плёнкой</strong>
                  </Link>
                  — защита ЛКП от сколов и реагентов, смена цвета.
                </li>
                <li>
                  <Link
                    href="/uslugi/tonirovka"
                    className="info-card__service-link"
                  >
                    <strong>Тонировка</strong>
                  </Link>
                  — атермальная защита, комфорт, приватность.
                </li>
                <li>
                  <Link
                    href="/uslugi/detailing-dvigatelya"
                    className="info-card__service-link"
                  >
                    <strong>Детейлинг двигателя</strong>
                  </Link>
                  — очистка и защита подкапотного пространства.
                </li>
                <li>
                  <Link
                    href="/uslugi/vosstanovlenie-lkp"
                    className="info-card__service-link"
                  >
                    <strong>Восстановление ЛКП</strong>
                  </Link>
                  — технология Refiller F5, заводской вид без перекраски.
                </li>
                <li>
                  <Link
                    href="/uslugi/zashhitnye-pokrytiya"
                    className="info-card__service-link"
                  >
                    <strong>Защитные покрытия</strong>
                  </Link>
                  — керамика, жидкое стекло, гидрофобная защита.
                </li>
              </ul>
              <p className="info-card__text">
                <strong>Детейлинг студия в Витебске</strong> Ambadetail
                расположена по адресу
                <strong>ул. П. Бровки, 6А</strong>. Мы работаем ежедневно и ждём
                вас на профессиональный уход за автомобилем.
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
      <BlogPreview />
      <Reviews />
    </>
  );
}
