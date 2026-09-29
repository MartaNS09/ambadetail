import { Metadata } from "next";
import PolirovkaClient from "./PolirovkaClient";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo-schemas";

const pageUrl = "https://ambadetail.by/uslugi/polirovka";
const pageImage =
  "https://ambadetail.by/images/services/polirovka_kuzova.webp";

export const metadata: Metadata = {
  title: "Полировка авто в Витебске | Удаление царапин, восстановление блеска",
  description:
    "Полировка кузова автомобиля в Витебске: удаление царапин, голограмм и потёртостей, восстановление блеска ЛКП. Пасты 3M, Menzerna. Ambadetail — запись +375 29 223 03 22",
  keywords:
    "полировка авто витебск, полировка кузова витебск, удаление царапин витебск, восстановление блеска авто, детейлинг полировка витебск, полировка машины витебск, цена полировки авто витебск",
  openGraph: {
    title: "Полировка авто в Витебске | Ambadetail",
    description:
      "Профессиональная полировка кузова в Витебске: царапины, голограммы, зеркальный блеск. Гарантия до 12 месяцев.",
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
    title: "Полировка авто в Витебске | Ambadetail",
    description:
      "Полировка кузова в Витебске: удаление царапин и восстановление блеска ЛКП.",
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
  description:
    "Профессиональная полировка кузова автомобиля в Витебске: удаление царапин, голограмм и дефектов ЛКП, восстановление зеркального блеска.",
  url: pageUrl,
  image: pageImage,
});

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
      <PolirovkaClient />
    </>
  );
}
