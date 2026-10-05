"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { PriceTable, BrandsTable } from "./tables";
import { tonirovkaFaqItems } from "./seo-data";
import InstallmentNote from "@/components/ui/InstallmentNote";
import "./page.scss";

export default function TonirovkaClient() {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const titleParts = ["Тонировка", "авто", "в", "Витебске"];
  const faqItems = tonirovkaFaqItems;

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
          <span className="breadcrumbs__current">Тонировка авто</span>
        </div>
      </div>

      <section
        className="service-hero"
        aria-label="Тонировка автомобиля в Витебске"
      >
        <div className="service-hero__bg">
          <Image
            src="/images/services/tonirovka.webp"
            alt="Тонировка стёкол автомобиля в Витебске по ГОСТ РБ и РФ"
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
              Тонировка по ГОСТ РБ и РФ. Полная — от 330 Б̶. Атермал на передние
              ≥70%, задняя полусфера без лимита с 01.09.2025. KAVACA, Llumar,
              SunTek.
            </p>
          </div>
        </div>
      </section>

      <div className="service-content">
        <div className="container">
          <InstallmentNote />
          <div className="service-content__intro">
            <p className="service-content__intro-text">
              <strong>Тонировка авто в Витебске</strong> в Ambadetail — законный
              комплект под техосмотр и поездки в РФ: атермал спереди и затемнение
              сзади. Полная тонировка — от 330 Б̶. Студия на ул. П. Бровки, 6А,
              работаем и в выходные.
            </p>
            <p className="service-content__intro-text">
              <Link href="/zapisatsya">Записаться на тонировку</Link>
              {" · "}
              <a href="tel:+375292230322">+375 29 223 03 22</a>
            </p>
          </div>

          <div className="service-content__section" id="ceny">
            <h2 className="service-content__section-title">
              Цена тонировки авто в Витебске
            </h2>
            <p>
              В прайсе — полная тонировка по классам автомобиля. Заднюю
              полусферу и атермал только на передние стёкла считаем отдельно после
              осмотра кузова и выбора плёнки.
            </p>
            <ul className="service-content__list">
              <li>
                <strong>1–2 класс — от 330 Б̶.</strong> Компактные и средние
                седаны, хэтчбеки.
              </li>
              <li>
                <strong>3–4 класс — от 400 Б̶.</strong> Бизнес-сегмент, кроссоверы
                и крупные кузова.
              </li>
              <li>
                <strong>5 класс — от 450 Б̶.</strong> Премиум и крупные
                внедорожники.
              </li>
            </ul>
            <p>
              Класс смотрим по таблице брендов ниже. Плёнки: KAVACA, Llumar,
              SunTek. Гарантия на монтаж и материал — до 5 лет.
            </p>
          </div>

          <div className="service-content__section" id="gost">
            <h2 className="service-content__section-title">
              Тонировка по ГОСТ в Беларуси и России
            </h2>
            <p>
              Нормы РБ и РФ совпадают по передней обзорности. Подбираем комплект
              так, чтобы авто проходило техосмотр и не создавало вопросов на
              дороге.
            </p>
            <ul className="service-content__list">
              <li>
                <strong>Лобовое и передние боковые</strong> — светопропускание
                не менее <strong>70%</strong> по ТР ТС 018/2011 и ГОСТ
                33997-2016. Сюда — светлый атермал, не тёмная плёнка.
              </li>
              <li>
                <strong>Заднее и задние боковые</strong> — с{" "}
                <strong>1 сентября 2025 года</strong> в РБ разрешены плёнка,
                шторки и жалюзи{" "}
                <strong>без лимита по %</strong>, если есть наружные зеркала с
                обеих сторон.
              </li>
              <li>
                <strong>Солнцезащитная полоса</strong> на лобовом — до{" "}
                <strong>14 см</strong> (140 мм).
              </li>
              <li>
                <strong>Зеркальная тонировка</strong> и покрытия, искажающие
                цвета, <strong>запрещены</strong> в РБ и РФ.
              </li>
              <li>
                Плёнки <strong>5%</strong> и <strong>15%</strong> — для задней
                полусферы. На перед их не ставим: ГОСТ по 70% они не проходят.
              </li>
            </ul>
          </div>

          <div className="service-content__section" id="vidy">
            <h2 className="service-content__section-title">
              Какие комплекты тонировки делаем
            </h2>
            <ul className="service-content__list">
              <li>
                <strong>Полная тонировка</strong> — атермал спереди по ГОСТ +
                затемнение сзади. От 330 Б̶.
              </li>
              <li>
                <strong>Задняя полусфера</strong> — приватность без лимита по %
                с 01.09.2025. Процент подбираем под стиль: часто 5%, 15% или 35%.
              </li>
              <li>
                <strong>Атермал на передние стёкла</strong> — меньше нагрева и
                УФ при светопропускании ≥70%.
              </li>
              <li>
                <strong>Солнцезащитная полоса</strong> на лобовое до 14 см.
              </li>
            </ul>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Как проходит тонировка
            </h2>
            <ol className="service-content__list">
              <li>
                <strong>Консультация по ГОСТ</strong> — какой процент спереди и
                сзади законен для вашего сценария (город, трасса, РФ).
              </li>
              <li>
                <strong>Подготовка стёкол</strong> — очистка, чтобы плёнка легла
                без мусора.
              </li>
              <li>
                <strong>Раскрой и монтаж</strong> — по лекалам, без пузырей и
                складок.
              </li>
              <li>
                <strong>Сдача</strong> — рекомендации по мойке и сроку, пока
                плёнка садится. Гарантия до 5 лет.
              </li>
            </ol>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Почему тонировку делают в Ambadetail
            </h2>
            <ul className="service-content__list">
              <li>
                <strong>Разбор норм РБ и РФ до монтажа</strong> — не клеим на
                перед то, что не пройдёт 70%.
              </li>
              <li>
                <strong>Плёнки KAVACA, Llumar, SunTek</strong> — с гарантией до
                5 лет.
              </li>
              <li>
                <strong>Прозрачный прайс по классам</strong> — полная тонировка
                от 330 / 400 / 450 Б̶.
              </li>
              <li>
                <strong>Витебск, ул. П. Бровки, 6А</strong> — Пн–Пт 10:00–19:00,
                Сб–Вс 10:00–17:00.{" "}
                <a href="tel:+375292230322">+375 29 223 03 22</a> или{" "}
                <Link href="/zapisatsya">форма записи</Link>.
              </li>
            </ul>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Другие услуги и материалы
            </h2>
            <ul className="service-content__related-links">
              <li>
                <a href="#gost">Нормы тонировки по ГОСТ</a>
              </li>
              <li>
                <a href="#ceny">Цены по классам</a>
              </li>
              <li>
                <Link href="/blog/tonirovka-avto-vitebsk">
                  Тонировка по ГОСТ РБ и РФ
                </Link>
              </li>
              <li>
                <Link href="/blog/razreshennaya-tonirovka-vitebsk">
                  Разрешённая тонировка задней полусферы
                </Link>
              </li>
              <li>
                <Link href="/blog/kakaya-tonirovka-luchshe">
                  Атермальная или обычная
                </Link>
              </li>
              <li>
                <Link href="/uslugi/okleyka-auto-plenkoy">
                  Оклейка авто плёнкой
                </Link>
              </li>
              <li>
                <Link href="/uslugi/khimchistka-salona">Химчистка салона</Link>
              </li>
              <li>
                <Link href="/zapisatsya">Запись на тонировку</Link>
              </li>
            </ul>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Вопросы о тонировке авто в Витебске
            </h2>
            <div className="faq-accordion">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`faq-accordion__item ${openFaq === index ? "faq-accordion__item--open" : ""}`}
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

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Прайс тонировки по классам
            </h2>
            <div id="prajs">
              <PriceTable />
              <BrandsTable />
            </div>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Отзывы о тонировке в Ambadetail
            </h2>
            <div className="reviews-grid">
              <div className="review-card">
                <div className="review-card__stars">★★★★★</div>
                <p className="review-card__text">
                  &ldquo;Выбрала атермальную плёнку — в салоне стало заметно
                  прохладнее, кондиционер не крутит на максимуме. Монтаж
                  аккуратный.&rdquo;
                </p>
                <span className="review-card__author">
                  — Ольга, Lexus RX 450h
                </span>
              </div>
              <div className="review-card">
                <div className="review-card__stars">★★★★★</div>
                <p className="review-card__text">
                  &ldquo;Подобрали плёнку под ГОСТ и стиль авто. В жару в салоне
                  комфортнее, качество на высоте.&rdquo;
                </p>
                <span className="review-card__author">
                  — Елена, Audi A8 L
                </span>
              </div>
            </div>
          </div>

          <div className="seo-content">
            <h2 className="seo-title">
              Тонировка автомобиля в Витебске и области
            </h2>
            <p>
              К тонировке обращаются за приватностью сзади и за меньшим нагревом
              спереди. В Ambadetail сначала разбираем нормы: перед — не ниже
              70%, сзади — любой законный процент с зеркалами. Зеркальную плёнку
              не ставим.
            </p>
            <p>
              Принимаем авто из Витебска и Витебской области. Адрес: ул. П.
              Бровки, 6А. Телефон{" "}
              <a href="tel:+375292230322">+375 29 223 03 22</a>. Подробнее о
              нормах — в статьях{" "}
              <Link href="/blog/tonirovka-avto-vitebsk">тонировка по ГОСТ</Link>{" "}
              и{" "}
              <Link href="/blog/razreshennaya-tonirovka-vitebsk">
                разрешённая задняя полусфера
              </Link>
              .
            </p>
            <div className="seo-conclusion">
              <h3 className="seo-conclusion-title">
                Запись на тонировку в Витебске
              </h3>
              <p className="seo-conclusion-final">
                <Link href="/zapisatsya">Оставьте заявку</Link> или позвоните —
                подскажем комплект и ориентир по классу авто до визита.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
