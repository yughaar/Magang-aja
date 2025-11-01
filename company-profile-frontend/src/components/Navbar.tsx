// src/components/Navbar.tsx

'use client'; // <-- Tambahkan ini di paling atas. Penting untuk useState.

import Link from 'next/link';
import { useState } from 'react'; // <-- Impor useState

export default function Navbar() {
  // State untuk melacak menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl text-hanadiv-blue">
          HANADIV
        </Link>
        
        {/* === Menu Desktop (Terlihat di 'md' ke atas) === */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-600 hover:text-hanadiv-blue font-medium">Home</Link>
          <Link href="/services" className="text-gray-600 hover:text-hanadiv-blue font-medium">Services</Link>
          <Link href="/blog" className="text-gray-600 hover:text-hanadiv-blue font-medium">Blog & News</Link>
          <Link href="/about" className="text-gray-600 hover:text-hanadiv-blue font-medium">About Us</Link>
          <Link 
            href="/contact" 
            className="bg-hanadiv-orange text-white font-semibold py-2 px-5 rounded-md hover:bg-orange-600 transition duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* === Tombol Hamburger (Hanya terlihat di 'md' ke bawah) === */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle state
            className="text-gray-600 focus:outline-none"
          >
            {/* Ikon hamburger */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* === Menu Mobile (Muncul/Hilang berdasarkan state) === */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="flex flex-col items-center space-y-4 py-6">
            <Link href="/" className="text-gray-600 hover:text-hanadiv-blue font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/services" className="text-gray-600 hover:text-hanadiv-blue font-medium" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="/blog" className="text-gray-600 hover:text-hanadiv-blue font-medium" onClick={() => setIsMenuOpen(false)}>Blog & News</Link>
            <Link href="/about" className="text-gray-600 hover:text-hanadiv-blue font-medium" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link 
              href="/contact" 
              className="bg-hanadiv-orange text-white font-semibold py-2 px-5 rounded-md hover:bg-orange-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}