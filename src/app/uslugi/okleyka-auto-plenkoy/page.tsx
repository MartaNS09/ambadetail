"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  SunmaxTable,
  StekTable,
  LlumarTable,
  ColorFilmTable,
  BrandsTable,
} from "./tables";
import "./page.scss";

export default function OkleykaPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(2);

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

  const titleParts = ["Оклейка", "антигравийной", "плёнкой"];

  const faqItems = [
    {
      question:
        "Чем отличается прозрачная PPF от цветной полиуретановой пленки?",
      answer:
        "Обе пленки полиуретановые и защищают ЛКП. Прозрачная PPF сохраняет заводской цвет, а цветная полиуретановая пленка одновременно защищает кузов и меняет цвет автомобиля.",
    },
    {
      question: "Какие зоны лучше оклеить в первую очередь?",
      answer:
        "Чаще всего оклеивают зоны риска: капот, бампер, фары, зеркала, стойки и кромки дверей. Оптимальный набор подберём после осмотра и с учётом условий эксплуатации.",
    },
    {
      question: "Сколько времени занимает оклейка автомобиля плёнкой?",
      answer:
        "Срок зависит от объёма работ: частичная оклейка обычно занимает от 1 дня, полная — несколько дней. Точный срок назовём после оценки автомобиля и выбранного комплекса.",
    },
    {
      question: "Нужно ли полировать кузов перед оклейкой?",
      answer:
        "Если есть выраженные дефекты (голограммы, царапины, мутность), лёгкая полировка перед оклейкой улучшит внешний вид под плёнкой. Решение зависит от состояния ЛКП.",
    },
    {
      question: "Как ухаживать за плёнкой после оклейки?",
      answer:
        "Обычно рекомендуем выдержать паузу после оклейки, затем использовать бережную мойку без абразивов. Дадим инструкции по уходу и безопасным средствам.",
    },
    {
      question: "Останутся ли следы после снятия плёнки?",
      answer:
        "При корректном монтаже и снятии качественная плёнка обычно снимается без повреждения ЛКП. Результат зависит от состояния покрытия и условий эксплуатации.",
    },
    {
      question:
        "Когда выбрать цветную полиуретановую пленку вместо прозрачной?",
      answer:
        "Цветную полиуретановую пленку выбирают, когда нужна полная смена цвета с одновременной защитой ЛКП. Прозрачная PPF подойдет, если нужно сохранить заводской цвет кузова.",
    },
  ];

  return (
    <>
      {/* Hero секция */}
      <section
        className="service-hero"
        aria-label="Оклейка антигравийной плёнкой в Витебске"
      >
        <div className="service-hero__bg">
          <Image
            src="/images/services/vinil.webp"
            alt="Оклейка антигравийной плёнкой автомобиля в Витебске"
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
              Защита кузова автомобиля от сколов, царапин и агрессивной среды.
              Полная или частичная оклейка прозрачной или цветной полиуретановой
              плёнкой.
            </p>
          </div>
        </div>
      </section>

      {/* Контент страницы */}
      <div className="service-content">
        <div className="container">
          {/* Введение */}
          <div className="service-content__intro">
            <p className="service-content__intro-text">
              Оклейка авто плёнкой в <strong>Витебске</strong>: защита кузова
              антигравийной (PPF) плёнкой и полная смена цвета цветной
              полиуретановой плёнкой. Полная оклейка кузова, зоны риска или
              отдельные элементы — подберём вариант под ваш бюджет и задачу.
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

          {/* Карточки */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Защитная и цветная полиуретановая пленка
            </h2>
            <div className="two-cards">
              <div className="two-cards__item two-cards__item--blue">
                <h3 className="two-cards__title">Защитная пленка (PPF)</h3>
                <p className="two-cards__text">
                  Прозрачная или матовая полиуретановая пленка сохраняет
                  заводской цвет авто и защищает ЛКП от сколов, царапин и
                  реагентов. Идеальна для новых машин и тех, кто не хочет менять
                  внешний вид.
                </p>
                <p className="two-cards__note">
                  Полная или частичная оклейка кузова, фары, зоны риска — цены в
                  таблицах ниже.
                </p>
              </div>
              <div className="two-cards__item two-cards__item--green">
                <h3 className="two-cards__title">
                  Цветная полиуретановая пленка
                </h3>
                <p className="two-cards__text">
                  Цветная полиуретановая пленка позволяет полностью изменить
                  цвет автомобиля и одновременно защищает ЛКП от сколов,
                  пескоструя и мелких царапин.
                </p>
                <p className="two-cards__note">
                  В этом разделе предусмотрена только услуга полной оклейки
                  цветной полиуретановой пленкой.
                </p>
              </div>
            </div>
          </div>

          {/* Таблицы цен */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Цена оклейки автомобиля плёнкой
            </h2>
            <SunmaxTable />
            <StekTable />
            <LlumarTable />
            <ColorFilmTable />
            <BrandsTable />
          </div>

          {/* SEO Контент */}
          <div className="seo-content">
            <h2 className="seo-title">
              Оклейка автомобиля защитной пленкой в Витебске
            </h2>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Что такое защитная пленка для автомобиля?
              </h3>
              <p>
                <span className="seo-highlight">Защитная пленка</span> — это
                современный полиуретановый материал, который наносится на
                лакокрасочное покрытие автомобиля для его защиты от внешних
                воздействий. В отличие от традиционных защитных покрытий,
                прозрачная защитная пленка создает невидимый барьер, который
                поглощает удары, предотвращает появление царапин и сколов,
                сохраняя при этом оригинальный внешний вид автомобиля.
              </p>
              <p>
                Современные защитные пленки обладают уникальными свойствами: они
                самовосстанавливаются от мелких царапин, устойчивы к
                ультрафиолетовому излучению, химическим реагентам и перепадам
                температур. При этом пленка остается практически невидимой, не
                изменяя цвет и фактуру заводского ЛКП.
              </p>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Виды защитных пленок для автомобиля
              </h3>
              <div className="seo-cards">
                <div className="seo-card">
                  <div className="seo-card-icon">🛡️</div>
                  <h4 className="seo-card-title">Прозрачная бронепленка</h4>
                  <p className="seo-card-text">
                    Базовый вариант защиты ЛКП. Сохраняет оригинальный цвет
                    автомобиля, защищает от сколов, царапин и воздействия
                    окружающей среды. Имеет эффект самовосстановления мелких
                    повреждений.
                  </p>
                </div>
                <div className="seo-card">
                  <div className="seo-card-icon">🌈</div>
                  <h4 className="seo-card-title">Матовые и сатиновые пленки</h4>
                  <p className="seo-card-text">
                    Придают автомобилю благородный матовый или сатиновый вид без
                    изменения заводского ЛКП. Защитные свойства аналогичны
                    прозрачной пленке, но с изменением визуального эффекта.
                  </p>
                </div>
                <div className="seo-card">
                  <div className="seo-card-icon">💎</div>
                  <h4 className="seo-card-title">
                    Керамическое покрытие с пленкой
                  </h4>
                  <p className="seo-card-text">
                    Комбинированная технология, сочетающая защитную пленку с
                    керамическим покрытием. Обеспечивает максимальную защиту и
                    легкий уход за поверхностью автомобиля.
                  </p>
                </div>
                <div className="seo-card">
                  <div className="seo-card-icon">🚗</div>
                  <h4 className="seo-card-title">Антигравийная защита</h4>
                  <p className="seo-card-text">
                    Специальная пленка повышенной толщины для наиболее уязвимых
                    мест: капот, передние крылья, зеркала, пороги. Надежно
                    защищает от камней и дорожного гравия.
                  </p>
                </div>
              </div>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Оклейка автомобиля цветной полиуретановой пленкой
              </h3>
              <p>
                <span className="seo-highlight">
                  Цветная полиуретановая пленка
                </span>{" "}
                — это решение для полной смены цвета с дополнительной защитой
                ЛКП от сколов, пескоструя и мелких царапин. В отличие от окраса,
                пленку можно снять без повреждения заводского покрытия при
                соблюдении технологии монтажа и демонтажа.
              </p>
              <p>
                В Витебске мы выполняем полную оклейку цветной полиуретановой
                пленкой под ключ: подбор оттенка, раскрой по лекалам, монтаж с
                гарантией и рекомендации по дальнейшему уходу.
              </p>
              <div className="seo-cards mt-3">
                <div className="seo-card">
                  <div className="seo-card-icon">🎨</div>
                  <h4 className="seo-card-title">Полная смена цвета</h4>
                  <p className="seo-card-text">
                    Оклейка всего кузова цветной полиуретановой пленкой. Широкий
                    выбор цветов и оттенков, мат и глянец. Подходит для
                    обновления вида авто и смены цвета без покраски с
                    сохранением защиты ЛКП.
                  </p>
                </div>
                <div className="seo-card">
                  <div className="seo-card-icon">✨</div>
                  <h4 className="seo-card-title">Только полная оклейка</h4>
                  <p className="seo-card-text">
                    Для цветной полиуретановой пленки мы выполняем только полную
                    оклейку кузова, чтобы обеспечить равномерный цвет,
                    аккуратные стыки и одинаковый уровень защиты по всему
                    автомобилю.
                  </p>
                </div>
                <div className="seo-card">
                  <div className="seo-card-icon">🛡️</div>
                  <h4 className="seo-card-title">
                    Уход и срок службы цветной полиуретановой пленки
                  </h4>
                  <p className="seo-card-text">
                    Качественная цветная полиуретановая пленка служит несколько
                    лет при бережной мойке и отсутствии абразивов. Рекомендуем
                    те же правила, что и для защитной: без жестких щеток, без
                    восков на растворителях. Снятие — без повреждения заводской
                    краски.
                  </p>
                </div>
              </div>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Какие зоны автомобиля защищают пленкой?
              </h3>
              <div className="seo-process">
                <div className="seo-process-step">
                  <div className="seo-process-number">1</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">Полная оклейка кузова</h4>
                    <p className="seo-process-text">
                      Защита всего кузова автомобиля — максимальный уровень
                      защиты. Пленкой покрываются все внешние поверхности:
                      капот, крылья, двери, крыша, багажник. Идеально для новых
                      автомобилей и премиальных марок.
                    </p>
                  </div>
                </div>
                <div className="seo-process-step">
                  <div className="seo-process-number">2</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">Защита передней части</h4>
                    <p className="seo-process-text">
                      Наиболее популярный вариант. Защищаются наиболее уязвимые
                      элементы: капот (полностью или частично), передние крылья,
                      бампер, фары, зеркала заднего вида. Защищает от 90%
                      возможных повреждений.
                    </p>
                  </div>
                </div>
                <div className="seo-process-step">
                  <div className="seo-process-number">3</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">
                      Защита отдельных элементов
                    </h4>
                    <p className="seo-process-text">
                      Оклейка конкретных элементов, подверженных повреждениям:
                      пороги, арки колес, зона за колесами, ручки дверей, нижняя
                      часть дверей. Экономичный вариант точечной защиты.
                    </p>
                  </div>
                </div>
                <div className="seo-process-step">
                  <div className="seo-process-number">4</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">Защита фар и оптики</h4>
                    <p className="seo-process-text">
                      Специальная прозрачная пленка для фар, противотуманных фар
                      и задних фонарей. Защищает от сколов, помутнения и
                      повреждений, сохраняя светопропускание на 100%.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Преимущества оклейки автомобиля защитной пленкой
              </h3>
              <table className="seo-comparison-table">
                <thead>
                  <tr>
                    <th>Преимущество</th>
                    <th>Защитная пленка</th>
                    <th>Без защиты</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="seo-comparison-criterion">
                      Защита от сколов и царапин
                    </td>
                    <td className="seo-comparison-good">95-98% защита</td>
                    <td className="seo-comparison-bad">0% защита</td>
                  </tr>
                  <tr>
                    <td className="seo-comparison-criterion">Сохранение ЛКП</td>
                    <td className="seo-comparison-good">Полная сохранность</td>
                    <td className="seo-comparison-bad">
                      Постепенное разрушение
                    </td>
                  </tr>
                  <tr>
                    <td className="seo-comparison-criterion">
                      Защита от химикатов
                    </td>
                    <td className="seo-comparison-good">Полная защита</td>
                    <td className="seo-comparison-bad">Риск повреждений</td>
                  </tr>
                  <tr>
                    <td className="seo-comparison-criterion">
                      Стойкость к УФ-лучам
                    </td>
                    <td className="seo-comparison-good">
                      Защита от выцветания
                    </td>
                    <td className="seo-comparison-bad">Выцветание краски</td>
                  </tr>
                  <tr>
                    <td className="seo-comparison-criterion">
                      Сохранение стоимости авто
                    </td>
                    <td className="seo-comparison-good">Повышает стоимость</td>
                    <td className="seo-comparison-bad">Снижает стоимость</td>
                  </tr>
                  <tr>
                    <td className="seo-comparison-criterion">Простота ухода</td>
                    <td className="seo-comparison-good">Легкое мытье</td>
                    <td className="seo-comparison-average">Стандартный уход</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Процесс оклейки автомобиля защитной пленкой
              </h3>
              <div className="seo-alert">
                <strong className="seo-alert-title">
                  Этапы профессиональной оклейки:
                </strong>
                <ul className="seo-alert-list">
                  <li>
                    <strong>Подготовка автомобиля</strong> — тщательная мойка,
                    обезжиривание, удаление всех загрязнений
                  </li>
                  <li>
                    <strong>Раскрой пленки</strong> — компьютерная или ручная
                    разметка по лекалам конкретной модели авто
                  </li>
                  <li>
                    <strong>Нанесение пленки</strong> — профессиональное
                    нанесение с использованием специальных растворов
                  </li>
                  <li>
                    <strong>Удаление воздуха и влаги</strong> — выгонка всех
                    пузырьков, прокатка специальными валиками
                  </li>
                  <li>
                    <strong>Сушка и фиксация</strong> — финальная сушка,
                    проверка качества, устранение мелких дефектов
                  </li>
                  <li>
                    <strong>Контроль качества</strong> — проверка на отсутствие
                    пузырей, заломов, правильность стыков
                  </li>
                </ul>
              </div>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Срок службы и уход за защитной пленкой
              </h3>
              <p>Качественная защитная пленка при правильном уходе служит:</p>
              <ul className="seo-list">
                <li>
                  <span className="seo-list-highlight">5-7 лет</span> — для
                  прозрачных бронепленок премиум-класса
                </li>
                <li>
                  <span className="seo-list-highlight">3-5 лет</span> — для
                  стандартных защитных пленок
                </li>
                <li>
                  <span className="seo-list-highlight">2-4 года</span> — для
                  матовых и цветных пленок
                </li>
                <li>
                  <span className="seo-list-highlight">7-10 лет</span> — для
                  пленок с керамическим покрытием
                </li>
              </ul>
              <p>
                <strong>Рекомендации по уходу:</strong>
              </p>
              <ul className="seo-list">
                <li>Первые 7-10 дней избегать моек и воздействия воды</li>
                <li>
                  Использовать только мягкие безабразивные средства для мытья
                </li>
                <li>
                  Не использовать восковые полироли на основе растворителей
                </li>
                <li>Избегать механического воздействия (щетки, скребки)</li>
                <li>Регулярно проводить визуальный осмотр состояния пленки</li>
              </ul>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Для каких автомобилей рекомендуется оклейка пленкой?
              </h3>
              <p>
                Защитная пленка рекомендуется для всех типов автомобилей, но
                особенно актуальна для:
              </p>
              <ul className="seo-list">
                <li>
                  <span className="seo-list-highlight">Новых автомобилей</span>{" "}
                  — защита с первого дня эксплуатации
                </li>
                <li>
                  <span className="seo-list-highlight">
                    Автомобилей премиум-класса
                  </span>{" "}
                  — Mercedes, BMW, Audi, Porsche и других
                </li>
                <li>
                  <span className="seo-list-highlight">
                    Автомобилей с дорогостоящим ремонтом ЛКП
                  </span>{" "}
                  — матовые покрытия, металлики, перламутры
                </li>
                <li>
                  <span className="seo-list-highlight">
                    Автомобилей для активной эксплуатации
                  </span>{" "}
                  — частые поездки по трассе, gravel-дорогам
                </li>
                <li>
                  <span className="seo-list-highlight">
                    Коммерческого транспорта
                  </span>{" "}
                  — защита от мелких повреждений в городских условиях
                </li>
                <li>
                  <span className="seo-list-highlight">
                    Автомобилей перед продажей
                  </span>{" "}
                  — сохранение идеального состояния ЛКП
                </li>
              </ul>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Часто задаваемые вопросы об оклейке автомобиля пленкой
              </h3>
              <div className="seo-faq">
                <div className="seo-faq-item">
                  <h4 className="seo-faq-question">
                    Видна ли защитная пленка на автомобиле?
                  </h4>
                  <p className="seo-faq-answer">
                    Качественная прозрачная пленка практически невидима. При
                    правильной установке она не изменяет внешний вид автомобиля,
                    сохраняя заводской блеск и цвет ЛКП.
                  </p>
                </div>
                <div className="seo-faq-item">
                  <h4 className="seo-faq-question">
                    Можно ли снять пленку позже?
                  </h4>
                  <p className="seo-faq-answer">
                    Да, профессионально установленная пленка снимается без
                    повреждения заводского ЛКП. Процесс снятия занимает
                    несколько часов и выполняется специалистами.
                  </p>
                </div>
                <div className="seo-faq-item">
                  <h4 className="seo-faq-question">
                    Защищает ли пленка от серьезных повреждений?
                  </h4>
                  <p className="seo-faq-answer">
                    Пленка защищает от мелких и средних повреждений: сколов от
                    гравия, царапин, воздействия химикатов. От серьезных ДТП
                    пленка не защищает, но может уменьшить повреждения.
                  </p>
                </div>
                <div className="seo-faq-item">
                  <h4 className="seo-faq-question">
                    Как пленка ведет себя зимой?
                  </h4>
                  <p className="seo-faq-answer">
                    Качественные пленки рассчитаны на температурный диапазон от
                    -40°C до +80°C. Они устойчивы к морозам, солевым реагентам и
                    не теряют своих свойств зимой.
                  </p>
                </div>
                <div className="seo-faq-item">
                  <h4 className="seo-faq-question">
                    Можно ли оклеить часть автомобиля?
                  </h4>
                  <p className="seo-faq-answer">
                    Да, мы предлагаем различные варианты: полная оклейка,
                    оклейка передней части, защита отдельных элементов (капот,
                    фары, пороги).
                  </p>
                </div>
                <div className="seo-faq-item">
                  <h4 className="seo-faq-question">
                    Даете ли вы гарантию на работу?
                  </h4>
                  <p className="seo-faq-answer">
                    Да, мы предоставляем гарантию на материалы и работы. Срок
                    гарантии зависит от типа пленки и составляет от 3 до 7 лет.
                  </p>
                </div>
              </div>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Стоимость оклейки автомобиля защитной пленкой в Витебске
              </h3>
              <p>Стоимость оклейки зависит от нескольких факторов:</p>
              <ul className="seo-list">
                <li>
                  <span className="seo-list-highlight">Тип пленки</span> —
                  прозрачная, матовая, с керамическим покрытием
                </li>
                <li>
                  <span className="seo-list-highlight">Площадь оклейки</span> —
                  полный кузов, передняя часть, отдельные элементы
                </li>
                <li>
                  <span className="seo-list-highlight">Класс автомобиля</span> —
                  компактный, средний, бизнес, премиум (см. таблицу выше)
                </li>
                <li>
                  <span className="seo-list-highlight">Сложность кузова</span> —
                  количество изгибов, рельефных элементов
                </li>
                <li>
                  <span className="seo-list-highlight">Бренд пленки</span> —
                  различные производители с разной стоимостью
                </li>
              </ul>
              <p>
                Точную стоимость для вашего автомобиля можно узнать после
                бесплатной консультации и осмотра автомобиля. Мы работаем с
                проверенными производителями пленок и гарантируем качество
                выполненных работ.
              </p>
            </div>

            <div className="seo-conclusion">
              <h4 className="seo-conclusion-title">
                Оклейка автомобиля защитной и цветной пленкой в Витебске
              </h4>
              <p>
                Защитная прозрачная PPF сохраняет заводской ЛКП от сколов и
                царапин, а цветная полиуретановая пленка позволяет полностью
                изменить цвет автомобиля и одновременно защитить кузов.
              </p>
              <p>
                Используем качественные материалы, раскрой по лекалам и
                профессиональный монтаж. Гарантируем индивидуальный подбор
                варианта под задачу и бюджет.
              </p>
              <p className="seo-conclusion-final">
                <strong>
                  Для расчета стоимости и записи на полную оклейку цветной
                  полиуретановой пленкой обращайтесь к нашим администраторам.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
