"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import HeroForm from "./HeroForm";

interface HeroSlide {
  src: string;
  alt: string;
}

interface HeroProps {
  slides?: HeroSlide[];
  title?: string;
  tag?: string;
  subtitle?: string;
  lines?: string[];
  showForm?: boolean;
  showTabs?: boolean;
  showQuote?: boolean;
}

const defaultSlides: HeroSlide[] = [
  { src: "/images/Lerstien/IMG_7931.webp", alt: "Arkitekttegnet villa — Yderskov" },
  { src: "/images/Torndalsvej/IMG_3181.webp", alt: "Arkitekttegnet sommerhus — Yderskov" },
  { src: "/images/Gravenstenvej/EEBD18F8-48F7-43CE-AE15-91FF91953CF7-2.webp", alt: "Arkitekttegnet bolig — Yderskov" },
  { src: "/images/Harald Jensens Vej/IMG_2937.webp", alt: "Tilbygning — Yderskov" },
  { src: "/images/Karetmagervej/IMG_9184.webp", alt: "Arkitekttegnet villa — Yderskov" },
  { src: "/images/Leonoravej villa tilbygning/IMG_7376.webp", alt: "Villa med tilbygning — Yderskov" },
  { src: "/images/Løvevej/house2.webp", alt: "Ny villa — Yderskov" },
  { src: "/images/Godthåbsvej/yderskov-ombygning-efter-2.webp", alt: "Ombygning — Yderskov" },
  { src: "/images/Vesterhavsbakken tilbygning sommerhus/IMG_7455.webp", alt: "Sommerhus med tilbygning — Yderskov" },
];

export default function Hero({
  slides = defaultSlides,
  title = "Arkitekt Yderskov",
  tag,
  subtitle = "Tanke + Streger",
  lines = [
    "Byggeri tegnet kun til jer — til jeres grund, jeres ønsker og jeres budget.",
    "I har tankerne, vi sætter stregerne.",
    "Gratis og uforpligtende første møde. Vi kommer ud til jer.",
    "Vi styrer hele processen med egne håndværkere.",
  ],
  showForm = true,
  showTabs = true,
  showQuote = true,
}: HeroProps) {
  const isCarousel = slides.length > 1;
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const isVisible = useRef(true);

  const goTo = useCallback(
    (index: number) => {
      setPrev(current);
      setCurrent(index);
    },
    [current]
  );

  useEffect(() => {
    if (!isCarousel) return;
    const el = heroRef.current;
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
    <section className="hero" ref={heroRef}>
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
            style={{ objectFit: "cover" }}
            priority={i === 0}
          />
        </div>
      ))}

      <div className="hero-overlay" />

      <div className="hero-body">
        <div className="hero-title-row">
          <p className="hero-left-super" style={{ marginBottom: 0 }}>{title}</p>
          {tag && <p className="hero-left-super hero-tag" style={{ marginBottom: 0 }}>{tag}</p>}
        </div>

        <div className="hero-main">
          <div className="hero-left">
            <p className="hero-left-title">{subtitle}</p>
            {lines.map((line, i) => (
              <p
                key={i}
                className="hero-left-sub"
                style={i === 1 ? { fontStyle: "italic", marginTop: "0.5rem" } : i > 1 ? { marginTop: "0.5rem" } : undefined}
              >
                {line}
              </p>
            ))}
            <span className="hero-24h" style={{ marginTop: "0.85rem", display: "flex" }}>
              Vi vender tilbage inden 24 timer
            </span>

            {showQuote && (
              <div className="hero-mini-quote">
                &ldquo;Hvis vi kunne give Chris ti stjerner ville vi give ham det.&rdquo;
                <p className="hero-mini-quote-name">— Cathrine Rasmussen, Sæby</p>
              </div>
            )}
          </div>

          {showForm && (
            <div className="hero-right">
              <HeroForm />
            </div>
          )}
        </div>
      </div>

      {showTabs && (
        <div className="hero-tabs">
          <Link href="/villaer" className="hero-tab">Ny villa</Link>
          <Link href="/tilbygninger" className="hero-tab">Om- og tilbygning</Link>
          <Link href="/sommerhuse" className="hero-tab">Sommerhus</Link>
          <Link href="/erhverv" className="hero-tab">Erhverv</Link>
          <Link href="/special" className="hero-tab">Special</Link>
        </div>
      )}

      {slides.length > 1 && (
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
    </section>
  );
}
