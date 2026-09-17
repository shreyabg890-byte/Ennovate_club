"use client"

import React, { FormEvent, useState, useEffect, Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, CheckCircle2, Send } from "lucide-react"
import { supabase } from "@/lib/supabase"

function JoinFormContent() {
  const searchParams = useSearchParams()
  const initialDepartment = searchParams.get("department") || ""

  const [formData, setFormData] = useState({
    fullName: "",
    usn: "",
    branch: "",
    year: "",
    phone: "",
    email: "",
    skills: "",
    interestArea: "",
    department: initialDepartment,
    reason: "",
  })

  useEffect(() => {
    const deptParam = searchParams.get("department")
    if (deptParam) {
      setFormData((prev) => ({ ...prev, department: deptParam }))
    }
  }, [searchParams])

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

    // Validation
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
        .from("club_applications")
        .insert({
          name: formData.fullName,
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
        console.error(
  "SUPABASE INSERT ERROR:",
  JSON.stringify(insertError, null, 2)
)
        setError(`Database error: ${insertError.message}`)
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
        setError(`Connection error: ${String(err)}`)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mx-auto max-w-4xl">
      {/* Back button */}
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      {/* Heading */}
      <div className="mb-10">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-white/70">
          ENNOVATE CLUB
        </p>

        <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl drop-shadow-md">
          Join the Club
        </h1>

        <p className="mt-4 max-w-2xl text-white/85 text-base md:text-lg">
          Be part of a community where ideas become innovations.
          Fill in the application form below to join Ennovate Club.
        </p>
      </div>

      {/* Form Translucent Dark Glass Container */}
      <div className="glass-card p-6 md:p-10 rounded-3xl">

        {/* Success Message */}
        {success && (
          <div className="mb-8 flex items-start gap-4 rounded-xl border border-green-400/40 bg-green-500/20 p-5 backdrop-blur-md">
            <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-green-400" />
            <div>
              <h3 className="font-semibold text-green-300">
                Application Submitted Successfully!
              </h3>
              <p className="mt-1 text-sm text-white/90">
                Thank you for applying to Ennovate Club. Your application has been received.
              </p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-8 rounded-xl border border-red-400/40 bg-red-500/20 p-5 backdrop-blur-md">
            <p className="font-semibold text-red-300">
              Something went wrong
            </p>
            <p className="mt-1 break-words text-sm text-white/90">
              {error}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Personal Information */}
          <section>
            <h2 className="mb-5 text-xl font-bold text-white border-b border-white/15 pb-2">
              Personal Information
            </h2>

            <div className="grid gap-6 md:grid-cols-2">

              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-medium text-white">
                  Full Name *
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-white/50"
                />
              </div>

              {/* USN */}
              <div className="space-y-2">
                <label htmlFor="usn" className="text-sm font-medium text-white">
                  USN / Roll Number *
                </label>
                <input
                  id="usn"
                  name="usn"
                  type="text"
                  value={formData.usn}
                  onChange={handleChange}
                  placeholder="Enter your USN"
                  className="w-full rounded-xl px-4 py-3 uppercase text-sm focus:ring-2 focus:ring-white/50"
                />
              </div>

              {/* Branch */}
              <div className="space-y-2">
                <label htmlFor="branch" className="text-sm font-medium text-white">
                  Branch *
                </label>
                <input
                  id="branch"
                  name="branch"
                  type="text"
                  value={formData.branch}
                  onChange={handleChange}
                  placeholder="e.g. CSE"
                  className="w-full rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-white/50"
                />
              </div>

              {/* Year */}
              <div className="space-y-2">
                <label htmlFor="year" className="text-sm font-medium text-white">
                  Year of Study *
                </label>
                <select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-white/50"
                >
                  <option value="">Select your year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                </select>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-white">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-white/50"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-white">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-white/50"
                />
              </div>

            </div>
          </section>

          {/* Skills & Interests */}
          <section>
            <h2 className="mb-5 text-xl font-bold text-white border-b border-white/15 pb-2">
              Skills & Interests
            </h2>

            <div className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="skills" className="text-sm font-medium text-white">
                  Technical & Non-Technical Skills *
                </label>
                <textarea
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Example: Python, Java, Web Development, Communication, Leadership..."
                  className="w-full resize-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-white/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="interestArea" className="text-sm font-medium text-white">
                  Core Area of Interest *
                </label>
                <input
                  id="interestArea"
                  name="interestArea"
                  type="text"
                  value={formData.interestArea}
                  onChange={handleChange}
                  placeholder="Example: AI, Web Development, Robotics, IoT..."
                  className="w-full rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-white/50"
                />
              </div>
            </div>
          </section>

          {/* Department */}
          <section>
            <h2 className="mb-5 text-xl font-bold text-white border-b border-white/15 pb-2">
              Club Department
            </h2>

            <div className="space-y-2">
              <label htmlFor="department" className="text-sm font-medium text-white">
                Department Interested In *
              </label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-white/50"
              >
                <option value="">Select a department</option>
                <option value="Building Bot">Building Bot</option>
                <option value="Ideathon & Hackathon">Ideathon & Hackathon</option>
                <option value="Hardware & Software">Hardware & Software</option>
                <option value="Problem Statements">Problem Statements</option>
                <option value="Webmasters">Webmasters</option>
                <option value="Desiging">Designing</option>
                <option value="Marketing">Marketing</option>
                <option value="Media">Media</option>
              </select>
            </div>
          </section>

          {/* Reason */}
          <section>
            <h2 className="mb-5 text-xl font-bold text-white border-b border-white/15 pb-2">
              About You
            </h2>

            <div className="space-y-2">
              <label htmlFor="reason" className="text-sm font-medium text-white">
                Why do you want to join Ennovate Club? *
              </label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us why you want to join the club..."
                className="w-full resize-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-white/50"
              />
            </div>
          </section>

          {/* Submit */}
          <div className="border-t border-white/15 pt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-black shadow-lg transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50 md:w-auto hover:scale-105"
            >
              {isSubmitting ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
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
  )
}

export default function JoinPage() {
  return (
    <main className="min-h-screen px-4 py-24 md:py-28">
      <Suspense fallback={
        <div className="flex justify-center items-center py-20 text-white">
          Loading application form...
        </div>
      }>
        <JoinFormContent />
      </Suspense>
    </main>
  )
}