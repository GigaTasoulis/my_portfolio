"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Download, Mail, MapPin, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

// ── Count-up number ──────────────────────────────────────────────────────────
function CountUp({
  to,
  suffix = "",
  duration = 1400,
}: {
  to: number
  suffix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  useEffect(() => {
    if (!inView) return
    const steps = 50
    const increment = to / steps
    const interval = duration / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= to) {
        setCount(to)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, interval)
    return () => clearInterval(timer)
  }, [inView, to, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

// ── Clip-path reveal wrapper ─────────────────────────────────────────────────
function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}
      whileInView={{ clipPath: "inset(0% 0 0 0)", opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ── Data ─────────────────────────────────────────────────────────────────────
const stats = [
  { value: 2, suffix: "+", label: "Years experience" },
  { value: 6, suffix: "",  label: "Projects built"   },
  { value: 1, suffix: "",  label: "Master's degree"  },
  { value: 5, suffix: "+", label: "Certifications"   },
]

const details = [
  { icon: MapPin,   label: "Heraklion, Crete, Greece",     href: undefined },
  { icon: Mail,     label: "tasgiannak2001@gmail.com",      href: "mailto:tasgiannak2001@gmail.com" },
  { icon: Linkedin, label: "anastasios-giannakakis",        href: "https://www.linkedin.com/in/anastasios-giannakakis/" },
  { icon: Github,   label: "GigaTasoulis",                  href: "https://github.com/GigaTasoulis" },
]

const bio = [
  "I'm Anastasios Giannakakis, a results-driven Full Stack Engineer with a passion for building high-performance web applications that deliver exceptional user experiences.",
  "With a strong foundation in JavaScript, TypeScript, React, and Node.js, I specialise in developing, deploying, and maintaining web applications that align technical solutions with business objectives.",
  "Currently working as a Full Stack Engineer at Deloitte Digital, collaborating with high-profile clients across industries to deliver full-stack solutions that meet complex requirements while enhancing user experience.",
]

// ── Component ────────────────────────────────────────────────────────────────
export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Section label */}
        <Reveal>
          <p className="text-xs tracking-[0.2em] uppercase text-primary font-medium mb-3">
            01 / About
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-16">
            About Me
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* ── Left: bio + CTAs ── */}
          <div className="lg:col-span-3 space-y-6">
            {bio.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className={`leading-relaxed ${i === 0 ? "text-lg text-foreground font-medium" : "text-muted-foreground"}`}>
                  {paragraph}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.35}>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  onClick={() => {
                    const el = document.getElementById("contact")
                    if (el) window.__lenis?.scrollTo(el, { offset: -80 }) ?? el.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="rounded-full"
                >
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </Button>

                {/* CV button with animated gradient border */}
                <div className="relative group">
                  <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-primary via-indigo-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[1px]" />
                  <Button variant="outline" asChild className="relative rounded-full">
                    <a href="/cv.pdf" download>
                      <Download className="mr-2 h-4 w-4" /> Download CV
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── Right: stats + details ── */}
          <div className="lg:col-span-2 space-y-8">

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, suffix, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
                  className="surface rounded-2xl p-5"
                >
                  <p className="font-heading text-4xl font-bold gradient-text leading-none mb-1">
                    <CountUp to={value} suffix={suffix} />
                  </p>
                  <p className="text-xs text-muted-foreground">{label}</p>
                </motion.div>
              ))}
            </div>

            {/* Personal details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
              className="surface rounded-2xl p-5 space-y-3"
            >
              {details.map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors truncate"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground">{label}</span>
                  )}
                </div>
              ))}

              <div className="pt-2 border-t border-border">
                <p className="text-xs text-muted-foreground mb-0.5">Education</p>
                <p className="text-sm font-medium">MSc Electrical & Computer Engineering</p>
                <p className="text-xs text-muted-foreground">University of Patras · 2024</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
