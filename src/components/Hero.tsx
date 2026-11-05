"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowDown, ArrowRight, CircleCheck, Ruler, Scissors } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import CountUp from "./CountUp";

const HERO_IMAGE =
  "https://images.pexels.com/photos/19340518/pexels-photo-19340518.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1600&w=2400";

const HERO_TITLE = "Crafting Excellence in Every Stitch.";

const TRUST_POINTS = [
  "In-house cutting & stitching",
  "Imported & customer fabrics",
  "Bulk & bespoke orders",
];

const stagger: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.08 } },
};

const wordReveal: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const fadeUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section id="home" ref={ref} className="relative overflow-hidden bg-white">
      {/* ── Backdrop image + light gradient veil ─────────────────────────── */}
      <div className="absolute inset-0" aria-hidden="true">
        <motion.div style={{ y }} className="absolute inset-0 h-[120%]">
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[72%_22%] sm:object-[70%_30%] lg:object-[68%_center]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/15 sm:via-white/75 lg:via-white/55 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/50" />
        <div className="texture-dots pointer-events-none absolute -right-8 top-24 hidden size-72 opacity-70 md:block lg:right-24" />
      </div>

      {/* ── Rotating atelier badge ───────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 top-32 z-10 hidden xl:block 2xl:right-24"
      >
        <div className="relative grid size-40 place-items-center">
          <svg viewBox="0 0 100 100" className="animate-spin-slow absolute inset-0 size-full">
            <defs>
              <path id="circlePath" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
            </defs>
            <text className="fill-brand-dark text-[8px] font-bold uppercase" style={{ letterSpacing: "2.6px" }}>
              <textPath href="#circlePath">
                Bespoke Tailoring · Est. 2003 · Ajman UAE · Bespoke Tailoring ·
              </textPath>
            </text>
          </svg>
          <span className="grid size-16 place-items-center rounded-full border border-orange-100 bg-white/90 shadow-lg backdrop-blur">
            <Scissors className="size-6 text-brand" strokeWidth={2} />
          </span>
        </div>
      </div>

      {/* ── Floating quality card ────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-40 right-8 z-10 hidden lg:block xl:right-28"
      >
        <div className="animate-float-soft flex items-center gap-3 rounded-2xl border border-orange-100 bg-white/90 px-5 py-4 shadow-[0_20px_45px_-15px_rgba(194,65,12,0.4)] backdrop-blur">
          <span className="grid size-11 place-items-center rounded-xl bg-cream text-brand">
            <Ruler className="size-6" strokeWidth={2} />
          </span>
          <span>
            <span className="block text-sm font-extrabold text-ink">Handcrafted in Ajman</span>
            <span className="block text-[11px] font-medium text-muted">Every garment quality-checked before delivery</span>
          </span>
        </div>
      </div>

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:min-h-[88vh] lg:pb-24 lg:pt-40">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 rounded-full border border-brand/25 bg-white/85 py-2 pl-3 pr-5 shadow-sm backdrop-blur"
          >
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex size-2.5 rounded-full bg-brand" />
            </span>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-brand-dark sm:text-[11px]">
              Est. 2003
            </span>
            <span className="size-1 rounded-full bg-brand/40" aria-hidden="true" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-muted sm:text-[11px]">
              Ajman, UAE
            </span>
          </motion.div>

          <motion.h1
            variants={stagger}
            initial="initial"
            animate="animate"
            className="mt-6 font-serif text-[clamp(2.75rem,9vw,4.5rem)] font-black leading-[1.02] tracking-tight text-ink"
          >
            {HERO_TITLE.split(" ").map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
                <motion.span variants={wordReveal} className="inline-block">
                  {word === "Excellence" ? (
                    <span className="italic text-brand">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted"
          >
            Over 40 years of garment manufacturing heritage — from custom uniforms
            to premium corporate wear, cut and finished entirely in our own Ajman
            workshop.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <motion.a
              href="#products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand px-8 text-base font-bold text-white shadow-[0_20px_40px_-12px_rgba(234,88,12,0.6)] transition-colors hover:bg-brand-dark"
            >
              View Portfolio
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
            </motion.a>
            <motion.a
              href="#heritage"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border-2 border-brand bg-white/80 px-8 text-base font-bold text-brand-dark backdrop-blur transition-colors hover:bg-cream"
            >
              Our Heritage
              <ArrowDown className="size-5" strokeWidth={2.5} />
            </motion.a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
          >
            {TRUST_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-[12px] font-semibold text-ink/80 sm:text-[13px]"
              >
                <CircleCheck className="size-4 shrink-0 text-brand" strokeWidth={2.4} />
                {point}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* ── Scroll cue ───────────────────────────────────────────────────── */}
      <a
        href="#heritage"
        aria-label="Scroll to our heritage"
        className="absolute bottom-24 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-brand md:flex"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-ink/20 pt-2">
          <span className="animate-scroll-dot h-2.5 w-1.5 rounded-full bg-brand" />
        </span>
        <span className="text-[9px] font-bold uppercase tracking-[0.35em]">Scroll</span>
      </a>

      {/* ── Stats bar ────────────────────────────────────────────────────── */}
      <div className="relative z-10 border-t border-orange-100 bg-white/95 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-orange-100 md:grid-cols-4">
          {[
            { value: <CountUp end={40} suffix="+" />, label: "Years of Craft" },
            { value: <span>2003</span>, label: "Workshop Established" },
            { value: <CountUp end={7} suffix="+" />, label: "Garment Categories" },
            { value: <CountUp end={100} suffix="%" />, label: "In-house Production" },
          ].map((stat) => (
            <div key={stat.label} className="px-3 py-5 text-center sm:py-6">
              <p className="font-serif text-2xl font-black text-ink sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-[8px] font-bold uppercase tracking-[0.18em] text-muted sm:text-[10px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}