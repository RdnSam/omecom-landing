"use client"

import { CheckCircle2, Sparkles, Shield, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Image3D } from '@/components/image-3d'

const chemicalFeatures = [
  {
    icon: CheckCircle2,
    title: 'Formula Premium',
    description: 'Diformulasikan khusus untuk hasil pembersihan maksimal'
  },
  {
    icon: Shield,
    title: 'Aman & Terpercaya',
    description: 'Tersertifikasi ISO dan NSF untuk keamanan penggunaan'
  },
  {
    icon: Sparkles,
    title: 'Multi-Purpose',
    description: 'Cocok untuk berbagai jenis permukaan dan kebutuhan'
  },
  {
    icon: Award,
    title: 'Kualitas Terjamin',
    description: 'Standar internasional dengan hasil konsisten'
  }
]

const hygieneFeatures = [
  {
    icon: Sparkles,
    title: 'Antibakteri Efektif',
    description: 'Membunuh 99.9% kuman dan bakteri berbahaya'
  },
  {
    icon: Shield,
    title: 'Lembut di Kulit',
    description: 'Formula hypoallergenic aman untuk kulit sensitif'
  },
  {
    icon: CheckCircle2,
    title: 'Praktis & Higienis',
    description: 'Kemasan portable untuk penggunaan kapan saja'
  },
  {
    icon: Award,
    title: 'Wangi Segar',
    description: 'Aroma yang menyegarkan dan tahan lama'
  }
]

export function ProductShowcaseSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">Produk Unggulan</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Produk Berkualitas Tinggi untuk Setiap Kebutuhan
          </h2>
          <p className="text-lg text-muted-foreground">
            Rangkaian produk cleaning terlengkap dengan standar kualitas internasional yang sudah dipercaya oleh ribuan pelanggan
          </p>
        </div>

        {/* First Product Section - Chemical Cleaning */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16 mb-24">
          {/* Left Image */}
          <Image3D
            // lightSrc="/feature-1-light.png"
            // darkSrc="/feature-1-dark.png"
             lightSrc="/CosmoTissue.jpg"
            darkSrc="/CosmoTissue-dark.jpg"
            alt="Chemical Cleaning Products"
            direction="left"
          />
          {/* Right Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                Chemical Cleaning Industrial Grade
              </h3>
              <p className="text-muted-foreground text-base text-pretty">
                Produk pembersih kimia profesional yang dirancang khusus untuk kebutuhan industri dan komersial.
                Efektif mengatasi noda membandel dengan hasil maksimal dan efisien.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {chemicalFeatures.map((feature, index) => (
                <li key={index} className="group hover:bg-accent/5 flex items-start gap-3 p-2 rounded-lg transition-colors">
                  <div className="mt-0.5 flex shrink-0 items-center justify-center">
                    <feature.icon className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium">{feature.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pe-4 pt-2">
              <Button size="lg" className="cursor-pointer" asChild>
                <a href="#ecommerce">
                  Beli Sekarang
                </a>
              </Button>
              <Button size="lg" variant="outline" className="cursor-pointer" asChild>
                <a href="#contact">
                  Konsultasi Gratis
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Second Product Section - Hygiene Products - Flipped Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16">
          {/* Left Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                Cosmo Hygiene Wipes - Premium Quality
              </h3>
              <p className="text-muted-foreground text-base text-pretty">
                Tissue basah premium dengan formula antibakteri yang lembut di kulit. Solusi praktis untuk kebersihan
                sehari-hari yang aman untuk seluruh keluarga, bahkan kulit sensitif sekalipun.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {hygieneFeatures.map((feature, index) => (
                <li key={index} className="group hover:bg-accent/5 flex items-start gap-3 p-2 rounded-lg transition-colors">
                  <div className="mt-0.5 flex shrink-0 items-center justify-center">
                    <feature.icon className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium">{feature.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pe-4 pt-2">
              <Button size="lg" className="cursor-pointer" asChild>
                <a href="#ecommerce">
                  Beli Sekarang
                </a>
              </Button>
              <Button size="lg" variant="outline" className="cursor-pointer" asChild>
                <a href="#features">
                  Lihat Semua Produk
                </a>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <Image3D
            lightSrc="/CosmiTissue.jpg"
            darkSrc="/CosmoTissue-dark.jpg"
            alt="Cosmo Hygiene Products"
            direction="right"
            className="order-1 lg:order-2"
          />
        </div>
      </div>
    </section>
  )
}
