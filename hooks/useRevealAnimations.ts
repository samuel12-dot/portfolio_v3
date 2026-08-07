"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = "[data-reveal],[data-wipe],[data-mask]";

export function useRevealAnimations() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-in", "1");
          }
        });
      },
      { threshold: 0.12 }
    );

    const sweep = () => {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
        if (el.getAttribute("data-in") === "1") return;
        if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
          el.setAttribute("data-in", "1");
          return;
        }
        observer.observe(el);
      });
    };

    sweep();
    const sweepTimer = window.setInterval(sweep, 800);

    const failSafe = window.setTimeout(() => {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.setAttribute("data-in", "1");
        }
      });
    }, 1200);

    if (reduced) {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
        el.setAttribute("data-in", "1");
      });
    }

    return () => {
      window.clearInterval(sweepTimer);
      window.clearTimeout(failSafe);
      observer.disconnect();
    };
  }, []);
}
