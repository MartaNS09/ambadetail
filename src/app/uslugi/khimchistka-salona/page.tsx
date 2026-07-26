import { Metadata } from "next";
import KhimchistkaClient from "./KhimchistkaClient";

export const metadata: Metadata = {
  title:
    "Химчистка салона авто в Витебске | Детейлинг салона, удаление запахов | Ambadetail",
  description:
    "Профессиональная химчистка салона автомобиля в Витебске. Удаление пятен, запахов, глубокая чистка всех поверхностей. Гарантия качества. Запишитесь онлайн.",
  keywords:
    "химчистка салона витебск, чистка салона авто, удаление запахов из салона, детейлинг салона витебск, химчистка кожаного салона",
  openGraph: {
    title:
      "Химчистка салона авто в Витебске | Детейлинг салона, удаление запахов | Ambadetail",
    description:
      "Профессиональная химчистка салона автомобиля в Витебске. Удаление пятен, запахов, глубокая чистка всех поверхностей. Гарантия качества. Запишитесь онлайн.",
    url: "https://ambadetail.by/uslugi/khimchistka-salona",
    siteName: "Ambadetail",
    images: [
      {
        url: "/images/services/salon.webp",
        width: 1200,
        height: 630,
        alt: "Химчистка салона автомобиля в Витебске",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Химчистка салона авто в Витебске | Детейлинг салона, удаление запахов | Ambadetail",
    description:
      "Профессиональная химчистка салона автомобиля в Витебске. Удаление пятен, запахов, глубокая чистка всех поверхностей. Гарантия качества. Запишитесь онлайн.",
    images: ["/images/services/salon.webp"],
  },
  alternates: {
    canonical: "https://ambadetail.by/uslugi/khimchistka-salona",
  },
};

export default function KhimchistkaPage() {
  return <KhimchistkaClient />;
}
