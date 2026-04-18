import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://giannakakis.dev"),
  title: "Anastasios Giannakakis | Frontend Engineer",
  description:
    "Portfolio of Anastasios Giannakakis — a frontend engineer specialising in React, Next.js, and TypeScript, building high-performance web applications with a focus on UI/UX.",
  keywords: ["frontend engineer", "React", "Next.js", "TypeScript", "UI/UX", "web developer", "portfolio"],
  authors: [{ name: "Anastasios Giannakakis" }],
  creator: "Anastasios Giannakakis",
  openGraph: {
    title: "Anastasios Giannakakis | Frontend Engineer",
    description:
      "Frontend engineer specialising in React, Next.js, and TypeScript — building interfaces people love to use.",
    type: "website",
    locale: "en_US",
    siteName: "Anastasios Giannakakis Portfolio",
    url: "https://giannakakis.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anastasios Giannakakis | Frontend Engineer",
    description:
      "Frontend engineer specialising in React, Next.js, and TypeScript — building interfaces people love to use.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${dmSans.variable}`}
    >
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
