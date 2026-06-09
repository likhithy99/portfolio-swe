"use client";

import { useEffect, useState } from "react";

const lines = [
  { prompt: "$ whoami", output: "Likhith Yogesh" },
  { prompt: "$ cat role.txt", output: "Software Engineer | Cloud & DevOps" },
  { prompt: "$ echo $LOCATION", output: "Boston, MA — Northeastern University" },
  { prompt: "$ uptime", output: "MS Information Systems · Apr 2026" },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typedOutput, setTypedOutput] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [phase, setPhase] = useState<"prompt" | "output" | "done">("prompt");

  useEffect(() => {
    if (visibleLines >= lines.length) return;

    const line = lines[visibleLines];

    if (phase === "prompt") {
      const t = setTimeout(() => {
        setPhase("output");
      }, 300);
      return () => clearTimeout(t);
    }

    if (phase === "output") {
      const target = line.output;
      if (typedOutput.length < target.length) {
        const t = setTimeout(() => {
          setTypedOutput(target.slice(0, typedOutput.length + 1));
        }, 28);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setCurrentLine((c) => c + 1);
          setVisibleLines((v) => v + 1);
          setTypedOutput("");
          setPhase("prompt");
        }, 300);
        return () => clearTimeout(t);
      }
    }
  }, [visibleLines, phase, typedOutput, currentLine]);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 relative overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 170, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 170, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0, 212, 170, 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Label */}
            <div
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest mb-8 opacity-0 animate-fade-in-up delay-100"
              style={{ color: "var(--accent)" }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "var(--accent)" }}
              />
              AVAILABLE FOR FULL-TIME ROLES · 2026
            </div>

            <h1
              className="font-mono font-bold mb-4 leading-tight opacity-0 animate-fade-in-up delay-200"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "var(--text-primary)",
              }}
            >
              Likhith{" "}
              <span style={{ color: "var(--accent)" }} className="accent-glow">
                Yogesh
              </span>
            </h1>

            <p
              className="font-mono text-xl mb-6 opacity-0 animate-fade-in-up delay-300"
              style={{ color: "var(--text-secondary)" }}
            >
              Software Engineer | Cloud &amp; DevOps
            </p>

            <p
              className="text-base leading-relaxed mb-10 max-w-lg opacity-0 animate-fade-in-up delay-400"
              style={{ color: "var(--text-secondary)", fontWeight: 300 }}
            >
              Software engineer focused on cloud infrastructure and DevOps. I build and
              automate reliable, scalable systems — CI/CD pipelines, containerized
              services, and cloud-native applications on AWS.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up delay-500">
              <a
                href="#experience"
                className="font-mono text-sm px-6 py-3 rounded transition-all duration-200"
                style={{
                  background: "var(--accent)",
                  color: "#0f1117",
                  fontWeight: 600,
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.background = "var(--accent-dim)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.background = "var(--accent)";
                }}
              >
                $ view experience
              </a>
              <a
                href="#contact"
                className="font-mono text-sm px-6 py-3 rounded transition-all duration-200"
                style={{
                  border: "1px solid rgba(0, 212, 170, 0.35)",
                  color: "var(--accent)",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.background = "rgba(0, 212, 170, 0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.background = "transparent";
                }}
              >
                // get in touch
              </a>
              <a
                href="https://drive.google.com/file/d/12JWA7mUdDsblbMG_6XZqPGgFpKu1TWn_/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm px-6 py-3 rounded transition-all duration-200"
                style={{
                  border: "1px solid rgba(0, 212, 170, 0.35)",
                  color: "var(--accent)",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.background = "rgba(0, 212, 170, 0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.background = "transparent";
                }}
              >
                $ resume ↗
              </a>
            </div>
          </div>

          {/* Right: Terminal block */}
          <div
            className="opacity-0 animate-fade-in-up delay-400 rounded-xl overflow-hidden"
            style={{
              border: "1px solid var(--border)",
              background: "var(--bg-secondary)",
              fontFamily: "var(--font-jetbrains), monospace",
            }}
          >
            {/* Terminal chrome */}
            <div
              className="flex items-center gap-2 px-4 py-3 border-b"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "var(--border-subtle)",
              }}
            >
              <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#28ca41" }} />
              <span
                className="ml-3 text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                likhith@cloud:~
              </span>
            </div>

            {/* Terminal content */}
            <div className="p-6 min-h-[280px]">
              {lines.slice(0, visibleLines).map((line, i) => (
                <div key={i} className="mb-3">
                  <div className="flex items-center gap-2">
                    <span style={{ color: "var(--accent)" }}>{line.prompt.split(" ")[0]}</span>
                    <span style={{ color: "var(--text-secondary)" }}>
                      {line.prompt.split(" ").slice(1).join(" ")}
                    </span>
                  </div>
                  <div
                    className="mt-1 ml-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {line.output}
                  </div>
                </div>
              ))}

              {/* Currently typing line */}
              {visibleLines < lines.length && (
                <div className="mb-3">
                  <div className="flex items-center gap-2">
                    <span style={{ color: "var(--accent)" }}>
                      {lines[visibleLines].prompt.split(" ")[0]}
                    </span>
                    <span style={{ color: "var(--text-secondary)" }}>
                      {lines[visibleLines].prompt.split(" ").slice(1).join(" ")}
                    </span>
                  </div>
                  {phase === "output" && (
                    <div className="mt-1 ml-2" style={{ color: "var(--text-primary)" }}>
                      {typedOutput}
                      <span className="cursor-blink" style={{ color: "var(--accent)" }}>
                        ▌
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Idle cursor after done */}
              {visibleLines >= lines.length && (
                <div className="flex items-center gap-2 mt-2">
                  <span style={{ color: "var(--accent)" }}>$</span>
                  <span
                    className="cursor-blink"
                    style={{ color: "var(--accent)" }}
                  >
                    ▌
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in-up delay-600"
          style={{ color: "var(--text-muted)" }}
        >
          <span className="font-mono text-xs">scroll</span>
          <div
            className="w-px h-12"
            style={{
              background:
                "linear-gradient(to bottom, var(--accent), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
