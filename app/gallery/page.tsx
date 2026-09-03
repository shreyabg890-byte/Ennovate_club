"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function GalleryPage() {
  const categories = ["All", "Workshops", "Hackathons", "Bot Building", "Guest Lectures", "Project Expo", "Innovation Day"]
  const [activeCategory, setActiveCategory] = useState("All")

  const images = [
    { id: 1, category: "Workshops", src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600", alt: "Workshop", height: "h-64" },
    { id: 2, category: "Hackathons", src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600", alt: "Hackathon", height: "h-96" },
    { id: 3, category: "Bot Building", src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600", alt: "Bot Building", height: "h-64" },
    { id: 4, category: "Guest Lectures", src: "https://images.unsplash.com/photo-1475721025592-7415d1679093?auto=format&fit=crop&q=80&w=600", alt: "Guest Lecture", height: "h-80" },
    { id: 5, category: "Project Expo", src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600", alt: "Project Expo", height: "h-64" },
    { id: 6, category: "Innovation Day", src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=600", alt: "Innovation Day", height: "h-96" },
    { id: 7, category: "Hackathons", src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600", alt: "Hackathon 2", height: "h-80" },
    { id: 8, category: "Bot Building", src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600", alt: "Bot Building 2", height: "h-64" },
    { id: 9, category: "Workshops", src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600", alt: "Workshop 2", height: "h-96" }
  ]

  const filteredImages = activeCategory === "All" ? images : images.filter(img => img.category === activeCategory)

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Glimpses of innovation, collaboration, and learning at Ennovator Club.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-foreground text-background shadow-md shadow-foreground/10 scale-105"
                    : "bg-muted text-foreground border border-transparent hover:border-border hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                key={img.id}
                className={`relative overflow-hidden rounded-2xl group w-full ${img.height} inline-block mb-6 border border-border`}
              >
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-6">
                  <div>
                    <h3 className="text-white font-bold text-lg">{img.category}</h3>
                    <p className="text-white/80 text-sm">{img.alt}</p>
                  </div>
                </div>
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
