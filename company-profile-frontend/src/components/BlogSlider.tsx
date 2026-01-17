"use client";

import { Blog } from "@/types/blogs";
import CardSlider from "./CardSlider";
import BlogCard from "./BlogCard";

type Props = {
  blogs: Blog[];
};

export default function BlogSlider({ blogs }: Props) {
  return (
    <CardSlider<Blog>
      data={blogs}
      renderItem={(blog) => <BlogCard blog={blog} />}
    />
  );
}
