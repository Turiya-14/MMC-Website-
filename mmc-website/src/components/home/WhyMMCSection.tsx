import React from 'react';
import { OPERATING_PRINCIPLES } from '../../data/content';

export const WhyMMCSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="text-xs font-bold text-[#2891CB] uppercase tracking-widest inline-flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#E66338]"></span>
            <span>Operating Principles</span>
            <span className="w-6 h-[2px] bg-[#E66338]"></span>
          </div>

          <div className="space-y-4">
            {OPERATING_PRINCIPLES.slice(0, 3).map((principle, idx) => (
              <h2 key={idx} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] font-display uppercase tracking-tight">
                {idx === 0 && <span className="text-[#2891CB]">{principle}</span>}
                {idx === 1 && <span className="text-[#0F172A]">{principle}</span>}
                {idx === 2 && <span className="text-[#E66338]">{principle}</span>}
              </h2>
            ))}
          </div>

          <p className="text-xs text-slate-500 font-mono">
            MakeMyCampaign • Strategic Discipline Framework
          </p>
        </div>

      </div>
    </section>
  );
};
