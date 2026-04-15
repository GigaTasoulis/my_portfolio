import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import LenisProvider from "@/components/lenis-provider"
import ScrollProgress from "@/components/scroll-progress"

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
          <LenisProvider>
            <ScrollProgress />
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
