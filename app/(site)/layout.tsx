import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import LenisProvider from "@/components/lenis-provider"
import ScrollProgress from "@/components/scroll-progress"

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <LenisProvider>
      <ScrollProgress />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </LenisProvider>
  )
}
