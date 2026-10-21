import Image from "next/image";
import { SITE } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { StatCounter } from "./StatCounter";
import { skillCount } from "./TechStack";

export function About() {
  const [lead, ...rest] = SITE.story;
  const stats = [
    ...(SITE.startedCodingYear
      ? [{ value: new Date().getFullYear() - SITE.startedCodingYear, label: "Years coding" }]
      : []),
    { value: skillCount, label: "Technologies" },
    { value: 3, label: "Layers of the stack" },
  ];

  return (
    <section id="about" className="section border-t border-line">
      <div className="container-custom">
        <SectionHeading index="02 — About" title={<>The person <em>behind</em> the code.</>} />

        <div className="grid items-start gap-14 lg:grid-cols-12">
          {/* Photo: set `photo` in src/data/site.ts (file in /public). */}
          <Reveal className="lg:sticky lg:top-28 lg:col-span-4">
            <div className="relative aspect-[4/5] max-w-sm overflow-hidden rounded-2xl border border-line bg-surface">
              {SITE.photo ? (
                <Image
                  src={SITE.photo}
                  alt={`Portrait of ${SITE.name}`}
                  fill
                  sizes="(min-width: 1024px) 340px, 90vw"
                  className="object-cover object-top"
                />
              ) : (
                <div
                  role="img"
                  aria-label={`${SITE.name} (photo placeholder)`}
                  className="aurora flex h-full items-center justify-center"
                >
                  <span className="display text-7xl text-accent">AM</span>
                </div>
              )}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-8">
            <p className="display text-2xl text-foreground md:text-4xl md:leading-[1.15]">{lead}</p>
            <div className="mt-8 max-w-2xl space-y-5 text-lg text-muted">
              {rest.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <dl className="mt-14 grid grid-cols-2 gap-8 border-t border-line pt-10 sm:grid-cols-3">
              {stats.map((s) => (
                <StatCounter key={s.label} {...s} />
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
