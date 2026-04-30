"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { TextRotate } from "@/components/ui/text-rotate";

const STEPS = [
  {
    n: "01",
    title: "Find",
    lens: "Clarity",
    body: "Locate the real friction.",
    image: "/process-find-van.png",
  },
  {
    n: "02",
    title: "Frame",
    lens: "Definition",
    body: "Define the job clearly.",
    image: "/process-frame-van.png",
  },
  {
    n: "03",
    title: "Build",
    lens: "Craft",
    body: "Make the useful version.",
    image: "/process-build-van.png",
  },
  {
    n: "04",
    title: "Ship",
    lens: "Launch",
    body: "Launch, learn, refine.",
    image: "/process-ship-van.png",
  },
];

const monoEyebrow = {
  fontFamily: "var(--mono)",
  color: "var(--muted-ink)",
  fontSize: "0.75rem",
  letterSpacing: "0.2em",
};

const bodyCopy = {
  color: "var(--muted-ink)",
  fontSize: "1.0625rem",
  lineHeight: 1.6,
  maxWidth: "28rem",
};

const sectionGutter = "clamp(2rem, 5vw, 4rem)";

function ArchivedProcessShowcase() {
  const sectionRef = useRef(null);
  const textRotateRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const index = Math.min(
      STEPS.length - 1,
      Math.max(0, Math.floor(progress * STEPS.length)),
    );

    if (index !== activeIndex) {
      setActiveIndex(index);
      textRotateRef.current?.jumpTo(index);
    }
  });

  const active = STEPS[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="process-archived"
      style={{
        position: "relative",
        width: "100%",
        height: `${STEPS.length * 100}vh`,
        background: "var(--ink)",
        color: "var(--text-on-ink)",
        borderTop: "1px solid var(--hairline-ink)",
        padding: 0,
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "clamp(1.75rem, 6vh, 3rem)",
            left: 0,
            right: 0,
            padding: `0 ${sectionGutter}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            fontFamily: "var(--mono)",
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--muted-ink)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        >
          <span>[ 02 / 03 ]</span>
          <span>Process — How we build</span>
        </div>

        <div
          style={{
            width: "50%",
            paddingLeft: sectionGutter,
            paddingRight: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "2rem",
          }}
          className="max-md:w-full max-md:px-8"
        >
          <div style={monoEyebrow}>[ Process ]</div>
          <h2
            className="text-balance pt-2 text-3xl font-light tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            style={{
              margin: 0,
              maxWidth: "12ch",
              lineHeight: 0.98,
            }}
          >
            How we build
          </h2>
          <TextRotate
            ref={textRotateRef}
            texts={STEPS.map((step) => step.title)}
            mainClassName="w-full flex pt-1 text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-[var(--text-on-ink)]"
            splitLevelClassName="overflow-hidden pb-2"
            staggerFrom="first"
            animatePresenceMode="wait"
            loop={false}
            auto={false}
            staggerDuration={0.01}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -36 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0 }}
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={active.n}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", duration: 0.6, bounce: 0 }}
            >
              <div style={{ ...monoEyebrow, marginBottom: "0.75rem" }}>
                [{active.n}] — {active.lens}
              </div>
              <p style={{ ...bodyCopy, margin: 0 }}>{active.body}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div
          style={{
            width: "50%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "3rem clamp(1.5rem, 4vw, 3rem)",
          }}
          className="max-md:hidden"
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "36rem",
              aspectRatio: "4 / 3",
              overflow: "hidden",
              border: "1px solid var(--hairline-ink)",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={active.image}
                src={active.image}
                alt={active.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArchivedProcessShowcase;
