import React from 'react';
import { Github, GitPullRequest, Users, Star, GitFork, Box, Database, Globe, Mail, Heart, Code, Zap } from 'lucide-react';

const GitHubProfile = () => {
  return (
    <div className="flex min-h-screen text-gray-300">
      {/* Sidebar */}
      <div className="w-60 bg-[#13131A] p-4 flex flex-col border-r border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
              <span className="text-white text-sm">KB</span>
            </div>
            <span className="font-medium">Kartik</span>
          </div>
        </div>

        <div className="text-sm text-gray-400 mb-6">
          <p>Full Stack Developer</p>
          <p>VMSB UTU, Dehradun</p>
        </div>

        <div className="space-y-1 mb-8">
          <SidebarItem icon={<Heart className="text-red-500" size={16} />} text="About Me" active={true} />
          <SidebarItem icon={<Code size={16} />} text="What I Do" count={4} />
          <SidebarItem icon={<Zap size={16} />} text="Current Focus" />
        </div>

        <div className="text-xs text-gray-500 mb-2">GitHub Stats</div>
        <div className="space-y-1 mb-8">
          <SidebarItem icon={<GitPullRequest size={16} />} text="Pull Requests" count={42} />
          <SidebarItem icon={<Users size={16} />} text="Organizations" count={3} />
          <SidebarItem icon={<Star size={16} />} text="Total Stars" count={128} />
        </div>

        <div className="text-xs text-gray-500 mb-2">Tech Stack</div>
        <div className="space-y-1 mb-8">
          <SidebarItem icon={<Box size={16} />} text="TypeScript" />
          <SidebarItem icon={<Database size={16} />} text="Turborepo" />
          <SidebarItem icon={<Globe size={16} />} text="SEO Optimization" />
        </div>

        <div className="text-xs text-gray-500 mb-2">Connect</div>
        <div className="space-y-1">
          <SidebarItem icon={<Mail size={16} />} text="kartik200421@gmail.com" />
          <a href="https://www.github.com/kartik-212004" className="hover:text-gray-100">
            <SidebarItem icon={<Github size={16} />} text="GitHub" />
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          {/* GitHub Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <StatsCard icon={<GitPullRequest />} title="Pull Requests" value="42" />
            <StatsCard icon={<Star />} title="Repository Stars" value="128" />
            <StatsCard icon={<GitFork />} title="Total Forks" value="64" />
          </div>

          {/* Contribution Graph */}
          <div className="bg-[#1C1C1F] rounded-lg p-6 mb-6">
            <h3 className="text-lg font-medium mb-4">Contribution Activity</h3>
            <div className="h-32 bg-[#13131A] rounded-md">
              {/* Placeholder for contribution graph */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                GitHub Contribution Graph
              </div>
            </div>
          </div>

          {/* Popular Repositories */}
          <div className="space-y-4 mb-6">
            <h3 className="text-lg font-medium">Popular Repositories</h3>
            {[1, 2, 3].map((repo) => (
              <div key={repo} className="bg-[#1C1C1F]/50 p-4 rounded-lg hover:bg-[#1C1C1F] transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">Project Name {repo}</h4>
                  <div className="flex space-x-2 text-gray-400">
                    <span className="flex items-center space-x-1">
                      <Star size={14} />
                      <span className="text-xs">{repo * 10}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <GitFork size={14} />
                      <span className="text-xs">{repo * 5}</span>
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-400">Repository description goes here. This is a sample description.</p>
                <div className="flex space-x-2 mt-2">
                  <span className="text-xs px-2 py-1 bg-[#27272A] rounded">TypeScript</span>
                  <span className="text-xs px-2 py-1 bg-[#27272A] rounded">React</span>
                </div>
              </div>
            ))}
          </div>

          {/* Organizations */}
          <div className="bg-[#1C1C1F] rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4">Organizations</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((org) => (
                <div key={org} className="bg-[#13131A] p-4 rounded-lg flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Org {org}</h4>
                    <p className="text-xs text-gray-400">Member</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, active = false, count }) => (
  <div className={`flex items-center justify-between p-2 rounded hover:bg-[#1C1C1F] ${active ? 'bg-[#1C1C1F]' : ''}`}>
    <div className="flex items-center space-x-3">
      {icon}
      <span className="text-sm">{text}</span>
    </div>
    {count && (
      <span className="text-xs px-2 py-0.5 bg-[#27272A] rounded-full">
        {count}
      </span>
    )}
  </div>
);

const StatsCard = ({ icon, title, value }) => (
  <div className="bg-[#1C1C1F] p-4 rounded-lg">
    <div className="flex items-center space-x-3 mb-2">
      {icon}
      <h3 className="font-medium">{title}</h3>
    </div>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

export default GitHubProfile;