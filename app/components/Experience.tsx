"use client";

import { useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Experience = {
  company: string;
  logo: string;
  role: string;
  period: string;
  location: string;
  tags: string[];
  bullets: string[];
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const experiences: Experience[] = [
  {
    company: "Globus Medical",
    logo: "/globus_logo.png",
    role: "Software Engineer Intern",
    period: "Sep 2025 – Dec 2025",
    location: "",
    tags: ["Docker", "AWS", "GitHub Actions", "Terraform", "Prometheus", "Grafana"],
    bullets: [
      "Containerized backend services with Docker and deployed them to AWS, standardizing local and cloud environments across the team.",
      "Built CI/CD pipelines in GitHub Actions to automate build, test, and deployment, improving release consistency.",
      "Provisioned cloud infrastructure with Terraform, enabling repeatable, version-controlled environment setup.",
      "Implemented monitoring and alerting with Prometheus and Grafana to surface service health and reduce time to detect issues.",
      "Collaborated in an Agile team on code reviews and reliability improvements across containerized services.",
    ],
  },
  {
    company: "Infosys",
    logo: "/infosys_logo.png",
    role: "Senior Systems Engineer",
    period: "Aug 2021 – Dec 2023",
    location: "Bangalore, India",
    tags: ["Java", "Python", "SQL", "Microservices", "CI/CD", "Shell"],
    bullets: [
      "Developed and maintained backend services in Java and Python supporting enterprise-scale client systems.",
      "Automated deployment and operational workflows with shell scripting and CI/CD tooling, reducing manual release effort.",
      "Designed and optimized SQL queries and schemas to improve application performance.",
      "Built and deployed microservices to improve modularity and scalability of client applications.",
      "Partnered with cross-functional teams to troubleshoot production incidents and improve system stability.",
    ],
  },
  {
    company: "Larsen & Toubro",
    logo: "/lt_logo.png",
    role: "Software Engineer Intern",
    period: "May 2020 – Aug 2020",
    location: "Mumbai, India",
    tags: ["Python", "Automation", "Backend"],
    bullets: [
      "Built Python automation scripts to streamline repetitive engineering tasks.",
      "Contributed to application development following team coding standards and version control practices.",
      "Assisted with testing and debugging to improve software quality and reliability.",
    ],
  },
];

// ─── Company logo (hides container on load error) ─────────────────────────────

function CompanyLogo({ src, alt }: { src: string; alt: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={wrapperRef}
      className="shrink-0 rounded-md"
      style={{
        background: "rgba(255, 255, 255, 0.96)",
        padding: "5px 8px",
        lineHeight: 0,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        style={{ height: "36px", width: "auto", display: "block" }}
        onError={() => {
          if (wrapperRef.current) {
            wrapperRef.current.style.display = "none";
          }
        }}
      />
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

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
              <div key={exp.company} className="lg:pl-10 relative">
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
                      {/* Index + logo + company name */}
                      <div className="flex items-center gap-3 mb-1.5">
                        <span
                          className="font-mono text-xs shrink-0"
                          style={{ color: "var(--accent)" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <CompanyLogo src={exp.logo} alt={exp.company} />
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
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm leading-relaxed"
                        style={{
                          color: "var(--text-secondary)",
                          fontWeight: 300,
                        }}
                      >
                        <span
                          className="font-mono mt-0.5 shrink-0"
                          style={{ color: "var(--accent)" }}
                        >
                          ▸
                        </span>
                        {bullet}
                      </li>
                    ))}
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
