"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu, ShoppingCart, Phone, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet'
import { ModeToggle } from '@/components/mode-toggle'

const navigationItems = [
  { name: 'Beranda', href: '#hero' },
  { name: 'Produk', href: '#products' },
  { name: 'Keunggulan', href: '#why-choose' },
  { name: 'Aplikasi', href: '#applications' },
  { name: 'Sertifikasi', href: '#certifications' },
  { name: 'Kontak', href: '#contact' },
]

const smoothScrollTo = (targetId: string) => {
  if (targetId.startsWith('#')) {
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
}

export function CosmoNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link href="/cosmo-higen" className="flex items-center space-x-3 cursor-pointer">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">CH</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight">Cosmo Higen</span>
              <span className="text-xs text-muted-foreground">Industrial Tissue</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navigationItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className="cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                smoothScrollTo(item.href)
              }}
            >
              {item.name}
            </Button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-2">
          <ModeToggle variant="ghost" />
          <Button variant="outline" asChild className="cursor-pointer">
            <a href="#products">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Katalog Produk
            </a>
          </Button>
          <Button asChild className="cursor-pointer">
            <a href="#contact">
              <Phone className="h-4 w-4 mr-2" />
              Hubungi Kami
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="cursor-pointer">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 mt-6">
              {navigationItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="justify-start cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    smoothScrollTo(item.href)
                    setIsOpen(false)
                  }}
                >
                  {item.name}
                </Button>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full cursor-pointer" asChild>
                  <a href="#products">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Katalog Produk
                  </a>
                </Button>
                <Button className="w-full cursor-pointer" asChild>
                  <a href="#contact">
                    <Phone className="h-4 w-4 mr-2" />
                    Hubungi Kami
                  </a>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
