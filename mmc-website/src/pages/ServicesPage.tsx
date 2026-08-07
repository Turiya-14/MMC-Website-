import React from 'react';
import { FULL_SERVICES, MEDIA_MANIFEST } from '../data/content';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-white text-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-bold text-[#2891CB] uppercase tracking-widest flex items-center gap-2">
            <span className="w-8 h-[2px] bg-[#E66338]"></span>
            <span>Capabilities</span>
          </div>
          <h1 className="inner-hero-title text-[#0F172A]">
            Capabilities connected by strategy.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We build integrated campaign systems by combining the disciplines required for each objective—not by selling isolated activities.
          </p>
        </div>

        {/* Quick Capabilities Editorial Index */}
        <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200">
          <h2 className="text-xs font-bold text-[#2891CB] uppercase tracking-widest mb-4">
            Capabilities Index
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {FULL_SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-xs font-semibold text-slate-700 hover:text-[#2891CB] flex items-center gap-2"
              >
                <span className="font-mono text-[#E66338] text-[11px] font-bold">{s.number}</span>
                <span className="truncate">{s.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Detailed 8 Services (Alternating Editorial Layouts) */}
        <div className="space-y-12">
          {FULL_SERVICES.map((service, idx) => {
            // Assign media slots logically across the 8 services
            const mediaKeys = [
              'serviceBrandGrowth',
              'serviceBrandGrowth',
              'serviceCreativeStudio',
              'servicePoliticalCommunication',
              'serviceCreativeStudio',
              'serviceBrandGrowth',
              'serviceCampaignTechnology',
              'serviceBrandGrowth'
            ];
            const mediaAsset = MEDIA_MANIFEST[mediaKeys[idx]] || MEDIA_MANIFEST.serviceBrandGrowth;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-6 shadow-sm scroll-mt-32"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-extrabold font-mono text-[#E66338]">
                      {service.number}
                    </span>
                    <h2 className="text-2xl font-extrabold text-[#0F172A] font-display">
                      {service.title}
                    </h2>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#2891CB] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1C7DBC] transition-colors shadow-sm shrink-0"
                  >
                    <span>Discuss Requirement</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#E66338]" />
                  </Link>
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Left (7 cols): Copy & Capabilities List */}
                  <div className="lg:col-span-7 space-y-6">
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                      {service.copy}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {service.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-medium shadow-2xs">
                          <CheckCircle2 className="w-4 h-4 text-[#2891CB] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right (5 cols): Media Representation */}
                  <div className="lg:col-span-5">
                    <div className="relative rounded-xl bg-white border border-slate-200 overflow-hidden aspect-[4/3] shadow-sm">
                      <img
                        src={mediaAsset.src}
                        alt={mediaAsset.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width={600}
                        height={450}
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-white/90 backdrop-blur-sm border border-slate-200 text-[10px] font-bold text-[#2891CB] font-mono uppercase">
                        {service.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-2xl bg-[#0B132B] text-white text-center space-y-4">
          <h2 className="text-2xl font-bold text-white font-display uppercase">
            Ready to build a brand that leads?
          </h2>
          <Link
            to="/contact"
            className="inline-block px-7 py-3 rounded-lg bg-[#E66338] hover:bg-[#F07449] text-white font-bold text-xs uppercase tracking-wider"
          >
            Start a Project
          </Link>
        </div>

      </div>
    </div>
  );
};
