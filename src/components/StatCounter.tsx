"use client";

import { useEffect, useRef, useState } from "react";

/** Counts up once when scrolled into view. Server-renders the final number, so nothing is hidden without JS. */
export function StatCounter({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / 1100, 1);
        setShown(Math.round(value * (1 - Math.pow(1 - t, 3))));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      setShown(0);
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <div ref={ref} className="flex flex-col-reverse">
      <dt className="mt-1 text-sm text-muted">{label}</dt>
      <dd className="display text-5xl tabular-nums">{shown}</dd>
    </div>
  );
}
