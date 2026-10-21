"use client";

import { ArrowRight, Terminal as TerminalIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiPostgresql } from "react-icons/si";

export function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const lines = [
    { cmd: "whoami", output: "Abdul Moiz" },
    { cmd: "role", output: "Full Stack Engineer" },
    { cmd: "stack", output: "Next.js • React • Node.js" },
    { cmd: "status", output: "Building something great..." },
  ];

  useEffect(() => {
    // Terminal animation logic - optimized with single timer
    if (textIndex < lines.length) {
      const timer = setTimeout(() => {
        setTextIndex(prev => prev + 1);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [textIndex, lines.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Typography & CTAs */}
        <div className="flex flex-col items-start lg:col-span-7">
          <div className="badge-modern inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider text-primary mb-8">
            <span className="relative flex h-2 w-2 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            AVAILABLE FOR NEW OPPORTUNITIES
          </div>

          <div>
            <h1 className="text-5xl md:text-[80px] lg:text-[96px] font-bold tracking-tighter text-foreground mb-4 leading-[1.05]">
              Abdul Moiz
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-[64px] font-bold tracking-tighter mb-8 leading-tight text-gradient-animated">
              Full Stack Engineer
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed font-medium">
            Crafting exceptional digital experiences with precision engineering and modern technology.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto">
            <a
              href="#contact"
              data-cursor="hover"
              className="btn-premium group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25 active:scale-95 w-full sm:w-auto text-base overflow-hidden"
            >
              <span className="relative z-10">Get In Touch</span>
              <ArrowRight size={18} className="relative z-10 group-hover:-rotate-45 transition-transform duration-300" />
            </a>
            
            <a
              href="https://github.com/moizmalik777"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="open"
              className="shine group inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-foreground border-2 border-white/10 font-semibold rounded-full hover:bg-white/5 hover:border-primary/50 transition-all active:scale-95 w-full sm:w-auto text-base"
            >
              <FaGithub size={20} />
              <span>View GitHub</span>
              <span className="text-xs opacity-50">↗</span>
            </a>
          </div>

          <div className="flex items-center gap-5 text-gray-500">
            <SiNextdotjs size={26} className="hover:text-white hover:scale-110 transition-all cursor-pointer" title="Next.js" />
            <span className="w-1 h-1 rounded-full bg-gray-700" />
            <FaReact size={26} className="hover:text-[#61DAFB] hover:scale-110 transition-all cursor-pointer" title="React" />
            <span className="w-1 h-1 rounded-full bg-gray-700" />
            <SiTypescript size={26} className="hover:text-[#3178C6] hover:scale-110 transition-all cursor-pointer" title="TypeScript" />
            <span className="w-1 h-1 rounded-full bg-gray-700" />
            <FaNodeJs size={26} className="hover:text-[#339933] hover:scale-110 transition-all cursor-pointer" title="Node.js" />
            <span className="w-1 h-1 rounded-full bg-gray-700" />
            <SiPostgresql size={26} className="hover:text-[#4169E1] hover:scale-110 transition-all cursor-pointer" title="PostgreSQL" />
          </div>
        </div>

        {/* Right Column: Widgets */}
        <div className="lg:col-span-5 flex flex-col gap-6 w-full max-w-md mx-auto lg:mx-0 mt-12 lg:mt-0">
          
          {/* Developer Status Widget */}
          <div className="card-hover w-full rounded-3xl glass p-6 flex flex-col gap-4 shadow-2xl relative overflow-hidden group border border-white/10">
            {/* Premium glow effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute top-4 right-4 opacity-70 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-2 px-3 py-1.5 badge-modern rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-glow" />
                <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest">Available</span>
              </div>
            </div>
            
            <div className="flex gap-4 items-center relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-primary font-bold text-xl border border-primary/30 backdrop-blur-sm">
                AM
              </div>
              <div>
                <h3 className="text-foreground font-bold text-lg">Abdul Moiz</h3>
                <p className="text-sm text-gray-400">Full Stack Engineer</p>
              </div>
            </div>
            
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-1" />
            
            <div className="relative z-10">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-semibold">Currently Building</p>
              <p className="text-gray-200 font-medium">Modern Web Applications</p>
            </div>
          </div>

          {/* Interactive Code Terminal */}
          <div className="card-hover w-full rounded-3xl bg-[#0d1117] border border-gray-800/50 shadow-2xl overflow-hidden font-mono text-sm">
            {/* Terminal Header */}
            <div className="bg-gradient-to-r from-[#161b22] to-[#0d1117] px-4 py-3 flex items-center gap-3 border-b border-gray-800/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff6058] hover:brightness-110 transition-all cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:brightness-110 transition-all cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-[#28ca42] hover:brightness-110 transition-all cursor-pointer" />
              </div>
              <div className="flex-1 text-center text-xs text-gray-500 flex justify-center items-center gap-2">
                <TerminalIcon size={12} />
                <span className="font-medium">abdul-moiz ~/portfolio</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 flex flex-col gap-4 min-h-[240px] bg-gradient-to-br from-[#0d1117] to-[#161b22]">
              {lines.slice(0, textIndex + 1).map((line, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-bold text-sm">➜</span>
                    <span className="text-accent font-bold">$</span>
                    <span className="text-gray-300 font-medium">{line.cmd}</span>
                  </div>
                  {i <= textIndex && (
                    <div className="text-gray-400 pl-7 font-medium">{line.output}</div>
                  )}
                </div>
              ))}
              
              {/* Blinking Cursor - CSS only */}
              {textIndex >= lines.length && (
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-primary font-bold text-sm">➜</span>
                  <span className="text-accent font-bold">$</span>
                  <div className="w-2 h-4 bg-primary/80 animate-pulse rounded-sm" />
                </div>
              )}
            </div>
          </div>
          
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-float-down">
        <span className="text-[10px] text-gray-500 font-bold tracking-[0.25em] uppercase">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-gray-700 flex justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-float-down" />
        </div>
      </div>
    </section>
  );
}
