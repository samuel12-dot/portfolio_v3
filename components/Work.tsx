"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CATEGORIES, PROJECTS, computeSpans, pad, type ProjectKey } from "@/lib/projects";
import { ProjectCard, type ProjectCardViewModel } from "./ProjectCard";

type FilterKey = "all" | ProjectKey;

const VALID_FILTERS: FilterKey[] = ["all", "product-design", "frontend", "full-stack"];

export function Work() {
  const [filter, setFilterState] = useState<FilterKey>("all");
  const [shown, setShown] = useState(true);
  const timers = useRef<{ t1?: number; t2?: number }>({});
  const reducedRef = useRef(false);

  useEffect(() => {
    reducedRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const hash = (location.hash || "").replace("#", "");
    if (VALID_FILTERS.includes(hash as FilterKey)) {
      setFilterState(hash as FilterKey);
    }
    return () => {
      window.clearTimeout(timers.current.t1);
      window.clearTimeout(timers.current.t2);
    };
  }, []);

  const setFilter = (f: FilterKey) => {
    if (f === filter) return;
    try {
      history.replaceState(null, "", `#${f}`);
    } catch {
      // ignore
    }
    if (reducedRef.current) {
      setFilterState(f);
      return;
    }
    setShown(false);
    window.clearTimeout(timers.current.t1);
    window.clearTimeout(timers.current.t2);
    timers.current.t1 = window.setTimeout(() => setFilterState(f), 300);
    timers.current.t2 = window.setTimeout(() => setShown(true), 350);
  };

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: PROJECTS.length };
    (Object.keys(CATEGORIES) as ProjectKey[]).forEach((k) => {
      c[k] = PROJECTS.filter((p) => p.key === k).length;
    });
    return c;
  }, []);

  const filters = useMemo(() => {
    const list: { k: FilterKey; label: string }[] = [
      { k: "all", label: "All" },
      ...(Object.keys(CATEGORIES) as ProjectKey[]).map((k) => ({
        k,
        label: CATEGORIES[k],
      })),
    ];
    return list.map((f) => ({
      key: f.k,
      label: `${f.label.toUpperCase()} (${pad(counts[f.k])})`,
      pressed: f.k === filter,
    }));
  }, [filter, counts]);

  const visible = useMemo(
    () => PROJECTS.filter((p) => filter === "all" || p.key === filter),
    [filter]
  );
  const spans = useMemo(() => computeSpans(visible.length), [visible.length]);

  const cards: ProjectCardViewModel[] = useMemo(() => {
    let vi = -1;
    return PROJECTS.map((p, i) => {
      const inList = filter === "all" || p.key === filter;
      if (inList) vi++;
      const span = inList ? spans[vi] : 6;
      const delay = inList ? vi * 40 : 0;
      const isVisible = shown && inList;
      return {
        key: `${p.title}-${i}`,
        meta: p.placeholder
          ? "Placeholder project"
          : `${pad(i + 1)} / ${pad(PROJECTS.length)}`,
        cat: CATEGORIES[p.key],
        title: p.title,
        outcome: p.outcome,
        stackChips: p.stack.map((s, j) => ({
          label: s,
          rule: j === p.stack.length - 1 ? "transparent" : "var(--line)",
        })),
        links: p.links,
        slot: p.slot,
        url: p.url || "localhost:3000",
        isDesign: p.key === "product-design",
        isFrontend: p.key === "frontend",
        isFull: p.key === "full-stack",
        span,
        visible: isVisible,
        hidden: !inList,
        delay,
      };
    });
  }, [filter, shown, spans]);

  return (
    <section
      id="work"
      data-sec
      style={{
        padding: "clamp(72px,10vw,170px) 0",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12,minmax(0,1fr))",
          gap: 24,
          alignItems: "end",
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
          02
        </span>
        <h2
          data-display
          data-mask
          data-reveal
          style={{
            gridColumn: "2/10",
            margin: 0,
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "clamp(2.5rem,7vw,7rem)",
            letterSpacing: "-.04em",
            lineHeight: 0.9,
            textTransform: "uppercase",
          }}
        >
          <span>
            <span>Selected</span>
          </span>
          <span>
            <span>Work</span>
          </span>
        </h2>
        <span
          style={{
            gridColumn: "11/13",
            textAlign: "right",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: ".12em",
            textTransform: "uppercase",
            color: "var(--mid)",
          }}
        >
          {pad(visible.length)} shown
        </span>
      </div>

      <div
        style={{
          position: "sticky",
          top: 49,
          zIndex: 50,
          background: "var(--bg)",
          borderBottom: "1px solid var(--line)",
          margin: "clamp(40px,6vw,90px) 0 clamp(32px,4vw,64px)",
        }}
      >
        <div
          role="group"
          aria-label="Filter projects by category"
          style={{
            display: "flex",
            gap: "clamp(18px,3vw,44px)",
            overflowX: "auto",
            padding: "14px 0 0",
            scrollbarWidth: "none",
          }}
        >
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={f.pressed}
              style={{
                fontFamily: "inherit",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: ".12em",
                whiteSpace: "nowrap",
                padding: "0 0 12px",
                background: "none",
                border: 0,
                borderBottom: `2px solid ${f.pressed ? "var(--accent)" : "transparent"}`,
                color: f.pressed ? "var(--fg)" : "var(--mid)",
                cursor: "pointer",
                transition: "color .35s,border-color .45s cubic-bezier(.22,.61,.36,1)",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div
        data-grid
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12,minmax(0,1fr))",
          gap: "clamp(24px,3vw,48px)",
          alignItems: "start",
        }}
      >
        {cards.map((card) => (
          <ProjectCard key={card.key} card={card} />
        ))}
      </div>
    </section>
  );
}
