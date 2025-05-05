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
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Help', href: '#help' },
  ];

  return (
    <header className="w-full px-6 py-4 shadow-sm bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="PrepTrail Home">
          <img src="/logo.jpg" alt="PrepTrail Logo" className="h-9 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-end space-x-6 text-sm font-medium text-gray-700" role="navigation" aria-label="Main navigation">
          {navItems.map((item) =>
            item.href.startsWith('#') ? (
              <a key={item.label} href={item.href} className="hover:text-orange-600 transition">
                {item.label}
              </a>
            ) : (
              <Link key={item.label} href={item.href} className="hover:text-orange-600 transition">
                {item.label}
              </Link>
            )
          )}
          <button
            className="ml-4 border border-red-500 text-red-500 px-4 py-1 rounded-full hover:bg-red-100 transition"
            aria-label="Logout"
          >
            Logout
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="flex flex-col md:hidden mt-4 space-y-3 text-sm font-medium px-4 text-gray-700"
        >
          {navItems.map((item) =>
            item.href.startsWith('#') ? (
              <a key={item.label} href={item.href} className="hover:text-orange-600 transition">
                {item.label}
              </a>
            ) : (
              <Link key={item.label} href={item.href} className="hover:text-orange-600 transition">
                {item.label}
              </Link>
            )
          )}
          <button className="mt-2 border border-red-500 text-red-500 px-4 py-1 rounded-full hover:bg-red-100 transition w-fit">
            Logout
          </button>
        </div>
      )}
    </header>
  );
}
