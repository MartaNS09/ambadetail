import { Metadata } from "next";
import UslugiClient from "./UslugiClient";

export const metadata: Metadata = {
  title: "Услуги детейлинга в Витебске | Полный спектр услуг Ambadetail",
  description:
    "Профессиональные услуги детейлинга в Витебске: полировка авто, химчистка салона, оклейка плёнкой, тонировка, защитные покрытия, детейлинг двигателя. Запишитесь онлайн.",
  keywords:
    "услуги детейлинг витебск, детейлинг студия витебск цены, запись на детейлинг витебск, детейлинг авто витебск",
  openGraph: {
    title: "Услуги детейлинга в Витебске | Полный спектр услуг Ambadetail",
    description:
      "Профессиональные услуги детейлинга в Витебске: полировка авто, химчистка салона, оклейка плёнкой, тонировка, защитные покрытия, детейлинг двигателя. Запишитесь онлайн.",
    url: "https://ambadetail.by/uslugi",
    siteName: "Ambadetail",
    images: [
      {
        url: "/images/services/bugatti.webp",
        width: 1200,
        height: 630,
        alt: "Услуги детейлинг студии в Витебске",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Услуги детейлинга в Витебске | Полный спектр услуг Ambadetail",
    description:
      "Профессиональные услуги детейлинга в Витебске: полировка авто, химчистка салона, оклейка плёнкой, тонировка, защитные покрытия, детейлинг двигателя. Запишитесь онлайн.",
    images: ["/images/services/bugatti.webp"],
  },
  alternates: {
    canonical: "https://ambadetail.by/uslugi",
  },
};

export default function UslugiPage() {
  return <UslugiClient />;
}
