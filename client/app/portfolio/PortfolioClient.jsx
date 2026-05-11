import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import { portfolioProjects } from "./projects";

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
            <li><Link href="/portfolio">Portfolio</Link></li>
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

export default function PortfolioClient() {
  return (
    <main className="portfolio-page">
      <SiteHeader contactHref="/contact" />

      <section className="blog-index-hero">
        <div className="container">
          <div className="blog-index-hero__meta">
            <span>[ Portfolio ]</span>
            <span>Selected work</span>
          </div>
          <div className="blog-index-hero__grid">
            <h1>Work across web, AI, and custom systems.</h1>
            <p>
              Websites, AI assistants, and custom software — built as one system.
            </p>
          </div>
        </div>
      </section>

      <section className="blog-index-list portfolio-work-section" id="selected-work">
        <div className="container">
          <div className="portfolio-grid" aria-label="Selected portfolio projects">
            {portfolioProjects.map((project, index) => (
              <a
                aria-label={`View ${project.client}: ${project.title}`}
                className="portfolio-grid-card"
                href={project.link}
                key={project.slug}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="portfolio-grid-card__media">
                  {project.image ? (
                    <Image
                      alt={project.title}
                      fill
                      priority={index < 2}
                      quality={100}
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      src={project.image}
                    />
                  ) : null}
                  <span className="portfolio-grid-card__shade" aria-hidden="true" />
                  <span className="portfolio-grid-card__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="portfolio-grid-card__body">
                  <div className="portfolio-grid-card__meta">
                    <span>{project.type}</span>
                    <span>{project.year}</span>
                  </div>
                  <div className="portfolio-grid-card__heading">
                    <h2>{project.client}</h2>
                    <span>View project ↗</span>
                  </div>
                  <p className="portfolio-grid-card__title">{project.title}</p>
                  <p className="portfolio-grid-card__summary">{project.summary}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-end-cta">
        <div className="container portfolio-end-cta__inner">
          <p>Starting something similar?</p>
          <Link href="/contact" className="cta-pill">
            Contact <span className="arrow">↗</span>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
