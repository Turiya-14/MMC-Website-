import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CASE_STUDIES, MEDIA_MANIFEST } from '../../data/content'
import { EASE, gsap } from '../../lib/gsap'
import { useScrollReveal } from '../../lib/useScrollReveal'

export default function SelectedWorkSection() {
  const [featured, ...supporting] = CASE_STUDIES

  const featuredImage = MEDIA_MANIFEST[featured.mediaKey]

  const sectionRef = useScrollReveal<HTMLElement>((scope) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: scope, start: 'top 80%' },
      defaults: { ease: EASE },
    })

    tl.from(scope.querySelector('[data-reveal="heading"]'), { opacity: 0, y: 14, duration: 0.9 })
      .from(
        scope.querySelectorAll('[data-reveal="featured"]'),
        { opacity: 0, y: 14, duration: 0.9, stagger: 0.1 },
        '<0.1',
      )
      .from(
        scope.querySelectorAll('[data-reveal="card"]'),
        { opacity: 0, y: 14, duration: 0.9, stagger: 0.08 },
        '<0.1',
      )
  })

  return (
    <section ref={sectionRef} className="bg-navy px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2
          data-reveal="heading"
          className="font-display text-3xl leading-tight font-extrabold text-white sm:text-4xl"
        >
          Selected Work
        </h2>

        <Link
          to="/work"
          data-reveal="featured"
          className="group mt-12 grid grid-cols-1 gap-8 rounded-lg focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange md:grid-cols-2 md:items-center md:gap-12"
        >
          <div>
            <span className="text-xs font-semibold tracking-wide text-orange uppercase">{featured.category}</span>
            <span className="relative mt-3 block w-fit">
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">{featured.title}</h3>
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-orange transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
              />
            </span>
            <p className="mt-4 text-white/70">{featured.copy}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white/80">
              View case study
              <ArrowUpRight
                aria-hidden="true"
                size={16}
                className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5"
              />
            </span>
          </div>
          <div className="overflow-hidden rounded-lg border border-white/10 bg-surface">
            <img
              src={featuredImage.src}
              alt={featuredImage.alt}
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035] group-focus-visible:scale-[1.035] md:aspect-[16/10]"
            />
          </div>
        </Link>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {supporting.map((caseStudy) => {
            const image = MEDIA_MANIFEST[caseStudy.mediaKey]
            return (
              <Link
                key={caseStudy.id}
                to="/work"
                data-reveal="card"
                className="group flex flex-col rounded-lg focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange"
              >
                <span className="text-xs font-semibold tracking-wide text-orange uppercase">
                  {caseStudy.category}
                </span>
                <span className="relative mt-2 block w-fit">
                  <h4 className="font-display text-lg font-bold text-white">{caseStudy.title}</h4>
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-orange transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
                  />
                </span>
                <p className="mt-3 text-sm text-white/70">{caseStudy.copy}</p>
                <div className="mt-4 overflow-hidden rounded-lg border border-white/10 bg-surface">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035] group-focus-visible:scale-[1.035]"
                  />
                </div>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white/80">
                  View case study
                  <ArrowUpRight
                    aria-hidden="true"
                    size={16}
                    className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5"
                  />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
