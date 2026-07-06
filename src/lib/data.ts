export const profile = {
  name: "Dalird Bufi",
  title: "DevOps / Platform Engineer",
  tagline: "Kubernetes (CKA) · AWS · Azure · CI/CD · Terraform",
  location: "London, UK",
  phone: "+44 7946 487663",
  email: "dalirdbufi@gmail.com",
  summary: `Infrastructure and Kubernetes engineer moving into cloud-native DevOps. CKA-certified,
with hands-on AWS and Azure experience and a public-sector background delivering
mission-critical infrastructure, disaster recovery and enterprise security at a
national agency. Comfortable across the cloud-native lifecycle — containerisation,
infrastructure-as-code (Terraform), CI/CD pipelines and Kubernetes operations — and
currently running a self-hosted, GPU-enabled Kubernetes cluster for LLM inference
workloads. MSc Information Technology, Birkbeck, University of London.`,
};

export const certifications = [
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation (CNCF)",
    description:
      "Hands-on, performance-based certification in production Kubernetes cluster administration.",
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Kubernetes",
    items: [
      "Cluster administration (CKA)",
      "Deployments",
      "StatefulSets",
      "DaemonSets",
      "RBAC",
      "Ingress",
      "HPA",
      "PV/PVC",
      "NetworkPolicies",
      "ConfigMaps",
      "Secrets",
      "GPU scheduling",
    ],
  },
  {
    category: "K8s Tooling",
    items: [
      "Helm (chart authoring)",
      "Kustomize (overlays)",
      "Rancher (multi-cluster)",
      "Prometheus",
      "Grafana",
      "Alertmanager",
    ],
  },
  {
    category: "Cloud",
    items: ["AWS (EKS, EC2, S3, ELB, ElastiCache)", "Microsoft Azure"],
  },
  {
    category: "IaC & CI/CD",
    items: ["Terraform", "Docker", "Jenkins", "GitHub Actions", "Bitbucket Pipelines"],
  },
  {
    category: "Scripting",
    items: ["Python", "Bash"],
  },
  {
    category: "Infrastructure",
    items: [
      "Hyper-Converged Infrastructure (HCI)",
      "Hyper-V",
      "Data Centre Ops",
      "Disaster Recovery",
      "RTO/RPO engineering",
    ],
  },
  {
    category: "Networking",
    items: [
      "TCP/IP",
      "VPN (IPSec/SSL)",
      "Cisco",
      "Fortinet",
      "Network segmentation",
      "Security",
    ],
  },
  {
    category: "Other Dev",
    items: ["PHP", "React", "Next.js", "Flask", "MySQL", "MongoDB", "SQL Server", "ServiceNow", "Office 365"],
  },
];

export const projects = [
  {
    title: "Self-Hosted GPU Kubernetes Cluster",
    status: "current",
    description:
      "Building and operating a personal Kubernetes cluster with GPU scheduling on an NVIDIA RTX 4060. Deployed the NVIDIA device plugin / GPU operator to expose the GPU to the scheduler and run OpenLLaMA LLM inference as a containerised, GPU-accelerated workload — covering resource limits, node scheduling and observability end-to-end.",
    tags: ["Kubernetes", "GPU Operator", "NVIDIA", "LLM Inference"],
  },
  {
    title: "AWS EKS Migration",
    description:
      "Containerised and migrated a monolithic Java application to AWS EKS. Provisioned infrastructure with Terraform (EKS, VPC, IAM, ELB, ElastiCache); managed deployments via Helm charts.",
    tags: ["AWS", "EKS", "Terraform", "Helm"],
  },
  {
    title: "Kubernetes Multi-Tier Architecture",
    description:
      "Production-grade cluster with Namespaces, RBAC, Ingress, StorageClasses, HPA and rolling-update strategies across dev/staging/prod.",
    tags: ["Kubernetes", "RBAC", "HPA", "Ingress"],
  },
  {
    title: "Observability Stack",
    description:
      "Full Prometheus / Grafana / Alertmanager deployment using Prometheus Operator, ServiceMonitors, kube-state-metrics and node-exporter; Slack/email alerting with inhibition rules.",
    tags: ["Prometheus", "Grafana", "Alertmanager"],
  },
  {
    title: "CI/CD Pipeline",
    description:
      "End-to-end Jenkins pipeline with zero-downtime rolling deployments, automated rollback and DaemonSet-based log aggregation.",
    tags: ["Jenkins", "CI/CD", "Rolling Deploys"],
  },
  {
    title: "Helm, Kustomize & Rancher",
    description:
      "Authored custom Helm charts for internal microservices; managed environment overlays with Kustomize; operated a multi-cluster fleet via Rancher.",
    tags: ["Helm", "Kustomize", "Rancher"],
  },
];

export const experience = [
  {
    role: "Cloud-Native / DevOps upskilling",
    company: "Independent Projects & Professional Development",
    location: "London, UK",
    period: "2024 – Present",
    bullets: [
      "Achieved the Certified Kubernetes Administrator (CKA) qualification.",
      "Built a self-hosted GPU-enabled Kubernetes cluster running LLM inference workloads.",
      "Deepened AWS, Azure, Terraform and CI/CD skills through hands-on lab and project work.",
    ],
  },
  {
    role: "Senior IT Engineer | Technical Lead & Project Manager",
    company: "General Directorate of Road Transport Services (DPSHTRR)",
    location: "",
    period: "10/2018 – 09/2022",
    bullets: [
      "Led the agency's Disaster Recovery programme as Technical Lead and Project Manager — designed and delivered an HCI-based failover environment for a national system serving thousands of daily users.",
      "Architected the DR environment end-to-end: requirements analysis, vendor procurement, infrastructure build, replication policies, failover runbooks and disaster-simulation drills.",
      "Achieved a 20% improvement in internal network throughput through infrastructure optimisation.",
      "Maintained 100% Data Centre uptime with zero unplanned outages across the full tenure.",
      "Delivered 3 additional system-implementation projects on time and on budget, with full post-deployment support.",
      "Secured national driving-licence examination systems with encrypted VPN channels and network segmentation.",
    ],
  },
  {
    role: "Software Developer — Internship",
    company: "IMB.AL",
    location: "",
    period: "08/2023 – 10/2023",
    bullets: [
      "Built production front-end features with React and Next.js for a live commercial product.",
      "Integrated a Firebase e-commerce backend and connected the application to a financial ERP system.",
    ],
  },
];

export const education = [
  {
    degree: "MSc Information Technology",
    school: "Birkbeck, University of London",
    period: "2022 – 2023",
  },
  {
    degree: "BSc Digital Electronics Engineering",
    school: "Epoka University, Tirana",
    period: "2013 – 2017",
  },
];
