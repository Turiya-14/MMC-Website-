import { Menu } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../lib/nav'
import CtaButton from './CtaButton'
import Logo from './Logo'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const location = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[76px] border-b border-ink/10 bg-surface">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `inline-flex min-h-11 items-center px-2 text-sm font-semibold transition-colors ${
                  isActive ? 'text-brand-blue' : 'text-ink/70 hover:text-ink'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <CtaButton />
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 md:hidden"
        >
          <Menu size={24} />
        </button>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} triggerRef={menuButtonRef} />
    </header>
  )
}
