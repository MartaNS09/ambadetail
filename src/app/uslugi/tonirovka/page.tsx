import { Metadata } from "next";
import TonirovkaClient from "./TonirovkaClient";

export const metadata: Metadata = {
  title: "Тонировка авто в Витебске | Атермальная тонировка стёкол",
  description:
    "Тонировка автомобиля в Витебске. Атермальная тонировка стёкол, защита от УФ, комфорт в салоне. KAVACA, Llumar. Запишитесь!",
  keywords:
    "тонировка авто витебск, атермальная тонировка, тонировка стекол автомобиля, затемнение стёкол, защита от солнца, тонировка авто цена, KAVACA, Llumar, SunTek",
  openGraph: {
    title: "Тонировка авто в Витебске | Атермальная тонировка стёкол",
    description:
      "Тонировка автомобиля в Витебске. Атермальная тонировка стёкол, защита от УФ, комфорт в салоне. KAVACA, Llumar. Запишитесь!",
    url: "https://ambadetail.by/uslugi/tonirovka",
    siteName: "Ambadetail",
    images: [
      {
        url: "/images/services/tonirovka.webp",
        width: 1200,
        height: 630,
        alt: "Тонировка авто в Витебске | Атермальная тонировка стёкол",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Тонировка авто в Витебске | Атермальная тонировка стёкол",
    description:
      "Тонировка автомобиля в Витебске. Атермальная тонировка стёкол, защита от УФ, комфорт в салоне. KAVACA, Llumar. Запишитесь!",
    images: ["/images/services/tonirovka.webp"],
  },
  alternates: {
    canonical: "https://ambadetail.by/uslugi/tonirovka",
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
      name: "Тонировка авто",
      item: "https://ambadetail.by/uslugi/tonirovka",
    },
  ],
};

export default function TonirovkaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TonirovkaClient />
    </>
  );
}
