import { Metadata } from "next";
import OkleykaClient from "./OkleykaClient";
import {
  breadcrumbSchema,
  serviceSchema,
  faqPageSchema,
} from "@/lib/seo-schemas";

const pageUrl = "https://ambadetail.by/uslugi/okleyka-auto-plenkoy";
const pageImage = "https://ambadetail.by/images/services/vinil.webp";

export const metadata: Metadata = {
  title: "Оклейка авто плёнкой в Витебске | PPF, винил, защита кузова",
  description:
    "Оклейка автомобиля плёнкой в Витебске: PPF, винил, бронирование кузова, смена цвета. XPEL, Sunmax, Llumar, Stek. Гарантия 3 года. Ambadetail — +375 29 223 03 22",
  keywords:
    "оклейка авто пленкой витебск, ppf витебск, винил витебск, защита кузова витебск, бронирование кузова витебск, антигравийная пленка, оклейка капота витебск, xpel витебск, sunmax, llumar, stek",
  openGraph: {
    title: "Оклейка авто плёнкой в Витебске | PPF, винил — Ambadetail",
    description:
      "PPF и винил в Витебске: защита ЛКП, бронирование, смена цвета. Гарантия 3 года.",
    url: pageUrl,
    siteName: "Ambadetail",
    images: [
      {
        url: "/images/services/vinil.webp",
        width: 1200,
        height: 630,
        alt: "Оклейка авто плёнкой в Витебске — защита кузова PPF",
      },
    ],
    locale: "ru_BY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Оклейка авто плёнкой в Витебске | Ambadetail",
    description:
      "PPF и винил в Витебске: защита кузова, бронирование, смена цвета.",
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
  description:
    "Профессиональная оклейка автомобиля антигравийной PPF и цветной полиуретановой плёнкой в Витебске: бронирование кузова, защита ЛКП, смена цвета.",
  url: pageUrl,
  image: pageImage,
});

const faq = faqPageSchema([
  {
    question:
      "Чем отличается прозрачная PPF от цветной полиуретановой пленки?",
    answer:
      "Обе пленки полиуретановые и защищают ЛКП. Прозрачная PPF сохраняет заводской цвет, а цветная полиуретановая пленка одновременно защищает кузов и меняет цвет автомобиля.",
  },
  {
    question: "Какие зоны лучше оклеить в первую очередь?",
    answer:
      "Чаще всего оклеивают зоны риска: капот, бампер, фары, зеркала, стойки и кромки дверей.",
  },
  {
    question: "Сколько времени занимает оклейка автомобиля плёнкой?",
    answer:
      "Срок зависит от объёма работ: частичная оклейка обычно занимает от 1 дня, полная — несколько дней.",
  },
    {
      question: "Сколько стоит оклейка капота в Витебске?",
      answer:
        "Стоимость зависит от размера капота и выбранной плёнки. Точную стоимость рассчитаем на консультации.",
    },
]);

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
      <OkleykaClient />
    </>
  );
}
