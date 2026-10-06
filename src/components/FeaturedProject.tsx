"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import Image from "next/image";

export function FeaturedProject() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading title="Featured Work" subtitle="Case Study" />

        <div className="relative rounded-3xl bg-white/[0.02] border border-white/5 overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-12 lg:p-16 relative z-10 items-center">
            
            {/* Left: Content Area */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-medium self-start">
                FEATURED PROJECT
              </div>
              
              <h3 className="text-3xl md:text-5xl font-bold text-foreground">
                Enterprise Dashboard
              </h3>
              
              <p className="text-gray-400 text-lg leading-relaxed">
                A comprehensive analytics dashboard built for a fintech enterprise. Real-time data visualization, complex state management, and high-performance rendering of large datasets.
              </p>
              
              <div className="space-y-4 my-4">
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <h5 className="text-foreground font-semibold">The Problem</h5>
                    <p className="text-gray-400 text-sm mt-1">Legacy systems were slow and couldn't handle real-time streaming data effectively.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <h5 className="text-foreground font-semibold">The Solution</h5>
                    <p className="text-gray-400 text-sm mt-1">Rebuilt from scratch using Next.js App Router and WebSockets for a 300% performance increase.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                {["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "WebSockets"].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-mono">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="#"
                className="group inline-flex items-center gap-2 mt-6 text-primary font-medium hover:text-secondary transition-colors w-max"
              >
                View Full Case Study
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </motion.div>

            {/* Right: Browser Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden border border-gray-800 bg-[#0a0a0a] shadow-2xl">
                {/* Browser Header */}
                <div className="bg-[#1a1b26] px-4 py-3 flex items-center gap-2 border-b border-gray-800">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-600" />
                    <div className="w-3 h-3 rounded-full bg-gray-600" />
                    <div className="w-3 h-3 rounded-full bg-gray-600" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-[#0f111a] px-4 py-1 rounded-md text-xs text-gray-500 font-mono w-2/3 text-center truncate">
                      dashboard.enterprise.com
                    </div>
                  </div>
                </div>
                
                {/* Image / Content */}
                <div className="relative aspect-video w-full bg-gray-900 group">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
                    alt="Featured Project Dashboard"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                </div>
              </div>
              
              {/* Floating Element */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 p-4 rounded-xl glass border border-white/10 shadow-xl backdrop-blur-xl hidden md:flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">99.9%</div>
                  <div className="text-xs text-gray-400">Uptime achieved</div>
                </div>
              </motion.div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
