import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ProblemStatement } from '@/components/problem-statement'
import { SolutionOverview } from '@/components/solution-overview'

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center gap-9 flex-col bg-white p-4">
      <Navbar />
      <Hero />
      <ProblemStatement />
      <SolutionOverview />
    </main>
  )
}

