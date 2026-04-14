"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion"

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const experiences = [
  {
    title: "Full Stack Engineer",
    company: "Deloitte Digital",
    period: "Apr 2024 – Present",
    description:
      "Work with high-profile clients across industries including travel and hospitality. Develop, optimise, and deploy full-stack solutions that meet complex requirements while enhancing user experience.",
    highlights: [
      { label: "Enhanced User Interfaces", detail: "Developed and optimised features with React.js and JavaScript." },
      { label: "API Integration", detail: "Led integration efforts using Node.js, TypeScript, and Java." },
      { label: "Backend Optimisation", detail: "Reduced response times and increased stability during peak usage." },
      { label: "Cross-Functional Collaboration", detail: "Aligned technical solutions with client business goals." },
    ],
    tags: ["React", "TypeScript", "Node.js", "Java", "API Integration"],
  },
  {
    title: "Software Engineer",
    company: "Advance Services",
    period: "Jul 2023 – Nov 2023",
    description:
      "Full-stack development in a fast-paced environment delivering projects for international clients — from frontend to backend under tight deadlines.",
    highlights: [
      { label: "Full-Stack Development", detail: "End-to-end solutions across frontend and backend." },
      { label: "Responsive Web Design", detail: "Built websites using HTML, SCSS, JavaScript, React, and Angular." },
      { label: "API Optimisation", detail: "Integrated and enhanced APIs using GraphQL." },
      { label: "Versatile Development", detail: "Supported backend tasks with Python." },
    ],
    tags: ["React", "Angular", "SCSS", "GraphQL", "Python"],
  },
]

// ── Single timeline entry ────────────────────────────────────────────────────
function TimelineEntry({
  exp,
  index,
}: {
  exp: (typeof experiences)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -32 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: EASE }}
      className="relative sm:pl-12"
    >
      {/* Timeline dot with glow */}
      <div className="absolute left-0 top-7 hidden sm:flex items-center justify-center -translate-x-1/2">
        <span className="w-3 h-3 rounded-full bg-primary block" style={{ boxShadow: "0 0 0 4px hsl(var(--background)), 0 0 0 6px hsl(239 84% 67% / 0.4)" }} />
      </div>

      {/* Card */}
      <div className="surface rounded-2xl p-6 transition-colors duration-300 hover:bg-[hsl(0_0%_10%)]">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
          <div>
            <h3 className="font-heading text-xl font-bold">{exp.title}</h3>
            <p className="text-primary font-medium text-sm mt-0.5">{exp.company}</p>
          </div>
          <span className="text-xs text-muted-foreground bg-white/[0.05] px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-auto">
            {exp.period}
          </span>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-5">{exp.description}</p>

        <ul className="space-y-2 mb-5">
          {exp.highlights.map(({ label, detail }) => (
            <li key={label} className="text-sm flex gap-2">
              <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
              <span>
                <span className="font-medium text-foreground">{label}: </span>
                <span className="text-muted-foreground">{detail}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-0.5 bg-primary/10 text-primary text-xs rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ── Section ──────────────────────────────────────────────────────────────────
export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Drive the timeline line scaleY from scroll position within this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 40%"],
  })
  const lineScaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 20 })

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] uppercase text-primary font-medium mb-3"
        >
          02 / Experience
        </motion.p>

        <motion.h2
          initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}
          whileInView={{ clipPath: "inset(0% 0 0 0)", opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-heading text-3xl md:text-5xl font-bold mb-16"
        >
          Experience
        </motion.h2>

        {/* Timeline container */}
        <div ref={containerRef} className="relative">

          {/* Self-drawing vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden sm:block overflow-hidden">
            <motion.div
              style={{ scaleY: lineScaleY, originY: 0 }}
              className="absolute inset-0 bg-gradient-to-b from-primary via-indigo-400 to-primary/30"
            />
          </div>

          {/* Entries */}
          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <TimelineEntry key={exp.company} exp={exp} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
