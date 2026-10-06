"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiJavascript, SiExpress, SiMongodb, SiPostgresql, SiPrisma, SiTailwindcss, SiFirebase } from "react-icons/si";

const techCategories = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: FaReact, color: "#61DAFB", desc: "UI Library" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", desc: "React Framework" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", desc: "Typed JavaScript" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", desc: "Utility CSS" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", desc: "Web Language" },
    ]
  },
  {
    title: "Backend & DB",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933", desc: "JS Runtime" },
      { name: "Express", icon: SiExpress, color: "#ffffff", desc: "Web Framework" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", desc: "Relational DB" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", desc: "NoSQL DB" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748", desc: "Next-gen ORM" },
    ]
  },
  {
    title: "Tools & Cloud",
    items: [
      { name: "Git", icon: FaGitAlt, color: "#F05032", desc: "Version Control" },
      { name: "GitHub", icon: FaGithub, color: "#ffffff", desc: "Code Hosting" },
      { name: "Docker", icon: FaDocker, color: "#2496ED", desc: "Containerization" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28", desc: "BaaS Platform" },
    ]
  }
];

export function TechStack() {
  return (
    <section id="skills" className="py-32 relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading title="Technology Stack" subtitle="My Toolbox" />

        <div className="flex flex-col gap-16 mt-16">
          {techCategories.map((category, catIdx) => (
            <div key={category.title} className="flex flex-col lg:flex-row gap-8 lg:gap-16">
              <div className="w-full lg:w-1/4">
                <h3 className="text-xl font-semibold text-foreground border-b border-white/10 pb-4">
                  {category.title}
                </h3>
              </div>
              <div className="w-full lg:w-3/4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {category.items.map((tech, idx) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: catIdx * 0.1 + idx * 0.05 }}
                    className="group relative p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] transition-all duration-300 overflow-hidden cursor-pointer"
                  >
                    {/* Hover Glow */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-2xl"
                      style={{ backgroundColor: tech.color }}
                    />
                    
                    <div className="relative z-10 flex flex-col items-start gap-4">
                      <tech.icon 
                        size={32} 
                        className="text-gray-400 group-hover:scale-110 transition-all duration-300" 
                        style={{ color: "currentColor" }}
                        // Note: Using color dynamically on hover using CSS could be better, but setting it inline is fine for demo
                      />
                      <div>
                        <h4 className="text-gray-300 font-semibold tracking-wide group-hover:text-white transition-colors">
                          {tech.name}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{tech.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
