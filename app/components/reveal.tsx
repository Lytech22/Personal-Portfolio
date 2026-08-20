"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const easing = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  mode?: "rise" | "scale";
};

export function Reveal({ children, className = "", delay = 0, mode = "rise" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const hidden = reduceMotion
    ? { opacity: 0 }
    : mode === "scale"
      ? { opacity: 0, y: 8, scale: 0.985 }
      : { opacity: 0, y: 20 };

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -12% 0px" }}
      transition={{ duration: reduceMotion ? 0.2 : 0.6, delay: reduceMotion ? 0 : delay, ease: easing }}
    >
      {children}
    </motion.div>
  );
}

export function Sequence({ children, className = "", inView = false, delay = 0, stagger = 0.07 }: { children: ReactNode; className?: string; inView?: boolean; delay?: number; stagger?: number }) {
  const reduceMotion = useReducedMotion();
  const animation = { opacity: 1, transition: { delay: reduceMotion ? 0 : delay, staggerChildren: reduceMotion ? 0 : stagger } };

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate={inView ? undefined : "visible"}
      whileInView={inView ? "visible" : undefined}
      viewport={inView ? { once: true, amount: 0.12, margin: "0px 0px -12% 0px" } : undefined}
      variants={{ hidden: { opacity: 1 }, visible: animation }}
    >
      {children}
    </motion.div>
  );
}

export function SequenceItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
        visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0.2 : 0.56, ease: easing } },
      }}
    >
      {children}
    </motion.div>
  );
}
