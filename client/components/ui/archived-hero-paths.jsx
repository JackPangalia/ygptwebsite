"use client";

import { useEffect, useRef } from "react";
import { FloatingPaths } from "@/components/ui/background-paths";

export function ArchivedHeroPaths() {
  const heroBgRef = useRef(null);

  useEffect(() => {
    const bg = heroBgRef.current;
    if (!bg) return;

    const onScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      if (y < vh * 1.2) {
        bg.style.transform = `translate3d(0, ${y * 0.25}px, 0) scale(${1 + y * 0.0005})`;
        bg.style.opacity = String(Math.max(0, 1 - y / (vh * 0.9)));
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="hero-bg" ref={heroBgRef} aria-hidden="true">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  );
}
