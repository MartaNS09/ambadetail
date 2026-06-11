import { Metadata } from "next";
import ZashchitaClient from "./ZashchitaClient";

export const metadata: Metadata = {
  title:
    "Защитные покрытия для автомобиля в Витебске | Керамика, жидкое стекло | Ambadetail",
  description:
    "Профессиональное нанесение защитных покрытий на автомобиль в Витебске. Керамическое покрытие, жидкое стекло, антидождь. Гарантия качества.",
  keywords:
    "защитные покрытия авто витебск, керамическое покрытие автомобиля, жидкое стекло на авто",
  openGraph: {
    title: "Защитные покрытия для автомобиля в Витебске | Ambadetail",
    description: "Профессиональное нанесение защитных покрытий в Витебске.",
    url: "https://ambadetail.vercel.app/uslugi/zashhitnye-pokrytiya",
    images: ["/images/services/lamba.webp"],
  },
  alternates: {
    canonical: "https://ambadetail.vercel.app/uslugi/zashhitnye-pokrytiya",
  },
};

export default function ZashchitaPage() {
  return <ZashchitaClient />;
}
