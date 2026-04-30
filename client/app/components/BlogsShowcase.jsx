"use client";

import Link from "next/link";
import { Scroller } from "@/components/ui/scroller-1";
import { blogPosts } from "@/app/blog/posts";

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

function BlogsShowcase() {
  return (
    <section
      id="blogs"
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        background: "var(--ink)",
        color: "var(--text-on-ink)",
        borderTop: "1px solid var(--hairline-ink)",
        padding: `clamp(8rem, 14vh, 11rem) 0 clamp(6rem, 12vh, 9rem)`,
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
        <span>[ 03 / 04 ]</span>
        <span>Blogs — Notes and thinking</span>
      </div>

      <div
        className="mx-auto grid max-w-[var(--page-max)] items-end gap-10 lg:grid-cols-[minmax(16rem,0.72fr)_minmax(0,1.8fr)]"
        style={{ padding: `0 ${sectionGutter}` }}
      >
        <div className="flex flex-col gap-8" style={{ maxWidth: "36rem" }}>
          <div style={monoEyebrow}>[ Blogs ]</div>
          <h2
            className="text-balance text-3xl font-light tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            style={{
              margin: 0,
              maxWidth: "11ch",
              lineHeight: 0.98,
            }}
          >
            Writing
          </h2>
          <p style={{ ...bodyCopy, margin: 0 }}>
            Notes, ideas, and practical thinking from the work we do.
          </p>
        </div>

        <Scroller
          childrenContainerClassName="gap-4 pb-1 pr-4"
          height="auto"
          overflow="x"
          width="100%"
          withButtons
        >
          {blogPosts.map(({ slug, category, readTime, title, image }, index) => (
            <article
              key={slug}
              style={{
                position: "relative",
                width: "clamp(17.5rem, 88vw, 25rem)",
                height: "clamp(22rem, 56svh, 36rem)",
                flexShrink: 0,
                overflow: "hidden",
                border: "1px solid rgba(247, 241, 230, 0.08)",
                background: "rgba(247, 241, 230, 0.012)",
                padding: "clamp(1.375rem, 2.2vw, 2rem)",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.68,
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, rgba(10,10,11,0.88) 0%, rgba(10,10,11,0.28) 48%, rgba(10,10,11,0.7) 100%)",
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "1px",
                  background:
                    "linear-gradient(90deg, rgba(247, 241, 230, 0.32), transparent 72%)",
                  opacity: 0.35,
                }}
              />

              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <div>
                  <h3
                    className="text-2xl font-light tracking-tight sm:text-3xl md:text-4xl text-[var(--text-on-ink)]"
                    style={{ margin: "0", lineHeight: 1.08, maxWidth: "15ch" }}
                  >
                    {title}
                  </h3>
                </div>

                <div style={{ marginTop: "auto" }}>
                  <Link
                    href={`/blog/${slug}`}
                    style={{
                      ...monoEyebrow,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "var(--text-on-ink)",
                      textDecoration: "none",
                      paddingBottom: "6px",
                      borderBottom: "1px solid var(--hairline-ink)",
                    }}
                    className="blog-link-hover"
                  >
                    Read article <span className="arrow">↗</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </Scroller>
      </div>
    </section>
  );
}

export default BlogsShowcase;
