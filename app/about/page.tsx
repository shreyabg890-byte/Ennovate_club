"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Lightbulb, Users, Rocket } from "lucide-react"

export default function AboutPage() {
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
            About Ennovator Club
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We are a community of passionate builders, thinkers, and innovators dedicated to pushing the boundaries of technology.
          </motion.p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-24 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full glass-card hover:border-foreground/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-foreground" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the premier platform for fostering innovation and technical excellence, empowering students to transform their ideas into impactful real-world solutions that benefit society.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full glass-card hover:border-foreground/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-foreground" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To cultivate a culture of hands-on learning, collaboration, and problem-solving by providing resources, mentorship, and opportunities to participate in hackathons, workshops, and industry projects.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Innovation", desc: "Thinking outside the box", icon: Lightbulb },
              { title: "Collaboration", desc: "Working together to achieve more", icon: Users },
              { title: "Excellence", desc: "Striving for the best quality", icon: Target },
              { title: "Impact", desc: "Creating solutions that matter", icon: Rocket },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl glass hover:bg-muted/50 transition-colors"
              >
                <div className="w-12 h-12 mx-auto bg-muted rounded-full flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Leadership Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((member, i) => (
              <motion.div
                key={member}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="overflow-hidden glass-card group">
                  <div className="h-48 bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/10 transition-colors" />
                    {/* Placeholder for team member image */}
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                      <Users className="w-12 h-12 opacity-20" />
                    </div>
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-1">Team Member {member}</h3>
                    <p className="text-sm text-foreground font-medium mb-3">Position</p>
                    <p className="text-sm text-muted-foreground">
                      Brief description about the team member and their role in the club.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
