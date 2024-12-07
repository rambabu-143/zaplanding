import { Button } from '@/components/ui/button'
import { VideoDialog } from './video-dialog'
import { MotionDiv } from './Motion/motion'
import { Brain } from 'lucide-react'

export function Hero() {
  return (
    <section className="pt-20 md:pt-32 shadow-xl p-4  rounded-2xl pb-16 px-4 md:px-6 min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="neural-network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="1" fill="#000" />
            <line x1="50" y1="50" x2="150" y2="50" stroke="#000" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="50" y2="150" stroke="#000" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="150" y2="150" stroke="#000" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#neural-network)" />
        </svg>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:space-y-8 text-center lg:text-left lg:w-1/2"
          >
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
              <Brain className="w-5 h-5 text-black" />
              <span className="text-sm font-semibold bg-gray-200 px-3 py-1 rounded-full shadow-sm">Powered by AI</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              The Simplest AI-Powered Way to Track Your Job Applications
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Powered by AI, ZapMyJob organizes your job applications effortlessly, reminds you of follow-ups, and keeps you closer to your dream job.
            </p>
            <div className="space-y-4">
              <p className="text-lg md:text-xl font-semibold text-gray-800">
                ₹28 per month – Lifetime Access (Limited-Time Offer)
              </p>
              <p className="text-sm md:text-base text-gray-600">
                Get lifetime access for just ₹28/month for the first 10,000 users. Regular price: ₹888/month.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  className="w-full sm:w-auto bg-black text-white hover:bg-gray-800 text-base md:text-lg px-6 py-3 md:px-8 md:py-4 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Claim ₹28 Lifetime Offer Now
                </Button>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto text-base md:text-lg px-6 py-3 md:px-8 md:py-4 hover:bg-gray-100 transition-all duration-300"
                >
                  Learn More About the Offer
                </Button>
              </div>

              <div className="space-y-4 max-w-md mx-auto lg:mx-0">
                <p className="text-sm text-gray-500 tracking-wide">
                  No credit card required. Offer valid for the next 48 hours only.
                </p>
                <div className="bg-gray-200 rounded-full h-4 w-full overflow-hidden shadow-inner">
                  <div className="bg-black h-full w-[93%]" style={{ width: '93%' }}></div>
                </div>
                <p className="text-sm text-gray-600">9,300/10,000 spots claimed</p>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 lg:mt-0 w-full lg:w-1/2"
          >
            <VideoDialog />
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}

