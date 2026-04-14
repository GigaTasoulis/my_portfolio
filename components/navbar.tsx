"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { label: "Home",       id: "hero"       },
  { label: "About",      id: "about"      },
  { label: "Experience", id: "experience" },
  { label: "Skills",     id: "skills"     },
  { label: "Projects",   id: "projects"   },
  { label: "Contact",    id: "contact"    },
]

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -80, duration: 1.4 })
  } else {
    el.scrollIntoView({ behavior: "smooth" })
  }
}

export default function Navbar() {
  const [active, setActive] = useState("hero")
  const [mobileOpen, setMobileOpen] = useState(false)

  // Track which section is most visible
  const updateActive = useCallback(() => {
    const scores: { id: string; top: number }[] = []

    for (const { id } of NAV_ITEMS) {
      const el = document.getElementById(id)
      if (!el) continue
      const rect = el.getBoundingClientRect()
      // Score = how close the section top is to the top third of the viewport
      if (rect.top <= window.innerHeight * 0.6 && rect.bottom > 0) {
        scores.push({ id, top: rect.top })
      }
    }

    if (scores.length === 0) return
    // The section whose top is closest to (but still above) 60% viewport height
    const best = scores.reduce((prev, cur) =>
      Math.abs(cur.top) < Math.abs(prev.top) ? cur : prev
    )
    setActive(best.id)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", updateActive, { passive: true })
    updateActive()
    return () => window.removeEventListener("scroll", updateActive)
  }, [updateActive])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <>
      {/* ── Desktop floating pill ─────────────────────────────────────── */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <nav
          className="glass rounded-full px-2 py-1.5 flex items-center gap-1"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="px-3 py-1.5 text-sm font-heading font-bold gradient-text mr-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full"
            aria-label="Scroll to top"
          >
            AG
          </button>

          <div className="w-px h-4 bg-white/10" aria-hidden />

          {/* Nav links */}
          <div className="flex items-center gap-0.5 ml-1">
            {NAV_ITEMS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={cn(
                  "relative px-3 py-1.5 text-sm rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  active === id
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-current={active === id ? "location" : undefined}
              >
                {/* Sliding background indicator */}
                {active === id && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.08]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{label}</span>
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* ── Mobile hamburger ──────────────────────────────────────────── */}
      <header className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="glass w-10 h-10 rounded-full flex items-center justify-center text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="h-4 w-4" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Menu className="h-4 w-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </header>

      {/* ── Mobile dropdown menu ──────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed top-16 right-4 z-50 md:hidden glass rounded-2xl p-2 min-w-[160px]"
            role="dialog"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col gap-0.5">
              {NAV_ITEMS.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => {
                    scrollToSection(id)
                    setMobileOpen(false)
                  }}
                  className={cn(
                    "text-left px-3 py-2 rounded-xl text-sm transition-colors w-full",
                    active === id
                      ? "bg-white/[0.08] text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
                  )}
                  aria-current={active === id ? "location" : undefined}
                >
                  {label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
