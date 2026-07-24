import { Metadata } from "next";
import DetailingClient from "./DetailingClient";

export const metadata: Metadata = {
  title: "Детейлинг двигателя в Витебске | Чистка мотора | Ambadetail",
  description:
    "Профессиональный детейлинг двигателя в Витебске. Безопасная чистка мотора, мойка подкапотного пространства, восстановление пластика и резины.",
  keywords:
    "детейлинг двигателя витебск, чистка двигателя авто, мойка мотора, чистка подкапотного пространства",
  openGraph: {
    title: "Детейлинг двигателя в Витебске | Ambadetail",
    description: "Профессиональная чистка двигателя автомобиля в Витебске.",
    url: "https://ambadetail.by/uslugi/detailing-dvigatelya",
    images: ["/images/services/detailing_dvigatelya.webp"],
  },
  alternates: {
    canonical: "https://ambadetail.by/uslugi/detailing-dvigatelya",
  },
};

export default function DetailingPage() {
  return <DetailingClient />;
}
