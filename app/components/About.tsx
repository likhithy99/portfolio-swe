const stats = [
  { value: "3+", label: "Years of industry experience" },
  { value: "3", label: "Certifications earned" },
  { value: "3", label: "Companies worked at" },
  { value: "AWS", label: "Primary cloud platform" },
];

export default function About() {
  return (
    <section
      id="about"
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
            ~/about
          </span>
          <div
            className="h-px flex-1"
            style={{ background: "var(--border)" }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <h2
              className="font-mono font-bold text-3xl mb-6 leading-snug"
              style={{ color: "var(--text-primary)" }}
            >
              Building reliable systems,{" "}
              <span style={{ color: "var(--accent)" }}>at scale</span>
            </h2>

            <div
              className="space-y-4 text-base leading-relaxed"
              style={{ color: "var(--text-secondary)", fontWeight: 300 }}
            >
              <p>
                I&apos;m a software engineer focused on cloud and DevOps. I hold an MS in
                Information Systems from{" "}
                <span style={{ color: "var(--text-primary)" }}>
                  Northeastern University
                </span>{" "}
                and have industry experience at{" "}
                <span style={{ color: "var(--text-primary)" }}>Globus Medical</span>,{" "}
                <span style={{ color: "var(--text-primary)" }}>Infosys</span>, and{" "}
                <span style={{ color: "var(--text-primary)" }}>Larsen &amp; Toubro</span>,
                working across the software development lifecycle — building applications,
                automating deployments, and improving system reliability.
              </p>
              <p>
                I&apos;m passionate about infrastructure automation, CI/CD, observability,
                and building systems that scale.
              </p>
            </div>

            {/* Education block */}
            <div
              className="mt-8 p-5 rounded-lg space-y-4"
              style={{
                border: "1px solid var(--border)",
                background: "var(--bg-card)",
              }}
            >
              <div
                className="font-mono text-xs mb-1"
                style={{ color: "var(--accent)" }}
              >
                // education
              </div>

              <div>
                <div style={{ color: "var(--text-primary)" }} className="font-medium">
                  Northeastern University
                </div>
                <div
                  style={{ color: "var(--text-secondary)" }}
                  className="text-sm mt-0.5"
                >
                  Master of Science · Information Systems
                </div>
                <div
                  style={{ color: "var(--text-muted)" }}
                  className="font-mono text-xs mt-1"
                >
                  Boston, MA · Jan 2024 – Apr 2026
                </div>
              </div>

              <div
                className="pt-4 border-t"
                style={{ borderColor: "var(--border-subtle)" }}
              >
                <div style={{ color: "var(--text-primary)" }} className="font-medium">
                  NMAM University
                </div>
                <div
                  style={{ color: "var(--text-secondary)" }}
                  className="text-sm mt-0.5"
                >
                  Bachelor of Engineering · Computer Science
                </div>
                <div
                  style={{ color: "var(--text-muted)" }}
                  className="font-mono text-xs mt-1"
                >
                  Aug 2017 – Jun 2021
                </div>
              </div>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-lg card-hover"
                style={{
                  border: "1px solid var(--border-subtle)",
                  background: "var(--bg-card)",
                }}
              >
                <div
                  className="font-mono font-bold text-3xl mb-2 accent-glow"
                  style={{ color: "var(--accent)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm leading-snug"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}

            {/* Cloud platforms badge */}
            <div
              className="col-span-2 p-5 rounded-lg"
              style={{
                border: "1px solid var(--border)",
                background: "var(--bg-card)",
              }}
            >
              <div
                className="font-mono text-xs mb-3"
                style={{ color: "var(--accent)" }}
              >
                $ cat interests.txt
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Cloud Infrastructure",
                  "CI/CD Automation",
                  "Container Orchestration",
                  "Infrastructure as Code",
                  "Site Reliability",
                  "Observability",
                  "Platform Engineering",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(0, 212, 170, 0.1)",
                      color: "var(--accent)",
                      border: "1px solid rgba(0, 212, 170, 0.2)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
