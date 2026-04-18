import type PhaserType from "phaser"

const ACCENT   = 0x6366f1
const ACCENT_S = "#6366f1"
const WHITE    = "#ffffff"
const DIM      = "#444444"

interface Ripple { x: number; y: number; r: number; alpha: number }

export function createBootScene(Phaser: typeof PhaserType) {
  return class BootScene extends Phaser.Scene {
    private blinkTimer?: PhaserType.Time.TimerEvent

    // Interactive layers (redrawn every frame)
    private dotGrid!:      PhaserType.GameObjects.Graphics
    private linesGraphics!: PhaserType.GameObjects.Graphics
    private ripplesLayer!: PhaserType.GameObjects.Graphics
    private cursorDot!:    PhaserType.GameObjects.Graphics

    // Data
    private dotPositions: Array<{ x: number; y: number }> = []
    private particleObjs: PhaserType.GameObjects.Graphics[] = []
    private ripples:      Ripple[] = []
    private lastRipple = { x: -999, y: -999 }

    constructor() {
      super({ key: "BootScene" })
    }

    create() {
      const { width, height } = this.scale
      const cx = width / 2
      const cy = height / 2

      this.cameras.main.setBackgroundColor("#080808")
      this.cameras.main.fadeIn(1000, 8, 8, 8)

      // Layer order (bottom → top)
      this.buildDotGrid(width, height)   // redrawn every frame
      this.linesGraphics = this.add.graphics()
      this.ripplesLayer  = this.add.graphics()
      this.spawnParticles(width, height)
      this.drawScanlines(width, height)  // static, sits above particles
      this.cursorDot = this.add.graphics()

      this.input.setDefaultCursor("none")

      // Sequenced content reveals
      this.time.delayedCall(600,  () => this.drawFrame(cx, cy, width, height))
      this.time.delayedCall(1000, () => this.typeTitle(cx, cy, width))
    }

    update() {
      const pointer = this.input.activePointer
      if (!pointer) return
      const mx = pointer.x
      const my = pointer.y

      this.updateDotGrid(mx, my)
      this.updateRipples(mx, my)
      this.updateConstellationLines(mx, my)
      this.updateCursorDot(mx, my)
    }

    // ── Dot grid with repulsion ────────────────────────────────────────────────

    private buildDotGrid(width: number, height: number) {
      const spacing = 36
      for (let x = spacing / 2; x < width; x += spacing) {
        for (let y = spacing / 2; y < height; y += spacing) {
          this.dotPositions.push({ x, y })
        }
      }
      this.dotGrid = this.add.graphics()
    }

    private updateDotGrid(mx: number, my: number) {
      this.dotGrid.clear()
      this.dotGrid.fillStyle(0x1e1e3f, 1)

      const repelR   = 95
      const maxShift = 18

      for (const { x, y } of this.dotPositions) {
        const dx   = x - mx
        const dy   = y - my
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < repelR && dist > 0.5) {
          const strength = (1 - dist / repelR) * maxShift
          const nx = x + (dx / dist) * strength
          const ny = y + (dy / dist) * strength
          this.dotGrid.fillRect(nx, ny, 1, 1)
        } else {
          this.dotGrid.fillRect(x, y, 1, 1)
        }
      }
    }

    // ── Ripple rings ───────────────────────────────────────────────────────────

    private updateRipples(mx: number, my: number) {
      // Spawn a new ripple if mouse moved enough
      const moved = Phaser.Math.Distance.Between(mx, my, this.lastRipple.x, this.lastRipple.y)
      if (moved > 14 && this.ripples.length < 10) {
        this.ripples.push({ x: mx, y: my, r: 0, alpha: 0.4 })
        this.lastRipple = { x: mx, y: my }
      }

      // Grow + fade existing ripples
      this.ripplesLayer.clear()
      this.ripples = this.ripples.filter(rip => rip.alpha > 0.008)

      for (const rip of this.ripples) {
        rip.r     += 1.8
        rip.alpha *= 0.93
        this.ripplesLayer.lineStyle(1, ACCENT, rip.alpha)
        this.ripplesLayer.strokeCircle(rip.x, rip.y, rip.r)
      }
    }

    // ── Constellation lines ────────────────────────────────────────────────────

    private updateConstellationLines(mx: number, my: number) {
      this.linesGraphics.clear()
      const maxDist = 170

      for (const p of this.particleObjs) {
        const dist = Phaser.Math.Distance.Between(mx, my, p.x, p.y)
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.35
          this.linesGraphics.lineStyle(1, ACCENT, alpha)
          this.linesGraphics.lineBetween(mx, my, p.x, p.y)
        }
      }
    }

    // ── Cursor dot ─────────────────────────────────────────────────────────────

    private updateCursorDot(mx: number, my: number) {
      this.cursorDot.clear()
      this.cursorDot.fillStyle(ACCENT, 0.95)
      this.cursorDot.fillCircle(mx, my, 2.5)
      this.cursorDot.lineStyle(1, ACCENT, 0.28)
      this.cursorDot.strokeCircle(mx, my, 11)
    }

    // ── Static particles ───────────────────────────────────────────────────────

    private spawnParticles(width: number, height: number) {
      for (let i = 0; i < 30; i++) {
        const x     = Phaser.Math.Between(40, width  - 40)
        const y     = Phaser.Math.Between(40, height - 40)
        const size  = Phaser.Math.FloatBetween(1, 2.5)
        const alpha = Phaser.Math.FloatBetween(0.12, 0.45)
        const dur   = Phaser.Math.Between(2800, 7000)
        const delay = Phaser.Math.Between(0, 3500)
        const drift = Phaser.Math.Between(15, 50)

        const g = this.add.graphics()
        g.fillStyle(ACCENT, 1)
        g.fillCircle(0, 0, size)
        g.setPosition(x, y).setAlpha(0)
        this.particleObjs.push(g)

        this.tweens.add({
          targets:     g,
          alpha:       { from: 0, to: alpha },
          y:           `-=${drift}`,
          duration:    dur,
          delay,
          ease:        "Sine.easeInOut",
          yoyo:        true,
          repeat:      -1,
          repeatDelay: Phaser.Math.Between(200, 1200),
        })
      }
    }

    private drawScanlines(width: number, height: number) {
      const g = this.add.graphics()
      g.fillStyle(0x000000, 0.045)
      for (let y = 0; y < height; y += 4) {
        g.fillRect(0, y, width, 2)
      }
    }

    // ── Frame brackets ─────────────────────────────────────────────────────────

    private drawFrame(cx: number, cy: number, width: number, height: number) {
      const fw  = Math.min(480, width  * 0.82)
      const fh  = Math.min(260, height * 0.55)
      const arm = 22
      const x1  = cx - fw / 2
      const x2  = cx + fw / 2
      const y1  = cy - fh / 2
      const y2  = cy + fh / 2

      const g = this.add.graphics()
      g.setAlpha(0)
      g.lineStyle(1.5, ACCENT, 0.55)

      const corner = (ox: number, oy: number, sx: number, sy: number) => {
        g.beginPath()
        g.moveTo(ox,            oy + arm * sy)
        g.lineTo(ox,            oy)
        g.lineTo(ox + arm * sx, oy)
        g.strokePath()
      }

      corner(x1, y1,  1,  1)
      corner(x2, y1, -1,  1)
      corner(x1, y2,  1, -1)
      corner(x2, y2, -1, -1)

      g.lineStyle(1, ACCENT, 0.28)
      const t = 8
      g.lineBetween(cx - t, y1, cx + t, y1)
      g.lineBetween(cx - t, y2, cx + t, y2)
      g.lineBetween(x1, cy - t, x1, cy + t)
      g.lineBetween(x2, cy - t, x2, cy + t)

      this.tweens.add({ targets: g, alpha: 1, duration: 500, ease: "Sine.easeOut" })
    }

    // ── Typewriter + glitch ────────────────────────────────────────────────────

    private typeTitle(cx: number, cy: number, width: number) {
      const fullName  = "TASOS  GIANNAKAKIS"
      const glyphPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&"
      const titleSize = Math.min(44, Math.max(20, Math.floor(width * 0.038))) + "px"

      const titleObj = this.add
        .text(cx, cy - 36, "", {
          fontFamily:    "monospace",
          fontSize:      titleSize,
          color:         WHITE,
          letterSpacing: 10,
        })
        .setOrigin(0.5).setAlpha(0)

      this.tweens.add({ targets: titleObj, alpha: 1, duration: 250 })

      const cursor = this.add
        .text(0, cy - 36, "█", {
          fontFamily: "monospace",
          fontSize:   titleSize,
          color:      ACCENT_S,
        })
        .setOrigin(0, 0.5).setAlpha(0.8)

      let charIndex = 0
      const charW   = parseInt(titleSize) * 0.62

      const typeNext = () => {
        const typed   = fullName.slice(0, charIndex)
        const pending = charIndex < fullName.length
          ? glyphPool[Math.floor(Math.random() * glyphPool.length)]
          : ""

        titleObj.setText(typed + pending)
        const totalW = charIndex * charW
        cursor.setPosition(cx - totalW / 2 + totalW, cy - 36)

        if (charIndex < fullName.length) {
          charIndex++
          this.time.delayedCall(72, typeNext)
        } else {
          cursor.setAlpha(0)
          this.glitchTitle(titleObj, fullName, () => {
            this.time.delayedCall(80,  () => this.drawSeparator(cx, cy))
            this.time.delayedCall(280, () => this.showSubtitle(cx, cy))
            this.time.delayedCall(580, () => this.showMeta(cx, cy, width))
            this.time.delayedCall(880, () => this.showPrompt(cx, cy))
          })
        }
      }

      typeNext()
    }

    private glitchTitle(
      obj: PhaserType.GameObjects.Text,
      final: string,
      onDone: () => void
    ) {
      const pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
      let   ticks = 0
      const run   = () => {
        if (ticks >= 7) { obj.setText(final); onDone(); return }
        obj.setText(
          final.split("").map(c =>
            c !== " " && Math.random() < 0.35
              ? pool[Math.floor(Math.random() * pool.length)]
              : c
          ).join("")
        )
        ticks++
        this.time.delayedCall(55, run)
      }
      run()
    }

    // ── Post-title elements ────────────────────────────────────────────────────

    private drawSeparator(cx: number, cy: number) {
      const maxHalf = 140
      let   prog    = 0
      const g       = this.add.graphics()

      this.time.addEvent({
        delay: 14, repeat: 28,
        callback: () => {
          prog = Math.min(prog + maxHalf / 28, maxHalf)
          g.clear()
          g.lineStyle(1, ACCENT, 0.45)
          g.lineBetween(cx - prog, cy + 22, cx + prog, cy + 22)
          if (prog > 10) {
            g.lineStyle(1, ACCENT, 0.25)
            g.lineBetween(cx - prog, cy + 18, cx - prog, cy + 26)
            g.lineBetween(cx + prog, cy + 18, cx + prog, cy + 26)
          }
        },
      })
    }

    private showSubtitle(cx: number, cy: number) {
      const sub = this.add
        .text(cx, cy + 44, "FRONTEND ENGINEER  ·  HERAKLION, CRETE", {
          fontFamily:    "monospace",
          fontSize:      "13px",
          color:         ACCENT_S,
          letterSpacing: 3,
        })
        .setOrigin(0.5).setAlpha(0)

      this.tweens.add({ targets: sub, alpha: 0.9, y: cy + 40, duration: 500, ease: "Sine.easeOut" })
    }

    private showMeta(cx: number, cy: number, width: number) {
      const fw = Math.min(480, width * 0.82)

      const topLabel = this.add
        .text(cx, cy - 136, "[ PORTFOLIO ]", {
          fontFamily: "monospace", fontSize: "10px",
          color: DIM, letterSpacing: 4,
        })
        .setOrigin(0.5, 0).setAlpha(0)

      const vLabel = this.add
        .text(cx + fw / 2 - 4, cy + 128, "v1.0", {
          fontFamily: "monospace", fontSize: "10px",
          color: DIM, letterSpacing: 2,
        })
        .setOrigin(1, 1).setAlpha(0)

      this.tweens.add({ targets: [topLabel, vLabel], alpha: 0.7, duration: 400 })
    }

    private showPrompt(cx: number, cy: number) {
      const prompt = this.add
        .text(cx, cy + 88, "[ PRESS ANY KEY TO START ]", {
          fontFamily: "monospace", fontSize: "12px",
          color: "#666666", letterSpacing: 4,
        })
        .setOrigin(0.5).setAlpha(0)

      this.tweens.add({
        targets: prompt, alpha: 0.9, duration: 400, ease: "Sine.easeOut",
        onComplete: () => {
          this.blinkTimer = this.time.addEvent({
            delay: 650, loop: true,
            callback: () => prompt.setVisible(!prompt.visible),
          })
          this.input.keyboard?.once("keydown", this.startGame, this)
          this.input.once("pointerdown", this.startGame, this)
        },
      })
    }

    // ── Transition ─────────────────────────────────────────────────────────────

    private startGame() {
      this.blinkTimer?.destroy()
      this.input.setDefaultCursor("auto")
      this.cameras.main.fadeOut(500, 8, 8, 8)
      this.cameras.main.once("camerafadeoutcomplete", () => {
        this.scene.start("GameScene")
      })
    }
  }
}
