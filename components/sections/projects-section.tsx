"use client"

import { useState } from "react"
import { Github, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: "workly",
    title: "Workly",
    description: "Comprehensive data management app for businesses to manage clients, suppliers, employees, and transactions.",
    tags: ["TypeScript", "React", "Node.js"],
    githubUrl: "https://github.com/GigaTasoulis/workly",
    featured: true,
  },
  {
    id: "el-professor",
    title: "El Professor",
    description: "Web app for tutoring schools to manage professors, students, payments, calendars, and class scheduling.",
    tags: ["JavaScript", "React", "Node.js"],
    githubUrl: "https://github.com/GigaTasoulis/el-professor",
    featured: true,
  },
  {
    id: "taxi-e",
    title: "Taxi-E",
    description: "Web app for taxi owners to connect with hotels and customers, manage bookings, and streamline operations.",
    tags: ["TypeScript", "React", "API Integration"],
    githubUrl: "https://github.com/GigaTasoulis/taxi-e",
    featured: true,
  },
  {
    id: "densky",
    title: "Densky",
    description: "Showcase and booking web app for a catamaran and ship charter business.",
    tags: ["JavaScript", "React", "Booking System"],
    githubUrl: "https://github.com/GigaTasoulis/densky",
    featured: false,
  },
  {
    id: "tradebot",
    title: "TradeBot",
    description: "Terminal application for automated cryptocurrency trading.",
    tags: ["Python", "Cryptocurrency", "Trading"],
    githubUrl: "https://github.com/GigaTasoulis/TradeBot",
    featured: false,
  },
  {
    id: "studbot",
    title: "StudBot",
    description: "Intelligent university chatbot (Master's thesis) that helps students find information easily.",
    tags: ["JavaScript", "AI", "Chatbot"],
    githubUrl: "https://github.com/GigaTasoulis/StudBot",
    featured: false,
  },
]

const FILTERS = ["All", "React", "TypeScript", "JavaScript", "Python"]

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All")

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tags.some((t) => t.toLowerCase() === filter.toLowerCase()))

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">Projects</h2>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm transition-colors",
                filter === f
                  ? "bg-primary text-white"
                  : "bg-white/[0.05] border border-white/[0.08] text-muted-foreground hover:text-foreground"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="surface rounded-2xl p-6 flex flex-col gap-4 card-hover"
            >
              {/* Project number */}
              <span className="text-4xl font-heading font-bold text-outline select-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="flex-1">
                <h3 className="font-heading text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mt-auto"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github className="h-4 w-4" />
                View on GitHub
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
