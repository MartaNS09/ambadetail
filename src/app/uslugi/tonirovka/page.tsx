import { Metadata } from "next";
import TonirovkaClient from "./TonirovkaClient";
import { tonirovkaFaqItems } from "./seo-data";
import {
  breadcrumbSchema,
  serviceSchema,
  faqPageSchema,
} from "@/lib/seo-schemas";

const pageUrl = "https://ambadetail.by/uslugi/tonirovka";
const pageImage = "https://ambadetail.by/images/services/tonirovka.webp";

const title = "Тонировка авто в Витебске по ГОСТ | от 330 BYN";
const description =
  "Тонировка авто в Витебске по ГОСТ РБ и РФ: полная от 330 BYN. Атермал на передние ≥70%, задняя полусфера без лимита с 01.09.2025. KAVACA, Llumar, SunTek. ул. П. Бровки, 6А. +375 29 223 03 22";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  keywords:
    "тонировка авто витебск, тонировка по гост витебск, атермальная тонировка витебск, разрешённая тонировка рб, тонировка задних стёкол витебск, тонировка стекол автомобиля цена, светопропускание 70%, тонировка по госту рф, цена тонировки витебск, KAVACA, Llumar, SunTek",
  openGraph: {
    title,
    description:
      "Полная тонировка от 330 BYN. Передние стёкла ≥70%, задняя полусфера без ограничений с 01.09.2025. Гарантия до 5 лет.",
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
    title,
    description:
      "Тонировка по ГОСТ в Витебске от 330 BYN. Атермал на передние, задняя полусфера, гарантия до 5 лет.",
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
    "Тонировка стёкол автомобиля в Витебске по ГОСТ 33997-2016 и ТР ТС 018/2011: атермальная плёнка на передние стёкла со светопропусканием не менее 70%, разрешённая тонировка задней полусферы без ограничений при наличии наружных зеркал. Полная тонировка от 330 BYN. Плёнки KAVACA, Llumar, SunTek.",
  url: pageUrl,
  image: pageImage,
  priceFrom: "330",
});

const faq = faqPageSchema(tonirovkaFaqItems);

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
