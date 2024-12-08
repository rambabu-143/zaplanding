'use client'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { JobChallengesCards } from '@/components/problem-statement'
import { SolutionOverview } from '@/components/solution-overview'
import { ExclusiveOffer } from '@/components/exclusive-offer'
import { Features } from '@/components/features'
import { Testimonials } from '@/components/testimonials'
import { Pricing } from '@/components/pricing'
import { FAQs } from '@/components/faqs'
import { HowItWorks } from '@/components/how-it-works'
import { Footer } from '@/components/footer'
import { ProgressProvider } from '@/components/progress-content'

export default function Home() {
  return (
    <main className="min-h-screen px-4 space-y-4 bg-white">
      <ProgressProvider>
        <Navbar />

        {/* Hero Section */}
        <section id="hero">
          <Hero />
        </section>

        {/* Problem Statement Section */}
        <section id="problem-statement">
          <JobChallengesCards />
        </section>

        {/* Solution Overview Section */}
        <section id="solution-overview">
          <SolutionOverview />
        </section>

        {/* Exclusive Offer Section */}
        <section id="exclusive-offer">
          <ExclusiveOffer />
        </section>

        {/* Features Section */}
        <section id="features">
          <Features />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
          <Testimonials />
        </section>

        {/* Pricing Section */}
        <section id="pricing">
          <Pricing />
        </section>

        {/* FAQs Section */}
        <section id="faqs">
          <FAQs />
        </section>

        {/* How It Works Section */}
        <section id="how-it-works">
          <HowItWorks />
        </section>

        {/* Footer Section */}
        <section id="footer">
          <Footer />
        </section>
      </ProgressProvider>
    </main>
  )
}
