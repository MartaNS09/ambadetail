import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ambadetail | Детейлинг студия в Витебске",
  description:
    "Профессиональный детейлинг автомобилей в Витебске: химчистка салона, полировка кузова, оклейка плёнкой, тонировка, защитные покрытия. Опытные мастера, гарантия качества.",
  keywords:
    "детейлинг, детейлинг студия, химчистка салона, полировка авто, оклейка плёнкой, тонировка, Витебск, Ambadetail",
  authors: [{ name: "Ambadetail" }],
  robots: "index, follow",
  openGraph: {
    title: "Ambadetail - Детейлинг студия в Витебске",
    description:
      "Профессиональный уход за автомобилем: от химчистки до оклейки защитной плёнкой",
    url: "https://ambadetail.vercel.app",
    siteName: "Ambadetail",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ambadetail - Детейлинг студия",
    description: "Профессиональный уход за автомобилем",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main style={{ minHeight: "100vh", paddingTop: "130px" }}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
