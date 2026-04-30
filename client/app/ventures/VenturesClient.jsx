"use client";

import { useEffect } from "react";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

const SiteFooter = () => (
  <footer>
    <div className="container">
      <div className="footer-grid">
        <div>
          <h5>Centonis</h5>
          <p
            style={{
              fontSize: "15px",
              color: "var(--muted-ink)",
              maxWidth: "40ch",
              lineHeight: 1.5,
            }}
          >
            A studio designing and building websites, chatbots, and custom
            software.
          </p>
        </div>
        <div>
          <h5>Site</h5>
          <ul>
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/#process">Process</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/ventures">Ventures</Link></li>
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
);

const PRINCIPLES = [
  {
    n: "01",
    title: "Quiet bets, long horizons",
    body:
      "We build for years, not quarters. Each venture is small by design — a focused product with a clear reason to exist, given room to find its shape.",
    tag: "Patience",
  },
  {
    n: "02",
    title: "Craft over hype",
    body:
      "No launch theatre, no roadmap signalling. The work has to hold up on its own — in the details of how it feels, the speed of every interaction, the things we chose not to add.",
    tag: "Standard",
  },
  {
    n: "03",
    title: "Built with the studio",
    body:
      "Everything we learn from client work — the patterns, the tooling, the discipline — gets reinvested into what we build for ourselves. And the reverse, too.",
    tag: "Compounding",
  },
];

const VenturesClient = () => {
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
    <main className="ventures-page">
      <SiteHeader contactHref="/contact" />

      <section className="ventures-page-hero">
        <div className="container">
          <div
            className="eyebrow reveal"
            style={{ marginBottom: 28, display: "block" }}
          >
            [ Ventures / Internal ]
          </div>
          <div className="ventures-page-hero__grid">
            <h1 className="reveal">We also build our own.</h1>
            <p className="reveal reveal-delay-1">
              Alongside client work, Centonis runs a small set of internal
              software ventures — quiet bets, built with the same standard.
            </p>
          </div>
        </div>
      </section>

      <section style={{ borderTop: 0, padding: 0 }}>
        <div className="container">
          <figure className="ventures-figure reveal">
            <img
              src="/ventures-hero.png"
              alt="Light raking across architectural concrete forms"
            />
            <figcaption className="ventures-figure__caption">
              <span>[ Plate 01 ]</span>
              <span>Studio archive · 2026</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section style={{ borderTop: 0 }}>
        <div className="container">
          <div className="ventures-blurb">
            <div className="ventures-blurb-meta reveal">
              [ 01 / 03 ]<br />Approach
            </div>
            <div className="ventures-blurb-body reveal reveal-delay-1">
              <p>
                Most of what we make is for clients. Some of it is for us.
                Internal ventures are how we test the ideas the studio keeps
                returning to — small products, built deliberately, given the
                time to become real.
              </p>
              <p>
                We don&apos;t announce them early. We don&apos;t ship them to a
                calendar. They exist when they&apos;re worth existing — and not
                a moment before.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ borderTop: 0, paddingTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <div className="num">[ 02 / 03 ]</div>
            <div className="label">Principles — How we build internally</div>
          </div>
          <div className="principles">
            {PRINCIPLES.map((p) => (
              <div className="principle reveal" key={p.n}>
                <div className="p-num">{p.n}</div>
                <h3>{p.title}</h3>
                <div className="body">{p.body}</div>
                <div className="tag">{p.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ borderTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <div className="num">[ 03 / 03 ]</div>
            <div className="label">Currently — Quietly in motion</div>
          </div>
          <div className="ventures-detail-row">
            <figure className="ventures-figure ventures-figure--detail reveal">
              <img
                src="/ventures-detail.png"
                alt="A pale matte sphere resting in soft directional light"
              />
              <figcaption className="ventures-figure__caption">
                <span>[ Plate 02 ]</span>
                <span>In progress</span>
              </figcaption>
            </figure>
            <div className="detail-copy reveal reveal-delay-1">
              <h2>A few small things, taking their time.</h2>
              <p>
                We&apos;re heads-down on a handful of internal projects right
                now — tools that started as side problems in client work and
                grew into something worth building properly. We&apos;ll share
                more when there&apos;s something honest to share.
              </p>
              <div style={{ marginTop: 36 }}>
                <Link href="/contact" className="cta-pill">
                  Get in touch <span className="arrow">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
};

export default VenturesClient;
