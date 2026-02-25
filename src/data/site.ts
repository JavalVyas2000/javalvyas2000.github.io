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
  title: "ML / Optimization Engineer building toward Quant Research",
  tagline:
    "I build reliable, research-driven AI systems—agentic decision workflows, optimization pipelines, and evaluation methods. I'm especially interested in risk-aware deployment and how reliability techniques translate into quantitative decision-making.",
  location: "London, UK",
  email: "javalvyas2000@gmail.com",
  avatar: "/profile.jpeg",

  badges: [
    "Agentic systems + control",
    "GraphRAG & tool-use workflows",
    "Reliability + evaluation",
    "Optimization (MILP/MINLP)",
    "Open-source shipping"
  ],

  socials: [
    { label: "GitHub", href: "https://github.com/JavalVyas2000", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/javal-vyas-63677057/", icon: "linkedin" },
    { label: "Medium", href: "https://medium.com/@javalvyas2000", icon: "medium" },
    { label: "Scholar (23)", href: "https://scholar.google.com/citations?user=5_G5HMQAAAAJ&hl=en", icon: "scholar" }
  ],

  ctas: [
    { label: "Resume (Tech)", href: "/resume.pdf", kind: "primary" },
    { label: "Contact", href: "#contact", kind: "ghost" }
  ],

  highlights: [
    { label: "Core", value: "Reliable AI + Optimization", hint: "Evaluation discipline, robustness, constraints" },
    { label: "Work", value: "Agentic fault handling", hint: "From information → actions, with monitoring in mind" },
    { label: "Track", value: "Quant trajectory", hint: "Risk-aware modeling + decision-making" }
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
        "Research-grade framing with practical engineering"
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
      blurb: "An open-source scheduling package focused on reproducible process scheduling workflows (first author).",
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
      blurb: "Optimization of scheduling problems with ML surrogate integration to improve efficiency and data use.",
      tags: ["Optimization", "Surrogates", "Scheduling"],
      repo: "https://github.com/project-pareto/project-pareto",
      metrics: [
        { label: "Angle", value: "Surrogate modeling" },
        { label: "Scope", value: "Large OSS" }
      ],
      highlights: ["Neural surrogate integration for optimization", "Engineering contributions on a large open-source project"]
    },
    {
      title: "ZoneTrader (Quant bridge)",
      blurb: "Signals and evaluation discipline framed as an engineering-first bridge into quant research.",
      tags: ["Quant", "Backtesting", "Research Hygiene"],
      repo: "https://github.com/JavalVyas2000/zonetrader",
      metrics: [
        { label: "Theme", value: "Signals + eval" },
        { label: "Goal", value: "Quant bridge" }
      ],
      highlights: ["Focus on evaluation hygiene and avoiding false discoveries", "Clear experiment structure for iteration"]
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
    // Add 2–5. If you don’t have direct links yet, link to Scholar or the repo.
    // { title: "...", venue: "...", year: "2025", href: "..." , note: "..." }
  ],

  pipeline: [
    {
      title: "When to use LLMs (and how to choose them)",
      blurb: "Reliability-guided framework for selecting LLMs when capabilities vary and failure costs differ."
    },
    {
      title: "Risk controllability of LLMs",
      blurb: "How to define/control risk in agentic LLM systems (evaluation → interventions → safer actions)."
    },
    {
      title: "Look forward, act now",
      blurb: "Decision-time methods to combat latency by planning ahead and acting with partial future context."
    }
  ],
  writing: [
    {
      title: "Medium: Reliable AI for decision-making",
      venue: "Medium",
      year: "2026",
      href: "https://medium.com/@your-handle",
      blurb: "Writing on reliability, evaluation, and risk-aware deployment for AI systems."
    },
    {
      title: "Paper under review: GraphRAG for controlled operations",
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
    { group: "Quant direction", items: ["Risk-aware modeling", "Backtesting hygiene", "Time-series mindset"] }
  ]
};
