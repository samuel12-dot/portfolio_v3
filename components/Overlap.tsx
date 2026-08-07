export function Overlap() {
  return (
    <section
      id="overlap"
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
          03
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
            <span>The</span>
          </span>
          <span>
            <span>Overlap</span>
          </span>
        </h2>
        <p
          style={{
            gridColumn: "10/13",
            margin: 0,
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: ".12em",
            textTransform: "uppercase",
            color: "var(--mid)",
            textAlign: "right",
          }}
        >
          From interface decisions to production code
        </p>
      </div>

      <div
        data-two
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          gap: 0,
          alignItems: "stretch",
          marginTop: "clamp(44px,6vw,100px)",
        }}
      >
        <div
          style={{
            padding: "clamp(20px,2.4vw,40px)",
            border: "1px solid var(--line)",
            borderRadius: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "var(--mid)",
              marginBottom: 28,
            }}
          >
            <span>01 — Wireframe.fig</span>
            <span>Spec</span>
          </div>
          <div
            data-wipe
            style={{
              border: "1px solid var(--line)",
              borderRadius: 2,
              padding: 20,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 20,
                right: -1,
                width: 34,
                borderTop: "1px dashed var(--accent)",
              }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ height: 10, width: "38%", background: "var(--line)" }} />
              <span style={{ fontSize: 11, letterSpacing: ".1em", color: "var(--accent)" }}>
                H3 / 20 / 600
              </span>
            </div>
            <div
              style={{
                height: 124,
                border: "1px dashed var(--mid)",
                borderRadius: 2,
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: -8,
                  left: 12,
                  background: "var(--bg)",
                  padding: "0 6px",
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                }}
              >
                Card / 320×124
              </span>
              <span
                style={{
                  position: "absolute",
                  bottom: 8,
                  right: 10,
                  fontSize: 11,
                  letterSpacing: ".1em",
                  color: "var(--mid)",
                }}
              >
                pad 16
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ height: 30, width: 104, background: "var(--line)" }} />
              <div style={{ height: 30, width: 76, border: "1px solid var(--line)" }} />
              <span style={{ fontSize: 11, letterSpacing: ".1em", color: "var(--mid)" }}>
                default / hover / focus
              </span>
            </div>
            <div style={{ height: 8, width: "70%", background: "var(--line)" }} />
            <div style={{ height: 8, width: "52%", background: "var(--line)" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 11,
                letterSpacing: ".1em",
                color: "var(--mid)",
                borderTop: "1px solid var(--line)",
                paddingTop: 12,
              }}
            >
              <span>gap 16</span>
              <span>grid 12 / gutter 24</span>
            </div>
          </div>
        </div>

        <div
          data-row
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            minWidth: "clamp(110px,11vw,180px)",
            padding: "0 clamp(12px,1.6vw,28px)",
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "var(--accent)",
              whiteSpace: "nowrap",
            }}
          >
            Design → Engineering
          </span>
          <span
            data-draw
            data-reveal
            style={{ width: "100%", height: 1, background: "var(--accent)" }}
          />
        </div>

        <div
          style={{
            padding: "clamp(20px,2.4vw,40px)",
            border: "1px solid var(--line)",
            borderRadius: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "var(--mid)",
              marginBottom: 28,
            }}
          >
            <span>02 — ListingCard.jsx</span>
            <span>Shipped</span>
          </div>
          <div data-wipe style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                border: "1px solid var(--line)",
                borderRadius: 2,
                padding: 18,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                }}
              >
                Live component
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 26,
                  letterSpacing: "-.03em",
                }}
              >
                Vintage Desk Lamp
              </span>
              <span style={{ fontSize: 15, color: "var(--mid)" }}>
                ₦18,500 · 400m away
              </span>
            </div>
            <pre
              style={{
                margin: 0,
                fontFamily: "ui-monospace,SFMono-Regular,Menlo,monospace",
                fontSize: 12,
                lineHeight: 1.8,
                color: "var(--mid)",
                whiteSpace: "pre-wrap",
              }}
            >
              <span style={{ color: "var(--accent)" }}>export function</span>{" "}
              <span style={{ color: "var(--fg)" }}>ListingCard</span>
              {"({ item }) {\n  "}
              <span style={{ color: "var(--accent)" }}>return</span>
              {" (\n    <article className=\"listing\">\n      <h3>{item.title}</h3>\n      <p>{fmt(item.price)} · {item.distance}</p>\n    </article>\n  )\n}"}
            </pre>
          </div>
        </div>
      </div>

      <div
        data-stagger
        data-reveal
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(16px,3vw,40px)",
          marginTop: 24,
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: ".12em",
          textTransform: "uppercase",
          color: "var(--mid)",
        }}
      >
        <span>Wireframe</span>
        <span style={{ color: "var(--accent)" }}>→</span>
        <span>Component</span>
        <span style={{ color: "var(--accent)" }}>→</span>
        <span>Code</span>
        <span style={{ color: "var(--accent)" }}>→</span>
        <span style={{ color: "var(--fg)" }}>Shipped product</span>
      </div>
    </section>
  );
}
