import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { pageMetadata } from "./metadata-config";
import { geoFaq } from "@/lib/geo-facts";
import { faqPageSchema } from "@/lib/seo-schemas";

export const metadata: Metadata = {
  title: {
    absolute: pageMetadata.home.title,
  },
  description: pageMetadata.home.description,
  keywords:
    "детейлинг витебск, детейлинг студия витебск, химчистка салона витебск, полировка авто витебск, оклейка пленкой витебск, тонировка по гост витебск, ppf витебск",
  openGraph: {
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
    url: "https://ambadetail.by",
    siteName: "Ambadetail — Детейлинг в Витебске",
    locale: "ru_BY",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Детейлинг студия Ambadetail в Витебске",
      },
    ],
  },
  alternates: {
    canonical: "https://ambadetail.by",
    types: {
      "text/plain": [
        { url: "/llms.txt", title: "Факты Ambadetail для ИИ" },
        { url: "/llms-full.txt", title: "Полные факты Ambadetail для ИИ" },
      ],
    },
  },
};

const homeFaq = faqPageSchema(geoFaq);

const homeWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://ambadetail.by/#webpage",
  url: "https://ambadetail.by/",
  name: pageMetadata.home.title,
  description: pageMetadata.home.description,
  inLanguage: "ru-BY",
  about: { "@id": "https://ambadetail.by/#localbusiness" },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".geo-facts__lead", ".geo-facts__answer"],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeWebPage) }}
      />
      <HomeClient />
    </>
  );
}
