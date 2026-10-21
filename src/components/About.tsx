"use client";

import { Layout, Server } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const stats = [
    { value: "10+", label: "Projects Delivered" },
    { value: "Full Stack", label: "Development" },
    { value: "Modern", label: "Technologies" },
    { value: "Problem", label: "Solver" },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden border-t border-white/5">
      {/* Section background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeading title="About Me" subtitle="Who I Am" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual Area */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
              
              <div className="card-hover absolute inset-4 rounded-3xl glass p-6 overflow-hidden flex flex-col shadow-2xl border-white/10">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400/60 hover:bg-red-400 transition-colors cursor-pointer" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60 hover:bg-yellow-400 transition-colors cursor-pointer" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60 hover:bg-green-400 transition-colors cursor-pointer" />
                </div>
                
                <div className="flex-1 font-mono text-sm overflow-hidden flex flex-col gap-2.5 opacity-90">
                  <div className="text-gray-400">
                    <span className="text-primary font-semibold">const</span> engineer = {'{'}
                  </div>
                  <div className="pl-4 text-gray-300">
                    name: <span className="text-accent font-medium">'Abdul Moiz'</span>,
                  </div>
                  <div className="pl-4 text-gray-300">
                    role: <span className="text-accent font-medium">'Full Stack Engineer'</span>,
                  </div>
                  <div className="pl-4 text-gray-300">
                    skills: [<span className="text-accent font-medium">'React'</span>, <span className="text-accent font-medium">'Next.js'</span>, <span className="text-accent font-medium">'Node.js'</span>],
                  </div>
                  <div className="pl-4 text-gray-300">
                    passionate: <span className="text-primary font-semibold">true</span>,
                  </div>
                  <div className="pl-4 text-gray-300">
                    build(): {'{'}
                  </div>
                  <div className="pl-8 text-gray-400">
                    <span className="text-primary font-semibold">return</span> <span className="text-accent font-medium">'Scalable Products'</span>;
                  </div>
                  <div className="pl-4 text-gray-300">
                    {'}'}
                  </div>
                  <div className="text-gray-400">
                    {'}'};
                  </div>
                  
                  {/* Blinking cursor using CSS */}
                  <div className="w-2 h-4 bg-primary/80 mt-2 animate-pulse rounded-sm" />
                </div>
              </div>
              
              {/* Floating Icons - using CSS animations */}
              <div className="absolute top-10 -left-6 p-4 rounded-2xl glass border border-primary/20 text-primary animate-float-up shadow-lg hover:scale-110 transition-transform">
                <Layout size={28} />
              </div>
              <div className="absolute bottom-20 -right-4 p-4 rounded-2xl glass border border-secondary/20 text-secondary animate-float-down shadow-lg hover:scale-110 transition-transform">
                <Server size={28} />
              </div>
            </div>
          </div>

          {/* Right: Text & Stats */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Engineering with <span className="text-gradient-animated">Precision</span>
            </h3>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-10">
              <p className="text-balance">
                Hello! I'm Abdul Moiz, a Full Stack Engineer who enjoys building things that live on the internet. My interest in web development started back when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot!
              </p>
              <p className="text-balance">
                Fast-forward to today, and I've had the privilege of building software for start-ups, large corporations, and several ambitious products. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="card-hover p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-primary/20 transition-all relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="text-3xl font-bold text-foreground mb-2 text-gradient">{stat.value}</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
