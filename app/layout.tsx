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
  title: "jujulabs — Engineering Studio",
  description:
    "Independent engineering studio building web applications, agentic AI systems, and workflow automation. Based in the Philippines.",
  metadataBase: new URL("https://jujulabs.co"),
  openGraph: {
    title: "jujulabs — Engineering Studio",
    description:
      "Web apps, agentic systems, and automation — engineered to ship.",
    url: "https://jujulabs.co",
    siteName: "jujulabs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "jujulabs — Engineering Studio",
    description:
      "Web apps, agentic systems, and automation — engineered to ship.",
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
