import { Metadata } from "next";
import DetailingClient from "./DetailingClient";

export const metadata: Metadata = {
  title:
    "Детейлинг двигателя в Витебске | Чистка мотора, мойка подкапотного пространства | Ambadetail",
  description:
    "Профессиональный детейлинг двигателя в Витебске. Безопасная чистка мотора, мойка подкапотного пространства, восстановление пластика и резины. Запишитесь на консультацию.",
  keywords:
    "детейлинг двигателя витебск, чистка двигателя авто, мойка мотора, чистка подкапотного пространства, восстановление пластика под капотом",
  openGraph: {
    title:
      "Детейлинг двигателя в Витебске | Чистка мотора, мойка подкапотного пространства | Ambadetail",
    description:
      "Профессиональный детейлинг двигателя в Витебске. Безопасная чистка мотора, мойка подкапотного пространства, восстановление пластика и резины. Запишитесь на консультацию.",
    url: "https://ambadetail.by/uslugi/detailing-dvigatelya",
    siteName: "Ambadetail",
    images: [
      {
        url: "/images/services/detailing_dvigatelya.webp",
        width: 1200,
        height: 630,
        alt: "Детейлинг двигателя в Витебске — чистка мотора",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Детейлинг двигателя в Витебске | Чистка мотора, мойка подкапотного пространства | Ambadetail",
    description:
      "Профессиональный детейлинг двигателя в Витебске. Безопасная чистка мотора, мойка подкапотного пространства, восстановление пластика и резины. Запишитесь на консультацию.",
    images: ["/images/services/detailing_dvigatelya.webp"],
  },
  alternates: {
    canonical: "https://ambadetail.by/uslugi/detailing-dvigatelya",
  },
};

export default function DetailingPage() {
  return <DetailingClient />;
}
