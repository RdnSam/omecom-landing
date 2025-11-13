"use client"

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const blogs = [
    {
      id: 1,
      image: 'https://ui.shadcn.com/placeholder.svg',
      category: 'Produk Baru',
      title: 'Peluncuran Cosmo Hygiene Wipes Terbaru',
      description:
        'Mengenal produk tissue basah premium terbaru dari Omecom dengan formula antibakteri yang lebih efektif dan aman untuk kulit sensitif.',
    },
    {
      id: 2,
      image: 'https://ui.shadcn.com/placeholder.svg',
      category: 'Tips & Trik',
      title: 'Panduan Memilih Chemical Cleaning Yang Tepat',
      description:
        'Tips memilih produk chemical cleaning yang sesuai dengan kebutuhan industri Anda untuk hasil maksimal dan efisien.',
    },
    {
      id: 3,
      image: 'https://ui.shadcn.com/placeholder.svg',
      category: 'Berita Perusahaan',
      title: 'Omecom Raih Sertifikasi ISO 9001:2008',
      description:
        'Omecom kembali menegaskan komitmen terhadap kualitas dengan mempertahankan sertifikasi ISO 9001:2008 untuk tahun ini.',
    },
  ]

export function BlogSection() {
  return (
    <section id="blog" className="py-24 sm:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">Berita & Artikel</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Berita Terbaru
          </h2>
          <p className="text-lg text-muted-foreground">
            Update terkini seputar produk, tips kebersihan, dan informasi terbaru dari Omecom
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {blogs.map(blog => (
            <Card key={blog.id} className="overflow-hidden py-0">
              <CardContent className="px-0">
                <div className="aspect-video">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={225}
                    className="size-full object-cover dark:invert dark:brightness-[0.95]"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <p className="text-muted-foreground text-xs tracking-widest uppercase">
                    {blog.category}
                  </p>
                  <a
                    href="#"
                    onClick={e => e.preventDefault()}
                    className="cursor-pointer"
                  >
                    <h3 className="text-xl font-bold hover:text-primary transition-colors">{blog.title}</h3>
                  </a>
                  <p className="text-muted-foreground">{blog.description}</p>
                  <a
                    href="#"
                    onClick={e => e.preventDefault()}
                    className="inline-flex items-center gap-2 text-primary hover:underline cursor-pointer"
                  >
                    Learn More
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
