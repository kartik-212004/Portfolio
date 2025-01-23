import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com", "ghchart.rshah.org"], // Add the domain here
    dangerouslyAllowSVG: true,
  },
}

export default nextConfig
