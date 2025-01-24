import getmeabeer from "../public/getmeabeer.png"
import Headerblogs from "../public/Headerblogs.png"
import workout from "@/public/workout.png"
import { HyperText } from "@/components/ui/Hypertext"
import face from "../public/hackaton.png"
import Image from "next/image"
import { Github, Link2Icon } from "lucide-react"

const projects = [
  {
    name: "Get Me A Beer",
    techStack:
      "Next.js / TypeScript / Zod / Razorpay / NextAuth / Tailwind CSS / SQL / Docker",
    description:
      "GetMeABeer is a simple platform where users can donate money and send personalized messages, similar to Patreon.",
    image: getmeabeer,
    live: "https://get-me-a-beer.vercel.app/dashboard",
    repo: "https://github.com/kartik-212004/GetMeABeer",
  },
  {
    name: "Blog Application",
    techStack: "React / TypeScript / Shadcn Ui / Tailwind Css ",
    description:
      "A responsive blog application that allows users to create, view, edit, and delete posts!",
    image: Headerblogs,
    live: "https://headerblog.netlify.app/",
    repo: "https://github.com/kartik-212004/Blog",
  },
  {
    name: "Face Recognition Surveillance System",
    techStack:
      "React / TypeScript / Shadcn Ui / Tailwind Css / Python / Flask / OpenCv / Docker",
    description:
      "A Face Recognition System, designed for real-time surveillance and locating missing persons or items ",
    image: face,
    live: null,
    repo: "https://github.com/kartik-212004/hackathon-iiit",
  },
  {
    name: "Your Workout ",
    techStack: "React / Javascript / Tailwind Css / JWT / HTML",
    description:
      "This project is a workout management application that allows users to create, read, update, and delete workout documents",
    image: workout,
    live: null,
    repo: "https://github.com/kartik-212004/Workout-Mern",
  },
]

export default function Projects() {
  return (
    <div className="text-gray-200 mx-4 sm:mx-0">
      <div className="w-full flex  justify-center items-center">
        {" "}
        <HyperText className="sm:my-4">P R O J E C T S</HyperText>
      </div>
      <div className="grid w-full h-10 sm:min-h-max grid-cols-1 sm:grid-cols-2 grid-rows-1 sm:grid-rows-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col ">
            <div>
              <Image
                src={project.image}
                alt={project.name}
                className="sm:max-w-full  sm:h-60 rounded-lg"
              />
            </div>
            <div className="font-normal pt-6">{project.name}</div>
            <div className="text-xs mt-1 text-[#00acb4]">
              {project.techStack}
            </div>
            <div className="mt-4 text-gray-400 text-sm">
              {project.description}
            </div>
            <div className="text-[#00acb4] py-3 text-sm flex flex-row gap-3">
              {project.live ? (
                <a
                  className="hover:text-[#46edf3] flex flex-row items-center justify-center gap-1"
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link2Icon className="size-4" /> Live Preview
                </a>
              ) : (
                <span className="text-gray-500">Live link unavailable</span>
              )}

              <a
                className=" hover:text-[#46edf3] flex flex-row items-center justify-center gap-1"
                href={project.repo}
              >
                <Github className="size-4" /> Repo Url
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
