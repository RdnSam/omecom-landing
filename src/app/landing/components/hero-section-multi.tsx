"use client"

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { HeroSectionEnhanced } from './hero-section-enhanced'
import { BentoProductGrid } from './bento-product-grid'
import { HeroSplitView } from './hero-split-view'
import { cn } from '@/lib/utils'

export function HeroSectionMulti() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const totalSlides = 3

  // Auto-rotate carousel
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 20000) // 20 seconds per slide - lebih lama untuk baca konten

    return () => clearInterval(interval)
  }, [isPaused])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Container */}
      <div
        className="relative transition-transform duration-700 ease-in-out flex"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          width: `${totalSlides * 100}%`,
        }}
      >
        {/* Slide 1: Main Hero with Animated Background & Product Grid */}
        <div className="w-full flex-shrink-0 flex items-center justify-center">
          <div className="w-full">
            <HeroSectionEnhanced />
          </div>
        </div>

        {/* Slide 2: Bento Grid 3D Product Showcase */}
        <div className="w-full flex-shrink-0 flex items-center justify-center">
          <div className="w-full">
            <BentoProductGrid />
          </div>
        </div>

        {/* Slide 3: Split View - Text + Green Card */}
        <div className="w-full flex-shrink-0 flex items-center justify-center">
          <div className="w-full">
            <HeroSplitView />
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
                ? 'w-12 h-3 bg-gradient-to-r from-violet-600 to-blue-600'
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
