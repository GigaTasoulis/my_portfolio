"use client"

import { useEffect, useRef } from "react"
import type Phaser from "phaser"

export default function PhaserGame() {
  const containerRef = useRef<HTMLDivElement>(null)
  const gameRef = useRef<Phaser.Game | null>(null)

  useEffect(() => {
    if (!containerRef.current || gameRef.current) return

    let game: Phaser.Game | null = null

    const init = async () => {
      const phaserModule = await import("phaser")
      // Phaser 4 ESM exposes named exports only; older bundles often used default.
      const PhaserLib = (phaserModule.default ?? phaserModule) as typeof import("phaser")
      const { createBootScene } = await import("./scenes/BootScene")
      const { createGameScene } = await import("./scenes/GameScene")

      if (!containerRef.current) return

      const BootScene = createBootScene(PhaserLib)
      const GameScene = createGameScene(PhaserLib)

      const config: Phaser.Types.Core.GameConfig = {
        type: PhaserLib.AUTO,
        parent: containerRef.current,
        backgroundColor: "#080808",
        physics: {
          default: "arcade",
          arcade: { gravity: { x: 0, y: 900 }, debug: false },
        },
        scale: {
          mode: PhaserLib.Scale.RESIZE,
          autoCenter: PhaserLib.Scale.CENTER_BOTH,
          width: window.innerWidth,
          height: window.innerHeight,
        },
        scene: [BootScene, GameScene],
      }

      game = new PhaserLib.Game(config)
      gameRef.current = game
    }

    init()

    return () => {
      game?.destroy(true)
      gameRef.current = null
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#080808" }}
    />
  )
}
