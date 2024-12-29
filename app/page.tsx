import { FlipWords } from "@/components/ui/flip-words"
import ShinyText from "@/components/ui/ShinyText"
export default function Home() {
  return (
    <div className="flex flex-row min-h-screen justify-center  mt-56">
      <div className="text-white">
        <h1 className="text-8xl font-bold">
          I am{" "}
          <FlipWords
            className=""
            words={[
              "Kartik Bhatt",
              "A Full Stack Developer",
              "A Full Time Student",
            ]}
          />
        </h1>
        <div className="w-full flex justify-center items-center">
          <ShinyText
            text=" Turning ideas into scalable, beautiful, and reliable web applications."
            disabled={false}
            speed={3}
            className="custom-class text-center text-2xl mt-14 mx-auto  text-gray-600"
          />
        </div>
        <div></div>
      </div>
    </div>
  )
}
