import Link from "next/link";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="flex  sm:w-full items-center justify-between p-4">
      <Link href="/" className="text-white">
        <img
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG8zcWozZnUydzA3eXk1cjlpaGNxNTgwdzExamZkMG44c2Y4cXRiaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/nPu9aQYq1dQbu/giphy.gif"
          alt="Batman GIF"
          className="h-10 w-auto sm:h-12 md:h-14 lg:h-16 object-contain"
        />
      </Link>

      <div className=" md:flex items-center space-x-8">
        <Link
          href="/"
          className="relative hidden md:flex hover:text-[#03adb5]  group text-sm sm:text-base text-gray-300 font-ubuntu font-semibold"
        >
          Home
          <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-[#03adb5] transition-all group-hover:w-full"></span>
        </Link>
        <Link
          href="/projects"
          className="relative hover:text-[#03adb5]  group text-sm sm:text-base text-gray-300 font-ubuntu font-semibold"
        >
          Projects
          <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-[#03adb5] transition-all group-hover:w-full"></span>
        </Link>

        <a
          href="/Resume.pdf"
          download="Resume.pdf"
          className="relative hover:text-[#03adb5]  group text-sm sm:text-base text-gray-300 font-ubuntu font-semibold"
        >
          Resume
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#03adb5] transition-all group-hover:w-full"></span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
