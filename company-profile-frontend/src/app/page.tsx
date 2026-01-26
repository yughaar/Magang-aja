// src/app/page.tsx
import React from "react";
import ServiceSlider from "@/components/ServiceSlider";
import { getGlobal } from "@/lib/api/global.api";
import { getServices } from "@/lib/api/services.api";
import { getBlogs } from "@/lib/api/blog.api";
import BlogSlider from "@/components/BlogSlider";
import ContactForm from "@/components/ContactForm";

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
  const hero = sections[0];
  const whyChoose = sections[1];
  const service = sections[2];
  const blog = sections[3];
  const about = sections[4];
  const stats = sections[5];
  const contact = sections[6];
  const contactData = {
    btnText: sections[6].btnText,
    input: sections[6].input,
  };
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
          </div>

          {/* Contact Form Section */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-[#1D3380] mb-2">
                {contact.titleMessage}
              </h3>
              <p className="text-gray-600">{contact.descriptionMessage}</p>
            </div>

            {/* Contact Form Component */}
            <ContactForm contact={contactData} />
          </div>
        </div>
      </section>
    </div>
  );
}
