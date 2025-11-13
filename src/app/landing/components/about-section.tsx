"use client"

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { CardDecorator } from '@/components/ui/card-decorator'
import { Award, Shield, Users, Target } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Kualitas Terjamin',
    description: 'Produk tersertifikasi ISO 9001:2008 dan NSF, memastikan standar kualitas internasional yang konsisten.'
  },
  {
    icon: Award,
    title: 'Pengalaman Terpercaya',
    description: 'Lebih dari 20 tahun pengalaman melayani berbagai industri dengan solusi cleaning terbaik.'
  },
  {
    icon: Users,
    title: 'Tim Profesional',
    description: 'Didukung tim ahli yang terlatih dan bersertifikat untuk memberikan layanan terbaik kepada Anda.'
  },
  {
    icon: Target,
    title: 'Solusi Lengkap',
    description: 'Menyediakan produk dan layanan cleaning komprehensif untuk memenuhi semua kebutuhan kebersihan Anda.'
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Siapa Kami
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            PT. Omecom Mitra Solusi
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Kami adalah penyedia solusi kebersihan terpercaya di Indonesia yang telah melayani berbagai industri dengan
            produk berkualitas tinggi dan layanan profesional. Dengan sertifikasi ISO 9001:2008 dan NSF, kami berkomitmen
            memberikan solusi terbaik untuk kebutuhan cleaning Anda.
          </p>
        </div>

        {/* Modern Values Grid with Enhanced Design */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-4 mb-12">
          {values.map((value, index) => (
            <Card key={index} className='group shadow-xs py-2'>
              <CardContent className='p-8'>
                <div className='flex flex-col items-center text-center'>
                  <CardDecorator>
                    <value.icon className='h-6 w-6' aria-hidden />
                  </CardDecorator>
                  <h3 className='mt-6 font-medium text-balance'>{value.title}</h3>
                  <p className='text-muted-foreground mt-3 text-sm'>{value.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-muted-foreground">Dipercaya oleh ratusan perusahaan di Indonesia</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="cursor-pointer" asChild>
              <a href="#contact">
                Hubungi Kami
              </a>
            </Button>
            <Button size="lg" variant="outline" className="cursor-pointer" asChild>
              <a href="#features">
                Lihat Produk
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
