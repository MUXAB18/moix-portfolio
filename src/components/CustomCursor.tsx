"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState<"default" | "hover" | "view" | "open">("default");
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsDesktop(true);
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const viewElement = target.closest('[data-cursor="view"]');
      const openElement = target.closest('[data-cursor="open"]');
      const clickableElement = target.closest("a, button");

      if (viewElement) {
        setCursorState("view");
      } else if (openElement) {
        setCursorState("open");
      } else if (clickableElement) {
        setCursorState("hover");
      } else {
        setCursorState("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      {/* Small central dot */}
      <motion.div
        className="absolute top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full mix-blend-screen"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          opacity: cursorState === "default" ? 1 : 0,
          scale: cursorState === "default" ? 1 : 0,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      
      {/* Outer ring / label container */}
      <motion.div
        className="absolute top-0 left-0 flex items-center justify-center rounded-full overflow-hidden"
        initial={{ width: 32, height: 32 }}
        animate={{
          x: mousePosition.x - (cursorState === "view" || cursorState === "open" ? 36 : (cursorState === "hover" ? 24 : 16)),
          y: mousePosition.y - (cursorState === "view" || cursorState === "open" ? 36 : (cursorState === "hover" ? 24 : 16)),
          width: cursorState === "view" || cursorState === "open" ? 72 : (cursorState === "hover" ? 48 : 32),
          height: cursorState === "view" || cursorState === "open" ? 72 : (cursorState === "hover" ? 48 : 32),
          backgroundColor: cursorState === "view" || cursorState === "open" 
            ? "rgba(59, 130, 246, 0.9)" 
            : (cursorState === "hover" ? "rgba(59, 130, 246, 0.15)" : "transparent"),
          border: cursorState === "view" || cursorState === "open"
            ? "1px solid rgba(59, 130, 246, 1)"
            : "1px solid rgba(59, 130, 246, 0.4)",
          color: "white",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.5 }}
      >
        <AnimatePresence mode="wait">
          {cursorState === "view" && (
            <motion.span
              key="view"
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-[10px] font-bold tracking-widest"
            >
              VIEW
            </motion.span>
          )}
          {cursorState === "open" && (
            <motion.span
              key="open"
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-[10px] font-bold tracking-widest flex items-center gap-1"
            >
              OPEN <span className="font-sans">↗</span>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
