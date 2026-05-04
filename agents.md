# GreenAI Analytics — Agent Onboarding Guide

## Overview

**GreenAI Analytics** is the marketing website and product hub for an EU-focused compliance and carbon reporting platform. This repo (`greenaianalytics.org`) is the **landing/marketing site** — a single Next.js 16 page deployed on Vercel.

The platform consists of **two SaaS products** (separate repositories) plus an open-source desktop stack:

| Product | Repository | Status | Description |
|---|---|---|---|
| **Compliance Tracker** | `C:\github-repos\compliancetracker` | Live | NACE-based EU regulation detection, automated compliance tasks, knowledge hub |
| **Carbon Track AI** | `C:\github-repos\carbontrackai` | **Live** | 13 ESG modules. Three tiers: VSME Basic (Free), VSME Comprehensive (€99/mo), CSRD (€99/mo). |
| **OS For Work** | GitHub / Codeberg | Live (v1.3.2) | Free open-source desktop stack (OnlyOffice, Nextcloud, CryptPad, ERPNext, etc.) |

- **Live URL:** `https://greenaianalytics.org`
- **Demo booking:** Calendly (`https://calendly.com/zamil-khan-carbontrackai/intro`)
- **Contact email:** `sales@carbontrackai.com`
- **GitHub org:** `https://github.com/GreenAI-Analytics`
- **Codeberg (OS For Work):** `https://codeberg.org/greenaianalytics/os-for-work`

> **For detailed architecture of each product, see:**
> - `C:\github-repos\compliancetracker\AGENTS.md` — Compliance Tracker
> - `C:\github-repos\carbontrackai\agents.md` — Carbon Track AI

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | ^16.2.1 |
| Language | TypeScript | ^5.6.2 |
| UI Library | React | 19.0.0 |
| Styling | Tailwind CSS | ^3.4.10 |
| Icons | lucide-react | ^0.447.0 |
| Fonts | Manrope + Space Grotesk (Google Fonts via `next/font`) | — |
| Linting | ESLint (`eslint-config-next`) | ^9.39.4 |
| PostCSS | Autoprefixer + Tailwind plugin | — |
| Runtime | Node.js 22.x (declared in `.nvmrc`) | 22 |
| Deployment | Vercel (`vercel` CLI in deps) | ^50.37.3 |

---

## Directory Structure

```
greenaianalytics.org/
├── public/
│   ├── logo.png                          # Brand logo (used in Header)
│   └── images/
│       ├── carbon-preview.jpg
│       ├── compliance-preview.jpg
│       ├── os-for-work-preview.svg
│       └── solutions/
│           ├── ai-enablement.svg
│           ├── esg-reporting.svg
│           ├── iam.svg
│           ├── payment-integration.svg
│           ├── sme-utility.svg
│           └── workforce-management.svg
├── src/
│   ├── app/
│   │   ├── globals.css                   # Tailwind directives + CSS custom properties + component classes
│   │   ├── layout.tsx                    # Root layout: fonts, metadata, Header + Footer shell
│   │   ├── page.tsx                      # Homepage (hero, products, solutions, pricing, CTA)
│   │   ├── contact/
│   │   │   └── page.tsx                  # /contact — form submitted to FormSubmit
│   │   ├── open-source/
│   │   │   └── page.tsx                  # /open-source — OS For Work detail page
│   │   ├── thanks/
│   │   │   └── page.tsx                  # /thanks — post-waitlist confirmation
│   │   └── thanks-contact/
│   │       └── page.tsx                  # /thanks-contact — post-contact-form confirmation
│   ├── components/
│   │   ├── Header.tsx                    # Fixed glass-morphism nav bar
│   │   ├── Footer.tsx                    # Dark-themed 4-column footer
│   │   ├── Pricing.tsx                   # Renders pricing cards from data
│   │   └── Solutions.tsx                 # "use client" — renders solution cards with icon mapping
│   └── data/
│       └── siteData.ts                   # All structured site data (single source of truth)
├── .eslintrc.json
├── .gitignore
├── .nvmrc                               # Node version (22)
├── next.config.mjs                       # reactStrictMode + unoptimized images
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts                    # Custom primary color (#10B981), content paths
└── tsconfig.json                         # Strict mode, path alias @/* → ./src/*
```

---

## Routes (5 pages)

| Route | File | Purpose |
|---|---|---|
| `/` | `src/app/page.tsx` | Homepage — hero, products grid, solutions, pricing, CTA banner |
| `/contact` | `src/app/contact/page.tsx` | Contact form → FormSubmit → `/thanks-contact` |
| `/open-source` | `src/app/open-source/page.tsx` | OS For Work details, download links, migration CTA |
| `/thanks` | `src/app/thanks/page.tsx` | Post-waitlist thank-you page (Carbon Track AI) |
| `/thanks-contact` | `src/app/thanks-contact/page.tsx` | Post-contact-form thank-you page |

The homepage uses hash links (`#solutions`, `#pricing`) for in-page navigation.

---

## Data Model (`src/data/siteData.ts`)

This file is the **single source of truth** for all site content. It exports:

### `siteConfig`
```ts
{
  name: "GreenAI Analytics",
  url: "https://greenaianalytics.org",
  tagline: "From NACE Code to CSRD Report in Minutes",
  description: "AI-powered compliance & carbon tools for EU SMEs",
  calendly: "https://calendly.com/..."
}
```

### `products`
Three products (marketing copy — see individual repos for technical details):

- **`compliance`** (Compliance Tracker) — status: **Live** at `https://compliancetracker.greenaianalytics.org`
  - NACE-code-based EU regulation detection (31 EU/EEA countries, 88 NACE two-digit codes)
  - Automated task instances with frequency-based due dates (one_time, annual, semiannual, quarterly, monthly)
  - Supabase + Stripe + Resend stack; Edge Functions for nightly rule/knowledge sync
  - Admin panel with trial management, billing toggles, data sync controls
  - Repo: `C:\github-repos\compliancetracker` | Agents: `compliancetracker\AGENTS.md`

- **`carbon`** (Carbon Track AI) — status: **Live** at `https://www.carbontrackai.com`
  - 13 ESG modules across Environmental (E1-E5), Social (S1-S4), Governance (G1)
  - Three tiers: **VSME Basic** (Free), **VSME Comprehensive** (€99/mo, 30-day trial), **CSRD** (€99/mo)
  - VSME Basic: Climate E1 + Scope 1 & 2, basic S1 & G1, Report Builder (PDF/JSON/iXBRL), ESRS 2
  - VSME Comprehensive: all E/S/G modules + simplified EU Taxonomy
  - CSRD: full double materiality, full EU Taxonomy, expanded ESRS 2, iXBRL/ESEF export
  - 25+ EU country-specific emission factors (ADEME, MITECO, Climatiq, EEA)
  - Repo: `C:\github-repos\carbontrackai` | Agents: `carbontrackai\agents.md`

- **`opensource`** (OS For Work) — free, links to `/open-source` page and GitHub/Codeberg
  - One-click local installer: OnlyOffice, Nextcloud, CryptPad, ERPNext, Plausible
  - Runs offline, no vendor lock-in, Windows/macOS/Linux

### `pricing`
An array of 4 plans — `Plan` type with `name`, `price`, `period`, `features[]`.

### `solutions` + `Solution` / `SolutionIcon` types
An array of 6 solution objects, each with:
- `id` (used in query strings: `/contact?service=...`)
- `name`, `description`, `icon` (union of 6 Lucide icon names), `image` path, `color` (Tailwind gradient class)

### Icon mapping
`SolutionIcon` is a string union: `"Zap" | "Shield" | "Users" | "CreditCard" | "TrendingUp" | "Package"`.

`Solutions.tsx` maps these strings to Lucide icon components at runtime (`"use client"` required).

---

## Component Architecture

### `Header.tsx` (server component)
- Fixed position with `z-50`
- Glass-morphism panel via `.glass-panel` CSS class
- Logo image (180×60, unoptimized)
- Desktop nav links: Solutions (`#solutions`), Pricing (`#pricing`), Open Source, Contact
- CTA: "Book Demo" → Calendly link
- No mobile menu (desktop-only nav, hidden on mobile via `hidden md:flex`)

### `Footer.tsx` (server component)
- Dark background (`bg-slate-950`) in a rounded-3xl container
- 4-column grid: Brand, Products, Company, Connect
- Social links: GitHub, email, website
- Dynamic copyright year via `new Date().getFullYear()`

### `Pricing.tsx` (server component)
- Accepts `plans: Plan[]` prop
- 4-column responsive grid
- Second card (index 1) gets "Popular" badge and emerald highlight styling
- All cards link to Calendly for "Get Started"

### `Solutions.tsx` ("use client" component)
- Accepts `solutions: Solution[]` prop
- 3-column responsive grid
- Each card: gradient image header, centered icon (Lucide), title, truncated description (190 chars), "Learn More" → `/contact?service={id}`
- `"use client"` required for Lucide icon dynamic rendering

---

## Styling Architecture

### Design tokens (CSS custom properties in `globals.css`)
```css
--surface-0: #f4f8f7
--surface-1: #ffffff
--surface-2: #e8f2ef
--text-900: #0f1721
--text-700: #3d4c5d
--brand-600: #0e8f63
--brand-700: #0b704f
--accent-500: #0e7490
--border-soft: rgba(15, 23, 33, 0.12)
```

### Reusable component classes (`@layer components`)
- **`.btn-primary`** — gradient green→cyan button with shadow + hover lift
- **`.btn-secondary`** — semi-transparent white button with border
- **`.section-shell`** — `max-w-7xl` centered container with horizontal padding
- **`.glass-panel`** — frosted glass: `rgba(255,255,255,0.7)` + `backdrop-filter: blur(14px)`

### Background
The body uses three layered `radial-gradient` backgrounds for a soft green/blue ambient effect.

### Tailwind config
- Extended `colors.primary`: `#10B981` (emerald-500) and `primary-dark`: `#059669` (emerald-600)
- Content paths scan `src/pages`, `src/components`, `src/app`

---

## External Integrations

| Service | Usage |
|---|---|
| **Calendly** | Demo booking (link in Header, Hero, Pricing, CTA banner) |
| **FormSubmit** | Contact form handling. Emails go to `sales@carbontrackai.com` |
| **GitHub** | OS For Work downloads/releases; org profile; compliance-rules & compliance-knowledge source repos |
| **Codeberg** | OS For Work source repository |
| **Google Fonts** | Manrope (body) + Space Grotesk (headings) via `next/font/google` |

### Related Repositories

| Repository | Purpose | Agents File |
|---|---|---|
| `github.com/GreenAI-Analytics/compliancetracker` | Compliance Tracker SaaS (live) | `C:\github-repos\compliancetracker\AGENTS.md` |
| `github.com/GreenAI-Analytics/carbontrackai` | Carbon Track AI SaaS (live) | `C:\github-repos\carbontrackai\agents.md` |
| `github.com/greenaianalytics/compliance-rules` | Source JSON rule data by country/NACE (consumed by Compliance Tracker Edge Functions) | — |
| `github.com/greenaianalytics/compliance-knowledge` | Source markdown explainer articles (consumed by Compliance Tracker Edge Functions) | — |

### FormSubmit flow
- **Contact** (`contact/page.tsx`): `action="https://formsubmit.co/sales@carbontrackai.com"` → redirects to `/thanks-contact`
- Hidden fields: `_subject`, `_next`

---

## Product Repositories (Detailed)

This section summarizes the two core SaaS products. For full architecture, database schemas, environment variables, and workflows, consult each repo's own agents file.

### Compliance Tracker (`C:\github-repos\compliancetracker`)

**Purpose:** NACE-based EU regulatory compliance tracking for SMEs. Users register with their country and NACE code, and the platform automatically generates compliance task instances with calculated due dates.

| Layer | Technology |
|---|---|
| Frontend | Next.js 16 (App Router, React 19) |
| Backend/DB | Supabase (PostgreSQL + Auth + Storage) |
| Payments | Stripe (subscriptions + checkout) |
| Email | Resend API (transactional reminders) |
| Auth SMTP | Resend SMTP (Supabase auth email deliverability) |
| Edge Functions | Supabase Deno (3 functions, nightly cron) |
| Error Monitoring | Sentry |
| Testing | Playwright (E2E) |
| Deployment | Vercel (push to `master`) |

**Key architectural patterns:**
- `proxy.ts` for route protection (Next.js 16 convention — NOT `middleware.ts`)
- 3 nightly Supabase Edge Functions: `sync-compliance-rules`, `sync-compliance-knowledge`, `send-task-reminders`
- Rules sourced from `github.com/greenaianalytics/compliance-rules` (JSON by country/NACE)
- Knowledge articles sourced from `github.com/greenaianalytics/compliance-knowledge` (markdown)
- Task instance generation via `lib/task-seeder.ts` — frequency-based (one_time through monthly), idempotent upserts
- Admin panel with independent HMAC-signed cookie auth (separate from Supabase)
- Country & NACE dropdowns fall back to hardcoded lists when rules table is empty

**Production URL:** `https://compliancetracker.greenaianalytics.org` (Vercel project: `compliancetracker`, root dir: `web`)

### Carbon Track AI (`C:\github-repos\carbontrackai`)

**Purpose:** ESG reporting platform for EU SMEs following Commission Recommendation 2003/361/EC. Supports three proportionate regulatory modes — VSME Basic, VSME Comprehensive, and CSRD — auto-detected at onboarding based on SME size characteristics.

| Layer | Technology |
|---|---|
| Frontend | Next.js 16.2.3 (App Router, React 19, TypeScript 5) |
| Backend/DB | Supabase PostgreSQL |
| API | Fastify (planned) |
| ORM | Prisma (planned) |
| Validation | Zod schemas (planned, shared frontend/backend) |
| Styling | Tailwind CSS v4 (`@tailwindcss/postcss`) |
| Package Manager | npm workspaces (monorepo) |
| CI/CD | GitHub Actions (typecheck, lint, build) → Vercel |

**SME classification logic (per 2003/361/EC):**

| SME Type | Staff | Turnover | OR Balance Sheet | Platform Mode |
|---|---|---|---|---|
| Micro | < 10 | ≤ €2M | ≤ €2M | VSME Basic |
| Small | < 50 | ≤ €10M | ≤ €10M | VSME Basic / Comprehensive |
| Medium | < 250 | ≤ €50M | ≤ €43M | VSME Comprehensive / CSRD |
| Listed SMEs | — | — | — | Omnibus-dependent |

> **Omnibus I (2025) note:** Proposed CSRD threshold rises to >1,000 employees + €50M turnover. If adopted, most listed SMEs fall into voluntary VSME. The onboarding logic accounts for this.

**ESRS Coverage (all implemented):**
- **Environmental (E1-E5):** Climate (Scope 1&2 calc engine), Pollution, Water, Biodiversity, Circular Economy
- **Social (S1-S4):** Own Workforce, Value Chain Workers, Affected Communities, Consumers
- **Governance (G1):** Business Ethics, Compliance, Data Privacy + GDPR
- **ESRS 2:** General Disclosures (GOV/SBM + IRO Management)
- **Overarching:** Double Materiality, EU Taxonomy

**Database:** 15 migrations covering 50+ tables (ESG core, social 18 tables, governance 7 tables, environmental extended, double materiality, taxonomy, ESRS 2 narratives, datapoint taxonomy reference, assurance/change tracking)

**Production URL:** `https://www.carbontrackai.com`

---

## Build & Configuration

### `next.config.mjs`
- `reactStrictMode: true`
- `images.unoptimized: true` (static export-friendly; no Next.js image optimization)

### `tsconfig.json`
- Target: ES2022
- Strict mode: `true`
- Path alias: `@/*` → `./src/*`
- Next.js plugin for IDE support

### Package scripts
| Script | Command |
|---|---|
| `dev` | `next dev` |
| `build` | `next build` |
| `start` | `next start` |
| `lint` | `next lint` |

---

## Key Architectural Notes

1. **Mostly server components.** Only `Solutions.tsx` is a client component (`"use client"`), because it dynamically maps icon strings to Lucide components at runtime.

2. **Static data, no CMS.** All content lives in `src/data/siteData.ts`. To change copy, prices, or product details, edit that file.

3. **No dynamic routes.** All 5 routes are static pages. The contact form uses query params (`?service=...`) to pre-select context but there is no server-side handling.

4. **No API routes.** The site has no backend or API endpoints — it's purely a static/marketing site with forms handled externally by FormSubmit.

5. **Image handling.** Images are stored in `public/images/` and served directly. `next.config.mjs` disables Next.js image optimization (`unoptimized: true`), meaning images are served as-is. SVG files are used for solution illustrations and OS For Work preview.

6. **Glass-morphism design language.** The UI consistently uses `glass-panel` (frosted glass), gradient buttons, and soft emerald/teal/cyan color schemes. All borders use `--border-soft` for subtle separation.

7. **No mobile navigation.** The Header hides nav links on small screens (`hidden md:flex`). There is no hamburger menu or mobile drawer.

8. **Single-purpose components.** Header, Footer, Pricing, and Solutions are self-contained and receive all data via props — no context providers or global state.

9. **Multi-repo architecture.** This site (`greenaianalytics.org`) is purely the marketing layer. The actual SaaS products live in separate repositories:
   - **Compliance Tracker** (`C:\github-repos\compliancetracker`) — de facto monorepo: Next.js app in `web/` + Supabase config/edge functions at root
   - **Carbon Track AI** (`C:\github-repos\carbontrackai`) — npm workspaces monorepo: `apps/web` (Next.js) + `apps/api` (Supabase/Fastify)
   - Both products use Supabase PostgreSQL, Stripe payments, and Resend email. Each has its own Vercel project and Supabase project.

---

## Editing Guide

### To change site copy
Edit `src/data/siteData.ts`. All text on the homepage, pricing, and solutions is sourced from here.

### To change styling
- **Colors/fonts:** Edit CSS custom properties in `globals.css` `:root` block
- **Button styles:** Edit `.btn-primary` / `.btn-secondary` in `globals.css`
- **Tailwind theme:** Edit `tailwind.config.ts`

### To add a new page
1. Create `src/app/your-route/page.tsx`
2. It will automatically inherit the `<Header />` and `<Footer />` from the root layout
3. Add nav link in `Header.tsx` and/or footer link in `Footer.tsx`

### To add a new solution
Add an entry to the `solutions` array in `src/data/siteData.ts`, add a corresponding SVG to `public/images/solutions/`, and optionally update the `SolutionIcon` union type if a new Lucide icon is needed.

### To add a new pricing plan
Add an entry to the `pricing` array in `src/data/siteData.ts`. The second card always gets the "Popular" badge.
