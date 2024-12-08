"use client";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import RetroGrid from "./ui/retro-grid";
import { Progress } from "./ui/progress";
import { useProgress } from "./progress-content";

export function Hero() {
  // const [progress, setProgress] = useState(10); // Start at 10%
  const { timeLeft, progress, spotsClaimed } = useProgress()
  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = time % 60
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = 80; // Adjust this value based on your navbar height
      const sectionTop = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative shadow-2xl rounded-2xl mt-16 flex flex-col items-center justify-center p-6 text-black">
      <div className="relative z-10 pt-10 text-center max-w-4xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center space-x-2 mb-6"
        >
          <Brain className="w-5 h-5 text-black" />
          <span className="text-sm font-semibold bg-white/10 px-3 py-1 rounded-full shadow-sm">
            Powered by AI
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl md:text-4xl font-bold leading-tight"
        >
          Effortless AI Solutions for Smarter Job Management
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Simplify your job tracking with AI. Stay on top of applications,
          follow-ups, and your dream career with ease.
        </motion.p>

        {/* Offer Details */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 space-y-3"
        >
          <div className="relative mt-6 flex items-center justify-center">

            {/* Price Badge */}
            <div className="relative z-10 flex items-center justify-center px-6 py-3 rounded-full shadow-lg">
              <span className="text-lg md:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 text-transparent bg-clip-text">
                ₹28/month – Pre-launch Special
              </span>
            </div>
          </div>
          <p className="text-sm md:text-base text-black">
            Pre-book now to secure your spot. Prices rise to ₹888/month after
            launch.
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            className="w-full sm:w-auto bg-black text-white hover:bg-gray-800 text-base md:text-lg px-6 py-3 md:px-8 md:py-4 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Pre-book Now
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("exclusive-offer")}
            className="w-full sm:w-auto text-base md:text-lg px-6 py-3 md:px-8 md:py-4 hover:bg-white/20 transition-all duration-300"
          >
            Learn More
          </Button>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 max-w-md mx-auto space-y-3"
        >
          <p className="text-sm text-black tracking-wide">Offer expires in:</p>
          <p className="text-lg font-bold">{formatTime(timeLeft)}</p>
          <Progress value={progress} className="h-4" />
          <p className="text-sm text-black">
            {spotsClaimed.toLocaleString()}/10,000 spots claimed
          </p>
        </motion.div>
      </div>
      <RetroGrid />
    </section>
  );
}
