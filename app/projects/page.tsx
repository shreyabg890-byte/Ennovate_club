"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, CheckCircle2, Clock, Cpu } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Humanoid BOT – Multi-Tasking Robot",
      department: "Hardware & Software",
      tech: ["Arduino", "Servo Motors", "Embedded Systems"],
      teamSize: 4,
      status: "ongoing",
    },

    {
      title: "Robo Soccer",
      department: "Hardware & Software",
      tech: ["Arduino", "RF Communication", "Robotics"],
      teamSize: 4,
      status: "completed",
    },

    {
      title: "Obstacle Avoidance BOT",
      department: "Hardware & Software",
      tech: ["Arduino Uno", "Ultrasonic Sensor", "Motor Driver"],
      teamSize: 4,
      status: "completed",
    },

    {
      title: "Drone for Medical Kit Supply in Emergency",
      department: "Hardware & Software",
      tech: ["Arduino Uno", "Ultrasonic Sensor", "Motor Driver"],
      teamSize: 4,
      status: "completed",
    },
  ]

  const ongoingProjects = projects.filter(
    (project) => project.status === "ongoing"
  )

  const completedProjects = projects.filter(
    (project) => project.status === "completed"
  )

  const ProjectCard = ({
    project,
    index,
  }: {
    project: {
      title: string
      department: string
      tech: string[]
      teamSize: number
      status: string
    }
    index: number
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="glass-card overflow-hidden h-full flex flex-col group">

        {/* Project Header */}
        <div className="h-20 bg-white/5 border-b border-white/10 flex items-center justify-between px-6">

          {/* Project Icon */}
          <div className="
            w-10
            h-10
            rounded-xl
            bg-white/10
            border
            border-white/20
            flex
            items-center
            justify-center
          ">
            <Cpu className="w-5 h-5 text-white" />
          </div>

          {/* Status */}
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md flex items-center gap-1.5 border ${
              project.status === "completed"
                ? "bg-white text-black border-white"
                : "bg-black/60 text-white border-white/30"
            }`}
          >
            {project.status === "completed" ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-black" />
            ) : (
              <Clock className="w-3.5 h-3.5 text-white" />
            )}

            {project.status === "completed"
              ? "Completed"
              : "Ongoing"}
          </span>
        </div>

        {/* Project Content */}
        <CardContent className="p-6 flex-grow flex flex-col">

          {/* Department */}
          <div className="
            text-xs
            font-semibold
            text-white/70
            uppercase
            tracking-wider
            mb-2
          ">
            {project.department}
          </div>

          {/* Title */}
          <h3 className="
            text-xl
            font-bold
            mb-5
            text-white
            line-clamp-2
          ">
            {project.title}
          </h3>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {project.tech.map((technology) => (
              <span
                key={technology}
                className="
                  px-2.5
                  py-1
                  rounded-md
                  text-xs
                  font-medium
                  bg-white/10
                  text-white
                  border
                  border-white/20
                "
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Team Size */}
          <div className="
            flex
            items-center
            text-sm
            text-white/80
            pt-4
            border-t
            border-white/15
          ">
            <Users className="w-4 h-4 mr-2 text-white/70" />

            <span>
              Team Size: {project.teamSize} members
            </span>
          </div>

        </CardContent>
      </Card>
    </motion.div>
  )

  return (
    <div className="pt-24 pb-16 min-h-screen">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Heading */}
        <div className="text-center mb-16">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              text-4xl
              md:text-6xl
              font-extrabold
              mb-4
              text-white
              drop-shadow-lg
            "
          >
            Our Projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="
              text-lg
              md:text-xl
              text-white/85
              max-w-2xl
              mx-auto
            "
          >
            Discover the innovative solutions built by our club
            members to solve real-world challenges.
          </motion.p>

        </div>

        {/* Projects */}
        <div className="space-y-20">

          {/* Ongoing Projects */}
          <section>

            <div className="flex items-center gap-4 mb-8">

              <h2 className="
                text-2xl
                md:text-3xl
                font-extrabold
                text-white
              ">
                Ongoing Projects
              </h2>

              <div className="
                h-px
                bg-white/20
                flex-grow
                mt-1
              " />

            </div>

            <div className="
              grid
              sm:grid-cols-2
              lg:grid-cols-3
              gap-8
            ">
              {ongoingProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>

          </section>

          {/* Completed Projects */}
          <section>

            <div className="flex items-center gap-4 mb-8">

              <h2 className="
                text-2xl
                md:text-3xl
                font-extrabold
                text-white
              ">
                Completed Projects
              </h2>

              <div className="
                h-px
                bg-white/20
                flex-grow
                mt-1
              " />

            </div>

            <div className="
              grid
              sm:grid-cols-2
              lg:grid-cols-3
              gap-8
            ">
              {completedProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>

          </section>

        </div>

      </div>

    </div>
  )
}