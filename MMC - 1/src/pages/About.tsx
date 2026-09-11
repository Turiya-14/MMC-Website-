import Button from '../components/Button'
import PageHero from '../components/PageHero'
import { AGENCY_INTRODUCTION, CORE_TEAM, LEADERSHIP, MANDATES, MEDIA_MANIFEST, PROCESS } from '../data/content'
import { EASE, gsap } from '../lib/gsap'
import { useScrollReveal } from '../lib/useScrollReveal'

function IntroSection() {
  const image = MEDIA_MANIFEST[AGENCY_INTRODUCTION.mediaKey]

  const sectionRef = useScrollReveal<HTMLElement>((scope) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: scope, start: 'top 80%' },
      defaults: { ease: EASE },
    })

    tl.from(scope.querySelectorAll('[data-reveal="text"]'), { opacity: 0, y: 14, duration: 0.9, stagger: 0.1 }).from(
      scope.querySelector('[data-reveal="image"]'),
      { opacity: 0, y: 14, duration: 0.9 },
      '<0.1',
    )
  })

  return (
    <section ref={sectionRef} className="bg-surface px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-5 lg:gap-12">
        <div className="lg:col-span-2">
          <h2 data-reveal="text" className="font-display text-3xl leading-tight font-extrabold text-ink sm:text-4xl">
            {AGENCY_INTRODUCTION.heading}
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            {AGENCY_INTRODUCTION.paragraphs.map((paragraph) => (
              <p key={paragraph} data-reveal="text" className="text-base text-ink/70 sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div data-reveal="image" className="overflow-hidden rounded-lg border border-ink/10 bg-surface lg:col-span-3">
          <img src={image.src} alt={image.alt} className="aspect-[4/3] h-full w-full object-cover" />
        </div>
      </div>
    </section>
  )
}

function MandatesRecap() {
  const sectionRef = useScrollReveal<HTMLElement>((scope) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: scope, start: 'top 80%' },
      defaults: { ease: EASE },
    })

    tl.from(scope.querySelector('[data-reveal="heading"]'), { opacity: 0, y: 14, duration: 0.9 }).from(
      scope.querySelectorAll('[data-reveal="item"]'),
      { opacity: 0, y: 14, duration: 0.9, stagger: 0.1 },
      '<0.1',
    )
  })

  return (
    <section ref={sectionRef} className="border-t border-ink/10 bg-blue-wash/40 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2
          data-reveal="heading"
          className="font-display max-w-2xl text-3xl leading-tight font-extrabold text-ink sm:text-4xl"
        >
          What we're mandated to do.
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {MANDATES.map((mandate) => (
            <div key={mandate.id} data-reveal="item" className="rounded-lg border border-ink/10 bg-surface p-6">
              <span className="font-display text-sm font-bold text-brand-blue">{mandate.number}</span>
              <h3 className="font-display mt-2 text-xl font-bold text-ink">{mandate.title}</h3>
              <p className="mt-3 text-sm text-ink/70">{mandate.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessRecap() {
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
          How we work.
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

function TeamSection() {
  const sectionRef = useScrollReveal<HTMLElement>((scope) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: scope, start: 'top 80%' },
      defaults: { ease: EASE },
    })

    tl.from(scope.querySelector('[data-reveal="heading"]'), { opacity: 0, y: 14, duration: 0.9 })
      .from(scope.querySelectorAll('[data-reveal="lead"]'), { opacity: 0, y: 14, duration: 0.9, stagger: 0.1 }, '<0.1')
      .from(
        scope.querySelectorAll('[data-reveal="member"]'),
        { opacity: 0, y: 14, duration: 0.9, stagger: 0.06 },
        '<0.1',
      )
  })

  return (
    <section ref={sectionRef} className="border-t border-ink/10 bg-navy px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2
          data-reveal="heading"
          className="font-display text-3xl leading-tight font-extrabold text-white sm:text-4xl"
        >
          Leadership & team.
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {LEADERSHIP.map((person) => (
            <div key={person.name} data-reveal="lead" className="rounded-lg border border-white/10 p-6">
              <h3 className="font-display text-xl font-bold text-white">{person.name}</h3>
              <p className="mt-1 text-sm text-orange">{person.role}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-8">
          {CORE_TEAM.map((person) => (
            <span key={person.name} data-reveal="member" className="text-sm font-semibold text-white/70">
              {person.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutClosingCta() {
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
    <section ref={sectionRef} className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 data-reveal="text" className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
          Want to work with the team?
        </h2>
        <div data-reveal="text" className="mt-8 flex justify-center">
          <Button to="/contact" variant="primary">
            Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About MakeMyCampaign"
        heading="The Science of Resonance. The Strategy of Growth."
        description="We combine strategy, creativity, technology and audience intelligence to build brands, leaders and campaigns that move people to act."
      />
      <IntroSection />
      <MandatesRecap />
      <ProcessRecap />
      <TeamSection />
      <AboutClosingCta />
    </>
  )
}
