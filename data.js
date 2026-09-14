/*
  Portfolio Data
  --------------
  Edit this file to update portfolio content.
*/

window.PORTFOLIO_DATA = {
  meta: {
    name: "Kirtana Patel",
    title: "Business Analyst | Financial Modeling, Treasury Analytics & Investment Research",
    valueStatement: "Finance and analytics professional translating financial data, risk signals, and operating workflows into decision-ready insights.",
    tagline: "Focused on valuation, portfolio strategy, reporting automation, and capital markets analysis.",
    location: "New Jersey, United States",
    program: "Master of Finance in Analytics (Class of 2026) | Rutgers Business School",
    email: "kvp80@scarletmail.rutgers.edu",
    phone: "+1 (732) 858-4979",
    linkedin: "https://www.linkedin.com/in/kirtanavagminpatel",
    resumeLink: "./Resume - Kirtana Patel.pdf",
    footerNote: "Kirtana Patel | Financial Analyst Portfolio",
  },

  analyticalApproach: {
    intro:
      "My approach combines Rutgers Business School training with hands-on financial services experience across Citizens Financial Group, Pesapal, and I&M Bank.",
    principles: [
      "Start with value drivers, not outputs: define the question, objectives, and core assumptions first.",
      "Use scenario, sensitivity, and stress-test analysis to understand downside exposure before recommendations are made.",
      "Connect financial results to operating workflows so reporting explains both what changed and why it changed.",
      "Prioritize decision usefulness: dashboards, models, and reports should clarify what action to take next.",
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
      reportLink: "./Costco_Credit_Report_Akash_Kirtana_RP4.pdf",
      reportLabel: "View Credit Report (PDF)",
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
      role: "Business Analyst",
      company: "Citizens Financial Group | New Jersey",
      period: "Jan 2026 - Present",
      contribution:
        "Built multi-scenario Excel models, Power BI dashboards, and SQL-based reconciliation workflows supporting financial performance, risk, cost-of-capital tracking, P&L reporting, and Treasury liquidity platform delivery.",
      skillsDeveloped: [
        "Financial Modeling",
        "Power BI Reporting",
        "Snowflake SQL",
        "Treasury Liquidity Reporting",
      ],
      keyInsight:
        "Clear financial insight depends on disciplined data validation, operating process visibility, and stress-tested assumptions across front-office, Treasury, and risk stakeholders.",
    },
    {
      role: "Operations Analyst",
      company: "Pesapal | Kenya",
      period: "June 2024 - Mar 2025",
      contribution:
        "Documented Treasury Management System requirements, analyzed settlement failures and reconciliation breaks, mapped current and future-state workflows, and created Tableau dashboards for SLA adherence, trade error rates, and cost-per-transaction metrics.",
      skillsDeveloped: [
        "Business Requirements",
        "Root-Cause Analysis",
        "Tableau Dashboards",
        "Process Improvement",
      ],
      keyInsight:
        "Operational finance decisions improve when process maps, stakeholder requirements, and exception analysis are tied directly to measurable control and efficiency outcomes.",
    },
    {
      role: "Finance Associate Intern Analyst",
      company: "I&M Bank | Kenya",
      period: "Oct 2023 - May 2024",
      contribution:
        "Analyzed financial data, prepared management reports, supported budgeting and expense reconciliation, reviewed daily financial documents, and gained exposure to treasury and money market operations.",
      skillsDeveloped: [
        "Budgeting",
        "Expense Reconciliation",
        "Management Reporting",
        "Treasury Operations",
      ],
      keyInsight:
        "Reliable finance work begins with accurate records, strong documentation, compliance awareness, and timely reporting support.",
    },
  ],

  education: [
    {
      degree: "Master of Financial Analysis",
      school: "Rutgers University - New Brunswick, NJ",
      period: "Aug 2025 - May 2026",
    },
    {
      degree: "Bachelor of Science in International Business Administration (IBA)",
      school: "USIU Africa - Nairobi, Kenya",
      period: "Jan 2020 - Dec 2023",
    },
  ],

  skills: [
    {
      category: "Financial Analysis & Modeling",
      items: [
        "Financial Statement Analysis",
        "DCF Modeling",
        "3-Statement Modeling",
        "Financial Forecasting",
        "Budgeting & Variance Analysis",
        "Scenario & Sensitivity Analysis",
        "Comparable Company Analysis and Precedent Transactions",
      ],
    },
    {
      category: "Corporate Finance & Investments",
      items: [
        "FP&A and Management Reporting",
        "P&L Analysis",
        "Expense and Cost Analysis",
        "Investment Research",
        "Portfolio Analysis and Valuation",
        "Equity Analysis, Fixed Income, and Capital Markets",
      ],
    },
    {
      category: "Data, Analytics & Reporting Tools",
      items: [
        "Advanced Excel, PivotTables, Power Query, Power Pivot, VBA",
        "SQL and Snowflake",
        "Power BI and DAX",
        "Tableau",
        "Data Reconciliation, Validation, and Visualization",
        "PowerPoint and Word for analyst reporting",
      ],
    },
    {
      category: "Domain Knowledge",
      items: [
        "Financial Services and Capital Markets",
        "Treasury and Liquidity Risk",
        "Trade Lifecycle and Portfolio Valuation",
        "Basel III, CCAR, and DFAST",
        "AML, KYC, GAAP, and IFRS",
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
      name: "Securities Industry Essentials (SIE) Exam",
      issuer: "FINRA",
      status: "Passed - May 2026",
    },
    {
      name: "FMVA - Financial Modeling & Valuation Analyst",
      issuer: "Corporate Finance Institute",
      status: "In Progress - selected FMVA modules completed",
    },
    {
      name: "Asset Management & Quantitative Finance Coursework",
      issuer: "Corporate Finance Institute",
      status: "Completed - Bayesian thinking, ethics, Monte Carlo, regression, statistics, Python, ML",
    },
    {
      name: "Fidelity Investments Virtual Experience",
      issuer: "Forage",
      status: "Completed",
    },
    {
      name: "PGIM Fixed Income - Public and Private Credit",
      issuer: "PGIM Fixed Income / Forage",
      status: "Completed",
    },
    {
      name: "Freshfields - U.S. Capital Markets Virtual Experience",
      issuer: "Freshfields / Forage",
      status: "Completed - due diligence and Form 10-Q comment letter work",
    },
    {
      name: "Derivatives and Futures Market Micro-Credentials",
      issuer: "CME Group",
      status: "Completed - clearing house account definitions and T-Bill futures spreads",
    },
  ],

};
