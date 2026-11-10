"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useRef } from "react";

const TESTIMONIALS = [
  {
    quote:
      "The uniforms we ordered for our clinic staff were top-notch. Perfect stitching, consistent sizing and delivered on time. Our team has never looked more professional.",
    name: "Dr. Ahmed Al-Mansoori",
    company: "Al Noor Clinics",
    rating: 5,
  },
  {
    quote:
      "From executive suits to warehouse coveralls, every garment holds up under daily UAE conditions. The Ajman workshop's attention to detail is unmatched.",
    name: "Sarah Khalid",
    company: "Gulf Star Motors",
    rating: 5,
  },
  {
    quote:
      "We've been partnering with Mujeeb for over a decade. Their ability to scale across our hospitality, retail and corporate teams — while keeping quality constant — is rare.",
    name: "Omar Nasser",
    company: "Pearl Gulf Hospitality",
    rating: 5,
  },
  {
    quote:
      "The lab coats are breathable, durable and actually fit our doctors properly. No more rolled-up sleeves or gaping necks. Best medical wear we've sourced in the region.",
    name: "Dr. Fatima Al-Zahra",
    company: "Emirates Hospital",
    rating: 5,
  },
  {
    quote:
      "Our logistics fleet covers thousands of kilometers monthly. The coveralls withstand heat, dust and daily washing — zero fabric failures in 18 months.",
    name: "David K., Operations Manager",
    company: "Gulf Logistics LLC",
    rating: 5,
  },
  {
    quote:
      "The polo shirts for our retail staff kept their shape and color after 200+ washes. Customers constantly ask where we get them branded. That's the quality signal we wanted.",
    name: "Aisha R., Principal",
    company: "Horizon Schools",
    rating: 5,
  },
  {
    quote:
      "Switching to Mujeeb cut our uniform lead time by 40%. Their in-house cutting and stitching means no middlemen delays. We placed a repeat order within 3 months.",
    name: "Hassan M., Procurement Lead",
    company: "National Mills Industries",
    rating: 5,
  },
  {
    quote:
      "The formal shirts for our front-of-house team drape beautifully and resist wrinkling through 12-hour shifts. Our guests notice the crisp presentation.",
    name: "Layla S., F&B Director",
    company: "Pearl Gulf Hospitality",
    rating: 4.5,
  },
  {
    quote:
      "We needed flame-retardant coveralls certified to UAE civil defense standards. Mujeeb delivered compliant garments with all documentation — no back-and-forth.",
    name: "Khalid A., HSE Manager",
    company: "Falcon Freight & Logistics",
    rating: 5,
  },
  {
    quote:
      "The hoodies for our maintenance crew are surprisingly warm without being bulky. Staff actually want to wear them — rare for workwear.",
    name: "Yusuf J., Facilities Head",
    company: "Sahara Retail Group",
    rating: 4.5,
  },
  {
    quote:
      "Consistent sizing across 500+ trousers for our engineering team. No returns, no alterations. That level of precision saves us weeks every rollout.",
    name: "Priya N., HR Director",
    company: "Emirates Contracting Co.",
    rating: 5,
  },
  {
    quote:
      "Our nursing team loves the tailored fit of the scrubs — functional pockets, stretch panels in the right places. Retention improved because staff feel valued.",
    name: "Dr. Amna Y., Chief Nursing Officer",
    company: "Al Noor Clinics",
    rating: 5,
  },
  {
    quote:
      "The corporate blazers for our leadership team strike the perfect balance: structured enough for boardrooms, comfortable enough for site visits.",
    name: "Omar H., VP Operations",
    company: "Gulf Star Motors",
    rating: 4.5,
  },
  {
    quote:
      "We outfitted 300+ students for the culinary program. The chef coats and aprons held up to daily kitchen abuse — stains wash out, seams don't split.",
    name: "Chef Rashid M., Program Lead",
    company: "Horizon Schools",
    rating: 5,
  },
  {
    quote:
      "The fabric sourcing transparency is refreshing. They showed us the mill certifications for every batch. That trust is why we renewed our framework agreement.",
    name: "Nadia K., Sustainability Lead",
    company: "National Mills Industries",
    rating: 5,
  },
];

const STARS_FULL = [0, 1, 2, 3, 4];
const STARS_HALF = [0, 1, 2, 3];

function StarRating({ rating }: { rating: number }) {
  const stars = rating >= 5 ? STARS_FULL : STARS_HALF;
  const isHalf = rating < 5;

  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {stars.map((s) => (
        <Star
          key={s}
          className="size-4 fill-[#EA580C] text-[#EA580C]"
          strokeWidth={1.6}
        />
      ))}
      {isHalf && (
        <Star
          className="size-4 text-[#EA580C] fill-transparent"
          strokeWidth={1.6}
        />
      )}
    </div>
  );
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Calculate animation duration based on content width - faster speed
  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    const contentWidth = track.scrollWidth / 2; // Since we duplicate content
    const speed = 60; // pixels per second (faster)
    const duration = contentWidth / speed;

    track.style.setProperty("--marquee-duration", `${duration}s`);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-28 bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Subtle gradient overlay for depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white z-10 pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-20">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center mb-16">
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

        {/* Infinite Marquee Slider - No hover pause, continuous motion */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-6 w-max"
            style={{
              animation: "marquee var(--marquee-duration, 18s) linear infinite",
            }}
          >
            {/* First pass */}
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={`${t.name}-${i}`} testimonial={t} index={i} />
            ))}
            {/* Second pass for seamless loop */}
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={`${t.name}-${i}-dup`} testimonial={t} index={i} />
            ))}
          </div>

          {/* Global keyframes injected once */}
          <style jsx global>{`
            @keyframes marquee {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof TESTIMONIALS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      className="group relative flex-none w-[340px] sm:w-[380px] lg:w-[420px] flex flex-col rounded-3xl border border-[#EA580C]/10 bg-white p-7 shadow-[0_18px_45px_-25px_rgba(194,65,12,0.35)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-25px_rgba(194,65,12,0.5)] hover:border-[#EA580C]/30 sm:p-8"
      style={{ flexShrink: 0 }}
    >
      {/* Quote mark */}
      <span
        aria-hidden="true"
        className="absolute -left-1 -top-4 font-serif text-6xl leading-none text-[#EA580C]/15"
      >
        &ldquo;
      </span>

      {/* Stars */}
      <StarRating rating={testimonial.rating} />

      <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-[16px] flex-1">
        {testimonial.quote}
      </p>

      <div className="mt-6 flex items-center gap-3 border-t border-orange-100 pt-5">
        <span className="grid size-11 place-items-center rounded-full bg-[#FFF7ED] text-brand">
          <span className="text-base font-black">
            {testimonial.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)}
          </span>
        </span>
        <div className="min-w-0">
          <p className="truncate text-[14px] font-bold text-ink">
            {testimonial.name}
          </p>
          <p className="truncate text-[12.5px] font-medium text-muted">
            {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}