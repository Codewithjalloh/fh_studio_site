'use client';

import AboutIntro from '../components/AboutIntro'
import ValuesSection from '../components/ValuesSection'
import AboutStats from '../components/AboutStats'

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      <AboutIntro />
      <AboutStats />
      <ValuesSection />
    </div>
  )
} 