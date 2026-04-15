"use client"

import { motion } from "framer-motion"
import Marquee from "@/components/marquee"

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

// ── Marquee data ─────────────────────────────────────────────────────────────
const ROW_1 = [
  { name: "JavaScript",  icon: "⚡" },
  { name: "TypeScript",  icon: "🔷" },
  { name: "React",       icon: "⚛️"  },
  { name: "Next.js",     icon: "▲"  },
  { name: "Node.js",     icon: "🟢" },
  { name: "Tailwind",    icon: "🌊" },
  { name: "GraphQL",     icon: "◈"  },
  { name: "Python",      icon: "🐍" },
]

const ROW_2 = [
  { name: "AWS",         icon: "☁️"  },
  { name: "Docker",      icon: "🐳" },
  { name: "Git",         icon: "⑂"  },
  { name: "PostgreSQL",  icon: "🐘" },
  { name: "MongoDB",     icon: "🍃" },
  { name: "Java",        icon: "☕" },
  { name: "Angular",     icon: "🔺" },
  { name: "Salesforce",  icon: "☁️"  },
]

// ── Skill categories with proficiency (1–5) ──────────────────────────────────
const CATEGORIES = [
  {
    name: "Frontend",
    color: "from-indigo-500/20 to-violet-500/5",
    accent: "text-indigo-400",
    skills: [
      { name: "React / Next.js",    level: 5 },
      { name: "TypeScript",         level: 5 },
      { name: "JavaScript",         level: 5 },
      { name: "CSS / SCSS / Tailwind", level: 5 },
      { name: "Angular",            level: 4 },
      { name: "Framer Motion",      level: 4 },
    ],
  },
  {
    name: "Backend",
    color: "from-emerald-500/20 to-teal-500/5",
    accent: "text-emerald-400",
    skills: [
      { name: "Node.js / Express",  level: 5 },
      { name: "Java",               level: 4 },
      { name: "Python",             level: 4 },
      { name: "RESTful APIs",       level: 5 },
      { name: "GraphQL",            level: 4 },
      { name: "Authentication",     level: 4 },
    ],
  },
  {
    name: "Database",
    color: "from-amber-500/20 to-orange-500/5",
    accent: "text-amber-400",
    skills: [
      { name: "PostgreSQL",         level: 4 },
      { name: "MongoDB",            level: 4 },
      { name: "MySQL",              level: 4 },
      { name: "Firebase",           level: 3 },
    ],
  },
  {
    name: "Tools & Cloud",
    color: "from-sky-500/20 to-blue-500/5",
    accent: "text-sky-400",
    skills: [
      { name: "Git",                level: 5 },
      { name: "AWS",                level: 4 },
      { name: "Docker",             level: 3 },
      { name: "CI/CD",              level: 4 },
      { name: "Salesforce",         level: 4 },
      { name: "Adobe AEM",          level: 3 },
    ],
  },
]

// ── Proficiency dots ──────────────────────────────────────────────────────────
function Dots({ level }: { level: number }) {
  return (
    <span className="flex gap-[3px]" aria-label={`${level} of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`w-[5px] h-[5px] rounded-full transition-colors ${
            i < level ? "bg-primary" : "bg-white/10"
          }`}
        />
      ))}
    </span>
  )
}

// ── Marquee pill ──────────────────────────────────────────────────────────────
function Pill({ name, icon }: { name: string; icon: string }) {
  return (
    <span className="inline-flex items-center gap-2 mx-3 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.07] text-sm text-muted-foreground whitespace-nowrap select-none">
      <span className="text-base leading-none">{icon}</span>
      {name}
    </span>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding overflow-hidden">

      {/* ── Header ── */}
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] uppercase text-primary font-medium mb-3"
        >
          03 / Skills
        </motion.p>

        <motion.h2
          initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}
          whileInView={{ clipPath: "inset(0% 0 0 0)", opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-heading text-3xl md:text-5xl font-bold mb-16"
        >
          Skills
        </motion.h2>
      </div>

      {/* ── Marquee rows ── */}
      <div className="space-y-3 mb-20">
        {/* Row 1 — left */}
        <Marquee duration={28}>
          {ROW_1.map((item) => (
            <Pill key={item.name} {...item} />
          ))}
        </Marquee>

        {/* Row 2 — right */}
        <Marquee duration={22} reverse>
          {ROW_2.map((item) => (
            <Pill key={item.name} {...item} />
          ))}
        </Marquee>
      </div>

      {/* ── Category cards ── */}
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
              className={`gradient-border surface rounded-2xl p-6 bg-gradient-to-br ${cat.color}`}
            >
              <h3 className={`font-heading font-bold text-lg mb-5 ${cat.accent}`}>
                {cat.name}
              </h3>

              <ul className="space-y-3">
                {cat.skills.map(({ name, level }) => (
                  <li key={name} className="flex items-center justify-between gap-4">
                    <span className="text-sm text-foreground/90">{name}</span>
                    <Dots level={level} />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  )
}
