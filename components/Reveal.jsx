"use client";

import { motion } from "framer-motion";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.8,
}) {
  const directions = {
    up: { y: 45, x: 0 },
    down: { y: -45, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}