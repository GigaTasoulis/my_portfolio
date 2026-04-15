import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import ExperienceSection from "@/components/sections/experience-section"
import SkillsSection from "@/components/sections/skills-section"
import ProjectsSection from "@/components/sections/projects-section"
import ContactSection from "@/components/sections/contact-section"
import CertificationsStrip from "@/components/certifications-strip"

const Divider = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
)

export default function Home() {
  return (
    <>
      <HeroSection />
      <Divider />
      <AboutSection />
      <Divider />
      <ExperienceSection />
      <Divider />
      <SkillsSection />
      <CertificationsStrip />
      <Divider />
      <ProjectsSection />
      <Divider />
      <ContactSection />
    </>
  )
}
