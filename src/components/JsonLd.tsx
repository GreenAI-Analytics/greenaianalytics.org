import { siteConfig, products } from "@/data/siteData";

export default function JsonLd() {
  const baseUrl = siteConfig.url;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: siteConfig.description,
    email: "hello@greenaianalytics.org",
    sameAs: [
      "https://github.com/GreenAI-Analytics",
      "https://codeberg.org/greenaianalytics/os-for-work",
    ],
    knowsAbout: [
      "CSRD",
      "ESRS",
      "EU Taxonomy",
      "NACE codes",
      "carbon accounting",
      "Scope 1 2 3 emissions",
      "VSME reporting",
      "double materiality",
      "EU compliance automation",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: baseUrl,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const complianceProductSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: products.compliance.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: products.compliance.url,
    description: products.compliance.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      description: "Free during launch period",
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: baseUrl,
    },
  };

  const carbonProductSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: products.carbon.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: products.carbon.url,
    description: products.carbon.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      description:
        "Three tiers: VSME Basic (Free — Climate E1, basic S1 & G1, Report Builder with iXBRL), VSME Comprehensive (€99/mo — full E/S/G + simplified EU Taxonomy, 30-day free trial), CSRD (€99/mo — full double materiality + full EU Taxonomy + iXBRL/ESEF export).",
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: baseUrl,
    },
  };

  const osForWorkSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: products.opensource.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows, macOS, Linux",
    url: `${baseUrl}/open-source`,
    description: products.opensource.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      description: "Free forever, open-source",
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: baseUrl,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is CSRD and does it apply to my SME?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Corporate Sustainability Reporting Directive (CSRD) applies to large EU companies and listed SMEs. Most non-listed SMEs use the voluntary VSME standard instead. GreenAI auto-detects your regulatory scope during onboarding.",
        },
      },
      {
        "@type": "Question",
        name: "How does NACE code compliance work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your NACE code determines which EU regulations apply to your business. GreenAI's Compliance Tracker maps your NACE code against 31 EU/EEA countries and generates automated task instances with deadlines, reminders, and a monthly calendar view.",
        },
      },
      {
        "@type": "Question",
        name: "What is VSME reporting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "VSME (Voluntary SME standard) is EFRAG's proportionate ESG reporting framework for non-listed SMEs. It comes in two modules: VSME Basic (core disclosures) and VSME Comprehensive (full voluntary reporting aligned with ESRS). Carbon Track AI supports both modes plus full CSRD for in-scope entities.",
        },
      },
      {
        "@type": "Question",
        name: "How do I start EU sustainability reporting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Start by identifying your NACE code and country of operation. GreenAI's Compliance Tracker maps your obligations in minutes. Then use Carbon Track AI for Scope 1-3 carbon accounting, double materiality assessments, and ESRS-aligned report generation.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Open Source",
        item: `${baseUrl}/open-source`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Contact",
        item: `${baseUrl}/contact`,
      },
    ],
  };

  const allSchemas = [
    organizationSchema,
    websiteSchema,
    complianceProductSchema,
    carbonProductSchema,
    osForWorkSchema,
    faqSchema,
    breadcrumbSchema,
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(allSchemas),
      }}
    />
  );
}
