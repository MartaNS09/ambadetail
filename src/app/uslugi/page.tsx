import { Metadata } from "next";
import UslugiClient from "./UslugiClient";

export const metadata: Metadata = {
  title: "Услуги детейлинга в Витебске | Полный спектр услуг Ambadetail",
  description:
    "Профессиональные услуги детейлинга в Витебске: полировка авто, химчистка салона, оклейка плёнкой, тонировка, защитные покрытия, детейлинг двигателя.",
  keywords:
    "услуги детейлинг витебск, детейлинг студия витебск цены, запись на детейлинг витебск",
  openGraph: {
    title: "Услуги детейлинга в Витебске | Ambadetail",
    description: "Полный спектр профессиональных услуг детейлинга в Витебске.",
    url: "https://ambadetail.by/uslugi",
    images: ["/images/services/bugatti.webp"],
  },
  alternates: {
    canonical: "https://ambadetail.by/uslugi",
  },
};

export default function UslugiPage() {
  return <UslugiClient />;
}
