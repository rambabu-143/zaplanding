'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const { scrollY } = useScroll()
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setHasScrolled(latest > 0)
    })
  }, [scrollY])

  return (

    <motion.div
      className={`sticky flex justify-center items-center shadow-2xl w-[98%] rounded-2xl top-0 mx-auto z-50  transition-colors duration-200 ${hasScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="container mx-auto px-6 h-20 flex  items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-black">
          ZapMyJob
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          <Link href="#" className="text-gray-700 hover:text-black transition-colors">
            Home
          </Link>
          <Link href="#" className="text-gray-700 hover:text-black transition-colors">
            Features
          </Link>
          <Link href="#" className="text-gray-700 hover:text-black transition-colors">
            Pricing
          </Link>
          <Link href="#" className="text-gray-700 hover:text-black transition-colors">
            FAQs
          </Link>
          <Link href="#" className="text-gray-700 hover:text-black transition-colors">
            Contact
          </Link>
        </div>

        <Button variant="default" className="bg-black text-white hover:bg-gray-800 hover:shadow-md transition-all duration-300 py-2 px-6">
          Sign Up
        </Button>
      </nav>
    </motion.div>
  )
}

