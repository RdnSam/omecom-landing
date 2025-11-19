"use client"

import { cn } from '@/lib/utils'

interface ProductCardWithImageProps {
  year?: string
  title: string
  subtitle?: string
  companyName?: string
  description?: string
  imageSrc: string
  gradientColors?: string
  className?: string
}

export function ProductCardWithImage({
  year = '2024',
  title,
  subtitle,
  companyName = 'PT. Omecom Mitra Solusi',
  description,
  imageSrc,
  gradientColors = 'from-emerald-600 via-green-600 to-teal-600',
  className,
}: ProductCardWithImageProps) {
  return (
    <div
      className={cn(
        'relative rounded-[3rem] overflow-hidden shadow-2xl hover:shadow-3xl',
        'transition-all duration-500 hover:scale-[1.02] group',
        className
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Colored Overlay */}
        <div className={cn('absolute inset-0 bg-gradient-to-br opacity-90', gradientColors)} />
      </div>

      {/* Cutout Shape - Top Right */}
      <div
        className="absolute top-0 right-0 w-64 h-64"
        style={{
          clipPath: 'polygon(100% 0, 100% 100%, 20% 100%, 50% 0)',
        }}
      >
        <img
          src={imageSrc}
          alt="Cutout"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Cutout Shape - Bottom Right (Speech bubble style) */}
      <div
        className="absolute bottom-12 right-12 w-56 h-40"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 70%, 85% 100%, 0 70%)',
        }}
      >
        <img
          src={imageSrc}
          alt="Cutout bubble"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-12 min-h-[600px] flex flex-col justify-between">
        {/* Top Section */}
        <div className="space-y-6">
          {/* Year Badge */}
          {year && (
            <div className="inline-block">
              <span className="text-2xl font-bold text-white/90">{year}</span>
            </div>
          )}

          {/* Title */}
          <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight max-w-md">
            {title}
            {subtitle && <span className="block mt-2">{subtitle}</span>}
          </h2>
        </div>

        {/* Bottom Section */}
        <div className="space-y-6">
          {/* Company Logo/Text */}
          {companyName && (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-xl font-bold text-white">{companyName}</span>
            </div>
          )}

          {/* Description */}
          {description && (
            <p className="text-white/80 text-lg max-w-md">{description}</p>
          )}
        </div>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-white to-transparent pointer-events-none" />
    </div>
  )
}
