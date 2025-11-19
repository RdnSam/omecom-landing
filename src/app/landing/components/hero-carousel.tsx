"use client"

import { useState, useEffect, MouseEvent } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Shield, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HeroSectionEnhanced } from './hero-section-enhanced'
import { cn } from '@/lib/utils'

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isCardHovered, setIsCardHovered] = useState(false)
  const totalSlides = 2

  // Auto-rotate carousel
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 15000) // 15 seconds per slide

    return () => clearInterval(interval)
  }, [isPaused])

  // Add keyframes for card animation - Triggered on slide 2, stops at tilted position
  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      @keyframes float {
        0% {
          /* Start - Center */
          transform: perspective(1000px) rotateY(0deg) rotateX(0deg);
        }
        100% {
          /* End - Left tilt (stop here) */
          transform: perspective(1000px) rotateY(-22deg) rotateX(1deg);
        }
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const handleCardMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    setMousePosition({ x: rotateY, y: rotateX })
  }

  const handleCardMouseLeave = () => {
    setIsCardHovered(false)
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}vw)`,
        }}
      >
        {/* Slide 1: Hero Enhanced */}
        <div className="w-screen flex-shrink-0" style={{ minWidth: '100vw' }}>
          <HeroSectionEnhanced />
        </div>

        {/* Slide 2: Produk & Layanan Unggulan - Product Showcase Style */}
        <div className="w-screen flex-shrink-0 min-h-screen bg-background flex items-center justify-center py-20" style={{ minWidth: '100vw' }}>
          {/* Content Container */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left: Text Content - Matched with Slide 1 */}
                <div className="space-y-8">
                  {/* Heading */}
                  <div className="space-y-4">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                      <span className="block">Cosmo Hygiene</span>
                      <span className="block bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
                        Premium Quality
                      </span>
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                      Tissue basah premium dengan formula antibakteri yang lembut di kulit. Solusi praktis untuk kebersihan
                      sehari-hari yang aman untuk seluruh keluarga.
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {[
                      { icon: Sparkles, title: 'Antibakteri Efektif', description: 'Membunuh 99.9% kuman dan bakteri berbahaya' },
                      { icon: Shield, title: 'Lembut di Kulit', description: 'Formula hypoallergenic aman untuk kulit sensitif' },
                      { icon: Award, title: 'Wangi Segar', description: 'Aroma yang menyegarkan dan tahan lama' },
                      { icon: Sparkles, title: 'Praktis & Higienis', description: 'Kemasan portable untuk penggunaan kapan saja' },
                    ].map((feature, index) => {
                      const Icon = feature.icon
                      return (
                        <li key={index} className="group hover:bg-accent/5 flex items-start gap-3 p-2 rounded-lg transition-colors">
                          <div className="mt-0.5 flex shrink-0 items-center justify-center">
                            <Icon className="size-5 text-primary" aria-hidden="true" />
                          </div>
                          <div>
                            <h3 className="text-foreground font-medium">{feature.title}</h3>
                            <p className="text-muted-foreground mt-1 text-sm">{feature.description}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <Button size="lg" className="cursor-pointer" asChild>
                      <a href="#ecommerce">
                        Beli Sekarang
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="cursor-pointer" asChild>
                      <a href="#features">
                        Lihat Semua Produk
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Right: 3D Tilt Card - Bento Grid Effect */}
                <div
                  className="relative w-full flex justify-center lg:justify-end"
                  style={{ perspective: '1000px' }}
                >
                  {/* Cosmo Card with Auto-Animation + Interactive 3D Tilt */}
                  <div
                    className="relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group w-full max-w-xl lg:max-w-2xl min-h-[550px] md:min-h-[600px] border-2 border-border/50 hover:border-border cursor-pointer"
                    onMouseMove={(e) => {
                      setIsCardHovered(true)
                      handleCardMouseMove(e)
                    }}
                    onMouseLeave={handleCardMouseLeave}
                    style={{
                      transform: isCardHovered
                        ? `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) scale(1.02)`
                        : undefined,
                      animation: isCardHovered
                        ? 'none'
                        : currentSlide === 1
                          ? 'float 1.2s ease-in-out forwards'
                          : 'none',
                      transition: isCardHovered ? 'transform 0.1s ease-out' : 'none',
                    }}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      {/* Light Mode Image */}
                      <img
                        src="/CosmoTissue.jpg"
                        alt="Cosmo Tissue Product"
                        className="w-full h-full object-cover dark:hidden"
                      />
                      {/* Dark Mode Image */}
                      <img
                        src="/CosmoTissue-dark.jpg"
                        alt="Cosmo Tissue Product"
                        className="w-full h-full object-cover hidden dark:block"
                      />
                      {/* Green Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 opacity-90" />
                    </div>

                    {/* Cutout Shape - Diagonal Slash Covering Half */}
                    <div
                      className="absolute top-0 right-0 w-full h-full"
                      style={{
                        clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 0 100%)',
                        backgroundColor: 'transparent',
                        mixBlendMode: 'normal',
                      }}
                    >
                      {/* Light Mode Cutout */}
                      <img
                        src="/CosmoTissue.jpg"
                        alt="Cutout"
                        className="w-full h-full object-cover opacity-100 dark:hidden"
                        style={{
                          clipPath: 'inherit',
                        }}
                      />
                      {/* Dark Mode Cutout */}
                      <img
                        src="/CosmoTissue-dark.jpg"
                        alt="Cutout"
                        className="w-full h-full object-cover opacity-100 hidden dark:block"
                        style={{
                          clipPath: 'inherit',
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-8 md:p-12 h-full flex flex-col">
                      {/* Badge */}
                      <div className="mb-4">
                        <span className="inline-block text-xl font-bold text-white/90">
                          2024
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                        Cosmo Hygiene
                      </h3>

                      {/* Description */}
                      <p className="text-base text-white/80 max-w-xs mb-auto">
                        Tissue basah berkualitas premium untuk kebersihan sehari-hari
                      </p>

                      {/* Hover Indicator */}
                      <div className="mt-auto pt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {/* <span className="text-sm font-semibold text-white">
                          Lihat Produk
                        </span> */}
                        <svg
                          className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>

                    {/* Magnetic border effect */}
                    <div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border-2 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600"
                      style={{
                        clipPath: 'inset(0 round 1.5rem)',
                        WebkitMaskImage: 'linear-gradient(black, black)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                      }}
                    />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-50 pointer-events-none">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <button
            onClick={prevSlide}
            className={cn(
              'pointer-events-auto rounded-full p-3 bg-background/80 backdrop-blur-sm',
              'border-2 border-border/50 hover:border-border',
              'shadow-lg hover:shadow-xl transition-all duration-300',
              'hover:scale-110 active:scale-95',
              'group'
            )}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            className={cn(
              'pointer-events-auto rounded-full p-3 bg-background/80 backdrop-blur-sm',
              'border-2 border-border/50 hover:border-border',
              'shadow-lg hover:shadow-xl transition-all duration-300',
              'hover:scale-110 active:scale-95',
              'group'
            )}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
          </button>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-50 flex justify-center gap-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              'rounded-full transition-all duration-300',
              currentSlide === index
                ? 'w-12 h-3 bg-gradient-to-r from-blue-600 to-cyan-600'
                : 'w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 z-50">
        <div className="px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg">
          <span className="text-sm font-medium text-foreground">
            <span className="text-primary font-bold">{currentSlide + 1}</span>
            <span className="text-muted-foreground mx-1">/</span>
            <span className="text-muted-foreground">{totalSlides}</span>
          </span>
        </div>
      </div>
    </div>
  )
}
