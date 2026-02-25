export type SocialKind = "github" | "linkedin" | "medium" | "scholar";

export type Social = {
  label: string;
  href: string;
  icon: SocialKind;
};

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  href?: string;
  repo?: string;
  highlights?: string[];
  metrics?: { label: string; value: string }[];
};

export type Publication = {
  title: string;
  venue?: string;
  year?: string;
  href?: string; // PDF/arXiv/Scholar/repo
  note?: string; // “under review”, “submitted”, “preprint”, etc.
};

export type PipelineItem = {
  title: string;
  blurb: string;
};

export type Writing = {
  title: string;
  venue?: string;
  year?: string;
  href?: string;
  blurb?: string;
};

export type SiteData = {
  name: string;
  title: string;
  tagline: string;
  location?: string;
  email: string;
  avatar?: string;
  badges?: string[];
  socials: Social[];
  ctas: { label: string; href: string; kind?: "primary" | "ghost" }[];
  highlights: { label: string; value: string; hint?: string }[];
  projects: Project[];
  writing: Writing[];
  skills: { group: string; items: string[] }[];
  publications?: Publication[];
  pipeline?: PipelineItem[];
  scholarUrl?: string;
};

export const site: SiteData = {
  name: "Javal Vyas",
  title: "PhD Researcher • Risk & Reliability in Generative Decision Systems",
  tagline:
    "I study generative models as stochastic decision policies in dynamic systems—and build mechanisms to make them measurable, controllable, and reliable under constraints. My work focuses on risk-aware validation, uncertainty/entropy diagnostics, and convergence behavior in sequential decision-making, with applications to industrial control and operations.",

  location: "London, UK",
  email: "javalvyas2000@gmail.com",
  avatar: "/profile.jpeg",

  badges: [
    "Stochastic policies in dynamic systems",
    "Risk-aware reliability + validation",
    "Uncertainty / entropy diagnostics",
    "Convergence under constraints",
    "Optimization (MILP/MINLP, scheduling)"
  ],

  socials: [
    { label: "GitHub", href: "https://github.com/JavalVyas2000", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/javal-vyas-63677057/", icon: "linkedin" },
    { label: "Medium", href: "https://medium.com/@javalvyas2000", icon: "medium" },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=5_G5HMQAAAAJ&hl=en", icon: "scholar" }
  ],

  ctas: [
    { label: "Resume", href: "/resume.pdf", kind: "primary" },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=5_G5HMQAAAAJ&hl=en", kind: "ghost" },
    { label: "GitHub", href: "https://github.com/JavalVyas2000", kind: "ghost" },
    { label: "Email", href: "mailto:javalvyas2000@gmail.com", kind: "ghost" }
  ],

  highlights: [
    {
      label: "Core question",
      value: "When can we trust a stochastic policy?",
      hint: "Risk + reliability for sequential decision-making under constraints"
    },
    {
      label: "Mechanism",
      value: "Validation loops + measurable failure metrics",
      hint: "Constraint violation → targeted reprompting / policy shaping"
    },
    {
      label: "Applied setting",
      value: "Dynamic systems (control + operations)",
      hint: "Latency constraints, safety envelopes, and action correctness"
    }
  ],

  projects: [
    {
      title: "ctrl-alt-recover",
      blurb:
        "GraphRAG-powered agentic fault handling for controlled operations. Structured context injection + validator-guided action selection (paper under review).",
      tags: ["GraphRAG", "Agentic Systems", "Risk & Reliability"],
      repo: "https://github.com/AISL-at-Imperial-College-London/ctrl-alt-recover",
      metrics: [
        { label: "Theme", value: "Risk-aware recovery" },
        { label: "Method", value: "Graph + tools + validation" }
      ],
      highlights: [
        "Relation-aware retrieval for decision-time grounding",
        "Action-oriented agents (not just Q&A)",
        "Designed around constraints, latency, and failure costs"
      ]
    },
    {
      title: "Fault Handling with Agentic LLMs (Controlled Ops)",
      blurb:
        "Study on transforming operational information into constraint-consistent actions using agentic LLM workflows.",
      tags: ["Agents", "Control", "Reliability"],
      repo: "https://github.com/AISL-at-Imperial-College-London/fault-handling-agentic-llms-for-controlled-operations",
      metrics: [
        { label: "Goal", value: "Action correctness" },
        { label: "Lens", value: "Constraints + safety" }
      ],
      highlights: [
        "Information → action pipelines with validation",
        "Failure-mode taxonomy for iteration",
        "Operator-facing framing for controlled operations"
      ]
    },
    {
      title: "rtn_scheduling (Open-source package)",
      blurb:
        "Open-source scheduling package for reproducible process scheduling workflows (first author).",
      tags: ["Scheduling", "Optimization", "Open Source"],
      repo: "https://github.com/JavalVyas2000/rtn_scheduling",
      metrics: [
        { label: "Type", value: "OSS package" },
        { label: "Domain", value: "Scheduling" }
      ],
      highlights: ["Clean interfaces for experiments and reuse", "Reproducible scheduling workflows"]
    },
    {
      title: "Project Pareto (DOE-funded)",
      blurb:
        "Optimization + ML surrogate integration to improve efficiency and feasibility handling in scheduling problems.",
      tags: ["Optimization", "Surrogates", "Scheduling"],
      repo: "https://github.com/project-pareto/project-pareto",
      metrics: [
        { label: "Angle", value: "Surrogate modeling" },
        { label: "Scope", value: "Large OSS" }
      ],
      highlights: [
        "Surrogate integration for optimization",
        "Engineering contributions on a large open-source project"
      ]
    },
    {
      title: "ZoneTrader (Quant bridge)",
      blurb:
        "Engineering-first bridge into quant: signals + backtesting hygiene + disciplined evaluation to avoid false discoveries.",
      tags: ["Backtesting", "Evaluation", "Research Hygiene"],
      repo: "https://github.com/JavalVyas2000/zonetrader",
      metrics: [
        { label: "Theme", value: "Signals + evaluation" },
        { label: "Goal", value: "Reliable iteration" }
      ],
      highlights: [
        "Evaluation hygiene to reduce spurious results",
        "Clear experiment structure for iteration and ablations"
      ]
    },
    {
      title: "LLM Fault Metrics for Policy Shaping (Private)",
      blurb:
        "Trajectory-level health metrics (validity/consistency/invalid-transition suppression) that map failures to actionable interventions. Available on request.",
      tags: ["Uncertainty", "Reliability", "Sequential Decision-Making"],
      href: "#contact",
      highlights: [
        "Metrics that map to intervention (not just accuracy)",
        "Designed to reason about policy health and structural errors"
      ]
    }
  ],

  scholarUrl: "https://scholar.google.com/citations?user=5_G5HMQAAAAJ&hl=en",

  publications: [
    {
      title: "Autonomous Industrial Control Using an Agentic Framework with Large Language Models",
      venue: "IFAC-PapersOnLine (DYCOPS)",
      year: "2025",
      href: "https://scholar.google.com/citations?user=5_G5HMQAAAAJ&hl=en",
      note: "conference"
    },
    {
      title: "Leveraging LLM Agents and Digital Twins for Fault Handling in Process Plants",
      venue: "IEEE ETFA",
      year: "2025",
      href: "https://scholar.google.com/citations?user=5_G5HMQAAAAJ&hl=en",
      note: "conference"
    },
    {
      title: "Integration of Plant Scheduling Feasibility with Supply Chain Networks Under Disruptions Using Machine Learning Surrogates",
      venue: "ESCAPE",
      year: "2024",
      href: "https://scholar.google.com/citations?user=5_G5HMQAAAAJ&hl=en",
      note: "conference"
    },
    {
      title: "Cut-Based Symbolic Feedback for Suppressing Structural Errors in LLM Planning",
      venue: "ICML",
      year: "2026",
      href: "https://scholar.google.com/citations?user=5_G5HMQAAAAJ&hl=en",
      note: "submitted / under review"
    },
    {
      title: "From Detection to Action: Using LLM Agents for Fault-Tolerant Control",
      venue: "Journal of Process Control",
      year: "2026",
      href: "https://scholar.google.com/citations?user=5_G5HMQAAAAJ&hl=en",
      note: "under review"
    },
    {
      title: "Small Language Models for Control via GRPO Fine-Tuning",
      venue: "preprint",
      year: "2026",
      href: "https://scholar.google.com/citations?user=5_G5HMQAAAAJ&hl=en",
      note: "submitted"
    }
  ],

  pipeline: [
    {
      title: "Reliability envelopes for generative policies",
      blurb:
        "Define measurable reliability/violation metrics and map them to decision-time interventions (constraints, validation, structured context)."
    },
    {
      title: "Risk controllability with statistical guarantees",
      blurb:
        "Fault detection (e.g., HMMs) → action proposal (LLMs) → data-driven verification (to avoid model mismatch) → conformal predictors for calibrated guarantees."
    },
    {
      title: "Capability selection without luck",
      blurb:
        "Determine when/which model to use a priori via task structure, failure cost, and empirical capability frontiers (\"jagged frontier\")."
    }
  ],

  writing: [
    {
      title: "Medium: Reliable AI for decision-making",
      venue: "Medium",
      year: "2026",
      href: "https://medium.com/@javalvyas2000",
      blurb: "Writing on risk, reliability, and decision-time validation for AI systems."
    },
    {
      title: "GraphRAG for controlled operations (paper under review)",
      venue: "Under review",
      year: "2026",
      href: "https://github.com/AISL-at-Imperial-College-London/ctrl-alt-recover",
      blurb: "GraphRAG + agentic fault handling for safer, constraint-consistent action selection."
    }
  ],

  skills: [
    { group: "Core", items: ["Python", "Git", "Linux", "Docker", "CI/CD"] },
    {
      group: "Probabilistic / Decision Systems",
      items: ["Stochastic policies", "Uncertainty diagnostics", "Risk-aware evaluation", "Conformal prediction (in progress)", "HMMs (in progress)"]
    },
    { group: "LLMs / Agents", items: ["Agentic workflows", "Retrieval/GraphRAG", "Validation loops", "Reprompting", "Tool use"] },
    { group: "Optimization", items: ["Scheduling", "MILP/MINLP", "Surrogates", "Experiment design"] },
    { group: "Systems", items: ["Control thinking", "Fault handling", "Safety envelopes", "Latency-aware design"] }
  ]
};