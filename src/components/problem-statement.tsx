import { motion } from "framer-motion";
import { AlertCircle, Clock, BarChart } from "lucide-react";

const problems = [
  { text: "Lost track of applications?", icon: AlertCircle },
  { text: "Missed follow-ups hurting your chances?", icon: Clock },
  { text: "Manual tracking taking too much time?", icon: BarChart },
];

export function ProblemStatement() {
  return (
    <section className="py-20 bg-gradient-to-b rounded-2xl from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Common Job Search Challenges
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <problem.icon className="w-6 h-6 text-gray-700 mt-1" />
                <p className="text-xl text-gray-700">{problem.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="aspect-square bg-white rounded-2xl shadow-md  flex items-center justify-center"
              >
                <img
                  src={`/${index}.jpg`}
                  alt={`Problem illustration ${index}`}
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
