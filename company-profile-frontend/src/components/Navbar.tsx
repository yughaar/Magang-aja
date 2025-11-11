// src/components/Navbar.tsx

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black/60 backdrop-blur-sm sticky top-0 border-b border-gray-200/20 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-center items-center">
        
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl text-white">
          <span className="text-[#F3732A]">H</span><span>ANADIV TECH</span>
        </Link>
        
      </div>
    </nav>
  );
}