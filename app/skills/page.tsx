"use client"

import { useState } from "react"
import PageTransition from "@/components/page-transition"
import SectionHeading from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

// Update the skillCategories array with more accurate skills based on your projects

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React", level: 90 },
      { name: "HTML", level: 95 },
      { name: "CSS/SCSS", level: 85 },
      { name: "Angular", level: 75 },
      { name: "Responsive Design", level: 90 },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Java", level: 80 },
      { name: "Python", level: 80 },
      { name: "Express", level: 85 },
      { name: "RESTful APIs", level: 90 },
      { name: "GraphQL", level: 75 },
      { name: "Authentication", level: 85 },
    ],
  },
  {
    id: "database",
    name: "Database",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "Firebase", level: 75 },
      { name: "Data Modeling", level: 80 },
    ],
  },
  {
    id: "tools",
    name: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      { name: "AWS", level: 75 },
      { name: "CI/CD", level: 75 },
      { name: "Agile/Scrum", level: 85 },
      { name: "Salesforce", level: 80 },
      { name: "Adobe Experience Manager", level: 75 },
      { name: "Linear Optimization", level: 85 },
    ],
  },
]

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState("frontend")

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-24 md:py-32">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="A comprehensive overview of my technical skills and proficiency levels across different domains."
        />

        <Tabs defaultValue="frontend" value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">{category.name} Skills</h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-primary rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl font-bold mb-6">Key Competencies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Full Stack Development",
              "Web Development",
              "API Development",
              "Proficient in TypeScript",
              "Proficient in JavaScript",
              "Proficient in React",
              "Proficient in Java",
              "Proficient in Python",
              "Proficient in SCSS",
            ].map((competency, index) => (
              <motion.div
                key={competency}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-primary/10 text-primary rounded-lg p-4 text-center font-medium"
              >
                {competency}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

