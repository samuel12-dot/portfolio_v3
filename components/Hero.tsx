"use client";

import type { RefObject } from "react";

export function Hero({
  heroRef,
  clockRef,
}: {
  heroRef: RefObject<HTMLDivElement | null>;
  clockRef: RefObject<HTMLSpanElement | null>;
}) {
  return (
    <section
      data-sec
      style={{
        padding: "clamp(72px,12vw,180px) 0 clamp(72px,10vw,150px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div ref={heroRef} data-hero-fade style={{ willChange: "transform,opacity" }}>
        <div
          data-stagger
          data-reveal
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12,minmax(0,1fr))",
            gap: 24,
          }}
        >
          <span
            style={{
              gridColumn: "1/2",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "var(--mid)",
            }}
          >
            01
          </span>
          <span
            style={{
              gridColumn: "2/7",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "var(--mid)",
            }}
          >
            Product designer × Full-stack MERN engineer
          </span>
        </div>

        <h1
          data-display
          data-mask
          data-reveal
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(3rem,9vw,9rem)",
            letterSpacing: "-.04em",
            lineHeight: 0.9,
            margin: "clamp(36px,6vw,88px) 0 0",
            textTransform: "uppercase",
          }}
        >
          <span>
            <span>Ayodeji</span>
          </span>
          <span>
            <span>Samuel</span>
          </span>
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12,minmax(0,1fr))",
            gap: 24,
            marginTop: "clamp(40px,6vw,96px)",
          }}
        >
          <p
            data-reveal
            style={{
              gridColumn: "5/12",
              margin: 0,
              fontSize: "clamp(20px,2.4vw,32px)",
              lineHeight: 1.3,
              fontWeight: 500,
              letterSpacing: "-.02em",
              maxWidth: "28ch",
            }}
          >
            I{" "}
            <span
              data-accent-word
              data-reveal
              style={{ color: "var(--accent)", paddingBottom: 2 }}
            >
              design
            </span>{" "}
            the interface, then I build the API behind it.
          </p>
        </div>

        <div
          data-hero-meta
          data-stagger
          data-reveal
          style={{
            display: "flex",
            gap: "clamp(20px,5vw,80px)",
            alignItems: "center",
            marginTop: "clamp(48px,8vw,120px)",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: ".12em",
            textTransform: "uppercase",
            color: "var(--mid)",
          }}
        >
          <span>Lagos, Nigeria</span>
          <span>
            Local time — <span ref={clockRef} style={{ color: "var(--fg)" }}>--:--:--</span>
          </span>
          <span>Available for work</span>
        </div>
      </div>
    </section>
  );
}
