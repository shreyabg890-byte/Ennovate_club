"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function EventsPage() {
  const Events = [
    
    {
  title: "Ennovate Club Launch",
  date: "September 18, 2026",
  time: "9:00 AM - 11:00 PM",
  venue: "College Auditorium",
  description: "Join us for the official launch of Ennovate Club and the unveiling of our new club website, marking the beginning of a new journey of innovation and collaboration."
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
            Events & Workshops
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto"
          >
            Join our events to learn new skills, network with peers, and showcase your talent.
          </motion.p>
        </div>

        {/* Upcoming Events */}
        <section className="mb-24">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-10 flex items-center text-white">
            Events
            <span className="ml-4 h-px bg-white/20 flex-grow"></span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {Events.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full glass-card flex flex-col group">
                  <CardContent className="p-8 flex-grow">
                    <h3 className="text-2xl font-bold mb-4 text-white">{event.title}</h3>
                    
                    <div className="space-y-3 mb-6 text-sm text-white/80">
                      <div className="flex items-center">
                        <CalendarDays className="w-4 h-4 mr-3 text-white" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-3 text-white" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-3 text-white" />
                        {event.venue}
                      </div>
                    </div>
                    
                    <p className="text-white/85 leading-relaxed text-sm">
                      {event.description}
                    </p>
                  </CardContent>
                  
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        

      </div>
    </div>
  )
}
