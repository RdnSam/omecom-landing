"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

type Testimonial = {
  name: string
  role: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Budi Santoso',
    role: 'Facility Manager, PT. Bank Mandiri',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-1',
    quote:
      'Produk chemical cleaning dari Omecom sangat efektif dan aman. Tim mereka profesional dan selalu responsif terhadap kebutuhan kami.',
  },
  {
    name: 'Siti Nurhaliza',
    role: 'Purchasing Manager, RS Siloam',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-1',
    quote: 'Cosmo Hygiene Wipes adalah produk favorit kami. Kualitas premium dengan harga yang kompetitif. Sangat recommended!',
  },
  {
    name: 'Hendra Wijaya',
    role: 'Operations Director, Plaza Indonesia',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-2',
    quote:
      'Kami menggunakan layanan cleaning Omecom untuk seluruh area plaza. Hasilnya selalu memuaskan dan konsisten. Tim yang sangat terlatih.',
  },
  {
    name: 'Linda Kartika',
    role: 'GM Operations, Hotel Mulia',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-2',
    quote:
      'Sudah 5 tahun kami mempercayakan kebutuhan cleaning hotel kepada Omecom. Kualitas produk dan layanan tidak pernah mengecewakan.',
  },
  {
    name: 'Rudi Hartono',
    role: 'Plant Manager, PT. Astra International',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-3',
    quote:
      'Chemical cleaning industrial grade dari Omecom sangat powerful. Sertifikasi ISO mereka memberikan kepercayaan extra untuk aplikasi manufaktur kami.',
  },
  {
    name: 'Dewi Anggraini',
    role: 'Procurement Head, Carrefour Indonesia',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-3',
    quote: 'Harga kompetitif, kualitas terjamin, dan delivery selalu tepat waktu. Partnership yang sangat baik untuk retail kami.',
  },
  {
    name: 'Ahmad Fauzi',
    role: 'Building Manager, Sudirman Tower',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-4',
    quote:
      'Tim Omecom sangat profesional dan dapat diandalkan. Jadwal cleaning maintenance selalu on-time dan hasil kerja excellent.',
  },
  {
    name: 'Maya Sari',
    role: 'Head of Housekeeping, Grand Hyatt',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-4',
    quote:
      'Produk hygiene dari Omecom membantu kami maintain standar kebersihan hotel bintang 5. Guest feedback sangat positif!',
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="container mx-auto px-8 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">Testimoni Klien</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Dipercaya oleh Perusahaan Terkemuka
          </h2>
          <p className="text-lg text-muted-foreground">
            Bergabung dengan ratusan perusahaan yang mempercayakan kebutuhan cleaning mereka kepada Omecom
          </p>
        </div>

        {/* Testimonials Masonry Grid */}
        <div className="columns-1 gap-4 md:columns-2 md:gap-6 lg:columns-3 lg:gap-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="mb-6 break-inside-avoid shadow-none lg:mb-4">
              <CardContent>
                <div className="flex items-start gap-4">
                  <Avatar className="bg-muted size-12 shrink-0">
                    <AvatarImage
                      alt={testimonial.name}
                      src={testimonial.image}
                      loading="lazy"
                      width="120"
                      height="120"
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(' ')
                        .map(n => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>

                  <div className="min-w-0 flex-1">
                    <a href="#" onClick={e => e.preventDefault()} className="cursor-pointer">
                      <h3 className="font-medium hover:text-primary transition-colors">{testimonial.name}</h3>
                    </a>
                    <span className="text-muted-foreground block text-sm tracking-wide">
                      {testimonial.role}
                    </span>
                  </div>
                </div>

                <blockquote className="mt-4">
                  <p className="text-sm leading-relaxed text-balance">{testimonial.quote}</p>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
