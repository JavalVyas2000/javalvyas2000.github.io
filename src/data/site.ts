export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  href?: string;
  repo?: string;
  highlights?: string[];
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
  socials: { label: string; href: string }[];
  ctas: { label: string; href: string; kind?: "primary" | "ghost" }[];
  highlights: { label: string; value: string; hint?: string }[];
  projects: Project[];
  writing: Writing[];
  skills: { group: string; items: string[] }[];
};

export const site: SiteData = {
  name: "Javal Vyas",
  title: "Tech + Quant • Data Science • ML • Markets",
  tagline:
    "I build research-driven systems at the intersection of machine learning, statistics, and financial markets — from signal research to production pipelines.",
  location: "UK (Europe/London)",
  email: "your.email@example.com",
  socials: [
    { label: "GitHub", href: "https://github.com/JavalVyas2000" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-link/" }
  ],
  ctas: [
    { label: "Download Resume", href: "/resume.pdf", kind: "primary" },
    { label: "Contact", href: "#contact", kind: "ghost" }
  ],
  highlights: [
    { label: "Focus", value: "Quant Research + ML Engineering", hint: "Signals, forecasting, optimization" },
    { label: "Tooling", value: "Python, SQL, Docker, Git", hint: "Clean pipelines & reproducibility" },
    { label: "Methods", value: "Time series, ML, stats", hint: "Evaluation-first mindset" }
  ],
  projects: [
    {
      title: "Market Regime Classifier",
      blurb: "Unsupervised + supervised regime detection with robust backtests and walk-forward validation.",
      tags: ["Time Series", "ML", "Backtesting"],
      repo: "https://github.com/JavalVyas2000",
      highlights: ["Walk-forward validation", "Transaction cost modeling", "Reproducible research notebooks"]
    },
    {
      title: "Volatility Forecasting Pipeline",
      blurb: "End-to-end volatility forecasting with feature store, model registry, and monitoring-ready outputs.",
      tags: ["Forecasting", "Pipelines", "MLOps"],
      href: "https://github.com/JavalVyas2000",
      highlights: ["Clean train/serve split", "Feature engineering at scale", "Stable metrics + drift hooks"]
    },
    {
      title: "Atmospheric Ozone Estimation",
      blurb: "Regression + calibration approach to estimate ozone levels from environmental covariates.",
      tags: ["Regression", "Modeling", "Explainability"],
      href: "https://github.com/JavalVyas2000"
    }
  ],
  writing: [
    {
      title: "Research Note: Evaluating Signals Without Fooling Yourself",
      venue: "Blog / Notes",
      year: "2026",
      href: "#",
      blurb: "A practical guide to leakage, overfitting, and validation for time-series signals."
    },
    {
      title: "Technical Memo: Feature Engineering for Volatility",
      venue: "Internal-style memo",
      year: "2026",
      href: "#",
      blurb: "What works, what doesn’t, and how to measure it."
    }
  ],
  skills: [
    { group: "Core", items: ["Python", "SQL", "Git", "Linux", "Docker"] },
    { group: "Quant/ML", items: ["Time Series", "Stats", "Forecasting", "Optimization", "Backtesting"] },
    { group: "Data", items: ["Pandas", "NumPy", "Sklearn", "Visualization", "ETL"] }
  ]
};
