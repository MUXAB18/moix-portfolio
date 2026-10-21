/**
 * Central place for your personal copy. Edit values here; components read from it.
 */
export const SITE = {
  name: "Abdul Moiz",
  role: "Full Stack Engineer",
  email: "moixmalik3533@gmail.com",
  github: "https://github.com/moizmalik777",
  linkedin: "https://www.linkedin.com/in/abdul-moiz-8876a8440",
  url: "https://abdulmoiz.dev",

  /** Shown in meta tags and social previews. The hero headline is set in Hero.tsx. */
  headline: "Building digital experiences that make a difference.",
  intro:
    "I'm a full-stack engineer crafting fast, accessible web products, from the database to the last pixel of the interface.",
  /** Shows the availability dot in the hero. Set to false if it isn't accurate. */
  available: true,

  /**
   * ABOUT: drop your photo at /public/me.jpg (square, ~800x800) and set photo: "/me.jpg".
   * Leave undefined to show a monogram instead.
   */
  photo: "/me.png" as string | undefined,
  story: [
    // Replace with your own story: 2–3 short paragraphs.
    "I build products that feel simple to use, and I sweat the details that make them so.",
    "I care about what people notice without thinking about it: fast load times, clear layouts, accessible interactions. I'm comfortable across the whole stack, from database design to the interface.",
    "Right now I'm building with React, Next.js and Node.js, and I'm open to interesting projects and teams.",
  ],
  /** Set the year you started coding (e.g. 2021) to show a "years coding" counter. Left unset so nothing is invented. */
  startedCodingYear: undefined as number | undefined,

  /**
   * TESTIMONIALS: only add real quotes from real people. The section stays hidden while this is empty.
   * { quote: "…", name: "Jane Doe", title: "CEO, Acme" }
   */
  testimonials: [] as { quote: string; name: string; title: string }[],
  /** TRUSTED BY: real clients/companies only. Hidden while empty. */
  clients: [] as { name: string; logo?: string }[],
};
