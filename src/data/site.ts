// FILE: src/data/site.ts
export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  href?: string;
  repo?: string;
  highlights?: string[];
  metrics?: { label: string; value: string }[];
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
  socials: { label: string; href: string }[];
  ctas: { label: string; href: string; kind?: "primary" | "ghost" }[];
  highlights: { label: string; value: string; hint?: string }[];
  projects: Project[];
  writing: Writing[];
  skills: { group: string; items: string[] }[];
};

export const site: SiteData = {
  name: "Javal Vyas",
  title: "ML / Optimization Engineer building toward Quant Research",
  tagline:
    "I build reliable, research-driven AI systems—agentic decision workflows, optimization pipelines, and evaluation methods. I'm especially interested in risk-aware deployment and how reliability techniques translate into quantitative decision-making.",
  location: "UK (Europe/London)",
  email: "your.email@example.com",
  avatar: "/profile.jpeg",

  badges: [
    "Agentic systems + control",
    "GraphRAG & tool-use workflows",
    "Reliability + evaluation",
    "Optimization (MILP/MINLP)",
    "Open-source shipping",
  ],

  socials: [
    { label: "GitHub", href: "https://github.com/JavalVyas2000" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-link/" },
  ],

  ctas: [
    { label: "Download Resume (Tech)", href: "/resume.pdf", kind: "primary" },
    { label: "Quant Resume", href: "/resume-quant.pdf", kind: "ghost" },
    { label: "Contact", href: "#contact", kind: "ghost" },
  ],

  highlights: [
    { label: "Core", value: "Reliable AI + Optimization", hint: "Evaluation discipline, robustness, constraints" },
    { label: "Work", value: "Agentic fault handling", hint: "From information → actions, with monitoring in mind" },
    { label: "Track", value: "Quant trajectory", hint: "Risk-aware modeling + decision-making" },
  ],

  projects: [
    {
      title: "ctrl-alt-recover",
      blurb:
        "GraphRAG-powered agentic fault handling for controlled operations. Designed for structured context injection and safer action selection (paper under review).",
      tags: ["GraphRAG", "Agentic Systems", "Reliability"],
      repo: "https://github.com/AISL-at-Imperial-College-London/ctrl-alt-recover",
      metrics: [
        { label: "Focus", value: "Fault recovery" },
        { label: "Mode", value: "Graph + tools" },
      ],
      highlights: [
        "Context routing for decision-time retrieval",
        "Action-oriented agent design (not just Q&A)",
        "Research-grade framing with practical engineering",
      ],
    },
    {
      title: "Fault Handling with Agentic LLMs (Controlled Operations)",
      blurb:
        "Early-stage study on how to pass operational information to LLM agents for correct, controllable actions.",
      tags: ["Agents", "Control", "Evaluation"],
      repo: "https://github.com/AISL-at-Imperial-College-London/fault-handling-agentic-llms-for-controlled-operations",
      metrics: [
        { label: "Goal", value: "Action correctness" },
        { label: "Lens", value: "Control + safety" },
      ],
      highlights: [
        "Information → action pipelines",
        "Failure modes captured for iterative improvement",
        "Practical framing for real operations",
      ],
    },
    {
      title: "rtn_scheduling (Open-source package)",
      blurb:
        "An open-source scheduling package focused on reproducible process scheduling workflows (first author).",
      tags: ["Scheduling", "Optimization", "Open Source"],
      repo: "https://github.com/JavalVyas2000/rtn_scheduling",
      metrics: [
        { label: "Type", value: "OSS package" },
        { label: "Domain", value: "Scheduling" },
      ],
      highlights: [
        "Clean interfaces for experiments and reuse",
        "Reproducible scheduling workflows",
      ],
    },
    {
      title: "Project Pareto (DOE-funded)",
      blurb:
        "Optimization of scheduling problems with ML surrogate integration to improve efficiency and data use.",
      tags: ["Optimization", "Surrogates", "Scheduling"],
      repo: "https://github.com/project-pareto/project-pareto",
      metrics: [
        { label: "Angle", value: "Surrogate modeling" },
        { label: "Impact", value: "Efficiency gains" },
      ],
      highlights: [
        "Neural surrogate integration for optimization",
        "Practical engineering contributions on a large OSS project",
      ],
    },

    // Quant-intent (keep as 1 strong card)
    {
      title: "ZoneTrader (Quant Project)",
      blurb:
        "A quant-oriented project exploring signal design and evaluation discipline. Positioned as an engineering-first bridge into quant research.",
      tags: ["Quant", "Backtesting", "Research Hygiene"],
      repo: "https://github.com/JavalVyas2000/zonetrader",
      metrics: [
        { label: "Theme", value: "Signals + eval" },
        { label: "Positioning", value: "Bridge to quant" },
      ],
      highlights: [
        "Focus on evaluation discipline and avoiding false discoveries",
        "Clear experiment structure for iteration",
      ],
    },

    // Private work (present professionally)
    {
      title: "LLM Fault Metrics for Policy Shaping (Private)",
      blurb:
        "Health metrics for LLM policies using validity/consistency checks and transition suppression concepts. Available on request.",
      tags: ["Reliability", "Evaluation", "Agents"],
      href: "#contact",
      highlights: [
        "Metrics that map to actionable intervention",
        "Designed to reason about policy health, not just accuracy",
      ],
    },
  ],

  writing: [
    {
      title: "Research focus: Reliable AI for decision-making",
      venue: "Notes",
      year: "2026",
      href: "#",
      blurb:
        "How evaluation, risk, and robustness techniques for AI systems translate to high-stakes decision workflows.",
    },
    {
      title: "Practical evaluation for agentic systems",
      venue: "Notes",
      year: "2026",
      href: "#",
      blurb:
        "What to measure (beyond task success) when agents take actions: failure modes, recoverability, and reliability.",
    },
  ],

  skills: [
    { group: "Core", items: ["Python", "Git", "Linux", "Docker", "CI/CD"] },
    { group: "AI/ML", items: ["LLMs", "Agentic workflows", "Retrieval/GraphRAG", "Evaluation", "Prompting/tool use"] },
    { group: "Optimization", items: ["Scheduling", "MILP/MINLP", "Surrogates", "Sensitivity thinking", "Experiment design"] },
    { group: "Quant direction", items: ["Risk-aware modeling", "Backtesting hygiene", "Time-series mindset"] },
  ],
};