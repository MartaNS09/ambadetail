import { Metadata } from "next";

import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Блог о детейлинге в Витебске | Полезные статьи | Ambadetail",
  description:
    "Полезные статьи о детейлинге автомобилей в Витебске: оклейка плёнкой, тонировка, полировка, химчистка салона. Советы и рекомендации от профессионалов.",
  keywords:
    "блог детейлинг витебск, статьи оклейка авто, тонировка витебск, полировка кузова, химчистка салона",
  openGraph: {
    title: "Блог о детейлинге в Витебске | Ambadetail",
    description:
      "Полезные статьи о детейлинге автомобилей в Витебске. Советы от профессионалов.",
    url: "https://ambadetail.by/blog",
    images: ["/images/services/bugatti.webp"],
  },
  alternates: {
    canonical: "https://ambadetail.by/blog",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
