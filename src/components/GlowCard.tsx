"use client";

import type { ElementType } from "react";

/** Wrapper that feeds the pointer position to the .glow-card CSS highlight. */
export function GlowCard({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return (
    <Tag
      className={`glow-card ${className}`}
      onPointerMove={(e: React.PointerEvent<HTMLElement>) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
    >
      {children}
    </Tag>
  );
}
