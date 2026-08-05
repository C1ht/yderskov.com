"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

type ImageItem = { src: string; alt: string; imgStyle?: React.CSSProperties };

export default function ImageGrid({
  images,
  ctaHref = "/kontakt#heroContactForm",
  ctaLabel = "Vil du have noget lignende? →",
}: {
  images: ImageItem[];
  ctaHref?: string | null;
  ctaLabel?: string;
}) {
  const [selected, setSelected] = useState<number | null>(null);

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

  // Mobile swipe gestures
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
    if (distance > minSwipeDistance) next();
    else if (distance < -minSwipeDistance) prev();
    setTouchStart(null);
    setTouchEnd(null);
  };

  const activeImg = selected !== null ? images[selected] : null;

  return (
    <>
      <div className="grid-3">
        {images.map((img, i) => (
          <div
            key={img.src}
            className="card"
            onClick={() => setSelected(i)}
            role="button"
            aria-label={`Se ${img.alt} i fuld størrelse`}
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setSelected(i)}
          >
            <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "cover", ...img.imgStyle }} />
          </div>
        ))}
      </div>

      {ctaHref && (
        <Link href={ctaHref} className="proj-inline-cta">
          {ctaLabel}
        </Link>
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

          {images.length > 1 && (
            <button
              className="lb-arrow lb-prev"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Forrige"
            >‹</button>
          )}

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
          </div>

          {images.length > 1 && (
            <button
              className="lb-arrow lb-next"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Næste"
            >›</button>
          )}
        </div>
      )}
    </>
  );
}
