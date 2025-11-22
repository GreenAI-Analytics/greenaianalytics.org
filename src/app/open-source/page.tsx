import { Download, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function OpenSourcePage() {
  return (
    <>
      <section className="pt-32 pb-20 px-6 text-center bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">Open Source at GreenAI Analytics</h1>
          <p className="text-2xl text-gray-700 mb-6">We believe in privacy, transparency, and no vendor lock-in.</p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            That’s why we build and support fully open-source tools for European SMEs — free forever, self-hosted, and 100% yours.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6">OS For Work v1.3.2</h2>
              <p className="text-xl text-gray-600 mb-6">
                The complete open-source alternative to Microsoft 365 & Google Workspace — for your laptop or desktop.
              </p>
              <ul className="space-y-4 mb-8 text-lg">
                {["OnlyOffice / LibreOffice", "Nextcloud (files & sync)", "CryptPad (encrypted docs)", "ERPNext Community", "Plausible (privacy-first analytics)", "Automatic updates & backups"].map((item) => (
                  <li key={item} className="flex items-center"><span className="text-primary mr-3">✓</span> {item}</li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://github.com/GreenAI-Analytics/os-for-work/archive/refs/tags/v1.3.2.zip" className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center">
                  <Download className="mr-2" /> Download v1.3.2 ZIP (Universal)
                </a>
                <a href="https://github.com/GreenAI-Analytics/os-for-work/releases/tag/v1.3.2" className="border-2 border-primary text-primary font-bold py-4 px-8 rounded-lg hover:bg-green-50 transition inline-flex items-center justify-center">
                  View Release Notes →
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-4">Works on Windows · macOS · Linux · Completely offline</p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/os-for-work-preview.jpg" alt="OS For Work" width={800} height={600} className="w-full h-auto" />
              <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full font-bold">v1.3.2</div>
            </div>
          </div>

          {/* Rest of the page unchanged – other tools list + CTA */}
          <div className="bg-gray-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-center mb-12">Other Open-Source Tools We Recommend & Support</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* same list as before */}
            </div>
          </div>

          <div className="text-center mt-20">
            <p className="text-xl text-gray-600 mb-8">Need help migrating your company to open source?</p>
            <a href="/contact" className="btn-primary text-lg px-10 py-4">Talk to Our Open-Source Experts →</a>
          </div>
        </div>
      </section>
    </>
  );
}
