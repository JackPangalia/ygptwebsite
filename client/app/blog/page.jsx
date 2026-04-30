import Link from "next/link";
import { blogPosts } from "./posts";
import SiteHeader from "../components/SiteHeader";

export const metadata = {
  title: "Blog | Centonis",
  description:
    "Practical writing from Centonis on websites, SEO, AI chatbots, and building better digital systems for small businesses.",
};

export default function BlogIndexPage() {
  return (
    <main className="blog-page">
      <SiteHeader />

      <section className="blog-index-hero">
        <div className="container">
          <div className="blog-index-hero__meta">
            <span>[ Journal ]</span>
            <span>Centonis writing</span>
          </div>
          <div className="blog-index-hero__grid">
            <h1>Practical notes on websites, SEO, and AI systems.</h1>
            <p>
              Clear thinking for small businesses that want their digital presence
              to do real work: get found, build trust, and convert better.
            </p>
          </div>
        </div>
      </section>

      <section className="blog-index-list">
        <div className="container">
          <div className="blog-index-list__header">
            <span>[ All Posts ]</span>
            <span>{String(blogPosts.length).padStart(2, "0")} essays</span>
          </div>

          <div className="blog-index-grid">
            {blogPosts.map((post, index) => (
              <Link
                href={`/blog/${post.slug}`}
                className="blog-card-shared"
                key={post.slug}
                style={{
                  minHeight: "24rem",
                  padding: "clamp(1.5rem, 2vw, 2.25rem)"
                }}
              >
                <div
                  className="blog-card-shared__bg"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <div className="blog-card-shared__gradient" />
                <div className="blog-card-shared__line" />

                <div className="blog-card-shared__content">
                  <div className="blog-card-shared__meta">
                    <span>[{String(index + 1).padStart(2, "0")}]</span>
                    <span>{post.readTime}</span>
                  </div>

                  <div style={{ marginTop: "auto" }}>
                    <span className="blog-card-shared__category">{post.category}</span>
                    <h3 style={{ maxWidth: "15ch" }}>{post.title}</h3>
                    <span className="blog-card-shared__link">
                      Read article <span className="arrow">↗</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
