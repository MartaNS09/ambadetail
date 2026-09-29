"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { PriceTable, BrandsTable } from "./tables";
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

  const faqItems = [
    {
      question: "Какая тонировка разрешена в Беларуси в 2025–2026 годах?",
      answer:
        "С 1 сентября 2025 года в РБ разрешена тонировка заднего и задних боковых стёкол легковых авто без ограничений по светопропусканию при наличии наружных зеркал. Лобовое и передние боковые стёкла — не менее 70% по ТР ТС 018/2011 и ГОСТ 33997-2016.",
    },
    {
      question: "Можно ли тонировать передние стёкла по ГОСТ в Витебске?",
      answer:
        "Да, если итоговое светопропускание остаётся ≥70%. Для передней полусферы подбираем светлые атермальные плёнки. Зеркальная тонировка в РБ и РФ запрещена.",
    },
    {
      question: "Какая тонировка лучше — обычная или атермальная?",
      answer:
        "Обычная даёт затемнение и приватность (оптимальна для задней полусферы). Атермальная сильнее снижает нагрев и УФ при более светлом виде — её чаще ставят на передние стёкла в рамках ГОСТ.",
    },
    {
      question: "Сколько времени занимает тонировка автомобиля?",
      answer:
        "Обычно от нескольких часов до одного рабочего дня — зависит от кузова, комплекта стёкол и типа плёнки.",
    },
    {
      question: "Можно ли мыть автомобиль сразу после тонировки?",
      answer:
        "Рекомендуем выдержать паузу, чтобы плёнка полностью села. Срок подскажем при сдаче автомобиля.",
    },
    {
      question: "Даёте ли гарантию на тонировку?",
      answer:
        "Да, гарантия на работы и материалы — до 5 лет. Условия зависят от бренда плёнки: KAVACA, Llumar, SunTek.",
    },
    {
      question: "От чего зависит цена тонировки в Витебске?",
      answer:
        "От класса автомобиля, комплекта стёкол (полная / задняя полусфера / атермал на передние), бренда плёнки и сложности раскроя.",
    },
  ];

  return (
    <>

      <div className="breadcrumbs" aria-label="Навигационная цепочка">
        <div className="container">
          <Link href="/" className="breadcrumbs__link">
            Главная
          </Link>
          <span className="breadcrumbs__separator">/</span>
          <Link href="/uslugi" className="breadcrumbs__link">
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
            alt="Тонировка стёкол автомобиля в Витебске по ГОСТ"
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
              Тонировка по ГОСТ РБ и РФ: атермальная плёнка на передние стёкла,
              разрешённая тонировка задней полусферы. Защита от УФ и комфорт в
              салоне.
            </p>
          </div>
        </div>
      </section>

      <div className="service-content">
        <div className="container">
          <div className="service-content__intro">
            <p className="service-content__intro-text">
              <strong>Тонировка авто в Витебске</strong> в студии Ambadetail —
              комфорт в салоне, защита от солнца и законное затемнение по нормам
              Беларуси и России.
            </p>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Тонировка автомобиля в Витебске — комфорт, стиль и соответствие
              ГОСТ
            </h2>
            <p>
              <strong>Тонировка авто в Витебске</strong> — это не только
              эстетика, но и практичность. В Ambadetail выполняем{" "}
              <strong>профессиональную атермальную тонировку</strong> и
              затемнение задней полусферы плёнками KAVACA, Llumar и SunTek.
              Подбираем светопропускание так, чтобы автомобиль соответствовал{" "}
              <strong>ТР ТС 018/2011</strong> и{" "}
              <strong>ГОСТ 33997-2016</strong>, проходил техосмотр и не создавал
              проблем на дорогах РБ и РФ.
            </p>
            <p>
              Тонировка стёкол снижает нагрев салона, защищает обивку от
              выгорания, уменьшает блики и нагрузку на кондиционер. Для передней
              обзорности используем светлые атермальные решения; для задних
              стёкол — любой законный процент затемнения с акцентом на
              приватность.
            </p>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Нормы тонировки в Беларуси и России (ГОСТ и ПДД)
            </h2>
            <p>
              В Республике Беларусь и Российской Федерации действуют единые
              технические требования Таможенного союза. Ключевые ориентиры для
              владельцев авто в Витебске:
            </p>
            <ul className="service-content__list">
              <li>
                <strong>Лобовое и передние боковые стёкла</strong> — светопропускание
                не менее <strong>70%</strong> (для бронеавтомобилей — не менее
                60%). Норма закреплена в ТР ТС 018/2011 и ГОСТ 33997-2016.
              </li>
              <li>
                <strong>Заднее и задние боковые стёкла</strong> — с{" "}
                <strong>1 сентября 2025 года</strong> в РБ прямо разрешены
                плёночные покрытия, шторки и жалюзи{" "}
                <strong>без ограничений по светопропусканию</strong>, если есть
                наружные зеркала заднего вида с обеих сторон.
              </li>
              <li>
                <strong>Солнцезащитная полоса</strong> на лобовом стекле —
                допускается шириной до <strong>14 см</strong> (140 мм).
              </li>
              <li>
                <strong>Зеркальная тонировка</strong> и покрытия, искажающие
                восприятие основных цветов,{" "}
                <strong>запрещены</strong> в РБ и РФ.
              </li>
              <li>
                В <strong>России</strong> действуют те же пороги 70% для передней
                обзорности по ГОСТ 33997-2016; задняя полусфера также не
                нормируется при наличии боковых зеркал.
              </li>
            </ul>
            <p>
              Мы консультируем по разрешённой тонировке перед работами: для
              ежедневных поездок по Витебску и Витебской области, техосмотра в
              Беларуси и выездов в РФ подбираем законный комплект плёнки.
            </p>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Виды тонировки в Ambadetail Витебск
            </h2>
            <ul className="service-content__list">
              <li>
                <strong>Атермальная тонировка передних стёкол</strong> — снижение
                нагрева и УФ при сохранении светопропускания ≥70% по ГОСТ.
              </li>
              <li>
                <strong>Тонировка задней полусферы</strong> — максимальная
                приватность в рамках новых правил РБ (без лимита по %).
              </li>
              <li>
                <strong>Полная тонировка авто</strong> — передние стёкла по ГОСТ
                + затемнение задних стёкол под ваш стиль.
              </li>
              <li>
                <strong>Солнцезащитная полоса</strong> на лобовое стекло до 14 см.
              </li>
            </ul>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Преимущества тонировки автомобиля в Ambadetail
            </h2>
            <ul className="service-content__list">
              <li>
                <strong>Соответствие ГОСТ РБ и РФ</strong> — подбор плёнки под
                нормы 70% и актуальные ПДД Беларуси.
              </li>
              <li>
                <strong>Атермальная защита</strong> — отсекает до 99% УФ-лучей и
                снижает инфракрасный нагрев.
              </li>
              <li>
                <strong>Приватность</strong> — законное затемнение задней
                полусферы без сюрпризов на техосмотре.
              </li>
              <li>
                <strong>Долговечность</strong> — плёнка не выгорает, не
                пузырится, сохраняет цвет.
              </li>
              <li>
                <strong>Безопасность</strong> — при ударе стекло удерживается
                плёнкой.
              </li>
            </ul>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Этапы тонировки автомобиля в Витебске
            </h2>
            <ol className="service-content__list">
              <li>
                <strong>Консультация по ГОСТ</strong> — подбор плёнки и процента
                затемнения под РБ/РФ.
              </li>
              <li>
                <strong>Подготовка стёкол</strong> — тщательная очистка от
                загрязнений.
              </li>
              <li>
                <strong>Раскрой</strong> — точный раскрой плёнки по лекалам.
              </li>
              <li>
                <strong>Монтаж</strong> — наклейка без пузырей и складок.
              </li>
              <li>
                <strong>Контроль качества</strong> — проверка покрытия и
                рекомендаций по уходу и техосмотру.
              </li>
            </ol>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Почему выбирают тонировку в Ambadetail
            </h2>
            <ul className="service-content__list">
              <li>
                <strong>Сертифицированные материалы</strong> — KAVACA, Llumar,
                SunTek.
              </li>
              <li>
                <strong>Гарантия до 5 лет</strong> на плёнку и работы.
              </li>
              <li>
                <strong>Бесплатная консультация</strong> по нормам тонировки в
                Беларуси и РФ.
              </li>
              <li>
                <strong>Удобное расположение</strong> — Витебск, ул. П. Бровки,
                6А.
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
                  Оклейка авто плёнкой в Витебске
                </Link>
              </li>
              <li>
                <Link href="/uslugi/khimchistka-salona">
                  Химчистка салона в Витебске
                </Link>
              </li>
              <li>
                <Link href="/uslugi/polirovka">Полировка авто в Витебске</Link>
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
                <Link href="/uslugi/detailing-dvigatelya">
                  Детейлинг двигателя в Витебске
                </Link>
              </li>
            </ul>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Часто задаваемые вопросы о тонировке в Витебске
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
              Цена тонировки автомобиля в Витебске
            </h2>
            <p>
              Стоимость <strong>тонировки авто в Витебске</strong> начинается от{" "}
              <strong>330 BYN</strong> за полный комплект и зависит от класса
              автомобиля и выбранной плёнки. Атермальная тонировка передних
              стёкол и затемнение задней полусферы рассчитываются отдельно на
              консультации.
            </p>
            <PriceTable />
            <BrandsTable />
          </div>

          <div className="seo-content">
            <h2 className="seo-title">
              Профессиональная тонировка автомобиля в Витебске по ГОСТ
            </h2>
            <p>
              Ищете <strong>тонировку стёкол автомобиля в Витебске</strong> с
              гарантией прохождения техосмотра? В Ambadetail делают{" "}
              <strong>разрешённую тонировку по ГОСТ</strong> для легковых авто:
              атермальные плёнки на переднюю обзорность и любое законное
              затемнение задних стёкол по обновлённым правилам ПДД Беларуси.
              Работаем для клиентов из Витебска, Витебского района и области.
            </p>
            <p>
              Перед монтажом объясняем разницу между нормами{" "}
              <strong>РБ</strong> и <strong>РФ</strong>, помогаем выбрать процент
              затемнения и бренд плёнки под ваш сценарий — город, трасса, частые
              поездки в Россию. Используем материалы с защитой от выгорания и
              даём гарантию до 5 лет.
            </p>
            <div className="seo-conclusion">
              <h4 className="seo-conclusion-title">
                Тонировка авто в Витебске — законно, аккуратно, с гарантией
              </h4>
              <p className="seo-conclusion-final">
                <strong>
                  Запишитесь на бесплатную консультацию по тонировке по ГОСТ в
                  Витебске: ул. П. Бровки, 6А, тел. +375 29 223 03 22.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
