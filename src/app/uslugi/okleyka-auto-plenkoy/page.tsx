// import { Metadata } from "next";
// import OkleykaClient from "./OkleykaClient";

// export const metadata: Metadata = {
//   title: "Оклейка авто плёнкой в Витебске | PPF, винил, защита кузова",
//   description:
//     "Студия детейлинга в Витебске. Профессиональная оклейка авто плёнкой PPF, винил, XPEL, Sunmax, Llumar, Stek. Защита кузова, бронирование, смена цвета. Запишитесь!",
//   keywords:
//     "оклейка авто пленкой витебск, профессиональная оклейка авто, защитная пленка на авто, бронирование кузова, антигравийная пленка, ppf витебск, цветная полиуретановая пленка, оклейка капота, оклейка фар, винил витебск, xpel витебск, sunmax витебск, llumar витебск, stek витебск, детейлинг витебск",
//   openGraph: {
//     title: "Оклейка авто плёнкой в Витебске | PPF, винил, защита кузова",
//     description:
//       "Студия детейлинга в Витебске. Профессиональная оклейка авто плёнкой PPF, винил, XPEL, Sunmax, Llumar, Stek. Защита кузова, бронирование, смена цвета. Запишитесь!",

//     url: "https://ambadetail.by/uslugi/okleyka-auto-plenkoy",
//     siteName: "Ambadetail",
//     images: [
//       {
//         url: "/images/services/vinil.webp",
//         width: 1200,
//         height: 630,
//         alt: "Оклейка авто плёнкой в Витебске — защита кузова PPF",
//       },
//     ],
//     locale: "ru_RU",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Оклейка авто плёнкой в Витебске | PPF, винил, защита кузова",
//     description:
//       "Студия детейлинга в Витебске. Профессиональная оклейка авто плёнкой PPF, винил, XPEL, Sunmax, Llumar, Stek. Защита кузова, бронирование, смена цвета. Запишитесь!",
//     images: ["/images/services/vinil.webp"],
//   },
//   alternates: {
//     canonical: "https://ambadetail.by/uslugi/okleyka-auto-plenkoy",
//   },
// };

// // ✅ ВОТ ЗДЕСЬ ДОБАВЛЯЕМ BREADCRUMB
// const breadcrumbSchema = {
//   "@context": "https://schema.org",
//   "@type": "BreadcrumbList",
//   itemListElement: [
//     {
//       "@type": "ListItem",
//       position: 1,
//       name: "Главная",
//       item: "https://ambadetail.by/",
//     },
//     {
//       "@type": "ListItem",
//       position: 2,
//       name: "Услуги",
//       item: "https://ambadetail.by/uslugi",
//     },
//     {
//       "@type": "ListItem",
//       position: 3,
//       name: "Оклейка авто плёнкой",
//       item: "https://ambadetail.by/uslugi/okleyka-auto-plenkoy",
//     },
//   ],
// };

// export default function OkleykaPage() {
//   return (
//     <>
//       {/* ✅ СКРИПТ С BREADCRUMB В head */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
//       />
//       <OkleykaClient />
//     </>
//   );
// }

import { Metadata } from "next";
import OkleykaClient from "./OkleykaClient";

export const metadata: Metadata = {
  // ✅ TITLE — ОСТАВЛЯЕМ БЕЗ "профессиональная" (безопасно)
  title: "Оклейка авто плёнкой в Витебске | PPF, винил, защита кузова",

  // ✅ DESCRIPTION — НОВЫЙ с "профессиональная" в начале
  description:
    "Профессиональная оклейка авто плёнкой в Витебске. Защита кузова PPF, винил, XPEL, Sunmax, Llumar, Stek. Бронирование, смена цвета. Гарантия 3 года. Запишитесь!",

  // ✅ KEYWORDS — "профессиональная" теперь в начале
  keywords:
    "профессиональная оклейка авто пленкой витебск, ppf витебск, винил витебск, защита кузова, xpel витебск, sunmax витебск, llumar витебск, stek витебск, бронирование кузова, антигравийная пленка, оклейка капота, оклейка фар",

  openGraph: {
    title: "Оклейка авто плёнкой в Витебске | PPF, винил, защита кузова",
    description:
      "Профессиональная оклейка авто плёнкой в Витебске. Защита кузова PPF, винил, XPEL, Sunmax. Гарантия 3 года.",
    url: "https://ambadetail.by/uslugi/okleyka-auto-plenkoy",
    siteName: "Ambadetail",
    images: [
      {
        url: "/images/services/vinil.webp",
        width: 1200,
        height: 630,
        alt: "Профессиональная оклейка авто плёнкой в Витебске — защита кузова PPF",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Оклейка авто плёнкой в Витебске | PPF, винил, защита кузова",
    description:
      "Профессиональная оклейка авто плёнкой в Витебске. Защита кузова PPF, винил. Гарантия 3 года.",
    images: ["/images/services/vinil.webp"],
  },
  alternates: {
    canonical: "https://ambadetail.by/uslugi/okleyka-auto-plenkoy",
  },
};

// ✅ BREADCRUMB SCHEMA
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Главная",
      item: "https://ambadetail.by/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Услуги",
      item: "https://ambadetail.by/uslugi",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Оклейка авто плёнкой",
      item: "https://ambadetail.by/uslugi/okleyka-auto-plenkoy",
    },
  ],
};

// ✅ SITELINKS SCHEMA (НОВЫЙ — ДЛЯ САЙТЛИНКОВ)
const sitelinksSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://ambadetail.by",
  name: "Ambadetail — Профессиональная оклейка авто плёнкой в Витебске",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://ambadetail.by/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function OkleykaPage() {
  return (
    <>
      {/* ✅ BREADCRUMB */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ✅ SITELINKS (НОВЫЙ) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sitelinksSchema) }}
      />

      <OkleykaClient />
    </>
  );
}
