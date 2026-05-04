import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "EU Compliance & Carbon Reporting Automation for SMEs | GreenAI",
  description:
    "Automate CSRD, ESRS, and carbon reporting with GreenAI. Map NACE obligations, track EU regulations, and generate audit-ready sustainability outputs in minutes.",
  keywords: [
    "CSRD reporting",
    "ESRS compliance",
    "NACE code",
    "carbon accounting",
    "EU sustainability reporting",
    "SME compliance automation",
    "VSME reporting",
    "Scope 1 2 3 emissions",
    "EU Taxonomy",
    "double materiality",
  ],
  authors: [{ name: "GreenAI Analytics" }],
  creator: "GreenAI Analytics",
  publisher: "GreenAI Analytics",
  metadataBase: new URL("https://greenaianalytics.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EU Compliance & Carbon Reporting Automation for SMEs | GreenAI",
    description:
      "Automate CSRD, ESRS, and carbon reporting with GreenAI. Map NACE obligations, track EU regulations, and generate audit-ready sustainability outputs in minutes.",
    url: "https://greenaianalytics.org",
    siteName: "GreenAI Analytics",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 720,
        height: 240,
        alt: "GreenAI Analytics — EU Compliance & Carbon Reporting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EU Compliance & Carbon Reporting Automation for SMEs | GreenAI",
    description:
      "Automate CSRD, ESRS, and carbon reporting with GreenAI. Map NACE obligations, track EU regulations, and generate audit-ready sustainability outputs in minutes.",
    images: ["/logo.png"],
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} text-slate-900 antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <JsonLd />
      </body>
    </html>
  );
}
