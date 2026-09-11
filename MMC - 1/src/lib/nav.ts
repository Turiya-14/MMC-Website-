export interface NavLink {
  label: string
  path: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Work', path: '/work' },
  { label: 'Contact', path: '/contact' },
]
