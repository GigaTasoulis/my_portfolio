"use client"

import { useState } from "react"
import type React from "react"
import { Send, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { motion, AnimatePresence } from "framer-motion"

const contactLinks = [
  { icon: Mail, label: "Email", value: "tasgiannak2001@gmail.com", href: "mailto:tasgiannak2001@gmail.com" },
  { icon: Phone, label: "Phone", value: "+30 694 381 8851", href: "tel:+306943818851" },
  { icon: MapPin, label: "Location", value: "Patras, Greece", href: undefined },
  { icon: Linkedin, label: "LinkedIn", value: "anastasios-giannakakis", href: "https://www.linkedin.com/in/anastasios-giannakakis/" },
  { icon: Github, label: "GitHub", value: "GigaTasoulis", href: "https://github.com/GigaTasoulis" },
]

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    await new Promise((r) => setTimeout(r, 1200))
    setStatus("sent")
    setForm({ name: "", email: "", message: "" })
    setTimeout(() => setStatus("idle"), 5000)
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-muted-foreground mb-12">
          Currently open to new opportunities. Drop me a message and I'll get back to you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="space-y-4">
            {contactLinks.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm font-medium hover:text-primary transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className="bg-surface border-border" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required className="bg-surface border-border" />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="What's on your mind?" rows={5} required className="bg-surface border-border resize-none" />
            </div>

            <Button type="submit" disabled={status === "sending"} className="w-full">
              {status === "sending" ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  Sending…
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Send Message <Send className="h-4 w-4" />
                </span>
              )}
            </Button>

            <AnimatePresence>
              {status === "sent" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-sm text-center text-green-400"
                >
                  Message sent! I'll get back to you soon.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  )
}
