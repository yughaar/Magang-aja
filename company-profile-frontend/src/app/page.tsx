// src/app/page.tsx
import React from "react";
import ServiceSlider from "@/components/ServiceSlider";
import { getGlobal } from "@/lib/api/global.api";
import { getServices } from "@/lib/api/services.api";
import { getBlogs } from "@/lib/api/blog.api";
import BlogSlider from "@/components/BlogSlider";

// Komponen kecil untuk kartu fitur
function FeatureCard({
  icon,
  title,
  text,
}: {
  icon?: string | null;
  title: string;
  text: string;
}) {
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
  const iconURL = icon ? `${STRAPI_URL}${icon}` : null;
  return (
    <div className="flex flex-col items-start p-6 border border-gray-200 rounded-lg">
      <div className="bg-orange-50 p-3 rounded-full mb-4">
        {iconURL && <img src={iconURL} className="w-6 h-6 text-orange-500" />}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

// Komponen kontak card
function ContactCard({
  icon,
  title,
  text,
}: {
  icon?: string | null;
  title: string;
  text: string;
}) {
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
  const iconURL = icon ? `${STRAPI_URL}${icon}` : null;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
      <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
        {iconURL && <img src={iconURL} className="w-8 h-8" />}
      </div>
      <h3 className="text-xl font-bold text-[#1D3380] mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

// Komponen Service Card
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Komponen info card
function InfoCard({
  icon,
  title,
  description,
}: {
  icon?: string | null;
  title: string;
  description: string;
}) {
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
  const iconURL = icon ? `${STRAPI_URL}${icon}` : null;
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
      <div className="mb-4 w-16 h-16 rounded-full border-2 border-[#F3732A] flex items-center justify-center">
        {iconURL && <img src={iconURL} className="w-8 h-8" />}
      </div>
      <h3 className="text-xl font-bold text-[#1D3380] mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

// Komponen Halaman Home (Async untuk fetch blog)
export default async function Home() {
  const global = await getGlobal();
  const services = await getServices();
  const blogs = await getBlogs();
  const data = global.data;
  const sections = data.blocks;
  console.log(sections);
  const hero = sections[0];
  const whyChoose = sections[1];
  const service = sections[2];
  const blog = sections[3];
  const about = sections[4];
  const stats = sections[5];
  const contact = sections[6];
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
              {hero.heading}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">{hero.text}</p>
          </div>
        </div>
      </section>

      {/* Why Choose Hanadiv Tech Section - full width kiri kanan */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D3380] mb-4">
              {whyChoose.heading}
            </h2>
            <p className="text-gray-600 text-lg">{whyChoose.text}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={whyChoose.cards[0].icon.url}
              title={whyChoose.cards[0].title}
              text={whyChoose.cards[0].description}
            />
            <FeatureCard
              icon={whyChoose.cards[1].icon.url}
              title={whyChoose.cards[1].title}
              text={whyChoose.cards[1].description}
            />
            <FeatureCard
              icon={whyChoose.cards[2].icon.url}
              title={whyChoose.cards[2].title}
              text={whyChoose.cards[2].description}
            />
          </div>
        </div>
      </section>

      <section className="relative h-16 md:h-24">
        <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </section>

      {/* Our Service Section - full width */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D3380] mb-4">
              {service.heading}
            </h2>
            <p className="text-gray-600 text-lg">{service.description}</p>
          </div>
          <ServiceSlider services={services} />
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
              {blog.heading}
            </h2>
            <p className="text-gray-600 text-lg">{blog.description}</p>
          </div>

          {blogs.length === 0 ? (
            <div className="text-center text-gray-500">
              <p>Belum ada artikel yang dipublikasikan.</p>
              <p className="text-sm">
                (Pastikan server backend Anda berjalan).
              </p>
            </div>
          ) : (
            <BlogSlider blogs={blogs} />
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
              {about.heading}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {about.text}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <InfoCard
              icon={about.cards[0].icon.url}
              title={about.cards[0].title}
              description={about.cards[0].description}
            />
            <InfoCard
              icon={about.cards[1].icon.url}
              title={about.cards[1].title}
              description={about.cards[1].description}
            />
            <InfoCard
              icon={about.cards[2].icon.url}
              title={about.cards[2].title}
              description={about.cards[2].description}
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="pb-20 pt-8 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-[#F3732A] mb-1">
                {stats.stats[0].value}
              </h3>
              <p className="text-white">{stats.stats[0].description}</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#F3732A] mb-1">
                {stats.stats[1].value}
              </h3>
              <p className="text-white">{stats.stats[1].description}</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#F3732A] mb-1">
                {stats.stats[2].value}
              </h3>
              <p className="text-white">{stats.stats[2].description}</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#F3732A] mb-1">
                {stats.stats[3].value}
              </h3>
              <p className="text-white">{stats.stats[3].description}</p>
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
              {contact.heading}
            </h2>
            <p className="text-gray-600 text-lg">{contact.description}</p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ContactCard
              icon={contact.cards[0].icon.url}
              title={contact.cards[0].title}
              text={contact.cards[0].description}
            />
            <ContactCard
              icon={contact.cards[1].icon.url}
              title={contact.cards[1].title}
              text={contact.cards[1].description}
            />
            <ContactCard
              icon={contact.cards[2].icon.url}
              title={contact.cards[2].title}
              text={contact.cards[2].description}
            />
            {/* Email Card */}
            {/* <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#F3732A"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1D3380] mb-2">Email</h3>
              <p className="text-gray-600">info@hanadivtech.com</p>
            </div> */}

            {/* Phone Card */}
            {/* <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#1D3380"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.211-.998-.552-1.33l-3.954-3.954a1.5 1.5 0 0 0-2.122 0L11.25 12.879a.75.75 0 0 1-1.06 0l-2.82-2.82a.75.75 0 0 1 0-1.06l3.172-3.172a1.5 1.5 0 0 0 0-2.122L8.662 2.804A1.5 1.5 0 0 0 7.33 2.25H6A2.25 2.25 0 0 0 3.75 4.5v2.25Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1D3380] mb-2">Phone</h3>
              <p className="text-gray-600">+62 123 456 7890</p>
            </div> */}

            {/* Location Card */}
            {/* <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#1D3380"
                  className="w-8 h-8"
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
              </div>
              <h3 className="text-xl font-bold text-[#1D3380] mb-2">
                Location
              </h3>
              <p className="text-gray-600">Jakarta, Indonesia</p>
            </div> */}
          </div>

          {/* Contact Form Section */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-[#1D3380] mb-2">
                {contact.titleMessage}
              </h3>
              <p className="text-gray-600">{contact.descriptionMessage}</p>
            </div>

            <form action="#" method="POST" className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-gray-800 mb-2 "
                  >
                    {contact.input[0].label}
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder={contact.input[0].placeholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#F3732A] focus:border-[#F3732A] outline-none placeholder:text-gray-300 text-gray-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-gray-800 mb-2"
                  >
                    {contact.input[1].label}
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder={contact.input[1].placeholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#F3732A] focus:border-[#F3732A] outline-none placeholder:text-gray-300 text-gray-600"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-sm font-medium text-gray-800 mb-2"
                >
                  {contact.input[2].label}
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  placeholder={contact.input[2].placeholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#F3732A] focus:border-[#F3732A] outline-none placeholder:text-gray-300 text-gray-600"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-gray-800 mb-2"
                >
                  {contact.input[3].label}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder={contact.input[3].placeholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm resize-y focus:ring-2 focus:ring-[#F3732A] focus:border-[#F3732A] outline-none placeholder:text-gray-300 text-gray-600"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#F3732A] text-white font-semibold py-3 px-6 rounded-md hover:opacity-90 transition duration-300"
                >
                  {contact.btnText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
