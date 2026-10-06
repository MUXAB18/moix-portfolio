"use client";

import { motion } from "framer-motion";
import { Code, Database, Layout, Smartphone } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: <Code size={32} />,
    title: "Full Stack Development",
    description: "End-to-end development of modern web applications using React, Next.js, and Node.js.",
  },
  {
    icon: <Layout size={32} />,
    title: "UI/UX Implementation",
    description: "Translating design concepts into pixel-perfect, accessible, and responsive interfaces.",
  },
  {
    icon: <Database size={32} />,
    title: "API & Backend",
    description: "Designing and building secure, scalable RESTful and GraphQL APIs with robust database architecture.",
  },
  {
    icon: <Smartphone size={32} />,
    title: "Web Optimization",
    description: "Improving application performance, SEO, and accessibility to ensure the best user experience.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading title="What I Do" subtitle="Services" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-2xl glass border border-white/5 hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
