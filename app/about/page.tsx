"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Lightbulb, Users, Rocket } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg"
          >
            About Ennovator Club
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
          >
            We are a community of passionate builders, thinkers, and innovators
            dedicated to pushing the boundaries of technology.
          </motion.p>
        </div>


        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-24 max-w-5xl mx-auto">

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full glass-card p-2">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>

                <h2 className="text-2xl font-bold mb-4 text-white">
                  Our Vision
                </h2>

                <p className="text-white/85 leading-relaxed">
                  To be the premier platform for fostering innovation and
                  technical excellence, empowering students to transform their
                  ideas into impactful real-world solutions that benefit society.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full glass-card p-2">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>

                <h2 className="text-2xl font-bold mb-4 text-white">
                  Our Mission
                </h2>

                <p className="text-white/85 leading-relaxed">
                  To cultivate a culture of hands-on learning, collaboration,
                  and problem-solving by providing resources, mentorship, and
                  opportunities to participate in hackathons, workshops, and
                  industry projects.
                </p>
              </CardContent>
            </Card>
          </motion.div>

        </div>


        {/* Core Values Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white">
              Our Core Values
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Innovation",
                desc: "Thinking outside the box to solve complex challenges",
                icon: Lightbulb,
              },
              {
                title: "Collaboration",
                desc: "Working together as a team to achieve ambitious goals",
                icon: Users,
              },
              {
                title: "Excellence",
                desc: "Striving for the highest quality in code and design",
                icon: Target,
              },
              {
                title: "Impact",
                desc: "Creating practical solutions that make a difference",
                icon: Rocket,
              },
            ].map((value, i) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-6 rounded-2xl glass-card flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-white">
                    {value.title}
                  </h3>

                  <p className="text-sm text-white/80">
                    {value.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>


        {/* Leadership Team */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white">
              Core Team
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
  name: "Sohum",
  role: "President",
  desc: "Leads the club's vision, strategy, and overall operations.",
  image: "/sohum.jpeg"
},
               {
    name: "Ambati Vamsi",
    role: "Vice President",
    desc: "Assists in club leadership, strategic planning, and execution of key initiatives.",
    image: "/vamsi.jpeg"
  },
  {
    name: "G M Sohan",
    role: "Club Advisor",
    desc: "Provides guidance, mentorship, and strategic support for the club's initiatives.",
    image: "/Sohan.jpeg"
  },
  {
    name: "K V Vyshnavi",
    role: "Secretary",
    desc: "Oversees official communication, documentation, and coordination of club activities.",
    image: "/Vysnavi.jpeg"
  },
  {
    name: "Anantharaju Harshitha",
    role: "Treasurer",
    desc: "Oversees financial records, budgeting, and responsible management of club resources.",
    image: "/Harshitha.jpeg"
  },
  {
    name: "Prajwal",
    role: "Event Coordinator",
    desc: "Plans and coordinates events, workshops, and activities to engage club members.",
    image: "/Prajwal.jpeg"
  },
  {
    name: "Shreya B G",
    role: "WebMaster",
    desc: "Leads web development and builds digital platforms for club projects.",
    image: "/shreya.jpeg"
  },
  {
    name: "Dhanush",
    role: "Marketing Coordinator",
    desc: "Leads promotional initiatives and strengthens the club's outreach and visibility.",
    image: "/Dhanush.jpeg"
  },
  {
    name: "Nischay",
    role: "Media Coordinator",
    desc: "Manages media coverage, visual content, and documentation of club activities.",
    image: "/Nischay.jpeg"
  }

            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="glass-card overflow-hidden h-full flex flex-col">
                  <div className="h-70 bg-white/5 relative flex items-center justify-center border-b border-white/10">
                    <img
    src={member.image}
    alt={member.name}
    className="w-full h-full object-cover "
  />
                  </div>

                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-1 text-white">
                      {member.name}
                    </h3>

                    <p className="text-sm text-white/70 font-semibold mb-3">
                      {member.role}
                    </p>

                    <p className="text-sm text-white/85">
                      {member.desc}
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