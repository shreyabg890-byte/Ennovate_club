"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, CheckCircle2, Clock } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Smart Attendance System",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
      department: "Hardware & Software",
      tech: ["Python", "OpenCV", "React"],
      teamSize: 4,
      status: "completed"
    },
    {
      title: "Autonomous Delivery Robot",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
      department: "Building Bot",
      tech: ["ROS", "C++", "Arduino"],
      teamSize: 5,
      status: "ongoing"
    },
    {
      title: "Medicine Reminder Device",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
      department: "Building Bot",
      tech: ["IoT", "ESP32", "Firebase"],
      teamSize: 3,
      status: "completed"
    },
    {
      title: "Smart Water Purifier",
      image: "https://images.unsplash.com/photo-1544460773-8822002f2324?auto=format&fit=crop&q=80&w=800",
      department: "Hardware & Software",
      tech: ["Sensors", "IoT", "Mobile App"],
      teamSize: 4,
      status: "ongoing"
    },
    {
      title: "College Event Management System",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
      department: "Ideathon & Hackathon",
      tech: ["Next.js", "Node.js", "MongoDB"],
      teamSize: 6,
      status: "completed"
    }
  ]

  const ongoingProjects = projects.filter(p => p.status === "ongoing")
  const completedProjects = projects.filter(p => p.status === "completed")

  const ProjectCard = ({ project, index }: { project: { title: string, image: string, department: string, tech: string[], teamSize: number, status: string }, index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="glass-card overflow-hidden h-full flex flex-col group hover:-translate-y-1 transition-all duration-300">
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out grayscale group-hover:grayscale-0"
          />
          <div className="absolute top-4 right-4 z-20">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md flex items-center gap-1 ${
              project.status === 'completed' 
                ? 'bg-foreground text-background border border-foreground/30' 
                : 'bg-background/80 text-foreground border border-border'
            }`}>
              {project.status === 'completed' ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
              {project.status === 'completed' ? 'Completed' : 'Ongoing'}
            </span>
          </div>
        </div>
        <CardContent className="p-6 flex-grow flex flex-col">
          <div className="text-sm font-semibold text-muted-foreground mb-2">{project.department}</div>
          <h3 className="text-xl font-bold mb-4 line-clamp-2 text-foreground">{project.title}</h3>
          
          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {project.tech.map((t: string) => (
              <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium bg-muted text-foreground border border-border">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center text-sm text-muted-foreground pt-4 border-t border-border">
            <Users className="w-4 h-4 mr-2" />
            <span>Team Size: {project.teamSize} members</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Discover the innovative solutions built by our club members to solve real-world challenges.
          </motion.p>
        </div>

        <div className="space-y-24">
          <section>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-bold text-foreground">Ongoing Projects</h2>
              <div className="h-px bg-border flex-grow mt-2" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {ongoingProjects.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-bold text-foreground">Completed Projects</h2>
              <div className="h-px bg-border flex-grow mt-2" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {completedProjects.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
