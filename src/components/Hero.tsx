import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import { ArrowRight } from "lucide-react";
import { SiNextdotjs, SiReact, SiNodedotjs, SiPostgresql, SiTypescript, SiTailwindcss } from "react-icons/si";
import { SITE } from "@/data/site";

const delay = (i: number) => ({ "--i": i }) as CSSProperties;

/** Planets on the two orbit rings. angle = start position in degrees. */
const inner: { icon: IconType; label: string; angle: number }[] = [
  { icon: SiReact, label: "React", angle: 20 },
  { icon: SiNodedotjs, label: "Node.js", angle: 140 },
  { icon: SiPostgresql, label: "PostgreSQL", angle: 260 },
];
const outer: { icon: IconType; label: string; angle: number }[] = [
  { icon: SiNextdotjs, label: "Next.js", angle: 70 },
  { icon: SiTypescript, label: "TypeScript", angle: 190 },
  { icon: SiTailwindcss, label: "Tailwind CSS", angle: 310 },
];

const marquee = [
  "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "MongoDB",
  "Tailwind CSS", "Prisma", "Docker", "Firebase",
];

function Ring({
  size,
  duration,
  planets,
  reverse,
}: {
  size: string;
  duration: string;
  planets: typeof inner;
  reverse?: boolean;
}) {
  const style = { width: size, height: size, "--d": duration, animationDirection: reverse ? "reverse" : undefined } as CSSProperties;
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: size, height: size }}>
      <div className="orbit absolute inset-0 rounded-full border border-line" style={style}>
        {planets.map(({ icon: Icon, label, angle }) => (
          <span
            key={label}
            className="absolute left-1/2 top-1/2 -ml-[1.4rem] -mt-[1.4rem]"
            style={{ transform: `rotate(${angle}deg) translateX(calc(${size} / 2)) rotate(-${angle}deg)` }}
          >
            <span
              className="orbit-counter flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-muted shadow-lg shadow-black/20"
              style={{ "--d": duration, animationDirection: reverse ? "normal" : undefined } as CSSProperties}
              title={label}
            >
              <Icon size={18} aria-hidden />
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <div className="aurora absolute inset-0" aria-hidden />
      <div className="hero-grid absolute inset-0 opacity-70" aria-hidden />

      <div className="container-custom relative grid flex-1 items-center gap-6 pb-10 pt-32 lg:grid-cols-12 lg:gap-8 lg:pt-28">
        <div className="lg:col-span-7">
          <p className="rise eyebrow mb-8 flex items-center gap-3 text-muted" style={delay(0)}>
            {SITE.available && <span className="pulse-dot h-2 w-2 rounded-full bg-accent" aria-hidden />}
            {SITE.name} — {SITE.role}
          </p>

          <h1 className="display rise text-[2.75rem] sm:text-6xl lg:text-[4.75rem]" style={delay(1)}>
            Building digital experiences that <em>make a difference.</em>
          </h1>

          <p className="rise mt-8 max-w-xl text-lg text-muted md:text-xl" style={delay(2)}>
            {SITE.intro}
          </p>

          <div className="rise mt-10 flex flex-col gap-3 sm:flex-row" style={delay(3)}>
            <a href="#services" className="btn btn-primary group">
              Explore My Work
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>

        {/* Orbit visual: decorative, paused for reduced-motion users */}
        <div className="rise relative mx-auto h-[19rem] w-[19rem] sm:h-[26rem] sm:w-[26rem] lg:col-span-5 lg:h-[30rem] lg:w-[30rem]" style={delay(2)} aria-hidden>
          <div className="absolute inset-0 scale-[0.74] sm:scale-100 lg:scale-100">
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full [background:radial-gradient(closest-side,color-mix(in_srgb,var(--accent)_30%,transparent),transparent)]" />
            <Ring size="15rem" duration="36s" planets={inner} />
            <Ring size="25rem" duration="60s" planets={outer} reverse />
            <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/40 bg-surface shadow-2xl shadow-accent/10">
              <span className="display text-4xl">AM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Technology marquee */}
      <div className="relative border-t border-line py-5 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]" aria-label="Technologies I work with">
        <div className="marquee flex w-max gap-12 whitespace-nowrap font-mono text-sm uppercase tracking-widest text-muted">
          {[...marquee, ...marquee].map((t, i) => (
            <span key={i} aria-hidden={i >= marquee.length} className="flex items-center gap-12">
              {t}
              <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
