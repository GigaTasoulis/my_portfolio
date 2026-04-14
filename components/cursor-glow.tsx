"use client"

import { useEffect, useRef } from "react"

/**
 * Full-section spotlight that follows the cursor.
 * Position this as an absolute/fixed child of your section (pointer-events-none).
 * It reads the mouse position relative to its nearest positioned ancestor.
 */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Start glow centered so it's visible before any mouse movement
    el.style.setProperty("--glow-x", "50%")
    el.style.setProperty("--glow-y", "40%")

    const onMouseMove = (e: MouseEvent) => {
      const parent = el.parentElement
      if (!parent) return
      const rect = parent.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      el.style.setProperty("--glow-x", `${x}%`)
      el.style.setProperty("--glow-y", `${y}%`)
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", onMouseMove)
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(600px circle at var(--glow-x, 50%) var(--glow-y, 40%), hsl(239 84% 67% / 0.08), transparent 70%)",
      }}
    />
  )
}
