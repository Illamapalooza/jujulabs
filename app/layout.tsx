import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
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
    images: [{ url: "/og-image.png", width: 1920, height: 640 }],
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
  verification: {
    other: {
      "facebook-domain-verification": "r32avyba3hpm7n03ijur6hz1f9plj1",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${instrumentSans.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
