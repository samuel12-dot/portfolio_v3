export function Contact() {
  return (
    <section
      id="contact"
      data-sec
      style={{ padding: "clamp(72px,10vw,170px) 0 clamp(60px,8vw,130px)" }}
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
          06
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
          Contact
        </span>
      </div>

      <h2
        data-display
        data-mask
        data-reveal
        style={{
          margin: "clamp(32px,5vw,72px) 0 clamp(40px,6vw,88px)",
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "clamp(2.5rem,9vw,9rem)",
          letterSpacing: "-.04em",
          lineHeight: 0.9,
          textTransform: "uppercase",
        }}
      >
        <span>
          <span>Let&apos;s build</span>
        </span>
        <span>
          <span>Something.</span>
        </span>
      </h2>

      <a
        data-display
        href="mailto:samuelogunduyile12@gmail.com"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: "clamp(1.5rem,5vw,4.6rem)",
          letterSpacing: "-.04em",
          lineHeight: 1,
          display: "block",
          wordBreak: "break-word",
          backgroundImage: "linear-gradient(var(--accent),var(--accent))",
          backgroundSize: "0 2px",
          backgroundPosition: "0 100%",
          backgroundRepeat: "no-repeat",
          paddingBottom: 12,
          transition: "background-size .55s cubic-bezier(.22,.61,.36,1)",
        }}
        className="contact-email"
      >
        samuelogunduyile12@gmail.com
      </a>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "clamp(20px,4vw,56px)",
          marginTop: "clamp(36px,5vw,72px)",
          paddingTop: 20,
          borderTop: "1px solid var(--line)",
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: ".12em",
          textTransform: "uppercase",
          color: "var(--mid)",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(20px,4vw,56px)" }}>
          <a href="tel:+2348030658205" data-underline>
            +234 803 065 8205
          </a>
          <a
            href="https://wa.me/2348030658205"
            target="_blank"
            rel="noreferrer"
            data-underline-accent
          >
            Chat on WhatsApp ↗
          </a>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(20px,4vw,56px)" }}>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" data-underline>
            LinkedIn ↗
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" data-underline>
            GitHub ↗
          </a>
          <a href="https://www.behance.net/" target="_blank" rel="noreferrer" data-underline>
            Behance ↗
          </a>
        </div>
      </div>
    </section>
  );
}
