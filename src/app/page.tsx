import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { pageMetadata } from "./metadata-config";

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
  },
};

export default function HomePage() {
  return <HomeClient />;
}
