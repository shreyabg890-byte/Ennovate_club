"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Bot,
  Code,
  Cpu,
  Lightbulb,
  Users,
  Trophy,
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* =====================================================
          WHOLE WEBSITE BACKGROUND
      ===================================================== */}

      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/background_image.png')",
        }}
      />

      {/* Dark overlay */}
      <div className="fixed inset-0 -z-10 bg-black/45" />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 flex flex-col min-h-screen">

        {/* ===================================================
            HERO SECTION
        =================================================== */}

        <section className="min-h-[720px] flex items-center justify-center px-4 py-20">

          <div className="container mx-auto max-w-5xl">

            {/* Glassmorphism Hero Card */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="
                mx-auto
                max-w-4xl
                rounded-3xl
                border border-white/30
                bg-white/15
                backdrop-blur-xl
                shadow-2xl
                px-6
                py-12
                sm:px-10
                md:px-16
                md:py-16
                text-center
              "
            >

              {/* Logo */}
              {/* Ennovate Logo - No Square Background */}
{/* Ennovate Logo */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="flex justify-center mb-2"
>
  <img
    src="/ennovate.png"
    alt="Ennovate Club"
    className="
      w-[180px]
      sm:w-[210px]
      md:w-[250px]
      h-auto
      object-contain
      drop-shadow-lg
      dark:invert
    "
  />
</motion.div>

{/* Heading */}
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.6,
    delay: 0.3,
  }}
  className="
    text-4xl
    sm:text-5xl
    md:text-7xl
    font-extrabold
    tracking-tight
    text-white
    mb-3
    drop-shadow-2xl
  "
>
  Ennovate Club
</motion.h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                }}
                className="
                  text-lg
                  md:text-2xl
                  font-medium
                  text-white
                  mb-6
                  drop-shadow-lg
                "
              >
                Innovate • Build • Collaborate • Inspire
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                }}
                className="
                  max-w-3xl
                  mx-auto
                  text-sm
                  md:text-base
                  leading-7
                  text-white/90
                  mb-10
                  drop-shadow-md
                "
              >
                Ennovate Club is a student-driven innovation community where
                creativity meets technology. We encourage students to explore
                new tech, build real-world solutions, and compete in
                national-level hackathons.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                }}
                className="
                  flex
                  flex-col
                  sm:flex-row
                  justify-center
                  items-center
                  gap-4
                "
              >

                {/* Join Club */}
                <Link href="/join">
                  <Button
                    size="lg"
                    className="
                      w-full
                      sm:w-auto
                      h-14
                      px-8
                      rounded-xl
                      bg-white
                      text-black
                      hover:bg-white/90
                      shadow-xl
                      font-semibold
                    "
                  >
                    Join the Club
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>

                {/* Explore Departments */}
                <Link href="/departments">
                  <Button
                    size="lg"
                    variant="outline"
                    className="
                      w-full
                      sm:w-auto
                      h-14
                      px-8
                      rounded-xl
                      border-white/50
                      bg-white/10
                      text-white
                      hover:bg-white/20
                      backdrop-blur-md
                    "
                  >
                    Explore Departments
                  </Button>
                </Link>

              </motion.div>

            </motion.div>

          </div>

        </section>


        {/* ===================================================
            STATS SECTION
        =================================================== */}

        <section className="py-20 px-4">

          <div className="container mx-auto max-w-6xl">

            <div className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-5
            ">

              {[
                {
                  label: "Active Members",
                  value: "200+",
                  icon: Users,
                },
                {
                  label: "Projects Completed",
                  value: "50+",
                  icon: Code,
                },
                {
                  label: "Hackathons Won",
                  value: "15",
                  icon: Trophy,
                },
                {
                  label: "Workshops Hosted",
                  value: "30+",
                  icon: Lightbulb,
                },
              ].map((stat, i) => (

                <motion.div
                  key={stat.label}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                  }}
                  className="
                    rounded-2xl
                    border border-white/25
                    bg-white/15
                    backdrop-blur-xl
                    shadow-xl
                    p-6
                    text-center
                    hover:bg-white/20
                    transition-all
                    duration-300
                  "
                >

                  <div className="
                    mx-auto
                    mb-4
                    w-12
                    h-12
                    rounded-full
                    flex
                    items-center
                    justify-center
                    bg-white/20
                    border border-white/20
                  ">
                    <stat.icon
                      className="w-6 h-6 text-white"
                    />
                  </div>

                  <h3 className="
                    text-3xl
                    md:text-4xl
                    font-bold
                    text-white
                    mb-2
                  ">
                    {stat.value}
                  </h3>

                  <p className="
                    text-xs
                    md:text-sm
                    font-medium
                    text-white/75
                    uppercase
                    tracking-wider
                  ">
                    {stat.label}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </section>


        {/* ===================================================
            LATEST UPDATES
        =================================================== */}

        <section className="py-24 px-4">

          <div className="container mx-auto max-w-6xl">

            {/* Heading */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="text-center mb-14"
            >

              <h2 className="
                text-4xl
                md:text-5xl
                font-bold
                text-white
                mb-4
                drop-shadow-xl
              ">
                Latest Updates
              </h2>

              <p className="
                max-w-2xl
                mx-auto
                text-white/80
                text-sm
                md:text-base
              ">
                Stay up to date with what&apos;s happening at Ennovate Club.
              </p>

            </motion.div>


            {/* Update Cards */}
            <div className="
              grid
              md:grid-cols-3
              gap-7
              max-w-6xl
              mx-auto
            ">

              {/* Robotics */}
              <Card className="
                border-white/25
                bg-white/15
                backdrop-blur-xl
                shadow-2xl
                rounded-2xl
                hover:bg-white/20
                hover:-translate-y-2
                transition-all
                duration-300
              ">

                <CardContent className="p-8">

                  <div className="
                    w-12
                    h-12
                    bg-white/20
                    border border-white/20
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    mb-6
                  ">
                    <Bot className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="
                    text-xl
                    font-bold
                    text-white
                    mb-3
                  ">
                    Robotics Workshop 2026
                  </h3>

                  <p className="
                    text-white/75
                    mb-5
                    leading-6
                  ">
                    Join our upcoming hands-on session on building
                    autonomous robots from scratch.
                  </p>

                  <Link
                    href="/events"
                    className="
                      text-white
                      font-semibold
                      flex
                      items-center
                      hover:underline
                    "
                  >
                    Read more
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>

                </CardContent>

              </Card>


              {/* Hackathon */}
              <Card className="
                border-white/25
                bg-white/15
                backdrop-blur-xl
                shadow-2xl
                rounded-2xl
                hover:bg-white/20
                hover:-translate-y-2
                transition-all
                duration-300
              ">

                <CardContent className="p-8">

                  <div className="
                    w-12
                    h-12
                    bg-white/20
                    border border-white/20
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    mb-6
                  ">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="
                    text-xl
                    font-bold
                    text-white
                    mb-3
                  ">
                    Hackathon Winners
                  </h3>

                  <p className="
                    text-white/75
                    mb-5
                    leading-6
                  ">
                    Congratulations to Team Innovators for winning
                    the Smart India Hackathon.
                  </p>

                  <Link
                    href="/achievements"
                    className="
                      text-white
                      font-semibold
                      flex
                      items-center
                      hover:underline
                    "
                  >
                    Read more
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>

                </CardContent>

              </Card>


              {/* IoT */}
              <Card className="
                border-white/25
                bg-white/15
                backdrop-blur-xl
                shadow-2xl
                rounded-2xl
                hover:bg-white/20
                hover:-translate-y-2
                transition-all
                duration-300
              ">

                <CardContent className="p-8">

                  <div className="
                    w-12
                    h-12
                    bg-white/20
                    border border-white/20
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    mb-6
                  ">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="
                    text-xl
                    font-bold
                    text-white
                    mb-3
                  ">
                    New IoT Lab
                  </h3>

                  <p className="
                    text-white/75
                    mb-5
                    leading-6
                  ">
                    We&apos;ve just upgraded our hardware lab with new
                    Raspberry Pi and ESP32 kits.
                  </p>

                  <Link
                    href="/departments"
                    className="
                      text-white
                      font-semibold
                      flex
                      items-center
                      hover:underline
                    "
                  >
                    Read more
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>

                </CardContent>

              </Card>

            </div>

          </div>

        </section>

      </div>
    </div>
  )
}