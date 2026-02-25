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
  badges?: string[]; // NEW: short “quant/tech” proof points
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

  // Put your suit photo here:
  avatar: "/profile.jpeg",

  // These make the page feel less “plain” instantly:
  badges: [
    "Leakage-aware evaluation",
    "Walk-forward validation",
    "Transaction costs",
    "Time-series ML",
    "Research → production",
  ],

  socials: [
    { label: "GitHub", href: "https://github.com/JavalVyas2000" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-link/" },
  ],

  ctas: [
    { label: "Download Resume", href: "/resume.pdf", kind: "primary" },
    { label: "Contact", href: "#contact", kind: "ghost" },
  ],

  highlights: [
    { label: "Focus", value: "Quant Research + ML Engineering", hint: "Signals, forecasting, optimization" },
    { label: "Validation", value: "Leakage-aware evaluation", hint: "Walk-forward, baselines, costs" },
    { label: "Shipping", value: "Pipelines you can maintain", hint: "Reproducibility & clear interfaces" },
  ],

  projects: [
    {
      title: "Market Regime Classifier",
      blurb: "Regime detection with robust baselines and walk-forward validation designed to reduce false discoveries.",
      tags: ["Time Series", "ML", "Backtesting"],
      repo: "https://github.com/JavalVyas2000",
      metrics: [
        { label: "Validation", value: "Walk-forward" },
        { label: "Costs", value: "Modeled" },
      ],
      highlights: ["Leakage checks + baselines", "Transaction cost modeling", "Reproducible notebooks"],
    },
    {
      title: "Volatility Forecasting Pipeline",
      blurb: "End-to-end volatility forecasting: feature engineering → training → outputs built for monitoring.",
      tags: ["Forecasting", "Pipelines", "MLOps"],
      href: "https://github.com/JavalVyas2000",
      metrics: [
        { label: "Output", value: "Forecast + intervals" },
        { label: "Deploy", value: "Static artifacts" },
      ],
      highlights: ["Clean train/serve split", "Stable metrics + drift hooks", "Versioned datasets/models"],
    },
    {
      title: "Atmospheric Ozone Estimation",
      blurb: "Regression + calibration to estimate ozone from environmental covariates, with explainability-first reporting.",
      tags: ["Regression", "Modeling", "Explainability"],
      href: "https://github.com/JavalVyas2000",
    },
  ],

  writing: [
    {
      title: "Research Note: Evaluating Signals Without Fooling Yourself",
      venue: "Notes",
      year: "2026",
      href: "#",
      blurb: "Leakage, overfitting, and validation patterns for time-series signals.",
    },
    {
      title: "Technical Memo: Feature Engineering for Volatility",
      venue: "Notes",
      year: "2026",
      href: "#",
      blurb: "Which features hold up under walk-forward evaluation (and why).",
    },
  ],

  skills: [
    { group: "Core", items: ["Python", "SQL", "Git", "Linux", "Docker"] },
    { group: "Quant/ML", items: ["Time Series", "Stats", "Forecasting", "Optimization", "Backtesting"] },
    { group: "Data", items: ["Pandas", "NumPy", "Sklearn", "ETL", "Visualization"] },
  ],
};