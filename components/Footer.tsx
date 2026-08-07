export function Footer() {
  return (
    <footer style={{ position: "relative", zIndex: 1, borderTop: "1px solid var(--line)" }}>
      <div
        style={{
          maxWidth: 1560,
          margin: "0 auto",
          padding: "22px clamp(24px,5vw,96px)",
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          justifyContent: "space-between",
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: ".12em",
          textTransform: "uppercase",
          color: "var(--mid)",
        }}
      >
        <span>Ayodeji Samuel — 2026</span>
        <span>Designed + engineered by Samuel</span>
      </div>
    </footer>
  );
}
