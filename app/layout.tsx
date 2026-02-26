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
    "Portfolio of Julius Baliling — Fullstack Engineer & Agentic Systems Builder. Building products with modern web stacks, AI agents, and compound engineering.",
  metadataBase: new URL("https://jujulabs.co"),
  openGraph: {
    title: "jujulabs — Julius Baliling",
    description:
      "Fullstack Engineer & Agentic Systems Builder. 3+ years building web apps, AI agents, and compound systems.",
    url: "https://jujulabs.co",
    siteName: "jujulabs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "jujulabs — Julius Baliling",
    description:
      "Fullstack Engineer & Agentic Systems Builder. 3+ years building web apps, AI agents, and compound systems.",
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
