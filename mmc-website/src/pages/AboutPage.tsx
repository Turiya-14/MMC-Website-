import React from 'react';
import { LEADERSHIP, CORE_TEAM, OPERATING_PRINCIPLES, MEDIA_MANIFEST } from '../data/content';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const studioAsset = MEDIA_MANIFEST.homeAgencyStudio;

  return (
    <div className="pt-28 pb-20 bg-white text-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="text-xs font-bold text-[#2891CB] uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#E66338]"></span>
              <span>About MakeMyCampaign</span>
            </div>
            <h1 className="inner-hero-title text-[#0F172A]">
              Built for campaigns where attention must become action.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
              MakeMyCampaign brings strategy, creative communication, media, technology and campaign operations together for brands, institutions, public leaders and candidates.
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="relative rounded-2xl bg-[#F8FAFC] border border-slate-200 overflow-hidden shadow-sm aspect-[4/3]">
              <img
                src={studioAsset.src}
                alt={studioAsset.alt}
                className="w-full h-full object-cover"
                loading="eager"
                width={600}
                height={450}
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded bg-white/90 backdrop-blur-sm border border-slate-200 text-[10px] font-bold text-[#2891CB] font-mono">
                EDITORIAL STUDIO
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Overview & Operating Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8 border-t border-slate-200">
          <div className="lg:col-span-7 space-y-6 text-slate-700">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-display">
              Connected thinking. Coordinated execution.
            </h2>
            <p className="leading-relaxed text-sm sm:text-base">
              Campaigns become stronger when strategy, creative, media, technology and execution are planned together rather than managed as isolated activities.
            </p>
            <p className="leading-relaxed text-sm sm:text-base">
              Our role is to create that connection—turning complex objectives into clear positioning, relevant communication and organised action.
            </p>
          </div>

          {/* Operating Principles */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-5 shadow-sm">
              <h3 className="text-xs font-bold text-[#2891CB] uppercase tracking-widest border-b border-slate-200 pb-3">
                The principles behind our work.
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-800">
                {OPERATING_PRINCIPLES.map((principle, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#E66338] shrink-0 mt-0.5" />
                    <span className="font-semibold">{idx + 1}. {principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Leadership Section (Equal visual importance for Sagar Shelar & Aditya Adhav) */}
        <div className="pt-10 border-t border-slate-200 space-y-8">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-[#2891CB] uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#E66338]"></span>
              <span>Leadership</span>
            </div>
            <h2 className="section-title text-[#0F172A] uppercase">
              Founding Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LEADERSHIP.map((leader) => (
              <div key={leader.name} className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-4 shadow-sm flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white border border-[#2891CB]/30 flex items-center justify-center text-lg font-bold text-[#2891CB] font-display shadow-sm">
                      {leader.avatarText}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0F172A] font-display">{leader.name}</h3>
                      <div className="text-xs font-bold text-[#E66338] uppercase">{leader.role}</div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Team Section (Clean Typographic Roster) */}
        <div className="pt-10 border-t border-slate-200 space-y-6">
          <div className="max-w-2xl">
            <h2 className="section-title text-[#0F172A] uppercase">
              Core Team
            </h2>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CORE_TEAM.map((member) => (
                <div key={member.name} className="p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EBF5FA] border border-[#2891CB]/30 text-[#2891CB] font-bold text-xs flex items-center justify-center shrink-0 font-display">
                    {member.avatarText}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0F172A]">{member.name}</div>
                    <div className="text-[11px] text-slate-500">{member.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-2xl bg-[#0B132B] text-white text-center space-y-4">
          <h2 className="text-2xl font-bold text-white font-display uppercase">
            Ready to build a brand that leads?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-[#E66338] hover:bg-[#F07449] text-white font-bold text-xs uppercase tracking-wider"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
