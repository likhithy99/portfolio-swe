"use client";

import { useState, useEffect, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type LatencyBar = { label: string; value: number };

type DetailSection = {
  label: string;
  content: string;
  latencyChart?: LatencyBar[];
};

type Project = {
  id: string;
  layer: string;
  title: string;
  shortDescription: string;
  status: "completed" | "in-progress";
  tags: string[];
  github: string | null;
  screenshots: string[];
  screenshotLabels?: string[];
  modalPath: string;
  detail: DetailSection[];
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    id: "01",
    layer: "Observability",
    title: "Infrastructure Monitoring with Prometheus & Grafana",
    shortDescription:
      "Self-contained Docker monitoring stack — Prometheus, Grafana, and Alertmanager wired up and reproducible with a single command.",
    status: "completed",
    tags: [
      "Prometheus",
      "Grafana",
      "Alertmanager",
      "Docker",
      "Docker Compose",
      "node-exporter",
      "prom-client",
      "PromQL",
      "Node.js",
    ],
    github: "https://github.com/likhithy99/monitoring-prometheus-grafana",
    screenshots: ["/monitoring-dashboard.png", "/monitoring-targets.png"],
    screenshotLabels: ["dashboard", "targets"],
    modalPath: "~/projects/monitoring",
    detail: [
      {
        label: "overview",
        content:
          "A self-contained infrastructure monitoring stack running on Docker, fully reproducible with a single command.",
      },
      {
        label: "what_it_does",
        content:
          "Prometheus scrapes system and application metrics on a 15s interval; Grafana renders real-time dashboards; Alertmanager handles alert deduplication and routing; node-exporter exposes host CPU/memory/disk/network; an instrumented Node.js/Express service exposes custom request-rate and latency metrics via prom-client.",
      },
      {
        label: "alerting",
        content:
          "Four alert rules — high CPU, high memory, instance down, and high error rate — with a stress-test demo that triggers alerts on demand to show the full pipeline firing.",
      },
      {
        label: "key_design_decisions",
        content:
          'Pull-based metric collection, Grafana datasources and dashboards provisioned as code, alert "for" durations to suppress transient spikes, Alertmanager separated from rule evaluation.',
      },
    ],
  },
  {
    id: "02",
    layer: "Deployment Pipeline",
    title: "End-to-End Deployment Pipeline",
    shortDescription:
      "A multi-service containerized app provisioned with Terraform, configured with Ansible, and deployed through a CI/CD pipeline.",
    status: "completed",
    tags: [
      "Docker",
      "Docker Compose",
      "Terraform",
      "Ansible",
      "GitHub Actions",
      "Nginx",
      "Node.js",
      "MongoDB",
      "Redis",
      "CI/CD",
    ],
    github: "https://github.com/likhithy99/multi-service-pipeline",
    screenshots: [],
    modalPath: "~/projects/pipeline",
    detail: [
      {
        label: "overview",
        content:
          "An end-to-end DevOps pipeline that takes a multi-service application from source code to a running deployment on a provisioned server, with infrastructure and configuration fully automated as code. Built to be cloud-portable — the same automation targets a local VM for demonstration and a cloud provider with minimal changes.",
      },
      {
        label: "the_application",
        content:
          "A todo application split into five containerized services orchestrated with Docker Compose — a React (Vite) frontend, a Node.js/Express REST API, MongoDB for persistence, Redis for response caching, and an Nginx reverse proxy exposing a single entry point. The API caches GET responses in Redis and invalidates the cache on writes. Docker best practices throughout: multi-stage builds to shrink image size, custom networks, named volumes for persistence, health checks, and environment-based config.",
      },
      {
        label: "terraform",
        content:
          "Terraform provisions an Ubuntu server and injects an SSH key via cloud-init, outputting the server IP for downstream automation. The provider is swappable — the same configuration maps to AWS EC2, DigitalOcean, or GCP by changing only the resource block, leaving everything else untouched.",
      },
      {
        label: "ansible",
        content:
          "A role-based Ansible playbook configures the provisioned server over SSH: a base role (system updates, utilities, fail2ban hardening), a docker role (installs Docker Engine and the Compose plugin via the official apt repository, architecture-aware for both arm64 and amd64 hosts), and an app role (syncs the project and brings up the Compose stack). Roles are tagged for selective runs.",
      },
      {
        label: "ci_cd",
        content:
          "Two workflows. CI runs on every push and PR — builds the frontend and API images, starts the full stack, and runs CRUD smoke tests against the API, failing the build on any error. CD runs on push to main — deploys the latest code to the server over SSH using secrets, rebuilds changed images, and health-checks the live endpoint.",
      },
      {
        label: "key_design_decisions",
        content:
          'Multi-stage Docker builds keep the final frontend image small by discarding build tooling. Redis caching with write-invalidation reduces database load on read-heavy endpoints. Infrastructure and configuration are both code — the entire environment is reproducible and version-controlled. The deployment is cloud-portable by design: provider-specific code is isolated to a single Terraform block.\n\nVerified end to end: Terraform provisioned the VM, Ansible configured it and deployed the stack, and the application served live traffic on the provisioned server.',
      },
    ],
  },
  {
    id: "03",
    layer: "Orchestration",
    title: "Kubernetes Deployment with Helm",
    shortDescription:
      "A multi-service application deployed to a Kubernetes cluster with raw manifests, then packaged as a Helm chart with ingress, persistence, and health probes.",
    status: "completed",
    tags: [
      "Kubernetes",
      "Helm",
      "kind",
      "Docker",
      "Ingress",
      "NGINX",
      "kubectl",
      "MongoDB",
      "Redis",
      "Node.js",
    ],
    github: "https://github.com/likhithy99/kubernetes-deployment",
    screenshots: [],
    modalPath: "~/projects/kubernetes",
    detail: [
      {
        label: "overview",
        content:
          "A multi-service application deployed to Kubernetes, demonstrating the full path from container images to a running, ingress-exposed workload. Built first with raw Kubernetes manifests, then packaged as a Helm chart for reproducible, configurable, single-command deployments.",
      },
      {
        label: "the_application",
        content:
          "A full-stack todo app — React (Vite) frontend, Node.js/Express API, MongoDB for persistence, and Redis for caching — each running as its own Deployment in the cluster.",
      },
      {
        label: "cluster_&_k8s_objects",
        content:
          "Provisioned a multi-node cluster (control-plane + worker) locally with kind. Authored the core Kubernetes objects: Deployments and Services for each component, a ConfigMap for API configuration, a Secret for sensitive values, and a PersistentVolumeClaim so MongoDB data survives pod restarts. Locally built images are loaded directly into the cluster (kind load) and consumed with imagePullPolicy Never, avoiding a registry.",
      },
      {
        label: "networking_&_ingress",
        content:
          "Installed the NGINX ingress controller and configured an Ingress that routes / to the frontend and /api to the API through a single host, mirroring how external traffic reaches services in a real cluster.",
      },
      {
        label: "reliability",
        content:
          "Each service defines readiness and liveness probes. When the API starts before MongoDB is ready, it fails its probe, Kubernetes restarts it automatically, and it recovers once the database is available — a concrete demonstration of self-healing.",
      },
      {
        label: "helm_packaging",
        content:
          "Converted the raw manifests into a Helm chart: a values.yaml exposing image tags, replica counts, resource limits, ingress host, and storage size; a _helpers.tpl for consistent labels and release-prefixed names; and templated manifests for every component. Helm resolves the resource-ordering and namespace-creation issues that affect a plain kubectl apply, and enables versioned releases, one-command installs, upgrades, rollbacks, and value overrides.",
      },
      {
        label: "key_design_decisions",
        content:
          "Started with raw manifests to work directly with core Kubernetes primitives, then adopted Helm for reproducibility and lifecycle management. ConfigMap/Secret separation keeps configuration out of images. PersistentVolumeClaim ensures stateful data survives pod rescheduling. Ingress provides a single, clean entry point instead of exposing each service.\n\nVerified end to end: all pods reach a healthy running state and the application serves live traffic through the ingress, deployed via a single Helm release.",
      },
    ],
  },
  {
    id: "04",
    layer: "GitOps",
    title: "GitOps Continuous Delivery with ArgoCD",
    shortDescription:
      "A Kubernetes cluster continuously synced from Git using ArgoCD — declarative deployment, automated self-healing, and drift detection.",
    status: "completed",
    tags: [
      "ArgoCD",
      "GitOps",
      "Kubernetes",
      "kind",
      "Continuous Delivery",
      "kubectl",
      "YAML",
      "Git",
    ],
    github: "https://github.com/likhithy99/gitops-argocd",
    screenshots: [
      "/argocd-application.png",
      "/argocd-tree.png",
      "/argocd-autosync.png",
    ],
    screenshotLabels: ["application", "resource tree", "auto-sync"],
    modalPath: "~/projects/gitops",
    detail: [
      {
        label: "overview",
        content:
          "A GitOps continuous-delivery setup where ArgoCD watches a Git repository and automatically synchronizes a Kubernetes cluster to match the declared state. Git is the single source of truth: every change flows through version control, and the cluster continuously reconciles itself to match.",
      },
      {
        label: "how_it_works",
        content:
          "ArgoCD runs inside a kind Kubernetes cluster, configured with an Application pointing at a Git repository path containing the app manifests. Automated sync is enabled with self-heal and prune, so ArgoCD deploys changes from Git automatically and corrects any drift between live and declared state.",
      },
      {
        label: "demonstrated_behavior",
        content:
          "Declarative deployment — applying the ArgoCD Application caused ArgoCD to deploy the app directly from Git with no manual kubectl apply. Self-healing — manually scaling the live deployment was automatically reverted to match the replica count in Git. Auto-sync — committing and pushing a manifest change caused ArgoCD to detect the new revision and roll out the change automatically.",
      },
      {
        label: "key_concepts",
        content:
          "Git as the single source of truth for cluster state. Continuous reconciliation between declared and live state. Automated sync, self-heal, and prune for hands-off, auditable deployments. Easy rollback by reverting a commit.",
      },
      {
        label: "why_it_matters",
        content:
          "GitOps is the standard modern delivery workflow for Kubernetes — deployments become auditable, reproducible, and self-correcting, with full history in Git.",
      },
    ],
  },
  {
    id: "05",
    layer: "AI / MLOps",
    title: "RAG LLM Platform",
    shortDescription:
      "A retrieval-augmented generation service using a local LLM — FastAPI, sentence-transformers, ChromaDB, and Ollama — designed for containerized deployment on Kubernetes. In progress.",
    status: "in-progress",
    tags: [
      "RAG",
      "LLM",
      "FastAPI",
      "ChromaDB",
      "sentence-transformers",
      "Ollama",
      "Prometheus",
      "Python",
      "Kubernetes",
      "Docker",
    ],
    github: "https://github.com/likhithy99/rag-llm-platform",
    screenshots: [],
    modalPath: "~/projects/rag-llm-platform",
    detail: [
      {
        label: "overview",
        content:
          "A retrieval-augmented generation (RAG) service that answers natural-language questions over a document corpus using a locally hosted large language model, returning answers grounded in retrieved source passages. RAG combines a retrieval step (finding the most relevant pieces of a knowledge base) with a generation step (an LLM composing an answer from that context), which keeps responses grounded in real documents and reduces hallucination by citing the sources used.",
      },
      {
        label: "how_it_works",
        content:
          "The service ingests text documents and splits them into overlapping chunks (500-character chunks with 50-character overlap, broken at sentence boundaries to preserve meaning). Each chunk is converted into a 384-dimensional embedding using the sentence-transformers all-MiniLM-L6-v2 model and stored in a ChromaDB vector database. At query time, the question is embedded, the most similar chunks are retrieved by vector similarity, and those chunks are assembled into a prompt that is sent to a local LLM (llama3.2 served via Ollama) to generate an answer along with the source chunks used as citations.",
      },
      {
        label: "design_choices",
        content:
          "Local LLM via Ollama instead of a hosted API, so the system runs fully offline with no per-token cost and no data leaving the machine — relevant for privacy-sensitive or on-premise use cases. sentence-transformers all-MiniLM-L6-v2 embeddings: small, fast, CPU-friendly, and a strong quality-to-size tradeoff. ChromaDB as a local persistent vector store for similarity search. Citations returned with every answer to make responses auditable and mitigate hallucination. A Prometheus /metrics endpoint planned for request-rate and latency monitoring.",
      },
      {
        label: "intended_deployment",
        content:
          "The service is being built for containerized deployment on Kubernetes: a Docker image for the FastAPI app, Kubernetes Deployment/Service/Ingress, a Horizontal Pod Autoscaler to scale replicas under load, and Prometheus-based monitoring — tying together AI inference, cloud-native deployment, and observability.",
      },
      {
        label: "status",
        content:
          "Work in progress. The retrieval and generation pipeline is implemented; the serving, containerization, and Kubernetes deployment layers are under active development.",
      },
    ],
  },
  {
    id: "06",
    layer: "Backend / gRPC",
    title: "GateKeeper — gRPC Gateway with Custom Load Balancing",
    shortDescription:
      "A Go gRPC gateway load-balancing requests across multiple backends with custom round-robin and least-connections strategies, connection pooling, automatic failover, and Prometheus metrics.",
    status: "completed",
    tags: [
      "Go",
      "gRPC",
      "Protocol Buffers",
      "Load Balancing",
      "Prometheus",
      "Concurrency",
      "ghz",
    ],
    github: "https://github.com/likhithy99/gatekeeper",
    screenshots: [],
    modalPath: "~/projects/gatekeeper",
    detail: [
      {
        label: "overview",
        content:
          "GateKeeper is a Go gRPC gateway that sits in front of multiple backend services and distributes incoming requests across them using pluggable load-balancing strategies. It implements application-level (L7) load balancing directly in Go rather than relying on an external load balancer.",
      },
      {
        label: "architecture",
        content:
          "Clients send gRPC requests to the gateway, which maintains a persistent gRPC connection pool to each backend (created at startup, not per request), selects a backend by the configured strategy, forwards the request, and returns the response. If a backend is unavailable, the gateway automatically fails over to the next healthy backend.",
      },
      {
        label: "load_balancing",
        content:
          "Two strategies behind a common interface, selectable at runtime — round-robin (lock-free atomic counter for even distribution) and least-connections (routes to the backend with the fewest in-flight requests). Automatic failover retries the next backend on connection errors.",
      },
      {
        label: "observability",
        content:
          "Instrumented with Prometheus metrics: total requests (labeled by backend, result, strategy), a request-duration histogram (enabling P50/P95/P99), in-flight gauges per backend, and a failover counter, all exposed on a /metrics endpoint.",
      },
      {
        label: "performance",
        content:
          "Measured locally with ghz — 50 concurrent workers, 10,000 requests, across 3 backends, zero errors. Throughput: ~21,877 req/sec.",
        latencyChart: [
          { label: "P50", value: 1.55 },
          { label: "P95", value: 3.48 },
          { label: "P99", value: 6.37 },
        ],
      },
      {
        label: "tech",
        content:
          "Go, gRPC, Protocol Buffers, prometheus/client_golang, ghz, structured logging with slog.",
      },
    ],
  },
];

// ─── Icons ────────────────────────────────────────────────────────────────────

function GitHubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

// ─── Tags row (shared) ────────────────────────────────────────────────────────

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
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
  );
}

// ─── Latency bar chart (CSS only, no external lib) ───────────────────────────

function LatencyChart({ bars }: { bars: LatencyBar[] }) {
  const max = Math.max(...bars.map((b) => b.value));
  const chartPx = 80;

  return (
    <div
      className="mt-3 rounded-lg px-6 pt-5 pb-4"
      style={{
        background: "rgba(0, 0, 0, 0.25)",
        border: "1px solid var(--border-subtle)",
      }}
    >
      <div
        className="flex items-end justify-center gap-10"
        style={{ height: `${chartPx + 44}px` }}
      >
        {bars.map((bar) => {
          const barH = Math.max(4, Math.round((bar.value / max) * chartPx));
          return (
            <div key={bar.label} className="flex flex-col items-center gap-2">
              <span
                className="font-mono text-xs"
                style={{ color: "var(--accent)" }}
              >
                {bar.value} ms
              </span>
              <div
                style={{
                  width: "44px",
                  height: `${barH}px`,
                  background:
                    "linear-gradient(to top, rgba(0,212,170,0.85), rgba(0,212,170,0.25))",
                  borderRadius: "3px 3px 0 0",
                  border: "1px solid rgba(0,212,170,0.35)",
                  borderBottom: "none",
                }}
              />
              <span
                className="font-mono text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                {bar.label}
              </span>
            </div>
          );
        })}
      </div>
      <div
        className="mt-1 h-px"
        style={{ background: "rgba(0,212,170,0.2)" }}
      />
      <p
        className="mt-2 font-mono text-xs text-center"
        style={{ color: "var(--text-muted)" }}
      >
        latency (ms) · measured locally with ghz
      </p>
    </div>
  );
}

// ─── Detail Modal ─────────────────────────────────────────────────────────────

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [imgIdx, setImgIdx] = useState(0);
  const labels = project.screenshotLabels ?? project.screenshots.map((_, i) => String(i + 1));
  const hasScreenshots = project.screenshots.length > 0;

  // Scroll lock
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight" && hasScreenshots) {
        setImgIdx((i) => Math.min(i + 1, project.screenshots.length - 1));
      } else if (e.key === "ArrowLeft" && hasScreenshots) {
        setImgIdx((i) => Math.max(i - 1, 0));
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, hasScreenshots, project.screenshots.length]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:items-center sm:p-6"
      style={{ background: "rgba(0, 0, 0, 0.85)" }}
      onClick={onClose}
    >
      {/* Modal box — stops click propagation */}
      <div
        className="relative w-full flex flex-col rounded-xl overflow-hidden"
        style={{
          maxWidth: "860px",
          maxHeight: "90vh",
          border: "1px solid var(--border)",
          background: "var(--bg-card)",
          marginTop: "env(safe-area-inset-top)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Terminal title bar (sticky) ─────────────────────────────────── */}
        <div
          className="shrink-0 flex items-center justify-between px-4 py-3"
          style={{
            background: "var(--bg-secondary)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex items-center gap-1.5 shrink-0">
              <span
                className="h-3 w-3 rounded-full"
                style={{ background: "#ff5f57" }}
              />
              <span
                className="h-3 w-3 rounded-full"
                style={{ background: "#febc2e" }}
              />
              <span
                className="h-3 w-3 rounded-full"
                style={{ background: "#28c840" }}
              />
            </div>
            <span
              className="font-mono text-xs truncate"
              style={{ color: "var(--text-muted)" }}
            >
              {project.modalPath}
            </span>
          </div>
          <button
            className="shrink-0 font-mono text-xs ml-4 transition-colors duration-150"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "var(--text-primary)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "var(--text-muted)")
            }
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* ── Scrollable content ──────────────────────────────────────────── */}
        <div className="overflow-y-auto flex-1 px-6 pt-6 pb-8">

          {/* Header: id + layer + title + status */}
          <div className="flex items-center gap-3 mb-3">
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
          <h2
            className="font-mono font-semibold text-lg leading-snug mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            {project.title}
          </h2>

          {/* Screenshots */}
          {hasScreenshots && (
            <div className="mb-8">
              <div
                className="rounded-lg overflow-hidden"
                style={{ border: "1px solid var(--border-subtle)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.screenshots[imgIdx]}
                  alt={`Screenshot: ${labels[imgIdx]}`}
                  className="w-full block"
                  style={{
                    maxHeight: "380px",
                    objectFit: "contain",
                    background: "#0d1117",
                  }}
                />
              </div>
              {project.screenshots.length > 1 && (
                <div
                  className="flex items-center justify-center gap-6 mt-3 font-mono text-xs select-none"
                  style={{ color: "var(--text-muted)" }}
                >
                  <button
                    onClick={() => setImgIdx((i) => Math.max(i - 1, 0))}
                    disabled={imgIdx === 0}
                    style={{
                      opacity: imgIdx === 0 ? 0.3 : 1,
                      cursor: imgIdx === 0 ? "default" : "pointer",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      if (imgIdx > 0)
                        (e.currentTarget as HTMLElement).style.color =
                          "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--text-muted)";
                    }}
                  >
                    ← prev
                  </button>
                  <span style={{ color: "var(--accent)" }}>
                    {labels[imgIdx]}
                  </span>
                  <span style={{ color: "var(--text-muted)" }}>
                    {imgIdx + 1}/{project.screenshots.length}
                  </span>
                  <button
                    onClick={() =>
                      setImgIdx((i) =>
                        Math.min(i + 1, project.screenshots.length - 1)
                      )
                    }
                    disabled={imgIdx === project.screenshots.length - 1}
                    style={{
                      opacity:
                        imgIdx === project.screenshots.length - 1 ? 0.3 : 1,
                      cursor:
                        imgIdx === project.screenshots.length - 1
                          ? "default"
                          : "pointer",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      if (imgIdx < project.screenshots.length - 1)
                        (e.currentTarget as HTMLElement).style.color =
                          "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--text-muted)";
                    }}
                  >
                    next →
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Detail sections */}
          <div className="space-y-6 mb-8">
            {project.detail.map((section) => (
              <div key={section.label}>
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="font-mono text-xs shrink-0"
                    style={{ color: "var(--accent)" }}
                  >
                    // {section.label}
                  </span>
                  <div
                    className="flex-1 h-px"
                    style={{ background: "var(--border-subtle)" }}
                  />
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)", fontWeight: 300 }}
                >
                  {section.content}
                </p>
                {section.latencyChart && (
                  <LatencyChart bars={section.latencyChart} />
                )}
              </div>
            ))}
          </div>

          {/* In-progress note */}
          {project.status === "in-progress" && (
            <div
              className="flex items-start gap-3 mb-8 px-4 py-3 rounded-lg"
              style={{
                background: "rgba(245, 158, 11, 0.06)",
                border: "1px solid rgba(245, 158, 11, 0.15)",
              }}
            >
              <span
                className="font-mono text-xs shrink-0 mt-0.5"
                style={{ color: "#f59e0b" }}
              >
                ▸
              </span>
              <p
                className="font-mono text-xs leading-relaxed"
                style={{ color: "#f59e0b" }}
              >
                In development — screenshots and source link will be added when
                complete.
              </p>
            </div>
          )}

          {/* Tags */}
          <div className="mb-6">
            <TagList tags={project.tags} />
          </div>

          {/* GitHub link */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm px-4 py-2 rounded-lg transition-all duration-200"
              style={{
                border: "1px solid rgba(0, 212, 170, 0.3)",
                color: "var(--accent)",
                background: "rgba(0, 212, 170, 0.05)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(0, 212, 170, 0.12)";
                el.style.borderColor = "rgba(0, 212, 170, 0.5)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(0, 212, 170, 0.05)";
                el.style.borderColor = "rgba(0, 212, 170, 0.3)";
              }}
            >
              <GitHubIcon size={15} />
              <span>View on GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const handleClose = useCallback(() => setActiveProject(null), []);

  return (
    <section
      id="projects"
      className="py-28 px-6"
      style={{ background: "var(--bg-secondary)" }}
    >
      {activeProject && (
        <ProjectModal project={activeProject} onClose={handleClose} />
      )}

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
          {projects.map((project) => {
            const isCompleted = project.status === "completed";
            return (
              <div
                key={project.id}
                role="button"
                tabIndex={0}
                className="p-6 rounded-xl card-hover flex flex-col cursor-pointer group"
                style={{
                  border: isCompleted
                    ? "1px solid rgba(0, 212, 170, 0.3)"
                    : "1px solid var(--border-subtle)",
                  background: isCompleted
                    ? "rgba(0, 212, 170, 0.02)"
                    : "var(--bg-card)",
                }}
                onClick={() => setActiveProject(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveProject(project);
                  }
                }}
              >
                {/* Top row: id + layer */}
                <div className="flex items-center gap-3 mb-4">
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

                {/* Title */}
                <h3
                  className="font-mono font-semibold text-base mb-3 leading-snug"
                  style={{ color: "var(--text-primary)" }}
                >
                  {project.title}
                </h3>

                {/* Short description — capped at 3 lines */}
                <p
                  className="text-sm leading-relaxed mb-5 flex-1"
                  style={{
                    color: "var(--text-secondary)",
                    fontWeight: 300,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {project.shortDescription}
                </p>

                {/* Tags */}
                <div className="mb-4">
                  <TagList tags={project.tags} />
                </div>

                {/* Card footer: GitHub link (if available) + open hint */}
                <div
                  className="flex items-center justify-between pt-3"
                  style={{ borderTop: "1px solid var(--border-subtle)" }}
                >
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono text-xs transition-colors duration-150"
                      style={{ color: "var(--text-muted)" }}
                      onClick={(e) => e.stopPropagation()}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          "var(--accent)")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          "var(--text-muted)")
                      }
                    >
                      <GitHubIcon size={13} />
                      <span>GitHub</span>
                    </a>
                  ) : (
                    <div />
                  )}
                  <span
                    className="font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: "var(--accent)" }}
                  >
                    $ open →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
