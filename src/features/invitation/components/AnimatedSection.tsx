"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-down" | "fade-in" | "scale" | "slide-left" | "slide-right";
  delay?: number;
  duration?: number;
  className?: string;
  id?: string;
}

const animations = {
  "fade-up": {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-down": {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
};

export default function AnimatedSection({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.5,
  className = "",
  id,
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants = animations[animation];

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: "easeOut",
      }}
      variants={shouldReduceMotion ? { hidden: { opacity: 1 }, visible: { opacity: 1 } } : variants}
      className={className}
    >
      {children}
    </motion.section>
  );
}
