import React from 'react';
import { PROCESS_STEPS } from '../../data/content';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold text-[#2891CB] uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-[#E66338]"></span>
            <span>How We Work</span>
          </div>
          <h2 className="section-title text-[#0F172A]">
            One connected campaign system.
          </h2>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-[#2891CB] transition-all flex flex-col justify-between group space-y-4 shadow-sm"
            >
              <div>
                <span className="text-2xl font-extrabold font-mono text-[#E66338] block mb-2">
                  {step.number}
                </span>

                <h3 className="text-lg font-bold text-[#0F172A] font-display group-hover:text-[#2891CB] transition-colors mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {step.copy}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
