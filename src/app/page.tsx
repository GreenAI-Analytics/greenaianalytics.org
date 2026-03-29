import { siteConfig, products, pricing, solutions } from "@/data/siteData";
import Pricing from "@/components/Pricing";
import Solutions from "@/components/Solutions";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Download, Sparkles, ShieldCheck, Leaf } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="px-6 pb-20 pt-36">
        <div className="section-shell">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-800">
                <Sparkles className="h-3.5 w-3.5" />
                Built for modern EU teams
              </span>
              <h1 className="mb-6 text-5xl font-bold leading-tight text-slate-950 md:text-6xl">
                Compliance and carbon reporting,
                <span className="block text-emerald-700">in one clean operating layer.</span>
              </h1>
              <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-600">
                GreenAI helps SMEs map obligations from NACE, automate CSRD workflows,
                and ship audit-ready outputs faster than traditional consulting cycles.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={siteConfig.calendly} className="btn-primary gap-2 text-base">
                  Book a 15-min demo <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#pricing" className="btn-secondary text-base">
                  Explore pricing
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Compliance setup", value: "10x faster" },
                  { label: "Coverage", value: "EU-ready" },
                  { label: "Report outputs", value: "PDF / DOCX / XBRL" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-white/70 bg-white/70 px-4 py-4 shadow-sm">
                    <p className="text-sm text-slate-500">{stat.label}</p>
                    <p className="text-lg font-bold text-slate-900">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel relative overflow-hidden rounded-3xl p-6 md:p-8">
              <div className="absolute -right-20 -top-24 h-52 w-52 rounded-full bg-emerald-300/50 blur-3xl" />
              <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-cyan-300/50 blur-3xl" />
              <div className="relative space-y-5">
                <div className="rounded-2xl bg-slate-950 p-5 text-white">
                  <p className="text-xs uppercase tracking-wider text-slate-400">Control center</p>
                  <p className="mt-2 text-2xl font-bold">{siteConfig.tagline}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-emerald-100 bg-white p-4">
                    <ShieldCheck className="h-5 w-5 text-emerald-700" />
                    <p className="mt-3 text-sm font-semibold text-slate-900">Regulation mapping</p>
                    <p className="text-sm text-slate-600">From your business profile to obligations in minutes.</p>
                  </div>
                  <div className="rounded-2xl border border-cyan-100 bg-white p-4">
                    <Leaf className="h-5 w-5 text-cyan-700" />
                    <p className="mt-3 text-sm font-semibold text-slate-900">Carbon intelligence</p>
                    <p className="text-sm text-slate-600">Scope 1-3 guidance with practical next actions.</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/70 bg-white/85 p-4">
                  <p className="text-sm text-slate-700">Designed to replace fragmented spreadsheets and ad-hoc consulting with a repeatable workflow your whole team can trust.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="section-shell">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl font-bold text-slate-950">Products that fit real operations</h2>
              <p className="mt-3 max-w-2xl text-slate-600">
                Start with a single tool or combine all modules for one connected sustainability stack.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl border border-white/80 bg-white/80 p-7 shadow-lg shadow-slate-900/5">
              <p className="text-sm font-semibold text-emerald-700">Live now</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-950">{products.compliance.name}</h3>
              <p className="mt-3 text-sm text-slate-600">{products.compliance.subtitle}</p>
              <ul className="mt-6 space-y-3">
                {["NACE-based regulation detection", "Automated reminders and deadlines", "Knowledge hub with templates"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-700" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href={products.compliance.url} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800">
                Launch product <ArrowRight className="h-4 w-4" />
              </a>
            </article>

            <article className="rounded-3xl border border-white/80 bg-white/80 p-7 shadow-lg shadow-slate-900/5">
              <p className="text-sm font-semibold text-amber-700">In development</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-950">{products.carbon.name}</h3>
              <p className="mt-3 text-sm text-slate-600">{products.carbon.subtitle}</p>
              <ul className="mt-6 space-y-3">
                {["Scope 1-3 carbon accounting", "AI-assisted data collection", "One-click ESRS/CSRD outputs"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-700" />
                    {item}
                  </li>
                ))}
              </ul>
              <form action="https://formsubmit.co/sales@carbontrackai.com" method="POST" className="mt-7 flex flex-col gap-3">
                <input type="email" name="email" placeholder="your@company.eu" required className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none" />
                <input type="hidden" name="_subject" value="New Carbon Track AI Waitlist Signup!" />
                <input type="hidden" name="_next" value="/thanks" />
                <button type="submit" className="btn-primary w-full">Join waitlist</button>
              </form>
              <p className="mt-2 text-xs text-slate-500">Zero spam. Launch updates only.</p>
            </article>

            <article className="relative overflow-hidden rounded-3xl border border-emerald-300 bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 p-7 shadow-lg shadow-emerald-900/10">
              <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-emerald-300/40 blur-2xl" />
              <div className="relative">
                <p className="text-sm font-semibold text-emerald-800">Open-source stack</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-950">{products.opensource.name}</h3>
                <p className="mt-3 text-sm text-slate-700">{products.opensource.description}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="https://github.com/GreenAI-Analytics/os-for-work/archive/refs/tags/v1.3.2.zip" className="btn-primary gap-2 px-4 py-2 text-sm">
                    <Download className="h-4 w-4" /> Download ZIP
                  </a>
                  <Link href="/open-source" className="btn-secondary px-4 py-2 text-sm">
                    Read details
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="solutions" className="px-6 py-20">
        <div className="section-shell">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-slate-950">Strategic service layer</h2>
            <p className="mx-auto mt-3 max-w-3xl text-slate-600">
              From AI enablement to ESG reporting, we combine software with delivery support to help your team move with confidence.
            </p>
          </div>
          <Solutions solutions={solutions} />
        </div>
      </section>

      <section id="pricing" className="px-6 py-20">
        <div className="section-shell">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-slate-950">Simple pricing, flexible adoption</h2>
            <p className="mt-3 text-slate-600">Start free where possible and scale to managed support when needed.</p>
          </div>
          <Pricing plans={pricing} />
        </div>
      </section>

      <section className="px-6 pb-4 pt-8">
        <div className="section-shell">
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-8 py-14 text-center text-white md:px-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.35),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(14,116,144,0.35),transparent_35%)]" />
            <div className="relative">
              <h2 className="text-4xl font-bold">Ready to modernize your reporting stack?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                Talk to GreenAI and get a practical rollout plan tailored to your sector, NACE code, and reporting goals.
              </p>
              <a href={siteConfig.calendly} className="btn-primary mt-8 gap-2">
                Book your free demo <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
