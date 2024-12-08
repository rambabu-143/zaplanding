import { OnboardingForm } from "@/components/onboarding"

export default function OnboardingPage() {
    // In a real application, you'd fetch this data from your backend
    const defaultValues = {
        fullName: "John Doe",
        email: "john@example.com",
        preferredRole: "",
        experienceLevel: "mid" as "entry" | "mid" | "senior",
        jobPortals: [] as string[],
        termsAgreed: false,
    }

    return (
        <div className="container mx-auto py-10 px-4">
            <div className="max-w-md mx-auto text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Welcome to ZapMyJob</h1>
                <p className="text-muted-foreground">
                    Please fill out this quick form to get started with tracking your job applications.
                </p>
            </div>
            <OnboardingForm defaultValues={defaultValues} />
        </div>
    )
}

