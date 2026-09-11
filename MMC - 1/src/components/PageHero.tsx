import { EASE, gsap } from '../lib/gsap'
import { useScrollReveal } from '../lib/useScrollReveal'

interface PageHeroProps {
  eyebrow: string
  heading: string
  description: string
}

// Shared secondary-page hero: restrained fade/rise reveal on load, not the
// pinned scroll-scrubbed sequence reserved for the homepage (per Phase 7).
export default function PageHero({ eyebrow, heading, description }: PageHeroProps) {
  const sectionRef = useScrollReveal<HTMLElement>((scope) => {
    gsap.from(scope.querySelectorAll('[data-reveal="text"]'), {
      opacity: 0,
      y: 16,
      duration: 0.9,
      ease: EASE,
      stagger: 0.1,
    })
  })

  return (
    <section ref={sectionRef} className="border-b border-ink/10 bg-surface px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <span
          data-reveal="text"
          className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-blue-wash px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-blue uppercase"
        >
          {eyebrow}
        </span>
        <h1
          data-reveal="text"
          className="font-display mt-6 text-4xl leading-[1.05] font-black text-ink sm:text-5xl lg:text-6xl"
        >
          {heading}
        </h1>
        <p data-reveal="text" className="mx-auto mt-6 max-w-2xl text-base text-ink/70 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  )
}
