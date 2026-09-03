"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bot, Trophy, Laptop, Lightbulb, ArrowRight, CheckCircle2 } from "lucide-react"

export default function DepartmentsPage() {
  const departments = [
    {
      title: "Building Bot",
      icon: Bot,
      description: "Focuses on robotics, automation, electronics, Arduino, Raspberry Pi, embedded systems, autonomous robots, and hardware innovation.",
      features: ["Robotics Workshops", "Bot Competitions", "Automation Projects", "IoT Development"]
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
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
          >
            Departments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our specialized departments designed to foster innovation, skill development, and real-world problem solving.
          </motion.p>
        </div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {departments.map((dept, i) => (
            <motion.div
              key={dept.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full glass-card hover:border-foreground/30 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                <CardContent className="p-8 flex-grow">
                  <div className={`w-16 h-16 rounded-2xl bg-muted text-foreground flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-colors duration-300`}>
                    <dept.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">{dept.title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {dept.description}
                  </p>
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center text-foreground">
                      Key Features
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {dept.features.map(feature => (
                        <li key={feature} className="flex items-start text-sm text-muted-foreground">
                          <CheckCircle2 className={`w-4 h-4 mr-2 shrink-0 text-foreground`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="p-8 pt-0 mt-auto">
                  <Button variant="outline" className="w-full justify-between hover:bg-foreground hover:text-background transition-colors border-border text-foreground">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
