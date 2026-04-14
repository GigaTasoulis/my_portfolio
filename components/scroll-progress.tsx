"use client"

import { useScroll, useSpring, motion } from "framer-motion"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[200] origin-left"
      aria-hidden
    >
      {/* Solid line */}
      <div className="absolute inset-0 bg-primary" />
      {/* Glow bloom */}
      <div className="absolute inset-0 bg-primary blur-sm opacity-60" />
    </motion.div>
  )
}
