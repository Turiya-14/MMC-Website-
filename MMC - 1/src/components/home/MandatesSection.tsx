import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { MANDATES } from '../../data/content'
import { EASE, gsap } from '../../lib/gsap'
import { useScrollReveal } from '../../lib/useScrollReveal'

export default function MandatesSection() {
  const sectionRef = useScrollReveal<HTMLElement>((scope) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: scope, start: 'top 80%' },
      defaults: { ease: EASE },
    })

    tl.from(scope.querySelector('[data-reveal="heading"]'), { opacity: 0, y: 14, duration: 0.9 }).from(
      scope.querySelectorAll('[data-reveal="row"]'),
      { opacity: 0, y: 14, duration: 0.9, stagger: 0.1 },
      '<0.1',
    )
  })

  return (
    <section ref={sectionRef} className="bg-surface px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2
          data-reveal="heading"
          className="font-display max-w-2xl text-3xl leading-tight font-extrabold text-ink sm:text-4xl"
        >
          Built for growth, influence and action.
        </h2>

        <div className="mt-10">
          {MANDATES.map((mandate) => (
            <Link
              key={mandate.id}
              to="/services"
              data-reveal="row"
              className="group block border-t border-ink/10 py-8 last:border-b focus:outline-none focus-visible:bg-blue-wash/40 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-blue sm:py-10"
            >
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="font-display text-sm font-bold text-brand-blue">{mandate.number}</span>
                  <span className="relative inline-block">
                    <h3 className="font-display text-2xl font-bold text-ink transition-colors duration-300 group-hover:text-brand-blue group-focus-visible:text-brand-blue sm:text-3xl lg:text-4xl">
                      {mandate.title}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-brand-blue transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
                    />
                  </span>
                </div>
                <ArrowUpRight
                  aria-hidden="true"
                  size={28}
                  className="shrink-0 text-ink/30 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand-blue group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:text-brand-blue"
                />
              </div>

              <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr]">
                <p className="min-h-0 max-w-2xl overflow-hidden text-ink/60">
                  <span className="block pt-4">{mandate.copy}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
