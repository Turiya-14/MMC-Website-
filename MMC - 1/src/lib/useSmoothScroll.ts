import Lenis from 'lenis'
import { useEffect } from 'react'
import { gsap, ScrollTrigger } from './gsap'

/**
 * Standard Lenis + GSAP integration: GSAP's ticker drives Lenis's raf loop
 * (instead of Lenis running its own requestAnimationFrame), and Lenis's
 * scroll event keeps ScrollTrigger in sync every frame.
 *
 * Lenis honors prefers-reduced-motion itself (respectReducedMotion defaults
 * to true — smoothing lerp is forced to 1 so scroll tracks input 1:1), so
 * no separate reduced-motion branch is needed here.
 */
export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: false })

    lenis.on('scroll', ScrollTrigger.update)

    const update = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(update)
      lenis.destroy()
    }
  }, [])
}
