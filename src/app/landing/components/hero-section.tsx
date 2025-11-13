"use client"

import { useState, useEffect } from 'react'
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DotPattern } from '@/components/dot-pattern'

const heroSlides = [
  {
    id: 1,
    title: 'Cosmo Hygiene Wipes',
    subtitle: 'Tissue Basah Berkualitas Premium',
    description: 'Solusi praktis untuk kebersihan sehari-hari dengan formula antibakteri yang lembut di kulit',
    cta: 'Lihat Produk',
    href: '#features',
  },
  {
    id: 2,
    title: 'Chemical Cleaning Professional',
    subtitle: 'Produk Pembersih Industri Terpercaya',
    description: 'Rangkaian lengkap chemical cleaning untuk berbagai kebutuhan industri dan komersial',
    cta: 'Jelajahi Katalog',
    href: '#features',
  },
  {
    id: 3,
    title: 'Professional Cleaning Services',
    subtitle: 'Layanan Kebersihan Profesional',
    description: 'Tim profesional berpengalaman dengan peralatan modern untuk hasil maksimal',
    cta: 'Hubungi Kami',
    href: '#contact',
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-play carousel
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const currentContent = heroSlides[currentSlide]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 pt-20 sm:pt-32 pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <DotPattern className="opacity-100" size="md" fadeStyle="ellipse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className="mx-auto max-w-4xl text-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Announcement Badge */}
          <div className="mb-8 flex justify-center animate-in fade-in slide-in-from-top-4 duration-700">
            <Badge variant="outline" className="px-4 py-2 border-primary/50">
              <Sparkles className="w-3 h-3 mr-2 fill-primary" />
              Tersertifikasi ISO 9001:2008 & NSF
              <ArrowRight className="w-3 h-3 ml-2" />
            </Badge>
          </div>

          {/* Carousel Content with smooth transition */}
          <div className="relative min-h-[400px] sm:min-h-[450px]">
            <div
              key={currentSlide}
              className="animate-in fade-in slide-in-from-right-4 duration-500"
            >
              {/* Subtitle */}
              <p className="mb-4 text-lg text-primary font-semibold">
                {currentContent.subtitle}
              </p>

              {/* Main Headline */}
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  {currentContent.title}
                </span>
              </h1>

              {/* Description */}
              <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                {currentContent.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" className="text-base cursor-pointer" asChild>
                  <a href={currentContent.href}>
                    {currentContent.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="text-base cursor-pointer" asChild>
                  <a href="#ecommerce">
                    Belanja Online
                  </a>
                </Button>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between -translate-y-1/2 px-4 sm:-mx-12">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full h-12 w-12 bg-background/80 backdrop-blur-sm hover:bg-background"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full h-12 w-12 bg-background/80 backdrop-blur-sm hover:bg-background"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="mt-8 flex justify-center gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
