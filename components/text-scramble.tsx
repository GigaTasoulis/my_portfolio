"use client"

import { useState, useEffect, useRef } from "react"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&"

interface TextScrambleProps {
  text: string
  className?: string
  /** Delay before the effect starts (ms) */
  delay?: number
  /** How fast the scramble resolves — lower = faster (default 0.4) */
  speed?: number
}

export default function TextScramble({
  text,
  className,
  delay = 0,
  speed = 0.4,
}: TextScrambleProps) {
  // Initialise with the real text so SSR and the first client render match.
  // The scramble starts only inside useEffect (client-only).
  const [output, setOutput] = useState(text)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      let iter = 0

      // Immediately show a fully scrambled string to kick off the effect
      setOutput(
        text
          .split("")
          .map((c) => (c === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)]))
          .join("")
      )

      const tick = () => {
        setOutput(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " "
              if (i < iter) return char
              return CHARS[Math.floor(Math.random() * CHARS.length)]
            })
            .join("")
        )

        iter += speed
        if (iter <= text.length) {
          frameRef.current = requestAnimationFrame(tick)
        } else {
          setOutput(text)
        }
      }

      frameRef.current = requestAnimationFrame(tick)
    }, delay)

    return () => {
      clearTimeout(timeout)
      cancelAnimationFrame(frameRef.current)
    }
  }, [text, delay, speed])

  return (
    <span className={className} aria-label={text}>
      {output}
    </span>
  )
}
