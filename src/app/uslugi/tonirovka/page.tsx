import { Metadata } from "next";
import TonirovkaClient from "./TonirovkaClient";
import {
  breadcrumbSchema,
  serviceSchema,
  faqPageSchema,
} from "@/lib/seo-schemas";

const pageUrl = "https://ambadetail.by/uslugi/tonirovka";
const pageImage = "https://ambadetail.by/images/services/tonirovka.webp";

export const metadata: Metadata = {
  title: "Тонировка авто в Витебске по ГОСТ РБ и РФ | Атермальная плёнка",
  description:
    "Тонировка автомобиля в Витебске по ГОСТ 33997 и ТР ТС 018/2011. Разрешённая тонировка задней полусферы в РБ, атермальная плёнка на передние стёкла ≥70%. KAVACA, Llumar, SunTek. Запись: +375 29 223 03 22",
  keywords:
    "тонировка авто витебск, тонировка по гост витебск, атермальная тонировка витебск, разрешённая тонировка рб, тонировка задних стёкол витебск, тонировка стекол автомобиля цена, светопропускание 70%, тонировка по госту рф, KAVACA, Llumar, SunTek, тонировка авто витебская область",
  openGraph: {
    title: "Тонировка авто в Витебске по ГОСТ РБ и РФ | Ambadetail",
    description:
      "Тонировка по ГОСТ в Витебске: задняя полусфера без ограничений (РБ с 01.09.2025), передние стёкла ≥70%, атермальная плёнка. Гарантия до 5 лет.",
    url: pageUrl,
    siteName: "Ambadetail",
    images: [
      {
        url: "/images/services/tonirovka.webp",
        width: 1200,
        height: 630,
        alt: "Тонировка авто в Витебске по ГОСТ — Ambadetail",
      },
    ],
    locale: "ru_BY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Тонировка авто в Витебске по ГОСТ | Ambadetail",
    description:
      "Разрешённая тонировка по ГОСТ РБ и РФ в Витебске. Атермальная плёнка, задняя полусфера, гарантия до 5 лет.",
    images: ["/images/services/tonirovka.webp"],
  },
  alternates: {
    canonical: pageUrl,
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Главная", url: "https://ambadetail.by/" },
  { name: "Услуги", url: "https://ambadetail.by/uslugi" },
  { name: "Тонировка авто", url: pageUrl },
]);

const service = serviceSchema({
  name: "Тонировка автомобиля в Витебске",
  serviceType: "Тонировка стёкол автомобиля",
  description:
    "Профессиональная тонировка стёкол автомобиля в Витебске по ГОСТ 33997-2016 и ТР ТС 018/2011: атермальная тонировка передних стёкол со светопропусканием не менее 70%, разрешённая тонировка задней полусферы без ограничений при наличии наружных зеркал.",
  url: pageUrl,
  image: pageImage,
  priceFrom: "330",
});

const faq = faqPageSchema([
  {
    question: "Какая тонировка разрешена в Беларуси в 2025–2026 годах?",
    answer:
      "С 1 сентября 2025 года в РБ разрешена тонировка (плёнка, шторки, жалюзи) заднего и задних боковых стёкол легковых автомобилей без ограничений по светопропусканию при наличии наружных зеркал. Лобовое и передние боковые стёкла должны пропускать не менее 70% света по ТР ТС 018/2011 и ГОСТ 33997-2016.",
  },
  {
    question: "Можно ли тонировать передние стёкла по ГОСТ?",
    answer:
      "Да, если итоговое светопропускание лобового и передних боковых стёкол остаётся не ниже 70%. Для этого подходят светлые атермальные плёнки. Зеркальная тонировка запрещена в РБ и РФ.",
  },
  {
    question: "Чем отличается атермальная тонировка от обычной?",
    answer:
      "Обычная тонировка даёт затемнение и приватность. Атермальная сильнее снижает нагрев салона и УФ-нагрузку при более светлом внешнем виде и чаще используется на передних стёклах в рамках ГОСТ.",
  },
  {
    question: "Сколько стоит тонировка авто в Витебске?",
    answer:
      "Полная тонировка автомобиля в Ambadetail — от 330 BYN в зависимости от класса авто и типа плёнки. Точную цену сообщаем после осмотра или консультации.",
  },
  {
    question: "Даёте ли гарантию на тонировку?",
    answer:
      "Да, гарантия на плёнку и работы — до 5 лет. Условия зависят от выбранного бренда: KAVACA, Llumar, SunTek.",
  },
]);

export default function TonirovkaPage() {
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
      <TonirovkaClient />
    </>
  );
}
