import Button from '../components/Button'
import PageHero from '../components/PageHero'
import { CASE_STUDIES, MEDIA_MANIFEST } from '../data/content'
import { EASE, gsap } from '../lib/gsap'
import { useScrollReveal } from '../lib/useScrollReveal'

function CaseStudiesGrid() {
  const sectionRef = useScrollReveal<HTMLElement>((scope) => {
    gsap.from(scope.querySelectorAll('[data-reveal="card"]'), {
      opacity: 0,
      y: 14,
      duration: 0.9,
      ease: EASE,
      stagger: 0.08,
      scrollTrigger: { trigger: scope, start: 'top 80%' },
    })
  })

  return (
    <section ref={sectionRef} className="bg-surface px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-16">
        {CASE_STUDIES.map((caseStudy) => {
          const image = MEDIA_MANIFEST[caseStudy.mediaKey]
          return (
            <article key={caseStudy.id} data-reveal="card" className="flex flex-col">
              <div className="overflow-hidden rounded-lg border border-ink/10 bg-surface">
                <img src={image.src} alt={image.alt} className="aspect-[4/3] w-full object-cover" />
              </div>
              <span className="mt-5 text-xs font-semibold tracking-wide text-orange uppercase">
                {caseStudy.category}
              </span>
              <h3 className="font-display mt-2 text-2xl font-bold text-ink">{caseStudy.title}</h3>
              <p className="mt-3 text-ink/70">{caseStudy.copy}</p>
              {caseStudy.requiresApproval && (
                <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-blue-wash px-3 py-1 text-xs font-semibold text-brand-blue">
                  Full case study pending client approval
                </span>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}

function WorkClosingCta() {
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
          Ready to be the next case study?
        </h2>
        <div data-reveal="text" className="mt-8 flex justify-center">
          <Button to="/contact" variant="inverse">
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  )
}

export default function Work() {
  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        heading="Brands, leaders and public bodies we've helped move."
        description="A cross-section of the growth, political and institutional mandates we've run — full breakdowns are being finalised with each client before publishing."
      />
      <CaseStudiesGrid />
      <WorkClosingCta />
    </>
  )
}
