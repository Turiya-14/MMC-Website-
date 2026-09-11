import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '../lib/cn'

interface ButtonProps {
  to: string
  variant?: 'primary' | 'secondary' | 'inverse'
  className?: string
  onClick?: () => void
  children: React.ReactNode
}

const ARROW_CLASSES =
  'transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5'

export default function Button({ to, variant = 'primary', className, onClick, children }: ButtonProps) {
  if (variant === 'secondary') {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={cn(
          'group inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-ink transition-transform duration-300 ease-out hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue',
          className,
        )}
      >
        <span className="relative">
          {children}
          <span
            aria-hidden="true"
            className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-brand-blue transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
          />
        </span>
        <ArrowUpRight size={16} aria-hidden="true" className={ARROW_CLASSES} />
      </Link>
    )
  }

  const solid = variant === 'inverse' ? 'bg-white text-navy hover:bg-white/90' : 'bg-orange text-white hover:bg-orange/90'
  const ring = variant === 'inverse' ? 'focus-visible:outline-white' : 'focus-visible:outline-orange'

  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        'group inline-flex min-h-11 items-center gap-1.5 rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-300 ease-out hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        solid,
        ring,
        className,
      )}
    >
      {children}
      <ArrowUpRight size={16} aria-hidden="true" className={ARROW_CLASSES} />
    </Link>
  )
}
