import Link from "next/link"
import { MessageCircle, Globe, Code } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t glass mt-16">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">

        {/* Footer Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-5 md:col-span-1">

            {/* Logo + Name */}
            <div className="flex items-center gap-3">

              {/* Logo - NO BOX */}
              <img
                src="/ennovate.png"
                alt="Ennovate Club"
                className="
                  h-20
                  w-20
                  max-w-[130px]
                  object-contain
                  dark:invert
                "
              />

              <h3 className="text-xl font-bold text-foreground tracking-tight">
                Ennovate Club
              </h3>

            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              A student-driven innovation community where creativity meets
              technology. We encourage students to build real-world solutions.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 text-muted-foreground">

              <Link
                href="#"
                aria-label="Message"
                className="
                  p-2
                  rounded-full
                  hover:text-foreground
                  hover:bg-muted
                  border
                  border-transparent
                  hover:border-border
                  transition-all
                "
              >
                <MessageCircle className="h-5 w-5" />
              </Link>

              <Link
                href="#"
                aria-label="Website"
                className="
                  p-2
                  rounded-full
                  hover:text-foreground
                  hover:bg-muted
                  border
                  border-transparent
                  hover:border-border
                  transition-all
                "
              >
                <Globe className="h-5 w-5" />
              </Link>

              <Link
                href="#"
                aria-label="Code"
                className="
                  p-2
                  rounded-full
                  hover:text-foreground
                  hover:bg-muted
                  border
                  border-transparent
                  hover:border-border
                  transition-all
                "
              >
                <Code className="h-5 w-5" />
              </Link>

            </div>
          </div>


          {/* Quick Links */}
          <div className="space-y-4">

            <h4 className="font-semibold text-foreground tracking-wide">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm text-muted-foreground">

              <li>
                <Link
                  href="/about"
                  className="hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/join"
                  className="hover:text-foreground transition-colors"
                >
                  Join Club
                </Link>
              </li>

              <li>
                <Link
                  href="/gallery"
                  className="hover:text-foreground transition-colors"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  href="/events"
                  className="hover:text-foreground transition-colors"
                >
                  Events
                </Link>
              </li>

            </ul>
          </div>


          {/* Departments */}
          <div className="space-y-4">

            <h4 className="font-semibold text-foreground tracking-wide">
              Departments
            </h4>

            <ul className="space-y-3 text-sm text-muted-foreground">

              <li>
                <Link
                  href="/departments"
                  className="hover:text-foreground transition-colors"
                >
                  Building Bot
                </Link>
              </li>

              <li>
                <Link
                  href="/departments"
                  className="hover:text-foreground transition-colors"
                >
                  Ideathon & Hackathon
                </Link>
              </li>

              <li>
                <Link
                  href="/departments"
                  className="hover:text-foreground transition-colors"
                >
                  Hardware & Software
                </Link>
              </li>

              <li>
                <Link
                  href="/departments"
                  className="hover:text-foreground transition-colors"
                >
                  Problem Statements
                </Link>
              </li>

            </ul>
          </div>


          {/* Activities */}
          <div className="space-y-4">

            <h4 className="font-semibold text-foreground tracking-wide">
              Activities
            </h4>

            <ul className="space-y-3 text-sm text-muted-foreground">

              <li>
                <Link
                  href="/events"
                  className="hover:text-foreground transition-colors"
                >
                  Events
                </Link>
              </li>

              <li>
                <Link
                  href="/projects"
                  className="hover:text-foreground transition-colors"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  href="/achievements"
                  className="hover:text-foreground transition-colors"
                >
                  Achievements
                </Link>
              </li>

            </ul>
          </div>

        </div>


        {/* Bottom Footer */}
        <div
          className="
            mt-12
            pt-8
            border-t
            border-border
            text-center
            text-sm
            text-muted-foreground
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
          "
        >

          <p>
            © 2026 Ennovate Club. All Rights Reserved.
          </p>

          <div className="flex gap-5">

            <Link
              href="#"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>

          </div>

        </div>

      </div>
    </footer>
  )
}