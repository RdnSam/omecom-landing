"use client"

import { useState, useEffect } from 'react'
import {
  Sparkles,
  Shield,
  Package,
  Truck,
  Store,
  Award,
  Droplet,
  Leaf,
  Recycle,
  Users,
  HeadphonesIcon,
  CheckCircle
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface Product {
  id: string
  name: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  borderColor: string
  position: { x: number; y: number }
  connections: string[]
  href: string
}

const products: Product[] = [
  {
    id: 'chemical',
    name: 'Chemical Cleaning',
    icon: Sparkles,
    color: 'from-violet-500 to-purple-500',
    borderColor: 'border-violet-500',
    position: { x: 25, y: 15 },
    connections: ['services', 'certification'],
    href: '#features',
  },
  {
    id: 'hygiene',
    name: 'Hygiene Products',
    icon: Shield,
    color: 'from-blue-500 to-cyan-500',
    borderColor: 'border-blue-500',
    position: { x: 50, y: 10 },
    connections: ['ecommerce', 'services'],
    href: '#features',
  },
  {
    id: 'certification',
    name: 'Certified Quality',
    icon: Award,
    color: 'from-indigo-500 to-blue-500',
    borderColor: 'border-indigo-500',
    position: { x: 75, y: 15 },
    connections: ['support'],
    href: '#about',
  },
  {
    id: 'industrial',
    name: 'Industrial Solutions',
    icon: Droplet,
    color: 'from-cyan-500 to-teal-500',
    borderColor: 'border-cyan-500',
    position: { x: 15, y: 40 },
    connections: ['chemical', 'eco'],
    href: '#features',
  },
  {
    id: 'services',
    name: 'Cleaning Services',
    icon: Package,
    color: 'from-emerald-500 to-green-500',
    borderColor: 'border-emerald-500',
    position: { x: 40, y: 35 },
    connections: ['delivery', 'team'],
    href: '#features',
  },
  {
    id: 'eco',
    name: 'Eco-Friendly',
    icon: Leaf,
    color: 'from-green-500 to-lime-500',
    borderColor: 'border-green-500',
    position: { x: 65, y: 38 },
    connections: ['services', 'sustainability'],
    href: '#about',
  },
  {
    id: 'team',
    name: 'Professional Team',
    icon: Users,
    color: 'from-amber-500 to-yellow-500',
    borderColor: 'border-amber-500',
    position: { x: 85, y: 45 },
    connections: ['support'],
    href: '#about',
  },
  {
    id: 'delivery',
    name: 'Fast Delivery',
    icon: Truck,
    color: 'from-orange-500 to-amber-500',
    borderColor: 'border-orange-500',
    position: { x: 20, y: 65 },
    connections: ['ecommerce'],
    href: '#ecommerce',
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    icon: Store,
    color: 'from-pink-500 to-rose-500',
    borderColor: 'border-pink-500',
    position: { x: 45, y: 70 },
    connections: ['quality'],
    href: '#ecommerce',
  },
  {
    id: 'sustainability',
    name: 'Sustainability',
    icon: Recycle,
    color: 'from-teal-500 to-emerald-500',
    borderColor: 'border-teal-500',
    position: { x: 70, y: 65 },
    connections: ['quality'],
    href: '#about',
  },
  {
    id: 'support',
    name: '24/7 Support',
    icon: HeadphonesIcon,
    color: 'from-purple-500 to-pink-500',
    borderColor: 'border-purple-500',
    position: { x: 30, y: 88 },
    connections: ['quality'],
    href: '#contact',
  },
  {
    id: 'quality',
    name: 'Quality Control',
    icon: CheckCircle,
    color: 'from-rose-500 to-red-500',
    borderColor: 'border-rose-500',
    position: { x: 60, y: 90 },
    connections: [],
    href: '#about',
  },
]

export function AnimatedProductGrid() {
  const [activeProduct, setActiveProduct] = useState<string>('services')
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  // Rotate active product
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProduct((current) => {
        const currentIndex = products.findIndex((p) => p.id === current)
        const nextIndex = (currentIndex + 1) % products.length
        return products[nextIndex].id
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const isConnected = (productId: string) => {
    if (hoveredProduct) {
      const hovered = products.find((p) => p.id === hoveredProduct)
      return (
        productId === hoveredProduct ||
        hovered?.connections.includes(productId) ||
        products.find((p) => p.id === productId)?.connections.includes(hoveredProduct)
      )
    }
    const active = products.find((p) => p.id === activeProduct)
    return (
      productId === activeProduct ||
      active?.connections.includes(productId) ||
      products.find((p) => p.id === productId)?.connections.includes(activeProduct)
    )
  }

  const getConnectionPath = (from: Product, to: Product) => {
    const startX = from.position.x
    const startY = from.position.y
    const endX = to.position.x
    const endY = to.position.y

    const midX = (startX + endX) / 2
    const midY = (startY + endY) / 2

    // Create a smooth curve
    return `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`
  }

  return (
    <div className="relative w-full h-[600px] max-w-5xl mx-auto">
      {/* SVG Layer for connections */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Gradient for active connections */}
          <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(139, 92, 246)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.6" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Draw all connections */}
        {products.map((product) =>
          product.connections.map((targetId) => {
            const target = products.find((p) => p.id === targetId)
            if (!target) return null

            const isActive =
              (hoveredProduct
                ? product.id === hoveredProduct || targetId === hoveredProduct
                : product.id === activeProduct || targetId === activeProduct)

            return (
              <g key={`${product.id}-${targetId}`}>
                {/* Shadow/glow line */}
                <path
                  d={getConnectionPath(product, target)}
                  fill="none"
                  stroke={isActive ? 'url(#activeGradient)' : 'currentColor'}
                  strokeWidth={isActive ? '0.3' : '0.15'}
                  className={cn(
                    'transition-all duration-500',
                    isActive
                      ? 'opacity-100 stroke-primary'
                      : 'opacity-20 stroke-muted-foreground'
                  )}
                  filter="url(#glow)"
                  strokeDasharray={isActive ? '0' : '2 2'}
                  style={{
                    strokeDashoffset: isActive ? 0 : undefined,
                  }}
                />
              </g>
            )
          })
        )}
      </svg>

      {/* Product nodes */}
      {products.map((product) => {
        const Icon = product.icon
        const isActive = isConnected(product.id)
        const isMainActive = activeProduct === product.id || hoveredProduct === product.id

        return (
          <div
            key={product.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
            style={{
              left: `${product.position.x}%`,
              top: `${product.position.y}%`,
            }}
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            {/* Product card */}
            <a
              href={product.href}
              className={cn(
                'relative bg-background rounded-2xl p-5 transition-all duration-500 shadow-lg',
                'border-2 cursor-pointer block',
                isActive
                  ? 'scale-110 shadow-2xl'
                  : 'scale-100 border-border opacity-60 hover:opacity-100',
                // Colored border when active
                isMainActive ? product.borderColor : 'border-border'
              )}
              style={{
                width: isMainActive ? '130px' : '110px',
                height: isMainActive ? '130px' : '110px',
              }}
            >
              {/* Icon with gradient */}
              <div
                className={cn(
                  'w-full h-full flex flex-col items-center justify-center gap-2.5',
                  'transition-all duration-500'
                )}
              >
                <div
                  className={cn(
                    'p-2.5 rounded-xl bg-gradient-to-br transition-all duration-500',
                    product.color,
                    isActive ? 'opacity-100 scale-110' : 'opacity-60 scale-100'
                  )}
                >
                  <Icon
                    className={cn(
                      'transition-all duration-500 text-white',
                      isMainActive ? 'w-7 h-7' : 'w-5 h-5'
                    )}
                  />
                </div>

                {/* Product name */}
                <p
                  className={cn(
                    'text-center text-[10px] font-semibold transition-all duration-500 leading-tight',
                    isActive ? 'opacity-100' : 'opacity-60'
                  )}
                >
                  {product.name}
                </p>
              </div>

              {/* Subtle inner glow for active product */}
              {isMainActive && (
                <div
                  className={cn(
                    'absolute inset-0 rounded-2xl bg-gradient-to-br opacity-5',
                    product.color
                  )}
                />
              )}
            </a>
          </div>
        )
      })}
    </div>
  )
}
