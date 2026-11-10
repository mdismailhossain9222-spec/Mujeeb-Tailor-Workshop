"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {showTop && (
          <motion.button
            key="back-to-top"
            type="button"
            initial={{ opacity: 0, y: 16, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="grid size-12 place-items-center rounded-full border border-orange-100 bg-white text-brand shadow-[0_16px_35px_-12px_rgba(234,88,12,0.5)] transition-colors hover:bg-cream"
          >
            <ArrowUp className="size-5" strokeWidth={2.4} />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/971501583923?text=Hello%20Mujeeb%20Tailoring%20Workshop!"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Chat on WhatsApp"
        className="grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_-10px_rgba(37,211,102,0.7)]"
      >
        <WhatsAppIcon className="size-7" />
      </motion.a>
    </div>
  );
}
