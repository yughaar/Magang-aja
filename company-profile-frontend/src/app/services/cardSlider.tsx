"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect } from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200/80 h-full">
      <div className="mb-4 inline-block p-3 border-2 border-orange-200/70 rounded-lg">
        <div className="w-7 h-7 text-[#F3732A]">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

const servicesData = [
  {
    id: 1,
    icon: (
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
          d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    ),
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications built with modern frameworks and best practices for optimal performance on iOS and Android devices.",
  },
  {
    id: 2,
    icon: (
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
          d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.333 9-6.03 9-11.623 0-1.604-.43-3.112-1.2-4.434M15 2.25a11.959 11.959 0 0 1-6 0M12 2.25v19.5"
        />
      </svg>
    ),
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
  },
  {
    id: 3,
    icon: (
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
          d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-5.354-2.247.75.75 0 0 1-1.086.13C9.69 8.364 7.5 8.364 5.314 9.64a.75.75 0 0 1-1.086-.13 3 3 0 0 0-1.99 0 2.25 2.25 0 0 0-1.99 2.15C.5 13.05 1.25 14.1 2.25 15Z"
        />
      </svg>
    ),
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services to enhance your business agility and reduce costs.",
  },
  {
    id: 4,
    icon: (
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
          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5 0-4.5 16.5"
        />
      </svg>
    ),
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks and best practices for optimal performance and user experience.",
  },
];

export default function CardSlider() {
  // Perlu memastikan tombol navigasi tersedia sebelum Swiper di-render
  useEffect(() => {}, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-8">
      {/* Tombol Panah Kiri */}
      <div className="swiper-button-prev-custom absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-gray-300 hover:text-gray-600 transition"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>

      {/* Tombol Panah Kanan */}
      <div className="swiper-button-next-custom absolute right-[-50px] top-1/2 -translate-y-1/2 z-10 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-gray-300 hover:text-gray-600 transition"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {servicesData.map((data) => (
          <SwiperSlide key={data.id}>
            <ServiceCard
              icon={data.icon}
              title={data.title}
              description={data.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
