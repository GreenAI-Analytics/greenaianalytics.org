import { Check } from "lucide-react";

type Plan = {
  name: string;
  price: string;
  period: string;
  features: string[];
};

export default function Pricing({ plans }: { plans: Plan[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:border-primary transition"
        >
          <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
          <div className="text-4xl font-bold mb-4">
            {plan.price}
            <span className="text-lg font-normal text-gray-600">{plan.period}</span>
          </div>
          <ul className="space-y-4 mb-8">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center">
                <Check className="text-primary mr-3 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href="https://calendly.com/your-calendly-link"
            className="block text-center btn-primary"
          >
            Get Started
          </a>
        </div>
      ))}
    </div>
  );
}
