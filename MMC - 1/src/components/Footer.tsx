import { Link } from 'react-router-dom'
import { AGENCY_INFO } from '../data/content'
import { NAV_LINKS } from '../lib/nav'
import Button from './Button'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between md:gap-8">
          <div className="flex max-w-sm flex-col gap-5">
            <Logo variant="footer" />
            <p className="text-sm text-white/60">{AGENCY_INFO.tagline}</p>
            <Button to="/contact" variant="inverse" className="w-fit">
              Start a Project
            </Button>
          </div>

          <div className="flex gap-16 sm:gap-20">
            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold text-white/40">Navigate</span>
              <nav className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="inline-flex min-h-11 items-center text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold text-white/40">Contact</span>
              <div className="flex flex-col text-sm text-white/70">
                <a
                  href={`tel:${AGENCY_INFO.phonePrimary.replace(/\s/g, '')}`}
                  className="inline-flex min-h-11 items-center transition-colors hover:text-white"
                >
                  {AGENCY_INFO.phonePrimary}
                </a>
                <a
                  href={`mailto:${AGENCY_INFO.email}`}
                  className="inline-flex min-h-11 items-center transition-colors hover:text-white"
                >
                  {AGENCY_INFO.email}
                </a>
                <a
                  href={`https://${AGENCY_INFO.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center transition-colors hover:text-white"
                >
                  {AGENCY_INFO.website}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} {AGENCY_INFO.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
