import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import CookieBanner from "@/components/ui/CookieBanner";
import Script from "next/script";
import "./globals.css";
import MobileBottomNav from "@/components/layout/mobile/MobileBottomNav";

export const metadata: Metadata = {
  metadataBase: new URL("https://ambadetail.by"),
  title: {
    default: "Ambadetail | Детейлинг студия в Витебске",
    template: "%s | Ambadetail",
  },
  description:
    "Детейлинг студия в Витебске: химчистка салона, полировка кузова, оклейка плёнкой PPF, тонировка по ГОСТ, керамика, восстановление ЛКП. Ambadetail — ул. П. Бровки, 6А.",
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
    siteName: "Ambadetail",
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
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://ambadetail.by",
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
  "@type": "LocalBusiness",
  "@id": "https://ambadetail.by/#localbusiness",
  name: "Ambadetail",
  alternateName: "Детейлинг студия Ambadetail Витебск",
  description:
    "Детейлинг студия в Витебске: химчистка салона, полировка кузова, оклейка плёнкой PPF, тонировка по ГОСТ РБ и РФ, керамика, восстановление ЛКП, детейлинг двигателя.",
  url: "https://ambadetail.by",
  telephone: "+375292230322",
  email: "info@ambadetail.by",
  priceRange: "$$",
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
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Оклейка авто плёнкой",
          url: "https://ambadetail.by/uslugi/okleyka-auto-plenkoy",
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
  sameAs: [
    "https://www.instagram.com/ambassador__detailing",
    "https://www.tiktok.com/@ambassador___detailing",
    "https://youtube.com/@ambadetail",
    "https://t.me/ambadetail",
    "https://vk.com/ambadetail",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main style={{ minHeight: "100vh", paddingTop: "130px" }}>
            {children}
          </main>
          <Footer />
          <MobileBottomNav />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
