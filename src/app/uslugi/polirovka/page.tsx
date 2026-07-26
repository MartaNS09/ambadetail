import { Metadata } from "next";
import PolirovkaClient from "./PolirovkaClient";

export const metadata: Metadata = {
  title:
    "Полировка авто в Витебске | Восстановление кузова, удаление царапин | Ambadetail",
  description:
    "Профессиональная полировка кузова автомобиля в Витебске. Восстановление блеска, удаление царапин и дефектов ЛКП. Гарантия качества. Запишитесь онлайн.",
  keywords:
    "полировка авто витебск, полировка кузова витебск, восстановление блеска авто, удаление царапин, детейлинг полировка",
  openGraph: {
    title:
      "Полировка авто в Витебске | Восстановление кузова, удаление царапин | Ambadetail",
    description:
      "Профессиональная полировка кузова автомобиля в Витебске. Восстановление блеска, удаление царапин и дефектов ЛКП. Гарантия качества. Запишитесь онлайн.",
    url: "https://ambadetail.by/uslugi/polirovka",
    siteName: "Ambadetail",
    images: [
      {
        url: "/images/services/polirovka_kuzova.webp",
        width: 1200,
        height: 630,
        alt: "Полировка авто в Витебске — восстановление кузова",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Полировка авто в Витебске | Восстановление кузова, удаление царапин | Ambadetail",
    description:
      "Профессиональная полировка кузова автомобиля в Витебске. Восстановление блеска, удаление царапин и дефектов ЛКП. Гарантия качества. Запишитесь онлайн.",
    images: ["/images/services/polirovka_kuzova.webp"],
  },
  alternates: {
    canonical: "https://ambadetail.by/uslugi/polirovka",
  },
};

export default function PolirovkaPage() {
  return <PolirovkaClient />;
}
