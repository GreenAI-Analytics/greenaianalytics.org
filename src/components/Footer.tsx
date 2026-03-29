import { Github, Mail, Globe } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="px-6 pb-10 pt-24">
      <div className="section-shell">
        <div className="rounded-3xl border border-white/60 bg-slate-950 px-8 py-14 text-slate-100 shadow-2xl shadow-slate-900/30 md:px-12">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-2xl font-bold">GreenAI Analytics</h3>
              <p className="text-sm text-slate-300">{siteConfig.tagline}</p>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Products</h4>
              <ul className="space-y-3 text-slate-300">
                <li>
                  <a href="https://compliance.greenaianalytics.org" className="transition hover:text-white">
                    Compliance Tracker
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Carbon Track AI
                  </a>
                </li>
                <li>
                  <a href="https://github.com/GreenAI-Analytics/os-for-work" className="transition hover:text-white">
                    OS For Work
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Company</h4>
              <ul className="space-y-3 text-slate-300">
                <li>
                  <Link href="/" className="transition hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/open-source" className="transition hover:text-white">
                    Open Source
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="transition hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Connect</h4>
              <div className="flex gap-4">
                <a href="https://github.com/GreenAI-Analytics" className="rounded-full border border-slate-700 p-2 text-slate-300 transition hover:border-slate-500 hover:text-white">
                  <Github className="h-5 w-5" />
                </a>
                <a href="mailto:hello@greenaianalytics.org" className="rounded-full border border-slate-700 p-2 text-slate-300 transition hover:border-slate-500 hover:text-white">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="https://greenaianalytics.org" className="rounded-full border border-slate-700 p-2 text-slate-300 transition hover:border-slate-500 hover:text-white">
                  <Globe className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
            Copyright {new Date().getFullYear()} GreenAI Analytics. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
