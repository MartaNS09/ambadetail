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

const title = "Антикоррозийная обработка в Витебске | от 1 300 Б̶ DINITROL";
const description =
  "Антикоррозийная обработка авто в Витебске составом DINITROL: Стандарт от 1 300 Б̶, Премиум со снятием бамперов от 1 650 Б̶. Ambadetail, ул. П. Бровки, 6А. +375 29 223 03 22";

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
  priceFrom: "1300",
});

const faq = faqPageSchema(antikorFaqItems);

const howTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Как проходит антикоррозийная обработка в Витебске",
  description:
    "Этапы профессиональной антикоррозийной обработки автомобиля составом DINITROL в студии Ambadetail.",
  totalTime: "P2D",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "BYN",
    value: "1300",
  },
  step: [
    {
      "@type": "HowToStep",
      name: "Осмотр и диагностика",
      text: "Оцениваем состояние днища, арок и зон коррозии, согласуем пакет Стандарт или Премиум.",
    },
    {
      "@type": "HowToStep",
      name: "Разборка и мойка",
      text: "Снимаем подкрылки, защиту днища, усилитель, термоэкраны; в Премиум — бамперы и фары. Моем днище и арки.",
    },
    {
      "@type": "HowToStep",
      name: "Сушка и подготовка",
      text: "Сушим кузов, при необходимости зачищаем очаги ржавчины.",
    },
    {
      "@type": "HowToStep",
      name: "Нанесение DINITROL",
      text: "Обрабатываем днище, арки и доступные зоны составом DINITROL.",
    },
    {
      "@type": "HowToStep",
      name: "Сборка и контроль",
      text: "Собираем защиты и снятые элементы, проверяем покрытие, оформляем документы.",
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
