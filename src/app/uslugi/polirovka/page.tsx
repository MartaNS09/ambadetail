// "use client";

// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { PriceTable, BrandsTable } from "./tables";
// import "./page.scss";

// export default function ServicePage() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 100);
//     return () => clearTimeout(timer);
//   }, []);

//   // 🔧 ДОБАВЛЕНО: обработчик для SEO-аккордеона
//   useEffect(() => {
//     const handleFaqClick = (event: Event) => {
//       const button = event.currentTarget as HTMLElement;
//       const parent = button.closest(".seo-faq-item");
//       if (parent) {
//         parent.classList.toggle("open");
//       }
//     };

//     const faqButtons = document.querySelectorAll(".seo-faq-question");
//     faqButtons.forEach((button) => {
//       button.addEventListener("click", handleFaqClick);
//     });

//     return () => {
//       faqButtons.forEach((button) => {
//         button.removeEventListener("click", handleFaqClick);
//       });
//     };
//   }, []);

//   const titleParts = ["Детейлинг", "полировка", "авто"];

//   return (
//     <>
//       <section
//         className="service-hero"
//         aria-label="Полировка автомобиля в Витебске"
//       >
//         <div className="service-hero__bg">
//           <Image
//             src="/images/services/polirovka_kuzova.webp"
//             alt="Полировка кузова автомобиля в Витебске"
//             fill
//             priority
//             className="service-hero__image"
//             sizes="100vw"
//             quality={85}
//           />
//           <div className="service-hero__overlay" aria-hidden="true"></div>
//         </div>
//         <div className="container service-hero__container">
//           <div className="service-hero__content">
//             <h1 className="service-hero__title">
//               {titleParts.map((part, partIndex) => (
//                 <span
//                   key={partIndex}
//                   className="service-hero__title-word"
//                   style={{ display: "inline-block", marginRight: "0.3em" }}
//                 >
//                   {part.split("").map((letter, letterIndex) => (
//                     <span
//                       key={letterIndex}
//                       className={`service-hero__title-letter ${isVisible ? "service-hero__title-letter--visible" : ""}`}
//                       style={{
//                         transitionDelay: `${(partIndex * 10 + letterIndex) * 0.02}s`,
//                       }}
//                     >
//                       {letter}
//                     </span>
//                   ))}
//                 </span>
//               ))}
//             </h1>
//             <p className="service-hero__subtitle">
//               Профессиональная полировка кузова. Удаление царапин, голограмм,
//               возвращение зеркального блеска и насыщенного цвета.
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="service-content">
//         <div className="container">
//           {/* Введение */}
//           <div className="service-content__intro">
//             <p className="service-content__intro-text">
//               <strong>Детейлинг полировка</strong> автомобиля в Витебске — это
//               профессиональное восстановление лакокрасочного покрытия. Удаляем
//               swirl-маркировку, глубокие царапины, окисление. Возвращаем
//               зеркальный блеск и насыщенный цвет кузова.
//             </p>
//           </div>

//           {/* Таблицы цен */}
//           <div className="service-content__section">
//             <h2 className="service-content__section-title">
//               Цена полировки автомобиля
//             </h2>
//             <PriceTable />
//             <BrandsTable />
//           </div>

//           {/* SEO Контент */}
//           <div className="seo-content">
//             <h2 className="seo-title">
//               Профессиональная детейлинг полировка автомобиля в Витебске
//             </h2>

//             <div className="seo-section">
//               <h3 className="seo-subtitle">
//                 Что такое профессиональная детейлинг полировка?
//               </h3>
//               <p>
//                 <span className="seo-highlight">Детейлинг полировка</span> — это
//                 комплекс высокотехнологичных работ по восстановлению и защите
//                 лакокрасочного покрытия автомобиля, выполняемый с использованием
//                 профессионального оборудования, абразивных материалов и защитных
//                 составов. В отличие от обычной полировки, детейлинг предполагает
//                 многоступенчатую обработку, направленную не только на придание
//                 блеска, но и на устранение глубоких дефектов ЛКП.
//               </p>
//               <p>
//                 Профессиональная полировка в детейлинге — это искусство
//                 восстановления заводского вида автомобиля. Она включает
//                 диагностику состояния ЛКП, подбор оптимальных материалов и
//                 методик, поэтапную обработку и финальную защиту. Результат — не
//                 просто блеск, а восстановление оптических свойств лака,
//                 устранение 80-95% дефектов и долговременная защита.
//               </p>
//             </div>

//             <div className="seo-section">
//               <h3 className="seo-subtitle">
//                 Виды полировки в профессиональном детейлинге
//               </h3>
//               <div className="seo-cards">
//                 <div className="seo-card">
//                   <div className="seo-card-icon">🔧</div>
//                   <h4 className="seo-card-title">
//                     Восстановительная полировка
//                   </h4>
//                   <p className="seo-card-text">
//                     Удаление глубоких царапин, сколов, окисления, следов от
//                     птичьего помета и древесной смолы. Работа с абразивными
//                     пастами для выравнивания поверхности лака.
//                   </p>
//                 </div>
//                 <div className="seo-card">
//                   <div className="seo-card-icon">✨</div>
//                   <h4 className="seo-card-title">Защитная полировка</h4>
//                   <p className="seo-card-text">
//                     Нанесение защитных составов (воск, керамика, силанты) после
//                     восстановления. Создает гидрофобный слой, защищающий от
//                     влаги, грязи, УФ-лучей.
//                   </p>
//                 </div>
//                 <div className="seo-card">
//                   <div className="seo-card-icon">🎨</div>
//                   <h4 className="seo-card-title">Абразивная полировка</h4>
//                   <p className="seo-card-text">
//                     Работа с серьезными дефектами ЛКП. Использование
//                     профессиональных абразивных составов для удаления глубоких
//                     повреждений с контролем толщины лака.
//                   </p>
//                 </div>
//                 <div className="seo-card">
//                   <div className="seo-card-icon">💎</div>
//                   <h4 className="seo-card-title">Финишная полировка</h4>
//                   <p className="seo-card-text">
//                     Заключительный этап для придания зеркального блеска.
//                     Удаление микроцарапин, созданных на предыдущих этапах,
//                     подготовка к нанесению защиты.
//                   </p>
//                 </div>
//                 <div className="seo-card">
//                   <div className="seo-card-icon">🚗</div>
//                   <h4 className="seo-card-title">Полировка матовых покрытий</h4>
//                   <p className="seo-card-text">
//                     Специальная технология для матовых ЛКП. Очистка без
//                     изменения фактуры, удаление загрязнений с сохранением
//                     матовости.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="seo-section">
//               <h3 className="seo-subtitle">
//                 Этапы профессиональной детейлинг полировки
//               </h3>
//               <div className="seo-process">
//                 <div className="seo-process-step">
//                   <div className="seo-process-number">1</div>
//                   <div className="seo-process-content">
//                     <h4 className="seo-process-title">
//                       Диагностика и измерение толщины ЛКП
//                     </h4>
//                     <p className="seo-process-text">
//                       Тщательный осмотр кузова под разными углами и освещением.
//                       Измерение толщины лака толщиномером на всех панелях.
//                       Определение типа ЛКП (глянец, мат, металлик). Составление
//                       карты дефектов.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="seo-process-step">
//                   <div className="seo-process-number">2</div>
//                   <div className="seo-process-content">
//                     <h4 className="seo-process-title">Подготовка и мойка</h4>
//                     <p className="seo-process-text">
//                       Глубокая очистка кузова: удаление битума, смолы,
//                       насекомых, железной пыли (железоотделителем). Контактная
//                       мойка с обезжириванием. Сушка компрессором.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="seo-process-step">
//                   <div className="seo-process-number">3</div>
//                   <div className="seo-process-content">
//                     <h4 className="seo-process-title">Маскирование и защита</h4>
//                     <p className="seo-process-text">
//                       Защита неметаллических элементов: резиновых уплотнителей,
//                       пластика, хрома, стекол. Маскирование стыков и щелей для
//                       предотвращения попадания абразивов.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="seo-process-step">
//                   <div className="seo-process-number">4</div>
//                   <div className="seo-process-content">
//                     <h4 className="seo-process-title">
//                       Восстановительная полировка
//                     </h4>
//                     <p className="seo-process-text">
//                       Работа с профессиональными полировальными машинами и
//                       абразивными пастами. Удаление глубоких царапин, окисления,
//                       swirl-маркировки. Контроль температуры и давления.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="seo-process-step">
//                   <div className="seo-process-number">5</div>
//                   <div className="seo-process-content">
//                     <h4 className="seo-process-title">Финишная полировка</h4>
//                     <p className="seo-process-text">
//                       Устранение микроцарапин от абразивной стадии. Придание
//                       идеальной гладкости и зеркального блеска. Использование
//                       мягких полиролей и финишных падов.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="seo-process-step">
//                   <div className="seo-process-number">6</div>
//                   <div className="seo-process-content">
//                     <h4 className="seo-process-title">
//                       Нанесение защиты и контроль
//                     </h4>
//                     <p className="seo-process-text">
//                       Нанесение защитного покрытия (воск, керамика, силант).
//                       Контроль качества под разным освещением. Финальная
//                       очистка, удаление маскировочной ленты.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="seo-section">
//               <h3 className="seo-subtitle">
//                 Какие дефекты устраняет профессиональная полировка?
//               </h3>
//               <div className="seo-alert">
//                 <strong className="seo-alert-title">
//                   Мы эффективно устраняем:
//                 </strong>
//                 <ul className="seo-alert-list">
//                   <li>
//                     <strong>Swirl-маркировка (паутинка)</strong> — мелкие
//                     круговые царапины от неправильной мойки
//                   </li>
//                   <li>
//                     <strong>Глубокие царапины</strong> — от контакта с ветками,
//                     щетками, ключами
//                   </li>
//                   <li>
//                     <strong>Окисление ЛКП</strong> — помутнение, выцветание от
//                     УФ-лучей
//                   </li>
//                   <li>
//                     <strong>Химические повреждения</strong> — следы от птичьего
//                     помета, древесной смолы, реагентов
//                   </li>
//                   <li>
//                     <strong>Водяные пятна и разводы</strong> — от высыхания
//                     жесткой воды
//                   </li>
//                   <li>
//                     <strong>Следы от наклеек и скотча</strong> — без повреждения
//                     лака
//                   </li>
//                   <li>
//                     <strong>Мелкие сколы</strong> — от гравия и камней
//                     (частичное восстановление)
//                   </li>
//                   <li>
//                     <strong>Потертости</strong> — на выступающих элементах
//                     кузова
//                   </li>
//                   <li>
//                     <strong>Заводской брак полировки</strong> — апельсиновая
//                     корка, мазки, полосы
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className="seo-section">
//               <h3 className="seo-subtitle">
//                 Оборудование и материалы для профессиональной полировки
//               </h3>
//               <p>
//                 Мы используем только профессиональное оборудование и материалы
//                 премиум-класса:
//               </p>
//               <table className="seo-comparison-table">
//                 <thead>
//                   <tr>
//                     <th>Оборудование/Материалы</th>
//                     <th>Профессиональный детейлинг</th>
//                     <th>Любительская полировка</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td className="seo-comparison-criterion">
//                       Полировальные машины
//                     </td>
//                     <td className="seo-comparison-good">
//                       RO/DA машины с контролем оборотов
//                     </td>
//                     <td className="seo-comparison-bad">
//                       УШМ или дешевые полироли
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="seo-comparison-criterion">
//                       Абразивные составы
//                     </td>
//                     <td className="seo-comparison-good">
//                       Профессиональные пасты 3M, Menzerna
//                     </td>
//                     <td className="seo-comparison-bad">
//                       Универсальные полироли
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="seo-comparison-criterion">
//                       Полировальные пады
//                     </td>
//                     <td className="seo-comparison-good">
//                       Набор падов разной жесткости
//                     </td>
//                     <td className="seo-comparison-bad">
//                       Один универсальный пад
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="seo-comparison-criterion">
//                       Измерительные приборы
//                     </td>
//                     <td className="seo-comparison-good">
//                       Толщиномеры, термометры
//                     </td>
//                     <td className="seo-comparison-bad">Без измерений</td>
//                   </tr>
//                   <tr>
//                     <td className="seo-comparison-criterion">
//                       Осветительное оборудование
//                     </td>
//                     <td className="seo-comparison-good">
//                       LED панели, прожекторы
//                     </td>
//                     <td className="seo-comparison-bad">
//                       Естественное освещение
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="seo-comparison-criterion">
//                       Защитные покрытия
//                     </td>
//                     <td className="seo-comparison-good">
//                       Керамика, силанты, воски
//                     </td>
//                     <td className="seo-comparison-bad">Автовоски</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>

//             <div className="seo-section">
//               <h3 className="seo-subtitle">
//                 Стоимость детейлинг полировки в Витебске
//               </h3>
//               <p>
//                 Стоимость профессиональной полировки зависит от нескольких
//                 ключевых факторов:
//               </p>
//               <ul className="seo-list">
//                 <li>
//                   <span className="seo-list-highlight">Состояние ЛКП</span> —
//                   степень повреждений, количество дефектов
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">Тип покрытия</span> —
//                   глянец, мат, металлик, перламутр
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">
//                     Класс и размер автомобиля
//                   </span>{" "}
//                   — компактный, седан, кроссовер, внедорожник
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">Объем работ</span> —
//                   полная полировка кузова или отдельных элементов
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">Выбранная защита</span> —
//                   воск, керамика, силант
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">
//                     Дополнительные услуги
//                   </span>{" "}
//                   — полировка фар, хрома, пластика
//                 </li>
//               </ul>

//               <p className="seo-mt-3">
//                 Мы предлагаем прозрачное ценообразование и несколько пакетов
//                 услуг:
//               </p>

//               <div className="seo-alert">
//                 <strong className="seo-alert-title">
//                   Пакеты услуг полировки:
//                 </strong>
//                 <ul className="seo-alert-list">
//                   <li>
//                     <strong>Экспресс-полировка</strong> — удаление легких
//                     загрязнений, нанесение защитного воска
//                   </li>
//                   <li>
//                     <strong>Стандартная полировка</strong> — устранение
//                     swirl-маркировки, восстановление блеска
//                   </li>
//                   <li>
//                     <strong>Восстановительная полировка</strong> — работа с
//                     глубокими царапинами, окислением
//                   </li>
//                   <li>
//                     <strong>Комплексный детейлинг</strong> — полный цикл
//                     восстановления с керамическим покрытием
//                   </li>
//                   <li>
//                     <strong>Полировка + химчистка</strong> — комплексный уход за
//                     автомобилем
//                   </li>
//                 </ul>
//               </div>

//               <p className="seo-mt-3">
//                 Для точного расчета стоимости приезжайте на бесплатную
//                 диагностику. Мы оценим состояние вашего автомобиля и предложим
//                 оптимальное решение.
//               </p>
//             </div>

//             <div className="seo-section">
//               <h3 className="seo-subtitle">
//                 Когда необходима профессиональная полировка автомобиля?
//               </h3>
//               <p>
//                 Профессиональная детейлинг полировка рекомендуется в следующих
//                 ситуациях:
//               </p>
//               <ul className="seo-list">
//                 <li>
//                   <span className="seo-list-highlight">
//                     При покупке нового авто
//                   </span>{" "}
//                   — защита с первых дней эксплуатации
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">
//                     После зимнего сезона
//                   </span>{" "}
//                   — удаление следов реагентов, соли, грязи
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">
//                     Перед продажей автомобиля
//                   </span>{" "}
//                   — увеличение визуальной привлекательности и стоимости
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">
//                     После неудачной мойки или полировки
//                   </span>{" "}
//                   — устранение последствий непрофессионального ухода
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">
//                     При появлении окисления
//                   </span>{" "}
//                   — восстановление цвета и блеска
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">
//                     После длительной стоянки
//                   </span>{" "}
//                   — удаление загрязнений, восстановление ЛКП
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">
//                     При подготовке к выставке или фотосессии
//                   </span>{" "}
//                   — идеальный блеск
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">
//                     Для автомобилей премиум-класса
//                   </span>{" "}
//                   — поддержание безупречного вида
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">
//                     После снятия пленки или винила
//                   </span>{" "}
//                   — устранение следов клея, восстановление ЛКП
//                 </li>
//               </ul>
//             </div>

//             <div className="seo-section">
//               <h3 className="seo-subtitle">
//                 Часто задаваемые вопросы о полировке автомобиля
//               </h3>
//               <div className="seo-faq">
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">
//                     Сколько служит результат полировки?
//                   </h4>
//                   <p className="seo-faq-answer">
//                     Срок службы зависит от типа защиты: воск — 2-3 месяца,
//                     силанты — 6-12 месяцев, керамика — 1-3 года. При правильном
//                     уходе и регулярных поддерживающих обработках результат
//                     сохраняется дольше.
//                   </p>
//                 </div>
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">
//                     Не истончает ли полировка лак?
//                   </h4>
//                   <p className="seo-faq-answer">
//                     Профессиональная полировка с контролем толщины лака удаляет
//                     минимальный слой (3-8 микрон). При средней толщине
//                     заводского лака 100-150 микрон это безопасно. Мы всегда
//                     измеряем толщину и работаем в безопасных пределах.
//                   </p>
//                 </div>
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">
//                     Можно ли полировать матовые покрытия?
//                   </h4>
//                   <p className="seo-faq-answer">
//                     Да, мы специализируемся на полировке матовых ЛКП. Используем
//                     специальные безабразивные составы и технологии, которые
//                     очищают и защищают без изменения матовой фактуры.
//                   </p>
//                 </div>
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">
//                     Сколько времени занимает полная полировка?
//                   </h4>
//                   <p className="seo-faq-answer">
//                     Время зависит от объема работ: экспресс-полировка — 3-4
//                     часа, стандартная — 6-8 часов, восстановительная — 10-12
//                     часов, комплексный детейлинг — 1-2 дня.
//                   </p>
//                 </div>
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">
//                     Нужен ли особый уход после полировки?
//                   </h4>
//                   <p className="seo-faq-answer">
//                     Первые 7 дней рекомендуется не мыть автомобиль. Далее —
//                     использовать бесконтактные мойки или ручную мойку мягкими
//                     губками, специальными шампунями для защищенных поверхностей.
//                   </p>
//                 </div>
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">
//                     Даете ли вы гарантию на полировку?
//                   </h4>
//                   <p className="seo-faq-answer">
//                     Да, мы предоставляем гарантию на работы и материалы.
//                     Гарантийный срок зависит от типа выполненных работ и
//                     использованных материалов (от 3 месяцев до 3 лет).
//                   </p>
//                 </div>
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">
//                     Что делать, если появились новые царапины?
//                   </h4>
//                   <p className="seo-faq-answer">
//                     Мелкие царапины на защищенном покрытии удаляются легче. Мы
//                     предлагаем услуги поддерживающей полировки и локального
//                     восстановления поврежденных участков.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="seo-conclusion">
//               <h4 className="seo-conclusion-title">
//                 Профессиональная детейлинг полировка в Витебске — инвестиция в
//                 красоту и сохранность вашего авто
//               </h4>
//               <p>
//                 Качественная полировка — это не просто косметическая процедура,
//                 а комплексное восстановление и защита лакокрасочного покрытия
//                 вашего автомобиля. Правильно выполненная полировка не только
//                 возвращает блеск, но и продлевает жизнь ЛКП, защищая его от
//                 агрессивных воздействий окружающей среды.
//               </p>
//               <p>
//                 Наш детейлинг-центр в Витебске предлагает полный спектр услуг по
//                 полировке автомобилей любой сложности. Мы работаем с легковыми
//                 автомобилями всех классов и марок, внедорожниками и
//                 кроссоверами, коммерческим транспортом, мотоциклами и скутерами,
//                 специальной техникой.
//               </p>
//               <p>
//                 Наши мастера регулярно проходят обучение, используют современное
//                 оборудование и материалы премиум-класса. Мы учитываем
//                 особенности каждого автомобиля и подбираем индивидуальный
//                 подход.
//               </p>
//               <p className="seo-conclusion-final">
//                 <strong>
//                   Запишитесь на бесплатную диагностику состояния ЛКП вашего
//                   автомобиля и получите детальный расчет стоимости
//                   профессиональной полировки в Витебске.
//                 </strong>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

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
      "Детейлинг полировка автомобиля в Витебске | Профессиональная полировка кузова, восстановление ЛКП - Ambadetail";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Профессиональная детейлинг полировка автомобилей в Витебске. Восстановительная и защитная полировка кузова, удаление царапин, восстановление блеска ЛКП. Качество и гарантия.",
    );

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      "content",
      "полировка авто Витебск, детейлинг полировка, полировка кузова автомобиля, восстановительная полировка, защитная полировка, полировка ЛКП, полировка автомобиля цена",
    );

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute(
      "href",
      "https://ambadetail.vercel.app/uslugi/polirovka",
    );

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute(
      "content",
      "Детейлинг полировка автомобиля в Витебске | Профессиональная полировка кузова, восстановление ЛКП",
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
      "Профессиональная детейлинг полировка автомобилей в Витебске. Восстановительная и защитная полировка кузова, удаление царапин, восстановление блеска ЛКП. Качество и гарантия.",
    );

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement("meta");
      ogImage.setAttribute("property", "og:image");
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute(
      "content",
      "https://ambadetail.vercel.app/images/services/polirovka_kuzova.webp",
    );

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute(
      "content",
      "https://ambadetail.vercel.app/uslugi/polirovka",
    );

    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement("meta");
      twitterTitle.setAttribute("name", "twitter:title");
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute(
      "content",
      "Детейлинг полировка автомобиля в Витебске | Профессиональная полировка кузова, восстановление ЛКП",
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
      "Профессиональная детейлинг полировка автомобилей в Витебске. Восстановительная и защитная полировка кузова, удаление царапин, восстановление блеска ЛКП. Качество и гарантия.",
    );

    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement("meta");
      twitterImage.setAttribute("name", "twitter:image");
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute(
      "content",
      "https://ambadetail.vercel.app/images/services/polirovka_kuzova.webp",
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

  const titleParts = ["Детейлинг", "полировка", "авто"];

  return (
    <>
      <section
        className="service-hero"
        aria-label="Полировка автомобиля в Витебске"
      >
        <div className="service-hero__bg">
          <Image
            src="/images/services/polirovka_kuzova.webp"
            alt="Полировка кузова автомобиля в Витебске"
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
              Профессиональная полировка кузова. Удаление царапин, голограмм,
              возвращение зеркального блеска и насыщенного цвета.
            </p>
          </div>
        </div>
      </section>

      <div className="service-content">
        <div className="container">
          <div className="service-content__intro">
            <p className="service-content__intro-text">
              <strong>Детейлинг полировка</strong> автомобиля в Витебске — это
              профессиональное восстановление лакокрасочного покрытия. Удаляем
              swirl-маркировку, глубокие царапины, окисление. Возвращаем
              зеркальный блеск и насыщенный цвет кузова.
            </p>
          </div>

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Цена полировки автомобиля
            </h2>
            <PriceTable />
            <BrandsTable />
          </div>

          <div className="seo-content">
            <h2 className="seo-title">
              Профессиональная детейлинг полировка автомобиля в Витебске
            </h2>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Что такое профессиональная детейлинг полировка?
              </h3>
              <p>
                <span className="seo-highlight">Детейлинг полировка</span> — это
                комплекс высокотехнологичных работ по восстановлению и защите
                лакокрасочного покрытия автомобиля, выполняемый с использованием
                профессионального оборудования, абразивных материалов и защитных
                составов. В отличие от обычной полировки, детейлинг предполагает
                многоступенчатую обработку, направленную не только на придание
                блеска, но и на устранение глубоких дефектов ЛКП.
              </p>
              <p>
                Профессиональная полировка в детейлинге — это искусство
                восстановления заводского вида автомобиля. Она включает
                диагностику состояния ЛКП, подбор оптимальных материалов и
                методик, поэтапную обработку и финальную защиту. Результат — не
                просто блеск, а восстановление оптических свойств лака,
                устранение 80-95% дефектов и долговременная защита.
              </p>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Виды полировки в профессиональном детейлинге
              </h3>
              <div className="seo-cards">
                <div className="seo-card">
                  <div className="seo-card-icon">🔧</div>
                  <h4 className="seo-card-title">
                    Восстановительная полировка
                  </h4>
                  <p className="seo-card-text">
                    Удаление глубоких царапин, сколов, окисления, следов от
                    птичьего помета и древесной смолы. Работа с абразивными
                    пастами для выравнивания поверхности лака.
                  </p>
                </div>
                <div className="seo-card">
                  <div className="seo-card-icon">✨</div>
                  <h4 className="seo-card-title">Защитная полировка</h4>
                  <p className="seo-card-text">
                    Нанесение защитных составов (воск, керамика, силанты) после
                    восстановления. Создает гидрофобный слой, защищающий от
                    влаги, грязи, УФ-лучей.
                  </p>
                </div>
                <div className="seo-card">
                  <div className="seo-card-icon">🎨</div>
                  <h4 className="seo-card-title">Абразивная полировка</h4>
                  <p className="seo-card-text">
                    Работа с серьезными дефектами ЛКП. Использование
                    профессиональных абразивных составов для удаления глубоких
                    повреждений с контролем толщины лака.
                  </p>
                </div>
                <div className="seo-card">
                  <div className="seo-card-icon">💎</div>
                  <h4 className="seo-card-title">Финишная полировка</h4>
                  <p className="seo-card-text">
                    Заключительный этап для придания зеркального блеска.
                    Удаление микроцарапин, созданных на предыдущих этапах,
                    подготовка к нанесению защиты.
                  </p>
                </div>
                <div className="seo-card">
                  <div className="seo-card-icon">🚗</div>
                  <h4 className="seo-card-title">Полировка матовых покрытий</h4>
                  <p className="seo-card-text">
                    Специальная технология для матовых ЛКП. Очистка без
                    изменения фактуры, удаление загрязнений с сохранением
                    матовости.
                  </p>
                </div>
              </div>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Этапы профессиональной детейлинг полировки
              </h3>
              <div className="seo-process">
                <div className="seo-process-step">
                  <div className="seo-process-number">1</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">
                      Диагностика и измерение толщины ЛКП
                    </h4>
                    <p className="seo-process-text">
                      Тщательный осмотр кузова под разными углами и освещением.
                      Измерение толщины лака толщиномером на всех панелях.
                      Определение типа ЛКП (глянец, мат, металлик). Составление
                      карты дефектов.
                    </p>
                  </div>
                </div>
                <div className="seo-process-step">
                  <div className="seo-process-number">2</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">Подготовка и мойка</h4>
                    <p className="seo-process-text">
                      Глубокая очистка кузова: удаление битума, смолы,
                      насекомых, железной пыли (железоотделителем). Контактная
                      мойка с обезжириванием. Сушка компрессором.
                    </p>
                  </div>
                </div>
                <div className="seo-process-step">
                  <div className="seo-process-number">3</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">Маскирование и защита</h4>
                    <p className="seo-process-text">
                      Защита неметаллических элементов: резиновых уплотнителей,
                      пластика, хрома, стекол. Маскирование стыков и щелей для
                      предотвращения попадания абразивов.
                    </p>
                  </div>
                </div>
                <div className="seo-process-step">
                  <div className="seo-process-number">4</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">
                      Восстановительная полировка
                    </h4>
                    <p className="seo-process-text">
                      Работа с профессиональными полировальными машинами и
                      абразивными пастами. Удаление глубоких царапин, окисления,
                      swirl-маркировки. Контроль температуры и давления.
                    </p>
                  </div>
                </div>
                <div className="seo-process-step">
                  <div className="seo-process-number">5</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">Финишная полировка</h4>
                    <p className="seo-process-text">
                      Устранение микроцарапин от абразивной стадии. Придание
                      идеальной гладкости и зеркального блеска. Использование
                      мягких полиролей и финишных падов.
                    </p>
                  </div>
                </div>
                <div className="seo-process-step">
                  <div className="seo-process-number">6</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">
                      Нанесение защиты и контроль
                    </h4>
                    <p className="seo-process-text">
                      Нанесение защитного покрытия (воск, керамика, силант).
                      Контроль качества под разным освещением. Финальная
                      очистка, удаление маскировочной ленты.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Какие дефекты устраняет профессиональная полировка?
              </h3>
              <div className="seo-alert">
                <strong className="seo-alert-title">
                  Мы эффективно устраняем:
                </strong>
                <ul className="seo-alert-list">
                  <li>
                    <strong>Swirl-маркировка (паутинка)</strong> — мелкие
                    круговые царапины от неправильной мойки
                  </li>
                  <li>
                    <strong>Глубокие царапины</strong> — от контакта с ветками,
                    щетками, ключами
                  </li>
                  <li>
                    <strong>Окисление ЛКП</strong> — помутнение, выцветание от
                    УФ-лучей
                  </li>
                  <li>
                    <strong>Химические повреждения</strong> — следы от птичьего
                    помета, древесной смолы, реагентов
                  </li>
                  <li>
                    <strong>Водяные пятна и разводы</strong> — от высыхания
                    жесткой воды
                  </li>
                  <li>
                    <strong>Следы от наклеек и скотча</strong> — без повреждения
                    лака
                  </li>
                  <li>
                    <strong>Мелкие сколы</strong> — от гравия и камней
                    (частичное восстановление)
                  </li>
                  <li>
                    <strong>Потертости</strong> — на выступающих элементах
                    кузова
                  </li>
                  <li>
                    <strong>Заводской брак полировки</strong> — апельсиновая
                    корка, мазки, полосы
                  </li>
                </ul>
              </div>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Оборудование и материалы для профессиональной полировки
              </h3>
              <p>
                Мы используем только профессиональное оборудование и материалы
                премиум-класса:
              </p>
            </div>

            <div className="seo-conclusion">
              <h4 className="seo-conclusion-title">
                Профессиональная детейлинг полировка в Витебске — инвестиция в
                красоту и сохранность вашего авто
              </h4>
              <p>
                Качественная полировка — это не просто косметическая процедура,
                а комплексное восстановление и защита лакокрасочного покрытия
                вашего автомобиля. Правильно выполненная полировка не только
                возвращает блеск, но и продлевает жизнь ЛКП, защищая его от
                агрессивных воздействий окружающей среды.
              </p>
              <p>
                Наш детейлинг-центр в Витебске предлагает полный спектр услуг по
                полировке автомобилей любой сложности. Мы работаем с легковыми
                автомобилями всех классов и марок, внедорожниками и
                кроссоверами, коммерческим транспортом, мотоциклами и скутерами,
                специальной техникой.
              </p>
              <p>
                Наши мастера регулярно проходят обучение, используют современное
                оборудование и материалы премиум-класса. Мы учитываем
                особенности каждого автомобиля и подбираем индивидуальный
                подход.
              </p>
              <p className="seo-conclusion-final">
                <strong>
                  Запишитесь на бесплатную диагностику состояния ЛКП вашего
                  автомобиля и получите детальный расчет стоимости
                  профессиональной полировки в Витебске.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
