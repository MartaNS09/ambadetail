"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Clock,
  MapPin,
  Phone,
  Mail,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import "./page.scss";

// Компонент анимированного счётчика
function AnimatedCounter({
  target,
  suffix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;
    const startValue = 0;
    const endValue = target;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(
        startValue + (endValue - startValue) * eased,
      );
      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, target, duration]);

  return (
    <span ref={elementRef} className="about-stats__value-number">
      {count}
      {suffix}
    </span>
  );
}

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [isMainAnimated, setIsMainAnimated] = useState(false);
  const [isImagesAnimated, setIsImagesAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const mainObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsMainAnimated(true);
          mainObserver.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    const imagesObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsImagesAnimated(true);
          imagesObserver.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (mainRef.current) mainObserver.observe(mainRef.current);
    if (imagesRef.current) imagesObserver.observe(imagesRef.current);

    return () => {
      mainObserver.disconnect();
      imagesObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const advantages = [
    {
      icon: <Sparkles size={28} />,
      title: "Современное оборудование",
      description:
        "Используем профессиональное оборудование ведущих мировых брендов для достижения идеального результата.",
      delay: 0,
    },
    {
      icon: <Star size={28} />,
      title: "Опытные мастера",
      description:
        "Наши специалисты регулярно проходят обучение и имеют многолетний опыт работы в детейлинге.",
      delay: 0.1,
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Гарантия качества",
      description:
        "Предоставляем официальную гарантию на все виды выполненных работ и использованные материалы.",
      delay: 0.2,
    },
    {
      icon: <Users size={28} />,
      title: "Индивидуальный подход",
      description:
        "Подбираем оптимальное решение для каждого автомобиля с учётом его особенностей и пожеланий клиента.",
      delay: 0.3,
    },
  ];

  const stats = [
    { value: 7, label: "лет опыта", icon: "🎯", suffix: "+" },
    { value: 1000, label: "довольных клиентов", icon: "😊", suffix: "+" },
    { value: 24, label: "поддержка", icon: "🛡️", suffix: "/7" },
    { value: 100, label: "гарантия", icon: "⭐", suffix: "%" },
  ];

  const titleParts = ["О", "нас"];

  return (
    <>
      {/* Hero секция */}
      <section
        className="about-hero"
        aria-label="О компании Ambadetail — детейлинг студия в Витебске"
      >
        <div className="about-hero__bg">
          <Image
            src="/images/services/lamba.webp"
            alt="Профессиональная детейлинг студия Ambadetail в Витебске"
            fill
            priority
            className="about-hero__image"
            sizes="100vw"
            quality={85}
          />
          <div className="about-hero__overlay" aria-hidden="true"></div>
        </div>
        <div className="container about-hero__container">
          <div className="about-hero__content">
            <h1 className="about-hero__title">
              {titleParts.map((part, partIndex) => (
                <span
                  key={partIndex}
                  className="about-hero__title-word"
                  style={{ display: "inline-block", marginRight: "0.3em" }}
                >
                  {part.split("").map((letter, letterIndex) => (
                    <span
                      key={letterIndex}
                      className={`about-hero__title-letter ${isVisible ? "about-hero__title-letter--visible" : ""}`}
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
            <p className="about-hero__subtitle">
              Профессиональная детейлинг студия в Витебске. Забота о вашем
              автомобиле на высшем уровне.
            </p>
          </div>
        </div>
      </section>

      <div className="about-content">
        <div className="container">
          {/* Основной блок о компании - выезжает слева */}
          <div className="about-main">
            <div
              ref={mainRef}
              className={`about-main__text ${isMainAnimated ? "about-main__text--animate" : ""}`}
            >
              <div className="about-main__badge" aria-hidden="true">
                <span className="about-main__badge-text">О компании</span>
              </div>
              <h2 className="about-main__title">
                Студия детейлинга в Витебске
              </h2>
              <h3 className="about-main__subtitle">
                <span className="about-main__subtitle-accent">Ambadetail</span>{" "}
                — профессиональный подход к каждому автомобилю
              </h3>
              <p className="about-main__description">
                Производим профессиональную, качественную детейлинг — химчистку
                салона вашего автомобиля самыми передовыми средствами.
              </p>
              <p className="about-main__description">
                Если Вас не удовлетворяет состояние Вашего транспортного
                средства, то обращайтесь к нам. Наша компания осуществляет
                детальный уход не только за автомобилями, но также за
                мотоциклами и катерами.
              </p>
              <Link href="/contacts" className="about-main__btn">
                Связаться с нами
                <ArrowRight size={18} />
              </Link>
            </div>
            <div
              ref={imagesRef}
              className={`about-main__images ${isImagesAnimated ? "about-main__images--animate" : ""}`}
            >
              <div className="about-main__images-grid">
                <div className="about-main__image-wrapper about-main__image-wrapper--small">
                  <Image
                    src="/images/about/about-1.webp"
                    alt="Процесс профессиональной химчистки салона автомобиля в студии Ambadetail в Витебске"
                    fill
                    className="about-main__image"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="about-main__image-overlay">
                    <span>Химчистка салона</span>
                  </div>
                </div>
                <div className="about-main__image-wrapper about-main__image-wrapper--small">
                  <Image
                    src="/images/about/about-2.webp"
                    alt="Процесс профессиональной полировки кузова автомобиля в детейлинг студии Ambadetail в Витебске"
                    fill
                    className="about-main__image"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="about-main__image-overlay">
                    <span>Полировка кузова</span>
                  </div>
                </div>
                <div className="about-main__image-wrapper about-main__image-wrapper--large">
                  <Image
                    src="/images/about/about-3.webp"
                    alt="Профессиональный детейлинг двигателя автомобиля в студии Ambadetail в Витебске"
                    fill
                    className="about-main__image"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="about-main__image-overlay">
                    <span>Детейлинг двигателя</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Статистика с анимированным счётчиком */}
          <div className="about-stats" ref={statsRef}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`about-stats__item ${isStatsVisible ? "about-stats__item--animate" : ""}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <span className="about-stats__icon" aria-hidden="true">
                  {stat.icon}
                </span>
                <div className="about-stats__value">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    duration={1500}
                  />
                </div>
                <span className="about-stats__label">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Наши преимущества */}
          <div className="about-advantages">
            <div className="about-advantages__header">
              <span className="about-advantages__badge">Почему мы?</span>
              <h2 className="about-advantages__title">
                Наши{" "}
                <span className="about-advantages__title-accent">
                  преимущества
                </span>
              </h2>
              <p className="about-advantages__subtitle">
                Мы создаём идеальный результат, который радует каждого клиента
              </p>
            </div>
            <div className="about-advantages__grid">
              {advantages.map((item, index) => (
                <div
                  key={index}
                  className="about-advantages__card"
                  style={{ animationDelay: `${item.delay}s` }}
                >
                  <div className="about-advantages__card-icon">{item.icon}</div>
                  <div className="about-advantages__card-content">
                    <h3 className="about-advantages__card-title">
                      {item.title}
                    </h3>
                    <p className="about-advantages__card-text">
                      {item.description}
                    </p>
                  </div>
                  <div className="about-advantages__card-shine"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Наши ценности */}
          <div className="about-values">
            <div className="about-values__content">
              <span className="about-values__badge">Наши принципы</span>
              <h2 className="about-values__title">
                Что делает нас{" "}
                <span className="about-values__title-accent">лучшими</span>
              </h2>
              <p className="about-values__text">
                В основе нашей работы лежат три главных принципа: качество,
                доверие и индивидуальный подход. Мы не просто чистим автомобили
                — мы возвращаем им первозданный вид и защищаем их на долгие
                годы.
              </p>
              <p className="about-values__text">
                Каждый автомобиль для нас уникален. Мы подбираем оптимальные
                методы и средства, учитывая особенности ЛКП, тип салона и
                пожелания клиента. Наша цель — превзойти ожидания и сделать
                каждого клиента постоянным.
              </p>
              <div className="about-values__list">
                <div className="about-values__list-item">
                  <span className="about-values__list-icon">✓</span>
                  <span>Только сертифицированные материалы</span>
                </div>
                <div className="about-values__list-item">
                  <span className="about-values__list-icon">✓</span>
                  <span>Современное немецкое оборудование</span>
                </div>
                <div className="about-values__list-item">
                  <span className="about-values__list-icon">✓</span>
                  <span>Официальная гарантия на все работы</span>
                </div>
              </div>
            </div>
            <div className="about-values__image">
              <div className="about-values__image-wrapper">
                <Image
                  src="/images/about/about-1.webp"
                  alt="Качественная защита лакокрасочного покрытия автомобиля в студии Ambadetail в Витебске"
                  fill
                  className="about-values__img"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="about-values__image-overlay">
                  <span>Защита LKP</span>
                </div>
              </div>
            </div>
          </div>

          {/* Контакты */}
          <div className="about-contacts">
            <h2 className="about-contacts__title">Свяжитесь с нами</h2>
            <div className="about-contacts__grid">
              <div className="about-contacts__card">
                <MapPin size={24} className="about-contacts__icon" />
                <h3 className="about-contacts__card-title">Адрес</h3>
                <p className="about-contacts__card-text">
                  210020, г. Витебск
                  <br />
                  ул. П. Бровки, 6А
                </p>
              </div>
              <div className="about-contacts__card">
                <Phone size={24} className="about-contacts__icon" />
                <h3 className="about-contacts__card-title">Телефон</h3>
                <a
                  href="tel:+375292230322"
                  className="about-contacts__card-link"
                >
                  +375 29 223 03 22
                </a>
              </div>
              <div className="about-contacts__card">
                <Mail size={24} className="about-contacts__icon" />
                <h3 className="about-contacts__card-title">Email</h3>
                <a
                  href="mailto:info@ambadetail.by"
                  className="about-contacts__card-link"
                >
                  info@ambadetail.by
                </a>
              </div>
              <div className="about-contacts__card">
                <Clock size={24} className="about-contacts__icon" />
                <h3 className="about-contacts__card-title">Режим работы</h3>
                <p className="about-contacts__card-text">
                  Пн–Пт: 10:00–19:00
                  <br />
                  Сб–Вс: 10:00–17:00
                </p>
              </div>
            </div>
          </div>
          {/* CTA Блок */}
          <div className="about-cta">
            <h2 className="about-cta__title">
              Готовы доверить нам свой автомобиль?
            </h2>
            <p className="about-cta__text">
              Запишитесь на бесплатную консультацию и получите индивидуальный
              расчёт стоимости работ.
            </p>
            <div className="about-cta__buttons">
              <Link
                href="/contacts"
                className="about-cta__btn about-cta__btn--primary"
              >
                Записаться
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+375292230322"
                className="about-cta__btn about-cta__btn--secondary"
                aria-label="Позвонить в студию Ambadetail"
              >
                <Phone size={18} />
                Позвонить
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
