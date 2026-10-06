"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal as TerminalIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiPostgresql } from "react-icons/si";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  
  const [textIndex, setTextIndex] = useState(0);
  const lines = [
    { cmd: "whoami", output: "Abdul Moiz" },
    { cmd: "role", output: "Full Stack Engineer" },
    { cmd: "stack", output: "Next.js • React • Node.js" },
    { cmd: "status", output: "Building something great..." },
  ];

  useEffect(() => {
    setMounted(true);
    
    // Terminal animation logic
    if (textIndex < lines.length) {
      const timer = setTimeout(() => {
        setTextIndex(prev => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [textIndex, lines.length]);

  if (!mounted) return null;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Typography & CTAs */}
        <div className="flex flex-col items-start lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-gray-300 mb-8"
          >
            <span className="relative flex h-2 w-2 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            AVAILABLE FOR OPPORTUNITIES
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-[80px] lg:text-[96px] font-bold tracking-tighter text-foreground mb-4 leading-[1.1]">
              Abdul Moiz
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-[64px] font-bold tracking-tighter text-gray-500 mb-8 leading-tight">
              Full Stack Engineer
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed font-medium"
          >
            I build fast, scalable, and beautifully engineered digital products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-6 mb-12 w-full sm:w-auto"
          >
            <a
              href="#projects"
              data-cursor="hover"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-semibold rounded-full transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto text-base"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:-rotate-45 transition-transform duration-300" />
            </a>
            
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="open"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-foreground border border-white/10 font-semibold rounded-full hover:bg-white/5 transition-colors active:scale-95 w-full sm:w-auto text-base"
            >
              <FaGithub size={20} />
              GitHub ↗
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-4 text-gray-500"
          >
            <SiNextdotjs size={24} className="hover:text-white transition-colors" title="Next.js" />
            <span className="w-1 h-1 rounded-full bg-gray-700" />
            <FaReact size={24} className="hover:text-[#61DAFB] transition-colors" title="React" />
            <span className="w-1 h-1 rounded-full bg-gray-700" />
            <SiTypescript size={24} className="hover:text-[#3178C6] transition-colors" title="TypeScript" />
            <span className="w-1 h-1 rounded-full bg-gray-700" />
            <FaNodeJs size={24} className="hover:text-[#339933] transition-colors" title="Node.js" />
            <span className="w-1 h-1 rounded-full bg-gray-700" />
            <SiPostgresql size={24} className="hover:text-[#4169E1] transition-colors" title="PostgreSQL" />
          </motion.div>
        </div>

        {/* Right Column: Widgets */}
        <div className="lg:col-span-5 flex flex-col gap-6 w-full max-w-md mx-auto lg:mx-0 mt-12 lg:mt-0">
          
          {/* Developer Status Widget */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="w-full rounded-2xl glass border border-white/10 p-6 flex flex-col gap-4 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Available</span>
              </div>
            </div>
            
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl border border-primary/30">
                AM
              </div>
              <div>
                <h3 className="text-foreground font-semibold">Abdul Moiz</h3>
                <p className="text-sm text-gray-400">Full Stack Engineer</p>
              </div>
            </div>
            
            <div className="h-[1px] w-full bg-white/10 my-1" />
            
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">Currently Building</p>
              <p className="text-gray-300 font-medium">Modern Web Applications</p>
            </div>
          </motion.div>

          {/* Interactive Code Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="w-full rounded-2xl bg-[#0a0a0a] border border-gray-800 shadow-2xl overflow-hidden font-mono text-sm"
          >
            {/* Terminal Header */}
            <div className="bg-[#111111] px-4 py-3 flex items-center gap-3 border-b border-gray-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="flex-1 text-center text-xs text-gray-500 flex justify-center items-center gap-2">
                <TerminalIcon size={12} />
                abdul-moiz ~/portfolio
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-5 flex flex-col gap-4 min-h-[240px]">
              {lines.slice(0, textIndex + 1).map((line, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-pink-500 font-bold">➜</span>
                    <span className="text-blue-400 font-bold">$</span>
                    <span className="text-gray-300">{line.cmd}</span>
                  </div>
                  {i < textIndex ? (
                    <div className="text-gray-400 pl-6">{line.output}</div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-400 pl-6"
                    >
                      {line.output}
                    </motion.div>
                  )}
                </div>
              ))}
              
              {/* Blinking Cursor */}
              {textIndex >= lines.length && (
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-pink-500 font-bold">➜</span>
                  <span className="text-blue-400 font-bold">$</span>
                  <motion.div
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.9 }}
                    className="w-2 h-4 bg-gray-400"
                  />
                </div>
              )}
            </div>
          </motion.div>
          
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] text-gray-500 font-bold tracking-[0.2em]">SCROLL TO EXPLORE ↓</span>
      </motion.div>
    </section>
  );
}
