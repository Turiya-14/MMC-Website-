import { useEffect, useRef } from 'react'
import { EASE, gsap, prefersReducedMotion } from '../../lib/gsap'

const MOBILE_BREAKPOINT = '(max-width: 767.98px)'
const DESKTOP_BREAKPOINT = '(min-width: 768px)'

/**
 * Drives the pinned, scroll-scrubbed hero sequence on desktop/tablet, and a
 * simple fade+translate entrance on mobile — one GSAP timeline per
 * breakpoint, switched via gsap.matchMedia() so resizing across 768px
 * reverts and rebuilds cleanly. Skipped entirely under reduced motion,
 * leaving the hero at its authored (fully visible) resting state.
 */
export function useHeroSequence() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section || prefersReducedMotion()) return

    const mm = gsap.matchMedia()

    mm.add({ isDesktop: DESKTOP_BREAKPOINT, isMobile: MOBILE_BREAKPOINT }, (context) => {
      const { isDesktop } = context.conditions as { isDesktop: boolean; isMobile: boolean }

      if (isDesktop) {
        buildPinnedSequence(section)
      } else {
        buildSimpleEntrance(section)
      }
    })

    return () => mm.revert()
  }, [])

  return sectionRef
}

function buildSimpleEntrance(section: HTMLElement) {
  gsap.from(section.querySelectorAll('[data-reveal="text"]'), {
    opacity: 0,
    y: 14,
    duration: 0.9,
    ease: EASE,
    stagger: 0.1,
    scrollTrigger: { trigger: section, start: 'top 85%' },
  })
}

// Four kinetic words: horizontal travel distance and relative speed per the
// spec (~0.65 / 1 / 0.78 / 1.12). Speed is expressed as duration — a faster
// word covers its distance in less of the timeline — so all four arrive
// close together despite their staggered starts.
const KINETIC_WORDS = [
  { start: 0.45, x: '14vw', duration: 0.15 },
  { start: 0.47, x: '-24vw', duration: 0.1 },
  { start: 0.49, x: '18vw', duration: 0.13 },
  { start: 0.51, x: '-28vw', duration: 0.09 },
]

function buildPinnedSequence(section: HTMLElement) {
  const q = (sel: string) => section.querySelector<HTMLElement>(sel)
  const qa = (sel: string) => section.querySelectorAll<HTMLElement>(sel)

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: '+=210%',
      scrub: 0.9,
      pin: true,
      anticipatePin: 1,
    },
    defaults: { ease: 'none' },
  })

  // Padding tween: guarantees the timeline's total duration is exactly 1,
  // so every position label below (0.12, 0.28, ...) maps 1:1 to "percent
  // through the pin" regardless of what the other tweens' own durations add up to.
  tl.to({}, { duration: 1 })

  // 0–12% READ: static hold, nothing to animate.

  // 12–28% SEPARATE
  // group1 (leftmost) drifts further left, group3 (rightmost) drifts
  // further right, group2 (middle) barely moves — so they spread apart
  // instead of the faster-moving middle group overtaking its neighbour.
  tl.to(q('[data-word-group="1"]'), { xPercent: -22, duration: 0.16 }, 0.12)
    .to(q('[data-word-group="2"]'), { xPercent: 2, duration: 0.16 }, 0.12)
    .to(q('[data-word-group="3"]'), { xPercent: 12, duration: 0.16 }, 0.12)
    .to(q('[data-scroll-indicator]'), { opacity: 0, duration: 0.08 }, 0.24)
    .to(qa('[data-copy-fade]'), { opacity: 0, duration: 0.1 }, 0.3)

  // 28–45% BRANDS FOCUS
  // Growing from the left edge (not center) so the scale-up moves away from
  // "We build" to its left instead of back into it.
  tl.fromTo(
    q('[data-brands-word]'),
    { transformOrigin: 'left center' },
    { scale: 1.48, duration: 0.17 },
    0.28,
  )

  // 45–63% KINETIC TYPE
  KINETIC_WORDS.forEach((word, i) => {
    const el = q(`[data-kinetic-word="${i}"]`)
    if (!el) return
    tl.fromTo(el, { x: '0vw', opacity: 0 }, { x: word.x, opacity: 1, duration: word.duration }, word.start)
  })

  // 63–78% BLUE TAKEOVER
  tl.fromTo(
    q('[data-blue-panel]'),
    { scaleX: 0, transformOrigin: 'right center' },
    { scaleX: 1, duration: 0.15 },
    0.63,
  )

  // 78–90% CLIMAX
  tl.fromTo(q('[data-climax]'), { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.12 }, 0.78)

  // 90–100%: hold on the climax frame, then the pin releases naturally at
  // the trigger's `end`, handing off into the next section.
}
