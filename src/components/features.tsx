'use client'

import { motion } from 'framer-motion'
import { Mail, LayoutDashboard, Bell, Brain, RefreshCw } from 'lucide-react'

const features = [
  {
    icon: Mail,
    title: "Automated Email Sorting",
    description: "We track your job emails so you don't have to."
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard View",
    description: "Visualize all your applications in one place."
  },
  {
    icon: Bell,
    title: "Follow-Up Reminders",
    description: "Never miss deadlines."
  },
  {
    icon: Brain,
    title: "AI Insights",
    description: "Personalized recommendations to improve your applications."
  },
  {
    icon: RefreshCw,
    title: "Weekly Updates",
    description: "New features added regularly."
  }
]

export function Features() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose ZapMyJob?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <feature.icon className="w-12 h-12 text-gray-600 mb-4 transition-colors duration-300 group-hover:text-black" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        {/* <motion.div
          className="mt-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <img
            src="/placeholder.svg?height=400&width=800&text=Interactive+Dashboard+Demo"
            alt="Interactive Dashboard Demo"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
          />
        </motion.div> */}
      </div>
    </section>
  )
}

