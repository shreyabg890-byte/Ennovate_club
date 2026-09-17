"use client"
import { Rocket} from "lucide-react";
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
    <div className="relative min-h-screen">

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* ===================================================
            HERO SECTION
        =================================================== */}

        <section className="min-h-[85vh] flex items-center justify-center px-4 py-16 md:py-24">
          <div className="container mx-auto max-w-5xl">

            {/* Translucent Dark Frosted Glass Hero Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="
                mx-auto
                max-w-4xl
                rounded-[28px]
                glass
                px-6
                py-12
                sm:px-12
                md:px-20
                md:py-20
                text-center
                shadow-2xl
              "
            >

              {/* Ennovate Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center mb-0"
              >
                <img
                  src="/clublogo.png"
                  alt="Ennovate Club"
                  className="
                    w-[350px]
                    sm:w-[190px]
                    md:w-[250px]
                    h-[250px]
                    object-contain
                    drop-shadow-xl
                    dark:invert
                  "
                />
              </motion.div>

              {/* Heading in Original Sans-Serif Font Style */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="
                  text-4xl
                  sm:text-5xl
                  md:text-7xl
                  font-extrabold
                  tracking-tight
                  text-white
                  mb-4
                  drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]
                "
              >
                Ennovate Club
              </motion.h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="
                  text-lg
                  sm:text-xl
                  md:text-2xl
                  font-medium
                  text-white/90
                  mb-6
                  tracking-wide
                  drop-shadow-md
                "
              >
                Innovate • Build • Collaborate • Inspire
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="
                  max-w-2xl
                  mx-auto
                  text-base
                  md:text-lg
                  leading-relaxed
                  text-white/85
                  mb-10
                "
              >
                Ennovate Club is a student-driven innovation community where
                creativity meets technology. We encourage students to explore
                new tech, build real-world solutions, and compete in
                national-level hackathons.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="
                  flex
                  flex-col
                  sm:flex-row
                  justify-center
                  items-center
                  gap-4
                "
              >

                {/* Join the Club */}
                <Link href="/join" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="
                      w-full
                      sm:w-auto
                      h-13
                      px-8
                      rounded-xl
                      bg-white
                      text-black
                      hover:bg-white/90
                      shadow-lg
                      font-semibold
                      text-base
                    "
                  >
                    Join the Club
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>

                {/* Explore Departments */}
                <Link href="/departments" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="
                      w-full
                      sm:w-auto
                      h-13
                      px-8
                      rounded-xl
                      border-white/30
                      bg-white/10
                      text-white
                      hover:bg-white/20
                      backdrop-blur-md
                      text-base
                      font-semibold
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

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              {[
                {
                  label: "Active Members",
                  value: "70+",
                  icon: Users,
                },
                {
                  label: "Projects Completed",
                  value: "10+",
                  icon: Code,
                },
                {
                  label: "Hackathons",
                  value: "15+",
                  icon: Trophy,
                },
                {
                  label: "Workshops Hosted",
                  value: "5+",
                  icon: Lightbulb,
                },
              ].map((stat, i) => (

                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="
                    glass-card
                    p-6
                    text-center
                    flex
                    flex-col
                    items-center
                    justify-center
                  "
                >
                  <div className="
                    mb-4
                    w-12
                    h-12
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    bg-white/10
                    border border-white/20
                  ">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="
                    text-3xl
                    md:text-4xl
                    font-extrabold
                    text-white
                    mb-1
                  ">
                    {stat.value}
                  </h3>

                  <p className="
                    text-xs
                    md:text-sm
                    font-medium
                    text-white/70
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

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">

            {/* Section Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="
                text-3xl
                md:text-5xl
                font-extrabold
                text-white
                mb-4
              ">
                Latest Updates
              </h2>

              <p className="
                max-w-xl
                mx-auto
                text-white/80
                text-base
              ">
                Stay up to date with what&apos;s happening at Ennovate Club.
              </p>
            </motion.div>


            {/* Update Cards */}
            <div className="grid  gap-8 justify-items-center">

              {/* Launch Update */}
<Card className="glass-card flex flex-col justify-between w-full max-w-2xl">
  <CardContent className="p-8">
    <div className="
      w-12
      h-12
      bg-white/10
      border border-white/20
      rounded-2xl
      flex
      items-center
      justify-center
      mb-6
    ">
      <Rocket className="w-6 h-6 text-white" />
    </div>

    <h3 className="text-xl font-bold text-white mb-3">
      Ennovate Club Launch
    </h3>

    <p className="text-white/80 mb-6 leading-relaxed text-sm">
      Welcome to Ennovate Club — a community driven by
      innovation, technology, creativity and collaboration.
      Explore our new website and discover what we have to offer.
    </p>

    
  </CardContent>
</Card>


             

            </div>

          </div>
        </section>

      </div>
    </div>
  )
}