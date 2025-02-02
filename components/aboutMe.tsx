import { HyperText } from "@/components/ui/Hypertext";
import { TextAnimate } from "@/components/ui/typing-animation";
import Head from "next/head";
import batman from "@/public/batman.jpg";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { annotate } from "rough-notation";
import { MarqueeDemo } from "@/components/skills";
const socials = [
  {
    icon: Github,
    href: "https://github.com/kartik-212004",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/kartik212004/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:kartik200421@gmail.com",
    label: "Email",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#09090b]  text-white">
      <Head>
        <title>Kartik Bhatt - Full Stack Developer</title>
        <meta
          name="description"
          content="Full Stack Developer specializing in Next.js, TypeScript, and MERN stack"
        />
      </Head>

      <main className="container mx-auto px-4 sm:py-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <h1 className="text-3xl  font-bold mb-4">
              <HyperText>K a r t i k&nbsp; B h a t t</HyperText>
            </h1>

            <section className="space-y-4 text-[#9898a0]">
              <h2 className="sm:text-xl text-base font-semibold text-teal-400">
                <TextAnimate>About Me</TextAnimate>
              </h2>
              <p className="sm:text-base text-sm leading-relaxed">
                Hello! I&apos;m a passionate{" "}
                <span className="font-semibold text-[#d1d1d6]">
                  Full Stack Developer
                </span>{" "}
                and a{" "}
                <span className="font-semibold text-[#d1d1d6]">
                  2nd-year Computer Science student
                </span>{" "}
                from India. I love building websites and creating seamless
                digital experiences. Outside of coding, I’m an avid reader and
                an adventure enthusiast who enjoys going on treks and exploring
                new places.
              </p>
            </section>

            <section className="space-y-4 text-[#9898a0]">
              <h2 className="sm:text-xl text-base font-semibold text-teal-400">
                <TextAnimate> What I do?</TextAnimate>
              </h2>
              <p className="sm:text-base text-sm leading-relaxed">
                I actively contribute to open-source projects, primarily in{" "}
                <span className="font-semibold text-[#d1d1d6]">TypeScript</span>
                , and I’ve participated in over{" "}
                <span className="font-semibold text-[#d1d1d6]">
                  5+ hackathons
                </span>
                . I believe in learning in public and constantly expanding my
                knowledge. In my free time, you’ll often find me browsing{" "}
                <span className="font-semibold text-[#d1d1d6]">Reddit</span> and{" "}
                <span className="font-semibold text-[#d1d1d6]">Twitter</span>,
                discovering new tools, trends, and tips to improve my skills
                each day.
              </p>
            </section>
          </div>

          {/* Sidebar */}

          <div className="lg:col-span-1 space-y-0 sm:space-y-8">
            <div className="relative w-full hidden lg:block aspect-square rounded-lg overflow-hidden border-3 border-teal-400 ">
              <Image
                src={batman}
                alt="Kartik Bhatt"
                layout="fill"
                objectFit="cover"
                className="transition-transform hover:scale-105"
              />
            </div>
            <div className="hidden md:flex justify-center gap-4">
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
          <h2 className=" font-semibold text-center text-5xl sm:h-24 h-12 my-3 sm:my-6 text-white">
            <HyperText>S k i l l s</HyperText>
          </h2>
          <MarqueeDemo />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
