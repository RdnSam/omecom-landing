"use client"

import { ShoppingBag, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function EcommerceSection() {
  const ecommercePlatforms = [
    {
      name: 'Shopee',
      icon: '/shopee-logo.svg', // Replace with actual logo path
      url: 'https://shopee.co.id/Tisu-higienis-standar-industri-dan-profesional-COSMO*-MR-50-i.257362637.24016739580',
      description: 'Belanja produk Omecom di Shopee dengan berbagai promo menarik',
      color: 'bg-orange-500',
    },
    {
      name: 'Tokopedia',
      icon: '/tokopedia-logo.svg', // Replace with actual logo path
      url: 'https://www.tokopedia.com/omecommitrasolusi',
      description: 'Dapatkan produk Omecom terlengkap di Tokopedia',
      color: 'bg-green-500',
    },
  ]

  return (
    <section id="ecommerce" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-1.5 text-sm">
          <ShoppingBag className="h-4 w-4" />
          <span className="font-medium">Belanja Online</span>
        </div>

        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Belanja Produk Omecom
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
          Dapatkan produk Omecom secara mudah melalui platform e-commerce terpercaya
        </p>

        <div className="grid gap-8 sm:grid-cols-2">
          {ecommercePlatforms.map((platform) => (
            <Card key={platform.name} className="group overflow-hidden transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6 flex items-center justify-center">
                  <div className={`flex h-20 w-20 items-center justify-center rounded-2xl ${platform.color} text-white`}>
                    <ShoppingBag className="h-10 w-10" />
                  </div>
                </div>

                <h3 className="mb-3 text-2xl font-bold">{platform.name}</h3>
                <p className="mb-6 text-muted-foreground">{platform.description}</p>

                <Button
                  asChild
                  className="w-full group-hover:scale-105 transition-transform"
                  size="lg"
                >
                  <a href={platform.url} target="_blank" rel="noopener noreferrer">
                    Kunjungi Toko
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
