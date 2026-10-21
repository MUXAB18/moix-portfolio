import { SITE } from "@/data/site";
import { Reveal } from "./Reveal";

/**
 * "Trusted by" strip + testimonials. Renders nothing until you add REAL entries
 * to `clients` / `testimonials` in src/data/site.ts.
 */
export function Trusted() {
  const { clients, testimonials } = SITE;
  if (!clients.length && !testimonials.length) return null;

  return (
    <section aria-label="Clients and testimonials" className="border-t border-line py-16 md:py-24">
      <div className="container-custom">
        {clients.length > 0 && (
          <Reveal>
            <p className="eyebrow mb-8 text-muted">Trusted by</p>
            <ul className="flex flex-wrap items-center gap-x-12 gap-y-6 text-lg font-medium text-muted">
              {clients.map((c) => (
                <li key={c.name}>
                  {c.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={c.logo} alt={c.name} className="h-7 w-auto opacity-70" />
                  ) : (
                    c.name
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        {testimonials.length > 0 && (
          <ul className="mt-14 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal as="li" key={t.name} delay={i * 0.08}>
                <figure className="h-full rounded-2xl border border-line bg-surface/60 p-8">
                  <blockquote className="text-lg">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="mt-6 text-sm text-muted">
                    <span className="text-foreground">{t.name}</span>, {t.title}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
