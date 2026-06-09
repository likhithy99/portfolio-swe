"use client";

import { useState } from "react";

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: "var(--accent)" }}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("y.l@northeastern.edu");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-28 px-6"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span
            className="font-mono text-sm"
            style={{ color: "var(--accent)" }}
          >
            // contact
          </span>
          <div
            className="h-px flex-1"
            style={{ background: "var(--border)" }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <h2
              className="font-mono font-bold text-3xl mb-4 leading-snug"
              style={{ color: "var(--text-primary)" }}
            >
              Let&apos;s build something{" "}
              <span style={{ color: "var(--accent)" }}>reliable</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--text-secondary)", fontWeight: 300 }}
            >
              I&apos;m actively looking for full-time Software Engineer / Cloud / DevOps
              roles starting mid-2026. Open to discussing opportunities in infrastructure,
              platform engineering, or SRE.
            </p>

            {/* Contact options */}
            <div className="space-y-4">
              {/* Email */}
              <div
                className="flex items-center justify-between p-5 rounded-xl card-hover cursor-pointer"
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--bg-card)",
                }}
                onClick={copyEmail}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-mono text-sm"
                    style={{
                      background: "rgba(0, 212, 170, 0.12)",
                      color: "var(--accent)",
                    }}
                  >
                    @
                  </div>
                  <div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Email
                    </div>
                    <div
                      className="font-mono text-xs mt-0.5"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      y.l@northeastern.edu
                    </div>
                  </div>
                </div>
                <span
                  className="font-mono text-xs transition-colors duration-200"
                  style={{ color: "var(--accent)" }}
                >
                  {copied ? "copied!" : "copy"}
                </span>
              </div>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/likhithy99"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 rounded-xl card-hover"
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--bg-card)",
                  textDecoration: "none",
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(0, 212, 170, 0.12)" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ color: "var(--accent)" }}
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: "var(--text-primary)" }}
                    >
                      LinkedIn
                    </div>
                    <div
                      className="font-mono text-xs mt-0.5"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      linkedin.com/in/likhithy99
                    </div>
                  </div>
                </div>
                <ArrowIcon />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/likhithy99"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 rounded-xl card-hover"
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--bg-card)",
                  textDecoration: "none",
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(0, 212, 170, 0.12)" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ color: "var(--accent)" }}
                    >
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </div>
                  <div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: "var(--text-primary)" }}
                    >
                      GitHub
                    </div>
                    <div
                      className="font-mono text-xs mt-0.5"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      github.com/likhithy99
                    </div>
                  </div>
                </div>
                <ArrowIcon />
              </a>

              {/* Resume */}
              <a
                href="https://drive.google.com/file/d/12JWA7mUdDsblbMG_6XZqPGgFpKu1TWn_/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 rounded-xl card-hover"
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--bg-card)",
                  textDecoration: "none",
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(0, 212, 170, 0.12)" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ color: "var(--accent)" }}
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <line x1="10" y1="9" x2="8" y2="9" />
                    </svg>
                  </div>
                  <div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Resume
                    </div>
                    <div
                      className="font-mono text-xs mt-0.5"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      $ cat resume.pdf
                    </div>
                  </div>
                </div>
                <ArrowIcon />
              </a>
            </div>
          </div>

          {/* Right: Terminal status */}
          <div
            className="rounded-xl overflow-hidden"
            style={{
              border: "1px solid var(--border)",
              background: "var(--bg-card)",
              fontFamily: "var(--font-jetbrains), monospace",
            }}
          >
            {/* Chrome */}
            <div
              className="flex items-center gap-2 px-4 py-3 border-b"
              style={{
                background: "rgba(255,255,255,0.02)",
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
                likhith@cloud:~ status
              </span>
            </div>

            <div className="p-6 space-y-3 text-sm">
              {[
                { key: "STATUS", value: "Actively seeking opportunities", highlight: true },
                { key: "TYPE", value: "Full-time · SWE / Cloud / DevOps" },
                { key: "START", value: "Available from mid-2026" },
                { key: "LOCATION", value: "Open to remote + US relocation" },
                { key: "CLEARANCE", value: "Not required" },
              ].map(({ key, value, highlight }) => (
                <div key={key} className="flex items-start gap-3">
                  <span
                    className="font-mono text-xs w-24 shrink-0 mt-0.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {key}
                  </span>
                  <span
                    style={{
                      color: highlight ? "var(--accent)" : "var(--text-secondary)",
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}

              <div className="pt-4 border-t" style={{ borderColor: "var(--border-subtle)" }}>
                <div className="flex items-center gap-2">
                  <span style={{ color: "var(--accent)" }}>$</span>
                  <span style={{ color: "var(--text-secondary)" }}>
                    send --message &quot;Let&apos;s connect&quot;
                  </span>
                  <span className="cursor-blink" style={{ color: "var(--accent)" }}>
                    ▌
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
