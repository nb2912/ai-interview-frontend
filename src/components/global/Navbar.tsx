'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full px-6 py-4 shadow-sm bg-white sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="PrepTrail" className="h-6 w-6" />
          <span className="font-bold text-lg">PrepTrail</span>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="#">About</Link>
          <Link href="#">Features</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Testimonials</Link>
          <Link href="#">Help</Link>
        </nav>
        <button className="hidden md:inline-block border border-red-500 text-red-500 px-4 py-1 rounded-full hover:bg-red-100 transition">
          Logout
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col md:hidden mt-4 space-y-3 text-sm font-medium px-4">
          <Link href="#">About</Link>
          <Link href="#">Features</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Testimonials</Link>
          <Link href="#">Help</Link>
          <button className="mt-2 border border-red-500 text-red-500 px-4 py-1 rounded-full hover:bg-red-100 transition w-fit">
            Logout
          </button>
        </div>
      )}
    </header>
  )
}
