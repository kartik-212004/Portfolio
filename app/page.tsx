import React from "react"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import HomePage from "@/components/aboutMe"
import GitHubProfile from "@/components/ui/github"
import Projects from "@/components/projects"
import ContactForm from "@/components/contact"

const Portfolio = () => {
  const TitleComponent = () => (
    <div className="flex items-center space-x-2 flex-col text-6xl mb-11 text-white">
      <span className="font-medium text-gray-300">Welcome to my world of</span>
      <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-blue-800">
        Innovation
      </span>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#09090b]">
      <HomePage />
      {/* <div className="w-full h-1 bg-gray-700"></div> */}
      <ContainerScroll titleComponent={<TitleComponent />}>
        <GitHubProfile />
      </ContainerScroll>
      <Projects />
      <ContactForm />
    </div>
  )
}

export default Portfolio
