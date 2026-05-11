"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type PortfolioProject = {
  slug: string;
  client: string;
  title: string;
  year: string;
  type: string;
  status?: string;
  summary: string;
  services?: string[];
  outcome?: string;
  image?: string;
  link?: string;
};

type InteractivePortfolioSelectorProps = {
  projects: PortfolioProject[];
};

export default function InteractivePortfolioSelector({
  projects,
}: InteractivePortfolioSelectorProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  const projectCount = useMemo(
    () => String(projects.length).padStart(2, "0"),
    [projects.length],
  );

  if (!activeProject) {
    return null;
  }

  return (
    <div className="portfolio-selector" aria-label="Selected portfolio work">
      <div className="portfolio-selector__desktop" role="list">
        {projects.map((project, index) => {
          const isActive = index === activeIndex;
          const imageSizes = isActive
            ? "(min-width: 1600px) 1500px, (min-width: 1024px) 86vw, 100vw"
            : "(min-width: 1024px) 28vw, 100vw";

          return (
            <article
              aria-label={`${project.client}: ${project.title}`}
              className="portfolio-selector__panel"
              data-active={isActive}
              key={project.slug}
              onClick={() => {
                if (isActive && project.link) {
                  window.open(project.link, "_blank", "noopener,noreferrer");
                } else {
                  setActiveIndex(index);
                }
              }}
              onFocus={() => setActiveIndex(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  if (isActive && project.link) {
                    window.open(project.link, "_blank", "noopener,noreferrer");
                  } else {
                    setActiveIndex(index);
                  }
                }
              }}
              onMouseEnter={() => setActiveIndex(index)}
              role="listitem"
              style={{ flex: isActive ? "7 1 0%" : "1 1 0%" }}
              tabIndex={0}
            >
              {project.image ? (
                <Image
                  alt={project.title}
                  className="portfolio-selector__image"
                  fill
                  priority={index === 0}
                  quality={100}
                  sizes={imageSizes}
                  src={project.image}
                  style={{
                    cursor: isActive && project.link ? "pointer" : "default"
                  }}
                />
              ) : null}
              <div className="portfolio-selector__shade" aria-hidden="true" />

              <div 
                className="absolute bottom-6 right-6 z-20 flex flex-col gap-1.5 p-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md transition-opacity duration-700 max-w-[280px]"
                style={{ 
                  opacity: isActive ? 1 : 0, 
                  pointerEvents: "none",
                  transitionDelay: isActive ? "300ms" : "0ms" 
                }}
              >
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-mono text-[rgba(247,241,230,0.7)]">
                  <span className="block w-1.5 h-1.5 rounded-full bg-[rgba(247,241,230,0.6)] animate-pulse" />
                  Click to visit site
                </div>
                <h3 className="m-0 text-[rgba(247,241,230,0.98)] text-[15px] font-medium leading-tight tracking-tight">
                  {project.client}
                </h3>
                <p className="m-0 text-[rgba(247,241,230,0.75)] text-[13px] leading-snug text-balance">
                  {project.title}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="portfolio-selector__mobile" role="list">
        {projects.map((project, index) => {
          const isActive = index === activeIndex;

          return (
            <article
              className="portfolio-selector__mobile-card"
              data-active={isActive}
              key={project.slug}
              role="listitem"
            >
              <button
                aria-expanded={isActive}
                aria-label={`Show ${project.client} project`}
                className="portfolio-selector__mobile-trigger"
                onClick={() => setActiveIndex(index)}
                type="button"
              >
                {project.image ? (
                  <Image
                    alt={project.title}
                    className="portfolio-selector__mobile-image"
                    fill
                    priority={index === 0}
                    quality={100}
                    sizes="100vw"
                    src={project.image}
                  />
                ) : null}
                <span className="portfolio-selector__mobile-shade" aria-hidden="true" />
                <span className="portfolio-selector__mobile-meta">
                  <span>
                    {String(index + 1).padStart(2, "0")} / {projectCount}
                  </span>
                  <span>{project.type}</span>
                </span>
                <span
                  aria-hidden={!isActive}
                  className="portfolio-selector__mobile-copy"
                >
                  <span className="portfolio-selector__mobile-client">
                    {project.client}
                  </span>
                  <span className="portfolio-selector__mobile-title">
                    {project.title}
                  </span>
                </span>
              </button>

              {isActive && project.link ? (
                <a
                  className="portfolio-selector__mobile-link"
                  href={project.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View site <span>↗</span>
                </a>
              ) : null}
            </article>
          );
        })}
      </div>
    </div>
  );
}
