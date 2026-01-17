"use client";

import { useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type SliderProps<T> = {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
};

export default function CardSlider<T>({ data, renderItem }: SliderProps<T>) {
  const showNavigation = data.length > 3;

  // ✅ ID unik untuk SETIAP slider
  const sliderId = useId();
  const prevClass = `swiper-prev-${sliderId}`;
  const nextClass = `swiper-next-${sliderId}`;

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-8">
      {/* PREV */}
      {showNavigation && (
        <div
          className={`${prevClass} absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 cursor-pointer`}
        >
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
      )}

      {/* NEXT */}
      {showNavigation && (
        <div
          className={`${nextClass} absolute right-[-50px] top-1/2 -translate-y-1/2 z-10 cursor-pointer`}
        >
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      )}

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop={showNavigation}
        autoplay={showNavigation ? { delay: 2500 } : false}
        navigation={
          showNavigation
            ? {
                nextEl: `.${nextClass}`,
                prevEl: `.${prevClass}`,
              }
            : false
        }
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
