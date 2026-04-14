"use client"
import { useEffect } from "react"
export default function ProjectDetailRedirect() {
  useEffect(() => { window.location.replace("/#projects") }, [])
  return null
}
