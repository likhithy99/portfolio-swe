"use client";

const projects = [
  {
    id: "01",
    layer: "Observability",
    title: "Infrastructure Monitoring with Prometheus & Grafana",
    description:
      "Production-grade monitoring stack where Prometheus scrapes system and application metrics through exporters using PromQL, and Grafana renders real-time dashboards for CPU, memory, disk, network, and service health. Planned: alerting rules, notification channels, and Loki log aggregation.",
    tags: ["Prometheus", "Grafana", "PromQL", "Node Exporter", "Loki", "Observability"],
    github: null,
  },
  {
    id: "02",
    layer: "Containerization",
    title: "Multi-Service Containerized Application",
    description:
      "A multi-service app built with Docker best practices — React frontend, Node.js/Express API, MongoDB, and Redis cache behind an Nginx reverse proxy. Orchestrated with Docker Compose using multi-stage builds, custom networks, named volumes, Docker secrets, and per-service health checks.",
    tags: ["Docker", "Docker Compose", "Multi-stage Builds", "Redis", "Nginx", "Health Checks"],
    github: null,
  },
  {
    id: "03",
    layer: "Infrastructure as Code",
    title: "Cloud Server Provisioning with Terraform & Ansible",
    description:
      "Automated infrastructure setup from zero. Terraform provisions cloud servers; role-based Ansible playbooks handle base hardening (updates, fail2ban), Nginx, app deployment, and SSH key provisioning, with tagged roles for selective runs.",
    tags: ["Terraform", "Ansible", "Linux", "IaC", "fail2ban", "SSH"],
    github: null,
  },
  {
    id: "04",
    layer: "CI/CD",
    title: "Automated Deployment Pipeline with GitHub Actions",
    description:
      "A CI/CD pipeline that deploys a Node.js service to a remote server on every push. GitHub Actions handles build, test, secrets injection, and SSH-based deployment, building on the Terraform and Ansible automation to deliver zero-touch releases.",
    tags: ["GitHub Actions", "CI/CD", "Node.js", "SSH", "Secrets", "Automation"],
    github: null,
  },
];

function GitHubIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
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
            $ ls -la ./projects
          </span>
          <div
            className="h-px flex-1"
            style={{ background: "var(--border)" }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-xl card-hover flex flex-col"
              style={{
                border: "1px solid var(--border-subtle)",
                background: "var(--bg-card)",
              }}
            >
              {/* Top row: number + layer label + IN PROGRESS badge */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <span
                    className="font-mono text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {project.id}
                  </span>
                  <span
                    className="font-mono text-xs"
                    style={{ color: "var(--accent)" }}
                  >
                    // {project.layer}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {/* Pulsing dot */}
                  <span
                    className="relative flex h-2 w-2 shrink-0"
                    style={{ marginTop: "1px" }}
                  >
                    <span
                      className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                      style={{ background: "#f59e0b" }}
                    />
                    <span
                      className="relative inline-flex rounded-full h-2 w-2"
                      style={{ background: "#f59e0b" }}
                    />
                  </span>
                  <span
                    className="font-mono text-xs font-medium"
                    style={{ color: "#f59e0b" }}
                  >
                    IN PROGRESS
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3
                className="font-mono font-semibold text-base mb-3 leading-snug"
                style={{ color: "var(--text-primary)" }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-5 flex-1"
                style={{ color: "var(--text-secondary)", fontWeight: 300 }}
              >
                {project.description}
              </p>

              {/* Bottom row: tags + github */}
              <div className="flex items-end justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2.5 py-1 rounded"
                      style={{
                        background: "rgba(0, 212, 170, 0.07)",
                        color: "var(--accent)",
                        border: "1px solid rgba(0, 212, 170, 0.12)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 transition-colors duration-200"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
                    }
                  >
                    <GitHubIcon />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
