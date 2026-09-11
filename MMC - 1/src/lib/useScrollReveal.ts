import { useEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from './gsap'

/**
 * Runs `animate` inside a gsap.context scoped to the returned ref, once on
 * mount, and reverts it on unmount. Skipped entirely when the user prefers
 * reduced motion, so those elements simply keep their authored (fully
 * visible, untransformed) markup — there is nothing to reset.
 */
export function useScrollReveal<T extends HTMLElement>(animate: (scope: T) => void) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    const ctx = gsap.context(() => animate(el), el)
    return () => ctx.revert()
  }, [])

  return ref
}
