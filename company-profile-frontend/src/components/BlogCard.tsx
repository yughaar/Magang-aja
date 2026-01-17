// src/components/BlogCard.tsx

import { formatDate } from "@/lib/utils/date";
import { Blog } from "@/types/blogs";
import Link from "next/link";

type Props = {
  blog: Blog;
};

export default function BlogCard({ blog }: Props) {
  return (
    <article className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      {/* 2. Area Gambar Placeholder */}
      <Link href={`/blog/${blog.title}`}>
        <div className="bg-slate-100 w-full flex items-center justify-center hover:bg-slate-200 transition-colors px-1 py-1">
          <img
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${blog.image.url}`}
          ></img>
          {/* <PlaceholderIcon /> */}
        </div>
      </Link>

      {/* 3. Konten */}
      <div className="p-6">
        {/* Kategori dan Tanggal */}
        <div className="flex justify-between items-center mb-3">
          <span className="bg-[#F3732A] text-white text-xs font-semibold px-3 py-1 rounded-md">
            {blog.categories}
          </span>
          <div className="flex items-center text-xs text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mr-1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
            <span>{formatDate(blog.date)}</span>
          </div>
        </div>

        {/* Judul (sebagai link) */}
        <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-hanadiv-blue transition-colors">
          <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
        </h2>

        {/* Cuplikan (Excerpt) */}
        <p className="text-gray-600 mb-4 text-sm">{blog.description}</p>

        {/* "Read More" link dihapus */}
      </div>
    </article>
  );
}

// export default function BlogCard({
//   title,
//   slug,
//   excerpt,
//   category,
//   date,
// }: BlogCardProps) {
//   return (
//     <article className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200/50 hover:shadow-xl transition-shadow duration-300">
//       {/* 2. Area Gambar Placeholder */}
//       <Link href={`/blog/${slug}`}>
//         <div className="bg-slate-100 h-48 w-full flex items-center justify-center hover:bg-slate-200 transition-colors">
//           <PlaceholderIcon />
//         </div>
//       </Link>

//       {/* 3. Konten */}
//       <div className="p-6">
//         {/* Kategori dan Tanggal */}
//         <div className="flex justify-between items-center mb-3">
//           <span className="bg-[#F3732A] text-white text-xs font-semibold px-3 py-1 rounded-md">
//             {category}
//           </span>
//           <div className="flex items-center text-xs text-gray-500">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-4 h-4 mr-1.5"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
//               />
//             </svg>
//             <span>{date}</span>
//           </div>
//         </div>

//         {/* Judul (sebagai link) */}
//         <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-hanadiv-blue transition-colors">
//           <Link href={`/blog/${slug}`}>{title}</Link>
//         </h2>

//         {/* Cuplikan (Excerpt) */}
//         <p className="text-gray-600 mb-4 text-sm">{excerpt}</p>

//         {/* "Read More" link dihapus */}
//       </div>
//     </article>
//   );
// }
