"use client";

import { useRef, useState, useEffect } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

const SERVICES = [
  {
    n: "01",
    title: "Websites",
    kicker: "Presence",
    body: "Fast, clear sites built to convert — structure, design, and performance in one pass.",
    image: "/service-websites-van.png",
  },
  {
    n: "02",
    title: "SEO",
    kicker: "Discovery",
    body: "Technical basics and content direction so the right searches find you.",
    image: "/service-seo-van.png",
  },
  {
    n: "03",
    title: "Social Media Marketing",
    kicker: "Demand",
    body: "Campaign rhythm and creative that keep your brand visible without noise.",
    image: "/service-social-van.png",
  },
  {
    n: "04",
    title: "Website Chatbots",
    kicker: "Assist",
    body: "Embedded assistants for FAQs, routing, and light qualification on your site.",
    image: "/service-chatbots-van.png",
  },
  {
    n: "05",
    title: "Custom Solutions",
    kicker: "Operations",
    body: "When off-the-shelf fails: we map the problem and ship the right tool.",
    image: "/service-custom-van.png",
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

const sectionGutter = "var(--gutter)";
const DESKTOP_SCROLL_VH = 170;

export default function ServicesShowcase() {
  const sectionRef = useRef(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollVh, setScrollVh] = useState(DESKTOP_SCROLL_VH);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const sync = () => {
      setScrollVh(mq.matches ? 118 : DESKTOP_SCROLL_VH);
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const targetIndex = Math.min(
      SERVICES.length - 1,
      Math.max(0, Math.floor(progress * SERVICES.length)),
    );
    const currentIndex = activeIndexRef.current;

    if (targetIndex === currentIndex) return;

    const nextIndex =
      targetIndex > currentIndex ? currentIndex + 1 : currentIndex - 1;

    activeIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);
  });

  const active = SERVICES[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="services"
      style={{
        position: "relative",
        width: "100%",
        height: `${SERVICES.length * scrollVh}vh`,
        background: "var(--ink)",
        color: "var(--text-on-ink)",
        borderTop: 0,
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
            maxWidth: "var(--page-max)",
            margin: "0 auto",
            top: "clamp(1.75rem, 6vh, 3rem)",
            left: 0,
            right: 0,
            padding: `0 ${sectionGutter}`,
            boxSizing: "border-box",
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
          <span>[ 01 / 04 ]</span>
          <span>Services — What we do</span>
        </div>

        <div
          className="services-sticky-layout"
          style={{
            width: "100%",
            maxWidth: "var(--page-max)",
            margin: "0 auto",
            padding: `0 ${sectionGutter}`,
            boxSizing: "border-box",
            display: "grid",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "clamp(1.5rem, 3vh, 2.25rem)",
            }}
          >
            <div style={monoEyebrow}>[ Services ]</div>
            <h2
              className="text-balance pt-2 text-3xl font-light tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              style={{
                margin: 0,
                maxWidth: "11ch",
                lineHeight: 0.98,
              }}
            >
              Services
            </h2>
            <AnimatePresence mode="wait">
              <motion.h3
                key={active.title}
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -36 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="text-balance text-2xl font-light tracking-tight text-[var(--text-on-ink)] sm:text-3xl md:text-4xl"
                style={{ margin: 0, lineHeight: 1.04 }}
              >
                {active.title}
              </motion.h3>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.n}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
              >
                <div style={{ ...monoEyebrow, marginBottom: "0.75rem" }}>
                  [{active.n}] — {active.kicker}
                </div>
                <p style={{ ...bodyCopy, margin: 0 }}>{active.body}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            className="services-showcase-visual mt-8 w-full md:mt-0 lg:justify-self-end"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <div
              className="relative max-md:max-h-[min(52vh,340px)] max-md:aspect-[4/3] min-h-[200px]"
              style={{
                position: "relative",
                width: "min(100%, 38rem)",
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
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
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
      </div>
    </section>
  );
}
