import Link from "next/link";
import HeroForm from "./HeroForm";
import HeroCarousel, { type HeroSlide } from "./HeroCarousel";

interface HeroProps {
  slides?: HeroSlide[];
  title?: string;
  tag?: string;
  subtitle?: string;
  subtitleStyle?: React.CSSProperties;
  lines?: string[];
  italicLines?: number[];
  showForm?: boolean;
  showTabs?: boolean;
  showQuote?: boolean;
  bright?: boolean;
  show24h?: boolean;
  bodyStyle?: React.CSSProperties;
}

const defaultSlides: HeroSlide[] = [
  { src: "/images/Lerstien/Frederikshavn-lerstien-terrasse-byview.webp", alt: "Udsigtsvilla, Frederikshavn — Arkitekttegnestuen Yderskov" },
  { src: "/images/Torndalsvej/Hals-Torndalsvej-terrasse.webp", alt: "Arkitekttegnet sommerhus, Hals — Arkitekttegnestuen Yderskov" },
  { src: "/images/Karetmagervej/Sæby-ny-villa-funkis-haveside.webp", alt: "Funkisvilla, Sæby — Arkitekttegnestuen Yderskov" },
  { src: "/images/Løvevej/Ålbæk-poolhus-terrasse.webp", alt: "Sommerhus med pool, Ålbæk — Arkitekttegnestuen Yderskov" },
  { src: "/images/Godthåbsvej/Brønderslev-ombygning-efter-2.webp", alt: "Moderniseret villa, Brønderslev — Arkitekttegnestuen Yderskov" },
  { src: "/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-bagside.webp", alt: "Villa med tilbygning, Hasseris i Aalborg — Arkitekttegnestuen Yderskov" },
];

/**
 * Hero is a Server Component — text and layout render immediately from static
 * HTML without waiting for JavaScript. Only the image carousel (HeroCarousel)
 * and contact form (HeroForm) are client components.
 */
export default function Hero({
  slides = defaultSlides,
  title = "Arkitekt Yderskov",
  tag,
  subtitle = "Tanker & Streger",
  subtitleStyle,
  lines = [
    "I har tankerne, vi sætter stregerne.",
    "Gratis og uforpligtende første idemøde. Vi kommer ud til jer.",
    "Byggeri tegnet kun til jer, til jeres grund, jeres ønsker og jeres budget.",
  ],
  italicLines = [1],
  showForm = true,
  showTabs = false,
  showQuote = true,
  bright = false,
  show24h = true,
  bodyStyle,
}: HeroProps) {
  return (
    <section className={`hero${bright ? " hero-bright" : ""}`}>
      {/* Image carousel — client component, isolated */}
      <HeroCarousel slides={slides} />

      <div className="hero-overlay" />

      <div className="hero-body" style={bodyStyle}>
        <div className="hero-main">
          <div className="hero-left">
            {/* LCP element — server-rendered, no JS dependency */}
            <p className="hero-left-super hero-tag">Arkitekt Yderskov</p>
            <p className="hero-left-title" style={subtitleStyle}>{subtitle === "Tanker & Streger" && tag !== "Hjem" ? tag : subtitle}</p>
            {lines.map((line, i) => (
              <p
                key={i}
                className="hero-left-sub"
                style={{
                  ...(italicLines.includes(i) ? { fontStyle: "italic" } : {}),
                  ...(i > 0 ? { marginTop: "0.5rem" } : {}),
                }}
              >
                {line}
              </p>
            ))}
            {show24h && (
              <span className="hero-24h" style={{ marginTop: "0.85rem" }}>
                Vi vender tilbage inden 24 timer på alle henvendelser
              </span>
            )}

            {showQuote && (
              <div className="hero-mini-quote">
                &ldquo;Hvis vi kunne give Chris ti stjerner ville vi give ham det.&rdquo;
                <p className="hero-mini-quote-name">— Cathrine Rasmussen, Sæby</p>
              </div>
            )}
          </div>

          {showForm && (
            <div className="hero-right">
              {/* Unique id: avoids colliding with the page's own dedicated
                  #heroContactForm section, which is the real target for
                  "Skriv"/"Book gratis møde" anchor links (this hero copy is
                  hidden on mobile, so it must never be the id anchors land on). */}
              <HeroForm id="heroInlineForm" />
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
    </section>
  );
}
