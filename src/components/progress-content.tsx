'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// Define the type for the context
interface ProgressContextType {
    timeLeft: number
    progress: number
    spotsClaimed: number
}

// Create the context with an initial value
const ProgressContext = createContext<ProgressContextType | undefined>(undefined)

// ProgressProvider Component
export const ProgressProvider = ({ children }: { children: ReactNode }) => {
    const totalDuration = 48 * 60 * 60 // 48 hours in seconds
    const [timeLeft, setTimeLeft] = useState(totalDuration)
    const [spotsClaimed, setSpotsClaimed] = useState(1000)
    const [progress, setProgress] = useState(10) // Start at 10%

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 0) {
                    clearInterval(timer)
                    return 0
                }
                const elapsedTime = totalDuration - prevTime + 1
                const progressPercent = Math.min(10 + (elapsedTime / totalDuration) * 85, 95) // Progress: 10% to 95%
                const newSpots = Math.round(1000 + ((progressPercent - 10) / 85) * (9500 - 1000)) // Spots: 1,000 to 9,500
                setProgress(progressPercent)
                setSpotsClaimed(newSpots)
                return prevTime - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [totalDuration])

    return (
        <ProgressContext.Provider value={{ timeLeft, progress, spotsClaimed }}>
            {children}
        </ProgressContext.Provider>
    )
}

// Hook to use the ProgressContext
export const useProgress = () => {
    const context = useContext(ProgressContext)
    if (!context) {
        throw new Error('useProgress must be used within a ProgressProvider')
    }
    return context
}
