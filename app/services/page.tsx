'use client';

import ServicesIntro from '../components/ServicesIntro'
import ServiceProcess from '../components/ServiceProcess'
import TechnologyStack from '../components/TechnologyStack'
import PricingSection from '../components/PricingSection'

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-16">
      <ServicesIntro />
      <ServiceProcess />
      <TechnologyStack />
      <PricingSection />
    </div>
  )
} 