import { Metadata } from "next";
import TonirovkaClient from "./TonirovkaClient";

export const metadata: Metadata = {
  title:
    "Тонировка авто в Витебске | Атермальная тонировка стёкол | Ambadetail",
  description:
    "Профессиональная тонировка автомобиля в Витебске. Атермальная плёнка, защита от УФ, комфорт в салоне. Тонировка любой сложности. Запись онлайн.",
  keywords:
    "тонировка авто витебск, атермальная тонировка, тонировка стекол автомобиля, затемнение стёкол, защита от солнца, тонировка авто цена, KAVACA, Llumar",
  openGraph: {
    title:
      "Тонировка авто в Витебске | Атермальная тонировка стёкол | Ambadetail",
    description:
      "Профессиональная тонировка автомобиля в Витебске. Атермальная плёнка, защита от УФ, комфорт в салоне. Тонировка любой сложности. Запись онлайн.",
    url: "https://ambadetail.by/uslugi/tonirovka",
    siteName: "Ambadetail",
    images: [
      {
        url: "/images/services/tonirovka.webp",
        width: 1200,
        height: 630,
        alt: "Тонировка авто в Витебске | Атермальная тонировка стёкол",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Тонировка авто в Витебске | Атермальная тонировка стёкол | Ambadetail",
    description:
      "Профессиональная тонировка автомобиля в Витебске. Атермальная плёнка, защита от УФ, комфорт в салоне. Тонировка любой сложности. Запись онлайн.",
    images: ["/images/services/tonirovka.webp"],
  },
  alternates: {
    canonical: "https://ambadetail.by/uslugi/tonirovka",
  },
};

export default function TonirovkaPage() {
  return <TonirovkaClient />;
}
