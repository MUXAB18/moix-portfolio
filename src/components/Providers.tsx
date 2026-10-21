"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";

/** Loads only the DOM animation features and honours prefers-reduced-motion. */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        {children}
      </LazyMotion>
    </MotionConfig>
  );
}
