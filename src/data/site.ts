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
  note?: string; // “under review”, “preprint”, etc.
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
  title: "PhD Researcher • Reliable LLM Agents for Industrial AI",
  tagline:
    "I build validator-guided, reliability-first agentic systems for control/operations—where outputs must be correct, safe, and actionable. My work connects LLM evaluation, tool-use workflows (GraphRAG), and optimization for decision-making.",
  location: "London, UK",
  email: "javalvyas2000@gmail.com",
  avatar: "/profile.jpeg",

  badges: [
    "Reliability + evaluation",
    "Agentic workflows + tool use",
    "GraphRAG / structured retrieval",
    "Optimization (MILP/MINLP, scheduling)",
    "Control / fault handling"
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
    { label: "Focus", value: "Reliable agentic decision-making", hint: "Validator-guided loops, measurable failures, safer actions" },
    { label: "Methods", value: "GraphRAG + evaluation metrics", hint: "Structured context injection and policy health checks" },
    { label: "Also", value: "Optimization + scheduling", hint: "MILP/MINLP workflows and reproducible OSS tooling" }
  ],

  projects: [
    {
      title: "ctrl-alt-recover",
      blurb:
        "GraphRAG-powered agentic fault handling for controlled operations. Structured context injection and safer action selection (paper under review).",
      tags: ["GraphRAG", "Agentic Systems", "Reliability"],
      repo: "https://github.com/AISL-at-Imperial-College-London/ctrl-alt-recover",
      metrics: [
        { label: "Focus", value: "Fault recovery" },
        { label: "Mode", value: "Graph + tools" }
      ],
      highlights: [
        "Context routing for decision-time retrieval",
        "Action-oriented agent design (not just Q&A)",
        "Research framing with practical constraints"
      ]
    },
    {
      title: "Fault Handling with Agentic LLMs (Controlled Ops)",
      blurb: "Study on passing operational information to LLM agents for correct, controllable actions.",
      tags: ["Agents", "Control", "Evaluation"],
      repo: "https://github.com/AISL-at-Imperial-College-London/fault-handling-agentic-llms-for-controlled-operations",
      metrics: [
        { label: "Goal", value: "Action correctness" },
        { label: "Lens", value: "Control + safety" }
      ],
      highlights: ["Information → action pipelines", "Failure modes captured for iteration", "Practical framing for operations"]
    },
    {
      title: "rtn_scheduling (Open-source package)",
      blurb: "Open-source scheduling package for reproducible process scheduling workflows (first author).",
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
      blurb: "Optimization + ML surrogate integration to improve efficiency and data use in scheduling problems.",
      tags: ["Optimization", "Surrogates", "Scheduling"],
      repo: "https://github.com/project-pareto/project-pareto",
      metrics: [
        { label: "Angle", value: "Surrogate modeling" },
        { label: "Scope", value: "Large OSS" }
      ],
      highlights: ["Surrogate integration for optimization", "Engineering contributions on a large open-source project"]
    },
    {
      title: "ZoneTrader (Quant bridge)",
      blurb: "Engineering-first bridge into quant: signals + backtesting hygiene + iteration discipline.",
      tags: ["Quant", "Backtesting", "Research Hygiene"],
      repo: "https://github.com/JavalVyas2000/zonetrader",
      metrics: [
        { label: "Theme", value: "Signals + eval" },
        { label: "Goal", value: "Quant bridge" }
      ],
      highlights: ["Evaluation hygiene to avoid false discoveries", "Clear experiment structure for iteration"]
    },
    {
      title: "LLM Fault Metrics for Policy Shaping (Private)",
      blurb:
        "Health metrics for LLM policies using validity/consistency checks and invalid transition suppression. Available on request.",
      tags: ["Reliability", "Evaluation", "Agents"],
      href: "#contact",
      highlights: ["Metrics that map to actionable intervention", "Designed to reason about policy health, not just accuracy"]
    }
  ],

  scholarUrl: "https://scholar.google.com/citations?user=5_G5HMQAAAAJ&hl=en",

  publications: [
    // Add 2–5 “selected pubs” here when you want (with PDF/arXiv links).
    // { title: "…", venue: "…", year: "2026", href: "…", note: "preprint" }
  ],

  pipeline: [
    {
      title: "When to use LLMs (and how to choose them)",
      blurb: "Reliability-guided framework for selecting LLMs when capability varies and failure costs differ."
    },
    {
      title: "Risk controllability of LLMs",
      blurb: "Define and control risk in agentic LLM systems (evaluation → interventions → safer actions)."
    },
    {
      title: "Look forward, act now",
      blurb: "Decision-time methods to combat latency by planning ahead with partial future context."
    }
  ],

  writing: [
    {
      title: "Medium: Reliable AI for decision-making",
      venue: "Medium",
      year: "2026",
      href: "https://medium.com/@javalvyas2000",
      blurb: "Writing on reliability, evaluation, and risk-aware deployment for AI systems."
    },
    {
      title: "GraphRAG for controlled operations (paper under review)",
      venue: "Under review",
      year: "2026",
      href: "https://github.com/AISL-at-Imperial-College-London/ctrl-alt-recover",
      blurb: "GraphRAG + agentic fault handling for safer action selection in operations."
    }
  ],

  skills: [
    { group: "Core", items: ["Python", "Git", "Linux", "Docker", "CI/CD"] },
    { group: "AI/ML", items: ["LLMs", "Agentic workflows", "Retrieval/GraphRAG", "Evaluation", "Tool use"] },
    { group: "Optimization", items: ["Scheduling", "MILP/MINLP", "Surrogates", "Experiment design"] },
    { group: "Systems", items: ["Control thinking", "Fault handling", "Validation loops", "Monitoring mindset"] }
  ]
};