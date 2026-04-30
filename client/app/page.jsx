"use client";
import { useEffect } from "react";
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero";
import ServicesShowcase from "./components/ServicesShowcase";
import ProcessShowcase from "./components/ProcessShowcase";
import BlogsShowcase from "./components/BlogsShowcase";
import SiteHeader from "./components/SiteHeader";

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
          <h1 className="display-l hero-lockup__title">
            Scaling human potential through intelligent software.
          </h1>
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

      <ProcessShowcase />

      <BlogsShowcase />

      {/* ── VENTURES ── */}
      <section id="ventures">
        <div className="container">
          <div className="section-header">
            <div className="num">[ 04 / 04 ]</div>
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
