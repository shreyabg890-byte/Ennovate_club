"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Departments", href: "/departments" },
    { name: "Projects", href: "/projects" },
    { name: "Events", href: "/events" },
    { name: "Achievements", href: "/achievements" },
    { name: "Gallery", href: "/gallery" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-[rgba(18,18,18,0.68)] backdrop-blur-xl border-b border-white/18">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo & Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/clublogo.png"
                  alt="Ennovate Club"
                  className="h-20 w-50 object-contain dark:invert transition-all"
                />
              </div>
              
            </Link>
          </div>
          
          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium">
            {links.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "transition-all duration-200 hover:-translate-y-[1px] relative py-1",
                    isActive ? "text-white font-bold" : "text-white/70 hover:text-white"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-full"
                    />
                  )}
                </Link>
              )
            })}
          </nav>
          
          {/* Action Button: Join Club */}
          <div className="hidden lg:flex items-center">
            <Link href="/join">
              <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6 shadow-md transition-all font-semibold hover:scale-105">
                Join Club
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/10"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/18 bg-[rgba(18,18,18,0.95)] backdrop-blur-2xl"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors px-3 py-2 rounded-lg",
                    pathname === link.href
                      ? "text-white font-bold bg-white/15"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 pb-2">
                <Link href="/join" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-white text-black font-semibold rounded-full hover:bg-white/90">
                    Join Club
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
