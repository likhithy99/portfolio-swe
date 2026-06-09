export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-8 px-6 border-t"
      style={{
        borderColor: "var(--border-subtle)",
        background: "var(--bg-primary)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span
          className="font-mono text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          © {year} Likhith Yogesh — Built with Next.js
        </span>
        <span
          className="font-mono text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          <span style={{ color: "var(--accent)" }}>~/</span>
          likhith
          <span className="cursor-blink" style={{ color: "var(--accent)" }}>
            _
          </span>
        </span>
      </div>
    </footer>
  );
}
