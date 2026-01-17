"use client";

import { Service } from "@/types/service";

type Props = {
  service: Service;
};

export default function ServiceCard({ service }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200/80 h-full">
      <div className="mb-4 inline-block p-3 border-2 border-orange-200/70 rounded-lg">
        <img
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${service.image.url}`}
          className="w-7 h-7"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed min-h-[90px]">
        {service.description}
      </p>
    </div>
  );
}
