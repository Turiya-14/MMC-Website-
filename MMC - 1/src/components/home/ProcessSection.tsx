import { PROCESS } from '../../data/content'
import { EASE, gsap } from '../../lib/gsap'
import { useScrollReveal } from '../../lib/useScrollReveal'

export default function ProcessSection() {
  const sectionRef = useScrollReveal<HTMLElement>((scope) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: scope, start: 'top 80%' },
      defaults: { ease: EASE },
    })

    tl.from(scope.querySelector('[data-reveal="heading"]'), { opacity: 0, y: 14, duration: 0.9 }).from(
      scope.querySelectorAll('[data-reveal="step"]'),
      { opacity: 0, y: 14, duration: 0.9, stagger: 0.08 },
      '<0.1',
    )
  })

  return (
    <section ref={sectionRef} className="bg-surface px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2
          data-reveal="heading"
          className="font-display text-3xl leading-tight font-extrabold text-ink sm:text-4xl"
        >
          Our Process
        </h2>

        <div className="mt-12 flex flex-col gap-10 md:flex-row md:gap-6">
          {PROCESS.map((step) => (
            <div key={step.number} data-reveal="step" className="flex-1 border-ink/10 pt-6 md:border-t-2">
              <span className="font-display text-sm font-bold text-orange">{step.number}</span>
              <h3 className="font-display mt-2 text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{step.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
