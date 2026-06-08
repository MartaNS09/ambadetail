// "use client";

// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import { PriceTable, BrandsTable } from "./tables";
// import "./page.scss";

// export default function ServicePage() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [openFaq, setOpenFaq] = useState<number | null>(0);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 100);
//     return () => clearTimeout(timer);
//   }, []);

//   // Обработчик для SEO-аккордеона
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

//   const toggleFaq = (index: number) => {
//     setOpenFaq(openFaq === index ? null : index);
//   };

//   const titleParts = ["Тонировка"];

//   const faqItems = [
//     {
//       question: "Какая тонировка лучше — обычная или атермальная?",
//       answer:
//         "Обычная тонировка даёт затемнение и приватность, атермальная — сильнее снижает нагрев и бликуемость при более 'светлом' внешнем виде. Подбор зависит от задач и пожеланий.",
//     },
//     {
//       question: "Сколько времени занимает тонировка автомобиля?",
//       answer:
//         "Срок зависит от типа кузова и объёма работ. Обычно занимает от нескольких часов. Точное время скажем после уточнения комплекта стёкол.",
//     },
//     {
//       question: "Можно ли мыть автомобиль сразу после тонировки?",
//       answer:
//         "Рекомендуем выдержать паузу, чтобы плёнка полностью 'села'. Срок зависит от условий и типа плёнки — подскажем после выполнения работ.",
//     },
//     {
//       question: "Остаются ли пузыри после тонировки?",
//       answer:
//         "Небольшая 'влага' или точечные следы могут быть сразу после работ и обычно уходят по мере высыхания. Мы используем качественные материалы и технологию нанесения.",
//     },
//     {
//       question: "Даете ли гарантию на тонировку?",
//       answer:
//         "Да, даём гарантию на работы и материалы. Условия зависят от выбранной плёнки — расскажем при записи.",
//     },
//     {
//       question: "От чего зависит цена тонировки?",
//       answer:
//         "Цена зависит от класса автомобиля, комплекта стёкол, типа плёнки (обычная/атермальная) и сложности работ.",
//     },
//   ];

//   return (
//     <>
//       <section
//         className="service-hero"
//         aria-label="Тонировка автомобиля в Витебске"
//       >
//         <div className="service-hero__bg">
//           <Image
//             src="/images/services/tonirovka.webp"
//             alt="Тонировка стёкол автомобиля в Витебске"
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
//               Качественная тонировка стёкол автомобиля. Защита от УФ-лучей,
//               улучшение внешнего вида, конфиденциальность.
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="service-content">
//         <div className="container">
//           {/* Введение */}
//           <div className="service-content__intro">
//             <p className="service-content__intro-text">
//               Тонировка авто в <strong>Витебске</strong> — это комфорт в салоне,
//               защита от солнца и аккуратный внешний вид. Подберём плёнку (в том
//               числе атермальную) и расскажем, как ухаживать за стёклами после
//               работ.
//             </p>
//           </div>

//           {/* FAQ Аккордеон */}
//           <div className="service-content__section">
//             <h2 className="service-content__section-title">Вопросы и ответы</h2>
//             <div className="faq-accordion">
//               {faqItems.map((item, index) => (
//                 <div
//                   key={index}
//                   className={`faq-accordion__item ${openFaq === index ? "faq-accordion__item--open" : ""}`}
//                 >
//                   <button
//                     className="faq-accordion__button"
//                     onClick={() => toggleFaq(index)}
//                     aria-expanded={openFaq === index}
//                     aria-controls={`faq-content-${index}`}
//                   >
//                     <span className="faq-accordion__question">
//                       {item.question}
//                     </span>
//                     <span className="faq-accordion__icon">
//                       {openFaq === index ? (
//                         <ChevronUp size={20} />
//                       ) : (
//                         <ChevronDown size={20} />
//                       )}
//                     </span>
//                   </button>
//                   <div
//                     id={`faq-content-${index}`}
//                     className="faq-accordion__content"
//                     aria-hidden={openFaq !== index}
//                   >
//                     <div className="faq-accordion__answer">
//                       <p>{item.answer}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Таблицы цен */}
//           <div className="service-content__section">
//             <h2 className="service-content__section-title">
//               Цена тонировки автомобиля
//             </h2>
//             <PriceTable />
//             <BrandsTable />
//           </div>

//           {/* SEO Контент */}
//           <div className="seo-content">
//             <h2 className="seo-title">
//               Профессиональная тонировка автомобиля в Витебске
//             </h2>

//             <div className="seo-section">
//               <h3 className="seo-subtitle">
//                 Что такое профессиональная тонировка автомобиля?
//               </h3>
//               <p>
//                 <span className="seo-highlight">Тонировка автомобиля</span> —
//                 это процесс нанесения на стекла специальных светопоглощающих или
//                 светоотражающих пленок, которые изменяют оптические свойства
//                 стекол. Современная тонировка выполняет не только эстетическую
//                 функцию, но и обеспечивает комфорт, безопасность и защиту салона
//                 автомобиля от негативных внешних воздействий.
//               </p>
//               <p>
//                 В отличие от любительской тонировки, профессиональная работа
//                 предполагает использование качественных сертифицированных
//                 материалов, точную раскройку по лекалам конкретной модели авто,
//                 безупречное нанесение без пузырей и складок, а также соблюдение
//                 законодательных норм по светопропусканию. Результат —
//                 долговечная, эстетичная и безопасная тонировка.
//               </p>
//             </div>

//             <div className="seo-section">
//               <h3 className="seo-subtitle">
//                 Виды тонировочных пленок для автомобиля
//               </h3>
//               <div className="seo-cards">
//                 <div className="seo-card">
//                   <div className="seo-card-icon">🌡️</div>
//                   <h4 className="seo-card-title">Атермальная пленка</h4>
//                   <p className="seo-card-text">
//                     Современные пленки с многослойной структурой. Отсекают до
//                     99% инфракрасных лучей (тепло) и до 99% ультрафиолета.
//                     Сохраняют прозрачность, не затемняют стекла. Идеальны для
//                     комфорта и защиты салона.
//                   </p>
//                 </div>
//                 <div className="seo-card">
//                   <div className="seo-card-icon">🚗</div>
//                   <h4 className="seo-card-title">Тонировочная пленка</h4>
//                   <p className="seo-card-text">
//                     Классические пленки для затемнения стекол. Доступны в
//                     различных оттенках и степенях затемнения (5%, 20%, 35%, 50%,
//                     70%). Выполняют эстетическую и защитную функции.
//                   </p>
//                 </div>
//                 <div className="seo-card">
//                   <div className="seo-card-icon">🛡️</div>
//                   <h4 className="seo-card-title">Бронепленка (защитная)</h4>
//                   <p className="seo-card-text">
//                     Многослойные пленки повышенной прочности. Защищают от
//                     ударов, взломов, осколков при аварии. Сохраняют целостность
//                     стекла при повреждении.
//                   </p>
//                 </div>
//                 <div className="seo-card">
//                   <div className="seo-card-icon">💎</div>
//                   <h4 className="seo-card-title">Керамическая тонировка</h4>
//                   <p className="seo-card-text">
//                     Нано-керамические пленки премиум-класса. Максимальная
//                     теплоизоляция без затемнения. Не создают помех электронике,
//                     навигации, рациям.
//                   </p>
//                 </div>
//                 <div className="seo-card">
//                   <div className="seo-card-icon">📱</div>
//                   <h4 className="seo-card-title">
//                     Пленки для современных технологий
//                   </h4>
//                   <p className="seo-card-text">
//                     Специальные пленки для автомобилей с датчиками дождя,
//                     обогревом стекол, камерами, антеннами. Не мешают работе
//                     электронных систем.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="seo-section">
//               <h3 className="seo-subtitle">
//                 Этапы профессиональной тонировки автомобиля
//               </h3>
//               <div className="seo-process">
//                 <div className="seo-process-step">
//                   <div className="seo-process-number">1</div>
//                   <div className="seo-process-content">
//                     <h4 className="seo-process-title">
//                       Консультация и выбор пленки
//                     </h4>
//                     <p className="seo-process-text">
//                       Осмотр автомобиля, консультация по выбору типа пленки,
//                       степени затемнения, цвету. Обсуждение законодательных
//                       норм. Подбор оптимального решения под потребности и бюджет
//                       клиента.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="seo-process-step">
//                   <div className="seo-process-number">2</div>
//                   <div className="seo-process-content">
//                     <h4 className="seo-process-title">
//                       Подготовка автомобиля и стекол
//                     </h4>
//                     <p className="seo-process-text">
//                       Тщательная мойка кузова, чистка стекол внутри и снаружи
//                       специальными средствами. Удаление всех загрязнений, следов
//                       наклеек, старой тонировки. Обезжиривание поверхности
//                       стекол.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="seo-process-step">
//                   <div className="seo-process-number">3</div>
//                   <div className="seo-process-content">
//                     <h4 className="seo-process-title">
//                       Раскройка пленки по лекалам
//                     </h4>
//                     <p className="seo-process-text">
//                       Компьютерная или ручная раскройка пленки по точным лекалам
//                       конкретной модели автомобиля. Учет всех изгибов, форм
//                       стекол. Минимизация стыков и швов.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="seo-process-step">
//                   <div className="seo-process-number">4</div>
//                   <div className="seo-process-content">
//                     <h4 className="seo-process-title">Нанесение пленки</h4>
//                     <p className="seo-process-text">
//                       Профессиональное нанесение с использованием специальных
//                       растворов. Точное позиционирование, разглаживание
//                       специальными ракелями. Удаление воздуха и влаги из-под
//                       пленки.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="seo-process-step">
//                   <div className="seo-process-number">5</div>
//                   <div className="seo-process-content">
//                     <h4 className="seo-process-title">Сушка и фиксация</h4>
//                     <p className="seo-process-text">
//                       Тщательная просушка краев и сложных участков феном.
//                       Фиксация пленки по периметру. Контроль качества на каждом
//                       этапе. Устранение мелких дефектов.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="seo-process-step">
//                   <div className="seo-process-number">6</div>
//                   <div className="seo-process-content">
//                     <h4 className="seo-process-title">
//                       Финальная проверка и инструктаж
//                     </h4>
//                     <p className="seo-process-text">
//                       Проверка равномерности нанесения, отсутствия пузырей,
//                       складок, заломов. Инструктаж клиента по уходу за
//                       тонировкой. Выдача гарантийного талона.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="seo-section">
//               <h3 className="seo-subtitle">
//                 Преимущества профессиональной тонировки автомобиля
//               </h3>
//               <table className="seo-comparison-table">
//                 <thead>
//                   <tr>
//                     <th>Преимущество</th>
//                     <th>Профессиональная тонировка</th>
//                     <th>Любительская тонировка</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td className="seo-comparison-criterion">
//                       Качество материалов
//                     </td>
//                     <td className="seo-comparison-good">
//                       Сертифицированные пленки
//                     </td>
//                     <td className="seo-comparison-bad">Дешевые аналоги</td>
//                   </tr>
//                   <tr>
//                     <td className="seo-comparison-criterion">
//                       Точность раскройки
//                     </td>
//                     <td className="seo-comparison-good">По лекалам модели</td>
//                     <td className="seo-comparison-bad">На глаз/с запасом</td>
//                   </tr>
//                   <tr>
//                     <td className="seo-comparison-criterion">
//                       Качество нанесения
//                     </td>
//                     <td className="seo-comparison-good">
//                       Без пузырей, складок
//                     </td>
//                     <td className="seo-comparison-bad">Пузыри, заломы</td>
//                   </tr>
//                   <tr>
//                     <td className="seo-comparison-criterion">Срок службы</td>
//                     <td className="seo-comparison-good">5-10 лет</td>
//                     <td className="seo-comparison-bad">6-12 месяцев</td>
//                   </tr>
//                   <tr>
//                     <td className="seo-comparison-criterion">Гарантия</td>
//                     <td className="seo-comparison-good">
//                       Официальная гарантия
//                     </td>
//                     <td className="seo-comparison-bad">Без гарантии</td>
//                   </tr>
//                   <tr>
//                     <td className="seo-comparison-criterion">
//                       Соответствие нормам
//                     </td>
//                     <td className="seo-comparison-good">Соблюдение ГОСТ</td>
//                     <td className="seo-comparison-bad">Частые нарушения</td>
//                   </tr>
//                   <tr>
//                     <td className="seo-comparison-criterion">Внешний вид</td>
//                     <td className="seo-comparison-good">
//                       Эстетично, аккуратно
//                     </td>
//                     <td className="seo-comparison-bad">Неровные края</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>

//             <div className="seo-section">
//               <h3 className="seo-subtitle">
//                 Нормы и правила тонировки автомобилей в Беларуси
//               </h3>
//               <div className="seo-alert">
//                 <strong className="seo-alert-title">
//                   Законодательные требования к тонировке:
//                 </strong>
//                 <ul className="seo-alert-list">
//                   <li>
//                     <strong>Лобовое стекло</strong> — светопропускание не менее
//                     75% (с учетом заводского тонирования)
//                   </li>
//                   <li>
//                     <strong>Передние боковые стекла</strong> — светопропускание
//                     не менее 70%
//                   </li>
//                   <li>
//                     <strong>Задние боковые стекла и заднее стекло</strong> —
//                     разрешена любая тонировка
//                   </li>
//                   <li>
//                     <strong>Использование зеркальных пленок</strong> — запрещены
//                     на всех стеклах
//                   </li>
//                   <li>
//                     <strong>
//                       Ширина тонировочной полосы на лобовом стекле
//                     </strong>{" "}
//                     — не более 14 см сверху
//                   </li>
//                   <li>
//                     <strong>Цвет пленки</strong> — не должен искажать восприятие
//                     цветов светофоров
//                   </li>
//                   <li>
//                     <strong>Сертификация материалов</strong> — пленки должны
//                     иметь сертификаты соответствия
//                   </li>
//                 </ul>
//               </div>
//               <p className="seo-mt-3">
//                 Мы строго соблюдаем все законодательные нормы и используем
//                 только сертифицированные материалы. Консультируем клиентов по
//                 выбору тонировки в рамках закона.
//               </p>
//             </div>

//             <div className="seo-section">
//               <h3 className="seo-subtitle">
//                 Стоимость тонировки автомобиля в Витебске
//               </h3>
//               <p>
//                 Стоимость профессиональной тонировки зависит от нескольких
//                 факторов:
//               </p>
//               <ul className="seo-list">
//                 <li>
//                   <span className="seo-list-highlight">Тип пленки</span> —
//                   атермальная, тонировочная, керамическая, бронепленка
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">Класс автомобиля</span> —
//                   размер стекол, сложность форм
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">Объем работ</span> —
//                   полный комплект или отдельные стекла
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">Бренд пленки</span> —
//                   производитель и качество материала
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">
//                     Дополнительные услуги
//                   </span>{" "}
//                   — снятие старой тонировки, подготовка
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">Наличие технологий</span>{" "}
//                   — обогрев стекол, датчики дождя, антенны
//                 </li>
//               </ul>

//               <div className="seo-alert">
//                 <strong className="seo-alert-title">Варианты тонировки:</strong>
//                 <ul className="seo-alert-list">
//                   <li>
//                     <strong>Базовая тонировка</strong> — задние стекла
//                     стандартной пленкой
//                   </li>
//                   <li>
//                     <strong>Стандартная тонировка</strong> — все стекла (кроме
//                     лобового) качественной пленкой
//                   </li>
//                   <li>
//                     <strong>Премиум тонировка</strong> — атермальной или
//                     керамической пленкой
//                   </li>
//                   <li>
//                     <strong>Полный комплект</strong> — все стекла включая
//                     лобовое (в рамках закона)
//                   </li>
//                   <li>
//                     <strong>Тонировка с защитой</strong> — бронепленка или
//                     многослойная защита
//                   </li>
//                   <li>
//                     <strong>Индивидуальный дизайн</strong> — цветная,
//                     зеркальная, градиентная тонировка
//                   </li>
//                 </ul>
//               </div>

//               <p className="seo-mt-3">
//                 Точную стоимость для вашего автомобиля можно узнать после
//                 осмотра и консультации. Мы предлагаем честные цены и гарантируем
//                 качество.
//               </p>
//             </div>

//             <div className="seo-section">
//               <h3 className="seo-subtitle">
//                 Преимущества тонировки автомобиля
//               </h3>
//               <div className="seo-faq">
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">Защита от солнца и тепла</h4>
//                   <p className="seo-faq-answer">
//                     Атермальные пленки отсекают до 99% инфракрасных лучей,
//                     снижая температуру в салоне на 10-15°C летом. Экономия на
//                     кондиционировании, защита кожи и глаз от УФ-лучей.
//                   </p>
//                 </div>
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">
//                     Конфиденциальность и безопасность
//                   </h4>
//                   <p className="seo-faq-answer">
//                     Затемнение стекол скрывает салон от посторонних глаз,
//                     защищает от угона, снижает риск ограбления. Бронепленки
//                     защищают от осколков при аварии.
//                   </p>
//                 </div>
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">
//                     Защита салона от выцветания
//                   </h4>
//                   <p className="seo-faq-answer">
//                     Тонировка блокирует 99% ультрафиолетовых лучей, которые
//                     вызывают выцветание обивки, пластика, кожи салона. Сохраняет
//                     внешний вид и стоимость автомобиля.
//                   </p>
//                 </div>
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">
//                     Снижение утомляемости водителя
//                   </h4>
//                   <p className="seo-faq-answer">
//                     Защита от бликов фар встречных авто, отражений от мокрого
//                     асфальта, яркого солнца. Улучшение видимости в сложных
//                     погодных условиях.
//                   </p>
//                 </div>
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">Экономия на обслуживании</h4>
//                   <p className="seo-faq-answer">
//                     Снижение нагрузки на кондиционер, защита электроники салона
//                     от перегрева, уменьшение расхода топлива за счет меньшей
//                     работы климат-системы.
//                   </p>
//                 </div>
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">Эстетический вид</h4>
//                   <p className="seo-faq-answer">
//                     Автомобиль приобретает солидный, завершенный вид.
//                     Возможность индивидуального дизайна с помощью цветных и
//                     декоративных пленок.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="seo-section">
//               <h3 className="seo-subtitle">Уход за тонированными стеклами</h3>
//               <p>Правильный уход продлевает срок службы тонировки до 10 лет:</p>
//               <ul className="seo-list">
//                 <li>
//                   <span className="seo-list-highlight">Первые 3-7 дней</span> —
//                   не опускать стекла, не мыть автомобиль, не пользоваться
//                   обогревом стекол
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">Мойка</span> —
//                   использовать мягкие губки, неабразивные средства, не тереть
//                   края пленки
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">Очистка</span> — не
//                   использовать растворители, ацетон, абразивные чистящие
//                   средства
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">
//                     Щетки стеклоочистителей
//                   </span>{" "}
//                   — своевременно менять, использовать качественные щетки
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">Зимний уход</span> —
//                   аккуратно очищать ото льда, не использовать скребки с острыми
//                   краями
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">Парковка</span> — в
//                   жаркую погоду стараться парковаться в тени
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">Проверка</span> —
//                   ежегодно проверять состояние тонировки у специалистов
//                 </li>
//               </ul>
//               <p className="seo-mt-3">
//                 При соблюдении этих правил тонировка прослужит долгие годы без
//                 потери качества.
//               </p>
//             </div>

//             <div className="seo-section">
//               <h3 className="seo-subtitle">
//                 Часто задаваемые вопросы о тонировке
//               </h3>
//               <div className="seo-faq">
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">
//                     Сколько времени занимает тонировка?
//                   </h4>
//                   <p className="seo-faq-answer">
//                     Время зависит от объема работ: тонировка задних стекол — 2-3
//                     часа, полный комплект — 4-6 часов, премиум тонировка с
//                     атермальной пленкой — 6-8 часов.
//                   </p>
//                 </div>
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">
//                     Мешает ли тонировка работе электроники?
//                   </h4>
//                   <p className="seo-faq-answer">
//                     Качественные пленки (особенно керамические) не создают помех
//                     GPS, GSM, рациям, датчикам дождя. Мы используем только
//                     совместимые с электроникой материалы.
//                   </p>
//                 </div>
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">
//                     Можно ли тонировать стекла с обогревом?
//                   </h4>
//                   <p className="seo-faq-answer">
//                     Да, современные пленки не мешают работе обогрева. Важно
//                     правильно нанести пленку и выдержать технологическую паузу
//                     перед использованием обогрева.
//                   </p>
//                 </div>
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">
//                     Что делать, если тонировка повреждена?
//                   </h4>
//                   <p className="seo-faq-answer">
//                     Мы предлагаем услуги локального ремонта или замены тонировки
//                     на поврежденном стекле. Гарантируем подбор точно такой же
//                     пленки.
//                   </p>
//                 </div>
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">
//                     Как снять старую тонировку?
//                   </h4>
//                   <p className="seo-faq-answer">
//                     Мы профессионально снимаем старую тонировку без повреждения
//                     стекол и обогревательных элементов. Удаляем весь клей,
//                     очищаем, подготавливаем к новой тонировке.
//                   </p>
//                 </div>
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">
//                     Даете ли вы гарантию на тонировку?
//                   </h4>
//                   <p className="seo-faq-answer">
//                     Да, мы предоставляем официальную гарантию на материалы и
//                     работы. Гарантийный срок зависит от типа пленки и составляет
//                     от 2 до 7 лет.
//                   </p>
//                 </div>
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">
//                     Можно ли тонировать лобовое стекло?
//                   </h4>
//                   <p className="seo-faq-answer">
//                     Да, но только прозрачными атермальными пленками с
//                     сохранением светопропускания не менее 75%. Также возможна
//                     тонировочная полоса сверху (не более 14 см).
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="seo-conclusion">
//               <h4 className="seo-conclusion-title">
//                 Профессиональная тонировка автомобилей в Витебске — комфорт,
//                 безопасность, стиль
//               </h4>
//               <p>
//                 Тонировка — это не просто модный тренд, а практичное решение для
//                 повышения комфорта, безопасности и сохранности вашего
//                 автомобиля. Правильно выполненная тонировка создает оптимальный
//                 микроклимат в салоне, защищает от вредных излучений, скрывает
//                 содержимое салона от посторонних глаз и придает автомобилю
//                 стильный завершенный вид.
//               </p>
//               <p>
//                 Наш центр в Витебске предлагает полный спектр услуг по тонировке
//                 автомобилей:
//               </p>
//               <ul className="seo-list" style={{ marginBottom: "1rem" }}>
//                 <li>Тонировка легковых автомобилей всех марок и классов</li>
//                 <li>Тонировка внедорожников, кроссоверов, минивэнов</li>
//                 <li>Тонировка коммерческого транспорта</li>
//                 <li>Тонировка мотоциклов и скутеров</li>
//                 <li>Специальная тонировка для такси и каршеринга</li>
//                 <li>Тонировка катеров и яхт</li>
//               </ul>
//               <p>
//                 Мы используем только качественные сертифицированные материалы от
//                 ведущих мировых производителей. Наши мастера имеют многолетний
//                 опыт и регулярно проходят обучение новым технологиям. Каждому
//                 клиенту мы предлагаем индивидуальный подход и консультацию по
//                 выбору оптимального решения.
//               </p>
//               <p className="seo-conclusion-final">
//                 <strong>
//                   Запишитесь на бесплатную консультацию по тонировке вашего
//                   автомобиля в Витебске. Сделайте ваше вождение более
//                   комфортным, безопасным и стильным!
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
import { ChevronDown, ChevronUp } from "lucide-react";
import { PriceTable, BrandsTable } from "./tables";
import "./page.scss";

export default function ServicePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // SEO: устанавливаем все метатеги как на старом сайте
  useEffect(() => {
    document.title =
      "Тонировка авто в Витебске — цена, атермальная плёнка, гарантия - Ambadetail";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Тонировка стекол автомобиля в Витебске: атермальная плёнка, защита от солнца и комфорта в салоне. Актуальные цены по классам, сроки и запись в Ambadetail.",
    );

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      "content",
      "тонировка авто Витебск, тонировка стекол автомобиля, атермальная пленка, затемнение стекол, тонировка пленкой, тонировка цена",
    );

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute(
      "href",
      "https://ambadetail.vercel.app/uslugi/tonirovka",
    );

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute(
      "content",
      "Тонировка авто в Витебске — цена, атермальная плёнка, гарантия",
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
      "Тонировка стекол автомобиля в Витебске: атермальная плёнка, защита от солнца и комфорта в салоне. Актуальные цены по классам, сроки и запись в Ambadetail.",
    );

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement("meta");
      ogImage.setAttribute("property", "og:image");
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute(
      "content",
      "https://ambadetail.vercel.app/images/services/tonirovka.webp",
    );

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute(
      "content",
      "https://ambadetail.vercel.app/uslugi/tonirovka",
    );

    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement("meta");
      twitterTitle.setAttribute("name", "twitter:title");
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute(
      "content",
      "Тонировка авто в Витебске — цена, атермальная плёнка, гарантия",
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
      "Тонировка стекол автомобиля в Витебске: атермальная плёнка, защита от солнца и комфорта в салоне. Актуальные цены по классам, сроки и запись в Ambadetail.",
    );

    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement("meta");
      twitterImage.setAttribute("name", "twitter:image");
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute(
      "content",
      "https://ambadetail.vercel.app/images/services/tonirovka.webp",
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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const titleParts = ["Тонировка"];

  const faqItems = [
    {
      question: "Какая тонировка лучше — обычная или атермальная?",
      answer:
        "Обычная тонировка даёт затемнение и приватность, атермальная — сильнее снижает нагрев и бликуемость при более 'светлом' внешнем виде. Подбор зависит от задач и пожеланий.",
    },
    {
      question: "Сколько времени занимает тонировка автомобиля?",
      answer:
        "Срок зависит от типа кузова и объёма работ. Обычно занимает от нескольких часов. Точное время скажем после уточнения комплекта стёкол.",
    },
    {
      question: "Можно ли мыть автомобиль сразу после тонировки?",
      answer:
        "Рекомендуем выдержать паузу, чтобы плёнка полностью 'села'. Срок зависит от условий и типа плёнки — подскажем после выполнения работ.",
    },
    {
      question: "Остаются ли пузыри после тонировки?",
      answer:
        "Небольшая 'влага' или точечные следы могут быть сразу после работ и обычно уходят по мере высыхания. Мы используем качественные материалы и технологию нанесения.",
    },
    {
      question: "Даете ли гарантию на тонировку?",
      answer:
        "Да, даём гарантию на работы и материалы. Условия зависят от выбранной плёнки — расскажем при записи.",
    },
    {
      question: "От чего зависит цена тонировки?",
      answer:
        "Цена зависит от класса автомобиля, комплекта стёкол, типа плёнки (обычная/атермальная) и сложности работ.",
    },
  ];

  return (
    <>
      <section
        className="service-hero"
        aria-label="Тонировка автомобиля в Витебске"
      >
        <div className="service-hero__bg">
          <Image
            src="/images/services/tonirovka.webp"
            alt="Тонировка стёкол автомобиля в Витебске"
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
              Качественная тонировка стёкол автомобиля. Защита от УФ-лучей,
              улучшение внешнего вида, конфиденциальность.
            </p>
          </div>
        </div>
      </section>

      <div className="service-content">
        <div className="container">
          <div className="service-content__intro">
            <p className="service-content__intro-text">
              Тонировка авто в <strong>Витебске</strong> — это комфорт в салоне,
              защита от солнца и аккуратный внешний вид. Подберём плёнку (в том
              числе атермальную) и расскажем, как ухаживать за стёклами после
              работ.
            </p>
          </div>

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

          <div className="service-content__section">
            <h2 className="service-content__section-title">
              Цена тонировки автомобиля
            </h2>
            <PriceTable />
            <BrandsTable />
          </div>

          <div className="seo-content">
            <h2 className="seo-title">
              Профессиональная тонировка автомобиля в Витебске
            </h2>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Что такое профессиональная тонировка автомобиля?
              </h3>
              <p>
                <span className="seo-highlight">Тонировка автомобиля</span> —
                это процесс нанесения на стекла специальных светопоглощающих или
                светоотражающих пленок, которые изменяют оптические свойства
                стекол. Современная тонировка выполняет не только эстетическую
                функцию, но и обеспечивает комфорт, безопасность и защиту салона
                автомобиля от негативных внешних воздействий.
              </p>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Виды тонировочных пленок для автомобиля
              </h3>
              <div className="seo-cards">
                <div className="seo-card">
                  <div className="seo-card-icon">🌡️</div>
                  <h4 className="seo-card-title">Атермальная пленка</h4>
                  <p className="seo-card-text">
                    Современные пленки с многослойной структурой. Отсекают до
                    99% инфракрасных лучей (тепло) и до 99% ультрафиолета.
                    Сохраняют прозрачность, не затемняют стекла.
                  </p>
                </div>
                <div className="seo-card">
                  <div className="seo-card-icon">🚗</div>
                  <h4 className="seo-card-title">Тонировочная пленка</h4>
                  <p className="seo-card-text">
                    Классические пленки для затемнения стекол. Доступны в
                    различных оттенках и степенях затемнения (5%, 20%, 35%, 50%,
                    70%).
                  </p>
                </div>
                <div className="seo-card">
                  <div className="seo-card-icon">🛡️</div>
                  <h4 className="seo-card-title">Бронепленка (защитная)</h4>
                  <p className="seo-card-text">
                    Многослойные пленки повышенной прочности. Защищают от
                    ударов, взломов, осколков при аварии. Сохраняют целостность
                    стекла при повреждении.
                  </p>
                </div>
                <div className="seo-card">
                  <div className="seo-card-icon">💎</div>
                  <h4 className="seo-card-title">Керамическая тонировка</h4>
                  <p className="seo-card-text">
                    Нано-керамические пленки премиум-класса. Максимальная
                    теплоизоляция без затемнения. Не создают помех электронике.
                  </p>
                </div>
              </div>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Этапы профессиональной тонировки автомобиля
              </h3>
              <div className="seo-process">
                <div className="seo-process-step">
                  <div className="seo-process-number">1</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">
                      Консультация и выбор пленки
                    </h4>
                    <p className="seo-process-text">
                      Осмотр автомобиля, консультация по выбору типа пленки,
                      степени затемнения, цвету. Обсуждение законодательных
                      норм.
                    </p>
                  </div>
                </div>
                <div className="seo-process-step">
                  <div className="seo-process-number">2</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">
                      Подготовка автомобиля и стекол
                    </h4>
                    <p className="seo-process-text">
                      Тщательная мойка кузова, чистка стекол внутри и снаружи
                      специальными средствами. Удаление всех загрязнений.
                    </p>
                  </div>
                </div>
                <div className="seo-process-step">
                  <div className="seo-process-number">3</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">
                      Раскройка пленки по лекалам
                    </h4>
                    <p className="seo-process-text">
                      Компьютерная или ручная раскройка пленки по точным лекалам
                      конкретной модели автомобиля.
                    </p>
                  </div>
                </div>
                <div className="seo-process-step">
                  <div className="seo-process-number">4</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">Нанесение пленки</h4>
                    <p className="seo-process-text">
                      Профессиональное нанесение с использованием специальных
                      растворов. Точное позиционирование, разглаживание.
                    </p>
                  </div>
                </div>
                <div className="seo-process-step">
                  <div className="seo-process-number">5</div>
                  <div className="seo-process-content">
                    <h4 className="seo-process-title">Сушка и фиксация</h4>
                    <p className="seo-process-text">
                      Тщательная просушка краев и сложных участков феном.
                      Фиксация пленки по периметру.
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
                      Проверка равномерности нанесения, отсутствия пузырей,
                      складок, заломов. Инструктаж клиента по уходу.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Нормы и правила тонировки автомобилей в Беларуси
              </h3>
              <div className="seo-alert">
                <strong className="seo-alert-title">
                  Законодательные требования к тонировке:
                </strong>
                <ul className="seo-alert-list">
                  <li>
                    <strong>Лобовое стекло</strong> — светопропускание не менее
                    75% (с учетом заводского тонирования)
                  </li>
                  <li>
                    <strong>Передние боковые стекла</strong> — светопропускание
                    не менее 70%
                  </li>
                  <li>
                    <strong>Задние боковые стекла и заднее стекло</strong> —
                    разрешена любая тонировка
                  </li>
                  <li>
                    <strong>Использование зеркальных пленок</strong> — запрещены
                    на всех стеклах
                  </li>
                </ul>
              </div>
            </div>

            <div className="seo-conclusion">
              <h4 className="seo-conclusion-title">
                Профессиональная тонировка автомобилей в Витебске — комфорт,
                безопасность, стиль
              </h4>
              <p>
                Тонировка — это не просто модный тренд, а практичное решение для
                повышения комфорта, безопасности и сохранности вашего
                автомобиля.
              </p>
              <p className="seo-conclusion-final">
                <strong>
                  Запишитесь на бесплатную консультацию по тонировке вашего
                  автомобиля в Витебске. Сделайте ваше вождение более
                  комфортным, безопасным и стильным!
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
