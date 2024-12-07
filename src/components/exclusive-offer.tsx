'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, Lock, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

export function ExclusiveOffer() {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60) // 24 hours in seconds
  const [spotsClaimed, setSpotsClaimed] = useState(8764)

  useEffect(() => {
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
    <section className="py-20 px-4 rounded-2xl shadow-2xl bg-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="diagonalLines" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <line x1="0" y1="10" x2="10" y2="0" stroke="black" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>
      </div>
      <div className="container mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Only ₹28/month – Pre-launch Offer Limited to 10,000 Users!
        </motion.h2>
        <motion.div
          className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <Clock className="w-6 h-6 text-gray-600 mr-2" />
              <span className="text-xl font-semibold">Offer expires in:</span>
            </div>
            <div className="text-3xl font-bold bg-gray-100 px-4 py-2 rounded">
              {formatTime(timeLeft)}
            </div>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <Lock className="w-6 h-6 text-gray-600 mr-2 mt-1" />
              <span>Lock in the ₹28/month price forever.</span>
            </li>
            <li className="flex items-start">
              <Clock className="w-6 h-6 text-gray-600 mr-2 mt-1" />
              <span>Regular price after launch: ₹888/month.</span>
            </li>
            <li className="flex items-start">
              <Lock className="w-6 h-6 text-gray-600 mr-2 mt-1" />
              <span>Limited to the first 10,000 users only.</span>
            </li>
          </ul>
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Spots Claimed:</span>
              <span className="font-semibold">{spotsClaimed}/10,000</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-gray-600 to-black"
                style={{ width: `${(spotsClaimed / 10000) * 100}%` }}
              ></div>
            </div>
          </div>
          <Button className="w-full bg-black text-white hover:bg-gray-800 text-lg py-6 rounded-md transition-all duration-300 group">
            Pre-book Now at ₹28/month
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

