"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "The uniforms we ordered for our clinic staff were top-notch. Perfect stitching, consistent sizing and delivered on time. Our team has never looked more professional.",
    name: "Dr. Ahmed Al-Mansoori",
    company: "Al Noor Clinics",
  },
  {
    quote:
      "From executive suits to warehouse coveralls, every garment holds up under daily UAE conditions. The Ajman workshop's attention to detail is unmatched.",
    name: "Sarah Khalid",
    company: "Gulf Star Motors",
  },
  {
    quote:
      "We've been partnering with Mujeeb for over a decade. Their ability to scale across our hospitality, retail and corporate teams — while keeping quality constant — is rare.",
    name: "Omar Nasser",
    company: "Pearl Gulf Hospitality",
  },
];

const STARS = [0, 1, 2, 3, 4];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative scroll-mt-28 bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="flex items-center justify-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.3em] text-brand">
            <span className="h-px w-10 bg-brand" aria-hidden="true" />
            Satisfied Customers
            <span className="h-px w-10 bg-brand" aria-hidden="true" />
          </span>
          <h2 className="mt-4 font-serif text-4xl font-black leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Loved by the people who wear them{" "}
            <span className="italic text-brand">every day.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
            Words from the hospitals, hotels, schools and factories who trust
            their look to our workshop.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              className="group relative flex flex-col rounded-3xl border border-[#EA580C]/10 bg-white p-7 shadow-[0_18px_45px_-25px_rgba(194,65,12,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-25px_rgba(194,65,12,0.5)] sm:p-8"
            >
              {/* Quote mark */}
              <span
                aria-hidden="true"
                className="absolute -left-1 -top-4 font-serif text-6xl leading-none text-[#EA580C]/15"
              >
                &ldquo;
              </span>

              {/* Stars */}
              <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                {STARS.map((s) => (
                  <Star
                    key={s}
                    className="size-4 fill-[#EA580C] text-[#EA580C]"
                    strokeWidth={1.6}
                  />
                ))}
              </div>

              <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-[16px]">
                {t.quote}
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-orange-100 pt-5">
                <span className="grid size-11 place-items-center rounded-full bg-[#FFF7ED] text-brand">
                  <span className="text-base font-black">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[14px] font-bold text-ink">
                    {t.name}
                  </p>
                  <p className="truncate text-[12.5px] font-medium text-muted">
                    {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}