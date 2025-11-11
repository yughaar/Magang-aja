// src/components/Footer.tsx

import Link from 'next/link';

export default function Footer() {
  return (
    // 1. Ganti bg-white menjadi biru gelap dan teks jadi terang
    <footer className="bg-[#1D3380] text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          {/* Kolom 1: Logo & Slogan */}
          <div className="col-span-2 md:col-span-1">
            {/* 2. Ubah warna logo dan nama */}
            <Link href="/" className="font-bold text-2xl inline-block">
              <span className="text-[#F3732A]">H</span><span className="text-black bg-white px-2 py-1 rounded">ANADIV TECH</span>
            </Link>
            <p className="text-gray-400 mt-2 text-sm">
              Delivering innovative technology solutions for modern businesses.
            </p>
          </div>
          
          {/* 3. Ubah semua warna teks */}
          {/* Kolom 2: Quick Links */}
          <div>
            <h5 className="font-semibold text-white mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="/blog" className="text-sm text-gray-400 hover:text-white">Blog & News</Link></li>
              <li><Link href="/about" className="text-sm text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          {/* Kolom 3: Services */}
          <div>
            <h5 className="font-semibold text-white mb-4">Services</h5>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm text-gray-400 hover:text-white">Web Development</Link></li>
              <li><Link href="/services" className="text-sm text-gray-400 hover:text-white">Mobile Apps</Link></li>
              <li><Link href="/services" className="text-sm text-gray-400 hover:text-white">Cloud Solutions</Link></li>
              <li><Link href="/services" className="text-sm text-gray-400 hover:text-white">Consulting</Link></li>
            </ul>
          </div>

          {/* Kolom 4: Contact */}
          <div>
            <h5 className="font-semibold text-white mb-4">Contact</h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center hover:text-white">
                info@hanadivtech.com
              </li>
              <li className="flex items-center hover:text-white">
                +1 234 567 890
              </li>
              <li className="flex items-center hover:text-white">
                123 Business St, City
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-700 pt-8">
          © 2025 HANADIV TECH. All rights reserved.
        </div>
      </div>
    </footer>
  );
}