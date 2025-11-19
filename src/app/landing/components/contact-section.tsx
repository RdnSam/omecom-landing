"use client"

import { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Turnstile } from '@marsidev/react-turnstile'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const contactFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "Nama depan minimal 2 karakter.",
  }),
  lastName: z.string().min(2, {
    message: "Nama belakang minimal 2 karakter.",
  }),
  email: z.string().email({
    message: "Masukkan alamat email yang valid.",
  }),
  subject: z.string().min(5, {
    message: "Subjek minimal 5 karakter.",
  }),
  message: z.string().min(10, {
    message: "Pesan minimal 10 karakter.",
  }),
})

export function ContactSection() {
  const [turnstileToken, setTurnstileToken] = useState<string>('')

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    // Include turnstile token in submission
    console.log({
      ...values,
      turnstileToken,
    })

    // Reset form and turnstile
    form.reset()
    setTurnstileToken('')

    // You could also show a success message
    alert('Pesan berhasil dikirim! Kami akan segera menghubungi Anda.')
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">Hubungi Kami</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Butuh bantuan atau konsultasi?
          </h2>
          <p className="text-lg text-muted-foreground">
            Tim kami siap membantu Anda menemukan solusi cleaning yang tepat untuk kebutuhan bisnis Anda.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="space-y-6 order-2 lg:order-1">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Alamat Kantor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Jl. Pos Pengumben Lama No. 39B<br />
                  Jakarta Barat <br />
                  Indonesia
                </p>
                <Button variant="outline" size="sm" className="cursor-pointer" asChild>
                  <a href="https://www.google.com/maps/place/PT.+Omecom+Mitra+Solusi+-+Jakarta+Office/@-6.217727,106.762388,16z/data=!4m14!1m7!3m6!1s0x2e69f72ce51e86b7:0xc2fcc090d2dd99a3!2sPT.+Omecom+Mitra+Solusi+-+Jakarta+Office!8m2!3d-6.2177274!4d106.7623876!16s%2Fg%2F11crvb6dhg!3m5!1s0x2e69f72ce51e86b7:0xc2fcc090d2dd99a3!8m2!3d-6.2177274!4d106.7623876!16s%2Fg%2F11crvb6dhg?hl=id&entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                    Buka di Maps
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Telepon & WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  Telepon: (021) 8888-9999
                </p>
                <p className="text-muted-foreground mb-3">
                  WhatsApp: +62 813-1515-1615
                </p>
                <Button variant="outline" size="sm" className="cursor-pointer" asChild>
                  <a href="https://wa.me/+6281315151615" target="_blank" rel="noopener noreferrer">
                    Chat WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Jam Operasional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-1">
                  Senin - Jumat: 09:00 - 17:00
                </p>
                <p className="text-muted-foreground mb-1">
                  Sabtu: 08:00 - 14:00
                </p>
                <p className="text-muted-foreground">
                  Minggu & Libur: Tutup
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Kirim Pesan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nama Depan</FormLabel>
                            <FormControl>
                              <Input placeholder="Budi" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nama Belakang</FormLabel>
                            <FormControl>
                              <Input placeholder="Santoso" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="budi@perusahaan.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subjek</FormLabel>
                          <FormControl>
                            <Input placeholder="Pertanyaan produk, konsultasi, permintaan penawaran..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pesan</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Ceritakan kebutuhan cleaning Anda dan bagaimana kami dapat membantu..."
                              rows={10}
                              className="min-h-50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Cloudflare Turnstile CAPTCHA */}
                    <div className="flex justify-center">
                      <Turnstile
                        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'}
                        onSuccess={setTurnstileToken}
                        onError={() => setTurnstileToken('')}
                        onExpire={() => setTurnstileToken('')}
                        options={{
                          theme: 'auto',
                          size: 'normal',
                        }}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full cursor-pointer"
                      disabled={!turnstileToken}
                    >
                      {turnstileToken ? 'Kirim Pesan' : 'Lengkapi CAPTCHA untuk mengirim'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
