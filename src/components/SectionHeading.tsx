import { Reveal } from "./Reveal";

/** `title` may contain an <em> to italicise and tint one word. */
export function SectionHeading({ index, title }: { index: string; title: React.ReactNode }) {
  return (
    <Reveal className="mb-14 md:mb-20">
      <p className="eyebrow mb-5">{index}</p>
      <h2 className="display text-4xl md:text-6xl">{title}</h2>
    </Reveal>
  );
}
