import { Metadata } from "next";
import KhimchistkaClient from "./KhimchistkaClient";

export const metadata: Metadata = {
  title: "Химчистка салона авто в Витебске | Детейлинг салона | Ambadetail",
  description:
    "Профессиональная химчистка салона автомобиля в Витебске. Удаление пятен, запахов, глубокая чистка всех поверхностей. Гарантия качества.",
  keywords:
    "химчистка салона витебск, чистка салона авто, удаление запахов из салона, детейлинг салона витебск",
  openGraph: {
    title: "Химчистка салона в Витебске | Ambadetail",
    description: "Глубокая чистка салона автомобиля в Витебске.",
    url: "https://ambadetail.vercel.app/uslugi/khimchistka-salona",
    images: ["/images/services/salon.webp"],
  },
  alternates: {
    canonical: "https://ambadetail.vercel.app/uslugi/khimchistka-salona",
  },
};

export default function KhimchistkaPage() {
  return <KhimchistkaClient />;
}
