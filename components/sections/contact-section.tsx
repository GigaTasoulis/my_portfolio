"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Mail, Check, Loader2, AlertCircle } from "lucide-react"

/* ─── Validation schema ─────────────────────────────────────────────────── */
const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})
type FormData = z.infer<typeof schema>

/* ─── Floating-label input ──────────────────────────────────────────────── */
interface FloatingFieldProps {
  id: keyof FormData
  label: string
  type?: string
  textarea?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any
  error?: string
}

function FloatingField({ id, label, type = "text", textarea = false, register, error }: FloatingFieldProps) {
  const base =
    "peer w-full bg-transparent border border-border rounded-lg px-4 pt-6 pb-2 text-sm text-foreground outline-none transition-colors focus:border-primary placeholder-transparent"
  const labelBase =
    "absolute left-4 top-4 text-sm text-muted-foreground transition-all duration-200 pointer-events-none " +
    "peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary " +
    "peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs"

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          rows={5}
          placeholder=" "
          className={`${base} resize-none`}
          {...register(id)}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder=" "
          className={base}
          {...register(id)}
        />
      )}
      <label htmlFor={id} className={labelBase}>
        {label}
      </label>
      <AnimatePresence>
        {error && (
          <motion.p
            key={error}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-1 text-xs text-red-400"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─── Hoverable social / contact link ──────────────────────────────────── */
interface SocialLinkProps {
  href?: string
  icon: React.ElementType
  label: string
  value: string
}

function SocialLink({ href, icon: Icon, label, value }: SocialLinkProps) {
  const inner = (
    <motion.div
      className="flex items-center gap-3 group"
      whileHover="hover"
    >
      {/* Icon with float */}
      <motion.div
        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"
        variants={{ hover: { y: -3, backgroundColor: "hsl(var(--primary) / 0.2)" } }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <Icon className="h-4 w-4 text-primary" />
      </motion.div>

      {/* Text with underline draw */}
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <span className="relative inline-block text-sm font-medium">
          {value}
          <span className="absolute bottom-0 left-0 h-px w-full bg-primary origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        </span>
      </div>
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" aria-label={label}>
        {inner}
      </a>
    )
  }
  return <div>{inner}</div>
}

/* ─── Submit button states ──────────────────────────────────────────────── */
function SubmitButton({ status }: { status: "idle" | "sending" | "sent" | "error" }) {
  const isError = status === "error"

  return (
    <button
      type="submit"
      disabled={status !== "idle"}
      className={`relative w-full h-12 rounded-lg text-sm font-medium overflow-hidden transition-colors disabled:opacity-80 ${
        isError
          ? "bg-red-500/20 text-red-400 border border-red-500/30"
          : "bg-primary text-primary-foreground"
      }`}
    >
      <AnimatePresence mode="wait">
        {status === "idle" && (
          <motion.span
            key="idle"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex items-center justify-center gap-2"
          >
            Send Message
          </motion.span>
        )}

        {status === "sending" && (
          <motion.span
            key="sending"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex items-center justify-center gap-2"
          >
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </motion.span>
        )}

        {status === "sent" && (
          <motion.span
            key="sent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center gap-2"
          >
            <Check className="h-5 w-5" />
            Sent!
          </motion.span>
        )}

        {status === "error" && (
          <motion.span
            key="error"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center gap-2"
          >
            <AlertCircle className="h-4 w-4" />
            Something went wrong — try again
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}

/* ─── Shimmer headline ──────────────────────────────────────────────────── */
function ShimmerHeadline() {
  return (
    <h2
      className="font-heading text-4xl md:text-5xl font-bold mb-4 cursor-default select-none shimmer-headline"
    >
      Let&apos;s Work Together
    </h2>
  )
}

/* ─── Section ───────────────────────────────────────────────────────────── */
const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "tasgiannak2001@gmail.com",
    href: "mailto:tasgiannak2001@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "anastasios-giannakakis",
    href: "https://www.linkedin.com/in/anastasios-giannakakis/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "GigaTasoulis",
    href: "https://github.com/GigaTasoulis",
  },
]

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: EASE },
  }),
}

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setStatus("sending")
    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data),
        })
        if (!res.ok) throw new Error(`${res.status}`)
      } else {
        // Dev fallback — simulate network delay
        await new Promise((r) => setTimeout(r, 1400))
      }

      setStatus("sent")
      reset()
      setTimeout(() => setStatus("idle"), 4000)
    } catch {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Headline */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          variants={FADE_UP}
        >
          <ShimmerHeadline />
          <p className="text-muted-foreground mb-12 text-base">
            Currently open to new opportunities — drop me a message and I&apos;ll get back to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ── Form (left) ── */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            custom={1}
            variants={FADE_UP}
            className="space-y-5"
          >
            <FloatingField id="name" label="Name" register={register} error={errors.name?.message} />
            <FloatingField id="email" label="Email" type="email" register={register} error={errors.email?.message} />
            <FloatingField id="message" label="Message" textarea register={register} error={errors.message?.message} />
            <SubmitButton status={status} />
          </motion.form>

          {/* ── Social / contact info (right) ── */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            custom={2}
            variants={FADE_UP}
            className="flex flex-col gap-6 lg:pl-6"
          >
            {contactLinks.map((link) => (
              <SocialLink key={link.label} {...link} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
