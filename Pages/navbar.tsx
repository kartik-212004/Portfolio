import Link from "next/link"
import { CgProfile } from "react-icons/cg"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <Link href="/" className="text-white">
        <CgProfile />
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        <Link
          href="/"
          className="relative group text-base text-gray-300 font-bold"
        >
          Home
          <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-[#03adb5] transition-all group-hover:w-full"></span>
        </Link>

        <a
          href="/Resume.pdf"
          download="Resume.pdf"
          className="relative group text-base text-gray-300 font-bold"
        >
          Resume
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#03adb5] transition-all group-hover:w-full"></span>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
