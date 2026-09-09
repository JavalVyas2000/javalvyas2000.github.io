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
  category: string;
  contribution?: string;
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
  affiliation: string;
  interests: string;
  experience: {
    role: string;
    organization: string;
    detail: string;
    period?: string;
    description: string;
    links?: Link[];
  }[];
  currentResearch: { title: string; status: string; description: string }[];
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
  title: "Optimization & Machine Learning",
  tagline:
    "I develop optimization algorithms, machine learning methods, and Python research software for decision-making under constraints. My work spans energy-system modelling, scheduling, and agentic control.",
  affiliation: "PhD student · Imperial College London",
  interests:
    "Interested in quantitative research and development, with additional interests in AI/ML research and research engineering.",
  experience: [
    {
      role: "PhD student",
      organization: "Imperial College London",
      detail: "Chemical Engineering · Autonomous Industrial Systems Laboratory",
      period: "Sep 2024 – Dec 2027 (expected)",
      description: "Research in optimization, machine learning, and autonomous industrial systems.",
    },
    {
      role: "Engineer II",
      organization: "KeyLogic",
      detail: "Pittsburgh, USA",
      period: "Jan 2024 – Aug 2024",
      description:
        "Contributed process-model and surrogate-optimization examples to IDAES, including supercritical CO₂ and natural-gas combined-cycle workflows. In PARETO, contributed desalination surrogate integration and training, water-quality examples, network visualization, and input-data validation.",
      links: [
        {
          label: "IDAES surrogate examples",
          href: "https://github.com/IDAES/examples/commit/104e3cbced230d9f0a3a2d851b78a4374e738e5d",
        },
        {
          label: "PARETO surrogate integration",
          href: "https://github.com/project-pareto/project-pareto/commit/dd050481f985bd0fee704e04f127ecd27e249638",
        },
        {
          label: "Network visualization",
          href: "https://github.com/project-pareto/project-pareto/commit/c4c82fcbd78ad04fcf4429253051940742f299a3",
        },
      ],
    },
    {
      role: "Research collaboration",
      organization: "Imperial College London × Refiant, Inc.",
      detail: "Industrial AI · Action admissibility",
      period: "Ongoing",
      description:
        "Co-authored ADMITBench, a reference framework for evaluating industrial LLM advisories. Ongoing collaboration explores long-context models and frameworks that use prior knowledge to assess action admissibility.",
      links: [{ label: "ADMITBench white paper", href: "https://arxiv.org/abs/2608.03866" }],
    },
  ],
  currentResearch: [
    {
      title: "Bayesian fault propagation and decision-making",
      status: "Manuscript in preparation",
      description:
        "Investigating fault estimation, Bayesian prediction of fault propagation, and how these predictions can inform subsequent actions. Currently under internal review with my advisor.",
    },
  ],

  location: "London, UK",
  email: "javalvyas2000@gmail.com",
  avatar: "/profile.jpeg",

  badges: [
    "ML systems",
    "Constrained optimization",
    "Knowledge-grounded agents",
    "Validation loops",
    "Python research engineering",
  ],

  socials: [
    { label: "GitHub", href: githubUrl, icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/javal-vyas-63677057/",
      icon: "linkedin",
    },
    { label: "Medium", href: "https://medium.com/@javalvyas2000", icon: "medium" },
    { label: "Google Scholar", href: scholarUrl, icon: "scholar" },
  ],

  ctas: [
    { label: "Resume", href: "/resume.pdf", kind: "primary" },
    { label: "Google Scholar", href: scholarUrl, kind: "ghost" },
    { label: "GitHub", href: githubUrl, kind: "ghost" },
    { label: "Email", href: "mailto:javalvyas2000@gmail.com", kind: "ghost" },
  ],

  highlights: [
    {
      label: "Build",
      value: "Research systems that run",
      hint: "Python packages, reproducible experiments, and deployable evaluation workflows",
    },
    {
      label: "Model",
      value: "Optimization + ML under constraints",
      hint: "Scheduling, unit commitment, surrogate models, and process-system decisions",
    },
    {
      label: "Validate",
      value: "Reliable actions before deployment",
      hint: "Simulation checks, deterministic validators, and failure-mode analysis",
    },
  ],

  projects: [
    {
      title: "Unit Commitment Optimization",
      category: "Mathematical modelling · Energy",
      blurb:
        "Optimization models and decomposition algorithms for meeting electricity demand at minimum cost under combinatorial commitment constraints.",
      tags: ["Energy Systems", "Optimization", "Scheduling"],
      href: "https://arxiv.org/abs/2607.19570",
      highlights: [
        "Shrinking-horizon decomposition with relaxed future binary decisions, compared with monolithic EGRET formulations",
        "Evaluated on four power-system cases with 20 instances per case",
        "SP3120, Tight formulation: up to 4× speedup and 0.18% median objective deviation, reported as separate benchmark statistics",
        "Results vary by case and formulation; CASE6468RTE has larger deviations and time-limited reference solves",
      ],
    },
    {
      title: "PARETO: Surrogates for Water Optimization",
      category: "Open-source software · Mathematical optimization",
      blurb:
        "Contributions to an open-source framework for strategic produced-water management, integrating desalination surrogate models into optimization workflows.",
      contribution:
        "Contributed membrane-distillation and mechanical-vapor-compression surrogate integration, a training notebook, network visualization, and data-validation improvements.",
      tags: ["Python", "Pyomo", "Surrogate Models"],
      href: "https://www.osti.gov/servlets/purl/2434317",
      repo: "https://github.com/project-pareto/project-pareto/commit/dd050481f985bd0fee704e04f127ecd27e249638",
      highlights: [
        "Linked machine-learning surrogates to treatment planning and cost optimization",
        "Co-authored the 2024 PARETO capabilities paper",
      ],
    },
    {
      title: "ADMITBench",
      category: "Industrial collaboration · AI evaluation",
      blurb:
        "A reference framework for assessing whether industrial LLM advisories satisfy explicit evidence, authority, procedure, and consequence checks.",
      contribution:
        "Co-authored through the collaboration between Imperial College London and Refiant, Inc.",
      tags: ["LLM Evaluation", "Constraints", "Admissibility"],
      href: "https://arxiv.org/abs/2608.03866",
      highlights: [
        "Separates action eligibility from utility ranking using mandatory checks",
        "Technical white paper and reference implementation for research evaluation",
      ],
    },
    {
      title: "Fault-Tolerant Control with LLM Agents",
      category: "AI systems · Control",
      contribution:
        "Built most of the system, including the agent architecture, simulation, validators, and experiments. Collaborators developed the knowledge graph and SPARQL queries.",
      blurb:
        "Agentic decision framework that turns fault signals into constraint-aware recovery plans, then checks candidate actions through simulation and deterministic validators.",
      tags: ["LLM Agents", "Validation", "Control"],
      href: "https://arxiv.org/abs/2606.28011",
      repo: "https://github.com/AISL-at-Imperial-College-London/ctrl-alt-recover",
      metrics: [
        { label: "Type", value: "Research system" },
        { label: "Focus", value: "Safe action" },
      ],
      highlights: [
        "Multi-agent monitoring, planning, action synthesis, simulation, and reprompting",
        "Evaluates action reliability under process constraints before execution",
      ],
    },
    {
      title: "P&ID to Process Graphs",
      category: "Multimodal AI · Graphs",
      blurb:
        "Multimodal language-model workflow for extracting equipment tags and reconstructing process topology from P&ID drawings.",
      tags: ["Multimodal ML", "Graphs", "Structured Data"],
      href: "https://psecommunity.org/LAPSE:2026.0420",
      metrics: [
        { label: "Venue", value: "SCT 2026" },
        { label: "Focus", value: "Graph extraction" },
      ],
      highlights: [
        "Separates visual extraction from topology reasoning",
        "Targets scalable, semantically reliable P&ID digitization",
      ],
    },
    {
      title: "rtn_scheduling",
      category: "Open-source software · Optimization",
      blurb:
        "Python package for solving resource-task-network scheduling problems with Pyomo, including experiment and visualization utilities.",
      tags: ["Python", "Pyomo", "Optimization"],
      repo: "https://github.com/JavalVyas2000/rtn_scheduling",
      metrics: [
        { label: "Type", value: "OSS package" },
        { label: "Domain", value: "Scheduling" },
      ],
      highlights: [
        "Resource-task-network inputs",
        "Gantt, resource-level, and network visualizations",
      ],
    },
  ],

  scholarUrl,

  publications: [
    {
      title:
        "ADMITBench: A Safety-Governed Reference Framework for Evaluating the Admissibility of Industrial LLM Advisories",
      venue: "arXiv",
      year: "2026",
      href: "https://arxiv.org/abs/2608.03866",
      note: "technical white paper",
    },
    {
      title:
        "Automating Cause-Effect Specification with Knowledge Graphs and Large Language Models",
      venue: "arXiv",
      year: "2026",
      href: "https://arxiv.org/abs/2606.31614",
      note: "preprint",
      links: [{ label: "arXiv", href: "https://arxiv.org/abs/2606.31614" }],
    },
    {
      title: "From Detection to Action: Using LLM Agents for Fault-Tolerant Control",
      venue: "arXiv",
      year: "2026",
      href: "https://arxiv.org/abs/2606.28011",
      note: "preprint",
      links: [{ label: "arXiv", href: "https://arxiv.org/abs/2606.28011" }],
    },
    {
      title: "From P&ID Drawings to Process Graphs: A Multimodal Language Model Approach",
      venue: "Systems and Control Transactions",
      year: "2026",
      href: "https://psecommunity.org/LAPSE:2026.0420",
      note: "journal article",
      links: [
        { label: "LAPSE", href: "https://psecommunity.org/LAPSE:2026.0420" },
        { label: "DOI", href: "https://doi.org/10.69997/sct.198584" },
      ],
    },
    {
      title: "Optimization models and algorithms for the Unit Commitment problem",
      venue: "Systems and Control Transactions",
      year: "2025",
      href: "https://psecommunity.org/LAPSE:2025.0282",
      note: "conference proceedings",
      links: [
        { label: "LAPSE", href: "https://psecommunity.org/LAPSE:2025.0282" },
        { label: "DOI", href: "https://doi.org/10.69997/sct.113099" },
      ],
    },
    {
      title:
        "An Update on Project PARETO - New Capabilities in DOE's Produced Water Optimization Framework",
      venue: "FOCAPD · Systems and Control Transactions",
      year: "2024",
      href: "https://www.osti.gov/servlets/purl/2434317",
      note: "conference proceedings",
      links: [{ label: "DOI", href: "https://doi.org/10.69997/sct.176005" }],
    },
    {
      title:
        "Integration of Plant Scheduling Feasibility with Supply Chain Networks Under Disruptions Using Machine Learning Surrogates",
      venue: "ESCAPE",
      year: "2024",
      href: scholarUrl,
      note: "conference",
    },
  ],

  pipeline: [
    {
      title: "Reliable agentic control",
      blurb:
        "Decision agents that move from fault detection to safe action through context retrieval, validators, and simulation.",
    },
    {
      title: "Optimization-aware ML",
      blurb:
        "Surrogate models and structured features that improve feasibility, scheduling, and operational decision support.",
    },
    {
      title: "Structured process intelligence",
      blurb:
        "Multimodal extraction of equipment, topology, and operating semantics from engineering artifacts.",
    },
  ],

  writing: [
    {
      title: "Medium: Reliable AI for decision-making",
      venue: "Medium",
      year: "2026",
      href: "https://medium.com/@javalvyas2000",
      blurb: "Writing on reliability, validation, and decision-time controls for AI systems.",
    },
    {
      title: "Full publication profile",
      venue: "Google Scholar",
      year: "2026",
      href: scholarUrl,
      blurb: "Complete publication list, including papers not shown in this curated site view.",
    },
  ],

  skills: [
    { group: "Research Engineering", items: ["Python", "Git", "Linux", "Docker", "CI/CD"] },
    {
      group: "Optimization",
      items: ["Optimization", "Scheduling", "MILP / MINLP", "Decomposition", "Experiment design"],
    },
    {
      group: "ML Systems",
      items: [
        "Machine learning",
        "Uncertainty diagnostics",
        "Validation loops",
        "Surrogates",
        "Model evaluation",
      ],
    },
    {
      group: "Agents / Knowledge",
      items: [
        "Agentic workflows",
        "Retrieval / Graph RAG",
        "Knowledge graphs",
        "Tool use",
        "Semantic constraints",
      ],
    },
    {
      group: "Systems Domain",
      items: [
        "Process control",
        "Fault handling",
        "Energy systems",
        "Digital twins",
        "P&ID digitization",
      ],
    },
  ],
};
