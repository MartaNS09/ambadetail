"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { PriceTable, BrandsTable } from "./tables";
import "./page.scss";

export default function ServicePage() {
  const [isVisible, setIsVisible] = useState(false);

  // SEO: устанавливаем все метатеги как на старом сайте
  useEffect(() => {
    document.title =
      "Защитные покрытия для автомобиля в Витебске | Керамика, жидкое стекло, антигравийная защита - Ambadetail";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Профессиональное нанесение защитных покрытий на автомобиль в Витебске. Керамическое покрытие, жидкое стекло, антидождь, антигравийная защита. Гарантия качества.",
    );

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      "content",
      "защитные покрытия авто Витебск, керамическое покрытие автомобиля, жидкое стекло на авто, антидождь, антигравийная защита, нанокерамика для авто",
    );

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute(
      "href",
      "https://ambadetail.vercel.app/uslugi/zashhitnye-pokrytiya",
    );

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute(
      "content",
      "Защитные покрытия для автомобиля в Витебске | Керамика, жидкое стекло, антигравийная защита",
    );

    let ogDescription = document.querySelector(
      'meta[property="og:description"]',
    );
    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute(
      "content",
      "Профессиональное нанесение защитных покрытий на автомобиль в Витебске. Керамическое покрытие, жидкое стекло, антидождь, антигравийная защита. Гарантия качества.",
    );

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement("meta");
      ogImage.setAttribute("property", "og:image");
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute(
      "content",
      "https://ambadetail.vercel.app/images/services/lamba.webp",
    );

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute(
      "content",
      "https://ambadetail.vercel.app/uslugi/zashhitnye-pokrytiya",
    );

    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement("meta");
      twitterTitle.setAttribute("name", "twitter:title");
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute(
      "content",
      "Защитные покрытия для автомобиля в Витебске | Керамика, жидкое стекло, антигравийная защита",
    );

    let twitterDescription = document.querySelector(
      'meta[name="twitter:description"]',
    );
    if (!twitterDescription) {
      twitterDescription = document.createElement("meta");
      twitterDescription.setAttribute("name", "twitter:description");
      document.head.appendChild(twitterDescription);
    }
    twitterDescription.setAttribute(
      "content",
      "Профессиональное нанесение защитных покрытий на автомобиль в Витебске. Керамическое покрытие, жидкое стекло, антидождь, антигравийная защита. Гарантия качества.",
    );

    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement("meta");
      twitterImage.setAttribute("name", "twitter:image");
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute(
      "content",
      "https://ambadetail.vercel.app/images/services/lamba.webp",
    );
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleFaqClick = (event: Event) => {
      const button = event.currentTarget as HTMLElement;
      const parent = button.closest(".seo-faq-item");
      if (parent) {
        parent.classList.toggle("open");
      }
    };

    const faqButtons = document.querySelectorAll(".seo-faq-question");
    faqButtons.forEach((button) => {
      button.addEventListener("click", handleFaqClick);
    });

    return () => {
      faqButtons.forEach((button) => {
        button.removeEventListener("click", handleFaqClick);
      });
    };
  }, []);

  const titleParts = ["Нанесение", "защитных", "покрытий"];

  return (
    <>
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
              <strong>Защитные покрытия</strong> для автомобиля в Витебске — это
              профессиональное нанесение керамики, жидкого стекла и гидрофобных
              составов. Защищаем кузов, стёкла, диски и салон от внешних
              воздействий.
            </p>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Цена защитного покрытия автомобиля
            </h2>
            <PriceTable />
            <BrandsTable />
          </div>

          <div className="seo-content">
            <h2 className="seo-title">
              Защитные покрытия для автомобиля в Витебске
            </h2>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Что такое защитные покрытия для автомобиля?
              </h3>
              <p>
                <span className="seo-highlight">Защитные покрытия</span> — это
                современные высокотехнологичные составы, которые создают на
                поверхности лакокрасочного покрытия автомобиля прочный защитный
                слой. В отличие от традиционных восков и полиролей, современные
                защитные покрытия образуют химическую связь с лаком, создавая
                долговечную защиту от внешних воздействий.
              </p>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Виды защитных покрытий для автомобиля
              </h3>
              <div className="seo-cards">
                <div className="seo-card">
                  <div className="seo-card-icon">🔮</div>
                  <h4 className="seo-card-title">Керамическое покрытие</h4>
                  <p className="seo-card-text">
                    Нано-керамика на основе диоксида кремния. Создает прочный
                    слой толщиной 1-3 микрона. Срок службы 2-5 лет. Высокая
                    стойкость к химии, УФ-лучам, механическим воздействиям.
                  </p>
                </div>
                <div className="seo-card">
                  <div className="seo-card-icon">💎</div>
                  <h4 className="seo-card-title">Жидкое стекло</h4>
                  <p className="seo-card-text">
                    Силикон-диоксидные составы. Образуют прозрачный
                    кристаллический слой с эффектом мокрого блеска. Срок службы
                    1-2 года. Отличные гидрофобные свойства.
                  </p>
                </div>
                <div className="seo-card">
                  <div className="seo-card-icon">🛡️</div>
                  <h4 className="seo-card-title">Антигравийные покрытия</h4>
                  <p className="seo-card-text">
                    Полиуретановые составы повышенной прочности. Защищают от
                    сколов от камней, гравия, песка. Особенно актуальны для
                    капота, крыльев, зеркал.
                  </p>
                </div>
                <div className="seo-card">
                  <div className="seo-card-icon">🌧️</div>
                  <h4 className="seo-card-title">Антидождь</h4>
                  <p className="seo-card-text">
                    Специальные составы для стекол. Капли воды скатываются при
                    скорости от 60 км/ч. Улучшает видимость в дождь, облегчает
                    очистку стекол ото льда.
                  </p>
                </div>
                <div className="seo-card">
                  <div className="seo-card-icon">🧪</div>
                  <h4 className="seo-card-title">Гибридные покрытия</h4>
                  <p className="seo-card-text">
                    Комбинация керамики, силикона и полимеров. Объединяет
                    преимущества разных технологий: блеск, защита,
                    гидрофобность, простота нанесения.
                  </p>
                </div>
              </div>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Этапы нанесения профессионального защитного покрытия
              </h3>
              <div className="seo-process">
                <div className="seo-process-step">
                  <div className="seo-process-number">1</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">
                      Диагностика и подготовка
                    </h4>
                    <p className="seo-process-text">
                      Осмотр состояния ЛКП, измерение толщины лака. Выбор
                      оптимального типа покрытия.
                    </p>
                  </div>
                </div>
                <div className="seo-process-step">
                  <div className="seo-process-number">2</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">
                      Глубокая очистка кузова
                    </h4>
                    <p className="seo-process-text">
                      Профессиональная мойка с обезжириванием. Удаление битума,
                      смолы, железной пыли, старой защиты.
                    </p>
                  </div>
                </div>
                <div className="seo-process-step">
                  <div className="seo-process-number">3</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">
                      Восстановление ЛКП (при необходимости)
                    </h4>
                    <p className="seo-process-text">
                      Полировка для удаления царапин, swirl-маркировки,
                      окисления. Выравнивание поверхности.
                    </p>
                  </div>
                </div>
                <div className="seo-process-step">
                  <div className="seo-process-number">4</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">Нанесение покрытия</h4>
                    <p className="seo-process-text">
                      Нанесение состава специальными аппликаторами равномерным
                      слоем. Контроль толщины, устранение подтеков.
                    </p>
                  </div>
                </div>
                <div className="seo-process-step">
                  <div className="seo-process-number">5</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">Полимеризация и сушка</h4>
                    <p className="seo-process-text">
                      Выдержка для полимеризации (от 2 до 24 часов). Контроль
                      процесса отверждения.
                    </p>
                  </div>
                </div>
                <div className="seo-process-step">
                  <div className="seo-process-number">6</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">
                      Финальная проверка и инструктаж
                    </h4>
                    <p className="seo-process-text">
                      Проверка качества нанесения, равномерности слоя.
                      Инструктаж клиента по уходу. Выдача сертификата с
                      гарантией.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Преимущества профессиональных защитных покрытий
              </h3>
            </div>

            <div className="seo-conclusion">
              <h4 className="seo-conclusion-title">
                Защитные покрытия для автомобиля в Витебске — современная защита
                и уход
              </h4>
              <p>
                Инвестиция в качественное защитное покрытие — это экономия
                времени, денег и нервов в долгосрочной перспективе. Современные
                технологии позволяют защитить ваш автомобиль от множества
                агрессивных факторов, сохраняя его внешний вид и стоимость.
              </p>
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
