'use client'

import { motion } from 'framer-motion'
import { Mail, Inbox, LayoutDashboard } from 'lucide-react'

const steps = [
  {
    icon: Mail,
    title: "Sign up with your Gmail account",
    description: "Connect your email to start tracking job applications automatically."
  },
  {
    icon: Inbox,
    title: "ZapMyJob organizes your job-related emails",
    description: "Our AI sorts and categorizes your emails, identifying important job-related information."
  },
  {
    icon: LayoutDashboard,
    title: "Track, follow up, and land your dream job",
    description: "Use our intuitive dashboard to manage applications, set reminders, and get AI-powered insights."
  }
]

export function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Getting Started is Easy
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center mb-8 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-white rounded-full p-4 shadow-lg mb-4">
                <step.icon className="w-12 h-12 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <svg className="w-full max-w-2xl" viewBox="0 0 600 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 50 H550" stroke="black" strokeWidth="2" strokeDasharray="5 5" />
            <circle cx="50" cy="50" r="10" fill="black" />
            <circle cx="300" cy="50" r="10" fill="black" />
            <circle cx="550" cy="50" r="10" fill="black" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

