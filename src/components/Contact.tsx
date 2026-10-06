"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative border-t border-white/5 bg-[#030712] overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none z-[-1]" />
      
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-gray-300 mb-8"
          >
            CONTACT
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[80px] font-bold text-foreground mb-8 leading-[1.1] tracking-tighter"
          >
            Let's build something <br className="hidden md:block" />
            <span className="text-gray-500">meaningful.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 mb-16 max-w-2xl"
          >
            Have an idea, project, or opportunity? Let's talk.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a
              href="mailto:hello@example.com"
              data-cursor="hover"
              className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 bg-foreground text-background font-bold rounded-full transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto text-lg"
            >
              Start a Conversation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="mailto:hello@example.com"
              data-cursor="open"
              className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-transparent text-foreground border border-white/10 font-bold rounded-full hover:bg-white/5 transition-colors active:scale-95 w-full sm:w-auto text-lg"
            >
              Email Me ↗
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-24 flex items-center gap-8"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="GitHub Profile">
              <FaGithub size={28} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0A66C2] transition-colors" aria-label="LinkedIn Profile">
              <FaLinkedin size={28} />
            </a>
            <a href="mailto:hello@example.com" className="text-gray-500 hover:text-white transition-colors" aria-label="Email Me">
              <Mail size={28} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
