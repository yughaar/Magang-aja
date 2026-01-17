// src/components/Navbar.tsx

import { getGlobal } from "@/lib/api/global.api";
import Link from "next/link";

export default async function Navbar() {
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
  const global = await getGlobal();
  const header = global.data.header;
  const iconURL = header.logo.image
    ? `${STRAPI_URL}${header.logo.image.url}`
    : ``;
  return (
    <nav className="bg-black/60 backdrop-blur-sm top-0 border-b border-gray-200/20 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-center items-center">
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl text-white">
          <img src={iconURL} className="w-20" alt="" />
        </Link>
      </div>
    </nav>
  );
}
