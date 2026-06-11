import { Metadata } from "next";
import TonirovkaClient from "./TonirovkaClient";

export const metadata: Metadata = {
  title:
    "Тонировка авто в Витебске | Атермальная тонировка стекол | Ambadetail",
  description:
    "Профессиональная тонировка стёкол автомобиля в Витебске. Атермальная плёнка, защита от УФ-лучей, улучшение внешнего вида.",
  keywords:
    "тонировка авто витебск, тонировка стекол автомобиля, атермальная пленка",
  openGraph: {
    title: "Тонировка авто в Витебске | Ambadetail",
    description: "Качественная тонировка автомобиля в Витебске.",
    url: "https://ambadetail.vercel.app/uslugi/tonirovka",
    images: ["/images/services/tonirovka.webp"],
  },
  alternates: {
    canonical: "https://ambadetail.vercel.app/uslugi/tonirovka",
  },
};

export default function TonirovkaPage() {
  return <TonirovkaClient />;
}
