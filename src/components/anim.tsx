"use client";

import React, { forwardRef, useRef } from "react";
import { AnimatedBeam } from "./ui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={`z-10 flex items-center justify-center rounded-full border-4 bg-white p-2 shadow-lg transition-transform duration-300 hover:scale-110 ${className}`}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function EmailAutomationResponsive() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Refs for key nodes
  const emailRef = useRef<HTMLDivElement>(null);
  const parsingRef = useRef<HTMLDivElement>(null);
  const processingRef = useRef<HTMLDivElement>(null);
  const visualizationRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] overflow-hidden p-4 sm:p-8 md:p-12 bg-gradient-to-b from-gray-50 to-gray-200"
      ref={containerRef}
    >
      <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 items-center justify-items-center h-full">
        {/* Email Input */}
        <Circle
          ref={emailRef}
          className="border-blue-500 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 col-start-1 row-start-3"
        >
          <Icons.email />
        </Circle>

        {/* Parsing */}
        <Circle
          ref={parsingRef}
          className="border-yellow-500 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 col-start-2 row-start-2"
        >
          <Icons.parsing />
        </Circle>

        {/* Processing */}
        <Circle
          ref={processingRef}
          className="border-purple-500 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 col-start-3 row-start-1"
        >
          <Icons.processing />
        </Circle>

        {/* Visualization */}
        <Circle
          ref={visualizationRef}
          className="border-orange-500 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 col-start-2 row-start-4"
        >
          <Icons.visualization />
        </Circle>

        {/* Dashboard */}
        <Circle
          ref={dashboardRef}
          className="border-green-500 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 col-start-3 row-start-5"
        >
          <Icons.dashboard />
        </Circle>
      </div>

      {/* Animated Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={emailRef}
        toRef={parsingRef}
        curvature={-60}
        startYOffset={-10}
        endYOffset={-10}
        // className="bg-gradient-to-r from-blue-500 via-teal-500 to-yellow-500"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={parsingRef}
        toRef={processingRef}
        curvature={60}
        startYOffset={-10}
        endYOffset={-10}
        // className="bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={processingRef}
        toRef={visualizationRef}
        curvature={-60}
        startYOffset={10}
        endYOffset={10}
        // className="bg-gradient-to-r from-purple-500 via-orange-500 to-red-500"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={visualizationRef}
        toRef={dashboardRef}
        curvature={60}
        startYOffset={10}
        endYOffset={10}
        // className="bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500"
      />
    </div>
  );
}

const Icons = {
  email: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  ),
  parsing: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
    >
      <path d="M3 10l7 7 7-7" />
      <path d="M6 3h12v12H6z" />
    </svg>
  ),
  processing: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 4" />
    </svg>
  ),
  visualization: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
    >
      <path d="M3 3v18h18M3 12h18M9 3v18" />
    </svg>
  ),
  dashboard: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
    >
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  ),
};

