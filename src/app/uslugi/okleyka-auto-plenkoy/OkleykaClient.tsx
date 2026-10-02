"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  SunmaxTable,
  StekTable,
  LlumarTable,
  ColorFilmTable,
  BrandsTable,
} from "./tables";
import { okleykaFaqItems, okleykaZones } from "./seo-data";
import InstallmentNote from "@/components/ui/InstallmentNote";
import "./page.scss";

export default function OkleykaClient() {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(2);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const titleParts = ["Оклейка", "авто", "плёнкой", "в", "Витебске"];
  const faqItems = okleykaFaqItems;

  return (
    <>

      {/* ✅ ВИЗУАЛЬНЫЕ ХЛЕБНЫЕ КРОШКИ (для пользователей) */}
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
          <span className="breadcrumbs__current">Оклейка авто плёнкой</span>
        </div>
      </div>

      {/* HERO */}
      <section
        className="service-hero"
        aria-label="Оклейка авто плёнкой в Витебске — защита кузова PPF"
      >
        <div className="service-hero__bg">
          <Image
            src="/images/services/vinil.webp"
            alt="Оклейка авто плёнкой в Витебске — защита кузова автомобиля"
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
                <span key={partIndex} className="service-hero__title-word">
                  {part.split("").map((letter, letterIndex) => (
                    <span
                      key={letterIndex}
                      className={`service-hero__title-letter ${
                        isVisible ? "service-hero__title-letter--visible" : ""
                      }`}
                      style={{
                        transitionDelay: `${(partIndex * 15 + letterIndex) * 0.015}s`,
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              ))}
            </h1>
            <p className="service-hero__subtitle">
              Антигравийная плёнка и цветной полиуретан. Зоны риска от 660 BYN,
              капот 650 BYN, полная оклейка от 7 370 BYN. Sunmax, XPEL, Llumar,
              Stek, HEXIS.
            </p>
          </div>
        </div>
      </section>

      <div className="service-content">
        <div className="container">
          <InstallmentNote />
          <div className="service-content__intro">
            <p className="service-content__intro-text">
              <strong>Оклейка авто плёнкой в Витебске</strong> в Ambadetail —
              антигравийная полиуретановая плёнка на зоны риска или весь кузов
              и цветной полиуретан, если нужна смена цвета. Цены ниже — плёнка
              SUNMAX | CRYSTALL, 1 класс. Студия на ул. П. Бровки, 6А, работаем
              и в выходные.
            </p>
            <p className="service-content__intro-text">
              <Link href="/zapisatsya">Записаться на оклейку</Link>
              {" · "}
              <a href="tel:+375292230322">+375 29 223 03 22</a>
            </p>
          </div>

          <div className="service-content__section" id="antigraviy">
            <h2 className="service-content__section-title">
              Антигравийная плёнка и бронирование кузова
            </h2>
            <p>
              Антигравийная PPF — это полиуретан толщиной до 200 мкм. Она
              принимает удар камня вместо лака, держит песок и реагенты, а
              мелкие царапины затягиваются от солнца или тёплой воды.
              Бронирование фар той же плёнкой сохраняет стекло прозрачным.
            </p>
            <p>
              Керамика этого не заменяет: она даёт блеск и гидрофоб, но скол от
              щебня остаётся на краске. Винил меняет вид и защищает слабее
              полиуретана. Если нужен и новый цвет, и защита, клеим цветной
              полиуретан HEXIS — полная оклейка от 9 581 BYN для 1 класса.
            </p>
          </div>

          <div className="service-content__section" id="kompleksy">
            <h2 className="service-content__section-title">
              Комплексы зон риска и цена оклейки
            </h2>
            <p>
              Суммы — SUNMAX | CRYSTALL. Комплексы одинаковы для всех классов и
              указаны «от»: итог зависит от кузова. Отдельные детали — для 1
              класса, дальше цена растёт по таблице.
            </p>
            <ul className="service-content__list">
              <li>
                <strong>MINI — от 660 BYN.</strong> Часть капота, полоса над
                лобовым стеклом, антиманикюр, торцы дверей.
              </li>
              <li>
                <strong>LITE — от 880 BYN.</strong> Плюс часть крыльев и фары с
                ПТФ.
              </li>
              <li>
                <strong>LITE+ — от 1 375 BYN.</strong> Плюс стойки лобового,
                полка заднего бампера и внутренние пороги.
              </li>
              <li>
                <strong>STANDART — от 1 595 BYN.</strong> Капот целиком, пороги
                4 шт.
              </li>
              <li>
                <strong>STANDART+ — от 2 145 BYN.</strong> Капот и крылья
                целиком.
              </li>
              <li>
                <strong>PREMIUM — от 2 970 BYN.</strong> Капот, крылья, передний
                бампер, фары, зеркала и кромки.
              </li>
              <li>
                <strong>Полная оклейка</strong> — 7 370 BYN на SUNMAX, от 8 671
                BYN на Stek, от 9 581 BYN цветным полиуретаном (1 класс). Без
                крыши на SUNMAX — 6 503 BYN.
              </li>
            </ul>
          </div>

          <div className="service-content__section" id="zony">
            <h2 className="service-content__section-title">
              Что оклеиваем: зоны риска и полный кузов
            </h2>
            <p>
              Можно закрыть отдельные элементы или весь автомобиль. Ниже —
              популярные запросы по оклейке в Витебске:
            </p>
            <ul className="service-content__list">
              {okleykaZones.map((zone) => (
                <li key={zone.title}>
                  <strong>{zone.title}</strong> — {zone.text}
                </li>
              ))}
            </ul>
          </div>

          {/* ПРЕИМУЩЕСТВА */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Преимущества оклейки автомобиля защитной плёнкой
            </h2>
            <ul className="service-content__list">
              <li>
                <strong>Защита от сколов и царапин</strong> – плёнка толщиной до
                200 мкм поглощает удары камней и песка.
              </li>
              <li>
                <strong>Самовосстановление</strong> – мелкие царапины исчезают
                под воздействием тепла (солнце, горячая вода).
              </li>
              <li>
                <strong>Устойчивость к реагентам</strong> – не боится зимних
                реагентов, щелочей и кислот.
              </li>
              <li>
                <strong>Сохранение цвета</strong> – прозрачная PPF не желтеет,
                цветная плёнка даёт насыщенный оттенок.
              </li>
              <li>
                <strong>Долговечность</strong> – срок службы качественной плёнки
                достигает 5–7 лет.
              </li>
            </ul>
          </div>

          {/* БРЕНДЫ */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Плёнки для оклейки автомобиля в Витебске
            </h2>
            <ul className="service-content__brand-list">
              <li id="xpel">
                <strong>XPEL</strong> — премиальная защита, самовосстановление
                царапин. Стоимость считаем после осмотра: отдельной таблицы на
                сайте нет.
              </li>
              <li>
                <strong>Sunmax</strong> — основной прайс студии, от комплексов
                зон риска до полной оклейки.{" "}
                <a href="#sunmax">Таблица SUNMAX</a>
              </li>
              <li>
                <strong>Llumar</strong> — проверенная защита, долговечность.{" "}
                <a href="#llumar">Таблица Llumar</a>
              </li>
              <li>
                <strong>Stek</strong> — полный кузов от 8 671 BYN для 1 класса.{" "}
                <a href="#stek">Таблица Stek</a>
              </li>
              <li>
                <strong>HEXIS</strong> — цветная полиуретановая плёнка, смена
                цвета и защита. <a href="#color">Таблица цветной плёнки</a>
              </li>
            </ul>
          </div>

          {/* ЭТАПЫ */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Этапы оклейки автомобиля в Витебске
            </h2>
            <ol className="service-content__list">
              <li>
                <strong>Консультация</strong> – подбор плёнки под ваши задачи и
                бюджет.
              </li>
              <li>
                <strong>Подготовка кузова</strong> – мойка, обезжиривание, при
                необходимости лёгкая полировка.
              </li>
              <li>
                <strong>Раскрой материала</strong> – компьютерный раскрой или
                ручной по шаблонам.
              </li>
              <li>
                <strong>Оклейка</strong> – монтаж плёнки на капот, бампер,
                крылья, двери, крышу, фары, стойки.
              </li>
              <li>
                <strong>Сушка и контроль качества</strong> – проверка
                прилегания, устранение пузырей и складок.
              </li>
            </ol>
          </div>

          {/* ПОЧЕМУ МЫ */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Почему выбирают оклейку автомобиля в Ambadetail
            </h2>
            <ul className="service-content__list">
              <li>
                <strong>Опыт работы с автомобилями любых марок</strong> – от
                бюджетных до премиальных.
              </li>
              <li>
                <strong>Соблюдение технологии</strong> – используем оборудование
                и качественные материалы.
              </li>
              <li>
                <strong>Гарантия на работы</strong> – до 3 лет на монтаж и
                материалы.
              </li>
              <li>
                <strong>Витебск, ул. П. Бровки, 6А</strong> — Пн–Пт 10:00–19:00,
                Сб–Вс 10:00–17:00. Запись:{" "}
                <a href="tel:+375292230322">+375 29 223 03 22</a> или{" "}
                <Link href="/zapisatsya">форма на сайте</Link>.
              </li>
            </ul>
          </div>
          {/* ПОПУЛЯРНЫЕ ЗАПРОСЫ */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Популярные услуги по оклейке авто в Витебске
            </h2>
            <ul className="service-content__related-links">
              <li>
                <a href="#kompleksy">Комплексы зон риска</a>
              </li>
              <li>
                <a href="#zony">Оклейка капота, фар и бампера</a>
              </li>
              <li>
                <a href="#sunmax">Прайс Sunmax</a>
              </li>
              <li>
                <a href="#xpel">Плёнка XPEL</a>
              </li>
              <li>
                <a href="#llumar">Прайс Llumar</a>
              </li>
              <li>
                <a href="#stek">Прайс Stek</a>
              </li>
              <li>
                <a href="#color">Цветная полиуретановая плёнка</a>
              </li>
              <li>
                <Link href="/blog/antigraviynaya-plenka-vitebsk">
                  Антигравийная плёнка: что клеить первым
                </Link>
              </li>
              <li>
                <Link href="/portfolio">Примеры работ</Link>
              </li>
              <li>
                <Link href="/zapisatsya">Запись на оклейку</Link>
              </li>
            </ul>
          </div>

          {/* ССЫЛКИ НА ДРУГИЕ УСЛУГИ */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Другие услуги детейлинг студии в Витебске
            </h2>
            <ul className="service-content__related-links">
              <li>
                <Link href="/uslugi/polirovka">Полировка авто в Витебске</Link>
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
                <Link href="/uslugi/zashhitnye-pokrytiya">
                  Защитные покрытия в Витебске
                </Link>
              </li>
              <li>
                <Link href="/uslugi/tonirovka">Тонировка в Витебске</Link>
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Часто задаваемые вопросы об оклейке авто плёнкой
            </h2>
            <div className="faq-accordion">
              {faqItems.map((item, index) => (
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
                    aria-controls={`faq-content-${index}`}
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
                    id={`faq-content-${index}`}
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

          {/* ТАБЛИЦЫ ЦЕН */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Цена оклейки автомобиля плёнкой в Витебске
            </h2>
            <SunmaxTable />
            <StekTable />
            <LlumarTable />
            <ColorFilmTable />
            <BrandsTable />
          </div>

          {/* ОТЗЫВЫ КЛИЕНТОВ */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Отзывы об оклейке авто плёнкой в Витебске
            </h2>
            <div className="reviews-grid">
              <div className="review-card">
                <div className="review-card__stars">★★★★★</div>
                <p className="review-card__text">
                  &ldquo;Оклеил Land Cruiser защитной плёнкой. Села без
                  пузырей, на стыках почти не видно. По лесу езжу спокойнее —
                  ветки и камни принимает плёнка.&rdquo;
                </p>
                <span className="review-card__author">
                  — Дмитрий, Toyota Land Cruiser 200
                </span>
              </div>
              <div className="review-card">
                <div className="review-card__stars">★★★★★</div>
                <p className="review-card__text">
                  &ldquo;Закрыла Infiniti антигравийной плёнкой. Сколов от
                  реагентов больше не ловлю, плёнка на кузове почти не
                  читается.&rdquo;
                </p>
                <span className="review-card__author">
                  — Наталья, Infiniti QX80
                </span>
              </div>
            </div>
          </div>

          {/* SEO ТЕКСТ */}
          <div className="seo-content">
            <h2 className="seo-title">
              Оклейка автомобиля плёнкой в Витебске и области
            </h2>
            <p>
              Чаще всего закрывают переднюю часть: капот, бампер, фары и
              кромки — туда приходится щебень на трассе и реагент зимой. Полный
              кузов имеет смысл на новом авто, когда важно сохранить ЛКП целиком.
              Класс машины смотрим по таблице брендов внизу страницы.
            </p>
            <p>
              Перед монтажом при необходимости делаем{" "}
              <Link href="/uslugi/polirovka">полировку</Link>, сверху плёнку
              можно закрыть{" "}
              <Link href="/uslugi/zashhitnye-pokrytiya">керамикой</Link>.
              Принимаем авто из Витебска и Витебской области. Адрес: ул. П.
              Бровки, 6А. Гарантия на работы и плёнку — до 3 лет.
            </p>
            <p>
              Подробнее:{" "}
              <Link href="/blog/okleyka-avto-plenkoy-vitebsk">
                как устроена оклейка PPF
              </Link>{" "}
              и{" "}
              <Link href="/blog/antigraviynaya-plenka-vitebsk">
                какие зоны клеить антигравием в первую очередь
              </Link>
              .
            </p>
            <div className="seo-conclusion">
              <h3 className="seo-conclusion-title">
                Запись на оклейку авто в Витебске
              </h3>
              <p className="seo-conclusion-final">
                <Link href="/zapisatsya">Оставьте заявку</Link> или позвоните{" "}
                <a href="tel:+375292230322">+375 29 223 03 22</a> — посчитаем
                комплекс по классу авто до визита.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
