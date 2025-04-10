'use client';

import Hero from './components/Hero';
import FeaturedServices from './components/FeaturedServices';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturedProjects from './components/FeaturedProjects';
import ProcessSection from './components/ProcessSection';
import StatsSection from './components/StatsSection';
import CallToAction from './components/CallToAction';

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <FeaturedServices />
        <WhyChooseUs />
        <FeaturedProjects />
        <ProcessSection />
        <StatsSection />
        <CallToAction />
      </main>
    </>
  );
}
