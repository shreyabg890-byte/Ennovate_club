"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle2, Loader2 } from "lucide-react"

export default function JoinClubPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="pt-24 pb-16 min-h-screen relative">
      {/* Toast Notification */}
      {isSubmitted && (
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-foreground text-background px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 border border-border"
        >
          <CheckCircle2 className="w-6 h-6" />
          <p className="font-medium">Thank you for applying! Our team will contact you soon.</p>
        </motion.div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
          >
            Join Ennovator Club
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Take the first step towards building your future. Fill out the application form below.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="glass-card border-none">
            <CardHeader className="bg-muted/50 border-b border-border pb-8">
              <CardTitle className="text-2xl text-foreground">Application Form</CardTitle>
              <CardDescription className="text-muted-foreground">
                Please provide accurate information. All fields are mandatory unless marked otherwise.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" required placeholder="John Doe" className="bg-background focus-visible:ring-foreground" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="usn">USN / Roll Number</Label>
                    <Input id="usn" required placeholder="1XX22XX000" className="bg-background focus-visible:ring-foreground" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="branch">Branch</Label>
                    <Input id="branch" required placeholder="Computer Science" className="bg-background focus-visible:ring-foreground" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Year of Study</Label>
                    <Select required>
                      <SelectTrigger className="bg-background focus-visible:ring-foreground">
                        <SelectValue placeholder="Select Year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1st Year</SelectItem>
                        <SelectItem value="2">2nd Year</SelectItem>
                        <SelectItem value="3">3rd Year</SelectItem>
                        <SelectItem value="4">4th Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" required placeholder="+91 9876543210" className="bg-background focus-visible:ring-foreground" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" required placeholder="john@example.com" className="bg-background focus-visible:ring-foreground" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="skills">Technical & Non-Technical Skills</Label>
                  <Input id="skills" required placeholder="e.g., Python, React, Video Editing, Public Speaking" className="bg-background focus-visible:ring-foreground" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interestArea">Core Area of Interest</Label>
                  <Input id="interestArea" required placeholder="e.g., Artificial Intelligence, Web Dev, Robotics" className="bg-background focus-visible:ring-foreground" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="department">Department Interested In</Label>
                  <Select required>
                    <SelectTrigger className="bg-background focus-visible:ring-foreground">
                      <SelectValue placeholder="Select a Department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bot">Building Bot</SelectItem>
                      <SelectItem value="ideathon">Ideathon & Hackathon</SelectItem>
                      <SelectItem value="software">Hardware & Software</SelectItem>
                      <SelectItem value="problems">Problem Statements</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason">Why do you want to join Ennovator Club?</Label>
                  <Textarea 
                    id="reason" 
                    required 
                    placeholder="Tell us about your passion, what you want to learn, and how you can contribute..." 
                    className="min-h-[120px] bg-background focus-visible:ring-foreground"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting || isSubmitted} 
                  className="w-full h-12 text-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-xl shadow-md"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting Application...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle2 className="mr-2 h-5 w-5" />
                      Application Submitted Successfully
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
