"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

export interface HeroSlide {
  src: string;
  alt: string;
  style?: React.CSSProperties;
}

export default function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const isCarousel = slides.length > 1;
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const isVisible = useRef(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (index: number) => {
      setPrev(current);
      setCurrent(index);
    },
    [current]
  );

  useEffect(() => {
    if (!isCarousel) return;
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { isVisible.current = entry.isIntersecting; },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isCarousel]);

  useEffect(() => {
    if (!isCarousel) return;
    const id = setInterval(() => {
      if (isVisible.current) goTo((current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [current, slides.length, goTo, isCarousel]);

  return (
    <>
      {/* Slides */}
      <div ref={containerRef} aria-hidden="true">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`hero-slide${i === current ? " active" : i === prev ? " prev" : ""}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              style={{ objectFit: "cover", ...slide.style }}
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      {isCarousel && (
        <div className="hero-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero-dot${i === current ? " active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </>
  );
}

