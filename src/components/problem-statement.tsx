"use client";

import React from "react";
import { AlertCircle, Clock, BarChart } from "lucide-react";

const challenges = [
  {
    title: "Application Overload",
    text: "Lost track of applications?",
    icon: AlertCircle,
    description:
      "Keeping track of numerous job applications can be overwhelming. It's easy to lose sight of where you've applied and the status of each application.",
  },
  {
    title: "Follow-up Failures",
    text: "Missed follow-ups hurting your chances?",
    icon: Clock,
    description:
      "Failing to follow up on applications can significantly reduce your chances of landing an interview. It's crucial to stay on top of your communication with potential employers.",
  },
  {
    title: "Time-Consuming Tracking",
    text: "Manual tracking taking too much time?",
    icon: BarChart,
    description:
      "Manually tracking your job search progress can be incredibly time-consuming. This takes away valuable time that could be spent on tailoring applications or preparing for interviews.",
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
              className="bg-white rounded-xl shadow-md p-8 text-center flex flex-col items-center"
            >
              {/* Icon */}
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                {React.createElement(challenge.icon, {
                  className: "w-12 h-12 text-blue-500",
                })}
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">
                {challenge.title}
              </h3>
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
