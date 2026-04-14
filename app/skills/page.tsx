"use client"
import { useEffect } from "react"
export default function SkillsRedirect() {
  useEffect(() => { window.location.replace("/#skills") }, [])
  return null
}
