'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "What is included in the ₹28 offer?",
    answer: "The ₹28 offer gives you access to ZapMyJob's premium features at just ₹28 per month for your lifetime, as long as the subscription remains active. This includes AI-powered job application tracking, automated email sorting, personalized insights, priority support, and future updates. Plus, exciting new features are planned to be added soon!"
  },
  {
    question: "What happens if I cancel my subscription?",
    answer: "If you cancel your ₹28/month subscription, you will lose access to the special pricing. If you decide to rejoin later, you’ll need to subscribe at the standard rate of ₹1499 per month. Be sure to stay subscribed to continue enjoying this exclusive offer."
  },
  {
    question: "How do I track my applications?",
    answer: "ZapMyJob automatically syncs with your email to track job applications. It organizes all your job-related emails, extracts key information, and presents it in an easy-to-use dashboard. You can also manually add applications and set reminders for follow-ups."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we take data security very seriously. We use industry-standard encryption for all data transfers and storage. We do not share your personal information with any third parties. You have full control over your data and can delete it at any time."
  },
  {
    question: "Are there any future benefits to joining the ₹28 Club?",
    answer: "Absolutely! By joining the ₹28 Club, you'll not only lock in this unbeatable rate but also gain access to future features, exclusive addons, and benefits as they are released. This offer is designed to reward early adopters with long-term value."
  }
]

export function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-gray-100 rounded-lg focus:outline-none"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    activeIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="p-4 text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
