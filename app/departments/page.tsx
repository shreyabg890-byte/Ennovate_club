"use client"





import {
 
  Camera,
  Code2,
  Cpu,
  Megaphone,
  Palette,
} from "lucide-react"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bot, Trophy, Laptop, Lightbulb, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function DepartmentsPage() {
  const departments = [
    {
  title: "Bot Building",
  icon: Bot,
  description:
    "Turns ideas into intelligent machines by combining robotics, electronics, automation, and embedded technology to build smart and autonomous solutions.",
  features: [
    "Build & Battle Robots",
    "Arduino & Raspberry Pi",
    "Smart Automation",
    "IoT & Embedded Systems",
  ],
},
    {
      title: "Ideathon & Hackathon",
      icon: Trophy,
      description: "Conducts ideathons, coding competitions, hackathons, innovation challenges, and startup idea pitching events.",
      features: ["Hackathons", "Ideathons", "Team Formation", "Mentorship"]
    },
    {
      title: "Hardware & Software",
      icon: Laptop,
      description: "Develops software applications, websites, mobile apps, AI projects, IoT systems, embedded devices, and cloud applications.",
      features: ["Web Development", "Mobile Apps", "AI & ML", "IoT", "Embedded Systems"]
    },
    {
      title: "Problem Statements",
      icon: Lightbulb,
      description: "Provides industry and research problem statements for students to develop innovative solutions.",
      features: ["Industry Problems", "Smart India Hackathon", "Research Ideas", "Innovation Challenges"]
    },
    {
    title: "Webmasters",
    icon: Code2,
    description:
      "Manages the club website and develops digital platforms and web-based solutions.",
    features: [
      "Website Development",
      "Frontend Development",
      "Backend Development",
      "Web Technologies",
    ],
  },
  {
    title: "Designing",
    icon: Palette,
    description:
      "Creates creative visual designs and branding materials for the club and its activities.",
    features: [
      "Graphic Design",
      "UI/UX Design",
      "Posters & Banners",
      "Club Branding",
    ],
  },

  {
    title: "Marketing",
    icon: Megaphone,
    description:
      "Promotes Ennovate Club activities, events, projects, and initiatives.",
    features: [
      "Event Promotion",
      "Social Media Marketing",
      "Public Relations",
      "Outreach",
    ],
  },

  {
    title: "Media",
    icon: Camera,
    description:
      "Handles photography, videography, content creation, and media coverage of club activities.",
    features: [
      "Photography",
      "Videography",
      "Content Creation",
      "Event Coverage",
    ],
  }
  ]

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg"
          >
            Our Departments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto"
          >
            Explore our specialized departments designed to foster innovation, skill development, and real-world problem solving.
          </motion.p>
        </div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {departments.map((dept, i) => (
            <motion.div
              key={dept.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full glass-card flex flex-col group">
                <CardContent className="p-8 flex-grow">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 text-white flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <dept.icon className="w-7 h-7" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-white">{dept.title}</h2>
                  <p className="text-white/85 mb-6 leading-relaxed text-sm md:text-base">
                    {dept.description}
                  </p>
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center text-white text-sm">
                      Key Features
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {dept.features.map(feature => (
                        <li key={feature} className="flex items-center text-sm text-white/80">
                          <CheckCircle2 className="w-4 h-4 mr-2 shrink-0 text-white" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                
                <CardFooter className="p-8 pt-0 mt-auto">
                  <Link 
                    href={`/join?department=${encodeURIComponent(dept.title)}`}
                    className="w-full"
                  >
                    <Button 
                      className="w-full justify-between bg-white text-black hover:bg-white/90 font-semibold rounded-xl h-12 shadow-lg group-hover:shadow-white/20 transition-all"
                    >
                      <span>Join Department</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
