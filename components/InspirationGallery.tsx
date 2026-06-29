"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { inspirationImages, type GalleryImage } from "./inspiration-images";

const categories = [
  { id: "all", label: "Alle" },
  { id: "villaer", label: "Villaer" },
  { id: "sommerhuse", label: "Sommerhuse" },
  { id: "indendørs", label: "Indendørs" },
  { id: "udendørs", label: "Udendørs & Terrasser" },
  { id: "skitser", label: "Skitser" },
];

function getCategoriesForImage(img: GalleryImage): string[] {
  const alt = img.alt.toLowerCase();
  const cats: string[] = [];
  
  if (alt.includes("sommerhus") || alt.includes("poolhus")) {
    cats.push("sommerhuse");
  }
  
  if (
    alt.includes("villa") ||
    alt.includes("funkis") ||
    alt.includes("parcelhus") ||
    alt.includes("lejlighed") ||
    alt.includes("rækkehuse") ||
    alt.includes("udlejningsbolig")
  ) {
    cats.push("villaer");
  }
  
  if (
    alt.includes("køkken") ||
    alt.includes("stue") ||
    alt.includes("bad") ||
    alt.includes("toilet") ||
    alt.includes("soveværelse") ||
    alt.includes("kontor") ||
    alt.includes("indendørs") ||
    alt.includes("spiseområde") ||
    alt.includes("gang") ||
    alt.includes("glasvæg")
  ) {
    cats.push("indendørs");
  }
  
  if (
    alt.includes("terrasse") ||
    alt.includes("have") ||
    alt.includes("udebruser") ||
    alt.includes("gårdmiljø") ||
    alt.includes("ude og inde")
  ) {
    cats.push("udendørs");
  }
  
  if (alt.includes("skitse") || alt.includes("skitseforslag") || alt.includes("tegning")) {
    cats.push("skitser");
  }

  if (cats.length === 0) {
    cats.push("villaer");
  }

  return cats;
}

export default function InspirationGallery() {
  const images = inspirationImages;
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selected, setSelected] = useState<number | null>(null);
  const [limit, setLimit] = useState(24);

  const filteredImages = activeCategory === "all"
    ? images
    : images.filter((img) => getCategoriesForImage(img).includes(activeCategory));

  const close = useCallback(() => setSelected(null), []);

  const prev = useCallback(() => {
    setSelected((i) => (i === null ? null : (i - 1 + filteredImages.length) % filteredImages.length));
  }, [filteredImages.length]);

  const next = useCallback(() => {
    setSelected((i) => (i === null ? null : (i + 1) % filteredImages.length));
  }, [filteredImages.length]);

  useEffect(() => {
    if (selected === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [selected, close, prev, next]);

  const activeImg = selected !== null ? filteredImages[selected] : null;
  const visibleImages = filteredImages.slice(0, limit);

  return (
    <>
      {/* Category filters */}
      <div 
        className="gallery-filters" 
        style={{ 
          display: "flex", 
          gap: "0.5rem", 
          justifyContent: "center", 
          flexWrap: "wrap", 
          marginBottom: "2.5rem" 
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.id);
              setLimit(24);
            }}
            className={`tag ${activeCategory === cat.id ? "tag-dark" : ""}`}
            style={{
              cursor: "pointer",
              border: "1px solid var(--border)",
              padding: "0.5rem 1.1rem",
              fontSize: "0.78rem",
              fontWeight: 400,
              background: activeCategory === cat.id ? "var(--text)" : "transparent",
              color: activeCategory === cat.id ? "#fff" : "var(--sub)",
              borderRadius: "6px",
              fontFamily: "var(--sans)",
              letterSpacing: "0.02em",
              transition: "all 0.15s ease",
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="insp-grid">
        {visibleImages.map((img, i) => (
          <div
            key={i}
            className="insp-item"
            onClick={() => setSelected(i)}
            role="button"
            aria-label={img.alt}
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setSelected(i)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={600}
              className={img.rotateMobile ? "insp-rotate-mobile" : ""}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                ...(img.rotate ? { transform: "rotate(90deg)", transformOrigin: "center" } : {}),
                ...(img.rotateCCW ? { transform: "rotate(-90deg)", transformOrigin: "center" } : {}),
              }}
              sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 25vw"
            />
          </div>
        ))}
      </div>

      {limit < filteredImages.length && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem", marginBottom: "1.5rem" }}>
          <button
            onClick={() => setLimit((prev) => prev + 24)}
            className="tag tag-dark"
            style={{ cursor: "pointer", border: "none", padding: "0.8rem 2rem", fontSize: "0.9rem" }}
          >
            Vis flere billeder →
          </button>
        </div>
      )}

      {selected !== null && activeImg && (
        <div className="lb-backdrop" onClick={close} role="dialog" aria-modal="true">
          <button className="lb-close" onClick={close} aria-label="Luk">✕</button>

          <button
            className="lb-arrow lb-prev"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Forrige"
          >‹</button>

          <div className="lb-img-wrap" onClick={(e) => e.stopPropagation()}>
            <Image
              src={activeImg.src}
              alt={activeImg.alt}
              width={1600}
              height={1200}
              style={{
                maxWidth: "90vw",
                maxHeight: "88vh",
                width: "auto",
                height: "auto",
                display: "block",
                borderRadius: "4px",
              }}
              priority
            />
          </div>

          <button
            className="lb-arrow lb-next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Næste"
          >›</button>
        </div>
      )}
    </>
  );
}
