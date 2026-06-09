"use client";

import { useState, useEffect } from "react";

const RESUME_URL =
  "https://drive.google.com/file/d/12JWA7mUdDsblbMG_6XZqPGgFpKu1TWn_/view?usp=drive_link";

const navItems = [
  { label: "~/about", href: "#about" },
  { label: "$ experience", href: "#experience" },
  { label: "$ projects", href: "#projects" },
  { label: "~/skills", href: "#skills" },
  { label: "// contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(15, 17, 23, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(0, 212, 170, 0.1)"
          : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-mono font-bold text-sm tracking-widest"
          style={{ color: "var(--accent)" }}
        >
          <span style={{ color: "var(--text-secondary)" }}>~/</span>
          likhith
          <span className="cursor-blink" style={{ color: "var(--accent)" }}>
            _
          </span>
        </a>

        {/* Desktop: nav links + resume button grouped on the right */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="nav-link font-mono text-xs tracking-wider"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div
            className="h-4 w-px"
            style={{ background: "rgba(0, 212, 170, 0.2)" }}
          />

          {/* Resume button */}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs px-3.5 py-2 rounded transition-all duration-200"
            style={{
              border: "1px solid rgba(0, 212, 170, 0.4)",
              color: "var(--accent)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(0, 212, 170, 0.1)";
              el.style.borderColor = "rgba(0, 212, 170, 0.65)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
              el.style.borderColor = "rgba(0, 212, 170, 0.4)";
            }}
          >
            $ resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              background: "var(--text-secondary)",
              transform: menuOpen
                ? "rotate(45deg) translate(3px, 3px)"
                : "none",
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              background: "var(--text-secondary)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              background: "var(--text-secondary)",
              transform: menuOpen
                ? "rotate(-45deg) translate(3px, -3px)"
                : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2"
          style={{
            background: "rgba(15, 17, 23, 0.98)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <ul className="flex flex-col gap-4 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-mono text-sm"
                  style={{ color: "var(--text-secondary)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}

            {/* Divider */}
            <li
              className="h-px"
              style={{ background: "var(--border-subtle)" }}
              aria-hidden
            />

            {/* Resume */}
            <li>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm px-4 py-2 rounded transition-all duration-200"
                style={{
                  border: "1px solid rgba(0, 212, 170, 0.4)",
                  color: "var(--accent)",
                }}
                onClick={() => setMenuOpen(false)}
              >
                $ resume ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
