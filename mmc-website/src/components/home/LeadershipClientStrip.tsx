import React from 'react';
import { LEADERSHIP, CORE_TEAM } from '../../data/content';

export const LeadershipClientStrip: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div>
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold text-[#2891CB] uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#E66338]"></span>
              <span>Leadership</span>
            </div>
            <h2 className="section-title text-[#0F172A] uppercase">
              Campaign <span className="text-[#2891CB]">Leadership.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {LEADERSHIP.map((leader) => (
              <div
                key={leader.name}
                className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-[#2891CB] transition-all flex flex-col justify-between group shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white border border-[#2891CB]/30 flex items-center justify-center text-lg font-bold text-[#2891CB] font-display shadow-sm">
                      {leader.avatarText}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0F172A] font-display">
                        {leader.name}
                      </h3>
                      <div className="text-xs font-bold text-[#E66338] uppercase mt-0.5">
                        {leader.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-sm">
            <h4 className="text-xs font-bold text-[#2891CB] uppercase tracking-widest mb-6 border-b border-slate-200 pb-3">
              Core Execution & Strategy Command Team
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {CORE_TEAM.map((member) => (
                <div key={member.name} className="p-4 rounded-xl bg-white border border-slate-200 text-center shadow-sm">
                  <div className="w-9 h-9 rounded-full bg-[#EBF5FA] border border-[#2891CB]/30 text-[#2891CB] font-bold text-xs flex items-center justify-center mx-auto mb-2 font-display">
                    {member.avatarText}
                  </div>
                  <div className="text-xs font-bold text-[#0F172A]">{member.name}</div>
                  <div className="text-[10px] text-slate-500 mt-1 line-clamp-2">{member.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
