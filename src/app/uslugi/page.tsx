import { Metadata } from "next";
import UslugiClient from "./UslugiClient";

export const metadata: Metadata = {
  title: "Услуги детейлинга в Витебске | Полный спектр услуг Ambadetail",
  description:
    "Профессиональные услуги детейлинга в Витебске: полировка авто, химчистка салона, оклейка плёнкой, тонировка, защитные покрытия, детейлинг двигателя. Запишитесь онлайн.",
  keywords:
    "услуги детейлинг витебск, детейлинг студия витебск цены, запись на детейлинг витебск, детейлинг авто витебск",
  openGraph: {
    title: "Услуги детейлинга в Витебске | Полный спектр услуг Ambadetail",
    description:
      "Профессиональные услуги детейлинга в Витебске: полировка авто, химчистка салона, оклейка плёнкой, тонировка, защитные покрытия, детейлинг двигателя. Запишитесь онлайн.",
    url: "https://ambadetail.by/uslugi",
    siteName: "Ambadetail",
    images: [
      {
        url: "/images/services/bugatti.webp",
        width: 1200,
        height: 630,
        alt: "Услуги детейлинг студии в Витебске",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Услуги детейлинга в Витебске | Полный спектр услуг Ambadetail",
    description:
      "Профессиональные услуги детейлинга в Витебске: полировка авто, химчистка салона, оклейка плёнкой, тонировка, защитные покрытия, детейлинг двигателя. Запишитесь онлайн.",
    images: ["/images/services/bugatti.webp"],
  },
  alternates: {
    canonical: "https://ambadetail.by/uslugi",
  },
};

// ✅ СХЕМА BREADCRUMB ДЛЯ ПОИСКОВИКОВ
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
  ],
};

export default function UslugiPage() {
  return (
    <>
      {/* ✅ JSON-LD СХЕМА ДЛЯ ПОИСКОВИКОВ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <UslugiClient />
    </>
  );
}
