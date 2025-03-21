import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  align?: "left" | "center" | "right"
}

export default function SectionHeading({ title, subtitle, className, align = "left" }: SectionHeadingProps) {
  return (
    <div className={cn("mb-10", align === "center" && "text-center", align === "right" && "text-right", className)}>
      <h2 className="section-heading">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground max-w-2xl">{subtitle}</p>}
    </div>
  )
}

