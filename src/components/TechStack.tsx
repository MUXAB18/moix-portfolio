import type { IconType } from "react-icons";
import {
  SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiNodedotjs,
  SiExpress, SiPostgresql, SiMongodb, SiPrisma, SiGit, SiGithub, SiDocker, SiFirebase,
} from "react-icons/si";
import { GlowCard } from "./GlowCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const groups: { title: string; blurb: string; skills: { name: string; icon: IconType }[] }[] = [
  {
    title: "Frontend",
    blurb: "Interfaces that are fast, accessible and considered.",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend & data",
    blurb: "Reliable APIs and well-modelled data.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Prisma", icon: SiPrisma },
    ],
  },
  {
    title: "Tools",
    blurb: "A workflow that keeps shipping smooth.",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
];

export const skillCount = groups.reduce((n, g) => n + g.skills.length, 0);

export function TechStack() {
  return (
    <section id="skills" className="section border-t border-line">
      <div className="container-custom">
        <SectionHeading index="03 — Skills" title={<>A toolkit, <em>sharpened.</em></>} />

        <div className="grid gap-6 md:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <GlowCard className="h-full rounded-2xl border border-line bg-surface/60 p-8 transition-colors hover:border-accent/40">
                <h3 className="display text-3xl">{g.title}</h3>
                <p className="mt-3 text-sm text-muted">{g.blurb}</p>
                <ul className="mt-8 space-y-3.5">
                  {g.skills.map(({ name, icon: Icon }) => (
                    <li key={name} className="group flex items-center gap-3 text-[0.95rem]">
                      <Icon size={17} aria-hidden className="text-muted transition-colors group-hover:text-accent" />
                      {name}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
