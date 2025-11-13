// ============================================
// LANDING PAGE AS DEFAULT (Omecom Landing)
// ============================================
import type { Metadata } from 'next'
import { LandingPageContent } from './landing/landing-page-content'

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

export default function HomePage() {
  return <LandingPageContent />
}

// ============================================
// OLD CODE - REDIRECT TO DASHBOARD
// Uncomment code below to redirect to dashboard instead of showing landing page
// ============================================
// "use client";
//
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
//
// export default function HomePage() {
//   const router = useRouter();
//
//   useEffect(() => {
//     router.replace("/dashboard");
//   }, [router]);
//
//   // Show a loading state while redirecting
//   return (
//     <div className="flex min-h-screen items-center justify-center">
//       <div className="text-center">
//         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
//         <p className="text-muted-foreground mt-2">Redirecting to dashboard...</p>
//       </div>
//     </div>
//   );
// }
