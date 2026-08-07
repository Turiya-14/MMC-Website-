import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Globe, Shield, Award } from 'lucide-react';
import { Logo } from './Logo';
import { AGENCY_INFO, FULL_SERVICES } from '../../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B132B] border-t border-white/10 text-slate-300 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Logo variant="footer" />
            
            <p className="text-xl font-extrabold text-white font-display uppercase tracking-tight">
              We don't run ads. <span className="text-[#E66338]">We build brands.</span>
            </p>
            
            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              {AGENCY_INFO.positioningStatement} Integrated strategy, political intelligence, audience profiling, creative storytelling and campaign technology.
            </p>
            
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white font-semibold">
                <Shield className="w-3.5 h-3.5 text-[#2891CB]" /> Strategy & Tech
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white font-semibold">
                <Award className="w-3.5 h-3.5 text-[#E66338]" /> Multi-Discipline
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest border-l-2 border-[#2891CB] pl-2.5">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-[#E66338] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#E66338] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#E66338] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-[#E66338] transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#E66338] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Capabilities */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest border-l-2 border-[#2891CB] pl-2.5">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              {FULL_SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link to="/services" className="hover:text-[#E66338] transition-colors line-clamp-1">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest border-l-2 border-[#2891CB] pl-2.5">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#2891CB] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href={`tel:${AGENCY_INFO.phonePrimary}`} className="hover:text-white transition-colors">
                    {AGENCY_INFO.phonePrimary}
                  </a>
                  <a href={`tel:${AGENCY_INFO.phoneSecondary}`} className="hover:text-white transition-colors">
                    {AGENCY_INFO.phoneSecondary}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#2891CB] shrink-0" />
                <a href={`mailto:${AGENCY_INFO.email}`} className="hover:text-white transition-colors">
                  {AGENCY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#2891CB] shrink-0" />
                <span>{AGENCY_INFO.website}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Social Media & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <span>© {new Date().getFullYear()} MakeMyCampaign. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-slate-400 font-semibold uppercase text-[10px]">Connect:</span>
            {['LinkedIn', 'X/Twitter', 'Instagram', 'YouTube'].map((platform) => (
              <span
                key={platform}
                className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300 hover:text-[#E66338] cursor-pointer transition-colors text-[11px]"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
