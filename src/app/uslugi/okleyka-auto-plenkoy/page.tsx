import { Metadata } from "next";
import OkleykaClient from "./OkleykaClient";

export const metadata: Metadata = {
  title:
    "Оклейка авто антигравийной плёнкой в Витебске | PPF, цветная плёнка | Ambadetail",
  description:
    "Профессиональная оклейка автомобиля защитной (PPF) и цветной полиуретановой плёнкой в Витебске. Защита ЛКП, бронирование кузова, смена цвета. Запишитесь на консультацию.",
  keywords:
    "оклейка авто пленкой витебск, защитная пленка на авто, бронирование кузова, антигравийная пленка, ppf витебск, цветная полиуретановая пленка, оклейка капота, оклейка фар",
  openGraph: {
    title:
      "Оклейка авто антигравийной плёнкой в Витебске | PPF, цветная плёнка | Ambadetail",
    description:
      "Профессиональная оклейка автомобиля защитной (PPF) и цветной полиуретановой плёнкой в Витебске. Защита ЛКП, бронирование кузова, смена цвета. Запишитесь на консультацию.",
    url: "https://ambadetail.by/uslugi/okleyka-auto-plenkoy",
    siteName: "Ambadetail",
    images: [
      {
        url: "/images/services/vinil.webp",
        width: 1200,
        height: 630,
        alt: "Оклейка авто антигравийной плёнкой в Витебске",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Оклейка авто антигравийной плёнкой в Витебске | PPF, цветная плёнка | Ambadetail",
    description:
      "Профессиональная оклейка автомобиля защитной (PPF) и цветной полиуретановой плёнкой в Витебске. Защита ЛКП, бронирование кузова, смена цвета. Запишитесь на консультацию.",
    images: ["/images/services/vinil.webp"],
  },
  alternates: {
    canonical: "https://ambadetail.by/uslugi/okleyka-auto-plenkoy",
  },
};

export default function OkleykaPage() {
  return <OkleykaClient />;
}
