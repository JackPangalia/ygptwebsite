"use client";

import * as React from "react";

import { motion, useScroll, useTransform } from "framer-motion";

export interface SmoothScrollHeroProps {
  /**
   * Height of the scroll section in pixels
   * @default 900
   */
  scrollHeight?: number;
  /**
   * URL under `/public/` (e.g. `public/vancouverharbour.webm` → `/vancouverharbour.webm`)
   */
  videoSrc?: string;
  initialClipPercentage?: number;
  finalClipPercentage?: number;
  children?: React.ReactNode;
  id?: string;
}

interface SmoothScrollHeroInnerProps {
  scrollHeight: number;
  videoSrc: string;
  children?: React.ReactNode;
}

const SmoothScrollHeroInner: React.FC<SmoothScrollHeroInnerProps> = ({
  scrollHeight,
  videoSrc,
  children,
}) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = () => {
      void v.play().catch(() => {});
    };
    tryPlay();
    v.addEventListener("loadeddata", tryPlay);
    return () => v.removeEventListener("loadeddata", tryPlay);
  }, [videoSrc]);

  const { scrollY } = useScroll();

  const videoScale = useTransform(scrollY, [0, scrollHeight], [1.08, 1]);

  return (
    <div className="smooth-hero-sticky flex w-full flex-col overflow-hidden bg-[var(--ink)]">
      <div aria-hidden={children ? true : undefined} className="absolute inset-0 z-0 bg-[var(--ink)]">
        <motion.div className="smooth-hero-video-wrap" style={{ scale: videoScale }}>
          <video
            ref={videoRef}
            src={videoSrc}
            className="smooth-hero-video"
            aria-hidden="true"
            playsInline
            autoPlay
            muted
            loop
            preload="auto"
          />
        </motion.div>
        <div className="smooth-hero-video-tint" aria-hidden="true" />
      </div>

      {children ? (
        <div className="smooth-hero-overlay">
          <div className="smooth-hero-stage">
            <div className="smooth-hero-content">{children}</div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const SmoothScrollHero: React.FC<SmoothScrollHeroProps> = ({
  scrollHeight: scrollHeightProp = 900,
  videoSrc = "/vancouverharbour.webm",
  children,
  id,
}) => {
  const [scrollHeight, setScrollHeight] = React.useState<number | null>(null);

  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const sync = () => {
      setScrollHeight(mq.matches ? Math.min(scrollHeightProp, 520) : scrollHeightProp);
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [scrollHeightProp]);

  const effectiveScroll = scrollHeight ?? scrollHeightProp;

  return (
    <div
      id={id}
      style={{ height: `calc(${effectiveScroll}px + var(--hero-frame-h, 100vh))` }}
      className="relative w-full bg-[var(--ink)]"
    >
      <SmoothScrollHeroInner scrollHeight={effectiveScroll} videoSrc={videoSrc}>
        {children}
      </SmoothScrollHeroInner>
    </div>
  );
};

export default SmoothScrollHero;
