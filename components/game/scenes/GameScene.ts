import type PhaserType from "phaser"

export function createGameScene(Phaser: typeof PhaserType) {
  return class GameScene extends Phaser.Scene {
    constructor() {
      super({ key: "GameScene" })
    }

    create() {
      const { width, height } = this.scale

      this.cameras.main.setBackgroundColor("#080808")
      this.cameras.main.fadeIn(400, 8, 8, 8)

      // Ground platform (placeholder)
      const ground = this.add.rectangle(width / 2, height - 24, width, 48, 0x1a1a2e)
      this.physics.add.existing(ground, true)

      this.add
        .text(width / 2, height / 2 - 40, "World loading...", {
          fontFamily: "monospace",
          fontSize: "18px",
          color: "#6366f1",
        })
        .setOrigin(0.5)

      this.add
        .text(width / 2, height / 2, "Player and levels coming next.", {
          fontFamily: "monospace",
          fontSize: "13px",
          color: "#555555",
        })
        .setOrigin(0.5)
    }
  }
}
