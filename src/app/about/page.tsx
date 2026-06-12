import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "О компании | Детейлинг студия Ambadetail в Витебске",
  description:
    "Профессиональная детейлинг студия в Витебске. Опытные мастера, современное оборудование, гарантия качества. Более 7 лет на рынке.",
  keywords:
    "о компании детейлинг витебск, детейлинг студия витебск отзывы, ambadetail витебск",
  openGraph: {
    title: "О компании | Детейлинг студия Ambadetail в Витебске",
    description: "Узнайте больше о нашей детейлинг студии в Витебске.",
    url: "https://ambadetail.vercel.app/about",
    images: ["/images/services/lamba.webp"],
  },
  alternates: {
    canonical: "https://ambadetail.vercel.app/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
