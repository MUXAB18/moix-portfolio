"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiPostgresql, SiMongodb, SiTailwindcss } from "react-icons/si";
import { SectionHeading } from "./SectionHeading";
import Image from "next/image";

const projects = [
  {
    id: "01",
    title: "TradeMatch",
    category: "WEB APPLICATION",
    description: "A comprehensive workforce platform connecting skilled tradespeople with trusted opportunities. Features real-time job matching, secure messaging, and complex state management for high-performance rendering.",
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#",
  },
  {
    id: "02",
    title: "IMAS Chauffeur",
    category: "CLIENT PROJECT",
    description: "A premium chauffeur booking platform built for modern transportation services. Integrates real-time location tracking, automated dispatching, and a secure payment gateway for high-end clientele.",
    tech: [
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "MongoDB", icon: SiMongodb },
    ],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#",
  },
  {
    id: "03",
    title: "Webify Pro",
    category: "SAAS",
    description: "A modern web development and digital marketing platform. Provides a suite of tools for SEO analysis, performance tracking, and automated content generation using AI.",
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading title="Selected Works" subtitle="Projects" />

        <div className="flex flex-col gap-32 mt-16">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="group flex flex-col lg:flex-row gap-12 lg:gap-20 items-center"
            >
              {/* Content Area */}
              <div className="w-full lg:w-5/12 flex flex-col order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl md:text-5xl font-bold text-white/10 group-hover:text-white/20 transition-colors duration-500 font-mono">
                    {project.id}
                  </span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-bold uppercase tracking-widest text-primary">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-[40px] font-bold text-foreground mb-6 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-6 mb-10">
                  {project.tech.map((TechItem) => (
                    <div key={TechItem.name} className="flex items-center gap-2 text-gray-400 group/tech">
                      <TechItem.icon size={20} className="group-hover/tech:text-white group-hover/tech:scale-110 transition-all duration-300" />
                      <span className="text-sm font-medium">{TechItem.name}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <a 
                    href={project.link} 
                    data-cursor="hover"
                    className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
                  >
                    Live Demo
                    <ArrowRight size={16} className="group-hover/btn:-rotate-45 transition-transform" />
                  </a>
                  <a 
                    href={project.github} 
                    data-cursor="open"
                    className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-transparent text-white border border-white/20 font-semibold rounded-full hover:bg-white/5 transition-colors"
                  >
                    <FaGithub size={18} />
                    GitHub
                    <ArrowRight size={16} className="group-hover/btn:-rotate-45 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Image Area */}
              <div className="w-full lg:w-7/12 order-1 lg:order-2">
                <a href={project.link} data-cursor="view" className="block relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#111] border border-white/10 group-hover:border-white/20 transition-colors">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
