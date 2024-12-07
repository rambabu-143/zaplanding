'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    text: "ZapMyJob helped me land 3 interviews within a week by staying organized!",
    name: "Priya K.",
    role: "Job Seeker"
  },
  {
    text: "The AI insights were game-changing. I improved my applications and got more responses.",
    name: "Alex M.",
    role: "Career Changer"
  },
  {
    text: "I love how it automates email sorting. Saved me hours of manual work!",
    name: "Rahul S.",
    role: "Recent Graduate"
  }
]

export function Testimonials() {
  return (
    <section className="py-20 rounded-2xl px-4 bg-gray-800 text-white">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Early Testers Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic">&ldquo;{testimonial.text}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

