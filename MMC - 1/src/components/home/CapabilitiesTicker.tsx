import { CAPABILITIES_MARQUEE } from '../../data/content'
import { EASE, gsap } from '../../lib/gsap'
import { useScrollReveal } from '../../lib/useScrollReveal'

export default function CapabilitiesTicker() {
  const sectionRef = useScrollReveal<HTMLElement>((scope) => {
    gsap.from(scope.querySelectorAll('[data-reveal="text"]'), {
      opacity: 0,
      y: 14,
      duration: 0.9,
      ease: EASE,
      scrollTrigger: { trigger: scope, start: 'top 90%' },
    })
  })

  return (
    <section ref={sectionRef} className="border-y border-ink/10 bg-surface py-6">
      <div
        data-reveal="text"
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 sm:px-6 lg:px-8"
      >
        {CAPABILITIES_MARQUEE.map((item) => (
          <span
            key={item}
            className="flex items-center gap-2 text-sm font-semibold tracking-wide text-ink/60 uppercase"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-orange" aria-hidden="true" />
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
