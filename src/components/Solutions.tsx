import Image from "next/image";
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

type Solution = {
  id: string;
  name: string;
  description: string;
  icon: "Zap" | "Shield" | "Users" | "CreditCard" | "TrendingUp" | "Package";
  image: string;
  color: string;
};

const iconMap: Record<Solution["icon"], LucideIcon> = {
  Zap,
  Shield,
  Users,
  CreditCard,
  TrendingUp,
  Package,
};

export default function Solutions({ solutions }: { solutions: Solution[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {solutions.map((solution) => {
        const IconComponent = iconMap[solution.icon] ?? Zap;

        return (
          <div
            key={solution.id}
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow bg-white group"
          >
            {/* Image Container */}
            <div className={`relative h-48 bg-gradient-to-br ${solution.color} overflow-hidden`}>
              <Image
                src={solution.image}
                alt={solution.name}
                width={400}
                height={300}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all flex items-center justify-center">
                <div className="bg-white rounded-full p-4">
                  <IconComponent className="w-8 h-8 text-gray-900" strokeWidth={2} />
                </div>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {solution.description}
              </p>
              <a
                href={`#solutions-${solution.id}`}
                className="inline-flex items-center text-primary font-semibold hover:text-green-700 transition"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
