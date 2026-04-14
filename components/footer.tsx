import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Anastasios Giannakakis. Built with Next.js.
        </p>
        <div className="flex items-center gap-4">
          {[
            { href: "https://github.com/GigaTasoulis", icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/in/anastasios-giannakakis/", icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:tasgiannak2001@gmail.com", icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
