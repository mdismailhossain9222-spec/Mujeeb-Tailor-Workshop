"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Menu, Scissors, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Heritage", href: "#heritage" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility strip */}
      <div
        className={`hidden overflow-hidden border-b border-orange-100 bg-cream transition-all duration-500 lg:block ${
          scrolled ? "max-h-0 border-transparent opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2 text-[11px] font-medium tracking-wide text-muted">
          <span className="flex items-center gap-2">
            <MapPin className="size-3.5 text-brand" strokeWidth={2.4} />
            Mujeeb Tailoring Workshop — Ajman, United Arab Emirates
          </span>
          <span className="flex items-center gap-5">
            <a
              href="mailto:mujeebtw@gmail.com"
              className="flex items-center gap-2 transition-colors hover:text-brand"
            >
              <Mail className="size-3.5 text-brand" strokeWidth={2.4} />
              mujeebtw@gmail.com
            </a>
            <span className="flex items-center gap-2 text-brand-dark">
              <Scissors className="size-3.5" strokeWidth={2.4} />
              Est. 2003
            </span>
          </span>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`border-b bg-white/90 backdrop-blur-xl transition-all duration-500 ${
          scrolled
            ? "border-orange-100 shadow-[0_14px_40px_-18px_rgba(194,65,12,0.35)]"
            : "border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:h-[72px]">
          <a href="#home" aria-label="Mujeeb Tailoring Workshop — home" className="shrink-0">
            <Logo />
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative py-2 text-sm font-semibold text-ink/75 transition-colors hover:text-brand"
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-[2.5px] origin-left scale-x-0 rounded-full bg-brand transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden h-11 items-center gap-2 rounded-full bg-brand px-6 text-sm font-bold text-white shadow-[0_14px_30px_-10px_rgba(234,88,12,0.6)] transition-colors hover:bg-brand-dark sm:inline-flex"
            >
              Contact Us
              <ArrowRight className="size-4" strokeWidth={2.5} />
            </motion.a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid size-11 place-items-center rounded-xl border border-orange-100 text-ink transition-colors hover:border-brand hover:text-brand lg:hidden"
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: "easeInOut" }}
              className="overflow-hidden border-t border-orange-100 bg-white lg:hidden"
            >
              <nav className="px-5 pb-6 pt-2" aria-label="Mobile navigation">
                {NAV_LINKS.map((link, i) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-orange-50 py-4 text-[15px] font-semibold text-ink transition-colors last:border-none hover:text-brand"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="font-serif text-xs font-bold text-brand">
                        0{i + 1}
                      </span>
                      {link.label}
                    </span>
                    <ArrowRight className="size-4 text-brand" />
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-4 flex h-12 items-center justify-center gap-2 rounded-full bg-brand text-sm font-bold text-white"
                >
                  Contact Us
                  <ArrowRight className="size-4" />
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
