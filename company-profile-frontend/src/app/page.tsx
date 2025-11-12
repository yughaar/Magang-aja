// src/app/page.tsx
import React from 'react';
import BlogCard from '@/components/BlogCard';

// Komponen kecil untuk kartu fitur
function FeatureCard({ icon, title, text }: { 
  icon: React.ReactNode;
  title: string;
  text: string; 
}) {
  return (
    <div className="flex flex-col items-start p-6 border border-gray-200 rounded-lg">
      <div className="bg-orange-50 p-3 rounded-full mb-4">
        <div className="w-6 h-6 text-orange-500">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

// Komponen Service Card
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200/80">
      <div className="mb-4 inline-block p-3 border-2 border-orange-200/70 rounded-lg">
        <div className="w-7 h-7 text-[#F3732A]">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

// Komponen Info Card untuk Mission/Vision/Values
interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function InfoCard({ icon, title, description }: InfoCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
      <div className="mb-4 w-16 h-16 rounded-full border-2 border-[#F3732A] flex items-center justify-center">
        <div className="w-8 h-8 text-[#1D3380]">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-[#1D3380] mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

// Data Services
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

// Interface untuk Blog Post
interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
}

// Fungsi untuk fetch blog posts
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

// Komponen Halaman Home (Async untuk fetch blog)
export default async function Home() {
  const posts = await getPosts();

  return (
    // Wrapper utama
    <div className="min-h-screen">
      
      {/* Hero Section dengan background gambar hanya di atas + overlay gelap */}
      <section className="relative">
        {/* Background image */}
        <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat"></div>
        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Konten */}
        <div className="relative container mx-auto px-6 py-24 md:py-32 text-white text-center">
          <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight ">
            Innovative Technology Solutions for Your Business
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Transforming ideas into powerful digital experiences with cutting-edge technology and expert craftsmanship.
          </p>
          </div>
        </div>
      </section>

      {/* Why Choose Hanadiv Tech Section - full width kiri kanan */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D3380] mb-4">
              Why Choose Hanadiv Tech?
            </h2>
            <p className="text-gray-600 text-lg">
              We deliver exceptional technology solutions backed by years of expertise and innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#F3732A]"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3 7.5a6.01 6.01 0 0 0-3-7.5m3 7.5a6.01 6.01 0 0 1-3-7.5m-6 0a6.01 6.01 0 0 0 3 7.5m-3-7.5a6.01 6.01 0 0 1 3-7.5m0 0a6.01 6.01 0 0 0-3 7.5m0 0a6.01 6.01 0 0 1-3 7.5" /></svg>}
              title="Innovation First"
              text="Leveraging the latest technologies to create forward-thinking solutions."
            />
            <FeatureCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#F3732A]"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.333 9-6.03 9-11.623 0-1.604-.43-3.112-1.2-4.434M15 2.5a11.959 11.959 0 0 1-6 0M12 2.25v19.5" /></svg>}
              title="Reliable & Secure"
              text="Building robust systems with security and reliability at the core."
            />
            <FeatureCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#F3732A]"><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>}
              title="Fast Performance"
              text="Optimized solutions that deliver speed and efficiency for your business."
            />
          </div>
        </div>
      </section>

      <section className="relative h-16 md:h-24">
        <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </section>

      {/* Ready to Transform Section
      <section className="pb-16 pt-8 px-4">
        <div className="bg-white max-w-6xl mx-auto p-10 md:p-16 rounded-2xl shadow-xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D3380] mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Let's discuss how HANADIV TECH can help you achieve your digital goals.
          </p>
          <button className="bg-[#F3732A] text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition duration-300">
            Start Your Project Today
          </button>
        </div>
      </section> */}

      {/* Our Service Section - full width */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D3380] mb-4">
              Our Service
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive technology solutions tailored to meet your business needs and drive digital transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      <section className="relative h-16 md:h-24">
        <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </section>

      {/* Blog & News Section - full width */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D3380] mb-4">
              Blog & News
            </h2>
            <p className="text-gray-600 text-lg">
              Stay updated with the latest insights, trends, and news from the world of technology.
            </p>
          </div>
          
          {posts.length === 0 ? (
            <div className="text-center text-gray-500">
              <p>Belum ada artikel yang dipublikasikan.</p>
              <p className="text-sm">(Pastikan server backend Anda berjalan).</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(0, 3).map((post) => (
                <BlogCard
                  key={post.id}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  date={post.date}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="relative h-16 md:h-24">
        <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </section>

      {/* About HANADIV TECH Section - full width */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D3380] mb-4">
              About HANADIV TECH
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              HANADIV TECH is a leading technology company dedicated to delivering innovative solutions that empower businesses to thrive in the digital age. With a relentless focus on quality and a passion for excellence, we transform complex challenges into elegant, scalable solutions.
            </p>
          </div>

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

      {/* Statistics Section */}
      <section className="pb-20 pt-8 text-white">
        <div className="max-w-6xl mx-auto px-4">
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
        </div>
      </section>

      {/* Contact Us Section - full width */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          {/* Title Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D3380] mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 text-lg">
              Get in touch with our team. We'd love to hear from you.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Email Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#F3732A" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1D3380] mb-2">Email</h3>
              <p className="text-gray-600">info@hanadivtech.com</p>
            </div>

            {/* Phone Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#1D3380" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.211-.998-.552-1.33l-3.954-3.954a1.5 1.5 0 0 0-2.122 0L11.25 12.879a.75.75 0 0 1-1.06 0l-2.82-2.82a.75.75 0 0 1 0-1.06l3.172-3.172a1.5 1.5 0 0 0 0-2.122L8.662 2.804A1.5 1.5 0 0 0 7.33 2.25H6A2.25 2.25 0 0 0 3.75 4.5v2.25Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1D3380] mb-2">Phone</h3>
              <p className="text-gray-600">+62 123 456 7890</p>
            </div>

            {/* Location Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#1D3380" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1D3380] mb-2">Location</h3>
              <p className="text-gray-600">Jakarta, Indonesia</p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-[#1D3380] mb-2">
                Send us a Message
              </h3>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form action="#" method="POST" className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-800 mb-2">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="contact-name" 
                    name="name" 
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#F3732A] focus:border-[#F3732A] outline-none" 
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-800 mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="contact-email" 
                    name="email" 
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#F3732A] focus:border-[#F3732A] outline-none" 
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-800 mb-2">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="contact-subject" 
                  name="subject" 
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#F3732A] focus:border-[#F3732A] outline-none" 
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-800 mb-2">
                  Message
                </label>
                <textarea 
                  id="contact-message" 
                  name="message" 
                  rows={5}
                  placeholder="Tell us more..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm resize-y focus:ring-2 focus:ring-[#F3732A] focus:border-[#F3732A] outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button 
                  type="submit" 
                  className="w-full bg-[#F3732A] text-white font-semibold py-3 px-6 rounded-md hover:opacity-90 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>
      
    </div>
  );
}
