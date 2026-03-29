import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6">
      <div className="section-shell">
        <div className="glass-panel rounded-2xl px-4 py-3 md:px-6 md:py-4">
          <div className="flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="GreenAI Analytics"
            width={180}
            height={60}
            className="h-10 w-auto md:h-11"
          />
        </Link>

            <nav className="hidden items-center gap-7 md:flex">
          <Link href="/#solutions" className="text-sm font-semibold text-slate-700 transition hover:text-slate-950">
            Solutions
          </Link>
          <Link href="/#pricing" className="text-sm font-semibold text-slate-700 transition hover:text-slate-950">
            Pricing
          </Link>
          <Link href="/open-source" className="text-sm font-semibold text-slate-700 transition hover:text-slate-950">
            Open Source
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-slate-700 transition hover:text-slate-950">
            Contact
          </Link>
            </nav>

            <a href={siteConfig.calendly} className="btn-primary gap-2 px-4 py-2 text-sm">
            Book Demo <ArrowUpRight className="h-4 w-4" />
          </a>
          </div>
        </div>
      </div>
    </header>
  );
}
