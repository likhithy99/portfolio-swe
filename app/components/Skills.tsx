const skillGroups = [
  {
    label: "Cloud Platforms",
    prefix: "cloud",
    skills: [
      { name: "AWS", level: 90 },
      { name: "GCP", level: 72 },
    ],
  },
  {
    label: "DevOps & CI/CD",
    prefix: "cicd",
    skills: [
      { name: "GitHub Actions", level: 88 },
      { name: "CI/CD Pipelines", level: 85 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 80 },
      { name: "Terraform", level: 82 },
      { name: "Linux", level: 87 },
    ],
  },
  {
    label: "Observability",
    prefix: "obs",
    skills: [
      { name: "Prometheus", level: 78 },
      { name: "Grafana", level: 75 },
      { name: "Monitoring & Alerting", level: 80 },
      { name: "On-call / Incident Response", level: 78 },
    ],
  },
  {
    label: "Languages",
    prefix: "lang",
    skills: [
      { name: "Python", level: 88 },
      { name: "Java", level: 78 },
      { name: "Go", level: 65 },
      { name: "TypeScript", level: 72 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    label: "Backend & Data",
    prefix: "backend",
    skills: [
      { name: "REST APIs", level: 85 },
      { name: "PostgreSQL", level: 78 },
      { name: "DynamoDB", level: 72 },
      { name: "Microservices", level: 80 },
    ],
  },
];

const certBadges = [
  "AWS Certified Cloud Practitioner",
  "Google Cloud Professional Cloud Architect",
  "Microsoft Technical Associate",
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span
            className="font-mono text-sm"
            style={{ color: "var(--accent)" }}
          >
            ~/skills --verbose
          </span>
          <div
            className="h-px flex-1"
            style={{ background: "var(--border)" }}
          />
        </div>

        {/* Certifications */}
        <div
          className="mb-12 p-5 rounded-lg"
          style={{
            border: "1px solid var(--border)",
            background: "var(--bg-secondary)",
          }}
        >
          <div
            className="font-mono text-xs mb-3"
            style={{ color: "var(--accent)" }}
          >
            $ cat certifications.txt
          </div>
          <div className="flex flex-wrap gap-3">
            {certBadges.map((cert) => (
              <span
                key={cert}
                className="font-mono text-xs px-3 py-1.5 rounded"
                style={{
                  border: "1px solid rgba(0, 212, 170, 0.3)",
                  color: "var(--text-primary)",
                  background: "rgba(0, 212, 170, 0.06)",
                }}
              >
                🏅 {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Skill groups grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.prefix}
              className="p-6 rounded-xl card-hover"
              style={{
                border: "1px solid var(--border-subtle)",
                background: "var(--bg-secondary)",
              }}
            >
              <div
                className="font-mono text-xs mb-5"
                style={{ color: "var(--accent)" }}
              >
                // {group.label}
              </div>

              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {skill.name}
                      </span>
                      <span
                        className="font-mono text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="h-1 rounded-full overflow-hidden"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${skill.level}%`,
                          background:
                            skill.level >= 80
                              ? "var(--accent)"
                              : skill.level >= 65
                              ? "rgba(0, 212, 170, 0.7)"
                              : "rgba(0, 212, 170, 0.45)",
                          transition: "width 1s ease",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
