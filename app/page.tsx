import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Marketplace } from "@/components/marketplace"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Marketplace />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}
