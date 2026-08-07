"use client";

import { useEffect, type RefObject } from "react";

export function useScrollProgress(
  progressRef: RefObject<HTMLDivElement | null>,
  heroRef: RefObject<HTMLDivElement | null>
) {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY || 0;
        const max = Math.max(
          1,
          document.documentElement.scrollHeight - window.innerHeight
        );
        const bar = progressRef.current;
        if (bar) bar.style.width = `${Math.min(100, (y / max) * 100)}%`;

        const hero = heroRef.current;
        if (hero && !reduced) {
          const p = Math.min(1, y / Math.max(1, window.innerHeight * 0.9));
          hero.style.opacity = String(1 - p * 0.85);
          hero.style.transform = `translate3d(0,${(-p * 40).toFixed(1)}px,0)`;
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [progressRef, heroRef]);
}
