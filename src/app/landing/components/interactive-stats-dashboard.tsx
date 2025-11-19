"use client"

import { useState, useEffect, useRef } from 'react'
import { Building2, Calendar, Star, Package, Truck, Award } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Stat {
  id: string
  icon: React.ComponentType<{ className?: string }>
  value: number
  suffix: string
  label: string
  color: string
  delay: number
}

const stats: Stat[] = [
  {
    id: 'clients',
    icon: Building2,
    value: 500,
    suffix: '+',
    label: 'Klien Aktif',
    color: 'from-violet-500 to-purple-500',
    delay: 0,
  },
  {
    id: 'experience',
    icon: Calendar,
    value: 15,
    suffix: '+',
    label: 'Tahun Pengalaman',
    color: 'from-blue-500 to-cyan-500',
    delay: 100,
  },
  {
    id: 'satisfaction',
    icon: Star,
    value: 100,
    suffix: '%',
    label: 'Kepuasan Pelanggan',
    color: 'from-amber-500 to-orange-500',
    delay: 200,
  },
  {
    id: 'products',
    icon: Package,
    value: 1000,
    suffix: '+',
    label: 'Produk Tersedia',
    color: 'from-emerald-500 to-green-500',
    delay: 300,
  },
  {
    id: 'delivery',
    icon: Truck,
    value: 24,
    suffix: 'h',
    label: 'Fast Delivery',
    color: 'from-pink-500 to-rose-500',
    delay: 400,
  },
  {
    id: 'certified',
    icon: Award,
    value: 100,
    suffix: '%',
    label: 'ISO Certified',
    color: 'from-indigo-500 to-blue-500',
    delay: 500,
  },
]

export function InteractiveStatsDashboard() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState<Record<string, number>>({})
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
            startCounting()
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  const startCounting = () => {
    stats.forEach((stat) => {
      setTimeout(() => {
        animateCount(stat.id, stat.value)
      }, stat.delay)
    })
  }

  const animateCount = (id: string, targetValue: number) => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = targetValue / steps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const newValue = Math.min(Math.floor(increment * currentStep), targetValue)

      setCounts((prev) => ({
        ...prev,
        [id]: newValue,
      }))

      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, duration / steps)
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Dipercaya oleh Ratusan Perusahaan
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Angka-angka yang membuktikan kualitas dan dedikasi kami
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            const currentCount = counts[stat.id] || 0
            const isActive = isVisible && currentCount > 0

            return (
              <div
                key={stat.id}
                className={cn(
                  'group relative rounded-3xl p-8 overflow-hidden',
                  'bg-gradient-to-br from-background to-muted/40',
                  'border-2 border-border/50',
                  'transition-all duration-700 ease-out',
                  'hover:border-border hover:shadow-2xl',
                  isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{
                  transitionDelay: `${stat.delay}ms`,
                }}
              >
                {/* Glow effect on hover */}
                <div
                  className={cn(
                    'absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl',
                    `bg-gradient-to-br ${stat.color}`
                  )}
                />

                {/* Animated border glow */}
                <div
                  className={cn(
                    'absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500',
                    isActive && 'animate-pulse opacity-30',
                    `bg-gradient-to-br ${stat.color}`
                  )}
                  style={{
                    clipPath: 'inset(0 round 1.5rem)',
                    WebkitMaskImage:
                      'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  {/* Icon with gradient background */}
                  <div
                    className={cn(
                      'p-4 rounded-2xl transition-all duration-500',
                      `bg-gradient-to-br ${stat.color}`,
                      'group-hover:scale-110 group-hover:rotate-3'
                    )}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Counter */}
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center gap-1">
                      <span
                        className={cn(
                          'text-5xl font-bold tabular-nums transition-all duration-300',
                          `bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`,
                          isActive && 'drop-shadow-lg'
                        )}
                      >
                        {currentCount}
                      </span>
                      <span
                        className={cn(
                          'text-3xl font-bold',
                          `bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`
                        )}
                      >
                        {stat.suffix}
                      </span>
                    </div>

                    {/* Label */}
                    <p className="text-base font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {stat.label}
                    </p>
                  </div>

                  {/* Progress indicator */}
                  <div className="w-full h-1 bg-muted/50 rounded-full overflow-hidden">
                    <div
                      className={cn(
                        'h-full rounded-full transition-all duration-2000 ease-out',
                        `bg-gradient-to-r ${stat.color}`
                      )}
                      style={{
                        width: isActive ? `${(currentCount / stat.value) * 100}%` : '0%',
                        transitionDelay: `${stat.delay}ms`,
                      }}
                    />
                  </div>

                  {/* Pulse ring for active counting */}
                  {isActive && currentCount < stat.value && (
                    <div className="absolute inset-0 rounded-3xl">
                      <div
                        className={cn(
                          'absolute inset-0 rounded-3xl animate-ping opacity-20',
                          `bg-gradient-to-br ${stat.color}`
                        )}
                      />
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Bergabunglah dengan ratusan perusahaan yang telah mempercayai kami
          </p>
        </div>
      </div>

      {/* CSS for grid animation */}
      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }
      `}</style>
    </section>
  )
}
