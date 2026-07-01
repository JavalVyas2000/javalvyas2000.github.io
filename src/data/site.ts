export type SocialKind = "github" | "linkedin" | "medium" | "scholar";

export type Link = {
  label: string;
  href: string;
};

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
  href?: string;
  note?: string;
  links?: Link[];
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

const githubUrl = "https://github.com/JavalVyas2000";
const scholarUrl = "https://scholar.google.com/citations?user=5_G5HMQAAAAJ&hl=en";

export const site: SiteData = {
  name: "Javal Vyas",
  title: "PhD Researcher - ML, Optimization, and Knowledge-Grounded LLM Systems",
  tagline:
    "I build machine-learning, optimization, and agentic LLM systems for process control, scheduling, digital twins, and fault-tolerant decision-making. My research focuses on turning plant knowledge, validation, and simulation into reliable actions under operational constraints.",

  location: "London, UK",
  email: "javalvyas2000@gmail.com",
  avatar: "/profile.jpeg",

  badges: [
    "Knowledge-grounded LLM agents",
    "Fault-tolerant control",
    "Digital twins and process graphs",
    "Optimization and scheduling",
    "Reliability under constraints"
  ],

  socials: [
    { label: "GitHub", href: githubUrl, icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/javal-vyas-63677057/", icon: "linkedin" },
    { label: "Medium", href: "https://medium.com/@javalvyas2000", icon: "medium" },
    { label: "Google Scholar", href: scholarUrl, icon: "scholar" }
  ],

  ctas: [
    { label: "Resume", href: "/resume.pdf", kind: "primary" },
    { label: "Google Scholar", href: scholarUrl, kind: "ghost" },
    { label: "GitHub", href: githubUrl, kind: "ghost" },
    { label: "Email", href: "mailto:javalvyas2000@gmail.com", kind: "ghost" }
  ],

  highlights: [
    {
      label: "Research focus",
      value: "LLM agents for control and recovery",
      hint: "Knowledge graphs, validators, simulation, and plant-specific constraints"
    },
    {
      label: "Engineering thread",
      value: "Optimization + ML for process systems",
      hint: "Scheduling, surrogate models, unit commitment, and digital twins"
    },
    {
      label: "Public profiles",
      value: "Scholar publications + open-source code",
      hint: "Updated research links and GitHub project work"
    }
  ],

  projects: [
    {
      title: "Fault-Tolerant Control with LLM Agents",
      blurb:
        "Agentic framework that turns fault detection outputs into constraint-aware recovery plans, with simulation and deterministic validation before action.",
      tags: ["LLM Agents", "Fault-Tolerant Control", "Validation"],
      href: "https://arxiv.org/abs/2606.28011",
      repo: "https://github.com/AISL-at-Imperial-College-London/ctrl-alt-recover",
      metrics: [
        { label: "Method", value: "Graph RAG + DPPT" },
        { label: "Setting", value: "Process control" }
      ],
      highlights: [
        "Multi-agent monitoring, planning, action synthesis, simulation, and reprompting",
        "Validated recovery paths for batch and continuous process benchmarks"
      ]
    },
    {
      title: "Cause-Effect Specification with KGs and LLMs",
      blurb:
        "Semantic-AI workflow for generating operator-ready safety narratives and machine-verifiable C&E rules from process knowledge graphs.",
      tags: ["Knowledge Graphs", "LLMs", "Safety Logic"],
      href: "https://arxiv.org/abs/2606.31614",
      metrics: [
        { label: "Output", value: "C&E logic" },
        { label: "Lens", value: "Semantic constraints" }
      ],
      highlights: [
        "Grounds LLM outputs in an ontology and controlled vocabulary",
        "Connects faults, symptoms, causes, and mitigation actions"
      ]
    },
    {
      title: "From P&ID Drawings to Process Graphs",
      blurb:
        "Multimodal language-model workflow for extracting equipment tags and reconstructing process topology from P&ID drawings.",
      tags: ["Multimodal LLMs", "P&ID Digitization", "Process Graphs"],
      href: "https://psecommunity.org/LAPSE:2026.0420",
      metrics: [
        { label: "Venue", value: "SCT 2026" },
        { label: "DOI", value: "10.69997/sct.198584" }
      ],
      highlights: [
        "Separates visual extraction from topology reasoning",
        "Targets scalable, semantically reliable P&ID digitization"
      ]
    },
    {
      title: "rtn_scheduling",
      blurb:
        "Python package for solving resource-task-network scheduling problems with Pyomo, including experiment and visualization utilities.",
      tags: ["Python", "Pyomo", "Scheduling"],
      repo: "https://github.com/JavalVyas2000/rtn_scheduling",
      metrics: [
        { label: "Type", value: "OSS package" },
        { label: "Domain", value: "Process scheduling" }
      ],
      highlights: ["Resource-task-network inputs", "Gantt, resource-level, and network visualizations"]
    },
    {
      title: "Unit Commitment Optimization",
      blurb:
        "Optimization models and decomposition algorithms for meeting electricity demand at minimum cost under combinatorial commitment constraints.",
      tags: ["Energy Systems", "Optimization", "Scheduling"],
      href: "https://psecommunity.org/LAPSE:2025.0282",
      metrics: [
        { label: "Venue", value: "SCT 2025" },
        { label: "DOI", value: "10.69997/sct.113099" }
      ],
      highlights: [
        "Decomposition method paired with EGRET unit commitment models",
        "Benchmarked across four power-system cases"
      ]
    },
    {
      title: "Crystallization Image Analysis",
      blurb:
        "OpenCV-based image analysis workflow for classifying primary crystals and agglomerates in crystallization monitoring.",
      tags: ["Computer Vision", "OpenCV", "Process Monitoring"],
      repo: "https://github.com/JavalVyas2000/Classification-of-Needle-like-crystals-using-Image-Analysis",
      highlights: [
        "Contour features based on convexity, concavity, and circularity",
        "Notebook workflow for particle classification experiments"
      ]
    }
  ],

  scholarUrl,

  publications: [
    {
      title: "Automating Cause-Effect Specification with Knowledge Graphs and Large Language Models",
      venue: "arXiv",
      year: "2026",
      href: "https://arxiv.org/abs/2606.31614",
      note: "preprint",
      links: [{ label: "arXiv", href: "https://arxiv.org/abs/2606.31614" }]
    },
    {
      title: "A Tutorial on Autonomous Fault-Tolerant Control Using Knowledge-Grounded LLM Agents",
      venue: "arXiv",
      year: "2026",
      href: "https://arxiv.org/abs/2606.31635",
      note: "preprint",
      links: [{ label: "arXiv", href: "https://arxiv.org/abs/2606.31635" }]
    },
    {
      title: "From Detection to Action: Using LLM Agents for Fault-Tolerant Control",
      venue: "arXiv",
      year: "2026",
      href: "https://arxiv.org/abs/2606.28011",
      note: "preprint",
      links: [{ label: "arXiv", href: "https://arxiv.org/abs/2606.28011" }]
    },
    {
      title: "From P&ID Drawings to Process Graphs: A Multimodal Language Model Approach",
      venue: "Systems and Control Transactions",
      year: "2026",
      href: "https://psecommunity.org/LAPSE:2026.0420",
      note: "journal article",
      links: [
        { label: "LAPSE", href: "https://psecommunity.org/LAPSE:2026.0420" },
        { label: "DOI", href: "https://doi.org/10.69997/sct.198584" }
      ]
    },
    {
      title: "Optimization models and algorithms for the Unit Commitment problem",
      venue: "Systems and Control Transactions",
      year: "2025",
      href: "https://psecommunity.org/LAPSE:2025.0282",
      note: "journal article",
      links: [
        { label: "LAPSE", href: "https://psecommunity.org/LAPSE:2025.0282" },
        { label: "DOI", href: "https://doi.org/10.69997/sct.113099" }
      ]
    },
    {
      title: "Autonomous Industrial Control Using an Agentic Framework with Large Language Models",
      venue: "IFAC-PapersOnLine",
      year: "2025",
      href: scholarUrl,
      note: "conference"
    },
    {
      title: "Leveraging LLM Agents and Digital Twins for Fault Handling in Process Plants",
      venue: "IEEE ETFA",
      year: "2025",
      href: scholarUrl,
      note: "conference"
    },
    {
      title: "Integration of Plant Scheduling Feasibility with Supply Chain Networks Under Disruptions Using Machine Learning Surrogates",
      venue: "ESCAPE",
      year: "2024",
      href: scholarUrl,
      note: "conference"
    }
  ],

  pipeline: [
    {
      title: "Knowledge-grounded recovery agents",
      blurb:
        "LLM agents that move from detection to safe action through plant context, graph retrieval, validators, and simulation."
    },
    {
      title: "Semantic specifications for process safety",
      blurb:
        "Knowledge-graph and LLM workflows for generating cause-effect logic, safety narratives, and machine-checkable rules."
    },
    {
      title: "Process graphs from engineering artifacts",
      blurb:
        "Multimodal extraction of equipment, topology, and operating semantics from P&IDs to support digital twins."
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
      title: "Full publication profile",
      venue: "Google Scholar",
      year: "2026",
      href: scholarUrl,
      blurb: "A maintained list of papers, preprints, and citation metadata."
    }
  ],

  skills: [
    { group: "Core", items: ["Python", "Git", "Linux", "Docker", "CI/CD"] },
    {
      group: "LLMs / Agents",
      items: ["Agentic workflows", "Retrieval / Graph RAG", "Knowledge graphs", "Validation loops", "Tool use"]
    },
    {
      group: "Optimization",
      items: ["Scheduling", "MILP / MINLP", "Decomposition", "Surrogates", "Experiment design"]
    },
    {
      group: "Process Systems",
      items: ["Process control", "Fault handling", "Digital twins", "Safety envelopes", "P&ID digitization"]
    },
    {
      group: "ML / Vision",
      items: ["Machine learning", "Uncertainty diagnostics", "OpenCV", "Image analysis", "Model evaluation"]
    }
  ]
};
