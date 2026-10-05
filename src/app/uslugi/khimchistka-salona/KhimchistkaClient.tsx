"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { PriceTable, BrandsTable } from "./tables";
import InstallmentNote from "@/components/ui/InstallmentNote";
import "./page.scss";

export default function KhimchistkaClient() {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // 🔥 ИЗМЕНЁННЫЙ ЗАГОЛОВОК — С "В ВИТЕБСКЕ"
  const titleParts = ["Химчистка", "авто", "в", "Витебске"];

  const faqItems = [
    {
      question: "Сколько стоит химчистка авто в Витебске?",
      answer:
        "Комплексная химчистка салона в Ambadetail — от 708 Б̶ для автомобиля 1 класса, с разбором — от 787 Б̶. Локальное удаление пятен — от 33 Б̶, одно сиденье из текстиля — от 33 Б̶, потолок — от 72 Б̶, багажник — от 59 Б̶. Сумма зависит от класса авто и степени загрязнения, точную цену называем после осмотра.",
    },
    {
      question: "Что входит в комплексную химчистку салона?",
      answer:
        "Сиденья, ковры, потолок и солнцезащитные козырьки, карты дверей, пластик торпеды, руль, стойки, ремни, багажник и проёмы. Химию подбираем под кожу, ткань или алькантару. По согласованию делаем комплекс с разбором.",
    },
    {
      question: "Чем детейлинг-химчистка отличается от обычной уборки?",
      answer:
        "Обычная уборка снимает пыль с поверхности. Детейлинг-химчистка прорабатывает каждую зону отдельно, выводит пятна составом под тип материала и по желанию закрывает кожу и текстиль консервантом Koch или LeTech.",
    },
    {
      question: "Сколько длится химчистка и когда можно забирать автомобиль?",
      answer:
        "Локальная чистка занимает меньше времени, комплексная — дольше из-за сушки. Срок и день выдачи согласуем до начала работ. После сушки салон можно эксплуатировать.",
    },
    {
      question: "Удаляете ли запах табака, сырости и животных?",
      answer:
        "Да. Сначала убираем источник запаха в ткани, коже и коврах, затем при необходимости делаем озонирование. Результат зависит от давности запаха и того, насколько глубоко он впитался.",
    },
    {
      question: "Безопасна ли химчистка для кожи, алькантары и пластика?",
      answer:
        "Да. Кожу чистим составами LeTech, после чистки обрабатываем Koch или LeTech. Алькантару и пластик ведём отдельно, без одной универсальной химии на все материалы.",
    },
    {
      question: "Можно ли почистить только пятно или одно сиденье?",
      answer:
        "Да. Локальная химчистка — от 33 Б̶. Переднее сиденье из текстиля или тёмной кожи — от 33 Б̶, светлая кожа — от 39 Б̶. По фото подскажем, хватит ли локальной работы или нужен комплекс.",
    },
    {
      question: "Делаете ли защиту салона после химчистки?",
      answer:
        "Да. После комплекса кожу и текстиль можно обработать составами Koch или LeTech — от 215 Б̶ для 1 класса. Керамическая защита всех кожаных элементов считается отдельно по таблице.",
    },
    {
      question: "Где находится студия и работаете ли в выходные?",
      answer:
        "Ambadetail — Витебск, ул. П. Бровки, 6А. Пн–Пт 10:00–19:00, Сб–Вс 10:00–17:00. Запись по телефону +375 29 223 03 22 или на странице онлайн-записи.",
    },
  ];

  return (
    <>

      {/* ✅ ВИЗУАЛЬНЫЕ ХЛЕБНЫЕ КРОШКИ */}
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
          <span className="breadcrumbs__current">Химчистка авто</span>
        </div>
      </div>

      <section
        className="service-hero"
        aria-label="Химчистка авто в Витебске"
      >
        <div className="service-hero__bg">
          <Image
            src="/images/services/salon.webp"
            alt="Химчистка салона автомобиля в студии Ambadetail в Витебске"
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
                        transitionDelay: `${(partIndex * 12 + letterIndex) * 0.02}s`,
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              ))}
            </h1>
            <p className="service-hero__subtitle">
              Детейлинг-химчистка салона: кожа, ткань, алькантара. Комплекс от
              708 Б̶, локально от 33 Б̶. Koch и LeTech, удаление пятен и
              запахов.
            </p>
          </div>
        </div>
      </section>

      <div className="service-content">
        <div className="container">
          <InstallmentNote />
          <div className="service-content__intro">
            <p className="service-content__intro-text">
              <strong>Химчистка авто в Витебске</strong> в Ambadetail — это
              детейлинг салона, а не сухая уборка пылесосом. Чистим сиденья,
              ковры, потолок, пластик и багажник составами под кожу, ткань и
              алькантару. Комплекс для 1 класса — от 708 Б̶, удаление пятен —
              от 33 Б̶. Студия на ул. П. Бровки, 6А, работаем и в выходные.
            </p>
            <p className="service-content__intro-text">
              <Link href="/zapisatsya">Записаться на химчистку</Link>
              {" · "}
              <a href="tel:+375292230322">+375 29 223 03 22</a>
            </p>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Чем детейлинг-химчистка отличается от обычной уборки
            </h2>
            <p>
              Обычная уборка снимает пыль с поверхности и оставляет пятна в
              ворсе, швах и под сиденьями. Детейлинг-химчистка салона
              прорабатывает каждую зону отдельно: химия под тип материала,
              экстрактор для ткани и ковров, отдельные составы для кожи.
            </p>
            <p>
              В комплекс входят потолок и козырьки, стойки, ремни, торпеда,
              руль, воздуховоды, карты дверей, уплотнители, сиденья, пол, стёкла
              проёмов и багажник. Специфические пятна — кофе, жир, краситель —
              ведём составом под это пятно, а не универсальным средством. По
              согласованию разбираем элементы, чтобы достать загрязнение под
              сиденьем и обшивкой.
            </p>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Варианты химчистки салона и цены в Витебске
            </h2>
            <p>
              Цена в таблице ниже зависит от класса автомобиля: 1 класс —
              компактные модели, 5 класс — крупные и премиальные. Итог может
              измениться, если загрязнение сильнее типового.
            </p>
            <ul className="service-content__list">
              <li>
                <strong>Комплексная химчистка салона</strong> — от 708 Б̶
                (1 класс) до 977 Б̶ (5 класс).
              </li>
              <li>
                <strong>Комплекс с разбором</strong> — от 787 Б̶. Нужен, когда
                грязь ушла под сиденья и в ниши.
              </li>
              <li>
                <strong>Локальная химчистка и пятна</strong> — от 33 Б̶. Одно
                переднее сиденье из текстиля или тёмной кожи — от 33 Б̶,
                светлая кожа — от 39 Б̶.
              </li>
              <li>
                <strong>Потолок с козырьками</strong> — от 72 Б̶,{" "}
                <strong>багажник</strong> — от 59 Б̶,{" "}
                <strong>ковролин салона</strong> — от 72 Б̶.
              </li>
              <li>
                <strong>Чистка кожи LeTech</strong> — одно сиденье от 72 Б̶,
                все кожаные элементы салона от 315 Б̶ для 1 класса.
              </li>
              <li>
                <strong>Консервация после комплекса</strong> составами Koch или
                LeTech — от 215 Б̶. Кожа остаётся эластичной и меньше собирает
                воду и грязь, пластик получает матовый вид без липкой плёнки.
              </li>
            </ul>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Как проходит химчистка салона
            </h2>
            <ol className="service-content__list">
              <li>
                <strong>Осмотр и смета</strong> — тип материала, пятна, запах,
                нужен ли разбор. Цену фиксируем до начала.
              </li>
              <li>
                <strong>Сухая уборка</strong> — пыль, песок и мусор из щелей,
                чтобы химия работала по загрязнению, а не по крошкам.
              </li>
              <li>
                <strong>Чистка по зонам</strong> — состав под кожу, ткань или
                алькантару, отдельная проработка пятен.
              </li>
              <li>
                <strong>Сушка</strong> — салон выдаём после сушки, срок
                согласуем заранее.
              </li>
              <li>
                <strong>Запах и защита</strong> — озонирование, если запах
                остался в материале, и по желанию консервация Koch или LeTech.
              </li>
              <li>
                <strong>Сдача</strong> — показываем результат и даём
                рекомендации по уходу. Гарантия на работы — до 6 месяцев.
              </li>
            </ol>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Почему химчистку салона делают в Ambadetail
            </h2>
            <ul className="service-content__list">
              <li>
                <strong>Химия Koch и LeTech</strong> — отдельные составы для
                кожи, текстиля и пластика, не бытовая химия.
              </li>
              <li>
                <strong>Прозрачный прайс по 5 классам</strong> — видно цену
                комплекса, локальной чистки и защиты до визита.
              </li>
              <li>
                <strong>Гарантия до 6 месяцев</strong> на выполненные работы.
              </li>
              <li>
                <strong>Витебск, ул. П. Бровки, 6А</strong> — Пн–Пт 10:00–19:00,
                Сб–Вс 10:00–17:00.
              </li>
              <li>
                <strong>Запись по телефону</strong> —{" "}
                <a href="tel:+375292230322">+375 29 223 03 22</a> или{" "}
                <Link href="/zapisatsya">форма записи</Link>.
              </li>
            </ul>
          </div>

          {/* 🔥 ССЫЛКИ НА ДРУГИЕ УСЛУГИ — ВНУТРЕННЯЯ ПЕРЕЛИНКОВКА */}
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
                <Link href="/uslugi/tonirovka">Тонировка в Витебске</Link>
              </li>
              <li>
                <Link href="/blog/khimchistka-salona-vitebsk">
                  Как проходит химчистка салона
                </Link>
              </li>
              <li>
                <Link href="/zapisatsya">Запись на химчистку</Link>
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Вопросы о химчистке авто в Витебске
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
              Цена химчистки авто в Витебске по классам
            </h2>
            <PriceTable />
            <BrandsTable />
          </div>

          {/* SEO ТЕКСТ */}
          <div className="seo-content">
            <h2 className="seo-title">
              Химчистка салона автомобиля в Витебске и области
            </h2>
            <p>
              К химчистке салона обращаются перед продажей, после зимы, перевозки
              животных и когда в машине остался запах табака или сырости. В
              Ambadetail работа начинается с осмотра: говорим, что выйдет
              локально, а где нужен комплекс или разбор. Класс авто смотрим по
              таблице брендов ниже — от него зависит цена комплекса.
            </p>
            <p>
              Студия принимает автомобили из Витебска и Витебской области.
              Адрес: ул. П. Бровки, 6А. Телефон{" "}
              <a href="tel:+375292230322">+375 29 223 03 22</a>. Гарантия на
              работы — до 6 месяцев.
            </p>
            <div className="seo-conclusion">
              <h3 className="seo-conclusion-title">
                Запись на химчистку авто в Витебске
              </h3>
              <p className="seo-conclusion-final">
                <Link href="/zapisatsya">
                  Оставьте заявку онлайн
                </Link>{" "}
                или позвоните — подскажем ориентир по классу авто до визита.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
