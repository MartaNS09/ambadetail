type FaqItem = { question: string; answer: string };

type ServiceSchemaOptions = {
  name: string;
  description: string;
  url: string;
  image: string;
  serviceType: string;
  priceFrom?: string;
};

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceSchema({
  name,
  description,
  url,
  image,
  serviceType,
  priceFrom,
}: ServiceSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    description,
    url,
    image,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://ambadetail.by/#localbusiness",
      name: "Ambadetail",
      telephone: "+375292230322",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ул. П. Бровки, 6А",
        addressLocality: "Витебск",
        addressRegion: "Витебская область",
        addressCountry: "BY",
        postalCode: "210020",
      },
    },
    areaServed: [
      { "@type": "City", name: "Витебск" },
      { "@type": "AdministrativeArea", name: "Витебская область" },
    ],
    ...(priceFrom
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "BYN",
            price: priceFrom,
            availability: "https://schema.org/InStock",
            url,
          },
        }
      : {}),
  };
}

export function faqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
