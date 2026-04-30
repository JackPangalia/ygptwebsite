"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/blog", label: "Blog" },
  { href: "/ventures", label: "Ventures" },
];

/**
 * @param {{ contactHref?: string }} props
 */
export default function SiteHeader({ contactHref = "/#contact" }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  /** Homepage #hero intersects the viewport — use glass-free bar over video */
  const [heroOverlapsViewport, setHeroOverlapsViewport] = useState(isHome);

  const transparentChrome = isHome && heroOverlapsViewport && !open;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const root = document.documentElement;
    if (open) root.classList.add("mobile-nav-open");
    else root.classList.remove("mobile-nav-open");
    return () => root.classList.remove("mobile-nav-open");
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useLayoutEffect(() => {
    if (!isHome) {
      setHeroOverlapsViewport(false);
      return undefined;
    }

    const hero = document.getElementById("hero");
    if (!hero) {
      setHeroOverlapsViewport(false);
      return undefined;
    }

    const update = () => {
      const r = hero.getBoundingClientRect();
      const overlaps =
        r.bottom > 12 &&
        r.top < (typeof window !== "undefined" ? window.innerHeight : 0);
      setHeroOverlapsViewport(overlaps);
    };

    update();

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    let ro;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(update);
      ro.observe(hero);
    }

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      ro?.disconnect();
    };
  }, [isHome]);

  return (
    <>
      <nav
        className={`top site-header mx-auto max-w-[var(--page-max)] w-full${
          transparentChrome ? " site-header--over-hero" : ""
        }`}
        aria-label="Primary"
      >
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          Centonis<span className="dot" />
        </Link>
        <div className="nav-links" role="navigation" aria-label="Sections">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </div>
        <div className="site-header__actions">
          <Link href={contactHref} className="cta-pill site-header__cta">
            Contact <span className="arrow">↗</span>
          </Link>
          <button
            type="button"
            className="site-header__menu-btn"
            aria-expanded={open}
            aria-controls="site-mobile-panel"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="site-header__menu-icon" aria-hidden>
              <span />
              <span />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              className="site-mobile-backdrop"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              id="site-mobile-panel"
              className="site-mobile-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="site-mobile-panel__inner">
                <ul className="site-mobile-links">
                  {NAV_LINKS.map(({ href, label }, i) => (
                    <motion.li
                      key={href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.05 + i * 0.05,
                        duration: 0.32,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link href={href} onClick={() => setOpen(false)}>
                        {label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  className="site-mobile-panel__cta-wrap"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.22,
                    duration: 0.32,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={contactHref}
                    className="cta-pill site-mobile-panel__cta"
                    onClick={() => setOpen(false)}
                  >
                    Contact <span className="arrow">↗</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
