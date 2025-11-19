"use client"

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProductCardWithImage } from './product-card-with-image'

export function HeroSplitView() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden flex items-center">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Content - Text Section */}
          <div className="space-y-8">
            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
                View Our Latest{' '}
                <span className="block mt-2">
                  Sustainability Report
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              Lihat komitmen kami terhadap keberlanjutan lingkungan dan praktik bisnis yang bertanggung jawab dalam laporan tahunan 2024.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats or Additional Info */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-blue-600">2024</div>
                <div className="text-sm text-muted-foreground">Latest Report</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-emerald-600">100%</div>
                <div className="text-sm text-muted-foreground">Eco-Friendly</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-violet-600">ISO</div>
                <div className="text-sm text-muted-foreground">Certified</div>
              </div>
            </div>
          </div>

          {/* Right Content - Green Card with Image */}
          <div className="relative">
            {/* Floating decoration elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl" />

            {/* Reusable Product Card Component */}
            <ProductCardWithImage
              year="2024"
              title="Sustainability"
              subtitle="Report"
              companyName="PT. Omecom Mitra Solusi"
              description="Komitmen kami untuk masa depan yang lebih hijau dan berkelanjutan"
              imageSrc="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&auto=format&fit=crop"
              gradientColors="from-emerald-600 via-green-600 to-teal-600"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
