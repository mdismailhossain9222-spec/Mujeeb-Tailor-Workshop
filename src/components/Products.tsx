"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Mail, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Category = "Corporate" | "Workwear" | "Healthcare";
type Filter = "All" | Category;

interface Product {
  id: string;
  name: string;
  category: Category;
  image: string;
  blurb: string;
  options: string[];
}

const PRODUCTS: Product[] = [
  {
    id: "shirts",
    name: "Formal Shirts",
    category: "Corporate",
    image: "/images/products/shirts.webp",
    blurb:
      "Crisp, breathable corporate shirts with reinforced stitching — the everyday standard for boardrooms, ministries and retail floors.",
    options: [
      "Imported or customer-supplied fabrics",
      "Embroidered or DTF logo placement",
      "Bulk sizing S–5XL & custom measurements",
    ],
  },
  {
    id: "polos",
    name: "Polo Shirts",
    category: "Corporate",
    image: "/images/products/polos.jpg",
    blurb:
      "Piqué polos in navy, white and brand orange with clean embroidered emblems — comfort engineered for long shifts.",
    options: [
      "200–240 GSM piqué with logo embroidery",
      "Single or multi-colour chest emblems",
      "Coordinating team sets & size runs",
    ],
  },
  {
    id: "tshirts",
    name: "Round Neck T-Shirts",
    category: "Corporate",
    image: "/images/products/tshirts.jpg",
    blurb:
      "Soft, breathable round neck tees in classic corporate colours — the casual-layer staple for teams, events and retail floors.",
    options: [
      "180–220 GSM jersey cotton or poly-blend",
      "Embroidered or DTF logo placement",
      "Bulk sizing S–5XL & custom measurements",
    ],
  },
  {
    id: "hoodies",
    name: "Hoodies & Sweatshirts",
    category: "Corporate",
    image: "/images/products/hoodies.webp",
    blurb:
      "Heavyweight fleece for teams, events and casual staff wear — soft inside, structured outside.",
    options: [
      "300–400 GSM brushed fleece",
      "Embroidery, DTF or screen print branding",
      "Custom colourways on bulk orders",
    ],
  },
  {
    id: "trousers",
    name: "Formal Trousers",
    category: "Corporate",
    image: "/images/products/trousers.webp",
    blurb:
      "Centre-creased tailoring in charcoal and navy — pressed to perfection for hospitality and corporate sets.",
    options: [
      "Wool-blend & poly-viscose options",
      "Flat-front or pleated tailoring",
      "Hemmed to exact inseam on request",
    ],
  },
  {
    id: "pants",
    name: "Work Pants & Chinos",
    category: "Workwear",
    image: "/images/products/pants.webp",
    blurb:
      "Reinforced khaki work pants with practical utility pocketing for technical and field teams.",
    options: [
      "Ripstop & stretch twill options",
      "Reinforced knees and bar-tacked stress points",
      "Matching tops and two-tone designs",
    ],
  },
  {
    id: "coveralls",
    name: "Industrial Coveralls",
    category: "Workwear",
    image: "/images/products/coveralls.webp",
    blurb:
      "Navy coveralls with high-visibility orange piping — built for automotive, energy and logistics sites.",
    options: [
      "Reflective piping & hi-vis variants",
      "Fire-retardant fabric on request",
      "Chest and sleeve logo embroidery",
    ],
  },
  {
    id: "industrial-uniforms",
    name: "Industrial Uniforms",
    category: "Workwear",
    image: "/images/products/industrial-uniforms.webp",
    blurb:
      "Heavy-duty factory and workshop uniforms — reinforced seams, stain-resistant fabrics and hi-vis detailing built for active industrial sites.",
    options: [
      "Flame-retardant & hi-vis fabric options",
      "Reinforced knees, elbows and bar-tacking",
      "Chest, sleeve and back logo embroidery",
    ],
  },
  {
    id: "labcoats",
    name: "Lab Coats",
    category: "Healthcare",
    image: "/images/products/labcoats.jpg",
    blurb:
      "Buttoned white medical coats with lapels and deep pocketing for clinics, labs and hospital wards.",
    options: [
      "Classic, tailored or knee-length cuts",
      "Name, department & role embroidery",
      "Anti-static & fluid-resistant fabrics",
    ],
  },
];

const FILTERS: Filter[] = ["All", "Corporate", "Workwear", "Healthcare"];

export default function Products() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<Product | null>(null);

  const visible =
    filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section id="products" className="scroll-mt-28 bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header + filters */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.3em] text-brand">
              <span className="h-px w-10 bg-brand" aria-hidden="true" />
              Our Products
            </span>
            <h2 className="mt-4 font-serif text-4xl font-black leading-[1.08] tracking-tight text-ink sm:text-5xl">
              The uniform &amp; garment <span className="italic text-brand">portfolio.</span>
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
              Tap any garment for full details — every piece is manufactured to
              order, in bulk, for corporate and wholesale clients.
            </p>
          </div>
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter products by category"
          >
            {FILTERS.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={active}
                  className={`h-11 rounded-full border px-5 text-[12px] font-bold uppercase tracking-[0.14em] transition-all duration-300 ${
                    active
                      ? "border-brand bg-brand text-white shadow-[0_12px_28px_-10px_rgba(234,88,12,0.6)]"
                      : "border-orange-200 bg-white text-muted hover:border-brand hover:text-brand"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 xl:grid-cols-5"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((product) => (
              <motion.button
                layout
                key={product.id}
                type="button"
                onClick={() => setSelected(product)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                aria-label={`View details for ${product.name}`}
                className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl border border-orange-100 bg-cream text-left shadow-sm transition-all duration-500 hover:border-brand/50 hover:shadow-[0_30px_60px_-20px_rgba(194,65,12,0.45)]"
                style={{ willChange: "transform, box-shadow, border-color" }}
              >
                <Image
                  src={product.image}
                  alt={`${product.name} — custom corporate uniforms manufactured in Ajman, UAE`}
                  fill
                  sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent transition-opacity duration-500"
                />
                <span
                  aria-hidden="true"
                  className="absolute right-3 top-3 grid size-9 translate-y-1 place-items-center rounded-full border border-white/30 bg-white/15 text-white opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <ArrowUpRight className="size-5" strokeWidth={2.2} />
                </span>
                <span className="absolute inset-x-0 bottom-0 p-3.5 sm:p-5">
                  <span className="text-[8px] font-extrabold uppercase tracking-[0.22em] text-orange-300 sm:text-[9px]">
                    {product.category}
                  </span>
                  <span className="mt-1 block font-serif text-base font-bold leading-tight text-white sm:text-2xl">
                    {product.name}
                  </span>
                  <span className="mt-1.5 hidden text-[11px] leading-snug text-white/80 opacity-0 transition-all duration-500 line-clamp-2 group-hover:opacity-100 sm:block">
                    {product.blurb}
                  </span>
                </span>
              </motion.button>
            ))}

            {/* Bespoke CTA tile */}
            {filter === "All" && (
              <motion.a
                layout
                key="bespoke-cta"
                href="#contact"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="group relative flex aspect-[3/4] flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-brand via-brand to-brand-dark p-5 text-left shadow-[0_25px_50px_-20px_rgba(234,88,12,0.7)] sm:p-6"
              >
                <div aria-hidden="true" className="texture-dots-light absolute inset-0 opacity-50" />
                <div aria-hidden="true" className="absolute -right-12 -top-12 size-44 rounded-full bg-white/10" />
                <div aria-hidden="true" className="absolute -bottom-16 -left-12 size-48 rounded-full bg-white/10" />
                <span className="relative w-max rounded-full border border-white/35 bg-white/15 px-3 py-1.5 text-[8px] font-extrabold uppercase tracking-[0.22em] text-white sm:text-[9px]">
                  Bespoke &amp; Bulk
                </span>
                <span className="relative mt-auto">
                  <span className="block font-serif text-xl font-black leading-[1.15] text-white sm:text-[27px]">
                    Need something made&#8209;to&#8209;measure?
                  </span>
                  <span className="mt-2 block text-[10.5px] leading-snug text-orange-100 sm:text-[12.5px]">
                    Any garment, any fabric, any quantity — manufactured to your
                    exact specification.
                  </span>
                  <span className="mt-4 inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white sm:text-[11px]">
                    Talk to the workshop
                    <span className="grid size-9 place-items-center rounded-full bg-white text-brand-dark transition-transform duration-300 group-hover:translate-x-1.5">
                      <ArrowRight className="size-5" strokeWidth={2.4} />
                    </span>
                  </span>
                </span>
              </motion.a>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Lightbox ─────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selected && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selected.name}
            className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 64, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 48, scale: 0.97 }}
              transition={{ type: "spring", damping: 30, stiffness: 320 }}
              className="relative grid max-h-[94vh] w-full max-w-3xl grid-cols-1 overflow-hidden rounded-t-3xl bg-white sm:rounded-3xl md:grid-cols-2"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close details"
                className="absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full bg-ink/45 text-white backdrop-blur transition-colors hover:bg-brand"
              >
                <X className="size-5" strokeWidth={2.4} />
              </button>
              <div className="relative h-48 sm:h-64 md:h-auto md:min-h-[440px]">
                <Image
                  src={selected.image}
                  alt={`${selected.name} — premium uniform manufacturing in Ajman workshop`}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col overflow-y-auto p-6 sm:p-7">
                <span className="w-max rounded-full bg-brand-light px-3 py-1 text-[9px] font-extrabold uppercase tracking-[0.22em] text-brand-dark">
                  {selected.category}
                </span>
                <h3 className="mt-3 font-serif text-2xl font-black text-ink sm:text-3xl">
                  {selected.name}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">
                  {selected.blurb}
                </p>
                <p className="mt-5 text-[10px] font-extrabold uppercase tracking-[0.24em] text-muted">
                  Available Options
                </p>
                <ul className="mt-2 space-y-2.5">
                  {selected.options.map((option) => (
                    <li
                      key={option}
                      className="flex items-start gap-2.5 text-[12.5px] font-medium leading-snug text-ink/90"
                    >
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-cream text-brand">
                        <Check className="size-3.5" strokeWidth={3.5} />
                      </span>
                      {option}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <motion.a
                    href={`mailto:mujeebtw@gmail.com?subject=${encodeURIComponent(
                      `Product enquiry — ${selected.name}`
                    )}&body=${encodeURIComponent(
                      `Hello Mujeeb Tailoring Workshop,\n\nI would like to enquire about ${selected.name} for our team.\n\nQuantity: \nSizes: \nLogo / branding: \n\nThank you.`
                    )}`}
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand text-sm font-bold text-white transition-colors hover:bg-brand-dark"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Mail className="size-4" strokeWidth={2.4} />
                    Enquire by Email
                  </motion.a>
                  <p className="mt-2 text-center text-[10px] font-medium text-muted">
                    No forms — your enquiry goes straight to the workshop.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
