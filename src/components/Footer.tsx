import { Github, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">GreenAI Analytics</h3>
          <p className="text-gray-400">
            From NACE Code to CSRD Report in Minutes
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Products</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="https://compliance.greenaianalytics.org" className="hover:text-white">
                Compliance Tracker
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Carbon Track AI
              </a>
            </li>
            <li>
              <a href="https://github.com/GreenAI-Analytics/os-for-work" className="hover:text-white">
                OS For Work
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Connect</h4>
          <div className="flex gap-4">
            <a href="https://github.com/GreenAI-Analytics" className="hover:text-primary">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:hello@greenaianalytics.org" className="hover:text-primary">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://greenaianalytics.org" className="hover:text-primary">
              <Globe className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto text-center text-gray-500 mt-12 text-sm">
        © 2025 GreenAI Analytics. All rights reserved.
      </div>
    </footer>
  );
}
