"use client"

import { useState, useRef, MouseEvent } from 'react'
import { Sparkles, Shield, Package, Leaf, Award, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BentoProduct {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  gradient: string
  size: 'large' | 'small'
  badge?: string
}

const bentoProducts: BentoProduct[] = [
  {
    id: 'chemical',
    title: 'Cosmo Hygiene',
    description: 'Tissue basah berkualitas premium untuk kebersihan sehari-hari',
    icon: Sparkles,
    gradient: 'from-emerald-600 via-green-600 to-teal-600',
    size: 'large',
    badge: '2024',
  },
  {
    id: 'certification',
    title: 'ISO Certified',
    description: 'Terjamin kualitas',
    icon: Award,
    gradient: 'from-indigo-500 to-blue-500',
    size: 'small',
  },
  {
    id: 'eco',
    title: 'Eco-Friendly',
    description: 'Ramah lingkungan',
    icon: Leaf,
    gradient: 'from-green-500 to-emerald-500',
    size: 'small',
  },
  {
    id: 'hygiene',
    title: 'Hygiene Products',
    description: 'Tissue basah, sanitizer, dan produk kebersihan premium',
    icon: Shield,
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    size: 'large',
  },
  {
    id: 'services',
    title: 'Cleaning Services',
    description: 'Tim profesional dengan peralatan modern',
    icon: Package,
    gradient: 'from-emerald-500 via-green-500 to-teal-500',
    size: 'large',
  },
  {
    id: 'team',
    title: 'Expert Team',
    description: 'Berpengalaman',
    icon: Users,
    gradient: 'from-amber-500 to-orange-500',
    size: 'small',
  },
]

export function BentoProductGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, productId: string) => {
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

  const handleMouseLeave = () => {
    setHoveredId(null)
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Produk & Layanan Unggulan
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solusi lengkap untuk kebutuhan kebersihan dan hygiene bisnis Anda
          </p>
        </div>

        {/* Bento Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-7xl mx-auto"
          style={{ perspective: '1000px' }}
        >
          {bentoProducts.map((product) => {
            const Icon = product.icon
            const isHovered = hoveredId === product.id
            const isLarge = product.size === 'large'

            return (
              <div
                key={product.id}
                className={cn(
                  'group relative cursor-pointer',
                  isLarge ? 'md:col-span-2 lg:col-span-3' : 'md:col-span-2 lg:col-span-2',
                  isLarge ? 'md:row-span-2' : 'md:row-span-1'
                )}
                onMouseMove={(e) => {
                  setHoveredId(product.id)
                  handleMouseMove(e, product.id)
                }}
                onMouseLeave={handleMouseLeave}
              >
                {/* Card */}
                <div
                  className={cn(
                    'relative h-full min-h-[200px] rounded-3xl overflow-hidden',
                    'border-2 border-border/50',
                    'transition-all duration-500 ease-out',
                    'hover:border-border',
                    'shadow-lg hover:shadow-2xl',
                    // Special styling for Cosmo card
                    product.id === 'chemical' ? 'p-0' : 'p-6 bg-gradient-to-br from-background to-muted/40'
                  )}
                  style={{
                    transform: isHovered
                      ? `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) scale(1.02)`
                      : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
                    transition: 'transform 0.1s ease-out',
                  }}
                >
                  {/* Special background for Cosmo card */}
                  {product.id === 'chemical' ? (
                    <>
                      {/* Background image */}
                      <div className="absolute inset-0">
                        <img
                          src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&auto=format&fit=crop"
                          alt="Product background"
                          className="w-full h-full object-cover"
                        />
                        {/* Green overlay */}
                        <div className={cn(
                          'absolute inset-0',
                          `bg-gradient-to-br ${product.gradient} opacity-90`
                        )} />
                      </div>

                      {/* Cutout shape for logo/text transparency */}
                      <div
                        className="absolute top-8 right-8 w-48 h-48 rounded-tl-[4rem]"
                        style={{
                          clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 30% 0)',
                          backgroundColor: 'transparent',
                          mixBlendMode: 'normal',
                        }}
                      >
                        <img
                          src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&auto=format&fit=crop"
                          alt="Cutout"
                          className="w-full h-full object-cover opacity-100"
                          style={{
                            clipPath: 'inherit',
                          }}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Gradient overlay - shifts on hover */}
                      <div
                        className={cn(
                          'absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500',
                          `bg-gradient-to-br ${product.gradient}`
                        )}
                        style={{
                          transform: isHovered
                            ? `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`
                            : 'translate(0, 0)',
                        }}
                      />

                      {/* Glow effect */}
                      <div
                        className={cn(
                          'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl',
                          `bg-gradient-to-br ${product.gradient}`
                        )}
                        style={{
                          transform: 'scale(0.8)',
                        }}
                      />
                    </>
                  )}

                  {/* Content */}
                  <div className={cn(
                    'relative z-10 h-full flex flex-col',
                    product.id === 'chemical' && 'p-6'
                  )}>
                    {/* Badge */}
                    {product.badge && (
                      <div className={cn(
                        product.id === 'chemical' ? 'mb-4' : 'absolute top-0 right-0'
                      )}>
                        <span className={cn(
                          'inline-block px-3 py-1.5 text-sm font-bold',
                          product.id === 'chemical'
                            ? 'text-white/90'
                            : 'rounded-full bg-gradient-to-r text-white ' + product.gradient
                        )}>
                          {product.badge}
                        </span>
                      </div>
                    )}

                    {/* Icon - hide for Cosmo card */}
                    {product.id !== 'chemical' && (
                      <div
                        className={cn(
                          'mb-4 p-3 rounded-2xl w-fit',
                          'bg-gradient-to-br',
                          product.gradient,
                          'transform transition-transform duration-500',
                          'group-hover:scale-110 group-hover:rotate-3'
                        )}
                      >
                        <Icon className={cn(
                          'text-white transition-all duration-500',
                          isLarge ? 'w-8 h-8' : 'w-6 h-6'
                        )} />
                      </div>
                    )}

                    {/* Title */}
                    <h3 className={cn(
                      'font-bold mb-2 transition-colors duration-300',
                      isLarge ? 'text-2xl' : 'text-lg',
                      product.id === 'chemical'
                        ? 'text-white text-4xl md:text-5xl leading-tight'
                        : 'group-hover:text-foreground text-foreground/90'
                    )}>
                      {product.title}
                    </h3>

                    {/* Description */}
                    <p className={cn(
                      'transition-all duration-300',
                      isLarge ? 'text-base' : 'text-sm',
                      product.id === 'chemical'
                        ? 'text-white/80 text-base max-w-xs'
                        : 'text-muted-foreground group-hover:text-muted-foreground/90'
                    )}>
                      {product.description}
                    </p>

                    {/* Hover indicator */}
                    {isLarge && product.id !== 'chemical' && (
                      <div className={cn(
                        'mt-auto pt-4 flex items-center gap-2',
                        'opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                      )}>
                        <span className="text-sm font-medium bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                          Lihat Detail
                        </span>
                        <svg
                          className="w-4 h-4 text-violet-600 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}

                    {/* Special hover indicator for Cosmo card */}
                    {product.id === 'chemical' && (
                      <div className={cn(
                        'mt-auto pt-6 flex items-center gap-2',
                        'opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                      )}>
                        <span className="text-sm font-semibold text-white">
                          Lihat Produk
                        </span>
                        <svg
                          className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Magnetic border effect */}
                  <div
                    className={cn(
                      'absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100',
                      'transition-opacity duration-300 pointer-events-none',
                      'border-2',
                      `bg-gradient-to-br ${product.gradient}`
                    )}
                    style={{
                      clipPath: 'inset(0 round 1.5rem)',
                      WebkitMaskImage: 'linear-gradient(black, black)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
