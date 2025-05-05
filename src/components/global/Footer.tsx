import { label } from 'framer-motion/client';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-gradient-to-b from-orange-100 to-white text-gray-800 text-sm border-t border-orange-200"
      aria-labelledby="footer-heading"
    >
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Identity */}
        <div className="space-y-3">
          <h2
            id="footer-heading"
            className="text-2xl font-extrabold text-orange-500 tracking-tight animate-fadeIn"
          >
            PrepTrail
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-sm">
            Smart. Adaptive. Effective. Prepare for interviews with confidence using AI-driven tools.
          </p>
        </div>

        {/* Navigation Links */}
        <nav aria-label="Footer Navigation">
          <h3 className="text-base font-semibold text-orange-500 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            {[
              { label: 'About Us', href: '/about' },
              { label: 'Features', href: '/features' },
              { label: 'Pricing', href: '/pricing' },
              { label: 'Testimonials', href: '/testimonial' },
              {label: 'Help', href: '/help' }, 
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-orange-600 transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media */}
        <div>
          <h3 className="text-base font-semibold text-orange-500 mb-3">Follow Us</h3>
          <div className="flex space-x-4 mt-2 text-gray-500">
            {[
              {
                icon: <FaTwitter size={20} />,
                href: 'https://twitter.com',
                label: 'Twitter',
              },
              {
                icon: <FaLinkedin size={20} />,
                href: 'https://linkedin.com',
                label: 'LinkedIn',
              },
              {
                icon: <FaGithub size={20} />,
                href: 'https://github.com',
                label: 'GitHub',
              },
            ].map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="hover:text-orange-600 transition-colors duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="text-center py-4 border-t border-orange-200 text-gray-500 text-xs animate-fadeInUp">
        &copy; {currentYear} PrepTrail. All rights reserved.
      </div>
    </footer>
  );
}
