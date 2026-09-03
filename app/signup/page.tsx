"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import Link from "next/link"

export default function SignUpPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    
    const formData = new FormData(e.currentTarget)
    const password = formData.get("password")
    const confirmPassword = formData.get("confirmPassword")

    if (password !== confirmPassword) {
      setError("Passwords do not match.")
      setIsSubmitting(false)
      return
    }
    
    // Simulate frontend validation / basic wait
    setTimeout(() => {
      setIsSubmitting(false)
      setError("Registration system is not currently connected. Please try again later.")
    }, 1000)
  }

  return (
    <div className="pt-24 pb-16 min-h-screen relative flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="glass-card border-none shadow-xl">
            <CardHeader className="bg-muted/50 border-b border-border pb-8 text-center rounded-t-xl">
              <CardTitle className="text-3xl text-foreground mb-2">Sign Up</CardTitle>
              <CardDescription className="text-muted-foreground">
                Create an account to join Ennovate Club.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" name="fullName" required placeholder="John Doe" className="bg-background focus-visible:ring-foreground" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required placeholder="you@example.com" className="bg-background focus-visible:ring-foreground" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" name="password" type="password" required className="bg-background focus-visible:ring-foreground" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input id="confirmPassword" name="confirmPassword" type="password" required className="bg-background focus-visible:ring-foreground" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="college">College / Department</Label>
                    <Input id="college" name="college" required placeholder="e.g. Computer Science" className="bg-background focus-visible:ring-foreground" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Year</Label>
                    <Input id="year" name="year" required placeholder="e.g. 2nd Year" className="bg-background focus-visible:ring-foreground" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+1234567890" className="bg-background focus-visible:ring-foreground" />
                </div>
                
                {error && <p className="text-sm text-destructive font-medium">{error}</p>}

                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full h-12 text-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-xl shadow-md"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Signing Up...
                    </>
                  ) : (
                    "Sign Up"
                  )}
                </Button>
                
                <div className="text-center mt-6">
                  <p className="text-sm text-muted-foreground">
                    Already have an account? <Link href="/signin" className="text-foreground hover:underline font-medium">Sign In</Link>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
