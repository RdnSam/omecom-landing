"use client"

import {
  ShieldCheck,
  Droplet,
  Sparkles,
  Users,
  ShoppingBag,
  Package,
  Award,
  Building2
} from 'lucide-react'

const menuSections = [
  {
    title: 'Kategori Produk',
    items: [
      {
        title: 'Chemical Cleaning',
        description: 'Produk pembersih kimia profesional untuk industri',
        icon: Droplet,
        href: '#features'
      },
      {
        title: 'Hygiene Products',
        description: 'Rangkaian produk hygiene berkualitas tinggi',
        icon: Sparkles,
        href: '#features'
      },
      {
        title: 'Cleaning Services',
        description: 'Layanan pembersihan profesional dengan tim ahli',
        icon: Users,
        href: '#features'
      },
      {
        title: 'Lihat Semua Produk',
        description: 'Jelajahi katalog produk lengkap kami',
        icon: Package,
        href: '#features'
      }
    ]
  },
  {
    title: 'Belanja Online',
    items: [
      {
        title: 'Shopee Store',
        description: 'Belanja produk kami di Shopee',
        icon: ShoppingBag,
        href: 'https://shopee.co.id/omecom'
      },
      {
        title: 'Tokopedia Store',
        description: 'Temukan produk kami di Tokopedia',
        icon: ShoppingBag,
        href: 'https://tokopedia.com/omecom'
      },
      {
        title: 'WhatsApp Order',
        description: 'Pesan langsung via WhatsApp',
        icon: ShoppingBag,
        href: '#contact'
      }
    ]
  },
  {
    title: 'Informasi',
    items: [
      {
        title: 'Sertifikasi',
        description: 'ISO 9001:2008 & NSF Certified',
        icon: Award,
        href: '#about'
      },
      {
        title: 'Klien Kami',
        description: 'Perusahaan yang mempercayai kami',
        icon: Building2,
        href: '#about'
      },
      {
        title: 'Jaminan Kualitas',
        description: 'Standar kualitas internasional',
        icon: ShieldCheck,
        href: '#about'
      }
    ]
  }
]

export function MegaMenu() {
  return (
    <div className="w-[700px] max-w-[95vw] p-4 sm:p-6 lg:p-8 bg-background">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
        {menuSections.map((section) => (
          <div key={section.title} className="space-y-4 lg:space-y-6">
            {/* Section Header */}
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              {section.title}
            </h3>

            {/* Section Links */}
            <div className="space-y-3 lg:space-y-4">
              {section.items.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group block space-y-1 lg:space-y-2 hover:bg-accent rounded-md p-2 lg:p-3 -mx-2 lg:-mx-3 transition-colors my-0"
                >
                  <div className="flex items-center gap-2 lg:gap-3">
                    <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed ml-6 lg:ml-7">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
