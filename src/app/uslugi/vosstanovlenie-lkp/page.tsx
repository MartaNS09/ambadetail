"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { PriceTable, BrandsTable } from "./tables";
import "./page.scss";

export default function LkpPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // ИСПРАВЛЕННЫЙ обработчик для SEO-аккордеона
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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const titleParts = ["Восстановление", "ЛКП"];

  const faqItems = [
    {
      question: "Что такое технология Refiller F5?",
      answer:
        "Refiller F5 — технология восстановления лакокрасочного покрытия, направленная на улучшение внешнего вида и устранение выраженных дефектов. Подходит не во всех случаях — возможность оцениваем по состоянию ЛКП.",
    },
    {
      question: "Какие дефекты можно убрать при восстановлении ЛКП?",
      answer:
        "Чаще всего это потёртости, мелкие/средние царапины, помутнение, следы эксплуатации. Итог зависит от глубины повреждений и толщины слоя лака.",
    },
    {
      question: "Сколько времени занимает восстановление ЛКП?",
      answer:
        "Срок зависит от класса автомобиля и объёма работ. Обычно требуется от одного дня и более — точнее скажем после осмотра.",
    },
    {
      question: "Нужно ли потом наносить защитное покрытие?",
      answer:
        "После восстановления ЛКП рекомендуем защиту (керамика/воск/антидождь) — это помогает дольше сохранить результат и облегчает уход.",
    },
    {
      question: "От чего зависит цена восстановления ЛКП?",
      answer:
        "На стоимость влияет класс автомобиля, состояние ЛКП, наличие сложных дефектов и требуемый объём подготовительных работ.",
    },
    {
      question: "Даете ли гарантию на работы?",
      answer:
        "Да, предоставляем гарантию на выполненные работы и даём рекомендации по уходу, чтобы результат сохранялся максимально долго.",
    },
  ];

  return (
    <>
      <section
        className="service-hero"
        aria-label="Восстановление ЛКП в Витебске"
      >
        <div className="service-hero__bg">
          <Image
            src="/images/services/bugatti.webp"
            alt="Восстановление лакокрасочного покрытия автомобиля в Витебске"
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
                      className={`service-hero__title-letter ${isVisible ? "service-hero__title-letter--visible" : ""}`}
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
              Восстановление лакокрасочного покрытия по технологии Refiller F5.
              Удаление царапин, сколов, голограмм и возвращение заводского
              блеска.
            </p>
          </div>
        </div>
      </section>

      <div className="service-content">
        <div className="container">
          {/* Введение */}
          <div className="service-content__intro">
            <p className="service-content__intro-text">
              Восстановление ЛКП в <strong>Витебске</strong> по технологии{" "}
              <strong>Refiller F5</strong> помогает вернуть блеск и глубину
              цвета, убрать выраженные дефекты и улучшить внешний вид
              автомобиля. Стоимость зависит от класса авто и объёма работ — ниже
              актуальные цены.
            </p>
          </div>

          {/* FAQ Аккордеон */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">Вопросы и ответы</h2>
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

          {/* Таблицы цен */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Цена восстановления ЛКП
            </h2>
            <PriceTable />
            <BrandsTable />
          </div>

          {/* SEO Контент */}
          <div className="seo-content">
            <h2 className="seo-title">
              Восстановление ЛКП автомобиля по технологии Refiller F5 в Витебске
            </h2>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Что такое технология Refiller F5?
              </h3>
              <p>
                <span className="seo-highlight">Refiller F5</span> — это
                современная инновационная технология профессионального
                восстановления лакокрасочного покрытия автомобилей, которая
                позволяет устранять различные дефекты ЛКП без необходимости
                перекраски кузова. В отличие от традиционных методов полировки,
                технология Refiller F5 работает на глубоком уровне, заполняя
                микротрещины, царапины и сколы специальными составами, которые
                восстанавливают целостность заводского лакокрасочного покрытия.
              </p>
              <p>
                Технология Refiller F5 была разработана для бережного
                восстановления оригинального ЛКП автомобиля. Она позволяет
                сохранить заводское покрытие, что особенно важно для поддержания
                стоимости автомобиля на вторичном рынке. В процессе
                восстановления используются специальные профессиональные
                составы, которые не просто маскируют дефекты, а именно
                восстанавливают структуру лакокрасочного слоя.
              </p>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Какие проблемы решает восстановление ЛКП по технологии Refiller
                F5?
              </h3>
              <div className="seo-cards">
                <div className="seo-card">
                  <div className="seo-card-icon">✅</div>
                  <h4 className="seo-card-title">Устранение царапин</h4>
                  <p className="seo-card-text">
                    Технология эффективно устраняет как поверхностные, так и
                    глубокие царапины различного происхождения: от контакта с
                    кустами и ветками до повреждений на автомойках.
                  </p>
                </div>
                <div className="seo-card">
                  <div className="seo-card-icon">✅</div>
                  <h4 className="seo-card-title">Восстановление от сколов</h4>
                  <p className="seo-card-text">
                    Множественные сколы от гравия и камней на дорогах — одна из
                    самых распространенных проблем. Refiller F5 заполняет эти
                    повреждения, восстанавливая гладкость поверхности.
                  </p>
                </div>
                <div className="seo-card">
                  <div className="seo-card-icon">✅</div>
                  <h4 className="seo-card-title">Лечение окисления</h4>
                  <p className="seo-card-text">
                    Потускнение и выцветание краски под воздействием
                    ультрафиолета и агрессивных сред эффективно устраняется
                    восстановлением ЛКП.
                  </p>
                </div>
                <div className="seo-card">
                  <div className="seo-card-icon">✅</div>
                  <h4 className="seo-card-title">Удаление следов</h4>
                  <p className="seo-card-text">
                    Следы от птичьего помета, древесной смолы, химических
                    реагентов и других загрязнений полностью удаляются в
                    процессе восстановления.
                  </p>
                </div>
              </div>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Процесс восстановления ЛКП по технологии Refiller F5
              </h3>
              <div className="seo-process">
                <div className="seo-process-step">
                  <div className="seo-process-number">1</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">Диагностика и оценка</h4>
                    <p className="seo-process-text">
                      Мастер проводит тщательный осмотр автомобиля, определяет
                      состояние лакокрасочного покрытия, выявляет все дефекты и
                      составляет план работ. На этом этапе также определяется
                      точная стоимость восстановления.
                    </p>
                  </div>
                </div>
                <div className="seo-process-step">
                  <div className="seo-process-number">2</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">
                      Подготовка поверхности
                    </h4>
                    <p className="seo-process-text">
                      Автомобиль проходит профессиональную мойку, обезжиривание
                      и подготовку. Удаляются все загрязнения, остатки воска,
                      силикона и других средств, которые могут помешать
                      качественному восстановлению.
                    </p>
                  </div>
                </div>
                <div className="seo-process-step">
                  <div className="seo-process-number">3</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">
                      Восстановление структуры ЛКП
                    </h4>
                    <p className="seo-process-text">
                      С помощью специальных составов Refiller F5 мастер
                      заполняет все дефекты: царапины, сколы, микротрещины.
                      Составы проникают в повреждения и восстанавливают
                      целостность лакокрасочного слоя.
                    </p>
                  </div>
                </div>
                <div className="seo-process-step">
                  <div className="seo-process-number">4</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">Полировка и защита</h4>
                    <p className="seo-process-text">
                      После восстановления структуры ЛКП выполняется
                      профессиональная полировка для возвращения зеркального
                      блеска. В завершение наносится защитное покрытие для
                      долговечности результата.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Преимущества технологии Refiller F5 перед другими методами
              </h3>
              <table className="seo-comparison-table">
                <thead>
                  <tr>
                    <th>Критерий</th>
                    <th>Refiller F5</th>
                    <th>Обычная полировка</th>
                    <th>Перекраска</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="seo-comparison-criterion">
                      Сохранение заводского ЛКП
                    </td>
                    <td className="seo-comparison-good">
                      Полностью сохраняется
                    </td>
                    <td className="seo-comparison-average">
                      Частично снимается
                    </td>
                    <td className="seo-comparison-bad">Удаляется полностью</td>
                  </tr>
                  <tr>
                    <td className="seo-comparison-criterion">
                      Время выполнения
                    </td>
                    <td className="seo-comparison-neutral">1-2 дня</td>
                    <td className="seo-comparison-neutral">3-6 часов</td>
                    <td className="seo-comparison-neutral">3-7 дней</td>
                  </tr>
                  <tr>
                    <td className="seo-comparison-criterion">
                      Стоимость работ
                    </td>
                    <td className="seo-comparison-neutral">1500-2100 BYN</td>
                    <td className="seo-comparison-neutral">от 300 BYN</td>
                    <td className="seo-comparison-neutral">от 3000 BYN</td>
                  </tr>
                  <tr>
                    <td className="seo-comparison-criterion">
                      Долговечность результата
                    </td>
                    <td className="seo-comparison-neutral">3-5 лет</td>
                    <td className="seo-comparison-neutral">3-6 месяцев</td>
                    <td className="seo-comparison-neutral">5-10 лет</td>
                  </tr>
                  <tr>
                    <td className="seo-comparison-criterion">
                      Влияние на стоимость авто
                    </td>
                    <td className="seo-comparison-good">Повышает</td>
                    <td className="seo-comparison-average">Нейтрально</td>
                    <td className="seo-comparison-bad">Снижает на 20-30%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Для каких автомобилей подходит восстановление ЛКП?
              </h3>
              <p>
                Технология Refiller F5 универсальна и подходит для автомобилей
                всех марок и классов.
              </p>
              <ul className="seo-list">
                <li>
                  <span className="seo-list-highlight">
                    Бюджетными автомобилями
                  </span>{" "}
                  (класс 1-2) — Volkswagen Polo, Skoda Fabia, Kia Rio, Hyundai
                  Solaris и другие
                </li>
                <li>
                  <span className="seo-list-highlight">
                    Автомобилями среднего класса
                  </span>{" "}
                  (класс 2-3) — Audi A4/A6, BMW 3/5 серии, Mercedes C/E класса,
                  Toyota Camry
                </li>
                <li>
                  <span className="seo-list-highlight">
                    Премиальными автомобилями
                  </span>{" "}
                  (класс 4-5) — Porsche, Bentley, Rolls-Royce, Lamborghini,
                  Ferrari
                </li>
                <li>
                  <span className="seo-list-highlight">
                    Внедорожниками и кроссоверами
                  </span>{" "}
                  всех классов
                </li>
                <li>
                  <span className="seo-list-highlight">
                    Коммерческим транспортом
                  </span>{" "}
                  — микроавтобусы, фургоны
                </li>
                <li>
                  <span className="seo-list-highlight">Мототехникой</span> —
                  мотоциклы, скутеры
                </li>
              </ul>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Когда необходимо восстановление ЛКП?
              </h3>
              <div className="seo-alert">
                <strong className="seo-alert-title">
                  Рекомендуемые ситуации для восстановления ЛКП:
                </strong>
                <ul className="seo-alert-list">
                  <li>
                    Автомобиль имеет множество мелких сколов от гравия после
                    активной эксплуатации
                  </li>
                  <li>
                    Появились царапины различной глубины от контакта с ветками,
                    кустами или на автомойке
                  </li>
                  <li>
                    ЛКП потеряло блеск, потускнело, появились признаки окисления
                  </li>
                  <li>
                    На поверхности есть следы от птичьего помета, древесной
                    смолы или химических веществ
                  </li>
                  <li>
                    Планируется продажа автомобиля — восстановление ЛКП повысит
                    его стоимость
                  </li>
                  <li>
                    Автомобиль новый или недавний, но уже имеет повреждения ЛКП
                  </li>
                  <li>
                    После неудачной полировки или самостоятельного ухода за ЛКП
                  </li>
                </ul>
              </div>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Часто задаваемые вопросы о восстановлении ЛКП
              </h3>
              <div className="seo-faq">
                <div className="seo-faq-item">
                  <h4 className="seo-faq-question">
                    Сколько времени занимает восстановление ЛКП?
                  </h4>
                  <p className="seo-faq-answer">
                    Полное восстановление лакокрасочного покрытия занимает 1-2
                    рабочих дня, в зависимости от состояния автомобиля и объема
                    работ.
                  </p>
                </div>
                <div className="seo-faq-item">
                  <h4 className="seo-faq-question">
                    Насколько долговечен результат?
                  </h4>
                  <p className="seo-faq-answer">
                    При правильном уходе результат сохраняется 3-5 лет. Мы
                    предоставляем гарантию 1 год на все работы по восстановлению
                    ЛКП.
                  </p>
                </div>
                <div className="seo-faq-item">
                  <h4 className="seo-faq-question">
                    Можно ли восстановить матовое покрытие?
                  </h4>
                  <p className="seo-faq-answer">
                    Да, технология Refiller F5 подходит для всех типов
                    лакокрасочных покрытий: глянцевых, матовых, металликов,
                    перламутров.
                  </p>
                </div>
                <div className="seo-faq-item">
                  <h4 className="seo-faq-question">
                    Что лучше: восстановление или перекраска?
                  </h4>
                  <p className="seo-faq-answer">
                    Восстановление предпочтительнее, так как сохраняет заводское
                    ЛКП, что важно для стоимости автомобиля. Перекраска может
                    снизить стоимость авто на 20-30%.
                  </p>
                </div>
              </div>
            </div>

            <div className="seo-conclusion">
              <h4 className="seo-conclusion-title">
                Восстановление ЛКП в Витебске — выбор профессионалов
              </h4>
              <p>
                Если ваш автомобиль нуждается в восстановлении лакокрасочного
                покрытия, технология Refiller F5 — оптимальное решение. Она
                сочетает бережное отношение к заводскому ЛКП, долговечность
                результата и разумную стоимость. Мы работаем в Витебске и готовы
                вернуть вашему автомобилю безупречный внешний вид.
              </p>
              <p className="seo-conclusion-final">
                <strong>
                  Для консультации и записи на восстановление ЛКП обращайтесь к
                  нашим администраторам.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
