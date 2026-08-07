import type { CSSProperties } from "react";
import type { ProjectLink } from "@/lib/projects";

export type ProjectCardViewModel = {
  key: string;
  meta: string;
  cat: string;
  title: string;
  outcome: string;
  stackChips: { label: string; rule: string }[];
  links: ProjectLink[];
  slot: string;
  url: string;
  isDesign: boolean;
  isFrontend: boolean;
  isFull: boolean;
  span: number;
  visible: boolean;
  hidden: boolean;
  delay: number;
};

const mediaWipeStyle: CSSProperties = {
  width: "100%",
  aspectRatio: "21/9",
  background:
    "repeating-linear-gradient(135deg,var(--stripe) 0 8px,transparent 8px 16px)",
  display: "flex",
  alignItems: "flex-end",
  padding: 14,
  transition:
    "transform .5s cubic-bezier(.22,.61,.36,1),clip-path .6s cubic-bezier(.22,.61,.36,1)",
};

const slotLabelStyle: CSSProperties = {
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: ".12em",
  textTransform: "uppercase",
  color: "var(--mid)",
};

export function ProjectCard({ card }: { card: ProjectCardViewModel }) {
  const wrapStyle: CSSProperties = {
    gridColumn: `span ${card.span}`,
    display: card.hidden ? "none" : undefined,
    opacity: card.visible ? 1 : 0,
    transform: card.visible ? "none" : "translateY(12px)",
    transition:
      "opacity .45s cubic-bezier(.22,.61,.36,1),transform .45s cubic-bezier(.22,.61,.36,1)",
    transitionDelay: `${card.delay}ms`,
  };

  return (
    <div data-span style={wrapStyle}>
      <article
        data-card
        style={{
          border: "1px solid transparent",
          borderRadius: 2,
          padding: "clamp(14px,1.4vw,22px)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 22,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: 16,
            borderBottom: "1px solid var(--line)",
            paddingBottom: 12,
          }}
        >
          <span
            data-tag
            style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "var(--mid)",
              transition: "color .35s",
            }}
          >
            {card.cat}
          </span>
          <span style={slotLabelStyle}>{card.meta}</span>
        </div>

        {card.isDesign && (
          <div
            style={{
              overflow: "hidden",
              border: "1px solid var(--line)",
              borderRadius: 2,
            }}
          >
            <div data-media data-wipe style={mediaWipeStyle}>
              <span style={slotLabelStyle}>{card.slot}</span>
            </div>
          </div>
        )}

        {card.isFrontend && (
          <div
            style={{
              border: "1px solid var(--line)",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "9px 12px",
                borderBottom: "1px solid var(--line)",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  border: "1px solid var(--mid)",
                  borderRadius: "50%",
                }}
              />
              <span
                style={{
                  width: 6,
                  height: 6,
                  border: "1px solid var(--mid)",
                  borderRadius: "50%",
                }}
              />
              <span
                style={{
                  width: 6,
                  height: 6,
                  border: "1px solid var(--mid)",
                  borderRadius: "50%",
                }}
              />
              <span
                style={{
                  marginLeft: 12,
                  fontSize: 11,
                  letterSpacing: ".06em",
                  color: "var(--mid)",
                }}
              >
                {card.url}
              </span>
            </div>
            <div
              data-media
              data-wipe
              style={{ ...mediaWipeStyle, aspectRatio: "16/9" }}
            >
              <span style={slotLabelStyle}>{card.slot}</span>
            </div>
          </div>
        )}

        {card.isFull && (
          <div
            data-two
            style={{
              display: "grid",
              gridTemplateColumns: "1.6fr 1fr",
              gap: 18,
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                overflow: "hidden",
                border: "1px solid var(--line)",
                borderRadius: 2,
              }}
            >
              <div
                data-media
                data-wipe
                style={{ ...mediaWipeStyle, aspectRatio: "16/10" }}
              >
                <span style={slotLabelStyle}>{card.slot}</span>
              </div>
            </div>
            <div
              style={{
                border: "1px solid var(--line)",
                borderRadius: 2,
                padding: 16,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "var(--mid)",
              }}
            >
              <div
                style={{
                  border: "1px solid var(--line)",
                  borderRadius: 2,
                  padding: "9px 10px",
                  color: "var(--fg)",
                }}
              >
                Client
              </div>
              <div
                style={{
                  height: 18,
                  width: 1,
                  background: "var(--line)",
                  marginLeft: 16,
                }}
              />
              <div
                style={{
                  border: "1px solid var(--accent)",
                  borderRadius: 2,
                  padding: "9px 10px",
                  color: "var(--accent)",
                }}
              >
                API
              </div>
              <div
                style={{
                  height: 18,
                  width: 1,
                  background: "var(--line)",
                  marginLeft: 16,
                }}
              />
              <div
                style={{
                  border: "1px solid var(--line)",
                  borderRadius: 2,
                  padding: "9px 10px",
                  color: "var(--fg)",
                }}
              >
                Database
              </div>
            </div>
          </div>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            marginTop: "auto",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(28px,3.6vw,56px)",
              letterSpacing: "-.04em",
              lineHeight: 0.95,
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            {card.title}
          </h3>
          <p
            style={{
              margin: 0,
              fontSize: 17,
              lineHeight: 1.6,
              color: "var(--mid)",
              maxWidth: "60ch",
            }}
          >
            {card.outcome}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 14,
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: ".12em",
            textTransform: "uppercase",
            color: "var(--mid)",
          }}
        >
          {card.stackChips.map((chip, i) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span>{chip.label}</span>
              <span style={{ width: 1, height: 11, background: chip.rule }} />
            </span>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            gap: 26,
            borderTop: "1px solid var(--line)",
            paddingTop: 16,
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: ".12em",
            textTransform: "uppercase",
          }}
        >
          {card.links.map((link) => (
            <a key={link.label} href={link.href} data-underline-accent>
              {link.label}
            </a>
          ))}
        </div>
      </article>
    </div>
  );
}
