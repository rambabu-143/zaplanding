"use client"

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { CheckCircle } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CongratulationsPage() {
    useEffect(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        })
    }, [])

    return (
        <div className="container mx-auto py-10 px-4 min-h-screen flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Card className="w-full max-w-md mx-auto">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-center">Congratulations!</CardTitle>
                        <CardDescription className="text-center">Your ZapMyJob account is all set up.</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        >
                            <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-4" />
                        </motion.div>
                        <p className="text-muted-foreground">
                            You're now ready to start tracking your job applications and supercharge your job search!
                        </p>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                        <Button asChild>
                            <motion.a
                                href="/"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Go to Home
                            </motion.a>
                        </Button>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    )
}

