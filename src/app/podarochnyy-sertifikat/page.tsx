import type { Metadata } from "next";
import CertificateClient from "./CertificateClient";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo-schemas";

const pageUrl = "https://ambadetail.by/podarochnyy-sertifikat";

export const metadata: Metadata = {
  title: "Подарочный сертификат на детейлинг в Витебске",
  description:
    "Подарочный сертификат Ambadetail в Витебске на химчистку, полировку, оклейку плёнкой, тонировку и другие услуги детейлинга. Номинал от 100 BYN. ул. П. Бровки, 6А.",
  keywords:
    "подарочный сертификат детейлинг витебск, сертификат на химчистку авто, сертификат на тонировку витебск, подарок автовладельцу витебск",
  openGraph: {
    title: "Подарочный сертификат на детейлинг в Витебске | Ambadetail",
    description:
      "Сертификат на услуги детейлинга в Витебске: химчистка, полировка, PPF, тонировка по ГОСТ. Номинал от 100 BYN.",
    url: pageUrl,
    siteName: "Ambadetail",
    locale: "ru_BY",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Подарочный сертификат Ambadetail в Витебске",
      },
    ],
  },
  alternates: {
    canonical: pageUrl,
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Главная", url: "https://ambadetail.by/" },
  { name: "Подарочный сертификат", url: pageUrl },
]);

const service = serviceSchema({
  name: "Подарочный сертификат на детейлинг в Витебске",
  serviceType: "Подарочный сертификат",
  description:
    "Подарочный сертификат детейлинг студии Ambadetail в Витебске на любую услугу: химчистка салона, полировка, оклейка плёнкой, тонировка, керамика, восстановление ЛКП, детейлинг двигателя.",
  url: pageUrl,
  image: "https://ambadetail.by/images/og-image.jpg",
  priceFrom: "100",
});

export default function CertificatePage() {
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
      <CertificateClient />
    </>
  );
}
