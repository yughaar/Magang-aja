// index.js (Backend)

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors()); // Mengizinkan permintaan dari domain lain (Next.js Anda)
app.use(express.json()); // Untuk membaca body JSON

// --- Data Dummy (Nantinya bisa diganti database) ---
// ... (kode express dan cors Anda di atas)

// --- Ganti array 'posts' Anda dengan ini ---
const posts = [
  { 
    id: 1, 
    title: "The Future of Web Development in 2025", 
    slug: "future-of-web-dev",
    excerpt: "Key technologies shaping the future of web development.",
    content: "Isi lengkap artikel...",
    imageUrl: "https://placehold.co/600x400/3b82f6/white?text=Tech",
    category: "Technology",
    author: "John Doe",
    date: "March 15, 2024"
  },
  { 
    id: 2, 
    title: "Cloud Migration Best Practices", 
    slug: "cloud-migration-practices",
    excerpt: "Proven strategies for a successful cloud migration journey.",
    content: "Isi lengkap artikel...",
    imageUrl: "https://placehold.co/600x400/10b981/white?text=Cloud",
    category: "Cloud",
    author: "Jane Smith",
    date: "March 12, 2024"
  },
  { 
    id: 3, 
    title: "Mobile App Security: A Complete Guide", 
    slug: "mobile-app-security",
    excerpt: "Essential security measures for protecting your mobile applications.",
    content: "Isi lengkap artikel...",
    imageUrl: "https://placehold.co/600x400/f59e0b/white?text=Security",
    category: "Security",
    author: "Mike Johnson",
    date: "March 10, 2024"
  },
  { 
    id: 4, 
    title: "AI and Machine Learning in Business", 
    slug: "ai-ml-in-business",
    excerpt: "How artificial intelligence is transforming modern business operations.",
    content: "Isi lengkap artikel...",
    imageUrl: "https://placehold.co/600x400/8b5cf6/white?text=AI",
    category: "AI",
    author: "Sarah Williams",
    date: "March 8, 2024"
  },
  { 
    id: 5, 
    title: "DevOps Culture: Building Better Teams", 
    slug: "devops-culture",
    excerpt: "Creating a collaborative culture for development and operations teams.",
    content: "Isi lengkap artikel...",
    imageUrl: "https://placehold.co/600x400/ec4899/white?text=DevOps",
    category: "DevOps",
    author: "David Brown",
    date: "March 5, 2024"
  },
  { 
    id: 6, 
    title: "UI/UX Design Trends for 2024", 
    slug: "ui-ux-trends-2024",
    excerpt: "Latest design trends to create exceptional user experiences.",
    content: "Isi lengkap artikel...",
    imageUrl: "https://placehold.co/600x400/06b6d4/white?text=Design",
    category: "Design",
    author: "Emily Davis",
    date: "March 1, 2024"
  }
];
// -------------------------------------------------

// ... (sisa kode API Anda di bawah)
// === API Endpoints ===

// Endpoint untuk mendapatkan semua artikel blog
app.get('/api/blog', (req, res) => {
  res.json(posts);
});

// Endpoint untuk mendapatkan satu artikel berdasarkan slug-nya
app.get('/api/blog/:slug', (req, res) => {
  const { slug } = req.params;
  const post = posts.find(p => p.slug === slug);
  
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: 'Artikel tidak ditemukan' });
  }
});

// =======================


// Jalankan server
app.listen(PORT, () => {
  console.log(`Server backend berjalan di http://localhost:${PORT}`);
});

