import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="GreenAI Analytics"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#solutions" className="text-gray-700 hover:text-primary font-medium">
            Solutions
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-primary font-medium">
            Pricing
          </a>
          <a href="/contact" className="text-gray-700 hover:text-primary font-medium">
            Contact
          </a>
          <a href={siteConfig.calendly} className="btn-primary text-sm">
            Book Demo
          </a>
        </nav>
      </div>
    </header>
  );
}
