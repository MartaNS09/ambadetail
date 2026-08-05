import { Metadata } from "next";
import PolirovkaClient from "./PolirovkaClient";

export const metadata: Metadata = {
  title: "Полировка авто в Витебске | Восстановление кузова, удаление царапин",
  description:
    "Полировка авто в Витебске. Восстановление кузова, удаление царапин и дефектов ЛКП. Запишитесь!",
  keywords:
    "полировка авто витебск, полировка кузова витебск, восстановление блеска авто, удаление царапин, детейлинг полировка, полировка машины витебск",
  openGraph: {
    title:
      "Полировка авто в Витебске | Восстановление кузова, удаление царапин",
    description:
      "Полировка авто в Витебске. Восстановление кузова, удаление царапин и дефектов ЛКП. Запишитесь!",
    url: "https://ambadetail.by/uslugi/polirovka",
    siteName: "Ambadetail",
    images: [
      {
        url: "/images/services/polirovka_kuzova.webp",
        width: 1200,
        height: 630,
        alt: "Полировка авто в Витебске — восстановление кузова",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Полировка авто в Витебске | Восстановление кузова, удаление царапин",
    description:
      "Полировка авто в Витебске. Восстановление кузова, удаление царапин и дефектов ЛКП. Запишитесь!",
    images: ["/images/services/polirovka_kuzova.webp"],
  },
  alternates: {
    canonical: "https://ambadetail.by/uslugi/polirovka",
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
      name: "Полировка авто",
      item: "https://ambadetail.by/uslugi/polirovka",
    },
  ],
};

export default function PolirovkaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PolirovkaClient />
    </>
  );
}
