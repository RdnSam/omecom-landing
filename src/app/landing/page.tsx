import type { Metadata } from 'next'
import { LandingPageContent } from './landing-page-content'

// Metadata for the landing page
export const metadata: Metadata = {
  title: 'PT. Omecom Mitra Solusi - Solusi Hygiene & Cleaning Terpercaya',
  description: 'PT. Omecom Mitra Solusi menyediakan produk dan layanan cleaning terlengkap: Chemical Cleaning, Hygiene Products, dan Professional Cleaning Services. Tersertifikasi ISO 9001:2008 dan NSF.',
  keywords: ['cleaning service', 'chemical cleaning', 'hygiene products', 'cleaning supplies', 'janitorial supplies', 'omecom', 'ISO 9001'],
  openGraph: {
    title: 'PT. Omecom Mitra Solusi - Solusi Hygiene & Cleaning Terpercaya',
    description: 'Penyedia produk dan layanan cleaning terlengkap dengan sertifikasi ISO 9001:2008 dan NSF.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PT. Omecom Mitra Solusi',
    description: 'Solusi Hygiene & Cleaning Terpercaya - Tersertifikasi ISO 9001:2008 dan NSF',
  },
}

export default function LandingPage() {
  return <LandingPageContent />
}
