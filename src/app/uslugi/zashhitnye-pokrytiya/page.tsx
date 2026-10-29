import { Metadata } from "next";
import ZashchitaClient from "./ZashchitaClient";
import {
  breadcrumbSchema,
  serviceSchema,
  faqPageSchema,
} from "@/lib/seo-schemas";

const pageUrl = "https://ambadetail.by/uslugi/zashhitnye-pokrytiya";
const pageImage = "https://ambadetail.by/images/services/lamba.webp";

const title = "Керамика для авто в Витебске | защитное покрытие кузова";
const description =
  "Керамика для авто в Витебске: защитное покрытие кузова HENDLEX M3 от 350 Б̶, жидкое стекло, антидождь. Ambadetail, ул. П. Бровки, 6А. +375 29 223 03 22";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  keywords:
    "керамика для авто витебск, керамическое покрытие автомобиля витебск, защитные покрытия авто витебск, жидкое стекло на авто витебск, гидрофобное покрытие, антидождь витебск",
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "Ambadetail",
    images: [
      {
        url: "/images/services/lamba.webp",
        width: 1200,
        height: 630,
        alt: "Керамика для авто в Витебске — защитное покрытие кузова",
      },
    ],
    locale: "ru_BY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/services/lamba.webp"],
  },
  alternates: {
    canonical: pageUrl,
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Главная", url: "https://ambadetail.by/" },
  { name: "Услуги", url: "https://ambadetail.by/uslugi" },
  { name: "Керамика для авто", url: pageUrl },
]);

const service = serviceSchema({
  name: "Керамика для авто в Витебске",
  serviceType: "Керамическое защитное покрытие автомобиля",
  description,
  url: pageUrl,
  image: pageImage,
  priceFrom: "350",
});

const faq = faqPageSchema([
  {
    question: "Сколько стоит керамика для авто в Витебске?",
    answer:
      "Керамическое покрытие HENDLEX M3 в 1 слой для автомобиля 1 класса — 350 Б̶, 2 слоя — 550 Б̶, 3 слоя — 750 Б̶, 4 слоя — 900 Б̶. Керамика на плёнку — от 500 Б̶. Цена зависит от класса авто и числа слоёв. Прайс на странице услуги.",
  },
  {
    question: "Чем керамика отличается от жидкого стекла?",
    answer:
      "Керамика HENDLEX M3 создаёт более твёрдый и долговечный слой защиты ЛКП. Жидкое стекло даёт блеск и гидрофобный эффект. В Ambadetail подбираем покрытие под задачу: защита, блеск или антидождь на стёкла.",
  },
  {
    question: "Нужна ли полировка перед керамикой?",
    answer:
      "Да, перед керамикой кузов готовят: мойка, обезжиривание и при необходимости полировка, чтобы покрытие легло на ровное ЛКП без голограмм и царапин.",
  },
  {
    question: "Где нанести керамику на авто в Витебске?",
    answer:
      "Ambadetail — Витебск, ул. П. Бровки, 6А. Пн–Пт 10:00–19:00, Сб–Вс 10:00–17:00. Запись +375 29 223 03 22 или через форму онлайн-записи.",
  },
]);

export default function ZashchitaPage() {
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
      <ZashchitaClient />
    </>
  );
}
