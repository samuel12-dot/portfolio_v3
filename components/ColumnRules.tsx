export function ColumnRules({ hidden }: { hidden?: boolean }) {
  if (hidden) return null;

  return (
    <div
      data-rules
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        maxWidth: 1560,
        margin: "0 auto",
        padding: "0 clamp(24px,5vw,96px)",
        display: "grid",
        gridTemplateColumns: "repeat(12,minmax(0,1fr))",
      }}
    >
      <span style={{ borderLeft: "1px solid var(--line)", opacity: 0.55 }} />
      {Array.from({ length: 10 }).map((_, i) => (
        <span key={i} style={{ opacity: 0 }} />
      ))}
      <span style={{ borderRight: "1px solid var(--line)", opacity: 0.55 }} />
    </div>
  );
}
