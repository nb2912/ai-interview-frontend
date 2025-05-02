// src/components/Footer.tsx

import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-orange-100 to-white text-gray-800 text-sm border-t border-orange-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div className="space-y-3">
          <h2 className="text-2xl font-extrabold text-orange-500 tracking-tight animate-fadeIn">
            PrepTrail
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Smart. Adaptive. Effective. Prepare for interviews with confidence using AI-driven tools.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-base font-semibold text-orange-500 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/about" className="hover:text-orange-600 transition duration-200">About Us</a></li>
            <li><a href="/features" className="hover:text-orange-600 transition duration-200">Features</a></li>
            <li><a href="/pricing" className="hover:text-orange-600 transition duration-200">Pricing</a></li>
            <li><a href="/contact" className="hover:text-orange-600 transition duration-200">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-base font-semibold text-orange-500 mb-3">Follow Us</h3>
          <div className="flex space-x-4 mt-2 text-gray-500">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-600 transition"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-600 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-600 transition"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-4 border-t border-orange-200 text-gray-500 text-xs animate-fadeInUp">
        &copy; {new Date().getFullYear()} PrepTrail. All rights reserved.
      </div>
    </footer>
  );
}
