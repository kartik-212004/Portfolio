import getmeabeer from "../public/getmeabeer.png";
import Headerblogs from "../public/Headerblogs.png";
import workout from "@/public/workout.png";
import QuickPost from "@/public/home.png";
import { HyperText } from "@/components/ui/Hypertext";
import face from "../public/hackaton.png";
import Image from "next/image";
import { Github, Link2Icon } from "lucide-react";

const projects = [
  {
    name: "Quick Post",
    techStack:
      "Next.js / TypeScript / Zod / AWS S3 Bucket / NextAuth / Tailwind CSS / SQL / Docker / PostgreSql / Prisma",
    description:
      "Quick Post is a social media application that offers an engaging and interactive experience. Users can create profiles, share multimedia posts, connect with others, and explore dynamic content with real-time updates.",
    image: QuickPost,
    live: "https://quick-post-phi.vercel.app",
    repo: "https://github.com/kartik-212004/Social-media",
  },
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
];

export default function Projects() {
  return (
    <div className="text-gray-200 container mx-auto px-3 sm:px-6 py-8 sm:py-12 max-w-5xl">
      <div className="mb-6 sm:mb-8 text-center">
        <HyperText className="font-sans text-2xl sm:text-3xl font-bold">
          P R O J E C T S
        </HyperText>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col bg-[#121212] rounded-lg overflow-hidden shadow-md">
            <div className="h-48 sm:h-52 overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-sans font-semibold text-base sm:text-lg">
                {project.name}
              </h3>
              <div className="font-sans text-xs text-[#00acb4] mt-1">
                {project.techStack}
              </div>
              <div className="font-sans mt-3 text-gray-400 text-xs sm:text-sm">
                {project.description}
              </div>
              <div className="font-sans text-[#00acb4] mt-4 text-xs sm:text-sm flex flex-row gap-4">
                {project.live ? (
                  <a
                    className="hover:text-[#46edf3] flex flex-row items-center gap-1"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Link2Icon className="size-3 sm:size-4" /> Live Preview
                  </a>
                ) : (
                  <span className="text-gray-500 text-xs sm:text-sm">Live link unavailable</span>
                )}

                <a
                  className="hover:text-[#46edf3] flex flex-row items-center gap-1"
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="size-3 sm:size-4" /> Repo Url
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
