"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, ArrowUpRight } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

const WHATSAPP_NUMBER = "971501234567";
const WHATSAPP_DISPLAY = "+971 50 123 4567";
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Mujeeb Tailoring Workshop! I'd like to discuss a uniform order for our team."
)}`;

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-28 overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-44 top-1/3 size-[28rem] rounded-full bg-cream blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Left: details ─────────────────────────────────────────────── */}
          <div className="flex flex-col justify-center">
            <span className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.3em] text-brand">
              <span className="h-px w-10 bg-brand" aria-hidden="true" />
              Contact
            </span>
            <h2 className="mt-4 font-serif text-5xl font-black leading-[1.02] tracking-tight text-ink sm:text-6xl">
              Get in Touch<span className="text-brand">.</span>
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted sm:text-base">
              No forms, no queues — speak directly with the people who will
              actually cut, stitch and finish your garments.
            </p>

            {/* Email */}
            <a
              href="mailto:mujeebtw@gmail.com"
              className="group mt-9 block"
              aria-label="Email Mujeeb Tailoring Workshop"
            >
              <span className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.28em] text-muted">
                <span className="grid size-8 place-items-center rounded-lg bg-cream text-brand">
                  <Mail className="size-4" strokeWidth={2.4} />
                </span>
                Email Us
              </span>
              <span className="mt-3 flex flex-wrap items-center gap-3 font-serif text-[clamp(1.35rem,5.6vw,2.35rem)] font-black leading-none text-brand-dark transition-colors duration-300 group-hover:text-brand">
                mujeebtw@gmail.com
                <ArrowUpRight
                  className="size-7 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  strokeWidth={2.4}
                />
              </span>
            </a>

            {/* Location + Hours */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-muted">
                  <span className="grid size-8 place-items-center rounded-lg bg-cream text-brand">
                    <MapPin className="size-4" strokeWidth={2.4} />
                  </span>
                  Visit
                </span>
                <p className="mt-3 text-[15px] font-extrabold leading-snug text-ink">
                  Ajman, UAE
                </p>
                <p className="mt-1 text-[11.5px] leading-snug text-muted">
                  Mujeeb Tailoring Workshop —
                  <br />
                  garment manufacturing &amp; fitting studio
                </p>
                <a
                  href="https://www.google.com/maps/search/Ajman%20United%20Arab%20Emirates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand transition-colors hover:text-brand-dark"
                >
                  Open in Maps
                  <ArrowUpRight className="size-3.5" strokeWidth={2.6} />
                </a>
              </div>
              <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-muted">
                  <span className="grid size-8 place-items-center rounded-lg bg-cream text-brand">
                    <Clock className="size-4" strokeWidth={2.4} />
                  </span>
                  Working Hours
                </span>
                <p className="mt-3 text-[13px] font-extrabold text-ink">
                  Saturday — Thursday
                </p>
                <p className="text-[12px] leading-snug text-muted">
                  9:00 AM — 9:00 PM (GST)
                </p>
                <p className="mt-2.5 text-[13px] font-extrabold text-ink">Friday</p>
                <p className="text-[12px] leading-snug text-muted">By appointment only</p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="mt-8 inline-flex h-16 w-full max-w-md items-center justify-center gap-4 rounded-2xl bg-[#25D366] px-6 text-white shadow-[0_22px_45px_-15px_rgba(37,211,102,0.65)] transition-shadow hover:shadow-[0_26px_55px_-15px_rgba(37,211,102,0.75)] sm:w-auto"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon className="size-8 shrink-0" />
              <span className="text-left leading-tight">
                <span className="block text-lg font-black tracking-tight">
                  Chat on WhatsApp
                </span>
                <span className="block text-[12px] font-semibold text-white/90">
                  {WHATSAPP_DISPLAY} · replies within the day
                </span>
              </span>
            </motion.a>
            <p className="mt-3 text-[11px] font-medium text-muted">
              Prefer email? We respond to <a href="mailto:mujeebtw@gmail.com" className="font-semibold text-brand-dark hover:text-brand">mujeebtw@gmail.com</a> within one working day.
            </p>
          </div>

          {/* ── Right: map ────────────────────────────────────────────────── */}
          <div className="relative min-h-[380px] overflow-hidden rounded-3xl border border-orange-100 shadow-[0_35px_70px_-30px_rgba(194,65,12,0.45)] sm:min-h-[460px]">
            <iframe
              title="Mujeeb Tailoring Workshop — Ajman, UAE on Google Maps"
              src="https://www.google.com/maps?q=Ajman%20United%20Arab%20Emirates&z=13&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute left-4 top-4 max-w-[240px] rounded-2xl border border-orange-100 bg-white/90 p-4 shadow-lg backdrop-blur sm:left-6 sm:top-6">
              <p className="text-[9px] font-extrabold uppercase tracking-[0.26em] text-brand">
                Our Workshop
              </p>
              <p className="mt-1 font-serif text-base font-black leading-tight text-ink">
                Mujeeb Tailoring Workshop
              </p>
              <p className="mt-1 flex items-center gap-1.5 text-[11px] font-semibold text-muted">
                <MapPin className="size-3.5 text-brand" strokeWidth={2.4} />
                Ajman, United Arab Emirates
              </p>
            </div>
            <div className="absolute bottom-4 right-4 rounded-full border border-orange-100 bg-white/90 px-4 py-2 text-[9px] font-extrabold uppercase tracking-[0.22em] text-brand-dark shadow backdrop-blur sm:bottom-6 sm:right-6">
              Est. 2003 · Ajman
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
