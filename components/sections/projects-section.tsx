"use client"

import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Github, ArrowUpRight, ExternalLink } from "lucide-react"
import { useMouseTilt } from "@/hooks/use-mouse-tilt"
import ProjectSheet from "@/components/project-sheet"
import MagneticButton from "@/components/magnetic-button"
import { projects, type Project } from "@/lib/projects"

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

// ── Individual tilt card ──────────────────────────────────────────────────────
function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project
  index: number
  onOpen: (p: Project) => void
}) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useMouseTilt(6)
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const inView = useInView(cardRef, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 48, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12, ease: EASE }}
    >
      {/* Perspective wrapper — separate from the inView ref */}
      <motion.div
        ref={ref}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          perspective: 1000,
        }}
        onMouseMove={onMouseMove}
        onMouseLeave={() => { onMouseLeave(); setHovered(false) }}
        onMouseEnter={() => setHovered(true)}
        className="relative rounded-2xl overflow-hidden cursor-pointer h-full"
      >
        {/* Card body */}
        <div
          className="relative h-full border border-white/[0.08] rounded-2xl p-7 flex flex-col gap-5 transition-colors duration-300"
          style={{
            background: hovered
              ? "linear-gradient(135deg, hsl(239 84% 67% / 0.07), hsl(0 0% 8%))"
              : "linear-gradient(135deg, hsl(0 0% 9%), hsl(0 0% 7%))",
          }}
        >
          {/* Oversized project number */}
          <span
            className="font-heading font-bold leading-none select-none pointer-events-none"
            style={{
              fontSize: "clamp(4rem, 8vw, 6rem)",
              WebkitTextStroke: "1px hsl(0 0% 20%)",
              color: "transparent",
              lineHeight: 1,
            }}
            aria-hidden
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Content */}
          <div className="flex-1">
            <h3 className="font-heading text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-0.5 bg-primary/10 text-primary text-xs rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>

          {/* Static footer link (visible always on mobile) */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors md:hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="h-3.5 w-3.5" /> GitHub
          </a>
        </div>

        {/* Hover overlay — slides up from bottom (desktop only) */}
        <motion.div
          initial={false}
          animate={{ y: hovered ? "0%" : "101%" }}
          transition={{ duration: 0.35, ease: EASE }}
          className="absolute inset-0 hidden md:flex flex-col items-center justify-end p-6 rounded-2xl"
          style={{
            background:
              "linear-gradient(to top, hsl(239 84% 67% / 0.18) 0%, transparent 60%)",
          }}
        >
          <div className="flex gap-3 w-full">
            <MagneticButton strength={5}>
              <button
                onClick={() => onOpen(project)}
                className="flex-1 px-4 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
              >
                <ExternalLink className="h-3.5 w-3.5" /> Details
              </button>
            </MagneticButton>
            <MagneticButton strength={5}>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="px-4 py-2 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <Github className="h-3.5 w-3.5" />
              </a>
            </MagneticButton>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  return (
    <>
      <section id="projects" className="section-padding">
        <div className="container mx-auto px-4 max-w-6xl">

          {/* ── Heading ── */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.2em] uppercase text-primary font-medium mb-3"
          >
            04 / Projects
          </motion.p>

          {/* Typographic heading: outline + filled */}
          <div className="flex flex-wrap items-baseline gap-x-4 mb-16 overflow-hidden">
            <motion.h2
              initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}
              whileInView={{ clipPath: "inset(0% 0 0 0)", opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: EASE }}
              className="font-heading font-bold leading-none"
              style={{
                fontSize: "clamp(2.5rem, 7vw, 5rem)",
                WebkitTextStroke: "1.5px hsl(0 0% 40%)",
                color: "transparent",
              }}
            >
              Selected
            </motion.h2>
            <motion.h2
              initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}
              whileInView={{ clipPath: "inset(0% 0 0 0)", opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="font-heading font-bold leading-none text-foreground"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
            >
              Projects
            </motion.h2>
          </div>

          {/* ── Cards grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpen={setActiveProject}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Detail sheet — rendered outside the section so it overlays everything */}
      <ProjectSheet
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  )
}
