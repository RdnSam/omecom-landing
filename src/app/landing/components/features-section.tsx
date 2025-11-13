"use client"

import {
  Droplet,
  Sparkles,
  Users,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const productCategories = [
  {
    icon: Droplet,
    title: 'Chemical Cleaning',
    description: 'Produk pembersih kimia berkualitas tinggi untuk kebutuhan industri dan komersial',
    features: [
      'Formula berkualitas profesional',
      'Efektif untuk berbagai permukaan',
      'Aman dan ramah lingkungan',
      'Tersedia dalam berbagai ukuran'
    ],
    color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
  },
  {
    icon: Sparkles,
    title: 'Hygiene Products',
    description: 'Rangkaian produk hygiene untuk menjaga kebersihan dan kesehatan',
    features: [
      'Tissue basah premium (Cosmo)',
      'Hand sanitizer antibakteri',
      'Produk personal care',
      'Standar kualitas internasional'
    ],
    color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
  },
  {
    icon: Users,
    title: 'Professional Cleaning Services',
    description: 'Layanan pembersihan profesional dengan tim berpengalaman dan peralatan modern',
    features: [
      'Tim terlatih dan bersertifikat',
      'Peralatan cleaning modern',
      'Jadwal fleksibel',
      'Jaminan hasil maksimal'
    ],
    color: 'bg-green-500/10 text-green-600 dark:text-green-400'
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">Produk & Layanan</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Solusi Lengkap untuk Kebersihan Anda
          </h2>
          <p className="text-lg text-muted-foreground">
            Omecom menyediakan rangkaian produk dan layanan cleaning terlengkap untuk memenuhi berbagai kebutuhan industri, komersial, dan personal
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${category.color}`}>
                  <category.icon className="h-8 w-8" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-2xl font-bold">{category.title}</h3>

                {/* Description */}
                <p className="mb-6 text-muted-foreground">{category.description}</p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <a href="#contact">
                    Hubungi Kami
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-3 text-sm">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <span>Tersertifikasi ISO 9001:2008 & NSF - Jaminan Kualitas Terpercaya</span>
          </div>
        </div>
      </div>
    </section>
  )
}
