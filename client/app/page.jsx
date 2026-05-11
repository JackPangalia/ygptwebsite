"use client";
import { useEffect } from "react";
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero";
import InteractivePortfolioSelector from "@/components/ui/interactive-portfolio-selector";
import ServicesShowcase from "./components/ServicesShowcase";
import ProcessShowcase from "./components/ProcessShowcase";
import BlogsShowcase from "./components/BlogsShowcase";
import SiteHeader from "./components/SiteHeader";
import { portfolioProjects } from "./portfolio/projects";

export default function HomePage() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <SiteHeader />

      {/* ── HERO ── */}
      <SmoothScrollHero id="hero" scrollHeight={900}>
        <div className="hero-lockup">
          <div className="hero-lockup__eyebrow">
            <span>[ 00 / 05 ]</span>
            <span className="dot" aria-hidden="true" />
            <span>Studio — Centonis</span>
          </div>
          <h1 className="hero-lockup__title">
            Websites and software that do the work.
          </h1>
          <p className="hero-lockup__copy">
            A design and engineering studio building high-performance websites, intelligent chatbots, and custom software for ambitious brands.
          </p>
          <div className="hero-lockup__actions">
            <a href="#contact" className="hero-cta hero-cta--primary">
              Contact <span className="arrow">↗</span>
            </a>
            <a href="#services" className="hero-cta hero-cta--secondary">
              Services <span className="arrow">↗</span>
            </a>
          </div>
        </div>
      </SmoothScrollHero>

      <ServicesShowcase />

      <section
        id="selected-work"
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          background: "var(--ink)",
          color: "var(--text-on-ink)",
          padding: `clamp(4rem, 10vh, 8rem) 0 clamp(6rem, 12vh, 9rem)`,
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
            padding: `0 var(--gutter)`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            fontFamily: "var(--mono)",
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--muted-ink)",
            pointerEvents: "none",
          }}
        >
          <span>[ 02 / 05 ]</span>
          <span>Work — Selected launches</span>
        </div>

        <div
          className="mx-auto max-w-[var(--page-max)]"
          style={{ padding: `0 var(--gutter)` }}
        >
          <div
            className="flex flex-col gap-8 reveal"
            style={{ maxWidth: "36rem", marginBottom: "clamp(42px, 7vw, 78px)" }}
          >
            <div style={{ fontFamily: "var(--mono)", color: "var(--muted-ink)", fontSize: "0.75rem", letterSpacing: "0.2em" }}>[ Work ]</div>
            <h2
              className="text-balance text-3xl font-light tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              style={{
                margin: 0,
                maxWidth: "14ch",
                lineHeight: 0.98,
              }}
            >
              A closer look at what the work becomes.
            </h2>
            <p style={{ color: "var(--muted-ink)", fontSize: "1.0625rem", lineHeight: 1.6, maxWidth: "28rem", margin: 0 }}>
              Real screens from recent sites, presented as live surfaces instead
              of flat thumbnails.
            </p>
          </div>
          <div className="reveal reveal-delay-1">
            <InteractivePortfolioSelector projects={portfolioProjects} />
          </div>
        </div>
      </section>

      <ProcessShowcase />

      <BlogsShowcase />

      {/* ── VENTURES ── */}
      <section id="ventures">
        <div className="container">
          <div className="section-header">
            <div className="num">[ 05 / 05 ]</div>
            <div className="label">Ventures — What we build internally</div>
          </div>
          <div className="ventures-grid">
            <div className="reveal">
              <div className="eyebrow" style={{ marginBottom: "20px" }}>[ Ventures ]</div>
              <div className="ventures-title ventures-title--sm">
                We also build our own.
              </div>
            </div>
            <div className="ventures-body reveal reveal-delay-1">
              <p>
                Alongside client work, Centonis builds and operates its own software products — quiet bets, built with the same standard.
              </p>
              <a href="/ventures" className="ventures-link">
                Learn more <span className="arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-eyebrow eyebrow reveal">[ Contact ]</div>
          <div className="contact-big reveal">
            Have something worth building?
          </div>
          <div className="contact-row reveal reveal-delay-1">
            <a
              href="mailto:centonisai@gmail.com"
              className="cta-pill"
            >
              centonisai@gmail.com <span className="arrow">↗</span>
            </a>
            <span className="contact-note">Currently taking on select projects.</span>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <h5>Centonis</h5>
              <p style={{ fontSize: "15px", color: "var(--muted-ink)", maxWidth: "40ch", lineHeight: 1.5 }}>
                A studio designing and building websites, chatbots, and custom software.
              </p>
            </div>
            <div>
              <h5>Site</h5>
              <ul>
                <li><a href="#services">Services</a></li>
                <li><a href="#process">Process</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="#ventures">Ventures</a></li>
              </ul>
            </div>
            <div>
              <h5>Contact</h5>
              <ul>
                <li><a href="mailto:centonisai@gmail.com">centonisai@gmail.com</a></li>
                <li><a href="#">Vancouver, BC</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div>© 2024–2026 Centonis</div>
            <div>Vancouver · 49.2827° N / 123.1207° W</div>
          </div>
        </div>
      </footer>
    </>
  );
}
