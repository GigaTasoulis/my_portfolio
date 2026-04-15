"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Github, ArrowUpRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/projects"

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

interface ProjectSheetProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectSheet({ project, onClose }: ProjectSheetProps) {
  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          {/* Sheet */}
          <motion.aside
            key="sheet"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-lg overflow-y-auto bg-[hsl(0_0%_6%)] border-l border-border flex flex-col"
            aria-label={`${project.title} details`}
            role="dialog"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[hsl(0_0%_6%)] border-b border-border">
              <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">
                Project Details
              </span>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/[0.06] transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 px-6 py-8 space-y-8">

              {/* Title & date */}
              <div>
                <p className="text-xs text-muted-foreground mb-1">{project.date}</p>
                <h2 className="font-heading text-3xl font-bold">{project.title}</h2>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Screenshot */}
              {project.image ? (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/[0.07]">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 512px"
                  />
                </div>
              ) : null}

              {/* Description */}
              <div>
                <h3 className="font-heading font-semibold mb-2 text-sm uppercase tracking-wider text-muted-foreground">
                  Overview
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.longDescription}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-heading font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="font-heading font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                  Technologies
                </h3>
                <ul className="space-y-2">
                  {project.technologies.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="sticky bottom-0 px-6 py-4 bg-[hsl(0_0%_6%)] border-t border-border flex gap-3">
              {project.liveUrl && (
                <Button asChild className="flex-1 rounded-full" size="lg">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              <Button
                asChild
                variant={project.liveUrl ? "outline" : "default"}
                className="flex-1 rounded-full"
                size="lg"
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
