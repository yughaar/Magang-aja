"use client";

import CardSlider from "./CardSlider";
import ServiceCard from "./ServiceCard";
// import { servicesData } from "@/data/services";
import { Service } from "@/types/service";

type Props = {
  services: Service[];
};

export default function ServiceSlider({ services }: Props) {
  return (
    <CardSlider<Service>
      data={services}
      renderItem={(service) => <ServiceCard service={service} />}
    />
  );
}
