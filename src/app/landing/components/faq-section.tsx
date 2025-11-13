"use client"

import { CircleHelp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'

type FaqItem = {
  value: string
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    value: 'item-1',
    question: 'Apakah produk Omecom aman digunakan?',
    answer:
      'Ya, semua produk Omecom telah tersertifikasi ISO 9001:2008 dan NSF. Produk kami telah melalui tes keamanan yang ketat dan aman digunakan sesuai petunjuk. Untuk produk hygiene seperti Cosmo Wipes, formula kami lembut di kulit dan cocok untuk penggunaan sehari-hari.',
  },
  {
    value: 'item-2',
    question: 'Bagaimana cara memesan produk Omecom?',
    answer:
      'Anda dapat memesan produk Omecom melalui toko online kami di Shopee dan Tokopedia, atau hubungi tim sales kami langsung untuk pemesanan dalam jumlah besar. Kami juga melayani konsultasi gratis untuk membantu memilih produk yang tepat sesuai kebutuhan Anda.',
  },
  {
    value: 'item-3',
    question: 'Apakah tersedia layanan cleaning untuk area tertentu saja?',
    answer:
      'Tentu! Kami menyediakan layanan cleaning yang fleksibel, mulai dari pembersihan rutin harian, mingguan, hingga pembersihan khusus untuk event tertentu. Tim kami siap melayani area manapun sesuai kebutuhan Anda dengan jadwal yang dapat disesuaikan.',
  },
  {
    value: 'item-4',
    question: 'Berapa minimal order untuk produk chemical cleaning?',
    answer:
      'Minimal order bervariasi tergantung jenis produk. Untuk pembelian retail, Anda bisa membeli melalui e-commerce kami. Untuk pembelian dalam jumlah besar (wholesale/corporate), silakan hubungi tim sales kami untuk mendapatkan penawaran khusus dan harga terbaik.',
  },
  {
    value: 'item-5',
    question: 'Apakah Omecom melayani area di luar Jakarta?',
    answer:
      'Ya, kami melayani pengiriman ke seluruh Indonesia. Untuk layanan cleaning profesional, saat ini kami fokus di area Jabodetabek dan kota-kota besar. Silakan hubungi kami untuk informasi lebih lanjut mengenai ketersediaan layanan di area Anda.',
  },
  {
    value: 'item-6',
    question: 'Bagaimana dengan garansi kualitas produk?',
    answer:
      'Kami memberikan jaminan kualitas 100% untuk semua produk Omecom. Jika ada produk yang tidak sesuai standar atau rusak saat diterima, kami akan melakukan penggantian tanpa biaya tambahan. Kepuasan pelanggan adalah prioritas utama kami.',
  },
]

const FaqSection = () => {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Pertanyaan Yang Sering Diajukan
          </h2>
          <p className="text-lg text-muted-foreground">
            Temukan jawaban untuk pertanyaan umum seputar produk dan layanan Omecom. Masih ada pertanyaan? Kami siap membantu!
          </p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <div className='bg-transparent'>
            <div className='p-0'>
              <Accordion type='single' collapsible className='space-y-5'>
                {faqItems.map(item => (
                  <AccordionItem key={item.value} value={item.value} className='rounded-md !border bg-transparent'>
                    <AccordionTrigger className='cursor-pointer items-center gap-4 rounded-none bg-transparent py-2 ps-3 pe-4 hover:no-underline data-[state=open]:border-b'>
                      <div className='flex items-center gap-4'>
                        <div className='bg-primary/10 text-primary flex size-9 shrink-0 items-center justify-center rounded-full'>
                          <CircleHelp className='size-5' />
                        </div>
                        <span className='text-start font-semibold'>{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className='p-4 bg-transparent'>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Contact Support CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Masih ada pertanyaan? Hubungi kami sekarang.
            </p>
            <Button className='cursor-pointer' asChild>
              <a href="#contact">
                Hubungi Kami
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export { FaqSection }
