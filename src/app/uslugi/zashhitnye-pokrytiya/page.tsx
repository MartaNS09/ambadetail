import { Metadata } from "next";
import ZashchitaClient from "./ZashchitaClient";

export const metadata: Metadata = {
  title:
    "Защитные покрытия для автомобиля в Витебске | Керамика, жидкое стекло",
  description:
    "Защитные покрытия для автомобиля в Витебске. Керамика, жидкое стекло, антидождь. Защита кузова от царапин, грязи и реагентов. Запишитесь!",
  keywords:
    "защитные покрытия авто витебск, керамическое покрытие автомобиля, жидкое стекло на авто, гидрофобное покрытие, защита ЛКП, керамика для авто витебск",
  openGraph: {
    title:
      "Защитные покрытия для автомобиля в Витебске | Керамика, жидкое стекло",
    description:
      "Защитные покрытия для автомобиля в Витебске. Керамика, жидкое стекло, антидождь. Защита кузова от царапин, грязи и реагентов. Запишитесь!",
    url: "https://ambadetail.by/uslugi/zashhitnye-pokrytiya",
    siteName: "Ambadetail",
    images: [
      {
        url: "/images/services/lamba.webp",
        width: 1200,
        height: 630,
        alt: "Защитные покрытия для автомобиля в Витебске — керамика",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Защитные покрытия для автомобиля в Витебске | Керамика, жидкое стекло",
    description:
      "Защитные покрытия для автомобиля в Витебске. Керамика, жидкое стекло, антидождь. Защита кузова от царапин, грязи и реагентов. Запишитесь!",
    images: ["/images/services/lamba.webp"],
  },
  alternates: {
    canonical: "https://ambadetail.by/uslugi/zashhitnye-pokrytiya",
  },
};

// ✅ ДОБАВЛЯЕМ СХЕМУ BREADCRUMB
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
      name: "Защитные покрытия",
      item: "https://ambadetail.by/uslugi/zashhitnye-pokrytiya",
    },
  ],
};

export default function ZashchitaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ZashchitaClient />
    </>
  );
}
