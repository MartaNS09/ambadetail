import { Metadata } from "next";
import OkleykaClient from "./OkleykaClient";
import { okleykaFaqItems } from "./seo-data";
import {
  breadcrumbSchema,
  serviceSchema,
  faqPageSchema,
} from "@/lib/seo-schemas";

const pageUrl = "https://ambadetail.by/uslugi/okleyka-auto-plenkoy";
const pageImage = "https://ambadetail.by/images/services/vinil.webp";

const title = "Оклейка авто плёнкой в Витебске | от 660 Б̶";
const description =
  "Антигравийная оклейка авто в Витебске: зоны риска от 660 Б̶, капот 650 Б̶, полная оклейка от 7 370 Б̶. Sunmax, XPEL, Llumar, Stek, HEXIS. ул. П. Бровки, 6А. +375 29 223 03 22";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  keywords:
    "оклейка авто пленкой витебск, оклейка авто витебск, антигравийная пленка витебск, бронирование авто витебск, ppf витебск, оклейка зон риска витебск, оклейка капота витебск, оклейка фар витебск, оклейка бампера витебск, цветная полиуретановая пленка, xpel, sunmax, llumar, stek, hexis",
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "Ambadetail — Детейлинг в Витебске",
    images: [
      {
        url: "/images/services/vinil.webp",
        width: 1200,
        height: 630,
        alt: "Профессиональная оклейка авто плёнкой в Витебске — PPF защита кузова",
      },
    ],
    locale: "ru_BY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/services/vinil.webp"],
  },
  alternates: {
    canonical: pageUrl,
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Главная", url: "https://ambadetail.by/" },
  { name: "Услуги", url: "https://ambadetail.by/uslugi" },
  { name: "Оклейка авто плёнкой", url: pageUrl },
]);

const service = serviceSchema({
  name: "Оклейка авто плёнкой в Витебске",
  serviceType: "Оклейка автомобиля защитной плёнкой",
  description,
  url: pageUrl,
  image: pageImage,
  priceFrom: "660",
});

const faq = faqPageSchema(okleykaFaqItems);

const howTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Как проходит оклейка авто плёнкой в Витебске",
  description:
    "Этапы профессиональной оклейки автомобиля антигравийной и цветной плёнкой в студии Ambadetail.",
  totalTime: "P2D",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "BYN",
    value: "660",
  },
  step: [
    {
      "@type": "HowToStep",
      name: "Консультация",
      text: "Подбор плёнки PPF или цветного полиуретана под задачи и бюджет.",
    },
    {
      "@type": "HowToStep",
      name: "Подготовка кузова",
      text: "Мойка, обезжиривание, при необходимости лёгкая полировка.",
    },
    {
      "@type": "HowToStep",
      name: "Раскрой",
      text: "Компьютерный или ручной раскрой плёнки по шаблонам кузова.",
    },
    {
      "@type": "HowToStep",
      name: "Оклейка",
      text: "Монтаж на капот, бампер, крылья, фары, стойки и другие зоны.",
    },
    {
      "@type": "HowToStep",
      name: "Контроль качества",
      text: "Проверка прилегания, устранение пузырей и складок, рекомендации по уходу.",
    },
  ],
};

const zonesList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Зоны оклейки автомобиля плёнкой в Витебске",
  itemListElement: [
    "Оклейка капота",
    "Оклейка переднего бампера",
    "Оклейка фар",
    "Оклейка крыльев и зеркал",
    "Оклейка крыши и стоек",
    "Оклейка порогов и дверей",
    "Полная оклейка кузова",
  ].map((name, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name,
  })),
};

export default function OkleykaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(zonesList) }}
      />
      <OkleykaClient />
    </>
  );
}
