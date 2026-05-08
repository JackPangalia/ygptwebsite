import Link from "next/link";
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

const ProjectPlate = ({ project, index }) => (
  <div className={`portfolio-plate portfolio-plate--${project.palette}`}>
    <div className="portfolio-plate__chrome">
      <span>{project.client}</span>
      <span>{String(index + 1).padStart(2, "0")}</span>
    </div>
    <div className="portfolio-plate__canvas" style={project.image ? { padding: 0, overflow: 'hidden' } : {}}>
      {project.image ? (
        <img 
          src={project.image} 
          alt={project.title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'relative', zIndex: 10 }} 
        />
      ) : (
        <>
          <div className="portfolio-plate__orb" />
          <div className="portfolio-plate__grid">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="portfolio-plate__panel portfolio-plate__panel--main">
            <span />
            <span />
            <span />
          </div>
          <div className="portfolio-plate__panel portfolio-plate__panel--side">
            <span />
            <span />
          </div>
        </>
      )}
    </div>
    <div className="portfolio-plate__caption">
      <span>{project.type}</span>
      <span>{project.year}</span>
    </div>
  </div>
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
          <div className="blog-index-list__header">
            <span>[ Cases ]</span>
            <span>{String(portfolioProjects.length).padStart(2, "0")}</span>
          </div>

          <div className="portfolio-case-grid">
            {portfolioProjects.map((project, index) => (
              <article
                className="portfolio-case-card"
                key={project.slug}
                aria-label={`${project.client}: ${project.title}`}
              >
                <ProjectPlate project={project} index={index} />
                <div className="portfolio-case-card__body">
                  <div className="portfolio-case-card__meta">
                    <span>{project.client}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p style={{ marginTop: '0.75rem', fontSize: '15px', color: 'var(--muted-ink)' }}>
                    {project.summary}
                  </p>
                  {project.link && (
                    <div style={{ marginTop: '1.5rem' }}>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="cta-pill"
                        style={{ display: 'inline-flex', padding: '0.6rem 1.25rem', fontSize: '13px' }}
                      >
                        Visit Site <span className="arrow" style={{ marginLeft: '6px' }}>↗</span>
                      </a>
                    </div>
                  )}
                </div>
              </article>
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
