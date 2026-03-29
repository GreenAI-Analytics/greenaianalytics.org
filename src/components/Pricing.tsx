import { Check } from "lucide-react";
import { siteConfig } from "@/data/siteData";

type Plan = {
  name: string;
  price: string;
  period: string;
  features: string[];
};

export default function Pricing({ plans }: { plans: Plan[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {plans.map((plan, index) => (
        <div
          key={plan.name}
          className={`relative rounded-2xl border p-7 transition hover:-translate-y-1 hover:shadow-xl ${
            index === 1
              ? "border-emerald-300 bg-emerald-50/70 shadow-lg"
              : "border-slate-200/70 bg-white/80"
          }`}
        >
          {index === 1 ? (
            <span className="mb-4 inline-flex rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              Popular
            </span>
          ) : null}
          <h3 className="mb-2 text-xl font-bold text-slate-900">{plan.name}</h3>
          <div className="mb-5 text-4xl font-bold text-slate-950">
            {plan.price}
            <span className="ml-1 text-base font-medium text-slate-500">{plan.period}</span>
          </div>
          <ul className="mb-8 space-y-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-700" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={siteConfig.calendly}
            className={`block rounded-xl px-4 py-3 text-center text-sm font-semibold transition ${
              index === 1
                ? "bg-slate-950 text-white hover:bg-slate-800"
                : "bg-slate-100 text-slate-900 hover:bg-slate-200"
            }`}
          >
            Get Started
          </a>
        </div>
      ))}
    </div>
  );
}
