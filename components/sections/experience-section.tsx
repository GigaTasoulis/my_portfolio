const experiences = [
  {
    title: "Full Stack Engineer",
    company: "Deloitte Digital",
    period: "Apr 2024 – Present",
    description:
      "Work with high-profile clients across industries including travel and hospitality. Develop, optimise, and deploy full-stack solutions that meet complex client requirements while enhancing user experience.",
    highlights: [
      { label: "Enhanced User Interfaces", detail: "Developed and optimised features with React.js and JavaScript." },
      { label: "API Integration", detail: "Led integration efforts using Node.js, TypeScript, and Java." },
      { label: "Backend Optimisation", detail: "Reduced response times and increased stability during peak usage." },
      { label: "Cross-Functional Collaboration", detail: "Aligned technical solutions with client business goals." },
    ],
    tags: ["React", "TypeScript", "Node.js", "Java", "API Integration"],
  },
  {
    title: "Software Engineer",
    company: "Advance Services",
    period: "Jul 2023 – Nov 2023",
    description:
      "Full-stack development in a fast-paced small company. Delivered projects for international clients, managing everything from frontend to backend database management under tight deadlines.",
    highlights: [
      { label: "Full-Stack Development", detail: "End-to-end solutions across frontend and backend." },
      { label: "Responsive Web Design", detail: "Built websites using HTML, SCSS, JavaScript, React, and Angular." },
      { label: "API Optimisation", detail: "Integrated and enhanced APIs using GraphQL." },
      { label: "Versatile Development", detail: "Supported backend tasks with Python." },
    ],
    tags: ["React", "Angular", "SCSS", "GraphQL", "Python"],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-border hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.company} className="sm:pl-10 relative">
                {/* Timeline dot */}
                <div className="timeline-dot hidden sm:block" />

                <div className="surface rounded-2xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-heading text-xl font-bold">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{exp.description}</p>

                  <ul className="space-y-1.5 mb-4">
                    {exp.highlights.map(({ label, detail }) => (
                      <li key={label} className="text-sm">
                        <span className="font-medium text-foreground">{label}: </span>
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
