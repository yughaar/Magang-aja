// src/app/blog/page.tsx

import Link from 'next/link';
import BlogCard from '@/components/BlogCard'; // <-- Impor kartu yang sudah diupdate

// Interface Post (masih sama, tidak apa-apa)
interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  author: string;
  date: string;
}

// Fungsi getPosts (masih sama)
async function getPosts() {
  try {
    const res = await fetch('http://localhost:4000/api/blog', {
      cache: 'no-store' 
    });
    if (!res.ok) {
      throw new Error('Gagal mengambil data dari server backend');
    }
    const data: Post[] = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

// Komponen Halaman (Async)
export default async function BlogPage() {
  const posts = await getPosts();

  return (
    // 1. Latar belakang gradient untuk seluruh halaman
    <div className="min-h-screen bg-gradient-to-b from-[#1D3380] to-[#3B65C4]">
      
      {/* 2. Header Biru Baru */}
      <section className="pt-20 pb-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & News</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
            Stay updated with the latest insights, trends, and news from the world of technology.
          </p>
        </div>
      </section>

      {/* 3. Kartu Putih Besar berisi Grid Blog */}
      <section className="pb-16 pt-8 px-4">
        <div className="bg-white max-w-6xl mx-auto p-10 md:p-12 rounded-2xl shadow-xl">
          
          {posts.length === 0 ? (
            <div className="text-center text-gray-500">
              <p>Belum ada artikel yang dipublikasikan.</p>
              <p>(Pastikan server backend Anda berjalan).</p>
            </div>
          ) : (
            // 4. Gunakan Grid Layout
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard
                  key={post.id}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  date={post.date}
                  // Kita tidak lagi mengirim 'author' atau 'imageUrl'
                />
              ))}
            </div>
          )}

        </div>
      </section>
      
      {/* Spacer untuk memberi ruang sebelum footer */}
      <div className="h-16"></div> 
    </div>
  );
}