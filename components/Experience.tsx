import { TIMELINE } from "@/lib/timeline";

export function Experience() {
  return (
    <section
      id="experience"
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
          04
        </span>
        <h2
          data-display
          data-mask
          data-reveal
          style={{
            gridColumn: "2/9",
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
            <span>Experience</span>
          </span>
        </h2>
        <span
          style={{
            gridColumn: "9/13",
            textAlign: "right",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: ".12em",
            textTransform: "uppercase",
            color: "var(--mid)",
          }}
        >
          Pixels → Components → Systems
        </span>
      </div>

      <div style={{ marginTop: "clamp(40px,6vw,90px)" }}>
        {TIMELINE.map((t) => (
          <div
            key={t.year}
            data-reveal
            data-row
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12,minmax(0,1fr))",
              gap: 24,
              alignItems: "start",
              padding: "clamp(26px,3.6vw,52px) 0",
              borderTop: "1px solid var(--line)",
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
              {t.year}
            </span>
            <div
              style={{
                gridColumn: "2/8",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                borderLeft: "1px solid var(--line)",
                paddingLeft: "clamp(16px,2vw,32px)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "clamp(28px,3.6vw,52px)",
                  letterSpacing: "-.04em",
                  lineHeight: 0.95,
                  margin: 0,
                  textTransform: "uppercase",
                }}
              >
                {t.role}
              </h3>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "var(--mid)",
                }}
              >
                Univelcity — Yaba
              </span>
            </div>
            <p
              style={{
                gridColumn: "9/13",
                margin: 0,
                fontSize: 17,
                lineHeight: 1.6,
                color: "var(--mid)",
              }}
            >
              {t.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
