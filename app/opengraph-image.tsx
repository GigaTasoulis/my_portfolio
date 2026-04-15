import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Anastasios Giannakakis | Frontend Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top glow */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: "50%",
            transform: "translateX(-50%)",
            width: 900,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(99,102,241,0.25) 0%, transparent 70%)",
          }}
        />

        {/* Dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.4,
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            zIndex: 1,
          }}
        >
          {/* Availability badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              backgroundColor: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 999,
              padding: "6px 16px",
              fontSize: 14,
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.08em",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "#4ade80",
              }}
            />
            Open to new opportunities
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1,
              color: "#f2f2f2",
            }}
          >
            Anastasios Giannakakis
          </div>

          {/* Role */}
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: "#818cf8",
              letterSpacing: "-0.01em",
            }}
          >
            Frontend Engineer
          </div>

          {/* Tech tags */}
          <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
            {["React", "Next.js", "TypeScript", "Node.js"].map((tag) => (
              <div
                key={tag}
                style={{
                  backgroundColor: "rgba(99,102,241,0.12)",
                  border: "1px solid rgba(99,102,241,0.25)",
                  borderRadius: 999,
                  padding: "6px 18px",
                  fontSize: 16,
                  color: "#a5b4fc",
                  fontWeight: 500,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            fontSize: 16,
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "0.05em",
          }}
        >
          giannakakis.dev
        </div>
      </div>
    ),
    { ...size },
  )
}
