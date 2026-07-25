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
    "Профессиональный детейлинг автомобилей в Витебске: химчистка салона, полировка кузова, оклейка плёнкой, тонировка, защитные покрытия.",
  keywords:
    "детейлинг витебск, детейлинг студия витебск, химчистка салона витебск, полировка авто витебск, оклейка пленкой витебск, тонировка витебск",
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
    title: "Ambadetail - Детейлинг студия в Витебске",
    description:
      "Профессиональный уход за автомобилем: от химчистки до оклейки защитной плёнкой",
    url: "https://ambadetail.by",
    siteName: "Ambadetail",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ambadetail Детейлинг студия",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ambadetail - Детейлинг студия",
    description: "Профессиональный уход за автомобилем",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#000000",
};

// ===== УЛУЧШЕННАЯ СХЕМА (LocalBusiness вместо AutoRepair) =====
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness", // ← ИЗМЕНЕНО! Теперь LocalBusiness
  "@id": "https://ambadetail.by/#localbusiness",
  name: "Ambadetail",
  alternateName: "Детейлинг студия Ambadetail",
  description:
    "Профессиональная детейлинг студия в Витебске. Химчистка салона, полировка кузова, оклейка пленкой, тонировка, защитные покрытия.",
  url: "https://ambadetail.by", // ← ИСПРАВЛЕНО! Теперь ваш домен, а не vercel.app
  telephone: "+375292230322",
  email: "info@ambadetail.by",
  priceRange: "$$",
  image: "https://ambadetail.by/images/og-image.jpg",
  logo: "https://ambadetail.by/favicon.ico",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. П. Бровки, 6А",
    addressLocality: "Витебск",
    addressCountry: "BY",
    postalCode: "210020", // ← ДОБАВЛЕНО!
  },
  geo: {
    // ← НОВЫЙ БЛОК! Координаты для карты
    "@type": "GeoCoordinates",
    latitude: 55.173057,
    longitude: 30.24579,
  },
  areaServed: {
    "@type": "City",
    name: "Витебск",
  },
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
  sameAs: [
    "https://www.instagram.com/ambassador__detailing",
    "https://www.tiktok.com/@ambassador___detailing",
    "https://youtube.com/@ambadetail", // ← ДОБАВЛЕНО!
    "https://t.me/ambadetail", // ← ДОБАВЛЕНО!
    "https://vk.com/ambadetail", // ← ДОБАВЛЕНО!
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
