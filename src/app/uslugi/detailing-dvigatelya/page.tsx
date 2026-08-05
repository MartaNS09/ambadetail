import { Metadata } from "next";
import DetailingClient from "./DetailingClient";

export const metadata: Metadata = {
  title:
    "Детейлинг двигателя в Витебске | Чистка мотора, мойка подкапотного пространства",
  description:
    "Детейлинг двигателя в Витебске. Безопасная чистка мотора, мойка подкапотного пространства, восстановление пластика и резины. Запишитесь!",
  keywords:
    "детейлинг двигателя витебск, чистка двигателя авто, мойка мотора, чистка подкапотного пространства, восстановление пластика под капотом, мойка двигателя витебск, детейлинг мотора, чистка подкапотного пространства витебск",
  openGraph: {
    title:
      "Детейлинг двигателя в Витебске | Чистка мотора, мойка подкапотного пространства",
    description:
      "Детейлинг двигателя в Витебске. Безопасная чистка мотора, мойка подкапотного пространства, восстановление пластика и резины. Запишитесь!",
    url: "https://ambadetail.by/uslugi/detailing-dvigatelya",
    siteName: "Ambadetail",
    images: [
      {
        url: "/images/services/detailing_dvigatelya.webp",
        width: 1200,
        height: 630,
        alt: "Детейлинг двигателя в Витебске — чистка мотора и подкапотного пространства",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Детейлинг двигателя в Витебске | Чистка мотора, мойка подкапотного пространства",
    description:
      "Детейлинг двигателя в Витебске. Безопасная чистка мотора, мойка подкапотного пространства, восстановление пластика и резины. Запишитесь!",
    images: ["/images/services/detailing_dvigatelya.webp"],
  },
  alternates: {
    canonical: "https://ambadetail.by/uslugi/detailing-dvigatelya",
  },
};

// ✅ СХЕМА BREADCRUMB
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Главная",
      item: "https://ambadetail.by/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Услуги",
      item: "https://ambadetail.by/uslugi",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Детейлинг двигателя",
      item: "https://ambadetail.by/uslugi/detailing-dvigatelya",
    },
  ],
};

export default function DetailingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <DetailingClient />
    </>
  );
}
