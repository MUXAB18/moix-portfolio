"use client";

import { m } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Seconds of delay, for staggering siblings. */
  delay?: number;
  as?: "div" | "li" | "article";
}

/** Fades and lifts content in once as it enters the viewport. */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const Tag = m[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
}
