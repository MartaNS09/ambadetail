import { Metadata } from "next";
import KhimchistkaClient from "./KhimchistkaClient";
import {
  breadcrumbSchema,
  serviceSchema,
  faqPageSchema,
} from "@/lib/seo-schemas";

const pageUrl = "https://ambadetail.by/uslugi/khimchistka-salona";
const pageImage = "https://ambadetail.by/images/services/salon.webp";

export const metadata: Metadata = {
  title: "Химчистка салона авто в Витебске | Детейлинг, удаление запахов",
  description:
    "Химчистка салона автомобиля в Витебске: кожа, ткань, алькантара. Удаление пятен и запахов, озонирование, детейлинг салона. Ambadetail, ул. П. Бровки, 6А. Запись: +375 29 223 03 22",
  keywords:
    "химчистка салона витебск, химчистка авто витебск, чистка салона авто, удаление запахов из салона, детейлинг салона витебск, химчистка кожаного салона, химчистка тканевого салона, озонирование салона витебск, цена химчистки салона витебск",
  openGraph: {
    title: "Химчистка салона авто в Витебске | Ambadetail",
    description:
      "Глубокая химчистка салона в Витебске: пятна, запахи, озонирование. Кожа, ткань, алькантара. Гарантия до 6 месяцев.",
    url: pageUrl,
    siteName: "Ambadetail",
    images: [
      {
        url: "/images/services/salon.webp",
        width: 1200,
        height: 630,
        alt: "Химчистка салона автомобиля в Витебске — Ambadetail",
      },
    ],
    locale: "ru_BY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Химчистка салона авто в Витебске | Ambadetail",
    description:
      "Химчистка салона в Витебске: удаление пятен и запахов, озонирование, детейлинг салона.",
    images: ["/images/services/salon.webp"],
  },
  alternates: {
    canonical: pageUrl,
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Главная", url: "https://ambadetail.by/" },
  { name: "Услуги", url: "https://ambadetail.by/uslugi" },
  { name: "Химчистка салона", url: pageUrl },
]);

const service = serviceSchema({
  name: "Химчистка салона автомобиля в Витебске",
  serviceType: "Химчистка салона автомобиля",
  description:
    "Профессиональная химчистка салона автомобиля в Витебске: глубокая чистка кожи, ткани и алькантары, удаление пятен и запахов, озонирование.",
  url: pageUrl,
  image: pageImage,
});

const faq = faqPageSchema([
  {
    question:
      "Сколько времени занимает химчистка салона и сколько сохнет салон?",
    answer:
      "Время зависит от загрязнений и объёма работ. После химчистки требуется сушка — обычно подбираем режим так, чтобы салон как можно быстрее был готов к эксплуатации.",
  },
  {
    question: "Удаляете ли запахи (табак, сырость, животные)?",
    answer:
      "Да, работаем с источником запаха и подбираем безопасные средства по материалам салона. Результат зависит от причины и давности запаха.",
  },
  {
    question: "Чистите ли потолок, багажник и ремни безопасности?",
    answer:
      "Да, выполняем чистку потолка, багажника и отдельных элементов. Итоговая стоимость зависит от класса авто и выбранного комплекса.",
  },
  {
    question: "Безопасно ли это для кожи и пластика?",
    answer:
      "Используем составы и технологии для автомобильных материалов. Подбираем химию под тип кожи/текстиля и степень загрязнения.",
  },
  {
    question: "Можно ли сделать локальную химчистку?",
    answer:
      "Да, делаем локальную химчистку и удаление пятен. По фото или осмотру подскажем, что эффективнее — локально или комплексом.",
  },
]);

export default function KhimchistkaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <KhimchistkaClient />
    </>
  );
}
