"use client"

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Sparkles, Shield, Recycle } from 'lucide-react'

export function CosmoHeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-background dark:from-blue-950/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <Badge variant="secondary" className="w-fit">
              <Sparkles className="h-3 w-3 mr-1" />
              Premium Industrial Tissue Solutions
            </Badge>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Cosmo Higen
                <span className="block text-blue-600 dark:text-blue-400">Industrial Tissue</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Solusi tissue industri berkualitas tinggi untuk kebutuhan kebersihan dan higienis bisnis Anda. Produk terpercaya dengan standar internasional.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 p-3 rounded-lg bg-background/50 border">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Higienis & Aman</span>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-lg bg-background/50 border">
                <Recycle className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Ramah Lingkungan</span>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-lg bg-background/50 border">
                <Sparkles className="h-5 w-5 text-yellow-600" />
                <span className="text-sm font-medium">Premium Quality</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="cursor-pointer group" asChild>
                <a href="#products">
                  Lihat Produk
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="cursor-pointer" asChild>
                <a href="#contact">
                  Hubungi Sales
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div>
                <div className="text-3xl font-bold text-blue-600">20+</div>
                <div className="text-sm text-muted-foreground">Tahun Pengalaman</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-muted-foreground">Klien Industri</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">ISO</div>
                <div className="text-sm text-muted-foreground">Tersertifikasi</div>
              </div>
            </div>
          </div>

          {/* Right Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-1">
              <div className="h-full w-full rounded-2xl bg-background flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="text-8xl">🧻</div>
                  <h3 className="text-2xl font-bold">Cosmo Higen</h3>
                  <p className="text-muted-foreground">Industrial Tissue Excellence</p>
                </div>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-background border rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  ✓
                </div>
                <div>
                  <div className="text-sm font-semibold">Premium Quality</div>
                  <div className="text-xs text-muted-foreground">ISO Certified</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-background border rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  🏭
                </div>
                <div>
                  <div className="text-sm font-semibold">Industrial Grade</div>
                  <div className="text-xs text-muted-foreground">Heavy Duty</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
