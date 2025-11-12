// src/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1D3380] text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          {/* Kolom 1: Logo & Slogan */}
          <div className="col-span-2 md:col-span-1">
          <Link
            href="/"
            className="font-bold text-2xl inline-block 
                     bg-gradient-to-r from-[#F3732A] via-[#ffe8c7] to-[#ffffff] 
                      text-transparent bg-clip-text">
            HANADIV TECH
</Link>

            <p className="text-gray-400 mt-2 text-sm max-w-xs">
              Delivering innovative technology solutions for modern businesses.
            </p>
          </div>

          {/* Kolom 2: Quick Links */}
          <div>
            <h5 className="font-semibold text-white mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm text-gray-400 hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition">
                  Blog & News
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Services */}
          <div>
            <h5 className="font-semibold text-white mb-4">Services</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm text-gray-400 hover:text-white transition">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-400 hover:text-white transition">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-400 hover:text-white transition">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-400 hover:text-white transition">
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Contact */}
          <div>
            <h5 className="font-semibold text-white mb-4">Contact</h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center hover:text-white transition">
                info@hanadivtech.com
              </li>
              <li className="flex items-center hover:text-white transition">
                +1 234 567 890
              </li>
              <li className="flex items-center hover:text-white transition">
                123 Business St, City
              </li>
            </ul>
          </div>
        </div>

        {/* Garis pembatas + Copyright */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-700 pt-8">
          © {new Date().getFullYear()} HANADIV TECH. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
