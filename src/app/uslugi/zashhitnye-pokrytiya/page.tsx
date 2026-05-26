"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { PriceTable, BrandsTable } from "./tables";
import "./page.scss";

export default function ServicePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Обработчик для SEO-аккордеона
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
          {/* Введение */}
          <div className="service-content__intro">
            <p className="service-content__intro-text">
              <strong>Защитные покрытия</strong> для автомобиля в Витебске — это
              профессиональное нанесение керамики, жидкого стекла и гидрофобных
              составов. Защищаем кузов, стёкла, диски и салон от внешних
              воздействий.
            </p>
          </div>

          {/* Таблицы цен */}
          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Цена защитного покрытия автомобиля
            </h2>
            <PriceTable />
            <BrandsTable />
          </div>

          {/* SEO Контент */}
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
              <p>
                Современные защитные покрытия основаны на нанотехнологиях и
                керамических компонентах. Они заполняют микропоры лака, создавая
                гладкую, гидрофобную поверхность, которая отталкивает воду,
                грязь, химические реагенты и обеспечивает эффект самоочистки.
                Защита действует от 6 месяцев до 5 лет в зависимости от типа
                покрытия.
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
                      оптимального типа покрытия. Консультация клиента по выбору
                      защиты в зависимости от условий эксплуатации и бюджета.
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
                      смолы, железной пыли, старой защиты. Очистка
                      труднодоступных мест. Сушка компрессором.
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
                      окисления. Выравнивание поверхности для идеального
                      сцепления покрытия с лаком. Обезжиривание спиртовым
                      раствором.
                    </p>
                  </div>
                </div>
                <div className="seo-process-step">
                  <div className="seo-process-number">4</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">Нанесение покрытия</h4>
                    <p className="seo-process-text">
                      Нанесение состава специальными аппликаторами равномерным
                      слоем. Контроль толщины, устранение подтеков. Работа в
                      чистом помещении с контролем температуры и влажности.
                    </p>
                  </div>
                </div>
                <div className="seo-process-step">
                  <div className="seo-process-number">5</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">Полимеризация и сушка</h4>
                    <p className="seo-process-text">
                      Выдержка для полимеризации (от 2 до 24 часов в зависимости
                      от покрытия). Контроль процесса отверждения. Запрет на
                      использование автомобиля в период полимеризации.
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
                      гарантией. Рекомендации по поддержанию защиты.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Преимущества профессиональных защитных покрытий
              </h3>
              <table className="seo-comparison-table">
                <thead>
                  <tr>
                    <th>Характеристика</th>
                    <th>Керамическое покрытие</th>
                    <th>Жидкое стекло</th>
                    <th>Заводской лак</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="seo-comparison-criterion">Твердость</td>
                    <td className="seo-comparison-good">
                      9H (по карандашной шкале)
                    </td>
                    <td className="seo-comparison-average">6-7H</td>
                    <td className="seo-comparison-bad">2-3H</td>
                  </tr>
                  <tr>
                    <td className="seo-comparison-criterion">Гидрофобность</td>
                    <td className="seo-comparison-good">
                      95-98° угол скатывания
                    </td>
                    <td className="seo-comparison-good">90-95°</td>
                    <td className="seo-comparison-bad">60-70°</td>
                  </tr>
                  <tr>
                    <td className="seo-comparison-criterion">
                      Химическая стойкость
                    </td>
                    <td className="seo-comparison-good">
                      Высокая (кислоты, щелочи)
                    </td>
                    <td className="seo-comparison-average">Средняя</td>
                    <td className="seo-comparison-bad">Низкая</td>
                  </tr>
                  <tr>
                    <td className="seo-comparison-criterion">УФ-защита</td>
                    <td className="seo-comparison-good">Полная защита</td>
                    <td className="seo-comparison-good">Хорошая защита</td>
                    <td className="seo-comparison-bad">Частичная защита</td>
                  </tr>
                  <tr>
                    <td className="seo-comparison-criterion">
                      Стойкость к царапинам
                    </td>
                    <td className="seo-comparison-good">Высокая</td>
                    <td className="seo-comparison-average">Средняя</td>
                    <td className="seo-comparison-bad">Низкая</td>
                  </tr>
                  <tr>
                    <td className="seo-comparison-criterion">Срок службы</td>
                    <td className="seo-comparison-good">2-5 лет</td>
                    <td className="seo-comparison-average">1-2 года</td>
                    <td className="seo-comparison-bad">Без защиты</td>
                  </tr>
                  <tr>
                    <td className="seo-comparison-criterion">
                      Эффект самоочистки
                    </td>
                    <td className="seo-comparison-good">Сильный</td>
                    <td className="seo-comparison-average">Умеренный</td>
                    <td className="seo-comparison-bad">Отсутствует</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Для каких элементов автомобиля применяются защитные покрытия?
              </h3>
              <div className="seo-alert">
                <strong className="seo-alert-title">
                  Защитные покрытия наносятся на:
                </strong>
                <ul className="seo-alert-list">
                  <li>
                    <strong>Лакокрасочное покрытие кузова</strong> — полная или
                    частичная защита
                  </li>
                  <li>
                    <strong>Стекла автомобиля</strong> — антидождь, антилед,
                    защита от царапин
                  </li>
                  <li>
                    <strong>Диски колес</strong> — защита от тормозной пыли,
                    реагентов, облегчение мойки
                  </li>
                  <li>
                    <strong>Пластиковые элементы</strong> — бампера, молдинги,
                    защита от выцветания
                  </li>
                  <li>
                    <strong>Хромированные детали</strong> — защита от коррозии,
                    окисления
                  </li>
                  <li>
                    <strong>Салон</strong> — защита кожи, алькантары, ткани от
                    загрязнений
                  </li>
                  <li>
                    <strong>Фары и фонари</strong> — защита от помутнения,
                    сколов, царапин
                  </li>
                </ul>
              </div>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Стоимость защитных покрытий для автомобиля в Витебске
              </h3>
              <p>
                Стоимость нанесения защитного покрытия зависит от нескольких
                факторов:
              </p>
              <ul className="seo-list">
                <li>
                  <span className="seo-list-highlight">Тип покрытия</span> —
                  керамика, жидкое стекло, кварц, гибридные составы
                </li>
                <li>
                  <span className="seo-list-highlight">
                    Бренд и качество состава
                  </span>{" "}
                  — профессиональные или полупрофессиональные линии
                </li>
                <li>
                  <span className="seo-list-highlight">Класс автомобиля</span> —
                  размер кузова, сложность формы
                </li>
                <li>
                  <span className="seo-list-highlight">Состояние ЛКП</span> —
                  необходимость предварительной полировки
                </li>
                <li>
                  <span className="seo-list-highlight">Объем работ</span> —
                  полный кузов, частичная защита, дополнительные элементы
                </li>
              </ul>

              <p className="seo-mt-3">
                Мы предлагаем прозрачное ценообразование и несколько уровней
                защиты:
              </p>

              <div className="seo-alert">
                <strong className="seo-alert-title">
                  Уровни защитных покрытий:
                </strong>
                <ul className="seo-alert-list">
                  <li>
                    <strong>Базовый уровень</strong> — защита на 6-12 месяцев,
                    подходит для поддержания состояния
                  </li>
                  <li>
                    <strong>Стандартный уровень</strong> — защита на 1-2 года,
                    оптимальное соотношение цена/качество
                  </li>
                  <li>
                    <strong>Премиум уровень</strong> — керамика на 2-3 года,
                    максимальная защита и блеск
                  </li>
                  <li>
                    <strong>Элитный уровень</strong> — нанокерамика на 3-5 лет,
                    высочайшие защитные свойства
                  </li>
                  <li>
                    <strong>Комплексная защита</strong> — покрытие кузова +
                    стекол + дисков + салона
                  </li>
                </ul>
              </div>

              <p className="seo-mt-3">
                Для точного расчета приезжайте на диагностику. Мы подберем
                оптимальное решение под ваш бюджет и требования.
              </p>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Когда и кому особенно рекомендуется нанесение защитных покрытий?
              </h3>
              <p>
                Защитные покрытия особенно рекомендованы в следующих случаях:
              </p>
              <ul className="seo-list">
                <li>
                  <span className="seo-list-highlight">Новые автомобили</span> —
                  защита с первых дней эксплуатации
                </li>
                <li>
                  <span className="seo-list-highlight">
                    Автомобили после детейлинга
                  </span>{" "}
                  — сохранение результатов полировки
                </li>
                <li>
                  <span className="seo-list-highlight">
                    Авто премиум-класса
                  </span>{" "}
                  — сохранение стоимости и внешнего вида
                </li>
                <li>
                  <span className="seo-list-highlight">
                    Автомобили с матовым покрытием
                  </span>{" "}
                  — защита сложных в уходе поверхностей
                </li>
                <li>
                  <span className="seo-list-highlight">
                    При частой эксплуатации по трассе
                  </span>{" "}
                  — защита от гравия, насекомых, реагентов
                </li>
                <li>
                  <span className="seo-list-highlight">
                    Автомобили без гаража
                  </span>{" "}
                  — защита от УФ-лучей, перепадов температуры
                </li>
                <li>
                  <span className="seo-list-highlight">
                    Перед зимним сезоном
                  </span>{" "}
                  — защита от реагентов, соли, льда
                  <li>
                    <span className="seo-list-highlight">
                      При подготовке к продаже
                    </span>{" "}
                    — увеличение привлекательности и стоимости
                  </li>
                </li>
              </ul>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Часто задаваемые вопросы о защитных покрытиях
              </h3>
              <div className="seo-faq">
                <div className="seo-faq-item">
                  <h4 className="seo-faq-question">
                    Как мыть автомобиль с защитным покрытием?
                  </h4>
                  <p className="seo-faq-answer">
                    Рекомендуется бесконтактная мойка или ручная мойка мягкой
                    губкой с pH-нейтральными шампунями. Избегать автомоек с
                    щетками, абразивных средств, сильных растворителей.
                  </p>
                </div>
                <div className="seo-faq-item">
                  <h4 className="seo-faq-question">
                    Сколько нельзя мыть авто после нанесения?
                  </h4>
                  <p className="seo-faq-answer">
                    Первые 7-14 дней (в зависимости от покрытия) мыть автомобиль
                    запрещено — идет процесс полной полимеризации. Далее —
                    рекомендованный режим ухода.
                  </p>
                </div>
                <div className="seo-faq-item">
                  <h4 className="seo-faq-question">
                    Можно ли полировать авто с керамическим покрытием?
                  </h4>
                  <p className="seo-faq-answer">
                    Да, но только мягкими безабразивными полиролями. Абразивные
                    полироли повредят защитный слой. Рекомендуем
                    профессиональную поддерживающую обработку.
                  </p>
                </div>
                <div className="seo-faq-item">
                  <h4 className="seo-faq-question">
                    Как понять, что покрытие теряет свойства?
                  </h4>
                  <p className="seo-faq-answer">
                    Признаки: уменьшение гидрофобности (вода перестает
                    скатываться), появление пятен после дождя, снижение блеска.
                    Рекомендуем ежегодную диагностику.
                  </p>
                </div>
                <div className="seo-faq-item">
                  <h4 className="seo-faq-question">
                    Можно ли нанести новое покрытие поверх старого?
                  </h4>
                  <p className="seo-faq-answer">
                    Нет, старое покрытие необходимо полностью удалить. Мы
                    предлагаем услугу снятия старой защиты и нанесения новой с
                    предварительной подготовкой ЛКП.
                  </p>
                </div>
                <div className="seo-faq-item">
                  <h4 className="seo-faq-question">
                    Что делать при повреждении покрытия?
                  </h4>
                  <p className="seo-faq-answer">
                    Мы предлагаем услуги локального восстановления покрытия на
                    поврежденных участках. Для серьезных повреждений может
                    потребоваться перекрытие всего элемента.
                  </p>
                </div>
                <div className="seo-faq-item">
                  <h4 className="seo-faq-question">
                    Как продлить срок службы покрытия?
                  </h4>
                  <p className="seo-faq-answer">
                    Регулярные бесконтактные мойки, использование
                    рекомендованных средств, защита от агрессивных химикатов,
                    ежегодная поддерживающая обработка.
                  </p>
                </div>
              </div>
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
              <p>
                Наш центр в Витебске специализируется на профессиональном
                нанесении всех типов защитных покрытий. Мы работаем с
                проверенными брендами, используем оригинальные составы и строго
                соблюдаем технологии нанесения.
              </p>
              <p>
                Мы наносим защитные покрытия на автомобили всех марок и классов
                — от компактных городских машин до премиальных внедорожников и
                спорткаров. Каждому клиенту мы подбираем оптимальное решение,
                учитывая особенности автомобиля, условия эксплуатации и бюджет.
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
