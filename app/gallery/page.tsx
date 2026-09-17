"use client"

import { motion } from "framer-motion"

export default function GalleryPage() {
  const images = [
    {
      id: 1,
      src: "/g1.jpeg",
      alt: "Ennovate Club"
    },
    {
      id: 2,
      src: "/g2.jpeg",
      alt: "Ennovate Club"
    },
    {
      id: 3,
      src: "/g3.jpeg",
      alt: "Ennovate Club"
    },
    {
      id: 4,
      src: "/drone.jpeg",
      alt: "Ennovate Club"
    },
    {
      id: 5,
      src: "/human.jpeg",
      alt: "Ennovate Club"
    },
  ]

  return (
    <div className="pt-24 pb-16 min-h-screen">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
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
            Gallery
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
            Glimpses of innovation, collaboration, and learning at Ennovator Club.
          </motion.p>

        </div>

        {/* Gallery */}
        <motion.div
          layout
          className="
            columns-1
            sm:columns-2
            lg:columns-3
            gap-6
          "
        >
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="
                relative
                overflow-hidden
                rounded-2xl
                group
                w-full
                inline-block
                mb-6
                border
                border-white/20
                shadow-xl
              "
            >
              <img
                src={img.src}
                alt={img.alt}
                className="
                  w-full
                  h-auto
                  object-cover
                  transform
                  group-hover:scale-105
                  transition-transform
                  duration-500
                  ease-out
                "
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  )
}