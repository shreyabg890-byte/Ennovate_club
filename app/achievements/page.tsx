"use client"

import { motion } from "framer-motion"
import { Trophy, Medal, Award, Star, BookOpen, Flag } from "lucide-react"

export default function AchievementsPage() {
  const achievements = [
    
      {
  title: "RoboSoccer – 3rd Prize",
  category: "Robotics Competition",
  date: "April 2026",
  description:
    "Secured 3rd prize in the RoboSoccer competition held at Atria University, Bangalore.",
  icon: Trophy,
},{
  title: "Line Follower – 3rd Prize",
  category: "Robotics Competition",
  date: "April 2026",
  description:
    "Secured 3rd prize in the Line follower competition held at Atria University, Bangalore.",
  icon: Trophy,
},{
  title: "Hackathon",
  category: "Hackathon Competition",
  date: "July 2026",
  description:
    "Secured 4th position in the Hackathon competition held at Ballari Institute of Technology and Management",
  icon: Trophy,
},
{
  title: "Eight fold Hackathon",
  category: "Hackathon Competition",
  date: "March 2026",
  description:
    "Secured 10th position in the Hackathon competition held at IIT Kanpur",
  icon: Trophy,
},

  ]

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg"
          >
            Our Achievements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto"
          >
            Celebrating the milestones, victories, and hard work of our club members.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-white/20">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-12"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/30 bg-black/70 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10 ml-0 md:ml-auto group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300">
                <achievement.icon className="w-5 h-5" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-card p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white border border-white/20 w-fit">
                    {achievement.category}
                  </span>
                  <span className="text-xs font-semibold text-white/70">{achievement.date}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{achievement.title}</h3>
                <p className="text-white/85 text-sm leading-relaxed">
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
