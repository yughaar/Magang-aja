// src/app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'; // <-- 1. IMPORT FOOTER BARU

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Company Profile',
  description: 'Website company profile modern',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer /> {/* <-- 2. GANTI FOOTER LAMA DENGAN INI */}
      </body>
    </html>
  );
}