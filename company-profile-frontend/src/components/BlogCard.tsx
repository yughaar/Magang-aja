// src/components/BlogCard.tsx

import Link from 'next/link';

// 1. Perbarui Properti (kita tidak perlu 'imageUrl' atau 'author' lagi)
type BlogCardProps = {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
}

// Komponen Ikon Placeholder untuk gambar
function PlaceholderIcon() {
  return (
    <svg className="w-16 h-16 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm16.5-1.5v-1.875a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375V18m-1.5-1.5V16.5a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5m-1.5-1.5V15a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v3" />
    </svg>
  );
}

export default function BlogCard({ title, slug, excerpt, category, date }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200/50 hover:shadow-xl transition-shadow duration-300">
      
      {/* 2. Area Gambar Placeholder */}
      <Link href={`/blog/${slug}`}>
        <div className="bg-slate-100 h-48 w-full flex items-center justify-center hover:bg-slate-200 transition-colors">
          <PlaceholderIcon />
        </div>
      </Link>
      
      {/* 3. Konten */}
      <div className="p-6">
        
        {/* Kategori dan Tanggal */}
        <div className="flex justify-between items-center mb-3">
          <span className="bg-[#F3732A] text-white text-xs font-semibold px-3 py-1 rounded-md">
            {category}
          </span>
          <div className="flex items-center text-xs text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            <span>{date}</span>
          </div>
        </div>

        {/* Judul (sebagai link) */}
        <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-hanadiv-blue transition-colors">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h2>
        
        {/* Cuplikan (Excerpt) */}
        <p className="text-gray-600 mb-4 text-sm">
          {excerpt}
        </p>
        
        {/* "Read More" link dihapus */}
      </div>
    </article>
  );
}