import React from 'react';
import { CAPABILITIES_MARQUEE } from '../../data/content';

export const CapabilitiesTicker: React.FC = () => {
  const marqueeItems = [...CAPABILITIES_MARQUEE, ...CAPABILITIES_MARQUEE];

  return (
    <div className="w-full bg-[#EBF5FA] border-y border-slate-200 py-3.5 overflow-hidden relative">
      <div className="animate-marquee items-center gap-10 whitespace-nowrap">
        {marqueeItems.map((capability, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 text-xs font-semibold tracking-wide text-[#1C7DBC] cursor-default"
          >
            <span>{capability}</span>
            <span className="text-[#E66338]">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};
