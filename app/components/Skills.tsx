const skillGroups = [
  {
    label: "Cloud Platforms",
    prefix: "cloud",
    skills: ["AWS", "GCP"],
  },
  {
    label: "DevOps & CI/CD",
    prefix: "cicd",
    skills: [
      "GitHub Actions",
      "CI/CD Pipelines",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Linux",
    ],
  },
  {
    label: "Observability",
    prefix: "obs",
    skills: [
      "Prometheus",
      "Grafana",
      "Monitoring & Alerting",
      "On-call / Incident Response",
    ],
  },
  {
    label: "Languages",
    prefix: "lang",
    skills: ["Python", "Java", "Go", "TypeScript", "SQL"],
  },
  {
    label: "Backend & Data",
    prefix: "backend",
    skills: ["REST APIs", "PostgreSQL", "DynamoDB", "Microservices"],
  },
  {
    label: "Machine Learning & Data Science",
    prefix: "ml",
    skills: [
      "Machine Learning",
      "scikit-learn",
      "XGBoost / LightGBM",
      "Model Evaluation & Calibration",
      "SHAP / Explainable AI",
      "Feature Engineering",
      "pandas / NumPy",
    ],
  },
  {
    label: "NLP & Deep Learning",
    prefix: "nlp",
    skills: [
      "NLP",
      "Deep Learning",
      "Transformers (DistilBERT)",
      "PyTorch",
      "Hugging Face",
      "Model Serving (FastAPI)",
      "Streamlit",
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
                  border: "1px solid rgba(var(--accent-rgb), 0.3)",
                  color: "var(--text-primary)",
                  background: "rgba(var(--accent-rgb), 0.06)",
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
              className="hud-corners p-6 rounded-xl card-hover"
              style={{
                border: "1px solid var(--border-subtle)",
                background: "var(--bg-secondary)",
              }}
            >
              <div
                className="font-mono text-xs mb-4"
                style={{ color: "var(--accent)" }}
              >
                // {group.label}
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-md"
                    style={{
                      color: "var(--text-secondary)",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
