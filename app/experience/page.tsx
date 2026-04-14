"use client"
import { useEffect } from "react"
export default function ExperienceRedirect() {
  useEffect(() => { window.location.replace("/#experience") }, [])
  return null
}
