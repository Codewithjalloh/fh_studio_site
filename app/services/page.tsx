'use client';

import ServicesHero from '../components/ServicesHero'
import TechnicalOfferings from '../components/TechnicalOfferings'
import TechStackSection from '../components/TechStackSection'
import ServiceProcess from '../components/ServiceProcess'
import ServicesCTA from '../components/ServicesCTA'
import Footer from '../components/Footer'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background-light text-slate-900">
      <main className="max-w-[1200px] mx-auto px-4 md:px-10 lg:px-20">
        <ServicesHero />
        <TechnicalOfferings />
        <div id="our-process">
          <ServiceProcess />
        </div>
        <TechStackSection />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  )
} 