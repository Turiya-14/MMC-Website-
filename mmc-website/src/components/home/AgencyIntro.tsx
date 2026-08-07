import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { MEDIA_MANIFEST } from '../../data/content';

export const AgencyIntro: React.FC = () => {
  const studioAsset = MEDIA_MANIFEST.homeAgencyStudio;

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="text-xs font-bold text-[#2891CB] uppercase tracking-widest mb-4 flex items-center gap-2">
          <span className="w-8 h-[2px] bg-[#E66338]"></span>
          <span>MakeMyCampaign</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (6 cols): Approved Text */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="section-title text-[#0F172A]">
              Strategy, creativity and execution—working as one.
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              MakeMyCampaign is a strategy-led growth and communications company for brands, institutions, public leaders and candidates.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We bring brand positioning, political intelligence, creative production, performance media and direct communication technology into one coordinated campaign system.
            </p>

            <div className="pt-4">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2891CB] hover:bg-[#1C7DBC] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>About MakeMyCampaign</span>
                <ArrowUpRight className="w-4 h-4 text-[#E66338] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Right Column (6 cols): homeAgencyStudio Image with Thin Brand-Blue Overlapping Structure */}
          <div className="lg:col-span-6 relative">
            
            {/* Thin Brand-Blue Structural Frame Element Behind */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#2891CB]/30 rounded-2xl hidden sm:block pointer-events-none"></div>

            <div className="relative rounded-2xl bg-[#F8FAFC] border border-slate-200 overflow-hidden shadow-sm aspect-[16/10] group z-10">
              <img
                src={studioAsset.src}
                alt={studioAsset.alt}
                className="w-full h-full object-cover object-center transition-transform duration-400 group-hover:scale-[1.025]"
                loading="lazy"
                width={800}
                height={500}
              />
              
              {/* Subtle Orange Accent Line on Crop Edge */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E66338]"></div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
