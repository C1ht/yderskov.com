"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { inspirationImages } from "./inspiration-images";

export default function InspirationGallery() {
  const images = inspirationImages;
  const [selected, setSelected] = useState<number | null>(null);
  const [limit, setLimit] = useState(24);

  const close = useCallback(() => setSelected(null), []);

  const prev = useCallback(() => {
    setSelected((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);

  const next = useCallback(() => {
    setSelected((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

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

  const activeImg = selected !== null ? images[selected] : null;
  const visibleImages = images.slice(0, limit);

  return (
    <>
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

      {limit < images.length && (
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
