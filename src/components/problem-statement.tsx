"use client";

import React from "react";
import { AlertCircle, Clock, BarChart } from "lucide-react";

const challenges = [
  {
    title: "Application Overload",
    text: "Are job applications slipping through the cracks?",
    icon: AlertCircle,
    description:
      "Tracking multiple job applications can feel like juggling too many balls. Stay organized and never lose sight of where you've applied.",
  },
  {
    title: "Missed Follow-Ups",
    text: "Forgotten follow-ups costing interviews?",
    icon: Clock,
    description:
      "Timely follow-ups are crucial to landing interviews. Let ZapMyJob ensure you're always on top of your next step.",
  },
  {
    title: "Time-Consuming Tracking",
    text: "Spending hours managing applications?",
    icon: BarChart,
    description:
      "Manual tracking eats into time better spent preparing applications or acing interviews. Automate your job search process with ease.",
  },
];

export function JobChallengesCards() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 rounded-3xl">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Common Job Search Challenges
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 text-center flex flex-col items-center transition-all hover:shadow-lg"
            >
              {/* Icon */}
              <div className="bg-gray-200 p-4 rounded-full mb-4">
                {React.createElement(challenge.icon, {
                  className: "w-12 h-12 text-black",
                })}
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
              {/* Text */}
              <p className="text-gray-700 mb-4">{challenge.text}</p>
              {/* Description */}
              <p className="text-gray-600 text-sm">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
