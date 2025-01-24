import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/Marques"
import Image from "next/image"
const slugs = [
  "Javascript",
  "html5",
  "css3",
  "prisma",
  "postgresql",
  "vercel",
  "testinglibrary",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "dotenv",
  "figma",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Mongoose",
  "Prisma",
  "Typescript",
  "Next.js",
  "Turborepo",
  "Redis",
  "Docker",
  "Kubernetes",
]

const skills = slugs.map((slug) => ({
  name: slug.charAt(0).toUpperCase() + slug.slice(1),
  img: `https://cdn.simpleicons.org/${slug}/${slug}`,
}))

const firstRow = skills.slice(0, Math.ceil(skills.length / 2))
const secondRow = skills.slice(Math.ceil(skills.length / 2))

// SkillCard component
const SkillCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <figure
      className={cn(
        "flex  items-center justify-center rounded-full border-2 p-1  shadow-lg flex-row",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex border flex-row justify-center items-center border-gray-800  space-x-3 bg-[#171717] px-2 py-1 rounded-full">
        <Image
          width={15}
          height={15}
          className="h-5 w-5"
          alt={name}
          src={img}
        />
        <figcaption className="flex justify-center items-center text-base font-normal dark:text-white">
          {name}
        </figcaption>
      </div>
    </figure>
  )
}
export default SkillCard
// MarqueeDemo component
export function MarqueeDemo() {
  return (
    <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-[#09090b]">
      <Marquee pauseOnHover className="[--duration:50s] p-0 sm:p-2 ">
        {firstRow.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:50s] p-0 sm:p-2">
        {secondRow.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </Marquee>
    </div>
  )
}
