import Button from '../components/Button'
import PageHero from '../components/PageHero'
import { PROCESS, SERVICES } from '../data/content'
import { EASE, gsap } from '../lib/gsap'
import { useScrollReveal } from '../lib/useScrollReveal'

function ServicesGrid() {
  const sectionRef = useScrollReveal<HTMLElement>((scope) => {
    gsap.from(scope.querySelectorAll('[data-reveal="card"]'), {
      opacity: 0,
      y: 14,
      duration: 0.9,
      ease: EASE,
      stagger: 0.06,
      scrollTrigger: { trigger: scope, start: 'top 80%' },
    })
  })

  return (
    <section ref={sectionRef} className="bg-surface px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              data-reveal="card"
              className="flex flex-col bg-surface p-6 transition-colors duration-300 hover:bg-blue-wash/40"
            >
              <span className="font-display text-sm font-bold text-brand-blue">{service.letter}</span>
              <h3 className="font-display mt-3 text-lg font-bold text-ink">{service.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{service.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesProcess() {
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
    <section ref={sectionRef} className="border-t border-ink/10 bg-blue-wash/40 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2
          data-reveal="heading"
          className="font-display text-3xl leading-tight font-extrabold text-ink sm:text-4xl"
        >
          How an engagement runs.
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

function ServicesClosingCta() {
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
        <h2 data-reveal="text" className="font-display text-3xl font-extrabold text-white sm:text-4xl">
          Not sure which service you need?
        </h2>
        <p data-reveal="text" className="mx-auto mt-6 max-w-2xl text-white/70">
          Tell us the objective — we'll map the right mix of services to it.
        </p>
        <div data-reveal="text" className="mt-8 flex justify-center">
          <Button to="/contact" variant="inverse">
            Talk to Us
          </Button>
        </div>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        heading="Eight disciplines. One accountable team."
        description="From positioning to performance media to election-day communication — every service runs through the same team, against the same brief, so nothing gets lost in translation."
      />
      <ServicesGrid />
      <ServicesProcess />
      <ServicesClosingCta />
    </>
  )
}
