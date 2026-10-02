import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import CookieBanner from "@/components/ui/CookieBanner";
import "./globals.css";
import "./not-found.scss";
import MobileBottomNav from "@/components/layout/mobile/MobileBottomNav";
import RegisterServiceWorker from "@/components/pwa/RegisterServiceWorker";

export const metadata: Metadata = {
  metadataBase: new URL("https://ambadetail.by"),
  title: {
    default: "Детейлинг студия в Витебске | Ambadetail",
    template: "%s | Ambadetail",
  },
  description:
    "Оклейка авто плёнкой от 660 BYN и тонировка по ГОСТ от 330 BYN в Витебске. Ambadetail, ул. П. Бровки, 6А. Пн–Пт 10:00–19:00, Сб–Вс 10:00–17:00. +375 29 223 03 22.",
  other: {
    "geo.region": "BY-VI",
    "geo.placename": "Витебск",
    "geo.position": "55.173057;30.24579",
    ICBM: "55.173057, 30.24579",
  },
  applicationName: "Ambadetail",
  appleWebApp: {
    capable: true,
    title: "Ambadetail",
    statusBarStyle: "black-translucent",
  },
  keywords:
    "детейлинг витебск, детейлинг студия витебск, химчистка салона витебск, полировка авто витебск, оклейка пленкой витебск, тонировка витебск, тонировка по гост витебск, керамика авто витебск, ppf витебск",
  authors: [{ name: "Ambadetail" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Ambadetail — Детейлинг студия в Витебске",
    description:
      "Химчистка, полировка, PPF, тонировка по ГОСТ, керамика и восстановление ЛКП в Витебске.",
    url: "https://ambadetail.by",
    siteName: "Ambadetail — Детейлинг в Витебске",
    locale: "ru_BY",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ambadetail — детейлинг студия в Витебске",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ambadetail — Детейлинг студия в Витебске",
    description:
      "Профессиональный уход за автомобилем в Витебске: от химчистки до PPF и тонировки по ГОСТ",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://ambadetail.by",
    types: {
      "text/plain": [
        { url: "/llms.txt", title: "Факты Ambadetail для ИИ" },
        { url: "/llms-full.txt", title: "Полные факты Ambadetail для ИИ" },
      ],
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#000000",
};

// ===== LocalBusiness + каталог услуг для локального SEO Витебск =====
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["AutomotiveBusiness", "LocalBusiness"],
  "@id": "https://ambadetail.by/#localbusiness",
  name: "Ambadetail",
  alternateName: ["Ambassador Detailing", "Детейлинг студия Ambadetail Витебск"],
  legalName: "ООО «СервисЛинк»",
  taxID: "392001662",
  description:
    "Детейлинг студия Ambadetail в Витебске на ул. П. Бровки, 6А: оклейка плёнкой от 660 BYN, тонировка по ГОСТ от 330 BYN, химчистка салона от 708 BYN, полировка, керамика, восстановление ЛКП и детейлинг двигателя. Рассрочка до 5 месяцев без переплат.",
  url: "https://ambadetail.by",
  telephone: "+375292230322",
  email: "info@ambadetail.by",
  priceRange: "$$",
  currenciesAccepted: "BYN",
  paymentAccepted:
    "наличные, банковская карта, рассрочка до 5 месяцев без переплат",
  hasMap: "https://yandex.by/maps/org/ambassador_detailing/104758157236/",
  knowsLanguage: "ru",
  image: "https://ambadetail.by/images/og-image.jpg",
  logo: "https://ambadetail.by/favicon.ico",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. П. Бровки, 6А",
    addressLocality: "Витебск",
    addressRegion: "Витебская область",
    addressCountry: "BY",
    postalCode: "210020",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.173057,
    longitude: 30.24579,
  },
  areaServed: [
    { "@type": "City", name: "Витебск" },
    { "@type": "AdministrativeArea", name: "Витебская область" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "10:00",
      closes: "17:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Услуги детейлинга в Витебске",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Химчистка салона",
          url: "https://ambadetail.by/uslugi/khimchistka-salona",
        },
        priceCurrency: "BYN",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "BYN",
          minPrice: "708",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Оклейка авто плёнкой",
          url: "https://ambadetail.by/uslugi/okleyka-auto-plenkoy",
        },
        priceCurrency: "BYN",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "BYN",
          minPrice: "660",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Полировка авто",
          url: "https://ambadetail.by/uslugi/polirovka",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Тонировка авто по ГОСТ",
          url: "https://ambadetail.by/uslugi/tonirovka",
        },
        priceCurrency: "BYN",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "BYN",
          minPrice: "330",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Защитные покрытия",
          url: "https://ambadetail.by/uslugi/zashhitnye-pokrytiya",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Восстановление ЛКП",
          url: "https://ambadetail.by/uslugi/vosstanovlenie-lkp",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Детейлинг двигателя",
          url: "https://ambadetail.by/uslugi/detailing-dvigatelya",
        },
      },
    ],
  },
  potentialAction: {
    "@type": "ReserveAction",
    name: "Записаться на детейлинг",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://ambadetail.by/zapisatsya",
    },
  },
  sameAs: [
    "https://yandex.by/maps/org/ambassador_detailing/104758157236/",
    "https://www.instagram.com/ambassador__detailing",
    "https://www.tiktok.com/@ambassador___detailing",
    "https://youtube.com/@ambadetail",
    "https://t.me/ambadetail",
    "https://vk.com/ambadetail",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://ambadetail.by/#website",
  name: "Ambadetail",
  alternateName: "Детейлинг студия в Витебске",
  url: "https://ambadetail.by",
  inLanguage: "ru-BY",
  publisher: { "@id": "https://ambadetail.by/#localbusiness" },
  about: { "@id": "https://ambadetail.by/#localbusiness" },
  hasPart: [
    { "@type": "WebPage", name: "Услуги", url: "https://ambadetail.by/uslugi" },
    {
      "@type": "WebPage",
      name: "Оклейка авто плёнкой",
      url: "https://ambadetail.by/uslugi/okleyka-auto-plenkoy",
    },
    {
      "@type": "WebPage",
      name: "Тонировка по ГОСТ",
      url: "https://ambadetail.by/uslugi/tonirovka",
    },
    {
      "@type": "WebPage",
      name: "Химчистка салона",
      url: "https://ambadetail.by/uslugi/khimchistka-salona",
    },
    {
      "@type": "WebPage",
      name: "Записаться",
      url: "https://ambadetail.by/zapisatsya",
    },
    {
      "@type": "WebPage",
      name: "Контакты",
      url: "https://ambadetail.by/contacts",
    },
  ],
};

const sitelinksJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://ambadetail.by/#sitelinks",
  name: "Основные разделы Ambadetail",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: 8,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Оклейка авто плёнкой",
      url: "https://ambadetail.by/uslugi/okleyka-auto-plenkoy",
      item: {
        "@type": "SiteNavigationElement",
        name: "Оклейка авто плёнкой",
        url: "https://ambadetail.by/uslugi/okleyka-auto-plenkoy",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Тонировка по ГОСТ",
      url: "https://ambadetail.by/uslugi/tonirovka",
      item: {
        "@type": "SiteNavigationElement",
        name: "Тонировка по ГОСТ",
        url: "https://ambadetail.by/uslugi/tonirovka",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Химчистка салона",
      url: "https://ambadetail.by/uslugi/khimchistka-salona",
      item: {
        "@type": "SiteNavigationElement",
        name: "Химчистка салона",
        url: "https://ambadetail.by/uslugi/khimchistka-salona",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Все услуги",
      url: "https://ambadetail.by/uslugi",
      item: {
        "@type": "SiteNavigationElement",
        name: "Все услуги",
        url: "https://ambadetail.by/uslugi",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Портфолио",
      url: "https://ambadetail.by/portfolio",
      item: {
        "@type": "SiteNavigationElement",
        name: "Портфолио",
        url: "https://ambadetail.by/portfolio",
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Записаться",
      url: "https://ambadetail.by/zapisatsya",
      item: {
        "@type": "SiteNavigationElement",
        name: "Записаться",
        url: "https://ambadetail.by/zapisatsya",
      },
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "Контакты",
      url: "https://ambadetail.by/contacts",
      item: {
        "@type": "SiteNavigationElement",
        name: "Контакты",
        url: "https://ambadetail.by/contacts",
      },
    },
    {
      "@type": "ListItem",
      position: 8,
      name: "О нас",
      url: "https://ambadetail.by/about",
      item: {
        "@type": "SiteNavigationElement",
        name: "О нас",
        url: "https://ambadetail.by/about",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          id="schema-sitelinks"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(sitelinksJsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="site-main">{children}</main>
          <Footer />
          <MobileBottomNav />
          <CookieBanner />
          <RegisterServiceWorker />
        </ThemeProvider>
      </body>
    </html>
  );
}
