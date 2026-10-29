import { Metadata } from "next";
import PolirovkaClient from "./PolirovkaClient";
import {
  breadcrumbSchema,
  serviceSchema,
  faqPageSchema,
} from "@/lib/seo-schemas";

const pageUrl = "https://ambadetail.by/uslugi/polirovka";
const pageImage =
  "https://ambadetail.by/images/services/polirovka_kuzova.webp";

const title = "Полировка авто в Витебске | царапины и блеск кузова";
const description =
  "Полировка авто в Витебске: удаление царапин и голограмм, восстановление блеска кузова от 600 Б̶. Пасты 3M и Menzerna. Ambadetail, ул. П. Бровки, 6А. +375 29 223 03 22";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  keywords:
    "полировка авто витебск, полировка кузова витебск, удаление царапин витебск, восстановление блеска авто, детейлинг полировка витебск, полировка машины витебск, цена полировки авто витебск",
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "Ambadetail",
    images: [
      {
        url: "/images/services/polirovka_kuzova.webp",
        width: 1200,
        height: 630,
        alt: "Полировка авто в Витебске — восстановление кузова",
      },
    ],
    locale: "ru_BY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/services/polirovka_kuzova.webp"],
  },
  alternates: {
    canonical: pageUrl,
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Главная", url: "https://ambadetail.by/" },
  { name: "Услуги", url: "https://ambadetail.by/uslugi" },
  { name: "Полировка авто", url: pageUrl },
]);

const service = serviceSchema({
  name: "Полировка автомобиля в Витебске",
  serviceType: "Полировка кузова автомобиля",
  description,
  url: pageUrl,
  image: pageImage,
  priceFrom: "600",
});

const faq = faqPageSchema([
  {
    question: "Сколько стоит полировка авто в Витебске?",
    answer:
      "Полировка кузова в Ambadetail — от 600 Б̶ для автомобиля 1 класса, далее по классам от 650, 700, 750 и 800 Б̶. Точная сумма зависит от состояния ЛКП и объёма работ. Прайс на странице услуги.",
  },
  {
    question: "Убирает ли полировка царапины и голограммы?",
    answer:
      "Да. Полировка снимает поверхностные царапины, потёртости и голограммы, восстанавливает зеркальный блеск. Глубокие повреждения до грунта могут потребовать восстановления ЛКП или защиты плёнкой.",
  },
  {
    question: "Какие пасты используете?",
    answer:
      "Работаем с профессиональными абразивными и финишными пастами 3M и Menzerna и полировальными машинами. Подбираем этап под дефект ЛКП.",
  },
  {
    question: "Где сделать полировку кузова в Витебске?",
    answer:
      "Ambadetail — Витебск, ул. П. Бровки, 6А. Пн–Пт 10:00–19:00, Сб–Вс 10:00–17:00. Запись +375 29 223 03 22 или через форму онлайн-записи.",
  },
]);

export default function PolirovkaPage() {
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
      <PolirovkaClient />
    </>
  );
}
