import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { AGENCY_INFO } from '../../data/content';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Work', path: '/work' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white border-b ${
        isScrolled ? 'border-slate-200 py-3 shadow-sm' : 'border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          
          {/* Official MMC SVG Logo (Merges seamlessly with white header) */}
          <Logo />

          {/* Clean Horizontal Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center space-x-8"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wide transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2891CB] rounded ${
                    isActive
                      ? 'text-[#2891CB] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#E66338]'
                      : 'text-slate-700 hover:text-[#2891CB]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href={`tel:${AGENCY_INFO.phonePrimary}`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#2891CB] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2891CB] rounded"
            >
              <Phone className="w-3.5 h-3.5 text-[#2891CB]" />
              <span>{AGENCY_INFO.phonePrimary}</span>
            </a>
            
            {/* Primary CTA using Official Blue with Orange Arrow Accent */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#2891CB] hover:bg-[#1C7DBC] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2891CB]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 text-[#E66338] stroke-[2.5]" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 hover:text-[#2891CB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2891CB]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-white px-6 pt-24 pb-12 space-y-6 overflow-y-auto z-40 border-b border-slate-200"
          aria-label="Mobile Menu"
        >
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#EBF5FA] text-[#2891CB] font-bold border-l-4 border-[#2891CB]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="pt-6 border-t border-slate-100 flex flex-col gap-4">
            <a
              href={`tel:${AGENCY_INFO.phonePrimary}`}
              className="flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-lg bg-slate-50 border border-slate-200 text-sm font-medium text-slate-700"
            >
              <Phone className="w-4 h-4 text-[#2891CB]" />
              <span>Call Strategy Desk: {AGENCY_INFO.phonePrimary}</span>
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-lg bg-[#2891CB] text-white font-bold text-sm uppercase tracking-wider"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 text-[#E66338]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
