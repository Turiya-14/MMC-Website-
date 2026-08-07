import React, { useState } from 'react';
import { CASE_STUDIES, MEDIA_MANIFEST } from '../data/content';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WorkPage: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Political' | 'Civic' | 'Healthcare' | 'Institutional' | 'Brand Growth'>('All');

  const filteredCases = filter === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((c) => c.category === filter);

  return (
    <div className="pt-28 pb-20 bg-white text-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-bold text-[#2891CB] uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#E66338]"></span>
              <span>Selected Work</span>
            </div>
            <h1 className="inner-hero-title text-[#0F172A]">
              Work that moves people to notice, trust and act.
            </h1>
            <p className="text-slate-600 text-sm sm:text-base">
              A selection of political, civic, healthcare and leadership communication mandates.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {(['All', 'Political', 'Civic', 'Healthcare', 'Institutional', 'Brand Growth'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2891CB] ${
                  filter === cat
                    ? 'bg-[#2891CB] text-white font-bold shadow-sm'
                    : 'bg-[#F8FAFC] text-slate-700 hover:text-[#2891CB] border border-slate-200'
                }`}
                aria-pressed={filter === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCases.map((item, idx) => {
            const media = MEDIA_MANIFEST[item.mediaKey] || MEDIA_MANIFEST.projectAryanMaan;
            const isFeatured = idx === 0 && filter === 'All';

            return (
              <div
                key={item.id}
                className={`p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between space-y-6 hover:border-[#2891CB] transition-all shadow-sm group ${
                  isFeatured ? 'md:col-span-2 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center space-y-0' : ''
                }`}
              >
                <div className={`space-y-4 ${isFeatured ? 'lg:col-span-7' : ''}`}>
                  <div className="relative rounded-xl bg-white border border-slate-200 overflow-hidden aspect-[16/9] shadow-sm">
                    <img
                      src={media.src}
                      alt={media.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                      loading="lazy"
                      width={800}
                      height={450}
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-white/90 backdrop-blur-sm border border-slate-200 text-[10px] font-bold text-[#E66338] font-mono uppercase">
                      {item.categoryLabel}
                    </div>
                  </div>
                </div>

                <div className={`space-y-4 flex flex-col justify-between ${isFeatured ? 'lg:col-span-5 h-full' : ''}`}>
                  <div className="space-y-2 pt-2">
                    {item.metadata && (
                      <div className="text-[11px] font-mono font-semibold text-[#2891CB]">
                        {item.metadata}
                      </div>
                    )}
                    <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-display group-hover:text-[#2891CB] transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.copy}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                    <span className="font-mono text-[11px]">MakeMyCampaign Mandate</span>
                    <Link
                      to="/contact"
                      className="flex items-center gap-1 text-[#2891CB] font-bold uppercase tracking-wider text-[11px] hover:underline"
                    >
                      <span>Discuss Mandate</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#E66338]" />
                    </Link>
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
