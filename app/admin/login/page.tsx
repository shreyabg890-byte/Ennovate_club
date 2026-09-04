"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Lock, LogIn } from "lucide-react"
import { supabase } from "@/lib/supabase"

export default function AdminLoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()

    setError("")

    if (!email || !password) {
      setError("Please enter your email and password.")
      return
    }

    setLoading(true)

    try {
      const { error: loginError } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        })

      if (loginError) {
        console.error("LOGIN ERROR:", loginError.message)

        setError(loginError.message)
        return
      }

      // Login successful
      router.push("/admin")
      router.refresh()
    } catch (err) {
      console.error("LOGIN ERROR:", err)

      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError("Something went wrong. Please try again.")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen px-6 py-28">
      <div className="mx-auto flex max-w-md flex-col">

        {/* Back to website */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Website
        </Link>

        {/* Login Card */}
        <div className="rounded-2xl border border-border bg-background/80 p-8 shadow-xl backdrop-blur-md">

          {/* Icon */}
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-border">
            <Lock className="h-5 w-5" />
          </div>

          {/* Heading */}
          <div className="mb-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              ENNOVATE CLUB
            </p>

            <h1 className="text-3xl font-bold">
              Admin Login
            </h1>

            <p className="mt-2 text-sm text-muted-foreground">
              Sign in to manage club applications.
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4">
              <p className="text-sm text-red-600">
                {error}
              </p>
            </div>
          )}

          {/* Form */}
          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter admin email"
                autoComplete="email"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none transition focus:border-foreground"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                autoComplete="current-password"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none transition focus:border-foreground"
              />
            </div>

            {/* Login button */}
            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-foreground px-6 py-3.5 font-semibold text-background transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Signing in...
                </>
              ) : (
                <>
                  <LogIn className="h-4 w-4" />
                  Sign In
                </>
              )}
            </button>

          </form>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Ennovate Club • Admin Portal
        </p>

      </div>
    </main>
  )
}