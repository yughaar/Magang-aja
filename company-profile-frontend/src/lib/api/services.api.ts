import { Service } from "@/types/service";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function getServices(): Promise<Service[]> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/services-lists`, {
      cache: "no-store", // atau "force-cache" kalau mau SSG
    });

    if (!res.ok) {
      throw new Error("Failed to fetch services");
    }

    const json = await res.json();

    return json.data.map((item: any) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      image: {
        url: item.image?.url,
        alternativeText: item.image?.alternativeText ?? null,
      },
    }));
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}
