"use client";

import { useState } from "react";
import Link from "next/link";

type Post = {
  href: string;
  date: string;
  cat: string;
  catKey: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  image?: string;
};

type Category = {
  key: string;
  label: string;
};

interface BlogListingProps {
  posts: Post[];
  categories: Category[];
}

function parseDate(dateStr: string): Date {
  const [day, month, year] = dateStr.split(" / ").map(Number);
  return new Date(year, month - 1, day);
}

export default function BlogListing({ posts, categories }: BlogListingProps) {
  const [active, setActive] = useState("alle");
  const [sortAsc, setSortAsc] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const published = posts.filter((p) => parseDate(p.date) <= today);
  const filtered = (active === "alle" ? published : published.filter((p) => p.catKey === active));
  const sorted = [...filtered].sort((a, b) => {
    const diff = parseDate(b.date).getTime() - parseDate(a.date).getTime();
    return sortAsc ? -diff : diff;
  });

  return (
    <>
      <div className="blog-filters" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`blog-filter-btn${active === cat.key ? " active" : ""}`}
              onClick={() => setActive(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button
            className={`blog-filter-btn${!sortAsc ? " active" : ""}`}
            onClick={() => setSortAsc(false)}
          >
            Nyeste først
          </button>
          <button
            className={`blog-filter-btn${sortAsc ? " active" : ""}`}
            onClick={() => setSortAsc(true)}
          >
            Ældste først
          </button>
        </div>
      </div>

      <div className="post-grid">
        {sorted.map((post) => (
          <Link key={post.href} href={post.href} className="post-card">
            <div className="post-card-inner">
              <div className="post-card-content">
                <span className="post-date">{post.date}</span>
                <span className="post-cat">{post.cat}</span>
                <p className="post-title">{post.title}</p>
                {post.subtitle && <p className="post-subtitle">{post.subtitle}</p>}
                <p className="post-excerpt">{post.excerpt}</p>
                <span className="post-link">Læs mere →</span>
              </div>
              {post.image && (
                <div className="post-card-image">
                  <img src={post.image} alt={post.title.includes("Arkitekttegnestuen Yderskov") ? post.title : `${post.title} — Arkitekttegnestuen Yderskov`} />
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
