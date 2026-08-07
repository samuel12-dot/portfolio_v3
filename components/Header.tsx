"use client";

import type { RefObject } from "react";

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#overlap", label: "Overlap" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function Header({
  progressRef,
}: {
  progressRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        background: "var(--bg)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        ref={progressRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          bottom: -1,
          height: 2,
          width: "0%",
          background: "var(--accent)",
          transition: "width .12s linear",
          zIndex: 2,
        }}
      />
      <div
        style={{
          maxWidth: 1560,
          margin: "0 auto",
          padding: "14px clamp(24px,5vw,96px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <a
          href="#top"
          style={{
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: ".12em",
            textTransform: "uppercase",
          }}
        >
          Ayodeji Samuel
        </a>
        <nav
          data-nav-links
          style={{
            display: "flex",
            gap: 30,
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: ".12em",
            textTransform: "uppercase",
            color: "var(--mid)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} data-underline>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
