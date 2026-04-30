"use client";

import * as React from "react";
import {
  type HTMLMotionProps,
  type Transition,
  motion,
  useInView,
} from "motion/react";

import { cn } from "@/lib/utils";

const easeTransitions = {
  default: [0.25, 0.1, 0.25, 1] as const,
  transform: [0.42, 0, 0.58, 1] as const,
  opacity: [0.25, 0.1, 0.25, 1] as const,
  clipPath: [0.6, 0.04, 0.98, 0.335] as const,
};

export type TransformDirectionType =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "z";

export const transformVariants = (direction?: TransformDirectionType) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "top" ? "-100%" : direction === "bottom" ? "100%" : 0,
    scale: direction === "z" ? 0 : 1,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
  },
});

interface WordProps {
  word: string;
  transition?: Transition;
  direction?: TransformDirectionType;
  charStagger: number;
}

const defaultTransition: Transition = {
  ease: easeTransitions.default,
  duration: 0.5,
};

function Word({
  word,
  transition = defaultTransition,
  direction = "bottom",
  charStagger,
}: WordProps) {
  const characters = word.split("");
  return (
    <motion.span
      className="inline-block whitespace-nowrap align-top"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: charStagger,
          },
        },
      }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={`${word}-${index}-${char}`}
          className="inline-block"
          variants={transformVariants(direction)}
          transition={transition}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export interface StaggerTextProps extends HTMLMotionProps<"div"> {
  text: string;
  stagger?: number;
  transition?: Transition;
  direction?: TransformDirectionType;
  className?: string;
}

function StaggerText({
  text,
  stagger = 0.05,
  transition,
  direction,
  className,
  ...props
}: StaggerTextProps) {
  const words = text.split(" ");
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  const charStagger = Math.min(stagger, 0.06);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn("relative", className)}
      {...props}
    >
      {words.map((word, index) => (
        <React.Fragment key={`${word}-${index}`}>
          <Word
            transition={transition}
            direction={direction}
            word={word}
            charStagger={charStagger}
          />
          {index < words.length - 1 && " "}
        </React.Fragment>
      ))}
    </motion.div>
  );
}

export { StaggerText };
