import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES, MEDIA_MANIFEST, type CaseStudy } from '../../data/content';
import { ArrowUpRight, X, ShieldCheck } from 'lucide-react';

export const SelectedWorkSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  const featuredProject = CASE_STUDIES[0];
  const supportingProjects = CASE_STUDIES.slice(1);
  const featuredMedia = MEDIA_MANIFEST[featuredProject.mediaKey] || MEDIA_MANIFEST.projectAryanMaan;

  // Handle escape key to close modal/drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-bold text-[#2891CB] uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#E66338]"></span>
              <span>Selected Work</span>
            </div>
            <h2 className="section-title text-[#0F172A]">
              Campaigns built to be seen, understood and acted upon.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              Selected communication work across political, civic, healthcare and public-leadership mandates.
            </p>
          </div>

          <Link
            to="/work"
            className="group inline-flex items-center gap-2 text-xs font-bold text-[#2891CB] hover:text-[#1C7DBC] uppercase tracking-wider transition-colors shrink-0"
          >
            <span>Explore Selected Work</span>
            <ArrowUpRight className="w-4 h-4 text-[#E66338] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Featured Project 01 (Prominent Hero Treatment) */}
        <div className="mb-10">
          <div className="p-8 sm:p-10 rounded-2xl bg-[#F8FAFC] border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group hover:border-[#2891CB] transition-all duration-300 shadow-sm relative overflow-hidden">
            <div className="lg:col-span-7">
              <div className="relative rounded-xl bg-white border border-slate-200 overflow-hidden aspect-[16/9] shadow-sm">
                <img
                  src={featuredMedia.src}
                  alt={featuredMedia.alt}
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.025]"
                  loading="lazy"
                  width={800}
                  height={450}
                />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded bg-white/95 backdrop-blur-sm border border-slate-200 text-xs font-bold text-[#E66338] font-mono uppercase">
                  {featuredProject.categoryLabel}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              {featuredProject.metadata && (
                <div className="text-xs font-mono font-bold text-[#2891CB]">
                  {featuredProject.metadata}
                </div>
              )}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-display group-hover:text-[#2891CB] transition-colors">
                {featuredProject.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {featuredProject.copy}
              </p>
              
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-slate-400 font-mono text-xs">MakeMyCampaign Mandate</span>
                <button
                  onClick={() => setSelectedProject(featuredProject)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2891CB] uppercase tracking-wider group-hover:underline focus:outline-none"
                >
                  <span>View Case Details</span>
                  <ArrowUpRight className="w-4 h-4 text-[#E66338] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Projects 02-04 (3-Column Editorial Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportingProjects.map((item) => {
            const media = MEDIA_MANIFEST[item.mediaKey] || MEDIA_MANIFEST.projectNashikCivic;

            return (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between space-y-6 group hover:border-[#2891CB] transition-all duration-300 shadow-sm relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="relative rounded-xl bg-white border border-slate-200 overflow-hidden aspect-[16/10] shadow-sm">
                    <img
                      src={media.src}
                      alt={media.alt}
                      className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.025]"
                      loading="lazy"
                      width={600}
                      height={375}
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-white/90 backdrop-blur-sm border border-slate-200 text-[10px] font-bold text-[#E66338] font-mono uppercase">
                      {item.categoryLabel}
                    </div>
                  </div>

                  <div className="space-y-2 pt-1">
                    <h3 className="text-lg font-bold text-[#0F172A] font-display group-hover:text-[#2891CB] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.copy}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono text-[11px]">MakeMyCampaign Mandate</span>
                  <button
                    onClick={() => setSelectedProject(item)}
                    className="inline-flex items-center gap-1 text-[#2891CB] font-bold uppercase tracking-wider text-[11px] group-hover:underline focus:outline-none"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#E66338] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Accessible Desktop Side Drawer / Mobile Bottom Sheet for Project Details */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setSelectedProject(null)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="w-full max-w-xl bg-white h-full shadow-2xl p-6 sm:p-8 overflow-y-auto flex flex-col justify-between space-y-6 border-l border-slate-200 transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="text-xs font-bold text-[#E66338] font-mono uppercase">
                  {selectedProject.categoryLabel}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-[#2891CB]"
                  aria-label="Close project details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-slate-200 shadow-sm">
                <img
                  src={MEDIA_MANIFEST[selectedProject.mediaKey]?.src}
                  alt={MEDIA_MANIFEST[selectedProject.mediaKey]?.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3">
                {selectedProject.metadata && (
                  <div className="text-xs font-mono font-bold text-[#2891CB]">
                    {selectedProject.metadata}
                  </div>
                )}
                <h3 className="text-2xl font-extrabold text-[#0F172A] font-display">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {selectedProject.copy}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2 font-bold text-[#0F172A]">
                  <ShieldCheck className="w-4 h-4 text-[#2891CB]" />
                  <span>Mandate Execution Standard</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Integrated campaign execution across positioning, creative narrative, performance media and direct audience outreach.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs uppercase"
              >
                Close Window
              </button>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#2891CB] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1C7DBC]"
              >
                <span>Discuss Similar Mandate</span>
                <ArrowUpRight className="w-4 h-4 text-[#E66338]" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
