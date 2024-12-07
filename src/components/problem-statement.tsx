"use client"
import React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AlertCircle, Clock, BarChart, ArrowRight, ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Progress } from "./ui/progress"

const challenges = [
  { 
    title: "Application Overload",
    text: "Lost track of applications?", 
    icon: AlertCircle,
    description: "Keeping track of numerous job applications can be overwhelming. It's easy to lose sight of where you've applied and the status of each application."
  },
  { 
    title: "Follow-up Failures",
    text: "Missed follow-ups hurting your chances?", 
    icon: Clock,
    description: "Failing to follow up on applications can significantly reduce your chances of landing an interview. It's crucial to stay on top of your communication with potential employers."
  },
  { 
    title: "Time-Consuming Tracking",
    text: "Manual tracking taking too much time?", 
    icon: BarChart,
    description: "Manually tracking your job search progress can be incredibly time-consuming. This takes away valuable time that could be spent on tailoring applications or preparing for interviews."
  },
]

export function EnhancedMultiStepJobChallenges() {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          setCurrentStep((prevStep) => (prevStep + 1) % challenges.length)
          return 0
        }
        return Math.min(oldProgress + 2, 100)
      })
    }, 100)

    return () => clearInterval(timer)
  }, [currentStep])

  const nextStep = () => {
    setCurrentStep((prevStep) => (prevStep + 1) % challenges.length)
    setProgress(0)
  }

  const prevStep = () => {
    setCurrentStep((prevStep) => (prevStep - 1 + challenges.length) % challenges.length)
    setProgress(0)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 rounded-3xl relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}

      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-200 rounded-full"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
           
          />
        ))}
      </motion.div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Common Job Search Challenges
        </h2>
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
            >
              <div className="flex items-center justify-center mb-6">
                {challenges.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`w-3 h-3 rounded-full mx-1 ${
                      index === currentStep ? "bg-blue-500" : "bg-gray-300"
                    }`}
                    initial={{ scale: 1 }}
                    animate={{ scale: index === currentStep ? [1, 1.2, 1] : 1 }}
                    transition={{ duration: 0.5 }}
                  />
                ))}
              </div>
              <motion.div 
                className="flex items-center justify-center mb-6"
              
              >
                {React.createElement(challenges[currentStep].icon, {
                  className: "w-16 h-16 text-blue-500",
                })}
              </motion.div>
              <h3 className="text-2xl font-semibold text-center mb-4">
                {challenges[currentStep].title}
              </h3>
              <p className="text-xl text-gray-700 text-center mb-6">
                {challenges[currentStep].text}
              </p>
              <p className="text-gray-600 text-center mb-8">
                {challenges[currentStep].description}
              </p>
              <Progress value={progress} className="mb-6" />
              <div className="flex justify-between items-center">
                <Button onClick={prevStep} variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
                <Button onClick={nextStep}>
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

