"use client"

import { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Loader2 } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  preferredRole: z.string().min(2, {
    message: "Please enter your preferred job role.",
  }),
  experienceLevel: z.enum(["entry", "mid", "senior"], {
    required_error: "Please select your experience level.",
  }),
  jobPortals: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  termsAgreed: z.boolean().refine((value) => value, {
    message: "You must agree to the terms and conditions.",
  }),
})

export function OnboardingForm({ defaultValues }: { defaultValues: Partial<z.infer<typeof formSchema>> }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      // Here you would typically redirect to the dashboard or next step
      router.push('/onboarding/congratulations')
    }, 2000)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full max-w-md mx-auto">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormDescription>
                  This is how we'll address you in the app.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" {...field} disabled />
                </FormControl>
                <FormDescription>
                  This email is associated with your Google account.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="preferredRole"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Job Role</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Software Engineer" {...field} />
                </FormControl>
                <FormDescription>
                  Enter the job role you're primarily looking for.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="experienceLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Experience Level</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="entry">Entry-level</SelectItem>
                    <SelectItem value="mid">Mid-level</SelectItem>
                    <SelectItem value="senior">Senior</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  This helps us tailor job recommendations.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="jobPortals"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Job Portals Used</FormLabel>
                  <FormDescription>
                    Select the job portals you're using in your search.
                  </FormDescription>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {["LinkedIn", "Indeed", "Monster", "Company Career Pages"].map((item) => (
                    <FormField
                      key={item}
                      control={form.control}
                      name="jobPortals"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item])
                                    : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item
                                      )
                                    )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {item}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="termsAgreed"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    I agree to the terms and conditions
                  </FormLabel>
                  <FormDescription>
                    You must agree to our terms and conditions to use ZapMyJob.
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </>
          ) : (
            "Complete Setup"
          )}
        </Button>
      </form>
    </Form>
  )
}

