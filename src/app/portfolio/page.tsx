import { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Портфолио работ | Детейлинг студия Ambadetail в Витебске",
  description:
    "Портфолио работ детейлинг студии Ambadetail в Витебске. Реальные примеры: оклейка плёнкой, химчистка салона, полировка, тонировка. Фото и видео выполненных проектов.",
  keywords:
    "портфолио детейлинг витебск, работы детейлинг студии витебск, примеры оклейки авто витебск",
  openGraph: {
    title: "Портфолио детейлинг студии в Витебске | Ambadetail",
    description:
      "Реальные работы детейлинг студии Ambadetail в Витебске. Фото и видео до/после.",
    url: "https://ambadetail.vercel.app/portfolio",
    images: ["/images/og-image.jpg"], // ✅ ЭТА КАРТИНКА ЕСТЬ!
  },
  alternates: {
    canonical: "https://ambadetail.vercel.app/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
