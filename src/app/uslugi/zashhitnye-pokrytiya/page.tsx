import { Metadata } from "next";
import ZashchitaClient from "./ZashchitaClient";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo-schemas";

const pageUrl = "https://ambadetail.by/uslugi/zashhitnye-pokrytiya";
const pageImage = "https://ambadetail.by/images/services/lamba.webp";

export const metadata: Metadata = {
  title: "Керамика для авто в Витебске | защитное покрытие кузова",
  description:
    "Керамика для авто в Витебске: защитное покрытие кузова, жидкое стекло, антидождь. Защита от царапин, реагентов и УФ. Ambadetail, ул. П. Бровки, 6А. +375 29 223 03 22",
  keywords:
    "защитные покрытия авто витебск, керамическое покрытие автомобиля витебск, жидкое стекло на авто витебск, керамика для авто витебск, гидрофобное покрытие, антидождь витебск",
  openGraph: {
    title: "Керамика для авто в Витебске | защитное покрытие кузова",
    description:
      "Керамика для авто в Витебске: защитное покрытие кузова, жидкое стекло, антидождь. Ambadetail, ул. П. Бровки, 6А.",
    url: pageUrl,
    siteName: "Ambadetail",
    images: [
      {
        url: "/images/services/lamba.webp",
        width: 1200,
        height: 630,
        alt: "Защитные покрытия для автомобиля в Витебске — керамика",
      },
    ],
    locale: "ru_BY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Керамика для авто в Витебске | защитное покрытие кузова",
    description:
      "Керамика для авто в Витебске: защитное покрытие кузова, жидкое стекло, антидождь.",
    images: ["/images/services/lamba.webp"],
  },
  alternates: {
    canonical: pageUrl,
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Главная", url: "https://ambadetail.by/" },
  { name: "Услуги", url: "https://ambadetail.by/uslugi" },
  { name: "Защитные покрытия", url: pageUrl },
]);

const service = serviceSchema({
  name: "Защитные покрытия для автомобиля в Витебске",
  serviceType: "Нанесение защитных покрытий",
  description:
    "Профессиональное нанесение керамического покрытия, жидкого стекла и гидрофобных составов на автомобиль в Витебске.",
  url: pageUrl,
  image: pageImage,
});

export default function ZashchitaPage() {
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
      <ZashchitaClient />
    </>
  );
}
