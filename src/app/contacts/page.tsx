import { Metadata } from "next";
import ContactsClient from "./ContactsClient";

export const metadata: Metadata = {
  title: "Контакты | Детейлинг студия Ambadetail в Витебске",
  description:
    "Контакты детейлинг студии Ambadetail в Витебске: адрес, телефон, время работы. Запись на оклейку плёнкой, восстановление ЛКП и химчистку салона.",
  keywords:
    "контакты ambadetail, детейлинг витебск контакты, запись на детейлинг витебск",
  openGraph: {
    title: "Контакты детейлинг студии в Витебске | Ambadetail",
    description: "Свяжитесь с нами: адрес, телефон, время работы.",
    url: "https://ambadetail.vercel.app/contacts",
    images: ["/images/home1.jpg"],
  },
  alternates: {
    canonical: "https://ambadetail.vercel.app/contacts",
  },
};

export default function ContactsPage() {
  return <ContactsClient />;
}
