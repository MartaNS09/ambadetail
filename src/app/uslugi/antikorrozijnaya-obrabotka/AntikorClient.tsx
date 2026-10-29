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
              Антикор авто: днище, арки, скрытые полости. Dinitrol и WURTH.
              Пакеты от 450 Б̶. Рассрочка до 5 месяцев.
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
              — защита кузова от соли, реагентов и влаги: днище, колёсные арки и
              скрытые полости составами Dinitrol и WURTH. Студия на ул. П.
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
              <strong>Антикоррозийная обработка автомобиля</strong> создаёт
              барьер между металлом и агрессивной средой: битум-каучук на днище,
              ML-консерванты в полостях, подготовка очагов перед нанесением.
            </p>
            <p>
              В отличие от «намазать и отдать», мы моем и сушим кузов, снимаем
              защиты, обрабатываем технологические отверстия и собираем
              автомобиль с контролем покрытия. Есть пакеты Эконом, Стандарт и
              Премиум на Dinitrol.
            </p>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Материалы премиум-класса
            </h2>
            <ul className="service-content__list">
              <li>
                <strong>Dinitrol 4941 / Metallic</strong> — стойкое покрытие
                днища и арок (Швеция).
              </li>
              <li>
                <strong>Dinitrol ML / LT</strong> — проникающие составы для
                скрытых полостей и швов.
              </li>
              <li>
                <strong>WURTH</strong> — консерванты и подготовка очагов
                коррозии (Германия).
              </li>
              <li>
                <strong>Битум-каучук с антишумом</strong> — дополнительный
                барьер и снижение гула от дороги.
              </li>
            </ul>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Пакеты антикоррозийной обработки
            </h2>
            <ul className="service-content__list">
              <li>
                <strong>Эконом — от 450 Б̶</strong>: днище и колёсные арки после
                мойки и сушки.
              </li>
              <li>
                <strong>Стандарт — от 700 Б̶</strong>: эконом + скрытые полости
                (пороги, лонжероны, двери).
              </li>
              <li>
                <strong>Премиум — от 900 Б̶</strong>: полный комплекс на
                Dinitrol с усиленной подготовкой ржавчины.
              </li>
            </ul>
            <p>
              Цены ориентировочные по рынку Витебска. Финальную сумму назовём
              после осмотра — без сюрпризов после начала работ.
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
                <strong>Разборка</strong> — снятие защит днища, подкрылков,
                термоэкранов по согласованию.
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
                <strong>Подготовка</strong> — зачистка очагов, грунт при
                необходимости, маскировка ЛКП.
              </li>
              <li>
                <strong>Обработка</strong> — днище, арки, скрытые полости
                (Dinitrol / WURTH).
              </li>
              <li>
                <strong>Сборка и контроль</strong> — установка защит, проверка
                покрытия, гарантийные документы.
              </li>
            </ol>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Почему антикор в Ambadetail
            </h2>
            <ul className="service-content__list">
              <li>
                <strong>Премиальные составы</strong> — Dinitrol и WURTH, не
                «безымянный» битум из канистры.
              </li>
              <li>
                <strong>Полный цикл</strong> — мойка, сушка, полости, а не только
                наружное нанесение.
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
              закрывает запрос на антикор авто: защита днища, арок и скрытых
              полостей материалами Dinitrol и WURTH. Пакеты Эконом, Стандарт и
              Премиум — от 450 Б̶ ориентировочно, точная сумма после осмотра.
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
