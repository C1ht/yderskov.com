import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
    url: "https://yderskov.dk/",
    siteName: "Yderskov Arkitekter",
    images: [{ url: "https://yderskov.dk/images/topbanner-new.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
