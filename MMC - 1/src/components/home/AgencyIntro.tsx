import { AGENCY_INTRODUCTION, MEDIA_MANIFEST } from '../../data/content'
import { EASE, gsap } from '../../lib/gsap'
import { useScrollReveal } from '../../lib/useScrollReveal'

export default function AgencyIntro() {
  const image = MEDIA_MANIFEST[AGENCY_INTRODUCTION.mediaKey]

  const sectionRef = useScrollReveal<HTMLElement>((scope) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: scope, start: 'top 80%' },
      defaults: { ease: EASE },
    })

    tl.from(scope.querySelectorAll('[data-reveal="text"]'), {
      opacity: 0,
      y: 14,
      duration: 0.9,
      stagger: 0.1,
    }).from(
      scope.querySelector('[data-reveal="image"]'),
      { opacity: 0, y: 14, duration: 0.9 },
      '<0.1',
    )
  })

  return (
    <section ref={sectionRef} className="bg-surface px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-5 lg:gap-12">
        <div className="lg:col-span-2">
          <h2
            data-reveal="text"
            className="font-display text-3xl leading-tight font-extrabold text-ink sm:text-4xl"
          >
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

        <div
          data-reveal="image"
          className="overflow-hidden rounded-lg border border-ink/10 bg-surface lg:col-span-3"
        >
          <img src={image.src} alt={image.alt} className="aspect-[4/3] h-full w-full object-cover" />
        </div>
      </div>
    </section>
  )
}
