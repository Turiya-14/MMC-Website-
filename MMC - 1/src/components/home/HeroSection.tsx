import Button from '../Button'
import {
  AGENCY_INFO,
  HERO_CLIMAX_STATEMENT,
  HERO_CTAS,
  HERO_KINETIC_WORDS,
  HERO_SCROLL_INDICATOR,
} from '../../data/content'
import { useHeroSequence } from './useHeroSequence'

const KINETIC_ROW_POSITIONS = ['top-[20%]', 'top-[38%]', 'top-[56%]', 'top-[74%]']

export default function HeroSection() {
  const sectionRef = useHeroSequence()

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-surface md:h-screen">
      <div className="relative z-20 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 md:py-0 lg:px-8">
        <span
          data-reveal="text"
          data-copy-fade
          className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-blue-wash px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-blue uppercase"
        >
          {AGENCY_INFO.secondaryTagline}
        </span>

        <h1 className="mt-6 font-display text-4xl leading-[1.05] font-black text-ink sm:text-5xl lg:text-6xl">
          <span data-reveal="text" data-word-group="1" className="inline-block">
            We don't run ads.
          </span>
          <br />
          <span data-reveal="text" data-word-group="2" className="mr-3 inline-block text-orange sm:mr-4 lg:mr-5">
            We build
          </span>
          <span data-reveal="text" data-word-group="3" data-brands-word className="inline-block text-orange">
            brands.
          </span>
        </h1>

        <p data-reveal="text" data-copy-fade className="mt-6 max-w-xl text-base text-ink/70 sm:text-lg">
          {AGENCY_INFO.heroDescription}
        </p>

        <div data-reveal="text" data-copy-fade className="mt-8 flex flex-wrap justify-center gap-4">
          <Button to={HERO_CTAS.primary.to} variant="primary">
            {HERO_CTAS.primary.label}
          </Button>
          <Button to={HERO_CTAS.secondary.to} variant="secondary">
            {HERO_CTAS.secondary.label}
          </Button>
        </div>
      </div>

      <div
        data-reveal="text"
        data-scroll-indicator
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-semibold tracking-wide text-ink/40 uppercase md:flex"
      >
        {HERO_SCROLL_INDICATOR}
        <span className="h-8 w-px bg-ink/20" aria-hidden="true" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 hidden md:block" aria-hidden="true">
        {HERO_KINETIC_WORDS.map((word, i) => (
          <div key={word} className={`absolute inset-x-0 flex justify-center ${KINETIC_ROW_POSITIONS[i]}`}>
            <span
              data-kinetic-word={i}
              className="font-display text-6xl font-black text-brand-blue/25 opacity-0 lg:text-8xl"
            >
              {word}
            </span>
          </div>
        ))}
      </div>

      <div
        data-blue-panel
        className="absolute inset-0 z-30 hidden origin-right scale-x-0 bg-brand-blue md:block"
        aria-hidden="true"
      >
        <div className="flex h-full items-center justify-center px-4 text-center">
          <p
            data-climax
            className="font-display text-4xl font-black text-white opacity-0 sm:text-6xl lg:text-7xl"
          >
            {HERO_CLIMAX_STATEMENT}
          </p>
        </div>
      </div>
    </section>
  )
}
