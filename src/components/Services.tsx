"use client";

import { motion } from "framer-motion";
import {
  Check,
  Flower2,
  Info,
  PackageCheck,
  Printer,
  Scissors,
  Shirt,
} from "lucide-react";

const SERVICES = [
  {
    icon: Scissors,
    title: "Cutting & Pattern Making",
    description:
      "Precision pattern drafting, grading and bulk cutting — every size, every marker, every time.",
    points: ["Pattern drafting & grading", "Single to bulk cutting runs", "Zero-waste marker planning"],
  },
  {
    icon: Shirt,
    title: "Stitching & Tailoring",
    description:
      "Industrial single-needle, overlock and flatlock stitching with meticulous hand finishing.",
    points: ["Industrial stitching lines", "Hand finishing & pressing", "Custom sizing for every fit"],
  },
  {
    icon: Flower2,
    title: "Embroidery",
    description:
      "Computerized multi-head embroidery — logos, monograms, badges and role tagging in thread.",
    points: ["Logo digitizing & sampling", "Chest, back & cap branding", "Name & department tagging"],
  },
  {
    icon: Printer,
    title: "Printing",
    description:
      "Direct-to-Film and sublimation printing for vibrant, wash-fast branding on any garment.",
    points: ["DTF (Direct-to-Film) transfers", "Sublimation & all-over print", "HD logos & full-colour graphics"],
    featured: true,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-28 bg-cream py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.3em] text-brand">
              <span className="h-px w-10 bg-brand" aria-hidden="true" />
              What We Do
            </span>
            <h2 className="mt-4 font-serif text-4xl font-black leading-[1.08] tracking-tight text-ink sm:text-5xl">
              Every garment, <span className="italic text-brand">cut &amp; finished</span> in-house.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-muted">
            One roof, four disciplines — from raw cloth to press-ready uniforms,
            nothing leaves our workshop until it meets the standard.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.55, delay: i * 0.09, ease: "easeOut" }}
                className="flex flex-col rounded-2xl border border-orange-100 bg-white p-6 shadow-[0_14px_36px_-22px_rgba(31,41,55,0.4)]"
                style={{ willChange: "transform, box-shadow, border-color" }}
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-14 place-items-center rounded-2xl bg-cream text-brand transition-all duration-300 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                    <Icon className="size-7" strokeWidth={1.8} />
                  </span>
                  <span className="font-serif text-sm font-bold text-orange-200 transition-colors duration-300 group-hover:text-brand">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-[22px] font-bold leading-snug text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2 border-t border-dashed border-orange-100 pt-4">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-[12.5px] font-medium text-ink/85"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-brand" strokeWidth={3} />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        {/* Fabric sourcing note */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-brand/45 bg-white px-6 py-4 text-center shadow-sm sm:flex-row sm:text-left">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-cream text-brand">
              <Info className="size-6" strokeWidth={2} />
            </span>
            <p className="text-[13px] leading-relaxed text-ink sm:text-sm">
              <strong className="font-extrabold">Flexible fabric sourcing.</strong>{" "}
              We cut from our own curated stock of imported fabrics —{" "}
              <span className="font-semibold text-brand-dark">
                or gladly accept fabrics supplied by you
              </span>
              , cut and stitched to your exact specification.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-light px-5 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-dark">
            <PackageCheck className="size-4" strokeWidth={2.4} />
            Wholesale &amp; bulk orders welcome
          </span>
        </motion.div>
      </div>
    </section>
  );
}
