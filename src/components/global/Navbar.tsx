'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full px-6 py-4 shadow-sm bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LEFT: LOGO */}
        <Link href="/" className="flex items-center">
          <img src="/logo.jpg" alt="PrepTrail" className="h-9 w-auto object-contain" />
        </Link>

        {/* CENTER & RIGHT (for desktop) */}
        <div className="hidden md:flex flex-1 items-center justify-end space-x-6 text-sm font-medium">
          <Link href="/about">About</Link>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#help">Help</a>
          <button className="ml-4 border border-red-500 text-red-500 px-4 py-1 rounded-full hover:bg-red-100 transition">
            Logout
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="flex flex-col md:hidden mt-4 space-y-3 text-sm font-medium px-4">
          <Link href="/about">About</Link>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#help">Help</a>
          <button className="mt-2 border border-red-500 text-red-500 px-4 py-1 rounded-full hover:bg-red-100 transition w-fit">
            Logout
          </button>
        </div>
      )}
    </header>
  )
}
