import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CapabilitiesTicker } from '../components/home/CapabilitiesTicker';
import { AgencyIntro } from '../components/home/AgencyIntro';
import { ServicesSection } from '../components/home/ServicesSection';
import { SelectedWorkSection } from '../components/home/SelectedWorkSection';
import { WhyMMCSection } from '../components/home/WhyMMCSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { FinalCTASection } from '../components/home/FinalCTASection';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Capabilities Ticker */}
      <CapabilitiesTicker />

      {/* 3. Agency Overview */}
      <AgencyIntro />

      {/* 4. Mandates & Capabilities Preview */}
      <ServicesSection />

      {/* 5. Selected Work */}
      <SelectedWorkSection />

      {/* 6. Process Section */}
      <ProcessSection />

      {/* 7. Principles Statement */}
      <WhyMMCSection />

      {/* 8. Final Call to Action */}
      <FinalCTASection />
    </div>
  );
};
