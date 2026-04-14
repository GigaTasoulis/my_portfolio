import { useRef } from "react"
import { useSpring } from "framer-motion"

/**
 * Returns spring-animated rotateX / rotateY values that follow the mouse
 * position relative to the element, creating a 3-D tilt effect.
 */
export function useMouseTilt(strength = 10) {
  const ref = useRef<HTMLDivElement>(null)
  const rotateX = useSpring(0, { stiffness: 200, damping: 25, mass: 0.5 })
  const rotateY = useSpring(0, { stiffness: 200, damping: 25, mass: 0.5 })

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    rotateY.set(((e.clientX - cx) / (rect.width / 2)) * strength)
    rotateX.set(-((e.clientY - cy) / (rect.height / 2)) * strength)
  }

  const onMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return { ref, rotateX, rotateY, onMouseMove, onMouseLeave }
}
