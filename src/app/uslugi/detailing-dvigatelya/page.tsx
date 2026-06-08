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

//   const titleParts = ["Детейлинг", "двигателя"];

//   const faqItems = [
//     {
//       question: "Не вредно ли мыть двигатель?",
//       answer:
//         "При профессиональном подходе мойка двигателя абсолютно безопасна. Мы используем специальные средства, защищаем электронику, контролируем температуру и давление воды. Риск повреждений исключен.",
//     },
//     {
//       question: "Сколько времени занимает детейлинг двигателя?",
//       answer:
//         "Время зависит от степени загрязнения: экспресс-чистка — 1,5-2 часа, стандартная — 3-4 часа, глубокая чистка — 4-6 часов, комплексный детейлинг — 6-8 часов.",
//     },
//     {
//       question: "Можно ли мыть двигатель зимой?",
//       answer:
//         "Да, мы работаем круглый год. Зимой особенно важно удалять реагенты и соль. Мы проводим мойку в отапливаемом помещении, тщательно сушим все элементы.",
//     },
//     {
//       question: "Что делать после детейлинга двигателя?",
//       answer:
//         "Первые 1-2 часа рекомендуется не эксплуатировать автомобиль для полной просушки. Далее — обычная эксплуатация. Мы даем рекомендации по поддержанию чистоты.",
//     },
//     {
//       question: "Можно ли мыть гибридные и электрические автомобили?",
//       answer:
//         "Да, мы имеем опыт работы с гибридами и электромобилями. Используем специальные технологии и средства, безопасные для высоковольтной электроники.",
//     },
//     {
//       question: "Даете ли вы гарантию на работы?",
//       answer:
//         "Да, мы предоставляем гарантию на выполненные работы. Если в течение гарантийного периода возникают проблемы, связанные с качеством чистки, мы устраняем их бесплатно.",
//     },
//   ];

//   return (
//     <>
//       <section
//         className="service-hero"
//         aria-label="Детейлинг двигателя автомобиля в Витебске"
//       >
//         <div className="service-hero__bg">
//           <Image
//             src="/images/services/detailing_dvigatelya.webp"
//             alt="Профессиональный детейлинг двигателя автомобиля в Витебске"
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
//               Профессиональная чистка и защита подкапотного пространства.
//               Удаление масляных пятен, грязи, реагентов с сохранением всех
//               систем и узлов.
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="service-content">
//         <div className="container">
//           {/* Введение */}
//           <div className="service-content__intro">
//             <p className="service-content__intro-text">
//               <strong>Детейлинг двигателя</strong> в Витебске — это
//               профессиональная очистка моторного отсека от масляных загрязнений,
//               дорожной грязи и реагентов. Безопасно для электроники, резины и
//               пластика. Продлевает срок службы двигателя.
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
//               Цена детейлинга двигателя
//             </h2>
//             <PriceTable />
//             <BrandsTable />
//           </div>

//           {/* SEO Контент */}
//           <div className="seo-content">
//             <h2 className="seo-title">
//               Профессиональный детейлинг двигателя в Витебске
//             </h2>

//             <div className="seo-section">
//               <h3 className="seo-subtitle">
//                 Что такое профессиональный детейлинг двигателя?
//               </h3>
//               <p>
//                 <span className="seo-highlight">Детейлинг двигателя</span> — это
//                 комплексная процедура глубокой очистки и восстановления
//                 подкапотного пространства автомобиля, включающая мойку
//                 двигателя, чистку всех узлов и агрегатов, а также защитную
//                 обработку пластиковых и резиновых элементов. В отличие от
//                 обычной мойки, детейлинг двигателя предполагает тщательную,
//                 поэтапную обработку с использованием специальных средств и
//                 оборудования.
//               </p>
//               <p>
//                 Профессиональный детейлинг не только возвращает двигателю и
//                 подкапотному пространству эстетичный вид, но и способствует
//                 выявлению потенциальных проблем (течи, трещины, износ), улучшает
//                 теплоотдачу, продлевает срок службы резинотехнических изделий и
//                 обеспечивает легкий доступ для технического обслуживания.
//               </p>
//             </div>

//             <div className="seo-section">
//               <h3 className="seo-subtitle">
//                 Услуги детейлинга двигателя и подкапотного пространства
//               </h3>
//               <div className="seo-cards">
//                 <div className="seo-card">
//                   <div className="seo-card-icon">🚿</div>
//                   <h4 className="seo-card-title">Безопасная мойка двигателя</h4>
//                   <p className="seo-card-text">
//                     Профессиональная мойка с использованием щадящих средств и
//                     технологий. Защита электроники, датчиков, разъемов. Удаление
//                     масляных пятен, грязи, пыли без риска для узлов и агрегатов.
//                   </p>
//                 </div>
//                 <div className="seo-card">
//                   <div className="seo-card-icon">✨</div>
//                   <h4 className="seo-card-title">
//                     Чистка и восстановление пластика
//                   </h4>
//                   <p className="seo-card-text">
//                     Очистка пластиковых крышек, патрубков, кожухов.
//                     Восстановление цвета, удаление желтизны и потускнения.
//                     Нанесение защитных составов от ультрафиолета.
//                   </p>
//                 </div>
//                 <div className="seo-card">
//                   <div className="seo-card-icon">🔧</div>
//                   <h4 className="seo-card-title">
//                     Чистка металлических поверхностей
//                   </h4>
//                   <p className="seo-card-text">
//                     Удаление коррозии, окислов, налета с металлических деталей.
//                     Очистка радиатора, интеркулера, трубопроводов.
//                     Восстановление блеска алюминиевых и стальных элементов.
//                   </p>
//                 </div>
//                 <div className="seo-card">
//                   <div className="seo-card-icon">🛡️</div>
//                   <h4 className="seo-card-title">Защитная обработка резины</h4>
//                   <p className="seo-card-text">
//                     Очистка и восстановление резиновых уплотнителей, патрубков,
//                     сайлентблоков. Нанесение защитных составов от
//                     растрескивания, пересыхания, старения.
//                   </p>
//                 </div>
//                 <div className="seo-card">
//                   <div className="seo-card-icon">🔍</div>
//                   <h4 className="seo-card-title">Диагностика при чистке</h4>
//                   <p className="seo-card-text">
//                     Выявление течей масла, антифриза, тормозной жидкости.
//                     Обнаружение трещин, повреждений, износа деталей.
//                     Консультация по состоянию узлов и агрегатов.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="seo-section">
//               <h3 className="seo-subtitle">
//                 Этапы профессионального детейлинга двигателя
//               </h3>
//               <div className="seo-process">
//                 <div className="seo-process-step">
//                   <div className="seo-process-number">1</div>
//                   <div className="seo-process-content">
//                     <h4 className="seo-process-title">
//                       Диагностика и подготовка
//                     </h4>
//                     <p className="seo-process-text">
//                       Осмотр подкапотного пространства, оценка степени
//                       загрязнения, выявление уязвимых мест. Защита электронных
//                       компонентов, датчиков, разъемов специальными покрытиями.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="seo-process-step">
//                   <div className="seo-process-number">2</div>
//                   <div className="seo-process-content">
//                     <h4 className="seo-process-title">Сухая очистка</h4>
//                     <p className="seo-process-text">
//                       Удаление крупного мусора, листьев, пыли с помощью сжатого
//                       воздуха и специальных щеток. Очистка труднодоступных мест,
//                       ребер радиатора, зазоров между деталями.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="seo-process-step">
//                   <div className="seo-process-number">3</div>
//                   <div className="seo-process-content">
//                     <h4 className="seo-process-title">
//                       Нанесение активной пены
//                     </h4>
//                     <p className="seo-process-text">
//                       Распыление специальной активной пены, которая растворяет
//                       масляные и битумные загрязнения. Выдержка для реакции
//                       (10-15 минут).
//                     </p>
//                   </div>
//                 </div>
//                 <div className="seo-process-step">
//                   <div className="seo-process-number">4</div>
//                   <div className="seo-process-content">
//                     <h4 className="seo-process-title">Безопасная мойка</h4>
//                     <p className="seo-process-text">
//                       Аккуратная мойка слабым напором воды под низким давлением.
//                       Использование мягких щеток для деликатной очистки.
//                       Температурный контроль.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="seo-process-step">
//                   <div className="seo-process-number">5</div>
//                   <div className="seo-process-content">
//                     <h4 className="seo-process-title">Детальная чистка</h4>
//                     <p className="seo-process-text">
//                       Ручная очистка сложных участков, стыков, соединений.
//                       Применение специальных щеток, ершиков, мягких тканей.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="seo-process-step">
//                   <div className="seo-process-number">6</div>
//                   <div className="seo-process-content">
//                     <h4 className="seo-process-title">
//                       Сушка и восстановление
//                     </h4>
//                     <p className="seo-process-text">
//                       Тщательная сушка сжатым воздухом. Удаление влаги из всех
//                       щелей и соединений. Нанесение восстанавливающих и защитных
//                       составов на пластик, резину, металл.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="seo-section">
//               <h3 className="seo-subtitle">
//                 Почему нельзя мыть двигатель самостоятельно?
//               </h3>
//               <table className="seo-comparison-table">
//                 <thead>
//                   <tr>
//                     <th>Критерий</th>
//                     <th>Профессиональный детейлинг</th>
//                     <th>Самостоятельная мойка</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td className="seo-comparison-criterion">
//                       Защита электроники
//                     </td>
//                     <td className="seo-comparison-good">Полная изоляция</td>
//                     <td className="seo-comparison-bad">Риск замыканий</td>
//                   </tr>
//                   <tr>
//                     <td className="seo-comparison-criterion">
//                       Качество очистки
//                     </td>
//                     <td className="seo-comparison-good">Глубокая, до 95%</td>
//                     <td className="seo-comparison-bad">
//                       Поверхностная, 40-60%
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="seo-comparison-criterion">
//                       Безопасность для узлов
//                     </td>
//                     <td className="seo-comparison-good">
//                       Безопасные технологии
//                     </td>
//                     <td className="seo-comparison-bad">Риск повреждений</td>
//                   </tr>
//                   <tr>
//                     <td className="seo-comparison-criterion">
//                       Используемые средства
//                     </td>
//                     <td className="seo-comparison-good">Специализированные</td>
//                     <td className="seo-comparison-bad">Бытовая химия</td>
//                   </tr>
//                   <tr>
//                     <td className="seo-comparison-criterion">Диагностика</td>
//                     <td className="seo-comparison-good">Выявление проблем</td>
//                     <td className="seo-comparison-bad">Без диагностики</td>
//                   </tr>
//                   <tr>
//                     <td className="seo-comparison-criterion">
//                       Восстановление материалов
//                     </td>
//                     <td className="seo-comparison-good">Защитная обработка</td>
//                     <td className="seo-comparison-bad">Без восстановления</td>
//                   </tr>
//                   <tr>
//                     <td className="seo-comparison-criterion">
//                       Гарантия результата
//                     </td>
//                     <td className="seo-comparison-good">
//                       Официальная гарантия
//                     </td>
//                     <td className="seo-comparison-bad">Без гарантии</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>

//             <div className="seo-section">
//               <h3 className="seo-subtitle">
//                 Какие загрязнения удаляет профессиональный детейлинг двигателя?
//               </h3>
//               <div className="seo-alert">
//                 <strong className="seo-alert-title">
//                   Мы эффективно удаляем:
//                 </strong>
//                 <ul className="seo-alert-list">
//                   <li>
//                     <strong>Масляные загрязнения</strong> — потеки масла,
//                     наслоения на блоке цилиндров, поддоне
//                   </li>
//                   <li>
//                     <strong>Дорожную грязь и пыль</strong> — смесь пыли, песка,
//                     реагентов, образующую плотный налет
//                   </li>
//                   <li>
//                     <strong>Битумные пятна</strong> — с дорожного покрытия,
//                     особенно актуально летом
//                   </li>
//                   <li>
//                     <strong>Следы антифриза и тормозной жидкости</strong> — от
//                     возможных течей
//                   </li>
//                   <li>
//                     <strong>Ржавчину и окислы</strong> — на металлических
//                     деталях, болтовых соединениях
//                   </li>
//                   <li>
//                     <strong>Органические загрязнения</strong> — листья, семена,
//                     пух, насекомых в радиаторе
//                   </li>
//                   <li>
//                     <strong>Нагар и копоть</strong> — в зоне выпускного
//                     коллектора, турбины
//                   </li>
//                   <li>
//                     <strong>Солевые отложения</strong> — от зимних реагентов
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className="seo-section">
//               <h3 className="seo-subtitle">
//                 Стоимость детейлинга двигателя в Витебске
//               </h3>
//               <p>
//                 Стоимость профессиональной чистки двигателя зависит от
//                 нескольких факторов:
//               </p>
//               <ul className="seo-list">
//                 <li>
//                   <span className="seo-list-highlight">Тип двигателя</span> —
//                   бензиновый, дизельный, гибридный, электрический
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">
//                     Степень загрязнения
//                   </span>{" "}
//                   — легкая, средняя, сильная, критическая
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">
//                     Объем двигателя и сложность компоновки
//                   </span>{" "}
//                   — компактный мотор или сложное подкапотное пространство
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">Объем работ</span> —
//                   стандартная чистка или комплексный детейлинг с восстановлением
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">
//                     Дополнительные услуги
//                   </span>{" "}
//                   — чистка радиатора, защитная обработка, полировка
//                 </li>
//               </ul>

//               <div className="seo-alert">
//                 <strong className="seo-alert-title">Пакеты услуг:</strong>
//                 <ul className="seo-alert-list">
//                   <li>
//                     <strong>Экспресс-чистка</strong> — поверхностная мойка,
//                     удаление пыли и легких загрязнений
//                   </li>
//                   <li>
//                     <strong>Стандартная чистка</strong> — полная мойка с защитой
//                     электроники, удаление средних загрязнений
//                   </li>
//                   <li>
//                     <strong>Глубокая чистка</strong> — с предварительным
//                     обезжириванием, удаление застарелых загрязнений
//                   </li>
//                   <li>
//                     <strong>Комплексный детейлинг</strong> — полный цикл с
//                     восстановлением пластика, резины, защитной обработкой
//                   </li>
//                   <li>
//                     <strong>Премиум пакет</strong> — для автомобилей
//                     премиум-класса, с особой тщательностью и дополнительными
//                     услугами
//                   </li>
//                 </ul>
//               </div>

//               <p className="seo-mt-3">
//                 Точную стоимость для вашего автомобиля можно узнать после
//                 бесплатной диагностики подкапотного пространства.
//               </p>
//             </div>

//             <div className="seo-section">
//               <h3 className="seo-subtitle">
//                 Преимущества регулярного детейлинга двигателя
//               </h3>
//               <div className="seo-faq">
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">Улучшение теплоотдачи</h4>
//                   <p className="seo-faq-answer">
//                     Чистый двигатель и радиатор лучше охлаждаются, что особенно
//                     важно в жаркую погоду. Снижается риск перегрева,
//                     увеличивается ресурс мотора.
//                   </p>
//                 </div>
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">
//                     Облегчение диагностики и ремонта
//                   </h4>
//                   <p className="seo-faq-answer">
//                     На чистом двигателе легче заметить течи масла, антифриза,
//                     трещины, износ деталей. Механикам проще работать с чистым
//                     мотором.
//                   </p>
//                 </div>
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">
//                     Продление срока службы резинотехнических изделий
//                   </h4>
//                   <p className="seo-faq-answer">
//                     Защитная обработка резиновых патрубков, уплотнителей
//                     предотвращает их растрескивание, пересыхание, увеличивает
//                     срок службы на 30-50%.
//                   </p>
//                 </div>
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">
//                     Снижение риска возгорания
//                   </h4>
//                   <p className="seo-faq-answer">
//                     Удаление масляных потеков и грязи снижает риск возгорания
//                     при нагреве двигателя или неисправностях в электросистеме.
//                   </p>
//                 </div>
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">Улучшение внешнего вида</h4>
//                   <p className="seo-faq-answer">
//                     Чистый, ухоженный двигатель повышает общее впечатление от
//                     автомобиля, что особенно важно при продаже или техническом
//                     осмотре.
//                   </p>
//                 </div>
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">
//                     Поддержание стоимости автомобиля
//                   </h4>
//                   <p className="seo-faq-answer">
//                     Автомобиль с чистым, ухоженным подкапотным пространством
//                     имеет более высокую стоимость при перепродаже.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="seo-section">
//               <h3 className="seo-subtitle">
//                 Как часто нужно делать детейлинг двигателя?
//               </h3>
//               <p>
//                 Рекомендуемая периодичность детейлинга двигателя зависит от
//                 условий эксплуатации:
//               </p>
//               <ul className="seo-list">
//                 <li>
//                   <span className="seo-list-highlight">
//                     Городская эксплуатация
//                   </span>{" "}
//                   — 1 раз в год или каждые 15-20 тыс. км
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">
//                     Загородная эксплуатация, трасса
//                   </span>{" "}
//                   — 1-2 раза в год
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">
//                     Эксплуатация в сложных условиях
//                   </span>{" "}
//                   — 2-3 раза в год
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">
//                     Перед продажей автомобиля
//                   </span>{" "}
//                   — обязательно
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">
//                     После зимнего сезона
//                   </span>{" "}
//                   — для удаления реагентов и соли
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">
//                     Перед длительной поездкой
//                   </span>{" "}
//                   — для профилактики и выявления проблем
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">
//                     После ремонта двигателя
//                   </span>{" "}
//                   — для удаления следов ремонта
//                 </li>
//                 <li>
//                   <span className="seo-list-highlight">
//                     При покупке подержанного авто
//                   </span>{" "}
//                   — для оценки реального состояния
//                 </li>
//               </ul>
//               <p>
//                 Регулярный детейлинг двигателя — это инвестиция в долговечность
//                 и надежность вашего автомобиля.
//               </p>
//             </div>

//             <div className="seo-section">
//               <h3 className="seo-subtitle">
//                 Часто задаваемые вопросы о детейлинге двигателя
//               </h3>
//               <div className="seo-faq">
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">
//                     Не вредно ли мыть двигатель?
//                   </h4>
//                   <p className="seo-faq-answer">
//                     При профессиональном подходе мойка двигателя абсолютно
//                     безопасна. Мы используем специальные средства, защищаем
//                     электронику, контролируем температуру и давление воды. Риск
//                     повреждений исключен.
//                   </p>
//                 </div>
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">
//                     Сколько времени занимает детейлинг двигателя?
//                   </h4>
//                   <p className="seo-faq-answer">
//                     Время зависит от степени загрязнения: экспресс-чистка —
//                     1,5-2 часа, стандартная — 3-4 часа, глубокая чистка — 4-6
//                     часов, комплексный детейлинг — 6-8 часов.
//                   </p>
//                 </div>
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">
//                     Можно ли мыть двигатель зимой?
//                   </h4>
//                   <p className="seo-faq-answer">
//                     Да, мы работаем круглый год. Зимой особенно важно удалять
//                     реагенты и соль. Мы проводим мойку в отапливаемом помещении,
//                     тщательно сушим все элементы.
//                   </p>
//                 </div>
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">
//                     Что делать после детейлинга двигателя?
//                   </h4>
//                   <p className="seo-faq-answer">
//                     Первые 1-2 часа рекомендуется не эксплуатировать автомобиль
//                     для полной просушки. Далее — обычная эксплуатация. Мы даем
//                     рекомендации по поддержанию чистоты.
//                   </p>
//                 </div>
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">
//                     Можно ли мыть гибридные и электрические автомобили?
//                   </h4>
//                   <p className="seo-faq-answer">
//                     Да, мы имеем опыт работы с гибридами и электромобилями.
//                     Используем специальные технологии и средства, безопасные для
//                     высоковольтной электроники.
//                   </p>
//                 </div>
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">
//                     Даете ли вы гарантию на работы?
//                   </h4>
//                   <p className="seo-faq-answer">
//                     Да, мы предоставляем гарантию на выполненные работы. Если в
//                     течение гарантийного периода возникают проблемы, связанные с
//                     качеством чистки, мы устраняем их бесплатно.
//                   </p>
//                 </div>
//                 <div className="seo-faq-item">
//                   <h4 className="seo-faq-question">
//                     Что делать, если двигатель очень грязный?
//                   </h4>
//                   <p className="seo-faq-answer">
//                     Мы специализируемся на сложных случаях. Используем
//                     специальные обезжириватели, многоступенчатую очистку. Даже
//                     для самых запущенных двигателей находим решение.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="seo-conclusion">
//               <h4 className="seo-conclusion-title">
//                 Профессиональный детейлинг двигателя в Витебске — забота о
//                 сердце вашего автомобиля
//               </h4>
//               <p>
//                 Двигатель — это сердце вашего автомобиля, и его чистота напрямую
//                 влияет на надежность, долговечность и безопасность эксплуатации.
//                 Регулярный профессиональный детейлинг не только поддерживает
//                 эстетичный вид подкапотного пространства, но и является важной
//                 профилактической мерой, позволяющей вовремя выявлять
//                 потенциальные проблемы и продлевать ресурс узлов и агрегатов.
//               </p>
//               <p>
//                 Наш центр в Витебске предлагает полный спектр услуг по
//                 детейлингу двигателей для автомобилей всех марок и типов:
//               </p>
//               <ul className="seo-list" style={{ marginBottom: "1rem" }}>
//                 <li>Легковые автомобили всех классов</li>
//                 <li>Внедорожники и кроссоверы</li>
//                 <li>Минивэны и микроавтобусы</li>
//                 <li>Коммерческий транспорт</li>
//                 <li>Гибридные и электрические автомобили</li>
//                 <li>Спортивные автомобили</li>
//                 <li>Мотоциклы и скутеры</li>
//               </ul>
//               <p>
//                 Мы используем только профессиональное оборудование и
//                 сертифицированные химические средства. Наши специалисты проходят
//                 регулярное обучение и имеют многолетний опыт работы. Каждому
//                 клиенту мы предлагаем индивидуальный подход и подробную
//                 консультацию.
//               </p>
//               <p className="seo-conclusion-final">
//                 <strong>
//                   Запишитесь на бесплатную диагностику подкапотного пространства
//                   и получите рекомендации по детейлингу двигателя вашего
//                   автомобиля в Витебске. Позаботьтесь о надежности и
//                   долговечности вашего авто!
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
      "Детейлинг двигателя автомобиля в Витебске | Чистка мотора, мойка подкапотного пространства - Ambadetail";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Профессиональный детейлинг двигателя в Витебске. Безопасная чистка мотора, мойка подкапотного пространства, восстановление пластика и резины. Гарантия качества работ.",
    );

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      "content",
      "детейлинг двигателя Витебск, чистка двигателя авто, мойка мотора, чистка подкапотного пространства, мойка двигателя, чистка двигателя цена",
    );

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute(
      "href",
      "https://ambadetail.vercel.app/uslugi/detailing-dvigatelya",
    );

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute(
      "content",
      "Детейлинг двигателя автомобиля в Витебске | Чистка мотора, мойка подкапотного пространства",
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
      "Профессиональный детейлинг двигателя в Витебске. Безопасная чистка мотора, мойка подкапотного пространства, восстановление пластика и резины. Гарантия качества работ.",
    );

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement("meta");
      ogImage.setAttribute("property", "og:image");
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute(
      "content",
      "https://ambadetail.vercel.app/images/services/detailing_dvigatelya.webp",
    );

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute(
      "content",
      "https://ambadetail.vercel.app/uslugi/detailing-dvigatelya",
    );

    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement("meta");
      twitterTitle.setAttribute("name", "twitter:title");
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute(
      "content",
      "Детейлинг двигателя автомобиля в Витебске | Чистка мотора, мойка подкапотного пространства",
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
      "Профессиональный детейлинг двигателя в Витебске. Безопасная чистка мотора, мойка подкапотного пространства, восстановление пластика и резины. Гарантия качества работ.",
    );

    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement("meta");
      twitterImage.setAttribute("name", "twitter:image");
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute(
      "content",
      "https://ambadetail.vercel.app/images/services/detailing_dvigatelya.webp",
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

  const titleParts = ["Детейлинг", "двигателя"];

  const faqItems = [
    {
      question: "Не вредно ли мыть двигатель?",
      answer:
        "При профессиональном подходе мойка двигателя абсолютно безопасна. Мы используем специальные средства, защищаем электронику, контролируем температуру и давление воды. Риск повреждений исключен.",
    },
    {
      question: "Сколько времени занимает детейлинг двигателя?",
      answer:
        "Время зависит от степени загрязнения: экспресс-чистка — 1,5-2 часа, стандартная — 3-4 часа, глубокая чистка — 4-6 часов, комплексный детейлинг — 6-8 часов.",
    },
    {
      question: "Можно ли мыть двигатель зимой?",
      answer:
        "Да, мы работаем круглый год. Зимой особенно важно удалять реагенты и соль. Мы проводим мойку в отапливаемом помещении, тщательно сушим все элементы.",
    },
    {
      question: "Что делать после детейлинга двигателя?",
      answer:
        "Первые 1-2 часа рекомендуется не эксплуатировать автомобиль для полной просушки. Далее — обычная эксплуатация. Мы даем рекомендации по поддержанию чистоты.",
    },
    {
      question: "Можно ли мыть гибридные и электрические автомобили?",
      answer:
        "Да, мы имеем опыт работы с гибридами и электромобилями. Используем специальные технологии и средства, безопасные для высоковольтной электроники.",
    },
    {
      question: "Даете ли вы гарантию на работы?",
      answer:
        "Да, мы предоставляем гарантию на выполненные работы. Если в течение гарантийного периода возникают проблемы, связанные с качеством чистки, мы устраняем их бесплатно.",
    },
  ];

  return (
    <>
      <section
        className="service-hero"
        aria-label="Детейлинг двигателя автомобиля в Витебске"
      >
        <div className="service-hero__bg">
          <Image
            src="/images/services/detailing_dvigatelya.webp"
            alt="Профессиональный детейлинг двигателя автомобиля в Витебске"
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
              Профессиональная чистка и защита подкапотного пространства.
              Удаление масляных пятен, грязи, реагентов с сохранением всех
              систем и узлов.
            </p>
          </div>
        </div>
      </section>

      <div className="service-content">
        <div className="container">
          <div className="service-content__intro">
            <p className="service-content__intro-text">
              <strong>Детейлинг двигателя</strong> в Витебске — это
              профессиональная очистка моторного отсека от масляных загрязнений,
              дорожной грязи и реагентов. Безопасно для электроники, резины и
              пластика. Продлевает срок службы двигателя.
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
              Цена детейлинга двигателя
            </h2>
            <PriceTable />
            <BrandsTable />
          </div>

          <div className="seo-content">
            <h2 className="seo-title">
              Профессиональный детейлинг двигателя в Витебске
            </h2>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Что такое профессиональный детейлинг двигателя?
              </h3>
              <p>
                <span className="seo-highlight">Детейлинг двигателя</span> — это
                комплексная процедура глубокой очистки и восстановления
                подкапотного пространства автомобиля, включающая мойку
                двигателя, чистку всех узлов и агрегатов, а также защитную
                обработку пластиковых и резиновых элементов.
              </p>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Услуги детейлинга двигателя и подкапотного пространства
              </h3>
              <div className="seo-cards">
                <div className="seo-card">
                  <div className="seo-card-icon">🚿</div>
                  <h4 className="seo-card-title">Безопасная мойка двигателя</h4>
                  <p className="seo-card-text">
                    Профессиональная мойка с использованием щадящих средств и
                    технологий. Защита электроники, датчиков, разъемов.
                  </p>
                </div>
                <div className="seo-card">
                  <div className="seo-card-icon">✨</div>
                  <h4 className="seo-card-title">
                    Чистка и восстановление пластика
                  </h4>
                  <p className="seo-card-text">
                    Очистка пластиковых крышек, патрубков, кожухов.
                    Восстановление цвета, удаление желтизны и потускнения.
                  </p>
                </div>
                <div className="seo-card">
                  <div className="seo-card-icon">🔧</div>
                  <h4 className="seo-card-title">
                    Чистка металлических поверхностей
                  </h4>
                  <p className="seo-card-text">
                    Удаление коррозии, окислов, налета с металлических деталей.
                    Очистка радиатора, интеркулера, трубопроводов.
                  </p>
                </div>
                <div className="seo-card">
                  <div className="seo-card-icon">🛡️</div>
                  <h4 className="seo-card-title">Защитная обработка резины</h4>
                  <p className="seo-card-text">
                    Очистка и восстановление резиновых уплотнителей, патрубков,
                    сайлентблоков. Нанесение защитных составов.
                  </p>
                </div>
              </div>
            </div>

            <div className="seo-section">
              <h3 className="seo-subtitle">
                Почему нельзя мыть двигатель самостоятельно?
              </h3>
              <div className="seo-alert">
                <strong className="seo-alert-title">
                  Риски самостоятельной мойки:
                </strong>
                <ul className="seo-alert-list">
                  <li>Повреждение электроники и датчиков</li>
                  <li>Короткое замыкание, выход из строя узлов</li>
                  <li>Попадание воды в цилиндры</li>
                  <li>Повреждение изоляции проводки</li>
                  <li>Коррозия металлических деталей</li>
                </ul>
              </div>
            </div>

            <div className="seo-conclusion">
              <h4 className="seo-conclusion-title">
                Профессиональный детейлинг двигателя в Витебске — забота о
                сердце вашего автомобиля
              </h4>
              <p>
                Двигатель — это сердце вашего автомобиля, и его чистота напрямую
                влияет на надежность, долговечность и безопасность эксплуатации.
              </p>
              <p className="seo-conclusion-final">
                <strong>
                  Запишитесь на бесплатную диагностику подкапотного пространства
                  и получите рекомендации по детейлингу двигателя вашего
                  автомобиля в Витебске. Позаботьтесь о надежности и
                  долговечности вашего авто!
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
