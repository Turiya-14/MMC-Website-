import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone } from 'lucide-react';
import { AGENCY_INFO } from '../../data/content';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#0B132B] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display leading-tight">
            Ready to build a brand that leads?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Whether you are scaling a company, strengthening an institution, building a public profile or preparing for a high-stakes campaign, the right strategy begins with a focused conversation.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#E66338] hover:bg-[#F07449] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <a
            href={`tel:${AGENCY_INFO.phonePrimary}`}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 border border-white/20"
          >
            <Phone className="w-4 h-4 text-[#2891CB]" />
            <span>Call {AGENCY_INFO.phonePrimary}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
