"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface SmoothScrollSectionProps {
  children: ReactNode;
  className?: string;
}

export default function SmoothScrollSection({ children, className = "" }: SmoothScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, scale }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
