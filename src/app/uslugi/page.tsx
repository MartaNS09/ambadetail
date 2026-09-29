import { Metadata } from "next";
import UslugiClient from "./UslugiClient";
import { breadcrumbSchema } from "@/lib/seo-schemas";

const pageUrl = "https://ambadetail.by/uslugi";

export const metadata: Metadata = {
  title: "Услуги детейлинга в Витебске | Полный спектр",
  description:
    "Услуги детейлинг студии в Витебске: химчистка салона, полировка, оклейка плёнкой, тонировка по ГОСТ, керамика, восстановление ЛКП, детейлинг двигателя. Запись онлайн.",
  keywords:
    "услуги детейлинг витебск, детейлинг студия витебск, запись на детейлинг витебск, детейлинг авто витебск цены, тонировка витебск, химчистка салона витебск, полировка авто витебск",
  openGraph: {
    title: "Услуги детейлинга в Витебске | Ambadetail",
    description:
      "Полный спектр услуг детейлинга в Витебске: от химчистки и полировки до PPF и тонировки по ГОСТ.",
    url: pageUrl,
    siteName: "Ambadetail",
    images: [
      {
        url: "/images/services/bugatti.webp",
        width: 1200,
        height: 630,
        alt: "Услуги детейлинг студии в Витебске",
      },
    ],
    locale: "ru_BY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Услуги детейлинга в Витебске | Ambadetail",
    description:
      "Химчистка, полировка, PPF, тонировка по ГОСТ, керамика — Ambadetail Витебск.",
    images: ["/images/services/bugatti.webp"],
  },
  alternates: {
    canonical: pageUrl,
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Главная", url: "https://ambadetail.by/" },
  { name: "Услуги", url: pageUrl },
]);

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Услуги детейлинга Ambadetail в Витебске",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Химчистка салона",
      url: "https://ambadetail.by/uslugi/khimchistka-salona",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Оклейка авто плёнкой",
      url: "https://ambadetail.by/uslugi/okleyka-auto-plenkoy",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Полировка авто",
      url: "https://ambadetail.by/uslugi/polirovka",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Тонировка авто",
      url: "https://ambadetail.by/uslugi/tonirovka",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Защитные покрытия",
      url: "https://ambadetail.by/uslugi/zashhitnye-pokrytiya",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Восстановление ЛКП",
      url: "https://ambadetail.by/uslugi/vosstanovlenie-lkp",
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "Детейлинг двигателя",
      url: "https://ambadetail.by/uslugi/detailing-dvigatelya",
    },
  ],
};

export default function UslugiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <UslugiClient />
    </>
  );
}
