"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, Database, Globe, Server, Github } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import PageTransition from "@/components/page-transition"
import CertificationsSection from "@/components/certifications-section"

export default function Home() {
  return (
    <PageTransition>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4">
                  Hi, I'm <span className="gradient-text">Anastasios</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium mb-6">Full Stack Engineer</h2>
                <p className="text-muted-foreground mb-8 max-w-lg">
                  Results-driven developer with expertise in JavaScript, TypeScript, React, and Node.js. I build
                  high-performance web applications that deliver exceptional user experiences.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link href="/projects">
                      View My Work <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact">Get In Touch</Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative hidden md:block"
              >
                <div className="aspect-square rounded-full bg-gradient-to-br from-primary/20 to-primary/5 p-1">
                  <div className="h-full w-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                    <div className="relative w-4/5 h-4/5 rounded-full overflow-hidden">
                      <Image
                        src="/images/anastasios-profile.jpeg"
                        alt="Anastasios Giannakakis - Full Stack Engineer"
                        fill
                        className="object-cover"
                        priority
                        sizes="(min-width: 768px) 384px, 100vw"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute top-1/4 -left-8 p-4 bg-background rounded-lg shadow-lg card-hover">
                  <Code className="h-6 w-6 text-primary mb-2" />
                  <h3 className="font-medium">Frontend</h3>
                </div>
                <div className="absolute top-2/3 -right-8 p-4 bg-background rounded-lg shadow-lg card-hover">
                  <Server className="h-6 w-6 text-primary mb-2" />
                  <h3 className="font-medium">Backend</h3>
                </div>
                <div className="absolute bottom-0 left-1/4 p-4 bg-background rounded-lg shadow-lg card-hover">
                  <Database className="h-6 w-6 text-primary mb-2" />
                  <h3 className="font-medium">Database</h3>
                </div>
                <div className="absolute top-10 right-1/4 p-4 bg-background rounded-lg shadow-lg card-hover">
                  <Globe className="h-6 w-6 text-primary mb-2" />
                  <h3 className="font-medium">Web</h3>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <CertificationsSection />

        {/* Featured Skills Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-12">Technical Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { name: "JavaScript", icon: "devicon-javascript-plain" },
                { name: "TypeScript", icon: "devicon-typescript-plain" },
                { name: "React", icon: "devicon-react-original" },
                { name: "Node.js", icon: "devicon-nodejs-plain" },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex flex-col items-center p-6 bg-background rounded-lg shadow-sm card-hover"
                >
                  <div className="text-4xl mb-3 text-primary">
                    <i className={skill.icon}></i>
                  </div>
                  <h3 className="font-medium">{skill.name}</h3>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button asChild variant="outline">
                <Link href="/skills">
                  View All Skills <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="section-heading text-center">Featured Projects</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              A selection of my recent work showcasing my technical skills and problem-solving abilities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Workly",
                  description:
                    "A comprehensive data management app for businesses to manage clients, suppliers, employees, and transactions.",
                  tags: ["TypeScript", "React", "Node.js"],
                  image: "/placeholder.svg?height=200&width=400",
                  id: "workly",
                  github: "https://github.com/GigaTasoulis/workly",
                },
                {
                  title: "El Professor",
                  description:
                    "Web app for tutoring schools to manage professors, students, payments, and class scheduling.",
                  tags: ["JavaScript", "React", "Node.js"],
                  image: "/placeholder.svg?height=200&width=400",
                  id: "el-professor",
                  github: "https://github.com/GigaTasoulis/el-professor",
                },
                {
                  title: "StudBot",
                  description:
                    "An intelligent chatbot for my university's website to help students find information easily.",
                  tags: ["JavaScript", "AI", "Chatbot"],
                  image: "/placeholder.svg?height=200&width=400",
                  id: "studbot",
                  github: "https://github.com/GigaTasoulis/StudBot",
                },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-background rounded-lg overflow-hidden shadow-sm card-hover"
                >
                  <div className="h-48 bg-muted relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-muted-foreground">Project Image</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/projects/${project.id}`}>View Details</Link>
                      </Button>
                      <Button asChild variant="outline" size="icon" className="h-8 w-8">
                        <a
                          href={project.github}
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

            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/projects">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work Together?</h2>
              <p className="text-muted-foreground mb-8">
                I'm currently available for freelance work and full-time opportunities. Let's build something amazing
                together!
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

