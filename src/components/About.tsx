"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Terminal } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const stats = [
    { value: "10+", label: "Projects Delivered" },
    { value: "Full Stack", label: "Development" },
    { value: "Modern", label: "Web Technologies" },
    { value: "Problem", label: "Solver" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading title="About Me" subtitle="Who I Am" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual Area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 rounded-full bg-primary/5 blur-[100px]" />
              
              <div className="absolute inset-4 rounded-3xl glass border border-white/10 p-6 overflow-hidden flex flex-col">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                
                <div className="flex-1 font-mono text-sm overflow-hidden flex flex-col gap-2 opacity-80">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-gray-400"
                  >
                    <span className="text-primary">const</span> engineer = {'{'}
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="pl-4 text-gray-300"
                  >
                    name: <span className="text-secondary">'Abdul Moiz'</span>,
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="pl-4 text-gray-300"
                  >
                    role: <span className="text-secondary">'Full Stack Engineer'</span>,
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="pl-4 text-gray-300"
                  >
                    skills: [<span className="text-secondary">'React'</span>, <span className="text-secondary">'Next.js'</span>, <span className="text-secondary">'Node.js'</span>],
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="pl-4 text-gray-300"
                  >
                    isPassionate: <span className="text-primary">true</span>,
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="pl-4 text-gray-300"
                  >
                    build(): {'{'}
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="pl-8 text-gray-400"
                  >
                    return <span className="text-secondary">'Scalable Digital Products'</span>;
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="pl-4 text-gray-300"
                  >
                    {'}'}
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="text-gray-400"
                  >
                    {'}'};
                  </motion.div>
                  
                  {/* Blinking cursor */}
                  <motion.div 
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-2 h-4 bg-primary mt-2"
                  />
                </div>
              </div>
              
              {/* Floating Icons */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-6 p-4 rounded-xl glass border border-white/10 text-primary"
              >
                <Layout size={24} />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 15, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 -right-4 p-4 rounded-xl glass border border-white/10 text-secondary"
              >
                <Server size={24} />
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
              Engineering with <span className="text-gradient">Precision.</span>
            </h3>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-10">
              <p>
                Hello! I'm Abdul Moiz, a Full Stack Engineer who enjoys building things that live on the internet. My interest in web development started back when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about HTML & CSS!
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of building software for a start-up, a large corporation, and several ambitious products. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
                >
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
