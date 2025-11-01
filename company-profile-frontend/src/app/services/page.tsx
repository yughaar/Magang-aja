// src/app/services/page.tsx

import React from 'react';

// --- Data Layanan (Data Baru Sesuai Gambar) ---
const servicesData = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications built with modern frameworks and best practices for optimal performance on iOS and Android devices."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.333 9-6.03 9-11.623 0-1.604-.43-3.112-1.2-4.434M15 2.25a11.959 11.959 0 0 1-6 0M12 2.25v19.5" />
      </svg>
    ),
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-5.354-2.247.75.75 0 0 1-1.086.13C9.69 8.364 7.5 8.364 5.314 9.64a.75.75 0 0 1-1.086-.13 3 3 0 0 0-1.99 0 2.25 2.25 0 0 0-1.99 2.15C.5 13.05 1.25 14.1 2.25 15Z" />
      </svg>
    ),
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to enhance your business agility and reduce costs."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5 0-4.5 16.5" />
      </svg>
    ),
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and best practices for optimal performance and user experience."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
      </svg>
    ),
    title: "Database Management",
    description: "Robust database design, optimization, and management solutions for efficient data handling and storage."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    title: "System Integration",
    description: "Seamless integration of various systems and platforms to streamline your business operations."
  }
];

// --- Komponen Kartu Layanan Baru (Sederhana) ---
interface ServiceCardProps {
  icon: React.ReactElement; // Menggunakan ReactElement agar bisa di-clone
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    // Kartu individu
    <div className="bg-white p-6 rounded-xl border border-gray-200/80">
      {/* Ikon */}
      <div className="mb-4 inline-block p-3 border-2 border-orange-200/70 rounded-lg">
        {React.cloneElement(icon, { className: "w-7 h-7 text-hanadiv-orange" })}
      </div>
      {/* Judul */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {title}
      </h3>
      {/* Deskripsi */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}


// --- Komponen Halaman Utama ---
export default function Services() {
  return (
    // 1. Latar belakang biru pekat untuk seluruh halaman
    <div className="bg-hanadiv-blue">
      
      {/* 2. Header Biru Baru */}
      <section className="pt-20 pb-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Service</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
            Comprehensive technology solutions tailored to meet your business needs and drive digital transformation.
          </p>
        </div>
      </section>

      {/* 3. Kartu Putih Besar berisi Grid Layanan */}
      <section className="pb-16 pt-8 px-4">
        <div className="bg-white max-w-6xl mx-auto p-10 md:p-12 rounded-2xl shadow-xl">
          
          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 4. Loop data layanan */}
            {servicesData.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          
        </div>
      </section>
      
      {/* Spacer untuk memberi ruang sebelum footer */}
      <div className="h-16"></div> 
    </div>
  );
}