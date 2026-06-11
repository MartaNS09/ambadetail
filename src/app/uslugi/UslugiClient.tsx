"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, Car, Shield, Clock } from "lucide-react";
import "./page.scss";

// Все услуги
const allServices = [
  {
    title: "Химчистка салона",
    slug: "khimchistka-salona",
    image: "/images/services/salon.webp",
    description:
      "Профессиональная химчистка салона автомобиля. Удаление пятен, запахов, глубокая чистка всех поверхностей.",
  },
  {
    title: "Оклейка кузова антигравийной цветной плёнкой",
    slug: "okleyka-auto-plenkoy",
    image: "/images/services/vinil.webp",
    description:
      "Защита кузова антигравийной и цветной полиуретановой плёнкой. Надёжная защита ЛКП от сколов и царапин.",
  },
  {
    title: "Детейлинг двигателя",
    slug: "detailing-dvigatelya",
    image: "/images/services/detailing_dvigatelya.webp",
    description:
      "Профессиональная очистка моторного отсека, защита от коррозии, восстановление внешнего вида.",
  },
  {
    title: "Полировка авто",
    slug: "polirovka",
    image: "/images/services/polirovka_kuzova.webp",
    description:
      "Качественная полировка кузова автомобиля. Восстановление блеска, удаление царапин и дефектов ЛКП.",
  },
  {
    title: "Восстановление ЛКП",
    slug: "vosstanovlenie-lkp",
    image: "/images/services/bugatti.webp",
    description:
      "Восстановление лакокрасочного покрытия автомобиля. Удаление сколов, царапин, восстановление заводского вида.",
  },
  {
    title: "Тонировка авто",
    slug: "tonirovka",
    image: "/images/services/tonirovka.webp",
    description:
      "Профессиональная тонировка стёкол автомобиля. Защита от УФ-лучей, улучшение внешнего вида, комфорт в салоне.",
  },
  {
    title: "Защитные покрытия",
    slug: "zashhitnye-pokrytiya",
    image: "/images/services/lamba.webp",
    description:
      "Нанесение защитных покрытий и керамики на автомобиль. Долговременная защита кузова, гидрофобные свойства.",
  },
];

export default function UslugiClient() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    cars: 0,
    guarantee: 0,
    years: 0,
  });

  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible(true), 100);

    const animateCounts = () => {
      const targets = { cars: 500, guarantee: 100, years: 7 };
      const duration = 2000;
      const step = 20;
      const steps = duration / step;
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounts({
          cars: Math.min(Math.floor(targets.cars * progress), targets.cars),
          guarantee: Math.min(
            Math.floor(targets.guarantee * progress),
            targets.guarantee,
          ),
          years: Math.min(Math.floor(targets.years * progress), targets.years),
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, step);
    };

    animateCounts();

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <>
      <section className="uslugi-hero">
        <div className="uslugi-hero__bg">
          <Image
            src="/images/services/bugatti.webp"
            alt="Детейлинг студия Ambadetail"
            fill
            className="uslugi-hero__bg-image"
            priority
          />
          <div className="uslugi-hero__overlay"></div>
        </div>

        <div className="container">
          <div className="uslugi-hero__content">
            <h1 className="uslugi-hero__title">
              <div className="uslugi-hero__title-line">
                <span
                  className={`uslugi-hero__title-word ${
                    isVisible ? "uslugi-hero__title-word--visible" : ""
                  }`}
                  style={{ transitionDelay: "0.1s" }}
                >
                  Все
                </span>
                <span
                  className={`uslugi-hero__title-word ${
                    isVisible ? "uslugi-hero__title-word--visible" : ""
                  }`}
                  style={{ transitionDelay: "0.2s" }}
                >
                  услуги
                </span>
              </div>
              <div className="uslugi-hero__title-line">
                <span
                  className={`uslugi-hero__title-word ${
                    isVisible ? "uslugi-hero__title-word--visible" : ""
                  }`}
                  style={{ transitionDelay: "0.3s" }}
                >
                  детейлинг
                </span>
                <span
                  className={`uslugi-hero__title-word ${
                    isVisible ? "uslugi-hero__title-word--visible" : ""
                  }`}
                  style={{ transitionDelay: "0.4s" }}
                >
                  студии
                </span>
              </div>
            </h1>

            <p
              className={`uslugi-hero__subtitle ${
                isVisible ? "uslugi-hero__subtitle--visible" : ""
              }`}
            >
              Профессиональный уход за автомобилем в Витебске
            </p>

            <div
              className={`uslugi-hero__stats ${
                isVisible ? "uslugi-hero__stats--visible" : ""
              }`}
            >
              <div className="stat-card">
                <div className="stat-icon">
                  <Car size={28} />
                </div>
                <div className="stat-info">
                  <span className="stat-number">{counts.cars}+</span>
                  <span className="stat-label">Обслуженных авто</span>
                </div>
                <div className="stat-glow"></div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <Shield size={28} />
                </div>
                <div className="stat-info">
                  <span className="stat-number">{counts.guarantee}%</span>
                  <span className="stat-label">Гарантия качества</span>
                </div>
                <div className="stat-glow"></div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <Clock size={28} />
                </div>
                <div className="stat-info">
                  <span className="stat-number">{counts.years}</span>
                  <span className="stat-label">Лет на рынке</span>
                </div>
                <div className="stat-glow"></div>
              </div>
            </div>

            <div
              className={`uslugi-hero__buttons ${
                isVisible ? "uslugi-hero__buttons--visible" : ""
              }`}
            >
              <Link href="#services-list" className="btn btn--primary">
                Смотреть услуги
                <ArrowRight size={18} />
              </Link>
              <Link href="/contacts" className="btn btn--outline">
                Записаться сейчас
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="services-list" className="uslugi-grid-section">
        <div className="container">
          <div className="uslugi-grid">
            {allServices.map((service, index) => (
              <Link
                key={service.slug}
                href={`/uslugi/${service.slug}`}
                className="uslugi-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="uslugi-card__image-wrapper">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="uslugi-card__image"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="uslugi-card__overlay">
                    <div className="uslugi-card__content">
                      <h2 className="uslugi-card__title">{service.title}</h2>
                      <p className="uslugi-card__description">
                        {service.description}
                      </p>
                      <span className="uslugi-card__btn">
                        Подробнее
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
