"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";
import { SiNextdotjs, SiTypescript, SiReact, SiMongodb } from "react-icons/si";
import { FaDocker, FaAws } from "react-icons/fa";

const experiences = [
  {
    role: "Senior Full Stack Engineer",
    company: "Tech Innovators Inc.",
    date: "2023 — Present",
    description: "Leading the development of highly scalable enterprise applications using Next.js and Node.js. Mentoring junior developers and establishing best practices for CI/CD pipelines.",
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: FaDocker },
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Digital Solutions Agency",
    date: "2021 — 2023",
    description: "Developed and maintained multiple client projects ranging from e-commerce platforms to custom CRM systems. Improved application performance by 40% through code optimization.",
    tech: [
      { name: "React", icon: SiReact },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Creative Studio",
    date: "2019 — 2021",
    description: "Collaborated with designers to implement pixel-perfect, responsive web interfaces. Integrated complex animations and improved accessibility standards across all projects.",
    tech: [
      { name: "React", icon: SiReact },
    ],
  },
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-32 relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeading title="Experience" subtitle="Where I've Worked" />

        <div ref={containerRef} className="relative mt-16 ml-4 md:ml-8">
          {/* Static Background Line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10" />
          
          {/* Animated Progress Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-0 top-0 w-[2px] bg-primary origin-top -translate-x-[0.5px]"
          />

          <div className="flex flex-col gap-16">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative pl-8 md:pl-16"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-[#030712] border-2 border-primary z-10" />
                
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-2">
                  <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                  <span className="text-lg text-gray-400">— {exp.company}</span>
                </div>
                
                <span className="text-primary font-mono text-sm font-semibold tracking-wider block mb-6">
                  {exp.date}
                </span>
                
                <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-3xl">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  {exp.tech.map((TechItem) => (
                    <div key={TechItem.name} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300">
                      <TechItem.icon size={16} />
                      <span className="text-xs font-semibold uppercase tracking-wider">{TechItem.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
