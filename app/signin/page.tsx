"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import Link from "next/link"

export default function SignInPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    
    // Simulate frontend validation / basic wait
    setTimeout(() => {
      setIsSubmitting(false)
      // Display generic message since there's no real backend
      setError("Authentication system is not currently connected. Please try again later.")
    }, 1000)
  }

  return (
    <div className="pt-24 pb-16 min-h-screen relative flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="glass-card border-none shadow-xl">
            <CardHeader className="bg-muted/50 border-b border-border pb-8 text-center rounded-t-xl">
              <CardTitle className="text-3xl text-foreground mb-2">Sign In</CardTitle>
              <CardDescription className="text-muted-foreground">
                Enter your email and password to access your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required placeholder="you@example.com" className="bg-background focus-visible:ring-foreground" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="#" className="text-sm text-foreground hover:underline">Forgot Password?</Link>
                  </div>
                  <Input id="password" type="password" required className="bg-background focus-visible:ring-foreground" />
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
                      Signing In...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>
                
                <div className="text-center mt-6">
                  <p className="text-sm text-muted-foreground">
                    Don&apos;t have an account? <Link href="/signup" className="text-foreground hover:underline font-medium">Sign Up</Link>
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
