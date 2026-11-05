"use client";

import { motion } from "framer-motion";
import { Building2, Factory, Plane, Quote, Store } from "lucide-react";
import Image from "next/image";

const FABRIC_IMAGE =
  "https://images.pexels.com/photos/4614231/pexels-photo-4614231.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1000";

const MILESTONES = [
  {
    year: "1988",
    tag: "The Beginning",
    title: "Arrived in the UAE",
    description:
      "A young tailor lands in the Emirates with a needle, a measuring tape and a craft refined over years of apprenticeship — ready to build a life stitch by stitch.",
    icon: Plane,
  },
  {
    year: "1994",
    tag: "Independence",
    title: "Started His Own Business",
    description:
      "After six years perfecting his trade, he opens the doors of his first independent tailoring venture — serving families, shops and the region's earliest corporate clients.",
    icon: Store,
  },
  {
    year: "2003",
    tag: "Founding Year",
    title: "Mujeeb Tailoring Workshop Is Born",
    description:
      "The workshop opens in Ajman as a full-scale garment manufacturing operation — cutting, stitching, embroidery and printing, all under one roof.",
    icon: Factory,
  },
  {
    year: "Today",
    tag: "Four Decades On",
    title: "The Benchmark for Bespoke Workwear",
    description:
      "From ministry schools to hospital networks and industrial sites, our garments are worn across the Emirates — every order carrying four decades of experience.",
    icon: Building2,
  },
];

export default function Heritage() {
  return (
    <section id="heritage" className="relative scroll-mt-28 overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-24 size-96 rounded-full bg-cream blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-12 xl:gap-20">
          {/* ── Left: story + imagery ─────────────────────────────────────── */}
          <div className="lg:col-span-5">
            <span className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.3em] text-brand">
              <span className="h-px w-10 bg-brand" aria-hidden="true" />
              Our Heritage
            </span>
            <h2 className="mt-4 font-serif text-4xl font-black leading-[1.08] tracking-tight text-ink sm:text-5xl">
              Almost <span className="italic text-brand">40 years</span> at the
              cutting table.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted sm:text-base">
              What began as one man&apos;s trade in 1988 has grown into a complete
              garment manufacturing workshop — yet every piece still passes
              through hands that know the weight of good cloth.
            </p>

            <figure className="relative mt-10 max-w-md">
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border-2 border-brand"
              />
              <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_60px_-25px_rgba(194,65,12,0.45)]">
                <Image
                  src={FABRIC_IMAGE}
                  alt="Rolls of imported fabric in the Mujeeb Tailoring Workshop store"
                  width={1000}
                  height={760}
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="h-72 w-full object-cover sm:h-80"
                />
                <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/85 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-dark backdrop-blur">
                  Imported Fabric Stock
                </span>
              </div>
              <figcaption className="mt-3 text-[11px] font-medium italic text-muted">
                Our imported fabric store — Mujeeb Tailoring Workshop, Ajman.
              </figcaption>
            </figure>

            <blockquote className="relative mt-9 rounded-2xl border border-orange-100 bg-cream p-6 pt-8 shadow-sm">
              <Quote
                className="absolute -top-4 left-6 size-8 text-brand"
                fill="currentColor"
                strokeWidth={0}
                aria-hidden="true"
              />
              <p className="font-serif text-[17px] font-semibold italic leading-snug text-ink">
                &ldquo;Almost 40 years of experience in this line of business and
                offer the best quality of work.&rdquo;
              </p>
              <footer className="mt-4 flex items-center gap-3">
                <span className="h-px w-8 bg-brand" aria-hidden="true" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-muted">
                  Mujeeb · Founder &amp; Master Tailor
                </span>
              </footer>
            </blockquote>
          </div>

          {/* ── Right: vertical timeline ──────────────────────────────────── */}
          <div className="lg:col-span-7">
            <ol className="relative ml-1 sm:ml-3">
              <span
                aria-hidden="true"
                className="absolute bottom-6 left-[19px] top-4 w-[3px] rounded-full bg-gradient-to-b from-brand via-brand/60 to-brand/5 sm:left-[23px]"
              />
              {MILESTONES.map((milestone, i) => {
                const Icon = milestone.icon;
                return (
                  <motion.li
                    key={milestone.year}
                    initial={{ opacity: 0, x: 48 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
                    className="relative flex gap-5 pb-7 last:pb-0 sm:gap-7 sm:pb-9"
                  >
                    <span className="relative z-10 grid size-10 shrink-0 place-items-center rounded-full border-2 border-brand bg-white text-brand shadow-[0_0_0_6px_#ffffff] sm:size-12">
                      <Icon className="size-5 sm:size-6" strokeWidth={2} />
                    </span>
                    <div className="flex-1 rounded-2xl border border-orange-100 bg-white p-5 shadow-[0_10px_30px_-18px_rgba(31,41,55,0.35)] transition-colors duration-300 hover:border-brand/50 sm:p-6">
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <span className="font-serif text-2xl font-black leading-none text-brand sm:text-3xl">
                          {milestone.year}
                        </span>
                        <h3 className="text-base font-extrabold text-ink sm:text-lg">
                          {milestone.title}
                        </h3>
                        <span className="rounded-full bg-brand-light px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-[0.16em] text-brand-dark">
                          {milestone.tag}
                        </span>
                      </div>
                      <p className="mt-2.5 text-[13px] leading-relaxed text-muted sm:text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
