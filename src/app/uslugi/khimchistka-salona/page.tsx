import { Metadata } from "next";
import KhimchistkaClient from "./KhimchistkaClient";

export const metadata: Metadata = {
  // 🔥 НОВЫЙ TITLE — КОРОТКИЙ, СИЛЬНЫЙ
  title: "Химчистка салона авто в Витебске | Детейлинг, удаление запахов",

  // 🔥 НОВОЕ ОПИСАНИЕ — С КЛЮЧЕВЫМИ СЛОВАМИ
  description:
    "Химчистка салона автомобиля в Витебске. Глубокая чистка, удаление пятен и запахов. Кожа, ткань, алькантара. Детейлинг салона. Запишитесь!",

  // 🔥 КЛЮЧЕВЫЕ СЛОВА — РАСШИРЕННЫЕ
  keywords:
    "химчистка салона витебск, химчистка авто витебск, чистка салона авто, удаление запахов из салона, детейлинг салона витебск, химчистка кожаного салона, химчистка тканевого салона, озонирование салона, удаление пятен витебск",

  openGraph: {
    title: "Химчистка салона авто в Витебске | Детейлинг, удаление запахов",
    description:
      "Химчистка салона автомобиля в Витебске. Глубокая чистка, удаление пятен и запахов. Кожа, ткань, алькантара. Детейлинг салона. Запишитесь!",
    url: "https://ambadetail.by/uslugi/khimchistka-salona",
    siteName: "Ambadetail",
    images: [
      {
        url: "/images/services/salon.webp",
        width: 1200,
        height: 630,
        alt: "Химчистка салона автомобиля в Витебске",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Химчистка салона авто в Витебске | Детейлинг, удаление запахов",
    description:
      "Химчистка салона автомобиля в Витебске. Глубокая чистка, удаление пятен и запахов. Кожа, ткань, алькантара. Детейлинг салона. Запишитесь!",
    images: ["/images/services/salon.webp"],
  },

  alternates: {
    canonical: "https://ambadetail.by/uslugi/khimchistka-salona",
  },
};

// ✅ СХЕМА BREADCRUMB
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
      name: "Химчистка салона",
      item: "https://ambadetail.by/uslugi/khimchistka-salona",
    },
  ],
};

export default function KhimchistkaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <KhimchistkaClient />
    </>
  );
}
