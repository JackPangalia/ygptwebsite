"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { animate, motion, useMotionValue, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

export type FramerCarouselItem = {
  id: number;
  url: string;
  title: string;
  subtitle?: string;
  /** Optional external link for the slide */
  href?: string;
};

interface FramerCarouselProps {
  items: FramerCarouselItem[];
  className?: string;
}

export function FramerCarousel({ items, className }: FramerCarouselProps) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const el = containerRef.current;
    if (!el || items.length === 0) return;

    const apply = () => {
      const w = el.offsetWidth || 1;
      const targetX = -index * w;
      if (reduceMotion) {
        x.set(targetX);
        return;
      }
      animate(x, targetX, {
        type: "spring",
        stiffness: 300,
        damping: 30,
      });
    };

    apply();
    const ro = new ResizeObserver(() => apply());
    ro.observe(el);
    return () => ro.disconnect();
  }, [index, items.length, x, reduceMotion]);

  if (items.length === 0) {
    return null;
  }

  return (
    <div className={cn("mx-auto max-w-4xl p-2 sm:p-4 lg:p-10", className)}>
      <div className="flex flex-col gap-3">
        <div
          className="relative overflow-hidden rounded-lg"
          ref={containerRef}
        >
          <motion.div className="flex" style={{ x }}>
            {items.map((item) => (
              <div
                key={item.id}
                className="relative h-[min(70vh,500px)] w-full shrink-0"
              >
                <Image
                  src={item.url}
                  alt={item.title}
                  fill
                  className="pointer-events-none select-none rounded-lg object-cover"
                  sizes="(max-width: 896px) 100vw, 896px"
                  quality={90}
                  draggable={false}
                  priority={item.id === items[0]?.id}
                />
                <div className="absolute inset-0 flex flex-col justify-end rounded-lg bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 sm:p-8">
                  <h3 className="font-headline text-2xl font-semibold text-white sm:text-3xl">
                    {item.title}
                  </h3>
                  {item.subtitle ? (
                    <p className="mt-2 max-w-xl text-base text-white/85 sm:text-lg">
                      {item.subtitle}
                    </p>
                  ) : null}
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-medium text-white/90 underline-offset-4 hover:text-white hover:underline"
                    >
                      Visit site
                      <ChevronRight className="h-4 w-4" aria-hidden />
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.button
            type="button"
            aria-label="Previous slide"
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className={cn(
              "absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full shadow-lg transition-transform",
              index === 0
                ? "cursor-not-allowed opacity-40"
                : "bg-white/95 text-gray-900 opacity-90 hover:scale-110 hover:opacity-100"
            )}
          >
            <ChevronLeft className="h-6 w-6" strokeWidth={2} />
          </motion.button>

          <motion.button
            type="button"
            aria-label="Next slide"
            disabled={index === items.length - 1}
            onClick={() =>
              setIndex((i) => Math.min(items.length - 1, i + 1))
            }
            className={cn(
              "absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full shadow-lg transition-transform",
              index === items.length - 1
                ? "cursor-not-allowed opacity-40"
                : "bg-white/95 text-gray-900 opacity-90 hover:scale-110 hover:opacity-100"
            )}
          >
            <ChevronRight className="h-6 w-6" strokeWidth={2} />
          </motion.button>

          <div
            className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2 rounded-xl border border-white/30 bg-white/20 p-2"
            role="tablist"
            aria-label="Slide indicators"
          >
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === index ? "w-8 bg-white" : "w-2 bg-white/50"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
