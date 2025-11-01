// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-wave': "url('/hero-wave.svg')",
      },
      colors: {
        // 1. GANTI WARNA BIRU INI
        'hanadiv-blue': '#0a0a0a', // Menjadi abu-abu sangat gelap (hampir hitam)
        
        // 2. GANTI WARNA BIRU TUA INI
        'hanadiv-darkblue': '#000000', // Menjadi hitam murni (untuk footer)
        
        // 3. WARNA ORANYE TETAP SAMA
        'hanadiv-orange': '#f97316', 
      },
    },
  },
  plugins: [],
};
export default config;