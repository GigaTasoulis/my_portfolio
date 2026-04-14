"use client"

import Image from "next/image"
import { ArrowDown, ArrowRight, Github } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import TextScramble from "@/components/text-scramble"
import CursorGlow from "@/components/cursor-glow"
import MagneticButton from "@/components/magnetic-button"

function scrollTo(id: string) {
  if (typeof window === "undefined") return
  const el = document.getElementById(id)
  if (!el) return
  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -80, duration: 1.4 })
  } else {
    el.scrollIntoView({ behavior: "smooth" })
  }
}

// Stagger container + child variants for the reveal
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

// Cubic bezier typed as a const tuple so Framer Motion's Easing types are satisfied
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const reveal = {
  hidden: { clipPath: "inset(100% 0 0 0)", opacity: 0 },
  show: {
    clipPath: "inset(0% 0 0 0)",
    opacity: 1,
    transition: { duration: 0.7, ease: EASE },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* ── Backgrounds ────────────────────────────────────────────── */}

      {/* Static top-glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(ellipse 90% 55% at 50% -5%, hsl(239 84% 67% / 0.18), transparent)",
        }}
      />

      {/* Faint dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(0 0% 100% / 0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Cursor-following spotlight */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <CursorGlow />
      </div>

      {/* ── Content ────────────────────────────────────────────────── */}
      <div className="container mx-auto px-4 max-w-3xl pt-24 pb-32">

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Open to new opportunities
        </motion.div>

        {/* Profile image with spinning gradient ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-24 h-24 mb-8"
        >
          {/* Spinning conic-gradient border */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-full animate-spin-slow"
            style={{
              background:
                "conic-gradient(from 0deg, hsl(239 84% 67%), #818cf8, #a5b4fc, transparent, hsl(239 84% 67%))",
              padding: "2px",
              borderRadius: "9999px",
            }}
          />
          {/* Inner image */}
          <div className="absolute inset-[3px] rounded-full overflow-hidden bg-background">
            <Image
              src="/images/anastasios-profile.jpeg"
              alt="Anastasios Giannakakis"
              fill
              className="object-cover"
              priority
              sizes="96px"
            />
          </div>
        </motion.div>

        {/* Name — staggered word reveal */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="overflow-hidden mb-2"
        >
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-none flex flex-wrap justify-center gap-x-[0.3em]">
            <motion.span variants={reveal} className="inline-block">
              Hi, I&apos;m
            </motion.span>
            <motion.span variants={reveal} className="inline-block gradient-text">
              Anastasios
            </motion.span>
          </h1>
        </motion.div>

        {/* Role — text scramble */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.55 }}
          className="mb-6"
        >
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground">
            <TextScramble
              text="Frontend Engineer"
              delay={700}
              speed={0.45}
            />
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.7 }}
          className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 text-balance leading-relaxed"
        >
          I craft high-performance web applications with React, Next.js, and TypeScript —
          with a focus on UI/UX that people love to use.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.85 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <MagneticButton>
            <Button
              size="lg"
              onClick={() => scrollTo("projects")}
              className="rounded-full px-8 font-heading"
            >
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </MagneticButton>

          <MagneticButton>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("contact")}
              className="rounded-full px-8 font-heading"
            >
              Get In Touch
            </Button>
          </MagneticButton>

          <MagneticButton>
            <Button
              size="lg"
              variant="ghost"
              asChild
              className="rounded-full w-12 h-12 p-0"
            >
              <a
                href="https://github.com/GigaTasoulis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors group"
        aria-label="Scroll to About"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase opacity-60 group-hover:opacity-100 transition-opacity">
          Scroll
        </span>
        <ArrowDown className="h-4 w-4 animate-bounce-y" />
      </motion.button>
    </section>
  )
}
