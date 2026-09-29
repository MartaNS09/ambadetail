import type { Metadata } from "next";
import { Suspense } from "react";
import BookingClient from "./BookingClient";
import { breadcrumbSchema } from "@/lib/seo-schemas";

const pageUrl = "https://ambadetail.by/zapisatsya";

export const metadata: Metadata = {
  title: "Записаться на детейлинг в Витебске",
  description:
    "Онлайн-запись в детейлинг студию Ambadetail в Витебске. Выберите услугу: химчистка, полировка, оклейка плёнкой, тонировка, керамика. +375 29 223 03 22",
  keywords:
    "записаться на детейлинг витебск, запись на оклейку авто витебск, запись на химчистку салона, ambadetail запись",
  openGraph: {
    title: "Записаться на детейлинг в Витебске | Ambadetail",
    description:
      "Оставьте заявку на услугу детейлинга в Витебске. Менеджер свяжется с вами в ближайшее время.",
    url: pageUrl,
    siteName: "Ambadetail — Детейлинг в Витебске",
    locale: "ru_BY",
    type: "website",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: pageUrl,
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Главная", url: "https://ambadetail.by/" },
  { name: "Записаться", url: pageUrl },
]);

export default function BookingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <Suspense fallback={null}>
        <BookingClient />
      </Suspense>
    </>
  );
}
