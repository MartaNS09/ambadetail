"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Home, AlertTriangle } from "lucide-react";
import "./not-found.scss";

export default function NotFound() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Hero секция с role="alert" для скринридеров */}
      <section
        className="notfound-hero"
        aria-labelledby="notfound-title"
        role="alert"
      >
        <div className="notfound-hero__bg">
          <div className="notfound-hero__overlay" aria-hidden="true"></div>
        </div>
        <div className="container notfound-hero__container">
          <div className="notfound-hero__content">
            <div
              className={`notfound-hero__code ${isVisible ? "notfound-hero__code--visible" : ""}`}
              aria-hidden="true"
            >
              <span className="notfound-hero__code-digit">4</span>
              <span className="notfound-hero__code-digit">
                <AlertTriangle size={80} className="notfound-hero__code-icon" />
              </span>
              <span className="notfound-hero__code-digit">4</span>
            </div>
            <h1
              id="notfound-title"
              className={`notfound-hero__title ${isVisible ? "notfound-hero__title--visible" : ""}`}
            >
              Страница не найдена
            </h1>
            <p
              className={`notfound-hero__subtitle ${isVisible ? "notfound-hero__subtitle--visible" : ""}`}
              aria-live="polite"
            >
              К сожалению, страница, которую вы ищете, не существует или была
              перемещена.
            </p>
            <div
              className={`notfound-hero__buttons ${isVisible ? "notfound-hero__buttons--visible" : ""}`}
            >
              <Link
                href="/"
                className="btn btn--primary"
                aria-label="Вернуться на главную страницу"
              >
                <Home size={18} aria-hidden="true" />
                На главную
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                href="/contacts"
                className="btn btn--outline"
                aria-label="Перейти на страницу контактов"
              >
                Связаться с нами
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Рекомендуемые страницы */}
      <section
        className="notfound-suggestions"
        aria-labelledby="suggestions-title"
      >
        <div className="container">
          <h2 id="suggestions-title" className="notfound-suggestions__title">
            Возможно, вас заинтересует
          </h2>
          <div className="notfound-suggestions__grid">
            <Link
              href="/uslugi/polirovka"
              className="suggestion-card"
              aria-label="Полировка автомобиля в Витебске"
            >
              <div className="suggestion-card__icon" aria-hidden="true">
                ✨
              </div>
              <h3 className="suggestion-card__title">Полировка авто</h3>
              <p className="suggestion-card__text">
                Восстановление блеска кузова
              </p>
            </Link>
            <Link
              href="/uslugi/khimchistka-salona"
              className="suggestion-card"
              aria-label="Химчистка салона автомобиля в Витебске"
            >
              <div className="suggestion-card__icon" aria-hidden="true">
                🧼
              </div>
              <h3 className="suggestion-card__title">Химчистка салона</h3>
              <p className="suggestion-card__text">Глубокая чистка салона</p>
            </Link>
            <Link
              href="/uslugi/okleyka-auto-plenkoy"
              className="suggestion-card"
              aria-label="Оклейка автомобиля защитной плёнкой в Витебске"
            >
              <div className="suggestion-card__icon" aria-hidden="true">
                🛡️
              </div>
              <h3 className="suggestion-card__title">Защита кузова</h3>
              <p className="suggestion-card__text">
                Оклейка антигравийной плёнкой
              </p>
            </Link>
            <Link
              href="/portfolio"
              className="suggestion-card"
              aria-label="Портфолио работ детейлинг студии в Витебске"
            >
              <div className="suggestion-card__icon" aria-hidden="true">
                📷
              </div>
              <h3 className="suggestion-card__title">Портфолио</h3>
              <p className="suggestion-card__text">Наши работы</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
