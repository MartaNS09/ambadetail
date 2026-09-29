import { Metadata } from "next";
import DetailingClient from "./DetailingClient";
import {
  breadcrumbSchema,
  serviceSchema,
  faqPageSchema,
} from "@/lib/seo-schemas";

const pageUrl = "https://ambadetail.by/uslugi/detailing-dvigatelya";
const pageImage =
  "https://ambadetail.by/images/services/detailing_dvigatelya.webp";

export const metadata: Metadata = {
  title: "Детейлинг двигателя в Витебске | Чистка мотора и подкапотного",
  description:
    "Детейлинг двигателя в Витебске: безопасная чистка мотора, мойка подкапотного пространства, защита электроники. Ambadetail, ул. П. Бровки, 6А. +375 29 223 03 22",
  keywords:
    "детейлинг двигателя витебск, чистка двигателя авто витебск, мойка мотора витебск, чистка подкапотного пространства, мойка двигателя витебск",
  openGraph: {
    title: "Детейлинг двигателя в Витебске | Ambadetail",
    description:
      "Безопасная чистка двигателя и подкапотного пространства в Витебске с защитой электроники.",
    url: pageUrl,
    siteName: "Ambadetail",
    images: [
      {
        url: "/images/services/detailing_dvigatelya.webp",
        width: 1200,
        height: 630,
        alt: "Детейлинг двигателя в Витебске — чистка мотора",
      },
    ],
    locale: "ru_BY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Детейлинг двигателя в Витебске | Ambadetail",
    description:
      "Чистка мотора и подкапотного пространства в Витебске — безопасно для электроники.",
    images: ["/images/services/detailing_dvigatelya.webp"],
  },
  alternates: {
    canonical: pageUrl,
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Главная", url: "https://ambadetail.by/" },
  { name: "Услуги", url: "https://ambadetail.by/uslugi" },
  { name: "Детейлинг двигателя", url: pageUrl },
]);

const service = serviceSchema({
  name: "Детейлинг двигателя в Витебске",
  serviceType: "Детейлинг двигателя",
  description:
    "Профессиональный детейлинг двигателя в Витебске: безопасная чистка моторного отсека, мойка подкапотного пространства, восстановление пластика и резины.",
  url: pageUrl,
  image: pageImage,
});

const faq = faqPageSchema([
  {
    question: "Не вредно ли мыть двигатель?",
    answer:
      "При профессиональном подходе мойка двигателя абсолютно безопасна. Мы используем специальные средства, защищаем электронику, контролируем температуру и давление воды.",
  },
  {
    question: "Сколько времени занимает детейлинг двигателя?",
    answer:
      "Время зависит от степени загрязнения: экспресс-чистка — 1,5-2 часа, стандартная — 3-4 часа, глубокая чистка — 4-6 часов.",
  },
  {
    question: "Можно ли мыть двигатель зимой?",
    answer:
      "Да, мы работаем круглый год. Зимой особенно важно удалять реагенты и соль.",
  },
  {
    question: "Можно ли мыть гибридные и электрические автомобили?",
    answer:
      "Да, мы имеем опыт работы с гибридами и электромобилями. Используем специальные технологии.",
  },
]);

export default function DetailingPage() {
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
      <DetailingClient />
    </>
  );
}
