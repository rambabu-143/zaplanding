'use client'

import { useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Play } from 'lucide-react'
import { motion } from 'framer-motion'

export function VideoDialog() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.div
        className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        onClick={() => setIsOpen(true)}
      >
        <div className="aspect-video bg-gray-100 relative">
          <img
            src="/placeholder.svg?height=720&width=1280"
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
            <motion.div
              className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-md"
              whileHover={{ scale: 1.1 }}
            >
              <Play className="w-8 h-8 md:w-10 md:h-10 text-black" />
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 md:p-4">
            <p className="text-center text-sm md:text-base lg:text-lg font-semibold">
              See how AI powers ZapMyJob in 60 seconds
            </p>
          </div>
        </div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0">
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="about:blank" // Replace with your video URL
              title="Product Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

