"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, MapPin, ArrowRight } from "lucide-react"

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "Robotics Workshop",
      date: "August 20, 2026",
      time: "10:00 AM - 4:00 PM",
      venue: "Main Auditorium",
      description: "A hands-on workshop on building autonomous robots using Arduino and basic sensors. Perfect for beginners."
    },
    {
      title: "24-Hour Hackathon",
      date: "September 5-6, 2026",
      time: "9:00 AM onwards",
      venue: "Computer Center Lab 1 & 2",
      description: "Build innovative software solutions for real-world problems. Great prizes and mentorship available."
    },
    {
      title: "AI Bootcamp",
      date: "September 25, 2026",
      time: "2:00 PM - 5:00 PM",
      venue: "Seminar Hall",
      description: "Learn the fundamentals of Machine Learning and Neural Networks with practical examples in Python."
    }
  ]

  const previousEvents = [
    {
      title: "IoT Hands-on Workshop",
      date: "July 10, 2026",
      description: "Students learned to connect ESP32 devices to the cloud and build a smart home monitoring system."
    },
    {
      title: "Startup Pitch Competition",
      date: "May 15, 2026",
      description: "15 teams pitched their innovative startup ideas to a panel of industry experts."
    },
    {
      title: "Web Development Bootcamp",
      date: "April 5-7, 2026",
      description: "A 3-day intensive bootcamp covering React, Tailwind CSS, and Next.js."
    }
  ]

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
          >
            Events & Workshops
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Join our upcoming events to learn new skills, network with peers, and showcase your talent.
          </motion.p>
        </div>

        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 flex items-center text-foreground">
            Upcoming Events
            <span className="ml-4 h-px bg-border flex-grow"></span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full glass-card hover:border-foreground/30 flex flex-col group transition-colors">
                  <CardContent className="p-8 flex-grow">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">{event.title}</h3>
                    
                    <div className="space-y-3 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <CalendarDays className="w-4 h-4 mr-3 text-foreground" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-3 text-foreground" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-3 text-foreground" />
                        {event.venue}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </CardContent>
                  <CardFooter className="p-8 pt-0 mt-auto">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
                      Register Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Previous Events</h2>
          
          <div className="max-w-3xl mx-auto relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {previousEvents.map((event, i) => (
              <motion.div 
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-8"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-border bg-background text-foreground group-hover:bg-foreground group-hover:text-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow transition-colors duration-300 z-10 ml-0 md:ml-auto">
                  <CalendarDays className="w-4 h-4" />
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-4 rounded-xl border glass-card group-hover:border-foreground/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="font-bold text-lg text-foreground">{event.title}</h3>
                    <span className="text-sm text-foreground font-medium">{event.date}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
