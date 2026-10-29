import { Metadata } from "next";
import AntikorClient from "./AntikorClient";
import { antikorFaqItems } from "./seo-data";
import {
  breadcrumbSchema,
  serviceSchema,
  faqPageSchema,
} from "@/lib/seo-schemas";

const pageUrl = "https://ambadetail.by/uslugi/antikorrozijnaya-obrabotka";
const pageImage = "https://ambadetail.by/images/services/antikor.webp";

const title = "Антикоррозийная обработка в Витебске | антикор от 450 Б̶";
const description =
  "Антикоррозийная обработка авто в Витебске: днище, арки, скрытые полости. Dinitrol и WURTH, пакеты от 450 Б̶. Ambadetail, ул. П. Бровки, 6А. +375 29 223 03 22";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  keywords:
    "антикоррозийная обработка витебск, антикор авто витебск, антикоррозийная обработка автомобиля витебск, антикор днища витебск, обработка скрытых полостей витебск, dinitrol витебск, цена антикора витебск",
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "Ambadetail — Детейлинг в Витебске",
    images: [
      {
        url: "/images/services/antikor.webp",
        width: 1200,
        height: 630,
        alt: "Антикоррозийная обработка автомобиля в Витебске — Ambadetail",
      },
    ],
    locale: "ru_BY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/services/antikor.webp"],
  },
  alternates: {
    canonical: pageUrl,
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Главная", url: "https://ambadetail.by/" },
  { name: "Услуги", url: "https://ambadetail.by/uslugi" },
  { name: "Антикоррозийная обработка", url: pageUrl },
]);

const service = serviceSchema({
  name: "Антикоррозийная обработка в Витебске",
  serviceType: "Антикоррозийная обработка автомобиля",
  description,
  url: pageUrl,
  image: pageImage,
  priceFrom: "450",
});

const faq = faqPageSchema(antikorFaqItems);

const howTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Как проходит антикоррозийная обработка в Витебске",
  description:
    "Этапы профессиональной антикоррозийной обработки автомобиля в студии Ambadetail.",
  totalTime: "P2D",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "BYN",
    value: "450",
  },
  step: [
    {
      "@type": "HowToStep",
      name: "Осмотр и диагностика",
      text: "Оцениваем состояние днища, арок и скрытых полостей, согласуем пакет и материалы.",
    },
    {
      "@type": "HowToStep",
      name: "Разборка и мойка",
      text: "Снимаем защиты днища и подкрылки, моем днище и арки аппаратом высокого давления.",
    },
    {
      "@type": "HowToStep",
      name: "Сушка и подготовка",
      text: "Сушим кузов, при необходимости зачищаем очаги ржавчины и грунтуем.",
    },
    {
      "@type": "HowToStep",
      name: "Нанесение антикора",
      text: "Обрабатываем днище, арки и скрытые полости составами Dinitrol / WURTH.",
    },
    {
      "@type": "HowToStep",
      name: "Сборка и контроль",
      text: "Собираем защиты, проверяем покрытие, оформляем гарантийные документы.",
    },
  ],
};

export default function AntikorPage() {
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
      <AntikorClient />
    </>
  );
}
