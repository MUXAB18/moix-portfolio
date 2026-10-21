import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

// Edit these four to match how you want to be hired.
const services = [
  {
    title: "Full-stack development",
    text: "End-to-end web applications with React, Next.js and Node.js, from schema to deploy.",
  },
  {
    title: "Interface engineering",
    text: "Pixel-accurate, responsive and accessible interfaces that turn a design into a product.",
  },
  {
    title: "APIs & backend",
    text: "Secure, well-structured REST APIs and data models on PostgreSQL and MongoDB.",
  },
  {
    title: "Performance & polish",
    text: "Faster load times, better Core Web Vitals, cleaner code, and the details that make it feel finished.",
  },
];

export function Services() {
  return (
    <section id="services" className="section border-t border-line">
      <div className="container-custom">
        <SectionHeading index="01 — What I do" title={<>Disciplines, <em>done well.</em></>} />

        <ul className="border-b border-line">
          {services.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.05}>
              <div className="group grid items-baseline gap-3 border-t border-line py-8 transition-colors hover:bg-surface/50 md:grid-cols-12 md:gap-8 md:px-4 md:py-10">
                <span className="font-mono text-sm text-muted transition-colors group-hover:text-accent md:col-span-1">
                  0{i + 1}
                </span>
                <h3 className="display text-2xl transition-transform duration-300 md:col-span-5 md:text-4xl md:group-hover:translate-x-2">
                  {s.title}
                </h3>
                <p className="text-muted md:col-span-5 md:text-lg">{s.text}</p>
                <ArrowUpRight
                  aria-hidden
                  className="hidden text-muted opacity-0 transition-all group-hover:translate-x-1 group-hover:text-accent group-hover:opacity-100 md:col-span-1 md:block md:justify-self-end"
                />
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
