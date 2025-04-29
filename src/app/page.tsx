import Navbar from "@/components/global/Navbar"
import HeroSection from "@/components/home-page/Hero-Section"
import StatsSection from "@/components/home-page/StatsSection"

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsSection />
    </main>
  )
}
