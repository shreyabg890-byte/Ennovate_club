import Link from "next/link"
import { MessageCircle, Globe, Code } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t border-white/25 glass mt-20">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">

        {/* Footer Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-5 md:col-span-1">

            {/* Logo + Name */}
             <div className="group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/clublogo.png"
                  alt="Ennovate Club"
                  className="h-40 w-70 object-contain dark:invert transition-all mb-0"
                />
              </div>

            

            {/* Social Icons */}
            <div className="flex items-center gap-3 text-white/70">
              

              

              
                
            </div>
          </div>


          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white tracking-wide">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/join"
                  className="hover:text-white transition-colors"
                >
                  Join Club
                </Link>
              </li>

              <li>
                <Link
                  href="/gallery"
                  className="hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  href="/events"
                  className="hover:text-white transition-colors"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>


          {/* Departments */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white tracking-wide">
              Departments
            </h4>

            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <Link
                  href="/departments"
                  className="hover:text-white transition-colors"
                >
                  Building Bot
                </Link>
              </li>

              <li>
                <Link
                  href="/departments"
                  className="hover:text-white transition-colors"
                >
                  Ideathon & Hackathon
                </Link>
              </li>

              <li>
                <Link
                  href="/departments"
                  className="hover:text-white transition-colors"
                >
                  Hardware & Software
                </Link>
              </li>

              <li>
                <Link
                  href="/departments"
                  className="hover:text-white transition-colors"
                >
                  Problem Statements
                </Link>
              </li>
              <li>
                <Link
                  href="/departments"
                  className="hover:text-white transition-colors"
                >
                  Webmasters
                </Link>
              </li>
              <li>
                <Link
                  href="/departments"
                  className="hover:text-white transition-colors"
                >
                  Designing
                </Link>
              </li>
              <li>
                <Link
                  href="/departments"
                  className="hover:text-white transition-colors"
                >
                  Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/departments"
                  className="hover:text-white transition-colors"
                >
                  Media
                </Link>
              </li>
            </ul>
          </div>


          {/* Activities */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white tracking-wide">
              Activities
            </h4>

            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <Link
                  href="/events"
                  className="hover:text-white transition-colors"
                >
                  Events
                </Link>
              </li>

              <li>
                <Link
                  href="/projects"
                  className="hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  href="/achievements"
                  className="hover:text-white transition-colors"
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
            border-white/15
            text-center
            text-sm
            text-white/70
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
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}