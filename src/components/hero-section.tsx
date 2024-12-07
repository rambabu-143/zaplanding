import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const HeroSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = React.useState(24 * 60 * 60) // 24 hours in seconds

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = time % 60
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <section className="relative bg-gradient-to-b bg-green-600 from-white to-gray-100 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <BackgroundPattern />
      </div>
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-black mb-2 leading-tight">
            Your Job Search, <span className="relative">Simplified<span className="absolute bottom-0 left-0 w-full h-1 bg-black"></span></span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Organize your job applications effortlessly.<br />
            Never miss a follow-up, and secure your dream job.
          </p>
        </motion.div>

        <motion.div
          className="my-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <JobTrackingAnimation />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-6"
        >
          <button className="group bg-black text-white text-lg font-semibold py-3 px-8 rounded-md transition-all duration-300 hover:bg-gray-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
            Claim Lifetime Access for ₹28
            <ArrowRight className="inline-block ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <div className="text-black text-xl font-bold border-2 border-black inline-block py-3 px-6 rounded-md shadow-md">
            Offer ends in: <span className="tabular-nums">{formatTime(timeLeft)}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const JobTrackingAnimation: React.FC = () => {
  return (
    <motion.div
      className="w-80 h-80 mx-auto bg-white rounded-lg shadow-xl overflow-hidden"
      initial={{ rotateY: 0 }}
      animate={{ rotateY: 360 }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
    >
      <div className="h-full flex flex-col justify-start items-center p-6">
        <motion.div
          className="w-full h-8 bg-gray-200 rounded-full mb-4"
          initial={{ width: '20%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        />
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="w-full h-16 bg-gray-100 rounded-md mb-4 p-3 flex items-center"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <div className="w-10 h-10 rounded-full bg-gray-300 mr-3" />
            <div className="flex-1">
              <div className="h-3 bg-gray-300 rounded-full w-3/4 mb-2" />
              <div className="h-3 bg-gray-200 rounded-full w-1/2" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

const BackgroundPattern: React.FC = () => {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="gray" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  )
}

export default HeroSection

