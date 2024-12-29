import React from "react"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import {
  Code,
  Box,
  Mail,
  Github,
  Zap,
  Database,
  Globe,
  Heart,
} from "lucide-react"
import ShinyText from "@/components/ui/ShinyText"

interface SidebarItemProps {
  icon?: React.ReactNode
  text: string
  count?: number
  active?: boolean
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  text,
  count,
  active,
}) => (
  <div
    className={`flex items-center justify-between px-2 py-1 rounded-md cursor-pointer ${
      active ? "bg-[#1C1C1F]" : "hover:bg-[#1C1C1F]"
    }`}
  >
    <div className="flex items-center space-x-2">
      {icon}
      <span className="text-sm">{text}</span>
    </div>
    {count && (
      <span className="text-xs bg-[#27272A] px-1.5 rounded-full">{count}</span>
    )}
  </div>
)

const LinearPortfolio = () => {
  const aboutSections = [
    {
      id: "WID-001",
      title: "Frontend Magic",
      tag: "Expertise",
      details:
        "Building dynamic and visually stunning interfaces using React, Next.js, and Tailwind CSS",
    },
    {
      id: "WID-002",
      title: "Backend Mastery",
      tag: "Expertise",
      details:
        "Creating robust architectures with Node.js, Express, and MongoDB, using Prisma for database integration",
    },
    {
      id: "EXP-001",
      title: "Full-Stack Expertise",
      tag: "Skills",
      details:
        "Connecting front-end and back-end to deliver complete, end-to-end solutions",
    },
    {
      id: "OSS-001",
      title: "Open Source Contributions",
      tag: "Achievement",
      details:
        "Completed Hacktoberfest 2024 with seven successful pull requests",
    },
  ]

  const TitleComponent = () => (
    <div className="flex items-center space-x-2 flex-col text-8xl text-white">
      <span className="font-medium">
        <ShinyText text={"Welcome to my world of"} />
      </span>
      <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-blue-800">
        <ShinyText text={"Innovation"} />
      </span>
    </div>
  )

  return (
    <ContainerScroll titleComponent={<TitleComponent />}>
      <div className="flex min-h-screen text-gray-300">
        {/* Sidebar */}
        <div className="w-60 bg-[#13131A] p-4 flex flex-col border-r border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
                <span className="text-white text-sm">KB</span>
              </div>
              <span className="font-medium">Kartik</span>
            </div>
          </div>

          <div className="text-sm text-gray-400 mb-6">
            <p>Full Stack Developer</p>
            <p>VMSB UTU, Dehradun</p>
          </div>

          <div className="space-y-1 mb-8">
            <SidebarItem
              icon={<Heart fill="red"  size={16} />}
              text="About Me"
              active={true}
            />
            <SidebarItem icon={<Code size={16} />} text="What I Do" count={4} />
            <SidebarItem icon={<Zap size={16} />} text="Current Focus" />
          </div>

          <div className="text-xs text-gray-500 mb-2">Exploring Now</div>
          <div className="space-y-1 mb-8">
            <SidebarItem icon={<Box size={16} />} text="TypeScript" />
            <SidebarItem icon={<Database size={16} />} text="Turborepo" />
            <SidebarItem icon={<Globe size={16} />} text="SEO Optimization" />
          </div>

          <div className="text-xs text-gray-500 mb-2">Let's Connect</div>
          <div className="space-y-1">
            <SidebarItem
              icon={<Mail size={16} />}
              text="kartik200421@gmail.com"
            />
            <a href="https://www.github.com/kartik-212004">
              <SidebarItem icon={<Github size={16} />} text="GitHub" />
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-[#13131A]">
          <div className="p-4">
            {/* Introduction */}
            <div className="bg-[#1C1C1F] rounded-lg p-6 mb-6">
              <p className="text-lg leading-relaxed text-gray-300">
                I'm a passionate Full Stack Developer and Computer Science
                student, specializing in crafting scalable, maintainable, and
                user-friendly web applications. With a strong foundation in both
                front-end and back-end technologies, I thrive on solving
                challenges and turning innovative ideas into reality.
              </p>
            </div>

            {/* What I Do Section */}
            <div className="space-y-4">
              {aboutSections.map((section) => (
                <div
                  key={section.id}
                  className="bg-[#1C1C1F]/50 p-4 rounded-lg hover:bg-[#1C1C1F] transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium">{section.title}</h3>
                    <span className="text-xs px-2 py-1 bg-[#27272A] rounded">
                      {section.tag}
                    </span>
                  </div>
                  <p className="text-gray-400">{section.details}</p>
                </div>
              ))}
            </div>

            {/* What Drives Me */}
            <div className="mt-6 bg-[#1C1C1F] rounded-lg p-6">
              <h3 className="text-lg font-medium mb-3">What Drives Me</h3>
              <p className="text-gray-400">
                I thrive on solving challenges, learning new technologies, and
                turning innovative ideas into reality. My journey as a developer
                is fueled by curiosity, creativity, and a desire to make
                meaningful contributions to the tech world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ContainerScroll>
  )
}

export default LinearPortfolio
