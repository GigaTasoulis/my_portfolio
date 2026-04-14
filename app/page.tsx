"use client"

import Image from "next/image"
import { ArrowDown, ArrowRight, Github } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import AboutSection from "@/components/sections/about-section"
import ExperienceSection from "@/components/sections/experience-section"
import SkillsSection from "@/components/sections/skills-section"
import ProjectsSection from "@/components/sections/projects-section"
import ContactSection from "@/components/sections/contact-section"

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

export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-20"
      >
        {/* Radial glow backdrop */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, hsl(239 84% 67% / 0.15), transparent)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="container mx-auto px-4 max-w-3xl"
        >
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Open to new opportunities
          </motion.div>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 text-balance">
            Hi, I'm{" "}
            <span className="gradient-text">Anastasios</span>
          </h1>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground mb-6">
            Frontend Engineer
          </h2>

          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 text-balance">
            I build high-performance web applications with React, Next.js, and TypeScript —
            with a focus on UI/UX that people love to use.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollTo("projects")}
              className="rounded-full"
            >
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("contact")}
              className="rounded-full"
            >
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="ghost"
              asChild
              className="rounded-full"
            >
              <a
                href="https://github.com/GigaTasoulis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => scrollTo("about")}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll to about"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce-y" />
        </motion.button>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* ── All sections ─────────────────────────────────────────────── */}
      <AboutSection />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <ExperienceSection />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <SkillsSection />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <ProjectsSection />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <ContactSection />
    </>
  )
}
