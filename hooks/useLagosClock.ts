"use client";

import { useEffect, type RefObject } from "react";

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Africa/Lagos",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

export function useLagosClock(clockRef: RefObject<HTMLSpanElement | null>) {
  useEffect(() => {
    const tick = () => {
      if (clockRef.current) {
        clockRef.current.textContent = formatter.format(new Date());
      }
    };
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, [clockRef]);
}
