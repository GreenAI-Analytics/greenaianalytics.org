import { siteConfig, products, pricing } from "@/data/siteData";
import Pricing from "@/components/Pricing";
import Image from "next/image";
import { ArrowRight, Check, Download } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero – unchanged */}
      <section className="pt-32 pb-20 px-6 text-center bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {siteConfig.name}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-8">
            {siteConfig.tagline}
          </p>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            AI-powered compliance & carbon tools built exclusively for EU SMEs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={siteConfig.calendly} className="btn-primary text-lg px-8 py-4 inline-flex items-center">
              Book a 15-min Demo <ArrowRight className="ml-2" />
            </a>
            <a href="#pricing" className="bg-white text-primary border-2 border-primary font-semibold py-4 px-8 rounded-lg hover:bg-green-50 transition">
              See Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Solutions</h2>

          {/* Compliance Tracker */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-4">{products.compliance.name}</h3>
              <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full mb-4">Live now</span>
              <p className="text-xl text-gray-600 mb-6">{products.compliance.subtitle}</p>
              <ul className="space-y-3 mb-8">
                {["NACE-based regulation detection", "Automated reminders & deadlines", "Full knowledge hub with templates"].map((item) => (
                  <li key={item} className="flex items-center text-lg">
                    <Check className="text-primary mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href={products.compliance.url} className="btn-primary inline-flex items-center">
                Launch Compliance Tracker <ArrowRight className="ml-2" />
              </a>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/compliance-preview.jpg" alt="Compliance Tracker" width={800} height={600} className="w-full h-auto" />
            </div>
          </div>

          {/* Carbon Track AI */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="md:order-2">
              <h3 className="text-3xl font-bold mb-4">{products.carbon.name}</h3>
              <span className="inline-block bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full mb-4">
                In development · Launching Q1 2026
              </span>
              <p className="text-xl text-gray-600 mb-6">{products.carbon.subtitle}</p>
              <ul className="space-y-3 mb-8">
                {["Scope 1–3 carbon accounting", "AI-assisted data collection", "One-click ESRS/CSRD reports (PDF • Word • XBRL)"].map((item) => (
                  <li key={item} className="flex items-center text-lg">
                    <Check className="text-primary mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <form action="https://formsubmit.co/sales@carbontrackai.com" method="POST" className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input type="email" name="email" placeholder="your@company.eu" required className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" />
                <input type="hidden" name="_subject" value="New Carbon Track AI Waitlist Signup!" />
                <input type="hidden" name="_next" value="/thanks" />
                <button type="submit" className="btn-primary whitespace-nowrap">Join Waitlist →</button>
              </form>
              <p className="text-sm text-gray-500 mt-3">Zero spam • Be the first to know when we launch</p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl md:order-1">
              <Image src="/images/carbon-preview.jpg" alt="Carbon Track AI" width={800} height={600} className="w-full h-auto opacity-80" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white text-3xl font-bold bg-orange-600 px-8 py-4 rounded-lg">Coming Q1 2026</span>
              </div>
            </div>
          </div>

          {/* OS For Work – clean ZIP download only */}
          <div className="bg-white rounded-2xl shadow-xl p-10 text-center">
            <h3 className="text-3xl font-bold mb-4">OS For Work – Free Open-Source Business Suite</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Replace Microsoft 365 & Google Workspace with 100% free, private, offline-capable tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://github.com/GreenAI-Analytics/os-for-work/archive/refs/tags/v1.3.2.zip" className="btn-primary text-lg px-6 py-4 inline-flex items-center">
                <Download className="mr-2" />
                Download v1.3.2 ZIP
              </a>
              <a href="/open-source" className="text-primary font-semibold hover:underline text-lg">
                Learn more →
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Debian & Ubuntu based Linux · 100% free & open source
            </p>
          </div>
        </div>
      </section>

      {/* Pricing & CTA – unchanged */}
      <section id="pricing" className="py-20 px-6"><div className="max-w-6xl mx-auto"><h2 className="text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h2><p className="text-xl text-gray-600 text-center mb-16">Everything you need – no hidden fees</p><Pricing plans={pricing} /></div></section>

      <section className="py-20 px-6 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to simplify compliance & carbon reporting?</h2>
          <a href={siteConfig.calendly} className="bg-white text-primary font-bold py-4 px-10 rounded-lg text-xl hover:bg-gray-100 transition inline-flex items-center">
            Book Your Free Demo Today <ArrowRight className="ml-3" />
          </a>
        </div>
      </section>
    </>
  );
}
