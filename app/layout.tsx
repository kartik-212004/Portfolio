import type { Metadata } from "next"
import { Geist, Geist_Mono, Orbitron } from "next/font/google"
import { Kumbh_Sans } from "next/font/google"
import { ScrollProgress } from "@/components/ui/scrollprogress"
import "./globals.css"
import Navbar from "@/components/navbar"

const kumbh = Kumbh_Sans({
  subsets: ['latin'],
  variable: '--font-kumbh',
})

const orbitron = Orbitron({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-orbitron',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Kartik Portfolio",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="bg-[#09090b]" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${kumbh.variable} antialiased bg-[#09090b]`}
      >
        <div className="container mx-auto lg:max-w-[80vw] md:max-w-[90vw] 2xl:max-w-[50vw] ">
          <ScrollProgress />
          <Navbar />
          <div>{children}</div>
        </div>
      </body>
    </html>
  )
}
