import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { getPost, posts, type RelatedLink } from "../posts";

function parseParagraph(text: string) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    const [fullMatch, label, url] = match;
    const matchIndex = match.index;

    if (matchIndex > lastIndex) {
      parts.push(text.substring(lastIndex, matchIndex));
    }

    const isExternal = url.startsWith("http");
    if (isExternal) {
      parts.push(
        <a key={matchIndex} href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>
          {label}
        </a>
      );
    } else {
      parts.push(
        <Link key={matchIndex} href={url} style={{ textDecoration: "underline" }}>
          {label}
        </Link>
      );
    }

    lastIndex = linkRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

const categoryLinks: Record<string, RelatedLink[]> = {
  villa: [
    { label: "Læs om Yderskov som arkitekt i Aalborg", href: "/arkitekt-aalborg" },
    { label: "Se vores villaprojekter med billeder", href: "/villaer" },
    { label: "Se om- og tilbygninger med billeder", href: "/tilbygninger" },
  ],
  sommerhus: [
    { label: "Se vores sommerhusprojekter med billeder", href: "/sommerhuse" },
    { label: "Beregn prisen på dit sommerhus", href: "/prisberegner" },
  ],
  arkitekt: [
    { label: "Læs om Yderskov som arkitekt i Aalborg", href: "/arkitekt-aalborg" },
    { label: "Beregn prisen på dit projekt", href: "/prisberegner" },
    { label: "Se vores priser", href: "/priser" },
  ],
  grund: [
    { label: "Læs om Yderskov som arkitekt i Aalborg", href: "/arkitekt-aalborg" },
    { label: "Se vores villaprojekter med billeder", href: "/villaer" },
    { label: "Se vores sommerhusprojekter med billeder", href: "/sommerhuse" },
  ],
  boligdetalje: [
    { label: "Læs om Yderskov som arkitekt i Aalborg", href: "/arkitekt-aalborg" },
    { label: "Se vores villaprojekter med billeder", href: "/villaer" },
    { label: "Se om- og tilbygninger med billeder", href: "/tilbygninger" },
  ],
};

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.description,
    alternates: { canonical: `https://yderskov.com/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const dateParts = post.date.split("/").map((s) => s.trim());
  const dateISO = dateParts.length === 3 ? `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}` : undefined;

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": dateISO,
    "author": {
      "@type": "Organization",
      "name": "Yderskov Arkitekter",
      "url": "https://yderskov.com/",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Yderskov Arkitekter",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yderskov.com/favicon.svg",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://yderskov.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Nav />

      <article>
        {/* Article header */}
        <section className="s" style={{ paddingBottom: "3rem" }}>
          <div className="s-inner" style={{ maxWidth: "740px" }}>
            <span className="eyebrow">{post.cat}</span>
            <h1
              className="sec-hed"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", marginBottom: "1.5rem" }}
            >
              {post.title}
            </h1>
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 300,
                color: "var(--light)",
                letterSpacing: "0.08em",
                marginBottom: "2rem",
              }}
            >
              {post.date}
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                fontWeight: 300,
                color: "var(--sub)",
                lineHeight: 1.75,
                borderLeft: "3px solid var(--border)",
                paddingLeft: "1.25rem",
              }}
            >
              {parseParagraph(post.lead)}
            </p>
            {post.images && post.images.length > 0 ? (
              <div className="blog-gallery">
                {post.images.map((img, index) => (
                  <div key={index} style={{ borderRadius: "12px", overflow: "hidden", aspectRatio: "4/3", position: "relative" }}>
                    <img src={img} alt={`${post.title} - billede ${index + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                ))}
              </div>
            ) : post.image ? (
              <div style={{ marginTop: "2.5rem", borderRadius: "12px", overflow: "hidden", aspectRatio: "16/10", position: "relative" }}>
                <img src={post.image} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ) : null}
          </div>
        </section>

        {/* Article body */}
        <section
          className="s"
          style={{ paddingTop: "2rem", background: "var(--off)" }}
        >
          <div className="s-inner" style={{ maxWidth: "740px" }}>
            {post.sections.map((section, i) =>
              section.type === "case" ? (
                <div key={i} className="case-block">
                  <span className="case-pill">Cases fra praksis</span>
                  <h2
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 400,
                      color: "var(--text)",
                      letterSpacing: "-0.02em",
                      marginBottom: "0.85rem",
                    }}
                  >
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="body-p">
                      {parseParagraph(p)}
                    </p>
                  ))}
                </div>
              ) : (
                <div key={i} style={{ marginBottom: "2.5rem" }}>
                  <h2
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 400,
                      color: "var(--text)",
                      letterSpacing: "-0.02em",
                      marginBottom: "0.85rem",
                    }}
                  >
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="body-p">
                      {parseParagraph(p)}
                    </p>
                  ))}
                </div>
              )
            )}
          </div>
        </section>

        {/* Se også */}
        {(() => {
          const links = post.relatedLinks ?? categoryLinks[post.catKey] ?? [];
          if (links.length === 0) return null;
          return (
            <section className="s" style={{ paddingTop: "1rem", paddingBottom: "0" }}>
              <div className="s-inner" style={{ maxWidth: "740px" }}>
                <div className="see-also">
                  <p className="see-also-label">Se også</p>
                  <div className="see-also-links">
                    {links.map((l, i) => (
                      <Link key={i} href={l.href} className="see-also-link">
                        {l.label} →
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })()}

        {/* CTA strip */}
        <section className="s" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
          <div className="s-inner" style={{ maxWidth: "740px" }}>
            <div
              style={{
                background: "var(--dark)",
                borderRadius: "16px",
                padding: "2.5rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "2rem",
                flexWrap: "wrap",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: 300,
                    color: "#fff",
                    marginBottom: "0.4rem",
                  }}
                >
                  Gratis og uforpligtende første møde
                </p>
                <p style={{ fontSize: "0.8rem", fontWeight: 300, color: "rgba(255,255,255,0.55)" }}>
                  Vi svarer inden 24 timer
                </p>
              </div>
              <Link
                href="/kontakt"
                style={{
                  background: "#fff",
                  color: "var(--text)",
                  borderRadius: "980px",
                  padding: "0.6rem 1.4rem",
                  fontSize: "0.82rem",
                  fontWeight: 400,
                  whiteSpace: "nowrap",
                }}
              >
                Book gratis møde →
              </Link>
            </div>
          </div>
        </section>
      </article>

      {/* Contact form */}
      <section className="s form-bg">
        <div className="s-inner" style={{ maxWidth: "900px" }}>
          <div className="form-layout">
            <div className="form-meta">
              <span className="eyebrow">Kontakt os</span>
              <h2 className="sec-hed">Fortæl os om<br />dit projekt</h2>
              <p style={{ marginTop: "1.5rem" }}>
                Ring eller skriv til os. Vi svarer inden 24 timer og tilbyder et gratis, uforpligtende møde.
              </p>
              <p>
                <a href="tel:29723427">29 72 34 27</a>
              </p>
              <p>
                <a href="mailto:cy@yderskov.com">cy@yderskov.com</a>
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* More posts */}
      <div className="blog-bg">
        <div className="blog-inner">
          <div className="blog-head">
            <h2 className="sec-hed">Flere indlæg</h2>
            <Link href="/blog" className="blog-see">
              Se alle →
            </Link>
          </div>
          <div className="bgrid">
            {posts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="bcard">
                  <span className="bdate">{p.date}</span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <span className="blink">Læs mere →</span>
                </Link>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
