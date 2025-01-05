import Link from "next/link"
import { CgProfile } from "react-icons/cg"
import { FaGithub } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="bg-[#09090b] my-4">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between text-2xl h-12 px-4">
          <Link href="/" className="text-white">
            <CgProfile />
          </Link>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-lg text-gray-300 hover:text-[#03adb5] font-bold"
            >
              Home
            </Link>

            <Link
              href="/projects"
              className="text-lg text-gray-300 hover:text-[#03adb5] font-bold"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-lg text-gray-300 hover:text-[#03adb5] font-bold"
            >
              Contact
            </Link>
            <Link
              href="/resume"
              className="text-lg text-gray-300 hover:text-[#03adb5] font-bold"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
