"use client"

import React from 'react'
import { LandingNavbar } from './components/navbar'
import { HeroSection } from './components/hero-section'
import { FeaturesSection } from './components/features-section'
import { ProductShowcaseSection } from './components/product-showcase-section'
import { AboutSection } from './components/about-section'
import { StatsSection } from './components/stats-section'
import { LogoCarousel } from './components/logo-carousel'
import { EcommerceSection } from './components/ecommerce-section'
import { TeamSection } from './components/team-section'
import { TestimonialsSection } from './components/testimonials-section'
import { BlogSection } from './components/blog-section'
import { FaqSection } from './components/faq-section'
import { ContactSection } from './components/contact-section'
import { LandingFooter } from './components/footer'
import { WhatsAppButton } from './components/whatsapp-button'
import { LandingThemeCustomizer, LandingThemeCustomizerTrigger } from './components/landing-theme-customizer'

export function LandingPageContent() {
  const [themeCustomizerOpen, setThemeCustomizerOpen] = React.useState(false)
  const [teamSectionVisible, setTeamSectionVisible] = React.useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <LandingNavbar onTeamClick={() => setTeamSectionVisible(!teamSectionVisible)} />

      {/* Main Content */}
      <main>
        {/* Hero Section with Product Carousel */}
        <HeroSection />

        {/* Product Categories (Chemical, Hygiene, Services) */}
        <FeaturesSection />

        {/* Product Showcase with 3D Images */}
        <ProductShowcaseSection />

        {/* Company Info - Siapa Kami + Certifications */}
        <AboutSection />
        <StatsSection />

        {/* Customer Logos */}
        <LogoCarousel />

        {/* E-commerce Integration (Shopee & Tokopedia) */}
        <EcommerceSection />

        {/* Team Section */}
        {teamSectionVisible && <TeamSection />}

        {/* Testimonials */}
        <TestimonialsSection />

        {/* News & Blog */}
        <BlogSection />

        {/* FAQ */}
        <FaqSection />

        {/* Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <LandingFooter />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />

      {/* Theme Customizer */}
      <LandingThemeCustomizerTrigger onClick={() => setThemeCustomizerOpen(true)} />
      <LandingThemeCustomizer open={themeCustomizerOpen} onOpenChange={setThemeCustomizerOpen} />
    </div>
  )
}
