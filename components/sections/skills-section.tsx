const skillCategories = [
  {
    name: "Frontend",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS/SCSS", "Angular", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Java", "Python", "Express", "RESTful APIs", "GraphQL", "Authentication"],
  },
  {
    name: "Database",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
  },
  {
    name: "Tools & Cloud",
    skills: ["Git", "AWS", "CI/CD", "Docker", "Agile/Scrum", "Salesforce", "Adobe AEM"],
  },
]

const DOTS = 5

function ProficiencyDots({ level }: { level: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`Proficiency ${level} of ${DOTS}`}>
      {Array.from({ length: DOTS }).map((_, i) => (
        <span
          key={i}
          className={`w-1.5 h-1.5 rounded-full ${i < level ? "bg-primary" : "bg-muted"}`}
        />
      ))}
    </span>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.name} className="surface rounded-2xl p-6">
              <h3 className="font-heading font-bold mb-4 text-primary">{cat.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm bg-white/[0.05] border border-white/[0.08] text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
