"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { PriceTable, BrandsTable } from "./tables";
import "./page.scss";

export default function KhimchistkaSalonaPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const titleParts = ["Химчистка", "салона"];

  const faqItems = [
    {
      question:
        "Сколько времени занимает химчистка салона и сколько сохнет салон?",
      answer:
        "Время зависит от загрязнений и объёма работ. После химчистки требуется время на сушку — обычно мы подбираем режим так, чтобы салон как можно быстрее был готов к эксплуатации.",
    },
    {
      question: "Удаляете ли запахи (табак, сырость, животные)?",
      answer:
        "Да, работаем с источником запаха и подбираем безопасные средства по материалам салона. Результат зависит от причины и давности запаха.",
    },
    {
      question: "Чистите ли потолок, багажник и ремни безопасности?",
      answer:
        "Да, выполняем чистку потолка, багажника и отдельных элементов. Итоговая стоимость зависит от класса авто и выбранного комплекса.",
    },
    {
      question: "Безопасно ли это для кожи и пластика?",
      answer:
        "Используем составы и технологии, рассчитанные на автомобильные материалы. Подбираем химию под тип кожи/текстиля и степень загрязнения.",
    },
    {
      question: "Нужно ли заранее подготавливать автомобиль?",
      answer:
        "Специальной подготовки не требуется. Достаточно убрать личные вещи из салона и багажника, чтобы мы могли качественно обработать все зоны.",
    },
    {
      question: "Можно ли сделать локальную химчистку (одно пятно/сиденье)?",
      answer:
        "Да, делаем локальную химчистку и удаление пятен. По фото/осмотру подскажем, что эффективнее — локально или комплексом.",
    },
  ];

  return (
    <>
      <section
        className="service-hero"
        aria-label="Химчистка салона автомобиля в Витебске"
      >
        <div className="service-hero__bg">
          <Image
            src="/images/services/salon.webp"
            alt="Химчистка салона автомобиля в Витебске"
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
              Глубокая чистка салона автомобиля. Удаление пятен, запахов,
              бактерий. Озонирование и деликатная сухая чистка.
            </p>
          </div>
        </div>
      </section>

      <div className="service-content">
        <div className="container">
          {/* Введение */}
          <div className="service-content__intro">
            <p className="service-content__intro-text">
              Детейлинг‑химчистка салона в <strong>Витебске</strong> — это
              глубокая чистка сидений, ковров, потолка и пластика с аккуратной
              сушкой. Убираем пятна и запахи, возвращаем салону опрятный вид и
              комфорт.
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
              Цена химчистки автомобиля
            </h2>
            <PriceTable />
            <BrandsTable />
          </div>

          {/* SEO Контент */}
          <div className="seo-content">
            <h2 className="seo-title">
              Детейлинг и химчистка автомобиля в Витебске
            </h2>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Что такое профессиональный детейлинг автомобиля?
              </h3>
              <p>
                <span className="seo-highlight">Детейлинг</span> — это
                комплексная глубокая чистка и восстановление автомобиля,
                выходящая за рамки обычной мойки. В отличие от стандартной
                уборки, детейлинг предполагает тщательную обработку каждого
                элемента салона и кузова с использованием профессионального
                оборудования, специализированных химических средств и уникальных
                технологий очистки.
              </p>
              <p>
                Профессиональный детейлинг включает не только чистку, но и
                восстановительные работы: удаление сложных загрязнений,
                восстановление цвета и фактуры материалов, защитную обработку
                поверхностей. Это инвестиция в комфорт, эстетику и сохранность
                вашего автомобиля.
              </p>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Услуги детейлинга и химчистки автомобиля
              </h3>
              <div className="seo-cards">
                <div className="seo-card">
                  <div className="seo-card-icon">🧽</div>
                  <h4 className="seo-card-title">Глубокая химчистка салона</h4>
                  <p className="seo-card-text">
                    Тщательная чистка всех элементов салона: сидений, ковров,
                    потолка, дверных карт, пластиковых панелей. Удаление пятен,
                    запахов, биологических загрязнений.
                  </p>
                </div>
                <div className="seo-card">
                  <div className="seo-card-icon">🚗</div>
                  <h4 className="seo-card-title">
                    Восстановление пластика и кожи
                  </h4>
                  <p className="seo-card-text">
                    Очистка, восстановление цвета и защита пластиковых, кожаных
                    и виниловых поверхностей. Удаление потертостей,
                    восстановление фактуры.
                  </p>
                </div>
                <div className="seo-card">
                  <div className="seo-card-icon">✨</div>
                  <h4 className="seo-card-title">
                    Комплексный детейлинг кузова
                  </h4>
                  <p className="seo-card-text">
                    Многоступенчатая мойка, очистка кузова от битума, смолы,
                    насекомых. Полировка, нанесение защитных покрытий (воск,
                    керамика).
                  </p>
                </div>
                <div className="seo-card">
                  <div className="seo-card-icon">💺</div>
                  <h4 className="seo-card-title">Химчистка сидений</h4>
                  <p className="seo-card-text">
                    Профессиональная чистка тканевых, кожаных, алькантаровых
                    сидений. Удаление пятен, восстановление цвета, защитная
                    пропитка.
                  </p>
                </div>
                <div className="seo-card">
                  <div className="seo-card-icon">🛡️</div>
                  <h4 className="seo-card-title">
                    Антибактериальная обработка
                  </h4>
                  <p className="seo-card-text">
                    Уничтожение бактерий, грибков, аллергенов в системе
                    вентиляции и на поверхностях салона. Устранение неприятных
                    запахов.
                  </p>
                </div>
              </div>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Этапы профессиональной химчистки салона автомобиля
              </h3>
              <div className="seo-process">
                <div className="seo-process-step">
                  <div className="seo-process-number">1</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">
                      Диагностика и подготовка
                    </h4>
                    <p className="seo-process-text">
                      Осмотр салона, выявление типов загрязнений и материалов
                      отделки. Удаление личных вещей, съем ковриков, подготовка
                      к чистке. Определение подходящих методов и средств
                      очистки.
                    </p>
                  </div>
                </div>
                <div className="seo-process-step">
                  <div className="seo-process-number">2</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">
                      Сухая чистка и пылеудаление
                    </h4>
                    <p className="seo-process-text">
                      Тщательная уборка пыли, песка, мелкого мусора из всех
                      щелей, вентиляционных решеток, труднодоступных мест.
                      Использование профессиональных пылесосов с различными
                      насадками.
                    </p>
                  </div>
                </div>
                <div className="seo-process-step">
                  <div className="seo-process-number">3</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">
                      Глубокая химчистка поверхностей
                    </h4>
                    <p className="seo-process-text">
                      Обработка всех поверхностей специализированными
                      химическими средствами: сиденья, ковры, потолок, дверные
                      карты, пластик. Удаление сложных пятен (кофе, вино, жир,
                      чернила).
                    </p>
                  </div>
                </div>
                <div className="seo-process-step">
                  <div className="seo-process-number">4</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">Экстракторная чистка</h4>
                    <p className="seo-process-text">
                      Использование профессиональных экстракторов для глубокой
                      чистки текстильных поверхностей. Горячая вода под
                      давлением с моющими средствами и одновременное отсасывание
                      грязной воды.
                    </p>
                  </div>
                </div>
                <div className="seo-process-step">
                  <div className="seo-process-number">5</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">
                      Восстановление и защита
                    </h4>
                    <p className="seo-process-text">
                      Восстановление цвета и фактуры материалов, нанесение
                      защитных пропиток (антистатик, влагоотталкивающие
                      составы). Полировка пластика и кожи, обработка резиновых
                      уплотнителей.
                    </p>
                  </div>
                </div>
                <div className="seo-process-step">
                  <div className="seo-process-number">6</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">
                      Сушка и финальная полировка
                    </h4>
                    <p className="seo-process-text">
                      Тщательная сушка салона специальными вентиляторами,
                      проверка качества чистки, финальная полировка стекол и
                      зеркал. Контрольный осмотр и устранение мелких недочетов.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Преимущества профессионального детейлинга перед обычной мойкой
              </h3>
              <table className="seo-comparison-table">
                <thead>
                  <tr>
                    <th>Критерий</th>
                    <th>Профессиональный детейлинг</th>
                    <th>Обычная автомойка</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="seo-comparison-criterion">
                      Глубина очистки
                    </td>
                    <td className="seo-comparison-good">
                      Глубокая, до 100% чистоты
                    </td>
                    <td className="seo-comparison-average">
                      Поверхностная, 40-60%
                    </td>
                  </tr>
                  <tr>
                    <td className="seo-comparison-criterion">Удаление пятен</td>
                    <td className="seo-comparison-good">95-100% удаление</td>
                    <td className="seo-comparison-bad">20-40% удаление</td>
                  </tr>
                  <tr>
                    <td className="seo-comparison-criterion">
                      Устранение запахов
                    </td>
                    <td className="seo-comparison-good">Полное устранение</td>
                    <td className="seo-comparison-bad">Временное устранение</td>
                  </tr>
                  <tr>
                    <td className="seo-comparison-criterion">
                      Бактериальная очистка
                    </td>
                    <td className="seo-comparison-good">
                      Антибактериальная обработка
                    </td>
                    <td className="seo-comparison-bad">Без обработки</td>
                  </tr>
                  <tr>
                    <td className="seo-comparison-criterion">
                      Восстановление материалов
                    </td>
                    <td className="seo-comparison-good">
                      Восстановление цвета и фактуры
                    </td>
                    <td className="seo-comparison-bad">Без восстановления</td>
                  </tr>
                  <tr>
                    <td className="seo-comparison-criterion">
                      Защитная обработка
                    </td>
                    <td className="seo-comparison-good">Защитные пропитки</td>
                    <td className="seo-comparison-bad">Без защиты</td>
                  </tr>
                  <tr>
                    <td className="seo-comparison-criterion">
                      Срок сохранения чистоты
                    </td>
                    <td className="seo-comparison-good">3-6 месяцев</td>
                    <td className="seo-comparison-bad">1-2 недели</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Виды загрязнений, которые устраняет профессиональная химчистка
              </h3>
              <div className="seo-alert">
                <strong className="seo-alert-title">
                  Мы эффективно удаляем:
                </strong>
                <ul className="seo-alert-list">
                  <li>
                    <strong>Пищевые пятна</strong> — кофе, чай, газировка,
                    шоколад, мороженое, жирные пятна
                  </li>
                  <li>
                    <strong>Биологические загрязнения</strong> — кровь, рвотные
                    массы, моча животных, пот
                  </li>
                  <li>
                    <strong>Химические пятна</strong> — чернила, краска, клей,
                    косметика, лекарства
                  </li>
                  <li>
                    <strong>Природные загрязнения</strong> — трава, глина, смола
                    деревьев, пыльца
                  </li>
                  <li>
                    <strong>Бытовые загрязнения</strong> — грязь, песок, пыль,
                    шерсть животных, волосы
                  </li>
                  <li>
                    <strong>Специфические запахи</strong> — табачный дым, запах
                    животных, плесень, сырость
                  </li>
                  <li>
                    <strong>Сложные загрязнения</strong> — жевательная резинка,
                    воск, парафин, масляные пятна
                  </li>
                </ul>
              </div>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Стоимость детейлинга и химчистки автомобиля в Витебске
              </h3>
              <p>
                Стоимость профессиональной химчистки зависит от нескольких
                факторов:
              </p>
              <ul className="seo-list">
                <li>
                  <span className="seo-list-highlight">Состояние салона</span> —
                  степень загрязнения, наличие сложных пятен
                </li>
                <li>
                  <span className="seo-list-highlight">Тип салона</span> —
                  ткань, кожа, алькантара, комбинированная отделка
                </li>
                <li>
                  <span className="seo-list-highlight">Класс автомобиля</span> —
                  размер салона, количество сложных элементов
                </li>
                <li>
                  <span className="seo-list-highlight">Объем работ</span> —
                  полная химчистка или отдельные услуги
                </li>
                <li>
                  <span className="seo-list-highlight">
                    Дополнительные услуги
                  </span>{" "}
                  — чистка двигателя, полировка кузова и т.д.
                </li>
              </ul>

              <p className="seo-mt-3">
                Мы предлагаем гибкую систему pricing в зависимости от
                потребностей клиента:
              </p>

              <div className="seo-alert">
                <strong className="seo-alert-title">
                  Варианты услуг детейлинга:
                </strong>
                <ul className="seo-alert-list">
                  <li>
                    <strong>Экспресс-химчистка</strong> — базовая чистка салона,
                    удаление пыли и поверхностных загрязнений
                  </li>
                  <li>
                    <strong>Стандартная химчистка</strong> — глубокая чистка
                    салона с удалением большинства пятен
                  </li>
                  <li>
                    <strong>Комплексный детейлинг</strong> — полная обработка
                    салона и кузова, восстановительные работы
                  </li>
                  <li>
                    <strong>Премиум детейлинг</strong> — максимальный уровень
                    чистки с защитными покрытиями и детальной обработкой
                  </li>
                  <li>
                    <strong>Отдельные услуги</strong> — чистка сидений, ковров,
                    потолка, пластика, двигателя
                  </li>
                </ul>
              </div>

              <p className="seo-mt-3">
                Точную стоимость для вашего автомобиля можно узнать после
                бесплатной диагностики. Мы предлагаем{" "}
                <strong>честные цены без скрытых платежей</strong> и гарантируем
                качество выполненных работ.
              </p>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Для кого особенно важен профессиональный детейлинг?
              </h3>
              <p>
                Профессиональная химчистка рекомендуется в следующих случаях:
              </p>
              <ul className="seo-list">
                <li>
                  <span className="seo-list-highlight">
                    Владельцам новых автомобилей
                  </span>{" "}
                  — сохранение идеального состояния с первых дней
                </li>
                <li>
                  <span className="seo-list-highlight">Семьям с детьми</span> —
                  удаление пищевых пятен, бактерий, аллергенов
                </li>
                <li>
                  <span className="seo-list-highlight">
                    Автолюбителям с домашними животными
                  </span>{" "}
                  — удаление шерсти, запахов, биологических загрязнений
                </li>
                <li>
                  <span className="seo-list-highlight">Курильщикам</span> —
                  устранение табачного запаха, смол, желтого налета
                </li>
                <li>
                  <span className="seo-list-highlight">
                    При подготовке к продаже
                  </span>{" "}
                  — увеличение стоимости автомобиля
                </li>
                <li>
                  <span className="seo-list-highlight">
                    После ДТП или ремонта
                  </span>{" "}
                  — удаление пыли, грязи, следов ремонтных работ
                </li>
                <li>
                  <span className="seo-list-highlight">
                    Для автомобилей такси и каршеринга
                  </span>{" "}
                  — поддержание гигиенической чистоты
                </li>
                <li>
                  <span className="seo-list-highlight">
                    При аллергиях и астме
                  </span>{" "}
                  — удаление аллергенов, пылевых клещей, спор плесени
                </li>
              </ul>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Часто задаваемые вопросы о детейлинге и химчистке
              </h3>
              <div className="seo-faq">
                <div className="seo-faq-item">
                  <h4 className="seo-faq-question">
                    Сколько времени занимает полная химчистка автомобиля?
                  </h4>
                  <p className="seo-faq-answer">
                    Время зависит от состояния автомобиля и объема работ.
                    Экспресс-химчистка занимает 2-3 часа, комплексный детейлинг
                    — 6-8 часов, премиум детейлинг — до 12 часов.
                  </p>
                </div>
                <div className="seo-faq-item">
                  <h4 className="seo-faq-question">
                    Чистите ли потолок, багажник и ремни безопасности?
                  </h4>
                  <p className="seo-faq-answer">
                    Да, выполняем чистку потолка, багажника и отдельных
                    элементов. Итоговая стоимость зависит от класса авто и
                    выбранного комплекса.
                  </p>
                </div>
                <div className="seo-faq-item">
                  <h4 className="seo-faq-question">
                    Безопасно ли это для кожи и пластика?
                  </h4>
                  <p className="seo-faq-answer">
                    Используем составы и технологии, рассчитанные на
                    автомобильные материалы. Подбираем химию под тип
                    кожи/текстиля и степень загрязнения.
                  </p>
                </div>
                <div className="seo-faq-item">
                  <h4 className="seo-faq-question">
                    Не повредит ли химчистка кожаные сиденья?
                  </h4>
                  <p className="seo-faq-answer">
                    Нет, мы используем специальные средства для кожи, которые не
                    только очищают, но и питают, восстанавливают кожу. После
                    обработки кожа становится мягкой, эластичной, защищенной от
                    пересыхания.
                  </p>
                </div>
                <div className="seo-faq-item">
                  <h4 className="seo-faq-question">
                    Можно ли удалить старые, застарелые пятна?
                  </h4>
                  <p className="seo-faq-answer">
                    В 90% случаев нам удается удалить даже самые старые пятна.
                    Для сложных случаев мы используем специальные средства и
                    технологии, предварительно тестируя их на незаметном
                    участке.
                  </p>
                </div>
                <div className="seo-faq-item">
                  <h4 className="seo-faq-question">
                    Как долго сохнет салон после химчистки?
                  </h4>
                  <p className="seo-faq-answer">
                    При использовании профессионального оборудования салон
                    высыхает за 4-6 часов. Мы используем промышленные
                    вентиляторы, которые ускоряют процесс сушки. Рекомендуется
                    не использовать автомобиль 6-8 часов после чистки.
                  </p>
                </div>
                <div className="seo-faq-item">
                  <h4 className="seo-faq-question">
                    Нужно ли заранее подготавливать автомобиль?
                  </h4>
                  <p className="seo-faq-answer">
                    Специальной подготовки не требуется. Достаточно убрать
                    личные вещи из салона и багажника, чтобы мы могли
                    качественно обработать все зоны.
                  </p>
                </div>
                <div className="seo-faq-item">
                  <h4 className="seo-faq-question">
                    Нужно ли приезжать на детейлинг заранее записавшись?
                  </h4>
                  <p className="seo-faq-answer">
                    Да, мы работаем по предварительной записи, чтобы уделить
                    каждому автомобилю необходимое время и обеспечить
                    максимальное качество работ. Запись позволяет нам
                    подготовить все необходимое оборудование и материалы.
                  </p>
                </div>
                <div className="seo-faq-item">
                  <h4 className="seo-faq-question">
                    Даете ли вы гарантию на химчистку?
                  </h4>
                  <p className="seo-faq-answer">
                    Да, мы предоставляем гарантию на выполненные работы. Если в
                    течение гарантийного периода возникают проблемы, связанные с
                    качеством чистки, мы бесплатно устраняем их.
                  </p>
                </div>
                <div className="seo-faq-item">
                  <h4 className="seo-faq-question">
                    Как часто нужно делать профессиональную химчистку?
                  </h4>
                  <p className="seo-faq-answer">
                    Рекомендуется делать полную химчистку 1-2 раза в год. Для
                    автомобилей, используемых в сложных условиях (дети,
                    животные, активная эксплуатация) — каждые 3-4 месяца.
                  </p>
                </div>
              </div>
            </div>

            <div className="seo-conclusion">
              <h4 className="seo-conclusion-title">
                Профессиональный детейлинг в Витебске — забота о вашем
                автомобиле и здоровье
              </h4>
              <p>
                Чистый ухоженный автомобиль — это не только вопрос эстетики, но
                и забота о здоровье, комфорте и сохранности вашего транспортного
                средства. Профессиональная химчистка удаляет не только видимые
                загрязнения, но и невидимые угрозы: бактерии, аллергены,
                плесень, неприятные запахи.
              </p>
              <p>
                Мы предлагаем комплексный подход к детейлингу автомобилей в
                Витебске. Наши специалисты имеют многолетний опыт работы с
                автомобилями различных марок и классов. Мы используем только
                сертифицированные профессиональные средства, современное
                оборудование и проверенные технологии.
              </p>
              <p>Доверяя нам детейлинг своего автомобиля, вы получаете:</p>
              <ul className="seo-list" style={{ marginBottom: "1rem" }}>
                <li>Идеальную чистоту салона и кузова</li>
                <li>Устранение всех видов загрязнений и запахов</li>
                <li>Восстановление и защиту материалов</li>
                <li>Гигиеническую безопасность для вас и ваших близких</li>
                <li>Сохранение и увеличение стоимости автомобиля</li>
              </ul>
              <p className="seo-conclusion-final">
                <strong>
                  Запишитесь на бесплатную диагностику и получите индивидуальный
                  расчет стоимости детейлинга для вашего автомобиля в Витебске.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
