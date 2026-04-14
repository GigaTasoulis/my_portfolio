import { type ReactNode, type CSSProperties } from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps {
  children: ReactNode
  /** Duration of one full loop in seconds (default 30) */
  duration?: number
  /** Scroll right-to-left when false (default), left-to-right when true */
  reverse?: boolean
  className?: string
}

/**
 * Infinite horizontal ticker.
 * Renders `children` twice side-by-side so the loop is seamless.
 * Pauses on hover via the `pause-on-hover` utility class on the wrapper.
 */
export default function Marquee({
  children,
  duration = 30,
  reverse = false,
  className,
}: MarqueeProps) {
  return (
    <div
      className={cn("overflow-hidden pause-on-hover", className)}
      style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
    >
      <div
        className={cn(
          "marquee-track",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        style={{ willChange: "transform" }}
        aria-hidden
      >
        {/* First copy */}
        <div className="flex items-center">{children}</div>
        {/* Duplicate for seamless loop */}
        <div className="flex items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  )
}
