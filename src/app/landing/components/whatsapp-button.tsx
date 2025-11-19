"use client"

import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function WhatsAppButton() {
  const whatsappNumber = "6281315151615" // Replace with actual Omecom WhatsApp number
  const message = "Halo, saya ingin mengetahui lebih lanjut tentang produk Omecom"

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full p-0 shadow-lg transition-all hover:scale-110 hover:shadow-xl md:h-16 md:w-16"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
    </Button>
  )
}
