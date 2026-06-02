"use client"

import React from 'react'
import { CosmoNavbar } from './components/cosmo-navbar'
import { CosmoHeroSection } from './components/cosmo-hero-section'
import { CosmoProductsSection } from './components/cosmo-products-section'
import { CosmoQualitySection } from './components/cosmo-quality-section'
import { CosmoApplicationsSection } from './components/cosmo-applications-section'
import { CosmoWhyChooseSection } from './components/cosmo-why-choose-section'
import { CosmoCertificationsSection } from './components/cosmo-certifications-section'
import { CosmoContactSection } from './components/cosmo-contact-section'
import { CosmoFooter } from './components/cosmo-footer'
import { WhatsAppButton } from '../landing/components/whatsapp-button'

export default function CosmoHigenPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <CosmoNavbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <CosmoHeroSection />

        {/* Product Categories */}
        <CosmoProductsSection />

        {/* Quality & Standards */}
        <CosmoQualitySection />

        {/* Applications/Industries */}
        <CosmoApplicationsSection />

        {/* Why Choose Cosmo */}
        <CosmoWhyChooseSection />

        {/* Certifications */}
        <CosmoCertificationsSection />

        {/* Contact */}
        <CosmoContactSection />
      </main>

      {/* Footer */}
      <CosmoFooter />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  )
}
