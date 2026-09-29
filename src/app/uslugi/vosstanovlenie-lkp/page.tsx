import { Metadata } from "next";
import LkpClient from "./LkpClient";
import {
  breadcrumbSchema,
  serviceSchema,
  faqPageSchema,
} from "@/lib/seo-schemas";

const pageUrl = "https://ambadetail.by/uslugi/vosstanovlenie-lkp";
const pageImage = "https://ambadetail.by/images/services/bugatti.webp";

export const metadata: Metadata = {
  title: "Восстановление ЛКП в Витебске | Refiller F5, удаление сколов",
  description:
    "Восстановление ЛКП автомобиля в Витебске по технологии Refiller F5: сколы, царапины, потёртости без полной перекраски. Ambadetail, ул. П. Бровки, 6А. +375 29 223 03 22",
  keywords:
    "восстановление ЛКП витебск, Refiller F5 витебск, удаление сколов авто, восстановление лакокрасочного покрытия, удаление царапин витебск, восстановление кузова витебск",
  openGraph: {
    title: "Восстановление ЛКП в Витебске | Refiller F5 — Ambadetail",
    description:
      "Восстановление ЛКП в Витебске по Refiller F5: сколы и царапины без полной перекраски. Гарантия до 3 лет.",
    url: pageUrl,
    siteName: "Ambadetail",
    images: [
      {
        url: "/images/services/bugatti.webp",
        width: 1200,
        height: 630,
        alt: "Восстановление ЛКП в Витебске — Refiller F5",
      },
    ],
    locale: "ru_BY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Восстановление ЛКП в Витебске | Ambadetail",
    description:
      "Refiller F5 в Витебске: восстановление ЛКП без полной перекраски.",
    images: ["/images/services/bugatti.webp"],
  },
  alternates: {
    canonical: pageUrl,
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Главная", url: "https://ambadetail.by/" },
  { name: "Услуги", url: "https://ambadetail.by/uslugi" },
  { name: "Восстановление ЛКП", url: pageUrl },
]);

const service = serviceSchema({
  name: "Восстановление ЛКП в Витебске",
  serviceType: "Восстановление лакокрасочного покрытия",
  description:
    "Восстановление лакокрасочного покрытия автомобиля в Витебске по технологии Refiller F5: удаление сколов, царапин и потёртостей без полной перекраски.",
  url: pageUrl,
  image: pageImage,
});

const faq = faqPageSchema([
  {
    question: "Что такое технология Refiller F5?",
    answer:
      "Refiller F5 — технология восстановления лакокрасочного покрытия, направленная на улучшение внешнего вида и устранение выраженных дефектов без полной перекраски.",
  },
  {
    question: "Какие дефекты можно убрать при восстановлении ЛКП?",
    answer:
      "Чаще всего это потёртости, мелкие/средние царапины, помутнение, следы эксплуатации, сколы и выцветание.",
  },
  {
    question: "Сколько времени занимает восстановление ЛКП?",
    answer:
      "Срок зависит от класса автомобиля и объёма работ. Обычно требуется от одного дня и более.",
  },
  {
    question: "Даете ли гарантию на работы?",
    answer: "Да, предоставляем гарантию на выполненные работы до 3 лет.",
  },
]);

export default function LkpPage() {
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
      <LkpClient />
    </>
  );
}
