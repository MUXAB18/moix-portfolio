"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#030712] overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl pt-16 pb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          
          <Link href="/" className="text-xl font-bold tracking-tighter">
            <span className="text-foreground">Abdul</span>
            <span className="text-primary">Moiz</span>
            <span className="text-gray-500 font-normal text-sm ml-2 hidden md:inline-block">
              — Full Stack Engineer
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-colors">
              <FaGithub size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-colors">
              <FaLinkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:hello@example.com" className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-colors">
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-gray-500 text-sm">
            Designed & Built by Abdul Moiz. © {new Date().getFullYear()}
          </p>

          <button 
            onClick={scrollToTop}
            className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
