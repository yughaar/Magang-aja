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
        // Primary blue color
        'hanadiv-blue': '#1D3380',
        
        // Secondary blue color
        'hanadiv-blue-secondary': '#3B65C4',
        
        // Dark blue for footer
        'hanadiv-darkblue': '#1D3380',
        
        // Orange accent color
        'hanadiv-orange': '#f97316', 
      },
    },
  },
  plugins: [],
};
export default config;