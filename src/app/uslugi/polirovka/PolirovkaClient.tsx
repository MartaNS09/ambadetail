"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { PriceTable, BrandsTable } from "./tables";
import "./page.scss";

export default function PolirovkaClient() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const titleParts = ["Детейлинг", "полировка", "авто"];

  return (
    <>
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
                      className={`service-hero__title-letter ${isVisible ? "service-hero__title-letter--visible" : ""}`}
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
              <strong>Детейлинг полировка</strong> автомобиля в Витебске — это
              профессиональное восстановление лакокрасочного покрытия.
            </p>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Цена полировки автомобиля
            </h2>
            <PriceTable />
            <BrandsTable />
          </div>

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
                  автомобиля.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
