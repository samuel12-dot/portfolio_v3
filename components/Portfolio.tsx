"use client";

import { useRef } from "react";
import { useRevealAnimations } from "@/hooks/useRevealAnimations";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useLagosClock } from "@/hooks/useLagosClock";
import { ColumnRules } from "./ColumnRules";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Work } from "./Work";
import { Overlap } from "./Overlap";
import { Experience } from "./Experience";
import { Stack } from "./Stack";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export function Portfolio() {
  const progressRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const clockRef = useRef<HTMLSpanElement>(null);

  useRevealAnimations();
  useScrollProgress(progressRef, heroRef);
  useLagosClock(clockRef);

  return (
    <div
      style={{
        background: "var(--bg)",
        color: "var(--fg)",
        fontFamily: "var(--font-inter), system-ui, sans-serif",
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <ColumnRules />
      <Header progressRef={progressRef} />
      <main
        id="top"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1560,
          margin: "0 auto",
          padding: "0 clamp(24px,5vw,96px)",
        }}
      >
        <Hero heroRef={heroRef} clockRef={clockRef} />
        <Work />
        <Overlap />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
