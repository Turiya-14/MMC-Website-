import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { AGENCY_INFO, MEDIA_MANIFEST } from '../../data/content';

export const HeroSection: React.FC = () => {
  const mainAsset = MEDIA_MANIFEST.homeHeroMain;
  const creativeAsset = MEDIA_MANIFEST.homeHeroCreative;
  const outreachAsset = MEDIA_MANIFEST.homeHeroOutreach;

  return (
    <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (52-54%): Editorial Positioning */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8 text-left animate-hero-fade">
            
            {/* Eyebrow */}
            <div className="text-xs font-bold text-[#2891CB] uppercase tracking-widest flex items-center gap-2 animate-hero-slide-1">
              <span className="w-8 h-[2px] bg-[#E66338]"></span>
              <span>{AGENCY_INFO.secondaryTagline}</span>
            </div>

            {/* Headline */}
            <h1 className="hero-title text-[#0F172A] animate-hero-slide-2">
              We don’t run ads. <br />
              <span className="text-[#E66338]">We build brands.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal animate-hero-slide-3">
              {AGENCY_INFO.heroDescription}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4 animate-hero-slide-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#2891CB] hover:bg-[#1C7DBC] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2891CB]"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 text-[#E66338] stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </Link>
              
              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-white border border-[#2891CB]/30 text-[#2891CB] hover:bg-[#EBF5FA] font-bold text-xs uppercase tracking-wider transition-all duration-300"
              >
                <span>View Our Work</span>
              </Link>
            </div>

          </div>

          {/* Right Column (46-48%): Editorial Collage (Dominant Main + 2 Asymmetric Supporting Crops) */}
          <div className="lg:col-span-5 relative">
            <div className="relative space-y-4">
              
              {/* Dominant Main Portrait Image (homeHeroMain) */}
              <div className="relative rounded-2xl bg-[#F8FAFC] border border-slate-200 overflow-hidden shadow-sm aspect-[4/3] group animate-hero-mask">
                <img
                  src={mainAsset.src}
                  alt={mainAsset.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-400 group-hover:scale-[1.025]"
                  loading="eager"
                  width={600}
                  height={450}
                />
              </div>

              {/* Two Asymmetric Supporting Crops Below */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Upper/Left Supporting Image (homeHeroCreative) */}
                <div className="relative rounded-xl bg-[#F8FAFC] border border-slate-200 overflow-hidden aspect-[16/10] group animate-hero-sub-left">
                  <img
                    src={creativeAsset.src}
                    alt={creativeAsset.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-400 group-hover:scale-[1.025]"
                    loading="lazy"
                    width={400}
                    height={250}
                  />
                </div>

                {/* Lower/Right Supporting Image (homeHeroOutreach) */}
                <div className="relative rounded-xl bg-[#F8FAFC] border border-slate-200 overflow-hidden aspect-[16/10] group animate-hero-sub-right">
                  <img
                    src={outreachAsset.src}
                    alt={outreachAsset.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-400 group-hover:scale-[1.025]"
                    loading="lazy"
                    width={400}
                    height={250}
                  />
                </div>

              </div>

              {/* Offset Thin Orange Structural Rule */}
              <div className="absolute -bottom-2 -left-2 w-16 h-[3px] bg-[#E66338] rounded-full"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
