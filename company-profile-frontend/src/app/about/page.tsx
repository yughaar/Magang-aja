// src/app/about/page.tsx

import React from 'react';

// --- Komponen Kartu untuk Misi, Visi, Nilai ---
interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function InfoCard({ icon, title, description }: InfoCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
      {/* Ikon dalam lingkaran dengan outline orange */}
      <div className="mb-4 w-16 h-16 rounded-full border-2 border-[#F3732A] flex items-center justify-center">
        <div className="w-8 h-8 text-[#1D3380]">
          {icon}
        </div>
      </div>
      {/* Judul */}
      <h3 className="text-xl font-bold text-[#1D3380] mb-2">
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
export default function AboutUs() {
  return (
    // Halaman memanjang ke bawah dengan latar belakang gradient
    <div className="min-h-screen bg-gradient-to-b from-[#1D3380] to-[#3B65C4]">
      
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Hero Section */}
        <section className="pt-20 pb-8 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About HANADIV TECH</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
            Leading the way in technology innovation and digital transformation.
          </p>
        </section>

        {/* About HANADIV TECH Section dalam Kartu Putih */}
        <section className="pb-8 pt-8 px-4">
          <div className="bg-white max-w-6xl mx-auto p-10 md:p-12 rounded-2xl shadow-xl">
            
            {/* Judul dan Paragraf */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1D3380] mb-4">
                About HANADIV TECH
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                HANADIV TECH is a leading technology company dedicated to delivering innovative solutions that empower businesses to thrive in the digital age. With a relentless focus on quality and a passion for excellence, we transform complex challenges into elegant, scalable solutions.
              </p>
            </div>

            {/* Grid Misi, Visi, Nilai */}
            <div className="grid md:grid-cols-3 gap-8">
              <InfoCard
                icon={(
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                )}
                title="Our Mission"
                description="To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation in an ever-evolving digital landscape."
              />
              <InfoCard
                icon={(
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                )}
                title="Our Vision"
                description="To be the most trusted technology partner for businesses worldwide, recognized for excellence, innovation, and transformative impact."
              />
              <InfoCard
                icon={(
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-3.741-5.584M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2.25A2.25 2.25 0 0 1 9.75 19.5h-4.5A2.25 2.25 0 0 1 3 17.25V15m1.5-6c0-3.032 2.682-5.5 6-5.5s6 2.468 6 5.5m-1.5 0v-2.251a2.25 2.25 0 0 0-2.25-2.25H15M9 15v2.25A2.25 2.25 0 0 0 11.25 19.5h4.5A2.25 2.25 0 0 0 18 17.25V15" />
                  </svg>
                )}
                title="Our Values"
                description="Innovation, integrity, and client success are at the heart of everything we do. We believe in building lasting partnerships through excellence and trust."
              />
            </div>

          </div>
        </section>

        {/* Statistik Section langsung di latar biru */}
        <section className="pb-20 pt-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
            <div>
              <h3 className="text-4xl font-bold text-[#F3732A] mb-1">10+</h3>
              <p className="text-white">Years Experience</p>
            </div>
            
            <div>
              <h3 className="text-4xl font-bold text-[#F3732A] mb-1">500+</h3>
              <p className="text-white">Projects Completed</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#F3732A] mb-1">200+</h3>
              <p className="text-white">Happy Clients</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#F3732A] mb-1">50+</h3>
              <p className="text-white">Team Members</p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}