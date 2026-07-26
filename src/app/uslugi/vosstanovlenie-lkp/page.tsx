import { Metadata } from "next";
import LkpClient from "./LkpClient";

export const metadata: Metadata = {
  title:
    "Восстановление ЛКП в Витебске | Refiller F5, удаление царапин | Ambadetail",
  description:
    "Восстановление лакокрасочного покрытия автомобиля в Витебске по технологии Refiller F5. Удаление царапин, сколов, восстановление блеска. Запишитесь на консультацию.",
  keywords:
    "восстановление ЛКП витебск, Refiller F5, восстановление лакокрасочного покрытия, удаление сколов, восстановление цвета авто",
  openGraph: {
    title:
      "Восстановление ЛКП в Витебске | Refiller F5, удаление царапин | Ambadetail",
    description:
      "Восстановление лакокрасочного покрытия автомобиля в Витебске по технологии Refiller F5. Удаление царапин, сколов, восстановление блеска. Запишитесь на консультацию.",
    url: "https://ambadetail.by/uslugi/vosstanovlenie-lkp",
    siteName: "Ambadetail",
    images: [
      {
        url: "/images/services/bugatti.webp",
        width: 1200,
        height: 630,
        alt: "Восстановление ЛКП в Витебске — Refiller F5",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Восстановление ЛКП в Витебске | Refiller F5, удаление царапин | Ambadetail",
    description:
      "Восстановление лакокрасочного покрытия автомобиля в Витебске по технологии Refiller F5. Удаление царапин, сколов, восстановление блеска. Запишитесь на консультацию.",
    images: ["/images/services/bugatti.webp"],
  },
  alternates: {
    canonical: "https://ambadetail.by/uslugi/vosstanovlenie-lkp",
  },
};

export default function LkpPage() {
  return <LkpClient />;
}
