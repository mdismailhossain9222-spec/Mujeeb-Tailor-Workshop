"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Car,
  Factory,
  GraduationCap,
  HardHat,
  Landmark,
  ShoppingBag,
  Stethoscope,
  Truck,
  UtensilsCrossed,
  Briefcase,
} from "lucide-react";

const CLIENTS = [
  { name: "Al Noor Hospitals", icon: Stethoscope },
  { name: "Gulf Star Motors", icon: Car },
  { name: "Emirates Contracting Co.", icon: HardHat },
  { name: "Pearl Gulf Hospitality", icon: UtensilsCrossed },
  { name: "Sahara Retail Group", icon: ShoppingBag },
  { name: "Falcon Freight & Logistics", icon: Truck },
  { name: "National Mills Industries", icon: Factory },
  { name: "Horizon Schools", icon: GraduationCap },
];

const TIMELINE = [
  { year: "2004", title: "First corporate supply", note: "School & college uniform programmes across Sharjah" },
  { year: "2007", title: "Healthcare expansion", note: "Lab coats, scrubs and clinic wear for private hospitals" },
  { year: "2011", title: "Hospitality contracts", note: "Front-office, housekeeping and F&B uniforms for hotel groups" },
  { year: "2015", title: "Industrial programmes", note: "Coveralls and safety wear for technical contractors" },
  { year: "2019", title: "Retail rollouts", note: "Polo shirts, aprons and store wear for national chains" },
  { year: "2025", title: "Multi-sector partnerships", note: "Ongoing framework agreements with UAE institutions" },
];

const SECTORS = [
  { label: "Schools & Colleges", icon: GraduationCap },
  { label: "Healthcare", icon: Stethoscope },
  { label: "Hospitality", icon: UtensilsCrossed },
  { label: "Retail", icon: ShoppingBag },
  { label: "Industry", icon: Factory },
  { label: "Logistics", icon: Truck },
  { label: "Corporate", icon: Building2 },
  { label: "Government", icon: Landmark },
];

export default function Clients() {
  return (
    <section id="clients" className="scroll-mt-28 bg-[#FFF7ED] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="flex items-center justify-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.3em] text-brand">
            <span className="h-px w-10 bg-brand" aria-hidden="true" />
            Trusted By
            <span className="h-px w-10 bg-brand" aria-hidden="true" />
          </span>
          <h2 className="mt-4 font-serif text-4xl font-black leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Trusted by industry leaders{" "}
            <span className="italic text-brand">since 2003.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
            From classrooms to clinics, hotels to heavy industry — the garments
            we make are worn to work across the Emirates, every single day.
          </p>
        </div>

        {/* Client wordmark grid */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          {CLIENTS.map((client) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={client.name}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group flex h-28 flex-col items-center justify-center gap-2 rounded-2xl border border-[#EA580C]/10 bg-gradient-to-b from-white to-[#FFF7ED] px-3 text-center shadow-sm transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(234,88,12,0.1)] hover:border-[#EA580C]/30"
                style={{ willChange: "transform, box-shadow, border-color" }}
              >
                <Icon
                  className="size-8 text-[#EA580C]/70 transition-all duration-300 group-hover:scale-110 group-hover:text-[#EA580C]"
                  strokeWidth={1.8}
                />
                <span
                  className="text-ink text-sm font-semibold leading-tight tracking-wide uppercase transition-colors duration-300 sm:text-[15px]"
                >
                  {client.name}
                </span>
              </motion.div>
            );
          })}
        </div>
        <p className="mt-4 text-center text-[10.5px] font-medium text-muted/70">
          Illustrative client marks shown — full client references are shared on request.
        </p>

        {/* Sector chips */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {SECTORS.map((sector) => {
            const Icon = sector.icon;
            return (
              <span
                key={sector.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-orange-100 bg-white px-4 py-2 text-[10.5px] font-bold uppercase tracking-[0.14em] text-muted"
              >
                <Icon className="size-4 text-brand" strokeWidth={2} />
                {sector.label}
              </span>
            );
          })}
        </div>

        {/* Contract timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mt-12 rounded-3xl border border-orange-100 bg-white p-6 shadow-[0_18px_45px_-25px_rgba(194,65,12,0.4)] sm:p-9"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-brand">
                Our Partnerships
              </span>
              <h3 className="mt-1.5 font-serif text-2xl font-black text-ink sm:text-3xl">
                A timeline of contracts.
              </h3>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-[10.5px] font-extrabold uppercase tracking-[0.18em] text-brand-dark">
              <Briefcase className="size-4" strokeWidth={2.2} />
              2004 — Today
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-0 sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-6">
            {TIMELINE.map((item, i) => (
              <div
                key={item.year}
                className="group relative border-l-2 border-dashed border-orange-200 pb-6 pl-6 last:pb-0 sm:border-l-0 sm:border-t-2 sm:pb-0 sm:pl-0 sm:pt-6"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[7px] top-1 size-3 rounded-full bg-brand ring-4 ring-white transition-transform duration-300 group-hover:scale-150 sm:-top-[7px] sm:left-0"
                />
                <p className="font-serif text-xl font-black leading-none text-brand sm:text-2xl">
                  {item.year}
                </p>
                <p className="mt-1.5 text-[12px] font-extrabold leading-snug text-ink">
                  {item.title}
                </p>
                <p className="mt-1 text-[10.5px] leading-snug text-muted">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
