import { Metadata } from "next";
import LkpClient from "./LkpClient";

export const metadata: Metadata = {
  title: "Восстановление ЛКП в Витебске | Refiller F5, удаление царапин",
  description:
    "Восстановление ЛКП в Витебске по технологии Refiller F5. Удаление царапин, сколов, восстановление блеска. Запишитесь!",
  keywords:
    "восстановление ЛКП витебск, Refiller F5, восстановление лакокрасочного покрытия, удаление сколов, восстановление цвета авто, восстановление кузова витебск, удаление царапин витебск",
  openGraph: {
    title: "Восстановление ЛКП в Витебске | Refiller F5, удаление царапин",
    description:
      "Восстановление ЛКП в Витебске по технологии Refiller F5. Удаление царапин, сколов, восстановление блеска. Запишитесь!",
    url: "https://ambadetail.by/uslugi/vosstanovlenie-lkp",
    siteName: "Ambadetail",
    images: [
      {
        url: "/images/services/bugatti.webp",
        width: 1200,
        height: 630,
        alt: "Восстановление ЛКП в Витебске — Refiller F5",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Восстановление ЛКП в Витебске | Refiller F5, удаление царапин",
    description:
      "Восстановление ЛКП в Витебске по технологии Refiller F5. Удаление царапин, сколов, восстановление блеска. Запишитесь!",
    images: ["/images/services/bugatti.webp"],
  },
  alternates: {
    canonical: "https://ambadetail.by/uslugi/vosstanovlenie-lkp",
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
      name: "Восстановление ЛКП",
      item: "https://ambadetail.by/uslugi/vosstanovlenie-lkp",
    },
  ],
};

export default function LkpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <LkpClient />
    </>
  );
}
