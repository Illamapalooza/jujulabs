import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "jujulabs — Julius Baliling",
  description:
    "Portfolio of Julius Baliling — Fullstack Product and Application Engineer. Building products with React, Next.js, TypeScript, and Node.js.",
  metadataBase: new URL("https://jujulabs.co"),
  openGraph: {
    title: "jujulabs — Julius Baliling",
    description:
      "Fullstack Product and Application Engineer. 3+ years experience building web applications.",
    url: "https://jujulabs.co",
    siteName: "jujulabs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "jujulabs — Julius Baliling",
    description:
      "Fullstack Product and Application Engineer. 3+ years experience building web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
