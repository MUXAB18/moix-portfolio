import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SITE } from "@/data/site";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="section relative overflow-hidden border-t border-line">
      <div className="aurora absolute inset-0 -z-10" aria-hidden />
      <div className="container-custom grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <p className="eyebrow mb-6">04 — Contact</p>
          <h2 className="display text-4xl sm:text-5xl lg:text-6xl">
            Have a project in mind? Let&apos;s build something <em>meaningful.</em>
          </h2>
          <p className="mt-8 text-muted">
            Prefer email?{" "}
            <a href={`mailto:${SITE.email}`} className="link-underline text-foreground">
              {SITE.email}
            </a>
          </p>
          <div className="mt-8 flex gap-6 text-muted">
            <a href={SITE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-foreground">
              <FaGithub size={24} />
            </a>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-foreground">
              <FaLinkedin size={24} />
            </a>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-6" delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
