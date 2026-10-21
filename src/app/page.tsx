import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Experience } from "@/components/Experience";
import { Philosophy } from "@/components/Philosophy";
import { GithubSection } from "@/components/GithubSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#0a0e14] via-[#0f1419] to-[#0a0e14] selection:bg-primary/20 selection:text-white">
      <AnimatedBackground />
      <Navbar />
      
      <div className="flex flex-col w-full relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Philosophy />
        <GithubSection />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
