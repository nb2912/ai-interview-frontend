'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Testimonials', href: '/testimonial' },
    { label: 'Help', href: '/help' }, // Changed from `#help` to route-based navigation
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" aria-label="PrepTrail Home" className="flex items-center">
          <img
            src="/logo.jpg"
            alt="PrepTrail Logo"
            className="h-9 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-900"
          role="navigation"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-orange-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <button
            className="ml-4 px-4 py-1 rounded-full border border-red-500 text-red-500 hover:bg-red-100 transition-colors"
            aria-label="Logout"
          >
            Logout
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white px-6 py-4 space-y-3 text-sm font-medium text-gray-900"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block hover:text-orange-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <button className="mt-3 w-fit px-4 py-1 rounded-full border border-red-500 text-red-500 hover:bg-red-100 transition-colors">
            Logout
          </button>
        </div>
      )}
    </header>
  );
}
