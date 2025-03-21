import PageTransition from "@/components/page-transition"
import SectionHeading from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Mail } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-24 md:py-32">
        <SectionHeading
          title="About Me"
          subtitle="Learn more about my background, experience, and what drives me as a developer."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg">
                I'm Anastasios Giannakakis, a results-driven Full Stack Engineer with a passion for building
                high-performance web applications that deliver exceptional user experiences.
              </p>

              <p>
                With a strong foundation in JavaScript, TypeScript, React, and Node.js, I specialize in developing,
                deploying, and maintaining web applications that align technical solutions with business objectives. My
                experience spans across frontend and backend development, with a particular focus on API integration and
                optimization.
              </p>

              <p>
                I recently completed my Master's Degree in Electrical and Computer Engineering from the University of
                Patras, where I honed my technical skills and developed a deep understanding of software engineering
                principles.
              </p>

              <p>
                Currently, I'm working as a Full Stack Engineer at Deloitte Digital, where I collaborate with
                high-profile clients across various industries to deliver full-stack solutions that meet complex
                requirements while enhancing user experience.
              </p>

              <p>
                My approach to development is centered around writing clean, maintainable code that scales well and
                delivers measurable improvements in performance. I'm constantly learning and adapting to new
                technologies to stay at the forefront of web development practices.
              </p>

              <p>
                Outside of work, I enjoy contributing to open-source projects, attending tech meetups, and expanding my
                knowledge through continuous learning. I believe in the power of collaboration and knowledge sharing to
                drive innovation in the tech community.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="/cv.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </a>
              </Button>
            </div>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Personal Details</h3>
                <ul className="space-y-3">
                  <li>
                    <span className="text-muted-foreground">Name:</span>
                    <span className="block font-medium">Anastasios Giannakakis</span>
                  </li>
                  <li>
                    <span className="text-muted-foreground">Location:</span>
                    <span className="block font-medium">Patras, Greece</span>
                  </li>
                  <li>
                    <span className="text-muted-foreground">Email:</span>
                    <a href="mailto:tasgiannak2001@gmail.com" className="block font-medium hover:text-primary">
                      tasgiannak2001@gmail.com
                    </a>
                  </li>
                  <li>
                    <span className="text-muted-foreground">Phone:</span>
                    <a href="tel:+306943818851" className="block font-medium hover:text-primary">
                      +30 694 381 8851
                    </a>
                  </li>
                  <li>
                    <span className="text-muted-foreground">LinkedIn:</span>
                    <a
                      href="https://www.linkedin.com/in/anastasios-giannakakis/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block font-medium hover:text-primary"
                    >
                      anastasios-giannakakis
                    </a>
                  </li>
                  <li>
                    <span className="text-muted-foreground">GitHub:</span>
                    <a
                      href="https://github.com/GigaTasoulis"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block font-medium hover:text-primary"
                    >
                      GigaTasoulis
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Master's Degree in Electrical and Computer Engineering</h4>
                    <p className="text-muted-foreground">University of Patras</p>
                    <p className="text-sm">Graduated: 07/2024 | Grade: 7.5</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Certifications</h3>
                <ul className="space-y-3">
                  <li>
                    <span className="font-medium">AWS Certified Cloud Practitioner</span>
                    <span className="block text-sm text-muted-foreground">Udemy | Issued March 2025</span>
                    <span className="block text-sm text-muted-foreground">
                      Credential ID UC-da99a411-4690-46b8-a4ae-2a1996590348
                    </span>
                  </li>
                  <li>
                    <span className="font-medium">Frontend Developer (React)</span>
                    <span className="block text-sm text-muted-foreground">HackerRank | Issued January 2025</span>
                    <span className="block text-sm text-muted-foreground">Credential ID DEF23945865C</span>
                  </li>
                  <li>
                    <span className="font-medium">Python (Basic)</span>
                    <span className="block text-sm text-muted-foreground">HackerRank | Issued January 2025</span>
                    <span className="block text-sm text-muted-foreground">Credential ID A2F07E6125CE</span>
                  </li>
                  <li>
                    <span className="font-medium">React (Basic)</span>
                    <span className="block text-sm text-muted-foreground">HackerRank | Issued January 2025</span>
                    <span className="block text-sm text-muted-foreground">Credential ID BD7AB070A189</span>
                  </li>
                  <li>
                    <span className="font-medium">Adobe Experience Manager 6.5</span>
                    <span className="block text-sm text-muted-foreground">Udemy | Issued July 2024</span>
                    <span className="block text-sm text-muted-foreground">
                      Credential ID UC-cc70d808-5de9-487e-92e1-eca8dc0f7e01
                    </span>
                  </li>
                  <li>
                    <span className="font-medium">Salesforce Certified Platform Developer I</span>
                    <span className="block text-sm text-muted-foreground">Salesforce | Issued May 2024</span>
                    <span className="block text-sm text-muted-foreground">Credential ID 4523326</span>
                  </li>
                  <li>
                    <span className="font-medium">Python</span>
                    <span className="block text-sm text-muted-foreground">TestDome | Issued February 2024</span>
                    <span className="block text-sm text-muted-foreground">
                      Credential ID www.testdome.com/certificates/37245d0b191b420e9fa54b13f3d35782
                    </span>
                  </li>
                  <li>
                    <span className="font-medium">Certificate of Competency in English (C2)</span>
                    <span className="block text-sm text-muted-foreground">
                      University of Michigan | Issued December 2016
                    </span>
                    <span className="block text-sm text-muted-foreground">Credential ID 9022527770</span>
                  </li>
                  <li>
                    <span className="font-medium">Certificate of Competency in English (B2)</span>
                    <span className="block text-sm text-muted-foreground">
                      University of Michigan | Issued May 2015
                    </span>
                    <span className="block text-sm text-muted-foreground">Credential ID 9021883570</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

