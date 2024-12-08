"use client"

import React, { useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { AnimatedBeam } from "./ui/animated-beam"
import { User,  MessageCircle, Newspaper, Mail } from 'lucide-react'

const Circle = React.forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex items-center justify-center rounded-full border-2 bg-white p-1 sm:p-2 md:p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  )
})

Circle.displayName = "Circle"

export function AnimatedBeamMultipleOutputDemo({
  className,
}: {
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)

  return (
    <div
      className={cn(
        "relative flex h-[300px] sm:h-[400px] md:h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-4 sm:p-6 md:p-10 shadow-xl",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-4 sm:gap-6 md:gap-10">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref} className="size-8 sm:size-10 md:size-12">
            <User className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-10 sm:size-12 md:size-16">
          <Image src='/ZapmyjobLOgo.svg' alt='Zapmyjob Logo' width={100} height={100} />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2 sm:gap-3 md:gap-4">
          <Circle ref={div3Ref} className="size-8 sm:size-10 md:size-12">
            <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </Circle>
          <Circle ref={div1Ref} className="size-8 sm:size-10 md:size-12">
            {/* <FileImage className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" /> */}
            <p className="font-bold">?</p>
          </Circle>
          <Circle ref={div4Ref} className="size-8 sm:size-10 md:size-12">
            <Mail className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </Circle>
          <Circle ref={div2Ref} className="size-8 sm:size-10 md:size-12">
          <p className="font-bold">?</p>
          </Circle>
          <Circle ref={div5Ref} className="size-8 sm:size-10 md:size-12">
            <Newspaper className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={3}
      />
    </div>
  )
}

