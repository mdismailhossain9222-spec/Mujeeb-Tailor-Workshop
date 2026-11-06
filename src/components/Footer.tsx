import { MapPin, Mail, Scissors } from "lucide-react";
import Image from "next/image";
import WhatsAppIcon from "./WhatsAppIcon";

const QUICK_LINKS = [
  { label: "Heritage", href: "#heritage" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

const PRODUCT_LINKS = [
  "Formal Shirts",
  "Polo T-Shirts",
  "Hoodies & Sweatshirts",
  "Formal Trousers",
  "Work Pants & Chinos",
  "Lab Coats",
  "Industrial Coveralls",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-orange-100 bg-white">
      {/* Stitch accent */}
      <div className="stitch-line h-[2px] w-full opacity-80" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <a href="#home" aria-label="Mujeeb Tailoring Workshop — back to top">
              <Image
                src="/images/mujeeb-logo-transparent.png"
                alt="Mujeeb Tailoring Workshop"
                width={230}
                height={64}
                className="object-contain w-auto h-16 md:h-20 mb-4"
              />
            </a>
            <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-muted">
              Bespoke uniform and corporate garment manufacturer, crafting for the
              UAE from our Ajman workshop since 2003 — four decades of hands,
              cloth and craft.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-orange-100 bg-cream px-3.5 py-1.5 text-[9.5px] font-extrabold uppercase tracking-[0.2em] text-brand-dark">
                Est. 2003
              </span>
              <span className="rounded-full border border-orange-100 bg-cream px-3.5 py-1.5 text-[9.5px] font-extrabold uppercase tracking-[0.2em] text-brand-dark">
                Ajman · UAE
              </span>
              <span className="rounded-full border border-orange-100 bg-cream px-3.5 py-1.5 text-[9.5px] font-extrabold uppercase tracking-[0.2em] text-brand-dark">
                100% In-house
              </span>
            </div>
          </div>

          {/* Quick links */}
          <nav className="md:col-span-2" aria-label="Quick links">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-ink">
              Explore
            </p>
            <ul className="mt-3 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13px] font-medium text-muted transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Products */}
          <nav className="md:col-span-3" aria-label="Products">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-ink">
              Products
            </p>
            <ul className="mt-3 space-y-2.5">
              {PRODUCT_LINKS.map((label) => (
                <li key={label}>
                  <a
                    href="#products"
                    className="text-[13px] font-medium text-muted transition-colors hover:text-brand"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact summary */}
          <div className="md:col-span-3">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-ink">
              Workshop
            </p>
            <ul className="mt-3 space-y-3 text-[13px] font-medium text-muted">
              <li>
                <a
                  href="mailto:mujeebtw@gmail.com"
                  className="flex items-start gap-2.5 transition-colors hover:text-brand"
                >
                  <Mail className="mt-0.5 size-4 shrink-0 text-brand" strokeWidth={2.2} />
                  mujeebtw@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand" strokeWidth={2.2} />
                Ajman, United Arab Emirates
              </li>
              <li>
                <a
                  href="https://wa.me/971501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-brand"
                >
                  <WhatsAppIcon className="size-4 shrink-0 text-brand" />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-orange-100">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-[11px] font-medium text-muted sm:flex-row sm:px-8">
          <p>
            © 2003–{year} Mujeeb Tailoring Workshop. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <Scissors className="size-3.5 text-brand" strokeWidth={2.2} />
            Crafted in Ajman, UAE — Crafting Excellence in Every Stitch
          </p>
        </div>
      </div>
    </footer>
  );
}
