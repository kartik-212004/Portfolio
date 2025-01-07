// pages/index.tsx
import type { NextPage } from "next"
import { HyperText } from "@/components/ui/Hypertext"
import { TextAnimate } from "@/components/ui/typing-animation"
import Underline from "@/components/ui/underline"
import Head from "next/head"
import batman from "@/public/batman.jpg"
import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import { MarqueeDemo } from "@/Pages/skills"
const socials = [
  {
    icon: Github,
    href: "https://github.com/yourusername",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:your@email.com",
    label: "Email",
  },
]

const HomePage: NextPage = () => {
  return (
    <div className="min-h-screen bg-[#09090b]  text-white">
      <Head>
        <title>Kartik Bhatt - Full Stack Developer</title>
        <meta
          name="description"
          content="Full Stack Developer specializing in Next.js, TypeScript, and MERN stack"
        />
      </Head>

      <main className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <h1 className="text-4xl font-bold mb-4">
              <HyperText>K a r t i k&nbsp; B h a t t</HyperText>
            </h1>

            <section className="space-y-4 text-[#9898a0]">
              <h2 className="text-2xl font-semibold text-teal-400">
                <TextAnimate>About Me</TextAnimate>
              </h2>
              <p className=" text-lg leading-relaxed">
                Hello! I&apos;m a passionate{" "}
                <span>
                  {" "}
                  Full Stack Developer <Underline />
                </span>{" "}
                and a 2nd-year Computer Science student from Dehradun, India. I
                specialize in creating scalable, maintainable, and reliable web
                applications.
              </p>
              <p className=" text-lg leading-relaxed">
                I actively contribute to open-source projects and have a solid
                background in building monorepos using Turborepo. Apart from
                coding, I enjoy exploring cloud technologies, learning new
                tools, and improving my skills every day.
              </p>
            </section>

            <section className="space-y-4 text-[#9898a0]">
              <h2 className="text-2xl font-semibold text-teal-400">
                <TextAnimate> What I do?</TextAnimate>
              </h2>
              <p className=" text-lg leading-relaxed">
                Currently, I&apos;m working on exciting projects using Next.js and
                Tailwind CSS, focusing on modern, responsive, and highly
                functional web applications. My work revolves around:
              </p>
              <ul className="list-disc list-inside   space-y-2 ml-4">
                <li>
                  Building full-stack applications with seamless front-end and
                  back-end integration
                </li>
                <li>
                  Creating monorepos using Turborepo to manage shared components
                  effectively
                </li>
                <li>
                  Implementing authentication systems using JWT and cookies for
                  secure user management
                </li>
              </ul>
            </section>
          </div>

          {/* Sidebar */}

          <div className="lg:col-span-1 space-y-8">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden border-3 border-teal-400 ">
              <Image
                src={batman}
                alt="Kartik Bhatt"
                layout="fill"
                objectFit="cover"
                className="transition-transform hover:scale-105"
              />
            </div>
            <div className="flex justify-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-teal-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <section className="space-y-4">
          <h2 className=" font-semibold text-center text-5xl h-24 my-6 text-white">
            <HyperText>S k i l l s</HyperText>
          </h2>
          <MarqueeDemo />
        </section>
      </main>
    </div>
  )
}

export default HomePage
