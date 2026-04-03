/*
  Portfolio Data
  --------------
  Edit this file to update portfolio content.
*/

window.PORTFOLIO_DATA = {
  meta: {
    name: "Kirtana Patel",
    title: "Financial Analyst | Valuation, Financial Modeling & AI-Driven Analysis",
    valueStatement:
      "Decision-focused finance projects in valuation, modeling, forecasting, and AI-supported analysis.",
    location: "New Jersey, United States",
    program: "Master of Finance in Analytics (Class of 2026) | Rutgers Business School",
    email: "kvp80@scarletmail.rutgers.edu",
    linkedin: "https://www.linkedin.com/in/your-linkedin/",
    resumeLink: "./Resume - Kirtana Patel.pdf",
    footerNote: "Kirtana Patel | Financial Analyst Portfolio",
  },

  analyticalApproach: {
    intro:
      "My approach combines structured training at Rutgers Business School with practical finance exposure from I&M Bank.",
    principles: [
      "Start with value drivers, not outputs: define the question, objective, and core assumptions first.",
      "Stress-test assumptions with downside, base, and upside scenarios before making recommendations.",
      "Prioritize decision usefulness: every model should explain what to do next, not just what happened.",
      "Use AI as an analytical accelerator while keeping finance judgment, controls, and accountability human-led.",
    ],
  },

  projects: [
    {
      title: "Pfizer Equity Research | BUY Recommendation",
      decisionImpact:
        "Built a valuation-backed BUY thesis with a $42.00 target (~55% upside) to support investment decision-making.",
      skills: [
        "DCF Modeling",
        "Comparable Company Analysis",
        "Equity Valuation",
        "Scenario Analysis",
      ],
      executed: [
        "Developed a multi-scenario DCF model using 8.0% WACC and 2.5% terminal growth assumptions.",
        "Benchmarked valuation outputs against peer multiples and analyst consensus ranges.",
        "Built a risk map for pipeline uncertainty, patent cliffs, litigation, and regulatory pressure.",
      ],
      learned:
        "Valuation sensitivity is driven more by assumption discipline than model complexity, especially in post-normalization revenue environments.",
      deepDive: {
        outputs: [
          "Blended intrinsic value estimate around $42 per share.",
          "Forward P/E and dividend yield analysis highlighted margin-of-safety context.",
          "Segment-level revenue assessment across Oncology, Internal Medicine, Vaccines, and Hospital.",
        ],
        modelNotes: [
          "Model audited with upside/base/downside pathways to isolate key growth and margin drivers.",
          "Comps used as a sanity check to avoid over-reliance on a single valuation method.",
        ],
      },
    },
    {
      title: "Costco Fixed Income Credit Analysis | STRONG BUY",
      decisionImpact:
        "Issued a STRONG BUY call on Costco senior notes based on balance sheet strength and relative-value credit metrics.",
      skills: [
        "Credit Analysis",
        "Yield & Spread Analysis",
        "Bond Valuation",
        "Fixed Income Research",
      ],
      executed: [
        "Analyzed leverage, net cash, ratings stability, and debt-servicing capacity post Q2 FY2026.",
        "Evaluated yield-to-worst and spread behavior versus UST 10Y and high-quality corporate comparables.",
        "Connected operating momentum (renewals, e-commerce growth) to credit resilience.",
      ],
      learned:
        "In credit decisions, downside protection and balance sheet durability often matter more than upside narratives.",
      deepDive: {
        outputs: [
          "Credit ratings confirmed Aa3/AA/AA with stable outlooks.",
          "Net cash position of $10.1B and TD/EBITDA near 0.58x supported high-quality credit profile.",
          "Relative-value checks versus alternative long-duration instruments improved recommendation confidence.",
        ],
        modelNotes: [
          "Framework weighted cash-flow stability and refinancing risk over headline growth.",
          "Spread analysis paired with business fundamentals to avoid purely market-technical conclusions.",
        ],
      },
    },
    {
      title: "Airline Industry Panel Analysis | Comparative Investment Signal",
      decisionImpact:
        "Compared three U.S. carriers over 12 quarters to identify relative operating quality and post-COVID recovery strength.",
      skills: [
        "Financial Statement Analysis",
        "Panel Data Analysis",
        "Ratio Analysis",
        "Investment Thesis Writing",
      ],
      executed: [
        "Built a cross-sectional and time-series framework for UAL, JBLU, and SKYW (Q1 2022 to Q4 2024).",
        "Tracked revenue growth, margin recovery, and net profitability across distinct business models.",
        "Synthesized findings into an executive-style investment narrative and ranking.",
      ],
      learned:
        "Sector-level narratives can mislead; decision quality improves when company-level execution and cost structure are isolated.",
      deepDive: {
        outputs: [
          "United Airlines surfaced as the strongest post-COVID operator in the sample period.",
          "SkyWest showed notable operational recovery from weak baseline conditions.",
          "JetBlue highlighted structural cost pressure and weaker profitability conversion.",
        ],
        modelNotes: [
          "Panel format helped separate temporary cyclical effects from business-model durability.",
          "Comparative normalization was essential to avoid distorted conclusions across fleet strategies.",
        ],
      },
    },
  ],

  experience: [
    {
      role: "Finance & Treasury Intern",
      company: "I&M Bank Headquarters",
      period: "2023 - 2024",
      contribution:
        "Supported treasury and finance workflows through statement analysis, reporting support, and documentation discipline across commercial banking operations.",
      skillsDeveloped: [
        "Financial Reporting",
        "Credit Risk Awareness",
        "Treasury Exposure",
        "Stakeholder Coordination",
      ],
      keyInsight:
        "In practice, finance quality depends on process reliability: accurate controls and documentation drive better decisions upstream.",
    },
    {
      role: "MFinA Analyst (Academic Projects)",
      company: "Rutgers Business School",
      period: "2025 - Present",
      contribution:
        "Produced institutional-style analyses spanning equity research, fixed income credit, derivatives pricing, macro commentary, and portfolio analytics.",
      skillsDeveloped: [
        "Valuation",
        "Scenario Modeling",
        "Credit Analysis",
        "Macroeconomic Interpretation",
      ],
      keyInsight:
        "Technical depth matters most when outputs are translated into concise recommendation logic for real decisions.",
    },
    {
      role: "Investment Simulation Analyst",
      company: "Fidelity Investments Virtual Experience (Forage)",
      period: "2025",
      contribution:
        "Completed a five-task analyst simulation covering portfolio risk review, strategic equity assessment, fixed income fundamentals, and allocation design.",
      skillsDeveloped: [
        "Portfolio Risk Analysis",
        "Tracking Error Review",
        "Relative Valuation",
        "Portfolio Construction",
      ],
      keyInsight:
        "Portfolio adjustments are most credible when grounded in benchmark-relative risk diagnostics, not isolated return views.",
    },
  ],

  skills: [
    {
      category: "Technical Finance",
      items: [
        "DCF Modeling",
        "3-Statement Modeling",
        "Comparable Company Analysis",
        "Fixed Income Credit Analysis",
        "Derivatives Pricing (FRA, IR Swaps, Equity Index Swaps)",
        "Sensitivity & Scenario Analysis",
      ],
    },
    {
      category: "Analytical Decision Skills",
      items: [
        "Investment Thesis Development",
        "Risk Assessment Under Uncertainty",
        "Portfolio Performance Evaluation",
        "VaR / CVaR and Quantitative Diagnostics",
        "Macroeconomic Interpretation (GDP, CPI, Labor Markets)",
        "Executive-Style Financial Communication",
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        "Excel (Advanced: Dynamic Arrays, Data Tables, Regression ToolPak)",
        "Bloomberg Market Concepts (BMC)",
        "Tableau",
        "PowerPoint & Word for Analyst Reporting",
        "Forage Investment Management Simulation",
        "AI Tools for Finance Workflows (Prompting, Synthesis, Validation)",
      ],
    },
  ],

  certifications: [
    {
      name: "AI for Finance Specialization",
      issuer: "Professional Certification",
      status: "Completed",
    },
    {
      name: "Bloomberg Market Concepts (BMC)",
      issuer: "Bloomberg",
      status: "Completed",
    },
    {
      name: "FMVA (Selected Modules)",
      issuer: "Corporate Finance Institute",
      status: "In Progress",
    },
    {
      name: "Fidelity Investments Virtual Experience",
      issuer: "Forage",
      status: "Completed",
    },
    {
      name: "Derivatives Micro-Credentials (Advanced Futures/Options/Swaps)",
      issuer: "CME Group / CFI",
      status: "Completed",
    },
  ],

};
