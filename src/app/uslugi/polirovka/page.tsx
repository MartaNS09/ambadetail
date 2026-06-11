import { Metadata } from "next";
import PolirovkaClient from "./PolirovkaClient";

export const metadata: Metadata = {
  title:
    "Полировка авто в Витебске | Профессиональная полировка кузова | Ambadetail",
  description:
    "Качественная полировка кузова автомобиля в Витебске. Восстановление блеска, удаление царапин и дефектов ЛКП. Гарантия качества.",
  keywords:
    "полировка авто витебск, полировка кузова витебск, восстановление блеска авто",
  openGraph: {
    title: "Полировка авто в Витебске | Ambadetail",
    description: "Профессиональная полировка кузова автомобиля в Витебске.",
    url: "https://ambadetail.vercel.app/uslugi/polirovka",
    images: ["/images/services/polirovka_kuzova.webp"],
  },
  alternates: {
    canonical: "https://ambadetail.vercel.app/uslugi/polirovka",
  },
};

export default function PolirovkaPage() {
  return <PolirovkaClient />;
}
