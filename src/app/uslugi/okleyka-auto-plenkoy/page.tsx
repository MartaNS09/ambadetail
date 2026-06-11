import { Metadata } from "next";
import OkleykaClient from "./OkleykaClient";

export const metadata: Metadata = {
  title: "Оклейка авто плёнкой (PPF) в Витебске | Защита кузова | Ambadetail",
  description:
    "Профессиональная оклейка автомобиля антигравийной (PPF) и цветной полиуретановой плёнкой в Витебске. Защита ЛКП от сколов и царапин.",
  keywords:
    "оклейка авто пленкой витебск, защитная пленка на авто, бронирование кузова, антигравийная пленка",
  openGraph: {
    title: "Оклейка авто плёнкой в Витебске | Ambadetail",
    description: "Защита кузова антигравийной плёнкой в Витебске.",
    url: "https://ambadetail.vercel.app/uslugi/okleyka-auto-plenkoy",
    images: ["/images/services/vinil.webp"],
  },
  alternates: {
    canonical: "https://ambadetail.vercel.app/uslugi/okleyka-auto-plenkoy",
  },
};

export default function OkleykaPage() {
  return <OkleykaClient />;
}
