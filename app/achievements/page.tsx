"use client"
import { motion } from "framer-motion"
import { Trophy, Medal, Award, Star, BookOpen, Flag } from "lucide-react"

export default function AchievementsPage() {
  const achievements = [
    {
      title: "Smart India Hackathon Winners",
      category: "Hackathon Winners",
      date: "December 2025",
      description: "First prize in the software edition for developing an AI-driven disaster management system.",
      icon: Trophy,
    },
    {
      title: "Best Robotics Team",
      category: "National Competitions",
      date: "October 2025",
      description: "Secured 2nd runner-up position at the National Robotics Championship held at IIT Bombay.",
      icon: Medal,
    },
    {
      title: "IEEE Conference Best Paper",
      category: "Research Publications",
      date: "August 2025",
      description: "Published a research paper on 'IoT in Agriculture' which won the Best Paper Award.",
      icon: BookOpen,
    },
    {
      title: "Innovation Excellence Award",
      category: "Awards",
      date: "May 2025",
      description: "Awarded by the State Tech Council for outstanding contribution to student-led innovation.",
      icon: Award,
    },
    {
      title: "100+ AWS Certifications",
      category: "Certifications",
      date: "March 2025",
      description: "Over 100 club members successfully cleared the AWS Cloud Practitioner certification.",
      icon: Star,
    },
    {
      title: "Club Founded",
      category: "Club Milestones",
      date: "January 2024",
      description: "Ennovator Club was officially founded with an initial batch of 50 enthusiastic students.",
      icon: Flag,
    }
  ]

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
          >
            Our Achievements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Celebrating the milestones, victories, and hard work of our club members.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-border">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-12"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-border bg-background text-foreground shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10 ml-0 md:ml-auto group-hover:scale-110 group-hover:bg-foreground group-hover:text-background transition-all">
                <achievement.icon className="w-5 h-5" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-card p-6 rounded-2xl group-hover:border-foreground/30 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-muted text-foreground border border-border mb-2 sm:mb-0">
                    {achievement.category}
                  </span>
                  <span className="text-sm font-semibold text-muted-foreground">{achievement.date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{achievement.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
