import { Link } from 'react-router-dom'
import { cn } from '../lib/cn'

interface LogoProps {
  className?: string
  /** 'header' sits inside the fixed 76px header; 'footer' has more room to
   *  breathe against the navy background, so it renders larger. */
  variant?: 'header' | 'footer'
}

const SIZES: Record<NonNullable<LogoProps['variant']>, string> = {
  header: 'h-11 md:h-12',
  footer: 'h-12 md:h-14',
}

export default function Logo({ className, variant = 'header' }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label="MMC home"
      className={cn('inline-flex min-h-11 w-fit shrink-0 items-center self-start', className)}
    >
      <img src="/mmc-logo.svg" alt="MMC" className={cn(SIZES[variant], 'w-auto')} />
    </Link>
  )
}
