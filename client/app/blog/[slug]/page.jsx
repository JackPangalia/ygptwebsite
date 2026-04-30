import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "../posts";
import SiteHeader from "../../components/SiteHeader";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Blog Post | Centonis",
    };
  }

  return {
    title: `${post.title} | Centonis`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://www.centonis.com/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((candidate) => candidate.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className="blog-page">
      <SiteHeader />

      <article className="blog-article">
        <header className="blog-article-hero">
          <div className="container">
            <Link href="/blog" className="blog-back-link">
              ← Back to journal
            </Link>
            <div className="blog-article-hero__meta">
              <span>{post.category}</span>
              <span>{post.readTime}</span>
            </div>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
          </div>
        </header>

        <div className="blog-article-body">
          <div className="blog-article-body__rail" aria-hidden="true">
            <span>[ Article ]</span>
            <span>{post.category}</span>
          </div>

          <div className="blog-article-content">
            {post.sections.map((section, index) => (
              <section className="blog-article-section" key={`${section.heading || "intro"}-${index}`}>
                {section.heading ? <h2>{section.heading}</h2> : null}
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.listIntro ? <p>{section.listIntro}</p> : null}
                {section.list ? (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {section.afterList?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </article>

      <section className="blog-related">
        <div className="container">
          <div className="blog-related__header">
            <span>[ Keep Reading ]</span>
            <Link href="/blog">All posts ↗</Link>
          </div>
          <div className="blog-related__grid">
            {relatedPosts.map((related, index) => (
              <Link
                href={`/blog/${related.slug}`}
                className="blog-card-shared"
                key={related.slug}
                style={{
                  minHeight: "20rem",
                  padding: "clamp(1.5rem, 2vw, 2.25rem)"
                }}
              >
                <div
                  className="blog-card-shared__bg"
                  style={{ backgroundImage: `url(${related.image})` }}
                />
                <div className="blog-card-shared__gradient" />
                <div className="blog-card-shared__line" />

                <div className="blog-card-shared__content">
                  <div className="blog-card-shared__meta" style={{ marginBottom: "auto" }}>
                    <span>[{String(index + 1).padStart(2, "0")}]</span>
                    <span>{related.readTime}</span>
                  </div>

                  <div style={{ marginTop: "1rem" }}>
                    <span className="blog-card-shared__category">{related.category}</span>
                    <h3 style={{ fontSize: "clamp(20px, 2vw, 28px)", maxWidth: "18ch", marginBottom: 0 }}>
                      {related.title}
                    </h3>
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
