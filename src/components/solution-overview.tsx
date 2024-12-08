import { motion } from 'framer-motion'

import { AnimatedBeamMultipleOutputDemo } from './anim'

export function SolutionOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Meet ZapMyJob – Your Ultimate Job Tracker
          </motion.h2>
          <motion.p
            className="text-xl text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We take the hassle out of job tracking. From automated email sorting to intuitive dashboards, we&apos;ve got you covered.
          </motion.p>
        </div>
        <motion.div
          className="mb-12 shadow-2xl rounded-2xl z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* <VideoDialog /> */}
          <AnimatedBeamMultipleOutputDemo />
        </motion.div>
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 rounded-full hover:shadow-lg transition-all duration-300"
          >
            Start Tracking Now
          </Button>
        </motion.div> */}
      </div>
    </section>
  )
}

