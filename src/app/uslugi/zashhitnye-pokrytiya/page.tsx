import { Metadata } from "next";
import ZashchitaClient from "./ZashchitaClient";

export const metadata: Metadata = {
  title:
    "Защитные покрытия для автомобиля в Витебске | Керамика, жидкое стекло | Ambadetail",
  description:
    "Профессиональное нанесение защитных покрытий на автомобиль в Витебске. Керамическое покрытие, жидкое стекло, антидождь. Защита кузова от царапин. Запишитесь онлайн.",
  keywords:
    "защитные покрытия авто витебск, керамическое покрытие автомобиля, жидкое стекло на авто, гидрофобное покрытие, защита ЛКП",
  openGraph: {
    title:
      "Защитные покрытия для автомобиля в Витебске | Керамика, жидкое стекло | Ambadetail",
    description:
      "Профессиональное нанесение защитных покрытий на автомобиль в Витебске. Керамическое покрытие, жидкое стекло, антидождь. Защита кузова от царапин. Запишитесь онлайн.",
    url: "https://ambadetail.by/uslugi/zashhitnye-pokrytiya",
    siteName: "Ambadetail",
    images: [
      {
        url: "/images/services/lamba.webp",
        width: 1200,
        height: 630,
        alt: "Защитные покрытия для автомобиля в Витебске — керамика",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Защитные покрытия для автомобиля в Витебске | Керамика, жидкое стекло | Ambadetail",
    description:
      "Профессиональное нанесение защитных покрытий на автомобиль в Витебске. Керамическое покрытие, жидкое стекло, антидождь. Защита кузова от царапин. Запишитесь онлайн.",
    images: ["/images/services/lamba.webp"],
  },
  alternates: {
    canonical: "https://ambadetail.by/uslugi/zashhitnye-pokrytiya",
  },
};

export default function ZashchitaPage() {
  return <ZashchitaClient />;
}
