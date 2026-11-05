"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";

type LenisContextValue = {
  lenis: Lenis | null;
  scrollY: number;
};

const LenisContext = createContext<LenisContextValue>({
  lenis: null,
  scrollY: 0,
});

export function useLenis() {
  return LenisContext;
}

/**
 * Subscribe to Lenis scroll updates for the lifetime of the component.
 * Ideal for driving parallax / scroll-driven animations off the smooth
 * scroll position rather than the raw DOM scroll (which Lenis decouples).
 */
export function useLenisCallback(callback: (lenis: Lenis) => void) {
  const { lenis } = useContext(LenisContext);

  useEffect(() => {
    if (!lenis) return;
    const handler = (e: any) => callback(e);
    lenis.on("scroll", handler);
    return () => lenis.off("scroll", handler);
  }, [lenis, callback]);
}

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Respect users who have explicitly disabled animations in their OS.
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      wrapper: window,
      content: document.documentElement,
      orientation: "vertical",
      smoothWheel: true,
      syncTouch: false,
      lerp: 0.1,
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      touchMultiplier: 1,
      infinite: false,
      autoResize: true,
      prevent: () => false,
      autoRaf: false,
      respectReducedMotion: true,
    });

    lenisRef.current = lenis;

    // Publish a normalized scroll progress so consumers can drive parallax.
    lenis.on("scroll", (e: any) => {
      setScrollY(e.scrollY);
    });

    // Drive Lenis with its own rAF so it stays in lock-step with the browser.
    const loop = (time: number) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current, scrollY }}>
      {children}
    </LenisContext.Provider>
  );
}