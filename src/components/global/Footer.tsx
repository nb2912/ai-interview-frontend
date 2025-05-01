import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-orange-50 text-gray-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
        {/* Branding */}
        <div>
          <h2 className="text-xl font-semibold text-orange-500">AI Interview Prep</h2>
          <p className="text-gray-600 mt-1 leading-snug">
            Smart. Adaptive. Effective. Prepare for interviews like never before.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-base font-medium mb-1 text-orange-500">Quick Links</h3>
          <ul className="space-y-1 text-gray-600">
            <li><a href="/about" className="hover:text-orange-600 transition">About Us</a></li>
            <li><a href="/features" className="hover:text-orange-600 transition">Features</a></li>
            <li><a href="/pricing" className="hover:text-orange-600 transition">Pricing</a></li>
            <li><a href="/contact" className="hover:text-orange-600 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-base font-medium mb-1 text-orange-500">Follow Us</h3>
          <div className="flex space-x-3 mt-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-600">
              <FaTwitter size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-600">
              <FaLinkedin size={18} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-600">
              <FaGithub size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-orange-200 text-center py-3 text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} AI Interview Prep. All rights reserved.
      </div>
    </footer>
  );
}
