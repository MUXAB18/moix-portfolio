"use client";

import { Moon, Sun } from "lucide-react";

/** The initial theme is set before paint by the inline script in layout.tsx. */
export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className="rounded-md border border-line p-2 text-muted transition-colors hover:border-accent hover:text-accent"
    >
      <Sun size={16} className="icon-sun" aria-hidden />
      <Moon size={16} className="icon-moon" aria-hidden />
    </button>
  );
}
