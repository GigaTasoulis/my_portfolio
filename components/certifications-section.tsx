"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Udemy",
    date: "March 2025",
    icon: "aws",
  },
  {
    name: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "January 2025",
    icon: "react",
  },
  {
    name: "Python (Basic)",
    issuer: "HackerRank",
    date: "January 2025",
    icon: "python",
  },
  {
    name: "React (Basic)",
    issuer: "HackerRank",
    date: "January 2025",
    icon: "react",
  },
  {
    name: "Adobe Experience Manager 6.5",
    issuer: "Udemy",
    date: "July 2024",
    icon: "adobe",
  },
  {
    name: "Salesforce Certified Platform Developer I",
    issuer: "Salesforce",
    date: "May 2024",
    icon: "salesforce",
  },
  {
    name: "Python",
    issuer: "TestDome",
    date: "February 2024",
    icon: "python",
  },
  {
    name: "Certificate of Competency in English (C2)",
    issuer: "University of Michigan",
    date: "December 2016",
    icon: "language",
  },
]

export default function CertificationsSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications & Achievements</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full card-hover">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 text-primary">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold mb-2">{cert.name}</h3>
                  <div className="mt-auto">
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">{cert.date}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

