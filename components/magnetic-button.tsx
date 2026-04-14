"use client"

import { useRef, type ReactNode } from "react"
import { motion, useSpring } from "framer-motion"

interface MagneticButtonProps {
  children: ReactNode
  /** Max displacement in px (default 8) */
  strength?: number
}

export default function MagneticButton({ children, strength = 8 }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useSpring(0, { stiffness: 200, damping: 18, mass: 0.5 })
  const y = useSpring(0, { stiffness: 200, damping: 18, mass: 0.5 })

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    // Normalise to -1..1 then scale by strength
    x.set(((e.clientX - cx) / (rect.width / 2)) * strength)
    y.set(((e.clientY - cy) / (rect.height / 2)) * strength)
  }

  const onMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ x, y, display: "inline-block" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </motion.div>
  )
}
