"use client";

import { motion } from "framer-motion";
import { ArrowRight, GitMerge, Star, GitCommit, Users } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function GithubSection() {
  return (
    <section className="py-32 relative border-t border-white/5 bg-[#030712]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
          
          <div className="w-full md:w-5/12 flex flex-col gap-6">
            <FaGithub size={48} className="text-white/20 mb-4" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
            >
              Built in <span className="text-gray-500">Public.</span>
            </motion.h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              I believe in open source and building in public. Check out my GitHub to see my latest contributions, experiments, and featured repositories.
            </p>
            
            <a 
              href="https://github.com" 
              data-cursor="open"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 mt-4 text-primary font-bold text-lg hover:text-white transition-colors w-max"
            >
              View GitHub 
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>
          
          <div className="w-full md:w-7/12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {/* Stats Card */}
              <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
                <div className="p-6 rounded-2xl glass border border-white/5 flex flex-col items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <GitCommit size={20} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">1,248+</div>
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Contributions</div>
                  </div>
                </div>
                
                <div className="p-6 rounded-2xl glass border border-white/5 flex flex-col items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                    <Users size={20} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">54</div>
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Followers</div>
                  </div>
                </div>
              </div>

              {/* Repo Cards */}
              <div className="col-span-2 md:col-span-1 flex flex-col gap-4 md:mt-12">
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:text-white transition-colors">
                      <GitMerge size={20} />
                    </div>
                    <div className="flex gap-1.5 items-center text-sm font-mono text-gray-400">
                      <Star size={14} className="text-yellow-500/70" />
                      128
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">next-saas-starter</h4>
                  <p className="text-sm text-gray-500 line-clamp-2">A complete starter kit for building SaaS applications with Next.js and Prisma.</p>
                </div>
                
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:text-white transition-colors">
                      <GitMerge size={20} />
                    </div>
                    <div className="flex gap-1.5 items-center text-sm font-mono text-gray-400">
                      <Star size={14} className="text-yellow-500/70" />
                      84
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">react-smooth-cursor</h4>
                  <p className="text-sm text-gray-500 line-clamp-2">A lightweight React hook for custom animated cursors.</p>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
