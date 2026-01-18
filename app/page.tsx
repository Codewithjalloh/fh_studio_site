'use client';

import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import CoreServicesSection from './components/CoreServicesSection';
import PartnersSection from './components/PartnersSection';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 grid-pattern pointer-events-none -z-10"></div>
      <main className="flex-1">
        <Hero />
        <FeaturesSection />
        <CoreServicesSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
}
