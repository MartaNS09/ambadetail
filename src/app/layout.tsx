import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import CookieBanner from "@/components/ui/CookieBanner";
import Script from "next/script";
import "./globals.css";
import MobileBottomNav from "@/components/layout/mobile/MobileBottomNav";

export const metadata: Metadata = {
  metadataBase: new URL("https://ambadetail.vercel.app"),
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
    url: "https://ambadetail.vercel.app",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Ambadetail",
  alternateName: "Детейлинг студия Ambadetail",
  url: "https://ambadetail.vercel.app",
  telephone: "+375292230322",
  email: "info@ambadetail.by",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. П. Бровки, 6А",
    addressLocality: "Витебск",
    addressCountry: "BY",
  },
  areaServed: { "@type": "City", name: "Витебск" },
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
