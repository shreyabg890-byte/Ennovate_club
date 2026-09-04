"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function TestSupabase() {
  const [result, setResult] = useState("Testing Supabase...")

  useEffect(() => {
    async function test() {
      try {
        const { data, error } = await supabase
          .from("club_members")
          .select("id")
          .limit(1)

        if (error) {
          setResult(
            `Supabase reached, but returned an error:\n${error.message}`
          )
          return
        }

        setResult(`SUCCESS! Supabase connected.\n${JSON.stringify(data)}`)
      } catch (err) {
        setResult(`NETWORK ERROR:\n${String(err)}`)
      }
    }

    test()
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <pre className="whitespace-pre-wrap text-lg">
        {result}
      </pre>
    </div>
  )
}