const experiences = [
  {
    company: "Globus Medical",
    role: "Software Engineer Intern",
    period: "Sep 2025 – Dec 2025",
    location: "",
    tags: ["AWS", "CI/CD", "Python", "Cloud"],
    bullets: [
      "// Add your experience bullets here.",
    ],
  },
  {
    company: "Infosys",
    role: "Senior Systems Engineer",
    period: "Aug 2021 – Dec 2023",
    location: "Bangalore, India",
    tags: ["Docker", "Kubernetes", "Linux", "CI/CD", "Monitoring"],
    bullets: [
      "// Add your experience bullets here.",
    ],
  },
  {
    company: "Larsen & Toubro",
    role: "Software Engineer Intern",
    period: "May 2020 – Aug 2020",
    location: "Mumbai, India",
    tags: ["Python", "Backend", "Automation"],
    bullets: [
      "// Add your experience bullets here.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span
            className="font-mono text-sm"
            style={{ color: "var(--accent)" }}
          >
            $ experience --list
          </span>
          <div
            className="h-px flex-1"
            style={{ background: "var(--border)" }}
          />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px hidden lg:block"
            style={{
              background:
                "linear-gradient(to bottom, var(--accent), transparent)",
              opacity: 0.3,
            }}
          />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className="lg:pl-10 relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-[-4px] top-2 w-2 h-2 rounded-full hidden lg:block"
                  style={{ background: "var(--accent)" }}
                />

                <div
                  className="p-7 rounded-xl card-hover"
                  style={{
                    border: "1px solid var(--border-subtle)",
                    background: "var(--bg-secondary)",
                  }}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span
                          className="font-mono text-xs"
                          style={{ color: "var(--accent)" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3
                          className="font-mono font-semibold text-lg"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {exp.company}
                        </h3>
                      </div>
                      <div
                        className="text-sm font-medium"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {exp.role}
                      </div>
                    </div>

                    <div className="text-right">
                      <div
                        className="font-mono text-xs"
                        style={{ color: "var(--accent)" }}
                      >
                        {exp.period}
                      </div>
                      {exp.location && (
                        <div
                          className="text-xs mt-1"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {exp.location}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2.5 py-1 rounded"
                        style={{
                          background: "rgba(0, 212, 170, 0.08)",
                          color: "var(--accent)",
                          border: "1px solid rgba(0, 212, 170, 0.15)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, j) => {
                      const isPlaceholder = bullet.startsWith("//");
                      return (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-sm leading-relaxed"
                          style={{
                            color: isPlaceholder ? "var(--text-muted)" : "var(--text-secondary)",
                            fontWeight: 300,
                            fontFamily: isPlaceholder ? "var(--font-jetbrains), monospace" : "inherit",
                          }}
                        >
                          {!isPlaceholder && (
                            <span
                              className="font-mono mt-0.5 shrink-0"
                              style={{ color: "var(--accent)" }}
                            >
                              ▸
                            </span>
                          )}
                          {bullet}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
