"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function PageTransition() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Very fast transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
      onAnimationComplete={() => setIsLoading(false)}
      className="fixed inset-0 z-[1000] bg-[#030712] flex items-center justify-center pointer-events-none"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-4xl font-bold tracking-tighter"
      >
        <span className="text-foreground">A</span>
        <span className="text-primary">M</span>
      </motion.div>
    </motion.div>
  );
}
