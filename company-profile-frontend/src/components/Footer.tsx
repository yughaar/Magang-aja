// src/components/Footer.tsx
import { getGlobal } from "@/lib/api/global.api";
import Link from "next/link";

export default async function Footer() {
  const global = await getGlobal();
  const footer = global.data.footer;
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
                      text-transparent bg-clip-text"
            >
              {footer.brand.ptName}
            </Link>

            <p className="text-gray-400 mt-2 text-sm max-w-xs">
              {footer.brand.tagLine}
            </p>
          </div>

          {/* Kolom 2: Services */}
          <div>
            <h5 className="font-semibold text-white mb-4">
              {footer.service.title}
            </h5>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-400 hover:text-white transition"
                >
                  {footer.service.links[0].label}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-400 hover:text-white transition"
                >
                  {footer.service.links[1].label}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-400 hover:text-white transition"
                >
                  {footer.service.links[2].label}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-400 hover:text-white transition"
                >
                  {footer.service.links[3].label}
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Contact */}
          <div>
            <h5 className="font-semibold text-white mb-4">
              {footer.contact.title}
            </h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center hover:text-white transition">
                {footer.contact.contact[0].text}
              </li>
              <li className="flex items-center hover:text-white transition">
                {footer.contact.contact[1].text}
              </li>
              <li className="flex items-center hover:text-white transition">
                {footer.contact.contact[2].text}
              </li>
            </ul>
          </div>

          {/* MAP */}
          <div className="w-full md:w-[250px] h-[200px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7930.8782046823935!2d106.57493270830999!3d-6.337126040244803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sVila%20Rizki%20Insaani%20Blok%20A1-7%2C%20Kecamatan%20Pagedangan%2C%20Kelurahan%20Malangnengah%2C%20Kabupaten%20Tangerang%2C%C2%A0Banten%2C%C2%A015330!5e0!3m2!1sid!2sid!4v1763009679014!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
