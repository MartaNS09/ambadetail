import { Metadata } from "next";
import LkpClient from "./LkpClient";

export const metadata: Metadata = {
  title: "Восстановление ЛКП в Витебске | Refiller F5 | Ambadetail",
  description:
    "Восстановление лакокрасочного покрытия автомобиля в Витебске по технологии Refiller F5. Удаление царапин, сколов, восстановление блеска.",
  keywords:
    "восстановление ЛКП витебск, Refiller F5, восстановление лакокрасочного покрытия",
  openGraph: {
    title: "Восстановление ЛКП в Витебске | Ambadetail",
    description:
      "Восстановление лакокрасочного покрытия по технологии Refiller F5.",
    url: "https://ambadetail.vercel.app/uslugi/vosstanovlenie-lkp",
    images: ["/images/services/bugatti.webp"],
  },
  alternates: {
    canonical: "https://ambadetail.vercel.app/uslugi/vosstanovlenie-lkp",
  },
};

export default function LkpPage() {
  return <LkpClient />;
}
