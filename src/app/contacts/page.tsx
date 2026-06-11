// "use client";

// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
// import { FaInstagram, FaTiktok } from "react-icons/fa";
// import "./page.scss";

// export default function ContactsPage() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   // SEO: устанавливаем все метатеги как на старом сайте (БЕЗ ПОЛОМОК)
//   useEffect(() => {
//     document.title =
//       "Контакты детейлинг студии в Витебске | Ambadetail - Ambadetail";

//     let metaDescription = document.querySelector('meta[name="description"]');
//     if (!metaDescription) {
//       metaDescription = document.createElement("meta");
//       metaDescription.setAttribute("name", "description");
//       document.head.appendChild(metaDescription);
//     }
//     metaDescription.setAttribute(
//       "content",
//       "Контакты Ambadetail в Витебске: адрес, телефон, время работы. Запись на оклейку плёнкой, восстановление ЛКП и химчистку салона.",
//     );

//     let metaKeywords = document.querySelector('meta[name="keywords"]');
//     if (!metaKeywords) {
//       metaKeywords = document.createElement("meta");
//       metaKeywords.setAttribute("name", "keywords");
//       document.head.appendChild(metaKeywords);
//     }
//     metaKeywords.setAttribute(
//       "content",
//       "контакты ambadetail, детейлинг витебск контакты, оклейка пленкой витебск, химчистка салона витебск, восстановление лкп витебск",
//     );

//     let canonicalLink = document.querySelector('link[rel="canonical"]');
//     if (!canonicalLink) {
//       canonicalLink = document.createElement("link");
//       canonicalLink.setAttribute("rel", "canonical");
//       document.head.appendChild(canonicalLink);
//     }
//     canonicalLink.setAttribute(
//       "href",
//       "https://ambadetail.vercel.app/contacts",
//     );

//     let ogTitle = document.querySelector('meta[property="og:title"]');
//     if (!ogTitle) {
//       ogTitle = document.createElement("meta");
//       ogTitle.setAttribute("property", "og:title");
//       document.head.appendChild(ogTitle);
//     }
//     ogTitle.setAttribute(
//       "content",
//       "Контакты детейлинг студии в Витебске | Ambadetail",
//     );

//     let ogDescription = document.querySelector(
//       'meta[property="og:description"]',
//     );
//     if (!ogDescription) {
//       ogDescription = document.createElement("meta");
//       ogDescription.setAttribute("property", "og:description");
//       document.head.appendChild(ogDescription);
//     }
//     ogDescription.setAttribute(
//       "content",
//       "Контакты Ambadetail в Витебске: адрес, телефон, время работы. Запись на оклейку плёнкой, восстановление ЛКП и химчистку салона.",
//     );

//     let ogImage = document.querySelector('meta[property="og:image"]');
//     if (!ogImage) {
//       ogImage = document.createElement("meta");
//       ogImage.setAttribute("property", "og:image");
//       document.head.appendChild(ogImage);
//     }
//     ogImage.setAttribute(
//       "content",
//       "https://ambadetail.vercel.app/images/home1.jpg",
//     );

//     let ogUrl = document.querySelector('meta[property="og:url"]');
//     if (!ogUrl) {
//       ogUrl = document.createElement("meta");
//       ogUrl.setAttribute("property", "og:url");
//       document.head.appendChild(ogUrl);
//     }
//     ogUrl.setAttribute("content", "https://ambadetail.vercel.app/contacts");

//     let twitterTitle = document.querySelector('meta[name="twitter:title"]');
//     if (!twitterTitle) {
//       twitterTitle = document.createElement("meta");
//       twitterTitle.setAttribute("name", "twitter:title");
//       document.head.appendChild(twitterTitle);
//     }
//     twitterTitle.setAttribute(
//       "content",
//       "Контакты детейлинг студии в Витебске | Ambadetail",
//     );

//     let twitterDescription = document.querySelector(
//       'meta[name="twitter:description"]',
//     );
//     if (!twitterDescription) {
//       twitterDescription = document.createElement("meta");
//       twitterDescription.setAttribute("name", "twitter:description");
//       document.head.appendChild(twitterDescription);
//     }
//     twitterDescription.setAttribute(
//       "content",
//       "Контакты Ambadetail в Витебске: адрес, телефон, время работы. Запись на оклейку плёнкой, восстановление ЛКП и химчистку салона.",
//     );

//     let twitterImage = document.querySelector('meta[name="twitter:image"]');
//     if (!twitterImage) {
//       twitterImage = document.createElement("meta");
//       twitterImage.setAttribute("name", "twitter:image");
//       document.head.appendChild(twitterImage);
//     }
//     twitterImage.setAttribute(
//       "content",
//       "https://ambadetail.vercel.app/images/home1.jpg",
//     );
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 100);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({ ...prev, [id]: value }));
//     if (errors[id as keyof typeof errors]) {
//       setErrors((prev) => ({ ...prev, [id]: "" }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = { name: "", email: "", message: "" };
//     let isValid = true;

//     if (!formData.name.trim()) {
//       newErrors.name = "Введите ваше имя";
//       isValid = false;
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Введите ваш email";
//       isValid = false;
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Введите корректный email";
//       isValid = false;
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Введите сообщение";
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setIsLoading(true);
//       try {
//         // Отправка в Telegram
//         const telegramRes = await fetch("/api/send-to-telegram", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         });

//         // Отправка на почту
//         const emailRes = await fetch("/api/send-email", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         });

//         if (telegramRes.ok || emailRes.ok) {
//           setFormSubmitted(true);
//           setTimeout(() => setFormSubmitted(false), 5000);
//           setFormData({ name: "", email: "", message: "" });
//         } else {
//           console.error("Ошибка отправки");
//         }
//       } catch (error) {
//         console.error("Ошибка:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   const titleParts = ["Контакты"];

//   const contactInfo = [
//     {
//       icon: <MapPin size={24} />,
//       title: "Адрес",
//       content: "210020, г. Витебск, ул. П. Бровки, 6А",
//       link: null,
//     },
//     {
//       icon: <Phone size={24} />,
//       title: "Телефон",
//       content: "+375 29 223 03 22",
//       link: "tel:+375292230322",
//     },
//     {
//       icon: <Mail size={24} />,
//       title: "Email",
//       content: "info@ambadetail.by",
//       link: "mailto:info@ambadetail.by",
//     },
//     {
//       icon: <Clock size={24} />,
//       title: "Режим работы",
//       content: "Пн–Пт: 10:00–19:00\nСб–Вс: 10:00–17:00",
//       link: null,
//     },
//   ];

//   return (
//     <>
//       <section
//         className="contacts-hero"
//         aria-label="Контакты детейлинг студии Ambadetail в Витебске"
//       >
//         <div className="contacts-hero__bg">
//           <Image
//             src="/images/services/bugatti.webp"
//             alt="Детейлинг студия Ambadetail в Витебске — свяжитесь с нами"
//             fill
//             priority
//             className="contacts-hero__image"
//             sizes="100vw"
//             quality={85}
//           />
//           <div className="contacts-hero__overlay" aria-hidden="true"></div>
//         </div>
//         <div className="container contacts-hero__container">
//           <div className="contacts-hero__content">
//             <h1 className="contacts-hero__title">
//               {titleParts.map((part, partIndex) => (
//                 <span
//                   key={partIndex}
//                   className="contacts-hero__title-word"
//                   style={{ display: "inline-block", marginRight: "0.3em" }}
//                 >
//                   {part.split("").map((letter, letterIndex) => (
//                     <span
//                       key={letterIndex}
//                       className={`contacts-hero__title-letter ${isVisible ? "contacts-hero__title-letter--visible" : ""}`}
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
//             <p className="contacts-hero__subtitle">
//               Свяжитесь с нами любым удобным способом. Мы всегда рады помочь!
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="contacts-content">
//         <div className="container">
//           <div className="contacts-grid">
//             {/* Форма обратной связи */}
//             <div className="contacts-form">
//               <div className="contacts-form__header">
//                 <h2 className="contacts-form__title">Написать нам</h2>
//                 <p className="contacts-form__subtitle">
//                   Заполните форму, и мы свяжемся с вами в ближайшее время
//                 </p>
//               </div>

//               {formSubmitted ? (
//                 <div className="contacts-form__success">
//                   <CheckCircle size={48} />
//                   <h3>Сообщение отправлено!</h3>
//                   <p>Спасибо! Мы свяжемся с вами в ближайшее время.</p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="contacts-form__form">
//                   <div className="contacts-form__field">
//                     <label htmlFor="name" className="contacts-form__label">
//                       Имя <span className="contacts-form__required">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       className={`contacts-form__input ${errors.name ? "contacts-form__input--error" : ""}`}
//                       placeholder="Введите ваше имя"
//                       value={formData.name}
//                       onChange={handleChange}
//                     />
//                     {errors.name && (
//                       <span className="contacts-form__error">
//                         {errors.name}
//                       </span>
//                     )}
//                   </div>

//                   <div className="contacts-form__field">
//                     <label htmlFor="email" className="contacts-form__label">
//                       Email <span className="contacts-form__required">*</span>
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       className={`contacts-form__input ${errors.email ? "contacts-form__input--error" : ""}`}
//                       placeholder="Введите ваш email"
//                       value={formData.email}
//                       onChange={handleChange}
//                     />
//                     {errors.email && (
//                       <span className="contacts-form__error">
//                         {errors.email}
//                       </span>
//                     )}
//                   </div>

//                   <div className="contacts-form__field">
//                     <label htmlFor="message" className="contacts-form__label">
//                       Сообщение{" "}
//                       <span className="contacts-form__required">*</span>
//                     </label>
//                     <textarea
//                       id="message"
//                       className={`contacts-form__textarea ${errors.message ? "contacts-form__textarea--error" : ""}`}
//                       rows={5}
//                       placeholder="Опишите ваш вопрос или предложение..."
//                       value={formData.message}
//                       onChange={handleChange}
//                     />
//                     {errors.message && (
//                       <span className="contacts-form__error">
//                         {errors.message}
//                       </span>
//                     )}
//                   </div>

//                   <button
//                     type="submit"
//                     className="contacts-form__btn"
//                     disabled={isLoading}
//                   >
//                     {isLoading ? "Отправка..." : "Отправить сообщение"}
//                     <Send size={18} />
//                   </button>
//                 </form>
//               )}
//             </div>

//             {/* Контактная информация */}
//             <div className="contacts-info">
//               <div className="contacts-info__header">
//                 <h2 className="contacts-info__title">
//                   Предложить сотрудничество
//                 </h2>
//                 <p className="contacts-info__subtitle">
//                   Мы открыты для деловых предложений и партнёрства
//                 </p>
//               </div>

//               <div className="contacts-info__list">
//                 {contactInfo.map((item, index) => (
//                   <div key={index} className="contacts-info__item">
//                     <div className="contacts-info__icon">{item.icon}</div>
//                     <div className="contacts-info__content">
//                       <h3 className="contacts-info__item-title">
//                         {item.title}
//                       </h3>
//                       {item.link ? (
//                         <a
//                           href={item.link}
//                           className="contacts-info__item-link"
//                         >
//                           {item.content}
//                         </a>
//                       ) : (
//                         <p className="contacts-info__item-text">
//                           {item.content.split("\n").map((line, i) => (
//                             <span key={i}>
//                               {line}
//                               {i < item.content.split("\n").length - 1 && (
//                                 <br />
//                               )}
//                             </span>
//                           ))}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Социальные сети - ПРАВИЛЬНЫЕ ССЫЛКИ как в хедере */}
//               <div className="contacts-social">
//                 <h3 className="contacts-social__title">Мы в соцсетях</h3>
//                 <div className="contacts-social__links">
//                   <a
//                     href="https://www.instagram.com/ambassador__detailing?igsh=MXRwaXRtaGV4c2hlYg%3D%3D"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="contacts-social__link"
//                     aria-label="Instagram"
//                   >
//                     <FaInstagram size={20} />
//                     <span>Instagram</span>
//                   </a>
//                   <a
//                     href="https://www.tiktok.com/@ambassador___detailing"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="contacts-social__link"
//                     aria-label="TikTok"
//                   >
//                     <FaTiktok size={20} />
//                     <span>TikTok</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Карта */}
//           <div className="contacts-map">
//             <h2 className="contacts-map__title">Как нас найти</h2>
//             <div className="contacts-map__wrapper">
//               <iframe
//                 src="https://yandex.by/map-widget/v1/?um=constructor%3A5a3b5a3b5a3b5a3b5a3b5a3b5a3b5a3b&source=constructor"
//                 width="100%"
//                 height="450"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 title="Карта проезда в детейлинг студию Ambadetail в Витебске"
//                 aria-label="Карта с адресом: Витебск, улица П. Бровки, 6А"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// новый

// "use client";

// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
// import { FaInstagram, FaTiktok } from "react-icons/fa";
// import "./page.scss";

// export default function ContactsPage() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   // ТОЛЬКО АНИМАЦИИ - метатеги УДАЛЕНЫ
//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 100);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({ ...prev, [id]: value }));
//     if (errors[id as keyof typeof errors]) {
//       setErrors((prev) => ({ ...prev, [id]: "" }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = { name: "", email: "", message: "" };
//     let isValid = true;

//     if (!formData.name.trim()) {
//       newErrors.name = "Введите ваше имя";
//       isValid = false;
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Введите ваш email";
//       isValid = false;
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Введите корректный email";
//       isValid = false;
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Введите сообщение";
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setIsLoading(true);
//       try {
//         // Отправка в Telegram
//         const telegramRes = await fetch("/api/send-to-telegram", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         });

//         // Отправка на почту
//         const emailRes = await fetch("/api/send-email", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         });

//         if (telegramRes.ok || emailRes.ok) {
//           setFormSubmitted(true);
//           setTimeout(() => setFormSubmitted(false), 5000);
//           setFormData({ name: "", email: "", message: "" });
//         } else {
//           console.error("Ошибка отправки");
//         }
//       } catch (error) {
//         console.error("Ошибка:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   const titleParts = ["Контакты"];

//   const contactInfo = [
//     {
//       icon: <MapPin size={24} />,
//       title: "Адрес",
//       content: "210020, г. Витебск, ул. П. Бровки, 6А",
//       link: null,
//     },
//     {
//       icon: <Phone size={24} />,
//       title: "Телефон",
//       content: "+375 29 223 03 22",
//       link: "tel:+375292230322",
//     },
//     {
//       icon: <Mail size={24} />,
//       title: "Email",
//       content: "info@ambadetail.by",
//       link: "mailto:info@ambadetail.by",
//     },
//     {
//       icon: <Clock size={24} />,
//       title: "Режим работы",
//       content: "Пн–Пт: 10:00–19:00\nСб–Вс: 10:00–17:00",
//       link: null,
//     },
//   ];

//   return (
//     <>
//       <section
//         className="contacts-hero"
//         aria-label="Контакты детейлинг студии Ambadetail в Витебске"
//       >
//         <div className="contacts-hero__bg">
//           <Image
//             src="/images/services/bugatti.webp"
//             alt="Детейлинг студия Ambadetail в Витебске — свяжитесь с нами"
//             fill
//             priority
//             className="contacts-hero__image"
//             sizes="100vw"
//             quality={85}
//           />
//           <div className="contacts-hero__overlay" aria-hidden="true"></div>
//         </div>
//         <div className="container contacts-hero__container">
//           <div className="contacts-hero__content">
//             <h1 className="contacts-hero__title">
//               {titleParts.map((part, partIndex) => (
//                 <span
//                   key={partIndex}
//                   className="contacts-hero__title-word"
//                   style={{ display: "inline-block", marginRight: "0.3em" }}
//                 >
//                   {part.split("").map((letter, letterIndex) => (
//                     <span
//                       key={letterIndex}
//                       className={`contacts-hero__title-letter ${isVisible ? "contacts-hero__title-letter--visible" : ""}`}
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
//             <p className="contacts-hero__subtitle">
//               Свяжитесь с нами любым удобным способом. Мы всегда рады помочь!
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="contacts-content">
//         <div className="container">
//           <div className="contacts-grid">
//             {/* Форма обратной связи */}
//             <div className="contacts-form">
//               <div className="contacts-form__header">
//                 <h2 className="contacts-form__title">Написать нам</h2>
//                 <p className="contacts-form__subtitle">
//                   Заполните форму, и мы свяжемся с вами в ближайшее время
//                 </p>
//               </div>

//               {formSubmitted ? (
//                 <div className="contacts-form__success">
//                   <CheckCircle size={48} />
//                   <h3>Сообщение отправлено!</h3>
//                   <p>Спасибо! Мы свяжемся с вами в ближайшее время.</p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="contacts-form__form">
//                   <div className="contacts-form__field">
//                     <label htmlFor="name" className="contacts-form__label">
//                       Имя <span className="contacts-form__required">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       className={`contacts-form__input ${errors.name ? "contacts-form__input--error" : ""}`}
//                       placeholder="Введите ваше имя"
//                       value={formData.name}
//                       onChange={handleChange}
//                     />
//                     {errors.name && (
//                       <span className="contacts-form__error">
//                         {errors.name}
//                       </span>
//                     )}
//                   </div>

//                   <div className="contacts-form__field">
//                     <label htmlFor="email" className="contacts-form__label">
//                       Email <span className="contacts-form__required">*</span>
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       className={`contacts-form__input ${errors.email ? "contacts-form__input--error" : ""}`}
//                       placeholder="Введите ваш email"
//                       value={formData.email}
//                       onChange={handleChange}
//                     />
//                     {errors.email && (
//                       <span className="contacts-form__error">
//                         {errors.email}
//                       </span>
//                     )}
//                   </div>

//                   <div className="contacts-form__field">
//                     <label htmlFor="message" className="contacts-form__label">
//                       Сообщение{" "}
//                       <span className="contacts-form__required">*</span>
//                     </label>
//                     <textarea
//                       id="message"
//                       className={`contacts-form__textarea ${errors.message ? "contacts-form__textarea--error" : ""}`}
//                       rows={5}
//                       placeholder="Опишите ваш вопрос или предложение..."
//                       value={formData.message}
//                       onChange={handleChange}
//                     />
//                     {errors.message && (
//                       <span className="contacts-form__error">
//                         {errors.message}
//                       </span>
//                     )}
//                   </div>

//                   <button
//                     type="submit"
//                     className="contacts-form__btn"
//                     disabled={isLoading}
//                   >
//                     {isLoading ? "Отправка..." : "Отправить сообщение"}
//                     <Send size={18} />
//                   </button>
//                 </form>
//               )}
//             </div>

//             {/* Контактная информация */}
//             <div className="contacts-info">
//               <div className="contacts-info__header">
//                 <h2 className="contacts-info__title">
//                   Предложить сотрудничество
//                 </h2>
//                 <p className="contacts-info__subtitle">
//                   Мы открыты для деловых предложений и партнёрства
//                 </p>
//               </div>

//               <div className="contacts-info__list">
//                 {contactInfo.map((item, index) => (
//                   <div key={index} className="contacts-info__item">
//                     <div className="contacts-info__icon">{item.icon}</div>
//                     <div className="contacts-info__content">
//                       <h3 className="contacts-info__item-title">
//                         {item.title}
//                       </h3>
//                       {item.link ? (
//                         <a
//                           href={item.link}
//                           className="contacts-info__item-link"
//                         >
//                           {item.content}
//                         </a>
//                       ) : (
//                         <p className="contacts-info__item-text">
//                           {item.content.split("\n").map((line, i) => (
//                             <span key={i}>
//                               {line}
//                               {i < item.content.split("\n").length - 1 && (
//                                 <br />
//                               )}
//                             </span>
//                           ))}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Социальные сети */}
//               <div className="contacts-social">
//                 <h3 className="contacts-social__title">Мы в соцсетях</h3>
//                 <div className="contacts-social__links">
//                   <a
//                     href="https://www.instagram.com/ambassador__detailing?igsh=MXRwaXRtaGV4c2hlYg%3D%3D"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="contacts-social__link"
//                     aria-label="Instagram"
//                   >
//                     <FaInstagram size={20} />
//                     <span>Instagram</span>
//                   </a>
//                   <a
//                     href="https://www.tiktok.com/@ambassador___detailing"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="contacts-social__link"
//                     aria-label="TikTok"
//                   >
//                     <FaTiktok size={20} />
//                     <span>TikTok</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Карта */}
//           <div className="contacts-map">
//             <h2 className="contacts-map__title">Как нас найти</h2>
//             <div className="contacts-map__wrapper">
//               <iframe
//                 src="https://yandex.by/map-widget/v1/?um=constructor%3A5a3b5a3b5a3b5a3b5a3b5a3b5a3b5a3b&source=constructor"
//                 width="100%"
//                 height="450"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 title="Карта проезда в детейлинг студию Ambadetail в Витебске"
//                 aria-label="Карта с адресом: Витебск, улица П. Бровки, 6А"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import { Metadata } from "next";
import ContactsClient from "./ContactsClient";

export const metadata: Metadata = {
  title: "Контакты | Детейлинг студия Ambadetail в Витебске",
  description:
    "Контакты детейлинг студии Ambadetail в Витебске: адрес, телефон, время работы. Запись на оклейку плёнкой, восстановление ЛКП и химчистку салона.",
  keywords:
    "контакты ambadetail, детейлинг витебск контакты, запись на детейлинг витебск",
  openGraph: {
    title: "Контакты детейлинг студии в Витебске | Ambadetail",
    description: "Свяжитесь с нами: адрес, телефон, время работы.",
    url: "https://ambadetail.vercel.app/contacts",
    images: ["/images/home1.jpg"],
  },
  alternates: {
    canonical: "https://ambadetail.vercel.app/contacts",
  },
};

export default function ContactsPage() {
  return <ContactsClient />;
}
