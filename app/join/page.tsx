"use client"

import { FormEvent, useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, Send } from "lucide-react"
import { supabase } from "@/lib/supabase"

export default function JoinPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    usn: "",
    branch: "",
    year: "",
    phone: "",
    email: "",
    skills: "",
    interestArea: "",
    department: "",
    reason: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    setError("")
    setSuccess(false)

    // Basic validation
    if (
      !formData.fullName ||
      !formData.usn ||
      !formData.branch ||
      !formData.year ||
      !formData.phone ||
      !formData.email ||
      !formData.skills ||
      !formData.interestArea ||
      !formData.department ||
      !formData.reason
    ) {
      setError("Please fill in all the required fields.")
      return
    }

    setIsSubmitting(true)

    try {
      console.log("Submitting application...")

      const { error: insertError } = await supabase
        .from("club_members")
        .insert({
          full_name: formData.fullName,
          usn: formData.usn,
          branch: formData.branch,
          year: formData.year,
          phone: formData.phone,
          email: formData.email,
          skills: formData.skills,
          interest_area: formData.interestArea,
          department: formData.department,
          reason: formData.reason,
        })

      if (insertError) {
        console.error("SUPABASE INSERT ERROR")
        console.error("Message:", insertError.message)
        console.error("Code:", insertError.code)
        console.error("Details:", insertError.details)
        console.error("Hint:", insertError.hint)

        setError(
          `Database error: ${insertError.message}`
        )

        return
      }

      console.log("Application submitted successfully!")

      setSuccess(true)

      // Clear form
      setFormData({
        fullName: "",
        usn: "",
        branch: "",
        year: "",
        phone: "",
        email: "",
        skills: "",
        interestArea: "",
        department: "",
        reason: "",
      })

    } catch (err) {
      console.error("FULL ERROR:", err)

      if (err instanceof Error) {
        setError(`Connection error: ${err.message}`)
      } else {
        setError(
          `Connection error: ${String(err)}`
        )
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen px-6 py-28">
      <div className="mx-auto max-w-4xl">

        {/* Back button */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Heading */}
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            ENNOVATE CLUB
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Join the Club
          </h1>

          <p className="mt-4 max-w-2xl text-muted-foreground">
            Be part of a community where ideas become innovations.
            Fill in the application form below to join Ennovate Club.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl border border-border bg-background/80 p-6 shadow-xl backdrop-blur-md md:p-10">

          {/* Success Message */}
          {success && (
            <div className="mb-8 flex items-start gap-4 rounded-xl border border-green-500/30 bg-green-500/10 p-5">
              <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-green-600" />

              <div>
                <h3 className="font-semibold text-green-700 dark:text-green-400">
                  Application Submitted Successfully!
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  Thank you for applying to Ennovate Club.
                  Your application has been received.
                </p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-8 rounded-xl border border-red-500/30 bg-red-500/10 p-5">
              <p className="font-semibold text-red-600">
                Something went wrong
              </p>

              <p className="mt-2 break-words text-sm text-red-600/90">
                {error}
              </p>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-8"
          >

            {/* Personal Information */}
            <section>
              <h2 className="mb-5 text-xl font-semibold">
                Personal Information
              </h2>

              <div className="grid gap-5 md:grid-cols-2">

                {/* Full Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="text-sm font-medium"
                  >
                    Full Name *
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none transition focus:border-foreground"
                  />
                </div>

                {/* USN */}
                <div className="space-y-2">
                  <label
                    htmlFor="usn"
                    className="text-sm font-medium"
                  >
                    USN / Roll Number *
                  </label>

                  <input
                    id="usn"
                    name="usn"
                    type="text"
                    value={formData.usn}
                    onChange={handleChange}
                    placeholder="Enter your USN"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 uppercase outline-none transition focus:border-foreground"
                  />
                </div>

                {/* Branch */}
                <div className="space-y-2">
                  <label
                    htmlFor="branch"
                    className="text-sm font-medium"
                  >
                    Branch *
                  </label>

                  <input
                    id="branch"
                    name="branch"
                    type="text"
                    value={formData.branch}
                    onChange={handleChange}
                    placeholder="e.g. CSE"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none transition focus:border-foreground"
                  />
                </div>

                {/* Year */}
                <div className="space-y-2">
                  <label
                    htmlFor="year"
                    className="text-sm font-medium"
                  >
                    Year of Study *
                  </label>

                  <select
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none transition focus:border-foreground"
                  >
                    <option value="">
                      Select your year
                    </option>

                    <option value="1st Year">
                      1st Year
                    </option>

                    <option value="2nd Year">
                      2nd Year
                    </option>

                    <option value="3rd Year">
                      3rd Year
                    </option>

                    <option value="4th Year">
                      4th Year
                    </option>
                  </select>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium"
                  >
                    Phone Number *
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none transition focus:border-foreground"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium"
                  >
                    Email Address *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none transition focus:border-foreground"
                  />
                </div>

              </div>
            </section>

            {/* Skills & Interests */}
            <section>
              <h2 className="mb-5 text-xl font-semibold">
                Skills & Interests
              </h2>

              <div className="space-y-5">

                {/* Skills */}
                <div className="space-y-2">
                  <label
                    htmlFor="skills"
                    className="text-sm font-medium"
                  >
                    Technical & Non-Technical Skills *
                  </label>

                  <textarea
                    id="skills"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Example: Python, Java, Web Development, Communication, Leadership..."
                    className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 outline-none transition focus:border-foreground"
                  />
                </div>

                {/* Interest Area */}
                <div className="space-y-2">
                  <label
                    htmlFor="interestArea"
                    className="text-sm font-medium"
                  >
                    Core Area of Interest *
                  </label>

                  <input
                    id="interestArea"
                    name="interestArea"
                    type="text"
                    value={formData.interestArea}
                    onChange={handleChange}
                    placeholder="Example: AI, Web Development, Robotics, IoT..."
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none transition focus:border-foreground"
                  />
                </div>

              </div>
            </section>

            {/* Department */}
            <section>
              <h2 className="mb-5 text-xl font-semibold">
                Club Department
              </h2>

              <div className="space-y-2">
                <label
                  htmlFor="department"
                  className="text-sm font-medium"
                >
                  Department Interested In *
                </label>

                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none transition focus:border-foreground"
                >
                  <option value="">
                    Select a department
                  </option>

                  <option value="Building Bot">
                    Building Bot
                  </option>

                  <option value="Ideathon & Hackathon">
                    Ideathon & Hackathon
                  </option>

                  <option value="Hardware & Software">
                    Hardware & Software
                  </option>

                  <option value="Problem Statements">
                    Problem Statements
                  </option>
                </select>
              </div>
            </section>

            {/* Reason */}
            <section>
              <h2 className="mb-5 text-xl font-semibold">
                About You
              </h2>

              <div className="space-y-2">
                <label
                  htmlFor="reason"
                  className="text-sm font-medium"
                >
                  Why do you want to join Ennovate Club? *
                </label>

                <textarea
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us why you want to join the club..."
                  className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 outline-none transition focus:border-foreground"
                />
              </div>
            </section>

            {/* Submit */}
            <div className="border-t border-border pt-8">

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-foreground px-6 py-3.5 font-semibold text-background transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 md:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Submit Application
                  </>
                )}
              </button>

            </div>

          </form>
        </div>
      </div>
    </main>
  )
}