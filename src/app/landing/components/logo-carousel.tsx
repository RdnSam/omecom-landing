"use client"

import Image from 'next/image'
import { Card } from '@/components/ui/card'

// Omecom client companies data
const omecomClients = [
  { name: 'Sarihusada', logo: '/clients/sarihusada.png' },
  { name: 'Universal Robina', logo: '/clients/universal-robina.png' },
  { name: 'THG', logo: '/clients/thc.png' },
  { name: 'Mayora', logo: '/clients/mayora.png' },
  { name: 'Coca-Cola', logo: '/clients/coca-cola.png' },
  { name: 'Indesso', logo: '/clients/indesso.png' },
  { name: 'Global Dairi Alami', logo: '/clients/global-dairi-alami.png' },
  { name: 'Sugizindo', logo: '/clients/sugizindo.png' },
  { name: 'Cimory', logo: '/clients/cimory.png' },
  { name: 'PT Doulton', logo: '/clients/pt-doulton.png' },
  { name: 'Kapal Api', logo: '/clients/kapal-api.png' },
  { name: 'Sidomuncul', logo: '/clients/sidomuncul.png' },
  { name: 'PT Delta Jakarta', logo: '/clients/pt-delta-jakarta.png' },
  { name: 'Nutricia', logo: '/clients/nutricia.png' },
  { name: 'EHWA', logo: '/clients/ehwa.png' },
] as const

export function LogoCarousel() {
  return (
    <section className="pb-12 sm:pb-16 lg:pb-20 pt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium text-muted-foreground mb-8">
            Dipercaya oleh Perusahaan Terkemuka di Indonesia
          </p>

          {/* Logo Carousel with Fade Effect */}
          <div className="relative">
            {/* Left Fade */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />

            {/* Right Fade */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Logo Container */}
            <div className="overflow-hidden">
              <div className="flex animate-logo-scroll space-x-8 sm:space-x-12">
                {/* First set of logos */}
                {omecomClients.map((client, index) => (
                  <Card
                    key={`first-${index}`}
                    className="flex-shrink-0 flex items-center justify-center h-28 w-52 opacity-90 hover:opacity-100 transition-opacity duration-300 border-0 shadow-none bg-transparent"
                  >
                    <div className="relative w-44 h-24">
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        fill
                        className="object-contain transition-all duration-300"
                      />
                    </div>
                  </Card>
                ))}
                {/* Second set for seamless loop - identical to first */}
                {omecomClients.map((client, index) => (
                  <Card
                    key={`second-${index}`}
                    className="flex-shrink-0 flex items-center justify-center h-28 w-52 opacity-90 hover:opacity-100 transition-opacity duration-300 border-0 shadow-none bg-transparent"
                  >
                    <div className="relative w-44 h-24">
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        fill
                        className="object-contain transition-all duration-300"
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
