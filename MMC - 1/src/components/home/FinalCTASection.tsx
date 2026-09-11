import Button from '../Button'
import { CLOSING_SECTION } from '../../data/content'
import { EASE, gsap } from '../../lib/gsap'
import { useScrollReveal } from '../../lib/useScrollReveal'

export default function FinalCTASection() {
  const sectionRef = useScrollReveal<HTMLElement>((scope) => {
    gsap.from(scope.querySelectorAll('[data-reveal="text"]'), {
      opacity: 0,
      y: 14,
      duration: 0.9,
      ease: EASE,
      stagger: 0.1,
      scrollTrigger: { trigger: scope, start: 'top 85%' },
    })
  })

  return (
    <section ref={sectionRef} className="bg-navy py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 data-reveal="text" className="font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          {CLOSING_SECTION.heading}
        </h2>
        <p data-reveal="text" className="mx-auto mt-6 max-w-2xl text-white/70">
          {CLOSING_SECTION.copy}
        </p>
        <div data-reveal="text" className="mt-8 flex justify-center">
          <Button to={CLOSING_SECTION.cta.to} variant="inverse">
            {CLOSING_SECTION.cta.label}
          </Button>
        </div>
      </div>
    </section>
  )
}
