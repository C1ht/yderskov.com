import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MobileCta from "@/components/MobileCta";
import BackToTop from "@/components/BackToTop";

const inter = localFont({
  src: "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--sans",
});

export const metadata: Metadata = {
  title: "Arkitekt til villa, sommerhus og tilbygning — Yderskov Arkitekter",
  description:
    "Arkitekttegnede villaer, sommerhuse og tilbygninger med fast pris og egne håndværkere. Gratis første møde. Se projekter og priser.",
  openGraph: {
    type: "website",
    locale: "da_DK",
    url: "https://yderskov.com/",
    siteName: "Yderskov Arkitekter",
    images: [{ url: "https://yderskov.com/images/topbanner-new.webp" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className={inter.variable} data-scroll-behavior="smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/icon-512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-friendly version" />
        <link rel="preconnect" href="https://black-unit-19e0.antonyderskov.workers.dev" />
      </head>
      <body>
        {children}
        <MobileCta />
        <BackToTop />
      </body>
    </html>
  );
}

