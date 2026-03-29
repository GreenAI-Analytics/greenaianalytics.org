export const siteConfig = {
  name: "GreenAI Analytics",
  url: "https://greenaianalytics.org",
  tagline: "From NACE Code to CSRD Report in Minutes",
  description: "AI-powered compliance & carbon tools for EU SMEs",
  calendly: "https://calendly.com/zamil-khan-carbontrackai/intro", // ← UPDATED
};

export const products = {
  compliance: {
    name: "Compliance Tracker",
    subtitle: "Never miss another EU regulation",
    description: "Automatically detects all applicable EU requirements based on your NACE code with smart reminders and a full knowledge hub.",
    url: "https://compliance.greenaianalytics.org",
    status: "Launching Soon",
  },
  carbon: {
    name: "Carbon Track AI",
    subtitle: "Carbon accounting + CSRD reporting in one platform",
    description: "Scope 1–3 carbon calculations and one-click ESRS-compliant reports (PDF • Word • XBRL).",
  },
  opensource: {
    name: "OS For Work",
    subtitle: "100% free & open-source business stack",
    url: "/open-source", // points to your own page later
    github: "https://codeberg.org/greenaianalytics/os-for-work", // only the specific repo
    description: "One-click local installer with OnlyOffice, Nextcloud, CryptPad, ERPNext and more.",
  },
};

export const pricing = [
  {
    name: "Compliance Tracker",
    price: "€14.99",
    period: "/month",
    features: ["All EU regulations", "NACE-based detection", "Reminders & knowledge hub"],
  },
  {
    name: "Carbon Track AI",
    price: "Coming Soon",
    period: "",
    features: ["Scope 1–3 carbon accounting", "Full CSRD/ESRS reports", "AI data collection"],
  },
  {
    name: "OS For Work – Local",
    price: "Free",
    period: "forever",
    features: ["Full open-source stack", "Runs offline", "No vendor lock-in"],
  },
  {
    name: "OS For Work – Managed",
    price: "€299+",
    period: "/month",
    features: ["Full company migration", "24/7 support", "Custom setups"],
  },
];

export type SolutionIcon =
  | "Zap"
  | "Shield"
  | "Users"
  | "CreditCard"
  | "TrendingUp"
  | "Package";

export type Solution = {
  id: string;
  name: string;
  description: string;
  icon: SolutionIcon;
  image: string;
  color: string;
};

export const solutions = [
  {
    id: "ai-enablement",
    name: "AI Enablement",
    description: "Unlock the potential of artificial intelligence to streamline your compliance and sustainability workflows. Our AI Enablement service empowers your team to automate regulatory data collection, generate intelligent insights from complex reporting requirements, and accelerate decision-making across your organization. From NACE-based regulation mapping to predictive compliance alerts, we help you harness machine learning to stay ahead of evolving EU mandates while reducing manual overhead.",
    icon: "Zap" as const,
    image: "/images/solutions/ai-enablement.svg",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "iam",
    name: "Identity and Access Management",
    description: "Secure governance starts with trusted access. Our IAM solutions protect your most sensitive compliance and carbon accounting data through enterprise-grade authentication, role-based access controls, and comprehensive audit trails. Built with data privacy at the core, we ensure your team maintains granular control over who accesses regulatory documents, CSRD reports, and financial data—while maintaining full compliance with GDPR and other EU data protection frameworks.",
    icon: "Shield" as const,
    image: "/images/solutions/iam.svg",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "workforce-management",
    name: "Workforce Management",
    description: "Align your team's efforts with your sustainability goals. Our Workforce Management platform integrates directly with your compliance and reporting workflows, enabling you to track responsibilities, deadlines, and progress on regulatory initiatives. Assign ESG-related tasks, monitor completion rates, and maintain accountability across departments—ensuring that every team member understands their role in meeting CSRD, ESRS, and other sustainability reporting obligations.",
    icon: "Users" as const,
    image: "/images/solutions/workforce-management.svg",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "payment-integration",
    name: "Payment Platform Integration",
    description: "Simplify your financial operations with seamless, secure payment processing. Our Payment Platform Integration connects your compliance tracking and carbon accounting tools with leading payment gateways, enabling you to manage subscription handling, invoice reconciliation, and financial settlements without friction. Built for SaaS platforms and B2B workflows, it ensures transparent transaction records that integrate with your regulatory reporting requirements.",
    icon: "CreditCard" as const,
    image: "/images/solutions/payment-integration.svg",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "esg-reporting",
    name: "ESG Reporting",
    description: "Transform raw sustainability data into compelling ESG narratives. Our ESG Reporting service guides you through Scope 1, 2, and 3 emissions accounting, materiality assessments, and ESRS disclosure frameworks. We combine your compliance data with carbon accounting insights to generate comprehensive, audit-ready reports that demonstrate your environmental, social, and governance commitments to stakeholders, regulators, and investors.",
    icon: "TrendingUp" as const,
    image: "/images/solutions/esg-reporting.svg",
    color: "from-green-600 to-teal-600",
  },
  {
    id: "sme-utility",
    name: "SME Utility Software Solutions",
    description: "Empower your team with enterprise-grade tools designed for growth. Our SME Utility Software Solutions bring modern, affordable productivity software—including office suites, file storage, ERPNext, and analytics platforms—to organizations of any size. We provide both self-hosted (free) and managed (premium) options, giving you the flexibility to choose between total independence and turnkey support. Perfect for companies looking to escape vendor lock-in while maintaining world-class capabilities.",
    icon: "Package" as const,
    image: "/images/solutions/sme-utility.svg",
    color: "from-indigo-500 to-blue-500",
  },
] as const satisfies Solution[];
