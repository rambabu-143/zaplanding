'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Award, Repeat } from 'lucide-react'

export function Pricing() {
  return (
    <section className="py-20 px-4 rounded-2xl  bg-gray-100">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Transparent Pricing
        </motion.h2>
        <motion.div
          className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200">
              <Award className="w-12 h-12 text-gray-600 mb-4" />
              <h3 className="text-2xl font-bold mb-2">₹28/month Pre-launch Offer</h3>
              <p className="text-gray-600 mb-4">Limited to the first 10,000 users</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  All features included
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Lock in this price forever
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Priority support
                </li>
              </ul>
            </div>
            <div className="p-8">
              <Repeat className="w-12 h-12 text-gray-600 mb-4" />
              <h3 className="text-2xl font-bold mb-2">₹888/month (Post-Launch)</h3>
              <p className="text-gray-600 mb-4">Regular pricing after launch</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  All features included
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Regular updates
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Standard support
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-4 rounded-md transition-all duration-300 hover:scale-105">
            Pre-book Now at ₹28/month
          </Button>
        </motion.div>
        <motion.p
          className="text-center mt-4 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Lock in the ₹28/month price forever before we launch!
        </motion.p>
      </div>
    </section>
  )
}

