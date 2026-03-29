"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CreditCard,
  Package,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Solution, SolutionIcon } from "@/data/siteData";

const iconMap: Record<SolutionIcon, LucideIcon> = {
  Zap,
  Shield,
  Users,
  CreditCard,
  TrendingUp,
  Package,
};

export default function Solutions({ solutions }: { solutions: Solution[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {solutions.map((solution) => {
        const IconComponent = iconMap[solution.icon] ?? Zap;

        return (
          <div
            key={solution.id}
            className="group overflow-hidden rounded-2xl border border-white/80 bg-white/85 shadow-lg shadow-slate-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${solution.color}`}>
              <Image
                src={solution.image}
                alt={solution.name}
                width={400}
                height={300}
                className="h-full w-full object-cover opacity-80 transition duration-300 group-hover:scale-105 group-hover:opacity-95"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-slate-900/20 transition-all group-hover:bg-slate-900/10">
                <div className="rounded-full bg-white p-4 shadow-lg">
                  <IconComponent className="h-7 w-7 text-slate-900" strokeWidth={2} />
                </div>
              </div>
            </div>

            <div className="p-7">
              <h3 className="mb-3 text-xl font-bold text-slate-950">{solution.name}</h3>
              <p className="mb-6 text-sm leading-relaxed text-slate-600">
                {solution.description.slice(0, 190)}...
              </p>
              <Link
                href={`/contact?service=${solution.id}`}
                className="inline-flex items-center text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
