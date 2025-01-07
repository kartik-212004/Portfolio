"use client"
import React, { useState, useEffect } from "react"
import {
  Github,
  GitPullRequest,
  Users,
  Star,
  GitFork,
  Box,
  Database,
  Globe,
  Mail,
  Heart,
  Code,
  Zap,
  Book,
  Calendar,
} from "lucide-react"

const GitHubProfile = () => {
  const [userData, setUserData] = useState(null)
  const [repos, setRepos] = useState([])
  const [stats, setStats] = useState({
    totalStars: 0,
    totalForks: 0,
    pullRequests: 0,
  })

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const userResponse = await fetch(
          "https://api.github.com/users/kartik-212004"
        )
        const userData = await userResponse.json()

   
      } catch (error) {
        console.error("Error fetching GitHub data:", error)
      }
    }

    fetchGitHubData()
  }, [])

  return (
    <div className="flex min-h-screen text-gray-300 bg-[#0D1117]">
      {/* Sidebar */}
      <div className="w-72 bg-[#161B22] p-6 flex flex-col border-r border-gray-800">
        <div className="flex items-center space-x-4 mb-6">
          {userData && (
            <>
              <img
                src={userData.avatar_url}
                alt="Profile"
                className="w-16 h-16 rounded-full border-2 border-indigo-500"
              />
              <div>
                <h2 className="font-medium text-xl">
                  {userData?.name || "Kartik"}
                </h2>
                <p className="text-gray-400">@{userData?.login}</p>
              </div>
            </>
          )}
        </div>

        <div className="text-sm text-gray-400 mb-6">
          <p className="mb-2">{userData?.bio || "Full Stack Developer"}</p>
          <p className="flex items-center gap-2">
            <Calendar size={14} />
            {userData &&
              `Joined ${new Date(userData.created_at).toLocaleDateString()}`}
          </p>
        </div>

        {/* GitHub Stats */}
        <div className="space-y-4 mb-8">
          <div className="bg-[#1C2128] p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Repositories</span>
              <span className="text-lg font-bold">
                {userData?.public_repos || 0}
              </span>
            </div>
          </div>
          <div className="bg-[#1C2128] p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Stars</span>
              <span className="text-lg font-bold">{stats.totalStars}</span>
            </div>
          </div>
          <div className="bg-[#1C2128] p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Followers</span>
              <span className="text-lg font-bold">
                {userData?.followers || 0}
              </span>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h3 className="text-sm font-medium mb-3">Tech Stack</h3>
          <div className="grid grid-cols-3 gap-2">
            {[
              "React",
              "Node.js",
              "TypeScript",
              "Next.js",
              "MongoDB",
              "Tailwind",
            ].map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-[#1C2128] rounded-md text-center"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="mt-auto">
          <h3 className="text-sm font-medium mb-3">Connect</h3>
          <div className="space-y-2">
            <a
              href={`mailto:kartik200421@gmail.com`}
              className="flex items-center space-x-2 text-sm text-gray-400 hover:text-gray-300"
            >
              <Mail size={14} />
              <span>Email</span>
            </a>
            <a
              href="https://github.com/kartik-212004"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm text-gray-400 hover:text-gray-300"
            >
              <Github size={14} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6 bg-[#0D1117]">
        {/* Contribution Graph - Featured at the top */}
        <div className="bg-[#161B22] rounded-lg p-6 mb-8">
          <h3 className="text-xl font-medium mb-4">GitHub Contributions</h3>
          <img
            src={`https://ghchart.rshah.org/kartik-212004`}
            alt="GitHub Contribution Graph"
            className="w-full rounded-lg bg-[#0D1117] p-4"
          />
          <div className="mt-4 text-sm text-gray-400 flex items-center justify-center space-x-4">
            <span>Less</span>
            <div className="flex space-x-1">
              {[1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className={`w-3 h-3 rounded-sm`}
                  style={{
                    backgroundColor: `rgba(52, 168, 83, ${level * 0.25})`,
                  }}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>

        {/* Featured Repositories */}
        <div>
          <h3 className="text-xl font-medium mb-4">Featured Repositories</h3>
          <div className="grid grid-cols-1 gap-4">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-[#161B22] p-4 rounded-lg hover:bg-[#1C2128] transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium text-blue-400 mb-1">
                        {repo.name}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {repo.description}
                      </p>
                    </div>
                    <div className="flex space-x-3 text-gray-400">
                      <span className="flex items-center space-x-1">
                        <Star size={14} />
                        <span className="text-xs">{repo.stargazers_count}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <GitFork size={14} />
                        <span className="text-xs">{repo.forks_count}</span>
                      </span>
                    </div>
                  </div>
                  {repo.language && (
                    <div className="flex items-center space-x-2 mt-3">
                      <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                      <span className="text-xs text-gray-400">
                        {repo.language}
                      </span>
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GitHubProfile
