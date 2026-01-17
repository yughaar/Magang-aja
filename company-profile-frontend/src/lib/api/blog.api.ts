import { Blog } from "@/types/blogs";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function getBlogs(): Promise<Blog[]> {
  const res = await fetch(`${STRAPI_URL}/api/blogs?populate=image`, {
    cache: "no-store", // atau revalidate
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const json = await res.json();

  return json.data;
}
