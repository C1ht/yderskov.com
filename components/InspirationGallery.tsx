"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { inspirationImages, type GalleryImage } from "./inspiration-images";

function getCategoriesForImage(img: GalleryImage): string[] {
  return img.cats || [];
}

export default function InspirationGallery() {
  const images = inspirationImages;
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selected, setSelected] = useState<number | null>(null);
  const [limit, setLimit] = useState(24);
  const [favorites, setFavorites] = useState<string[]>([]);

  // Load favorites from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("yderskov_favorites");
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch (e) {
        console.error("Fejl ved indlæsning af favoritter:", e);
      }
    }
  }, []);

  const toggleFavorite = (src: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const nextFavs = favorites.includes(src)
      ? favorites.filter((s) => s !== src)
      : [...favorites, src];
    setFavorites(nextFavs);
    localStorage.setItem("yderskov_favorites", JSON.stringify(nextFavs));
  };

  const filteredImages = activeCategory === "all"
    ? images
    : activeCategory === "favorites"
      ? images.filter((img) => favorites.includes(img.src))
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

  // Mobile swipe gestures logic
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) {
      next();
    } else if (distance < -minSwipeDistance) {
      prev();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const categories = [
    { id: "all", label: "Alle" },
    { id: "villaer", label: "Villaer" },
    { id: "sommerhuse", label: "Sommerhuse" },
    { id: "indendørs", label: "Indendørs" },
    { id: "udendørs", label: "Udendørs & Terrasser" },
    { id: "skitser", label: "Skitser" },
    { id: "favorites", label: `Mine favoritter (${favorites.length})` },
  ];

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

      {activeCategory === "favorites" && filteredImages.length === 0 ? (
        <div style={{
          textAlign: "center",
          padding: "5rem 2rem",
          background: "var(--off)",
          borderRadius: "16px",
          marginTop: "1rem",
          border: "1px dashed var(--border)",
        }}>
          <div style={{ color: "#d4910a", marginBottom: "1rem", display: "inline-flex" }}>
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
          <h3 style={{ fontSize: "1.15rem", fontWeight: 400, color: "var(--text)", marginBottom: "0.5rem" }}>
            Dit inspirationsboard er tomt
          </h3>
          <p style={{ fontSize: "0.82rem", color: "var(--sub)", maxWidth: "440px", margin: "0 auto", lineHeight: 1.6 }}>
            Når du browser inspirationsgalleriet, kan du klikke på hjerte-ikonet øverst til højre på billederne for at gemme dine favoritter her.
          </p>
        </div>
      ) : (
        <div className="insp-grid">
          {visibleImages.map((img, i) => {
            const isFav = favorites.includes(img.src);
            return (
              <div
                key={i}
                className="insp-item"
                onClick={() => setSelected(i)}
                role="button"
                aria-label={img.alt}
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelected(i)}
                style={{ position: "relative" }}
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

                <button
                  type="button"
                  className={`fav-btn${isFav ? " is-fav" : ""}`}
                  onClick={(e) => toggleFavorite(img.src, e)}
                  aria-label={isFav ? "Fjern fra inspirationsboard" : "Gem på inspirationsboard"}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill={isFav ? "#d4910a" : "none"} stroke={isFav ? "#d4910a" : "currentColor"} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      )}

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
        <div 
          className="lb-backdrop" 
          onClick={close} 
          role="dialog" 
          aria-modal="true"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
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
                maxHeight: "80vh",
                width: "auto",
                height: "auto",
                display: "block",
                borderRadius: "4px",
              }}
              priority
            />

            <div style={{ display: "flex", justifyContent: "center", marginTop: "1.25rem", gap: "1rem", alignItems: "center" }}>
              <button
                type="button"
                className={`lb-fav-toggle-btn${favorites.includes(activeImg.src) ? " is-fav" : ""}`}
                onClick={() => toggleFavorite(activeImg.src)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#fff",
                  padding: "0.55rem 1.25rem",
                  borderRadius: "20px",
                  fontSize: "0.78rem",
                  cursor: "pointer",
                  fontFamily: "var(--sans)",
                  transition: "all 0.2s ease"
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill={favorites.includes(activeImg.src) ? "#d4910a" : "none"} stroke={favorites.includes(activeImg.src) ? "#d4910a" : "currentColor"} strokeWidth="2.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                {favorites.includes(activeImg.src) ? "Fjern fra inspirationsboard" : "Gem på inspirationsboard"}
              </button>
            </div>

            {activeImg.alt && (
              <p style={{
                color: "rgba(255, 255, 255, 0.75)",
                fontSize: "0.85rem",
                fontWeight: 300,
                textAlign: "center",
                marginTop: "0.85rem",
                letterSpacing: "-0.01em",
                fontFamily: "var(--sans)",
                padding: "0 1rem"
              }}>
                {activeImg.alt.split(" — ")[0]}
              </p>
            )}
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
