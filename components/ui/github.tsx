"use client"
import React, { useState, useEffect } from "react"
import axios from "axios"
import Image from "next/image"
import batman from "../../public/batman.jpg"
import { Star, GitFork } from "lucide-react"

interface GitHubUser {
  login: string
  followers: number
  public_repos: number
  name: string
  avatar_url: string
  bio: string | null
  public_gists: number
}

interface Repository {
  id: number
  name: string
  html_url: string
  description: string | null
  stargazers_count: number
  forks_count: number
  language: string | null
}

const GitHubProfile: React.FC = () => {
  const [userData, setUserData] = useState<GitHubUser | null>(null)
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch GitHub user data
        const userResponse = await axios.get(
          "https://api.github.com/users/kartik-212004"
        )
        setUserData(userResponse.data)

        // Fetch repositories
        const repoResponse = await axios.get(
          "https://api.github.com/users/kartik-212004/repos"
        )
        // Sort repositories by activity (stars + forks) and get top 3
        const sortedRepos = repoResponse.data
          .sort(
            (a: Repository, b: Repository) =>
              b.stargazers_count + b.forks_count -
              (a.stargazers_count + a.forks_count)
          )
          .slice(0, 3)
        setRepos(sortedRepos)
      } catch (error) {
        console.error("Error fetching GitHub data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  if (loading) {
    return <div className="text-gray-300">Loading...</div>
  }

  return (
    <div className="flex min-h-screen text-gray-300 bg-[#0D1117]">
      {/* Sidebar */}
      <div className="w-72 bg-[#161B22] p-6 flex flex-col border-r border-gray-800">
        <div className="flex flex-col items-center space-x-4 mb-6">
          {userData && (
            <>
              <div>
                <h2 className="font-medium py-2 text-xl">
                  <Image
                    alt="Batlam profile"
                    src={batman}
                    className="object-cover rounded-lg"
                    width={400}
                    height={400}
                  />
                </h2>
              </div>
              <div>
                <p className="text-gray-400">@{userData.login}</p>
              </div>
            </>
          )}
        </div>

        <div className="text-sm text-gray-400 mb-6">
          <p className="mb-2">{userData?.bio || "Full Stack Developer"}</p>
        </div>

        {/* GitHub Stats */}
        <div className="space-y-4 mb-8">
          <div className="bg-[#1C2128] p-2 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Repositories</span>
              <span className="text-lg font-bold">
                {userData?.public_repos || 0}
              </span>
            </div>
          </div>
          <div className="bg-[#1C2128] p-2 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Stars</span>
              <span className="text-lg font-bold">
                {userData?.public_gists || 0}
              </span>
            </div>
          </div>
          <div className="bg-[#1C2128] p-2 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Followers</span>
              <span className="text-lg font-bold">
                {userData?.followers || 0}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6 bg-[#0D1117]">
        {/* Contribution Graph */}
        <div className="bg-[#161B22] rounded-lg p-6 mb-8">
          <h3 className="text-xl font-medium mb-4">GitHub Contributions</h3>
          <Image
            src={`https://ghchart.rshah.org/kartik-212004`}
            alt="GitHub Contribution Graph"
            className="w-full rounded-lg p-4"
            height={100}
            width={100}
          />
        </div>

        {/* Featured Repositories */}
        <div>
          <h3 className="text-xl font-medium mb-4">Top 3 Repositories</h3>
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
                        {repo.description || "No description available"}
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
