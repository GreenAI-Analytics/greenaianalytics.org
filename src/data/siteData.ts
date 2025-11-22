export const siteConfig = {
  name: "GreenAI Analytics",
  url: "https://greenaianalytics.org",
  tagline: "From NACE Code to CSRD Report in Minutes",
  description: "AI-powered compliance & carbon tools for EU SMEs",
  calendly: "https://calendly.com/your-calendly-username", // ← CHANGE THIS LINE ONLY
};

export const products = {
  compliance: {
    name: "Compliance Tracker",
    subtitle: "Never miss another EU regulation",
    description: "Automatically detects all applicable EU requirements based on your NACE code with smart reminders and a full knowledge hub.",
    url: "https://compliance.greenaianalytics.org",
    status: "Live now",
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
    github: "https://github.com/GreenAI-Analytics/os-for-work", // only the specific repo
    description: "One-click local installer with OnlyOffice, Nextcloud, CryptPad, ERPNext and more.",
  },
};

export const pricing = [
  {
    name: "Compliance Tracker",
    price: "€9.99",
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
