import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MANDATES, CAPABILITIES_PREVIEW, MEDIA_MANIFEST } from '../../data/content';
import { ArrowUpRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activeCapId, setActiveCapId] = useState<string>(CAPABILITIES_PREVIEW[0].id);

  const activeCapability = CAPABILITIES_PREVIEW.find((c) => c.id === activeCapId) || CAPABILITIES_PREVIEW[0];
  const activeMedia = MEDIA_MANIFEST[activeCapability.mediaKey] || MEDIA_MANIFEST.serviceBrandGrowth;

  return (
    <div className="bg-[#F8FAFC]">
      
      {/* SECTION 1: MANDATES SECTION (What We Do) */}
      <section className="py-20 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Eyebrow & Heading */}
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold text-[#2891CB] uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#E66338]"></span>
              <span>What We Do</span>
            </div>
            <h2 className="section-title text-[#0F172A]">
              Built for growth, influence and action.
            </h2>
          </div>

          {/* 3 Core Mandates Editorial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {MANDATES.map((mandate) => (
              <div
                key={mandate.id}
                className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:border-[#2891CB] transition-all duration-300 group relative overflow-hidden"
              >
                <div className="space-y-3">
                  <span className="text-2xl font-extrabold font-mono text-[#E66338]">
                    {mandate.number}
                  </span>
                  <h3 className="text-xl font-bold text-[#0F172A] font-display group-hover:text-[#2891CB] transition-colors">
                    {mandate.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {mandate.copy}
                  </p>
                </div>

                <div className="w-full h-[2px] bg-slate-100 group-hover:bg-[#2891CB] transition-colors duration-300"></div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-slate-200 text-[#2891CB] hover:bg-[#2891CB] hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm"
            >
              <span>Explore Our Services</span>
              <ArrowUpRight className="w-4 h-4 text-[#E66338] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 2: CAPABILITIES PREVIEW (Connected Capabilities - 4 Items Only) */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Eyebrow & Heading */}
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold text-[#2891CB] uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#E66338]"></span>
              <span>Connected Capabilities</span>
            </div>
            <h2 className="section-title text-[#0F172A]">
              One strategy. Multiple disciplines.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Each mandate is built through the right combination of research, creative communication, media, technology and execution.
            </p>
          </div>

          {/* Desktop Split View: Left 4 Interactive Capability Rows, Right Crossfade Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column (7 cols): 4 Capability Rows */}
            <div className="lg:col-span-7 divide-y divide-slate-200 border-t border-b border-slate-200">
              {CAPABILITIES_PREVIEW.map((cap) => {
                const isActive = cap.id === activeCapId;
                const itemMedia = MEDIA_MANIFEST[cap.mediaKey];

                return (
                  <div
                    key={cap.id}
                    onMouseEnter={() => setActiveCapId(cap.id)}
                    onClick={() => setActiveCapId(cap.id)}
                    tabIndex={0}
                    onFocus={() => setActiveCapId(cap.id)}
                    className={`py-6 px-4 transition-all duration-300 cursor-pointer rounded-xl my-1 outline-none relative group ${
                      isActive ? 'bg-[#EBF5FA] border-l-4 border-[#2891CB]' : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span className={`text-xl font-extrabold font-mono transition-colors duration-300 ${isActive ? 'text-[#2891CB]' : 'text-[#E66338]'}`}>
                        {cap.number}
                      </span>
                      <div className="space-y-1.5 flex-grow">
                        <h3 className={`text-lg font-bold font-display flex items-center justify-between transition-colors duration-300 ${
                          isActive ? 'text-[#2891CB]' : 'text-[#0F172A] group-hover:text-[#2891CB]'
                        }`}>
                          <span>{cap.title}</span>
                          <ArrowUpRight className={`w-4 h-4 transition-all duration-300 ${
                            isActive ? 'text-[#E66338] opacity-100 translate-x-1 -translate-y-0.5' : 'text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1'
                          }`} />
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed font-normal">
                          {cap.copy}
                        </p>
                      </div>
                    </div>

                    {/* Sliding Rule Accent */}
                    <div className={`absolute bottom-0 left-4 right-4 h-[2px] bg-[#2891CB] transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
                    }`}></div>

                    {/* Mobile Inline Image (Stacked on small screens) */}
                    <div className="lg:hidden mt-4 rounded-xl overflow-hidden aspect-[16/9] border border-slate-200">
                      <img
                        src={itemMedia?.src}
                        alt={itemMedia?.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width={600}
                        height={400}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column (5 cols): Supporting Image Panel Crossfade (Desktop Only) */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="relative rounded-2xl bg-[#F8FAFC] border border-slate-200 overflow-hidden shadow-sm aspect-[4/3] group">
                <img
                  key={activeMedia.src}
                  src={activeMedia.src}
                  alt={activeMedia.alt}
                  className="w-full h-full object-cover transition-opacity duration-400"
                  loading="lazy"
                  width={600}
                  height={450}
                />
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded bg-white/90 backdrop-blur-sm border border-slate-200 text-[10px] font-bold text-[#2891CB] font-mono">
                  {activeCapability.title.toUpperCase()}
                </div>
              </div>
            </div>

          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2891CB] hover:bg-[#1C7DBC] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm"
            >
              <span>View All Capabilities</span>
              <ArrowUpRight className="w-4 h-4 text-[#E66338] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};
