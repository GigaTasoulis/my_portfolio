"use client"

import { useEffect } from "react"
import Lenis from "lenis"
import { MotionConfig } from "framer-motion"

// Store instance on window so navbar (and any component) can call scrollTo
declare global {
  interface Window {
    __lenis?: Lenis
  }
}

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    })

    window.__lenis = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      window.__lenis = undefined
    }
  }, [])

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
