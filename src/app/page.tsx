import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Philosophy } from "@/components/Philosophy";
import { GithubSection } from "@/components/GithubSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { PageTransition } from "@/components/PageTransition";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030712] selection:bg-primary/30 selection:text-white">
      <PageTransition />
      <CustomCursor />
      <AnimatedBackground />
      <Navbar />
      
      <div className="flex flex-col w-full relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Philosophy />
        <GithubSection />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
