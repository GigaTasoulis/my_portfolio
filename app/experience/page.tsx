import PageTransition from "@/components/page-transition"
import SectionHeading from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

export default function ExperiencePage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-24 md:py-32">
        <SectionHeading
          title="Professional Experience"
          subtitle="A detailed overview of my professional journey and the skills I've developed along the way."
        />

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Deloitte Digital */}
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">Full Stack Engineer</h3>
                        <p className="text-lg text-primary">Deloitte Digital</p>
                      </div>
                      <div className="flex items-center mt-2 md:mt-0">
                        <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Apr 2024 - Present</span>
                      </div>
                    </div>

                    <p className="mb-4">
                      As a Full Stack Engineer at Deloitte Digital, I work with a variety of high-profile clients across
                      industries, including major players in the travel and hospitality sectors. My role involves
                      developing, optimizing, and deploying full-stack solutions that meet complex client requirements
                      while enhancing user experience and aligning with business goals.
                    </p>

                    <h4 className="font-bold mb-2">Key Accomplishments:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium">Enhanced User Interfaces:</span> Developed and optimized features
                        with React.js and JavaScript to improve user experience.
                      </li>
                      <li>
                        <span className="font-medium">API Integration:</span> Led integration efforts using Node.js,
                        TypeScript, and Java to expand functionality and improve system performance.
                      </li>
                      <li>
                        <span className="font-medium">Backend Optimization:</span> Implemented improvements that reduced
                        response times and increased system stability during peak usage.
                      </li>
                      <li>
                        <span className="font-medium">Cross-Functional Collaboration:</span> Worked closely with
                        internal teams and client stakeholders to align technical solutions with business goals.
                      </li>
                      <li>
                        <span className="font-medium">Code Quality Assurance:</span> Maintained high standards to ensure
                        scalable and maintainable code for future growth.
                      </li>
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">React</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">TypeScript</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Node.js</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Java</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">API Integration</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Advance Services */}
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">Software Engineer</h3>
                        <p className="text-lg text-primary">Advance Services</p>
                      </div>
                      <div className="flex items-center mt-2 md:mt-0">
                        <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Jul 2023 - Nov 2023</span>
                      </div>
                    </div>

                    <p className="mb-4">
                      At Advance Services, I worked as a full-stack software engineer in a fast-paced, small company. I
                      delivered projects for international clients, managing everything from front-end development to
                      backend database management under tight deadlines. This experience sharpened my adaptability,
                      client communication skills, and ability to deliver high-quality solutions at every stage of the
                      development lifecycle.
                    </p>

                    <h4 className="font-bold mb-2">Key Accomplishments:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium">Full-Stack Development:</span> Delivered end-to-end solutions
                        across both frontend and backend under tight deadlines.
                      </li>
                      <li>
                        <span className="font-medium">Responsive Web Design:</span> Built and maintained websites using
                        HTML, SCSS, JavaScript, React, and Angular.
                      </li>
                      <li>
                        <span className="font-medium">Website Management:</span> Managed and updated the company's
                        website to ensure it stayed current and functional.
                      </li>
                      <li>
                        <span className="font-medium">API Optimization:</span> Integrated and enhanced APIs using
                        GraphQL for efficient data flow.
                      </li>
                      <li>
                        <span className="font-medium">Versatile Development:</span> Supported backend tasks with Python,
                        quickly adapting to diverse project requirements.
                      </li>
                      <li>
                        <span className="font-medium">Team Collaboration:</span> Contributed effectively within a small
                        team, sharing insights and driving project success.
                      </li>
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">React</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Angular</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">SCSS</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">GraphQL</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Python</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

