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

const SITE_URL = "https://mujeeb-tailor-workshop.vercel.app";
const HERO_IMAGE =
  "https://images.pexels.com/photos/19340518/pexels-photo-19340518.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1600&w=2400";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Mujeeb Tailoring Workshop | Premium Uniform Manufacturer in Ajman, UAE",
  description:
    "Over 40 years of garment manufacturing heritage. Custom uniforms, corporate wear, lab coats, coveralls, and embroidery/printing in Ajman, UAE. Bulk & bespoke orders.",
  keywords: [
    "uniform manufacturer Ajman",
    "tailoring workshop UAE",
    "custom corporate uniforms",
    "lab coats UAE",
    "embroidery printing Ajman",
    "Mujeeb Tailoring",
  ],
  openGraph: {
    title: "Mujeeb Tailoring Workshop | Premium Uniform Manufacturer in Ajman, UAE",
    description:
      "Over 40 years of garment manufacturing heritage. Custom uniforms, corporate wear, lab coats, coveralls, and embroidery/printing in Ajman, UAE. Bulk & bespoke orders.",
    url: SITE_URL,
    siteName: "Mujeeb Tailoring Workshop",
    images: [
      {
        url: HERO_IMAGE,
        width: 2400,
        height: 1600,
        alt: "Mujeeb Tailoring Workshop — premium uniform manufacturing in Ajman, UAE",
      },
    ],
    type: "website",
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mujeeb Tailoring Workshop | Premium Uniform Manufacturer in Ajman, UAE",
    description:
      "Over 40 years of garment manufacturing heritage. Custom uniforms, corporate wear, lab coats, coveralls, and embroidery/printing in Ajman, UAE. Bulk & bespoke orders.",
    images: [HERO_IMAGE],
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mujeeb Tailoring Workshop",
  description:
    "Premium uniform and corporate garment manufacturer in Ajman, UAE. Over 40 years of craftsmanship in cutting, stitching, embroidery and printing.",
  url: SITE_URL,
  telephone: "+971505958790",
  email: "mujeebtw@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ajman",
    addressCountry: "AE",
    streetAddress: "Ajman, United Arab Emirates",
  },
  foundingDate: "2003",
  foundingYear: 2003,
  knowsAbout: [
    "Uniform Manufacturing",
    "Corporate Wear",
    "Embroidery",
    "DTF Printing",
    "Sublimation Printing",
    "Tailoring",
  ],
  priceRange: "$$",
  areaServed: {
    "@type": "Country",
    name: "United Arab Emirates",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} bg-white font-sans text-ink antialiased overflow-x-hidden`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}