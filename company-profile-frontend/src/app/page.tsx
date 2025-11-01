// src/app/page.tsx
import React from 'react';

// Komponen kecil untuk kartu fitur
function FeatureCard({ icon, title, text }: { 
  icon: React.ReactElement; // <-- 1. PASTIKAN BARIS INI TERTULIS 'React.ReactElement'
  title: string;
  text: string; 
}) {
  // Kode 'return' Anda yang sudah benar ada di bawah ini
  return (
    <div className="flex flex-col items-start p-6 border border-gray-200 rounded-lg">
      <div className="bg-orange-50 p-3 rounded-full mb-4">
        {/* 2. Baris ini sudah benar, JANGAN DIUBAH */}
        {React.cloneElement(icon, { className: "w-6 h-6 text-orange-500" })}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

// ... (Sisa file 'export default function Home' Anda) ...

// Komponen Halaman Home
export default function Home() {
  return (
    // 1. Wrapper utama (ini sudah benar, akan jadi hitam)
    <div className="bg-hanadiv-blue">
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 md:py-32 text-white text-left">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Innovative Technology Solutions for Your Business
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Transforming ideas into powerful digital experiences with cutting-edge technology and expert craftsmanship.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="/services" 
              className="bg-transparent border-2 border-hanadiv-orange text-hanadiv-orange font-bold py-3 px-6 rounded-lg hover:bg-hanadiv-orange/10 transition duration-300"
            >
              Explore our Service →
            </a>
            <a 
              href="/about" 
              className="bg-transparent border-2 border-white/80 text-white font-bold py-3 px-6 rounded-lg hover:bg-white/10 transition duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* "Why Choose Hanadiv Tech?" Section */}
      {/* (INI SEKARANG BERADA DI DALAM WRAPPER YANG BENAR) */}
      <section className="pb-16 pt-10 px-4">
        <div className="bg-white max-w-6xl mx-auto p-10 md:p-16 rounded-2xl shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Hanadiv Tech?
            </h2>
            <p className="text-gray-600 text-lg">
              We deliver exceptional technology solutions backed by years of expertise and innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-hanadiv-orange"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3 7.5a6.01 6.01 0 0 0-3-7.5m3 7.5a6.01 6.01 0 0 1-3-7.5m-6 0a6.01 6.01 0 0 0 3 7.5m-3-7.5a6.01 6.01 0 0 1 3-7.5m0 0a6.01 6.01 0 0 0-3 7.5m0 0a6.01 6.01 0 0 1-3 7.5" /></svg>}
              title="Innovation First"
              text="Leveraging the latest technologies to create forward-thinking solutions."
            />
            <FeatureCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-hanadiv-orange"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.333 9-6.03 9-11.623 0-1.604-.43-3.112-1.2-4.434M15 2.5a11.959 11.959 0 0 1-6 0M12 2.25v19.5" /></svg>}
              title="Reliable & Secure"
              text="Building robust systems with security and reliability at the core."
            />
            <FeatureCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-hanadiv-orange"><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>}
              title="Fast Performance"
              text="Optimized solutions that deliver speed and efficiency for your business."
            />
          </div>
        </div>
      </section>

      {/* "Ready to Transform" (CTA) Section */}
      {/* (INI SEKARANG BERADA DI DALAM WRAPPER YANG BENAR) */}
      <section className="pb-16 pt-8 px-4">
        <div className="bg-white max-w-6xl mx-auto p-10 md:p-16 rounded-2xl shadow-xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Let's discuss how HANADIV TECH can help you achieve your digital goals.
          </p>
          <a 
            href="/contact" 
            className="bg-hanadiv-orange text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Start Your Project Today
          </a>
        </div>
      </section>
      
      {/* Spacer untuk memberi ruang sebelum footer */}
      {/* (INI SEKARANG BERADA DI DALAM WRAPPER YANG BENAR) */}
      <div className="h-16"></div> 
      
    </div> // <-- Ini adalah tag </div> penutup untuk 'bg-hanadiv-blue'
  ); // <-- Ini adalah penutup 'return'
} // <-- Ini adalah penutup 'export default function Home'