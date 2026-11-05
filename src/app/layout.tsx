import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import LenisProvider from "@/components/LenisProvider";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mujeebtw.com"),
  title: "Mujeeb Tailoring Workshop | Bespoke Uniforms & Garments — Ajman, UAE",
  description:
    "Bespoke uniform and corporate garment manufacturer in Ajman, UAE. Almost 40 years of craftsmanship in cutting, stitching, embroidery and printing — from school uniforms to industrial coveralls since 2003.",
  keywords: [
    "Mujeeb Tailoring Workshop",
    "uniform manufacturer Ajman",
    "bespoke uniforms UAE",
    "corporate wear manufacturer",
    "lab coats supplier UAE",
    "coveralls manufacturer",
    "custom embroidery Ajman",
    "DTF printing UAE",
    "sublimation printing Ajman",
  ],
  openGraph: {
    title: "Mujeeb Tailoring Workshop | Crafting Excellence in Every Stitch",
    description:
      "Over 40 years of garment manufacturing heritage. Custom uniforms, corporate wear, embroidery and printing — made in Ajman, UAE since 2003.",
    type: "website",
    locale: "en_AE",
    siteName: "Mujeeb Tailoring Workshop",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} bg-white font-sans text-ink antialiased overflow-x-hidden`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
