"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageTransition from "@/components/page-transition"
import SectionHeading from "@/components/section-heading"

// Replace the projects array with the actual projects with GitHub links

const projects = [
  {
    id: "workly",
    title: "Workly",
    description:
      "A comprehensive data management app for businesses to manage clients, suppliers, employees, transactions, and more.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["TypeScript", "React", "Node.js", "Database"],
    demoUrl: "#",
    githubUrl: "https://github.com/GigaTasoulis/workly",
    featured: true,
  },
  {
    id: "el-professor",
    title: "El Professor",
    description:
      "Web application for tutoring schools to manage professors, students, payments, calendars, and class scheduling with professor login functionality.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["JavaScript", "React", "Node.js", "Authentication"],
    demoUrl: "#",
    githubUrl: "https://github.com/GigaTasoulis/el-professor",
    featured: true,
  },
  {
    id: "taxi-e",
    title: "Taxi-E",
    description:
      "A web application for taxi owners to connect with hotels and customers, manage bookings, and streamline their business operations.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["TypeScript", "React", "API Integration"],
    demoUrl: "#",
    githubUrl: "https://github.com/GigaTasoulis/taxi-e",
    featured: true,
  },
  {
    id: "densky",
    title: "Densky",
    description:
      "Web application for showcasing catamarans and ships of a business, with booking functionality and business information.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["JavaScript", "React", "Booking System"],
    demoUrl: "#",
    githubUrl: "https://github.com/GigaTasoulis/densky",
    featured: false,
  },
  {
    id: "tradebot",
    title: "TradeBot",
    description:
      "A terminal application that allows users to buy and sell cryptocurrency coins with automated trading capabilities.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Python", "Cryptocurrency", "Trading"],
    demoUrl: "#",
    githubUrl: "https://github.com/GigaTasoulis/TradeBot",
    featured: false,
  },
  {
    id: "studbot",
    title: "StudBot",
    description:
      "An intelligent chatbot integrated into a university website to help students find information more easily. Developed as a Diploma Thesis for my Master's degree.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["JavaScript", "AI", "Chatbot", "University"],
    demoUrl: "#",
    githubUrl: "https://github.com/GigaTasoulis/StudBot",
    featured: false,
  },
  {
    id: "sudoku-linear-optimization",
    title: "Sudoku with Linear Optimization",
    description:
      "Algorithms that solve several types of Sudoku puzzles very efficiently using linear optimization techniques.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Python", "Linear Optimization", "Algorithms"],
    demoUrl: "#",
    githubUrl: "https://github.com/GigaTasoulis/Sudoku_with_Linear_Optimization",
    featured: false,
  },
  {
    id: "linear-combinatorial-optimization",
    title: "Linear and Combinatorial Optimization",
    description:
      "A collection of exercises and scripts that solve various linear and combinatorial optimization problems.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Python", "Optimization", "Algorithms"],
    demoUrl: "#",
    githubUrl: "https://github.com/GigaTasoulis/Linear-and-Combinatorial-Optimization",
    featured: false,
  },
  {
    id: "web-programming",
    title: "Web Programming - Restaurant App",
    description:
      "A web application developed to support a live restaurant, showcase the menu, enable table booking, handle payments, and more.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["JavaScript", "Web Development", "E-commerce"],
    demoUrl: "#",
    githubUrl: "https://github.com/GigaTasoulis/Web_Progamming",
    featured: false,
  },
]

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all")

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.tags.some((tag) => tag.toLowerCase().includes(filter.toLowerCase())))

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-24 md:py-32">
        <SectionHeading
          title="My Projects"
          subtitle="A showcase of my work, personal projects, and contributions that demonstrate my skills and experience."
        />

        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {["all", "react", "typescript", "javascript", "python", "node.js"].map((tag) => (
            <Button
              key={tag}
              variant={filter === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(tag)}
              className="capitalize"
            >
              {tag}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-background rounded-lg overflow-hidden shadow-sm card-hover border"
            >
              <div className="h-48 bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground">Project Image</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button asChild variant="default" size="sm">
                    <Link href={`/projects/${project.id}`}>
                      View Details <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="icon" className="h-8 w-8">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found with the selected filter.</p>
            <Button variant="outline" onClick={() => setFilter("all")} className="mt-4">
              Show All Projects
            </Button>
          </div>
        )}
      </div>
    </PageTransition>
  )
}

