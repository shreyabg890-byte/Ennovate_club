"use client"
import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X, Hexagon } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Departments", href: "/departments" },
    { name: "Projects", href: "/projects" },
    { name: "Events", href: "/events" },
    { name: "Achievements", href: "/achievements" },
    { name: "Gallery", href: "/gallery" },
    { name: "Sign In", href: "/signin" },
    { name: "Sign Up", href: "/signup" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full glass border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="group-hover:scale-105 transition-transform">
  <img
    src="/ennovate.png"
    alt="Ennovate Club"
    className="h-30 w-30 object-contain mx-auto dark:invert transition-all"
  />
</div>
              <span className="text-xl font-bold text-foreground tracking-tight group-hover:opacity-80 transition-opacity">
                Ennovate Club
              </span>
            </Link>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-foreground relative",
                  pathname === link.href ? "text-foreground font-bold" : "text-muted-foreground"
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-foreground"
                  />
                )}
              </Link>
            ))}
          </nav>
          
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-muted"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Link href="/join">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 shadow-sm transition-all">Join Club</Button>
            </Link>
          </div>
          
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-muted"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="hover:bg-muted">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t bg-background"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-foreground px-2 py-2 rounded-md",
                    pathname === link.href ? "text-foreground font-bold bg-muted" : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 pb-2">
                <Link href="/join" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-primary text-primary-foreground rounded-full">Join Club</Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
