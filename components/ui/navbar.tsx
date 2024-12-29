import Link from "next/link"
import { CgProfile } from "react-icons/cg"
import { FaGithub } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="bg-black">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between text-2xl h-12 px-4">
          <Link href="/" className="text-white">
            <CgProfile />
          </Link>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-lg text-gray-300 hover:text-white">
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg text-gray-300 hover:text-white"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-lg text-gray-300 hover:text-white"
            >
              Projects
            </Link>
            <Link
              href="/skills"
              className="text-lg text-gray-300 hover:text-white"
            >
              Skills
            </Link>
            <Link
              href="/contact"
              className="text-lg text-gray-300 hover:text-white"
            >
              Contact
            </Link>
            <Link
              href="/resume"
              className="text-lg text-gray-300 hover:text-white"
            >
              Resume
            </Link>
          </div>

          <div className="flex items-center text-white space-x-4">
            <a
              href="https://www.github.com/kartik-212004"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
