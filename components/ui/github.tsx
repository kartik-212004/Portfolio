"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import batman from "../../public/batman.jpg";
import { Star, GitFork, Users, Book, GitBranch } from "lucide-react";
import GitHubCalendar from "react-github-calendar";

interface GitHubUser {
  login: string;
  followers: number;
  public_repos: number;
  name: string;
  avatar_url: string;
  bio: string | null;
  public_gists: number;
}

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

const languageColors: { [key: string]: string } = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Java: "#b07219",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Ruby: "#701516",
  "C++": "#f34b7d",
  PHP: "#4F5D95",
  Go: "#00ADD8",
};

const GitHubProfile: React.FC = () => {
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const userResponse = await axios.get(
          "https://api.github.com/users/kartik-212004"
        );
        setUserData(userResponse.data);

        const repoResponse = await axios.get(
          "https://api.github.com/users/kartik-212004/repos"
        );
        const sortedRepos = repoResponse.data
          .sort(
            (a: Repository, b: Repository) =>
              b.stargazers_count +
              b.forks_count -
              (a.stargazers_count + a.forks_count)
          )
          .slice(0, 3);
        setRepos(sortedRepos);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#f8f9fa]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#b7b9bb] text-gray-600">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Profile Section */}
          <div className="lg:col-span-3">
            <div className="bg-[#dee1e4] rounded-lg border border-gray-200 p-5 shadow-sm">
              {userData && (
                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <Image
                      alt="Profile"
                      src={batman}
                      className="rounded-lg object-cover ring-2 ring-gray-100"
                      width={120}
                      height={120}
                    />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {userData.name || userData.login}
                  </h2>
                  <p className="text-gray-500 text-sm mb-4">
                    @{userData.login}
                  </p>

                  <p className="text-sm text-gray-600 text-center mb-6">
                    B.Tech Computer Science Student | Full-stack Developer
                  </p>

                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100">
                      <Book className="w-4 h-4 text-teal-600 mx-auto mb-1" />
                      <span className="block text-lg font-semibold text-gray-800">
                        {userData?.public_repos || 0}
                      </span>
                      <span className="text-xs text-gray-500">Repos</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100">
                      <Users className="w-4 h-4 text-teal-600 mx-auto mb-1" />
                      <span className="block text-lg font-semibold text-gray-800">
                        {userData?.followers || 0}
                      </span>
                      <span className="text-xs text-gray-500">Followers</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-6">
            {/* Contribution Graph */}
            <div className="bg-[#dee1e4] rounded-lg border border-gray-200 p-5 shadow-sm">
              <h3 className="text-base font-semibold text-gray-800 mb-4 flex items-center">
                <GitBranch className="w-4 h-4 text-teal-600 mr-2" />
                Contribution Activity
              </h3>
              <div className="w-full">
                <div className="hidden sm:block">
                  <GitHubCalendar
                    username="kartik-212004"
                    colorScheme="light"
                    fontSize={12}
                    blockSize={10}
                    blockMargin={4}
                    hideColorLegend={false}
                    hideMonthLabels={false}
                    labels={{
                      totalCount: "{{count}} contributions in the last year",
                    }}
                  />
                </div>
                <div className="block sm:hidden">
                  <GitHubCalendar
                    username="kartik-212004"
                    colorScheme="light"
                    fontSize={8}
                    blockSize={8}
                    blockMargin={2}
                    hideColorLegend={true}
                    hideMonthLabels={true}
                    labels={{
                      totalCount: "{{count}} contributions",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Repositories */}
            <div className="bg-[#dee1e4] rounded-lg border border-gray-200 p-5 shadow-sm">
              <h3 className="text-base font-semibold text-gray-800 mb-4 flex items-center">
                <Star className="w-4 h-4 text-teal-600 mr-2" />
                Top Repositories
              </h3>
              <div className="grid gap-4">
                {repos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="bg-[#dbdcdd] p-4 rounded-lg border border-[#ced1d3] hover:border-teal-500/30 transition-colors">
                      <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
                        <div className="space-y-2 flex-1 min-w-0">
                          <h4 className="font-medium text-gray-800 group-hover:text-teal-600 transition-colors truncate">
                            {repo.name}
                          </h4>
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {repo.description || "No description available"}
                          </p>
                          {repo.language && (
                            <div className="flex items-center">
                              <span
                                className="w-2.5 h-2.5 rounded-full mr-2"
                                style={{
                                  backgroundColor:
                                    languageColors[repo.language] || "#9CA3AF",
                                }}
                              ></span>
                              <span className="text-xs text-gray-500">
                                {repo.language}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-gray-500 shrink-0">
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            <span className="text-xs">
                              {repo.stargazers_count}
                            </span>
                          </span>
                          <span className="flex items-center gap-1">
                            <GitFork className="w-4 h-4" />
                            <span className="text-xs">{repo.forks_count}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubProfile;
