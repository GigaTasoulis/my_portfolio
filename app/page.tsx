"use client"

import dynamic from "next/dynamic"

const PhaserGame = dynamic(() => import("@/components/game/PhaserGame"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#080808",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "monospace",
        color: "#6366f1",
        fontSize: "14px",
        letterSpacing: "3px",
      }}
    >
      LOADING...
    </div>
  ),
})

export default function Home() {
  return <PhaserGame />
}
