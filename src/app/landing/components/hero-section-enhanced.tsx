"use client"

import { useState, useEffect } from 'react'
import { ArrowRight, Sparkles, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { AnimatedGradient } from './animated-gradient'
import { AnimatedProductGrid } from './animated-product-grid'

export function HeroSectionEnhanced() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger staggered animations on mount
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-background pt-20 sm:pt-32 pb-24 min-h-[90vh] flex items-center">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 opacity-40">
        <AnimatedGradient />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8">
            {/* Badge with staggered animation */}
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <Badge variant="outline" className="px-4 py-2 border-primary/50 inline-flex items-center gap-2">
                <Sparkles className="w-3 h-3 fill-primary" />
                Tersertifikasi ISO 9001:2008 & NSF
                <ArrowRight className="w-3 h-3" />
              </Badge>
            </div>

            {/* Main Headline with staggered animation */}
            <div
              className={`space-y-4 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                <span className="block mb-2">Solusi Lengkap</span>
                <span className="block text-primary animate-gradient">
                  Chemical & Hygiene
                </span>
                <span className="block mt-2">untuk Bisnis Anda</span>
              </h1>
            </div>

            {/* Description with staggered animation */}
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                PT. Omecom Mitra Solusi menyediakan produk chemical cleaning profesional,
                hygiene products berkualitas, dan layanan pembersihan terpercaya untuk
                berbagai industri.
              </p>
            </div>

            {/* Stats with staggered animation */}
            <div
              className={`grid grid-cols-3 gap-6 py-6 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">
                  500+
                </div>
                <div className="text-sm text-muted-foreground">Klien Aktif</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">
                  15+
                </div>
                <div className="text-sm text-muted-foreground">Tahun Pengalaman</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">
                  100+
                </div>
                <div className="text-sm text-muted-foreground">Produk Tersedia</div>
              </div>
            </div>

            {/* CTA Buttons with staggered animation */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <Button
                size="lg"
                className="text-base cursor-pointer group bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40"
                asChild
              >
                <a href="#features">
                  Jelajahi Produk
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base cursor-pointer group border-2 hover:bg-accent"
                asChild
              >
                <a href="#contact" className="flex items-center">
                  <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Hubungi Kami
                </a>
              </Button>
            </div>

            {/* Trust indicators with staggered animation */}
            <div
              className={`flex flex-wrap gap-6 items-center pt-4 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Tersedia di Shopee & Tokopedia
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                Fast Delivery
              </div>
            </div>
          </div>

          {/* Right Content - Animated Product Grid */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <AnimatedProductGrid />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
