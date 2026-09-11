import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, CustomEase)

// Matches cubic-bezier(0.16, 1, 0.3, 1) — a restrained, fast-out entrance ease.
CustomEase.create('mmcEase', '0.16, 1, 0.3, 1')
export const EASE = 'mmcEase'

export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export { gsap, ScrollTrigger }
