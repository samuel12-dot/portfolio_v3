import { STACK_GROUPS } from "@/lib/stack";

export function Stack() {
  return (
    <section
      id="stack"
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
          05
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
            <span>What I</span>
          </span>
          <span>
            <span>Build with</span>
          </span>
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12,minmax(0,1fr))",
          gap: 24,
          marginTop: "clamp(44px,6vw,100px)",
          rowGap: "clamp(40px,6vw,90px)",
        }}
      >
        {STACK_GROUPS.map((group) => (
          <div
            key={group.label}
            data-reveal
            data-off
            style={{
              gridColumn: group.col,
              display: "flex",
              flexDirection: "column",
              gap: 18,
              borderTop: "1px solid var(--line)",
              paddingTop: 18,
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: "var(--mid)",
              }}
            >
              {group.label}
            </span>
            <ul
              data-stagger
              data-reveal
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              {group.items.map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "clamp(22px,2.8vw,40px)",
                    letterSpacing: "-.03em",
                    lineHeight: 1.15,
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
