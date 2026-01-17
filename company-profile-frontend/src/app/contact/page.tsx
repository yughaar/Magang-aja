// src/app/contact/page.tsx

import React from "react";

// Komponen kecil untuk info kontak
function ContactInfo({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0">
        <div className="bg-orange-50 p-3 rounded-lg">
          <div className="w-6 h-6 text-hanadiv-orange">{icon}</div>
        </div>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    // 1. Latar belakang gradient
    <div className="min-h-screen bg-gradient-to-b from-[#1D3380] to-[#3B65C4]">
      {/* 2. Hero Section Biru */}
      <section className="pt-20 pb-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
            We'd love to hear from you. Get in touch with us to discuss your
            project.
          </p>
        </div>
      </section>

      {/* 3. Kartu Putih Besar "Get in Touch" */}
      <section className="pb-16 pt-8 px-4">
        <div className="bg-white max-w-6xl mx-auto p-10 md:p-12 rounded-2xl shadow-xl">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Kolom Kiri: Info Kontak */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <ContactInfo
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                }
                title="Email"
                text="info@hanadivtech.com"
              />
              <ContactInfo
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.211-.998-.552-1.33l-3.954-3.954a1.5 1.5 0 0 0-2.122 0L11.25 12.879a.75.75 0 0 1-1.06 0l-2.82-2.82a.75.75 0 0 1 0-1.06l3.172-3.172a1.5 1.5 0 0 0 0-2.122L8.662 2.804A1.5 1.5 0 0 0 7.33 2.25H6A2.25 2.25 0 0 0 3.75 4.5v2.25Z"
                    />
                  </svg>
                }
                title="Phone"
                text="+1 234 567 890"
              />
              <ContactInfo
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                }
                title="Address"
                text="123 Business St, City, Country"
              />
            </div>

            {/* Kolom Kanan: Form Kontak */}
            <div>
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-800"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-hanadiv-orange focus:border-hanadiv-orange"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-800"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-hanadiv-orange focus:border-hanadiv-orange"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-800"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-hanadiv-orange focus:border-hanadiv-orange"
                  ></textarea>
                </div>
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
        </div>
      </section>

      {/* Spacer */}
      <div className="h-16"></div>
    </div>
  );
}
