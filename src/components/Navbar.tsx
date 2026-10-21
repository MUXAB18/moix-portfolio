"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { name: "Services", id: "services" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section crossing the middle of the viewport (home page only).
  useEffect(() => {
    const els = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? "border-line bg-background/85 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <nav aria-label="Primary" className="container-custom flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="display text-xl">
          Abdul Moiz<span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.id}
              href={`/#${l.id}`}
              aria-current={active === l.id ? "location" : undefined}
              className={`link-underline text-sm transition-colors hover:text-foreground ${
                active === l.id ? "text-foreground [background-size:100%_1px]" : "text-muted"
              }`}
            >
              {l.name}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href="/#contact"
            className="rounded-md border border-line px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
          >
            Let&apos;s talk
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="p-2"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="container-custom pb-6 md:hidden">
          <ul>
            {links.map((l) => (
              <li key={l.id}>
                <Link
                  href={`/#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block border-t border-line py-4 text-lg"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
