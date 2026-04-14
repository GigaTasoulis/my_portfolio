"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Mail } from "lucide-react"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          <div className="md:col-span-2">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">About Me</h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground">
                I'm Anastasios Giannakakis, a results-driven Full Stack Engineer with a passion for
                building high-performance web applications that deliver exceptional user experiences.
              </p>
              <p>
                With a strong foundation in JavaScript, TypeScript, React, and Node.js, I specialise in
                developing, deploying, and maintaining web applications that align technical solutions with
                business objectives. My experience spans across frontend and backend development, with a
                particular focus on API integration and optimisation.
              </p>
              <p>
                I recently completed my Master's Degree in Electrical and Computer Engineering from the
                University of Patras, where I honed my technical skills and developed a deep understanding
                of software engineering principles.
              </p>
              <p>
                Currently, I'm working as a Full Stack Engineer at Deloitte Digital, collaborating with
                high-profile clients across various industries to deliver full-stack solutions that meet
                complex requirements while enhancing user experience.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild>
                <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) }}>
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/cv.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="surface border-0">
              <CardContent className="p-6">
                <h3 className="font-heading font-bold mb-4">Personal Details</h3>
                <ul className="space-y-3 text-sm">
                  {[
                    { label: "Location", value: "Heraklion, Crete, Greece" },
                    { label: "Email", value: "tasgiannak2001@gmail.com", href: "mailto:tasgiannak2001@gmail.com" },
                    { label: "LinkedIn", value: "anastasios-giannakakis", href: "https://www.linkedin.com/in/anastasios-giannakakis/" },
                    { label: "GitHub", value: "GigaTasoulis", href: "https://github.com/GigaTasoulis" },
                  ].map(({ label, value, href }) => (
                    <li key={label}>
                      <span className="text-muted-foreground">{label}</span>
                      {href ? (
                        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block font-medium hover:text-primary transition-colors">
                          {value}
                        </a>
                      ) : (
                        <span className="block font-medium">{value}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="surface border-0">
              <CardContent className="p-6">
                <h3 className="font-heading font-bold mb-4">Education</h3>
                <div>
                  <h4 className="font-medium text-sm">Master's in Electrical & Computer Engineering</h4>
                  <p className="text-muted-foreground text-sm">University of Patras</p>
                  <p className="text-xs text-muted-foreground mt-1">Graduated 07/2024 · Grade 7.5</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
