// import type { Metadata } from "next";
// import { ThemeProvider } from "@/components/theme-provider";
// import Header from "@/components/layout/header/Header";
// import Footer from "@/components/layout/footer/Footer";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: "AMBADETAIL | Диагностика и ремонт дизельных двигателей",
//   description: "Профессиональное диагностическое оборудование. Полная компьютерная диагностика перед ремонтом дизельных двигателей.",
//   keywords: "диагностика дизеля, СТО, компьютерная диагностика, ремонт дизельных двигателей, AMBADETAIL",
//   authors: [{ name: "AMBADETAIL" }],
//   viewport: {
//     width: "device-width",
//     initialScale: 1,
//     maximumScale: 5,
//     userScalable: true,
//   },
//   openGraph: {
//     title: "AMBADETAIL - Диагностика дизельных двигателей",
//     description: "Профессиональное диагностическое оборудование. Полная компьютерная диагностика перед ремонтом.",
//     type: "website",
//     locale: "ru_RU",
//     siteName: "AMBADETAIL",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="ru" suppressHydrationWarning>
//       <body>
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//           <Header />
//           <main style={{ minHeight: "100vh", paddingTop: "130px" }}>
//             {children}
//           </main>
//           <Footer />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "AMBADETAIL | Диагностика и ремонт дизельных двигателей",
  description:
    "Профессиональное диагностическое оборудование. Полная компьютерная диагностика перед ремонтом дизельных двигателей.",
  keywords:
    "диагностика дизеля, СТО, компьютерная диагностика, ремонт дизельных двигателей, AMBADETAIL",
  authors: [{ name: "AMBADETAIL" }],
  openGraph: {
    title: "AMBADETAIL - Диагностика дизельных двигателей",
    description:
      "Профессиональное диагностическое оборудование. Полная компьютерная диагностика перед ремонтом.",
    type: "website",
    locale: "ru_RU",
    siteName: "AMBADETAIL",
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
