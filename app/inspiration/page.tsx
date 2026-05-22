import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Inspiration — arkitekttegnede projekter — Yderskov Arkitekter",
  description:
    "Lad dig inspirere af vores projekter — villaer, sommerhuse, tilbygninger og specialbyggerier tegnet af Yderskov Arkitekter i Aalborg og hele Danmark.",
  alternates: { canonical: "https://yderskov.dk/inspiration" },
};

const images: { src: string; alt: string; rotate?: boolean }[] = [
  { src: "/images/Godthåbsvej/yderskov-ombygning-efter-2.webp", alt: "Moderniseret villa — Yderskov Arkitekter" },
  { src: "/images/Torndalsvej/IMG_3181.webp", alt: "Arkitekttegnet sommerhus — Yderskov Arkitekter" },
  { src: "/images/Vestvej/IMG_3252.jpeg", alt: "Arkitekttegnet bolig — Yderskov Arkitekter" },
  { src: "/images/Lerstien/IMG_7912.jpg", alt: "Arkitekttegnet projekt — Yderskov Arkitekter" },
  { src: "/images/Løkken sommerhus/IMG_7444.webp", alt: "Sommerhus Løkken — Yderskov Arkitekter" },
  { src: "/images/Højgården/IMG_2786.jpeg", alt: "Arkitekttegnet bolig — Yderskov Arkitekter", rotate: true },
  { src: "/images/Leonoravej villa tilbygning/IMG_7376.webp", alt: "Villa med tilbygning — Yderskov Arkitekter" },
  { src: "/images/Gjøl/IMG_2387.jpeg", alt: "Arkitekttegnet projekt — Yderskov Arkitekter" },
  { src: "/images/Vesterhavsbakken tilbygning sommerhus/IMG_7455.jpeg", alt: "Sommerhus tilbygning — Yderskov Arkitekter" },
  { src: "/images/Sommervænget/IMG_1434.jpeg", alt: "Arkitekttegnet bolig — Yderskov Arkitekter" },
  { src: "/images/Neptunvej/IMG_2588.webp", alt: "Tilbygning og renovering — Yderskov Arkitekter" },
  { src: "/images/Karetmagervej/IMG_9182.jpeg", alt: "Arkitekttegnet projekt — Yderskov Arkitekter" },
  { src: "/images/Løvevej/house2.jpg", alt: "Sommerhus med pool — Yderskov Arkitekter" },
  { src: "/images/Lerstien/IMG_7931.jpg", alt: "Arkitekttegnet projekt — Yderskov Arkitekter" },
  { src: "/images/Gravenstenvej/IMG_9584.webp", alt: "Ombygning af villa — Yderskov Arkitekter" },
  { src: "/images/Vestvej/IMG_3255.jpeg", alt: "Arkitekttegnet bolig — Yderskov Arkitekter" },
  { src: "/images/Hanebjælken/IMG_4752.jpeg", alt: "Arkitekttegnet projekt — Yderskov Arkitekter" },
  { src: "/images/Sommervænget/IMG_1441.jpeg", alt: "Arkitekttegnet bolig — Yderskov Arkitekter" },
  { src: "/images/Harald Jensens Vej/IMG_2934.webp", alt: "Nyt sommerhus — Yderskov Arkitekter" },
  { src: "/images/Ikarosvej/IMG_2716.jpeg", alt: "Arkitekttegnet projekt — Yderskov Arkitekter" },
  { src: "/images/Højgården/IMG_2787.jpeg", alt: "Arkitekttegnet bolig — Yderskov Arkitekter" },
  { src: "/images/Vesterhavsbakken tilbygning sommerhus/IMG_7461.jpeg", alt: "Sommerhus tilbygning — Yderskov Arkitekter" },
  { src: "/images/Gjøl/IMG_2392.jpeg", alt: "Arkitekttegnet projekt — Yderskov Arkitekter" },
  { src: "/images/Torndalsvej/IMG_3296.webp", alt: "Arkitekttegnet sommerhus — Yderskov Arkitekter" },
  { src: "/images/Karetmagervej/IMG_9185.jpeg", alt: "Arkitekttegnet projekt — Yderskov Arkitekter" },
  { src: "/images/villa sæby/IMG_2472.jpg", alt: "Villa Sæby — Yderskov Arkitekter" },
  { src: "/images/Lerstien/IMG_7936.jpg", alt: "Arkitekttegnet projekt — Yderskov Arkitekter" },
  { src: "/images/Løvevej/IMG_9379_r2.jpeg", alt: "Sommerhus med pool — Yderskov Arkitekter" },
  { src: "/images/Hanebjælken/IMG_4754.jpeg", alt: "Arkitekttegnet projekt — Yderskov Arkitekter" },
  { src: "/images/Sommervænget/IMG_1439.jpeg", alt: "Arkitekttegnet bolig — Yderskov Arkitekter" },
];

export default function InspirationPage() {
  return (
    <>
      <Nav />

      <section className="s" style={{ paddingBottom: "2rem" }}>
        <div className="s-inner">
          <span className="eyebrow">Inspiration</span>
          <h1 className="sec-hed">Lad dig inspirere.</h1>
          <p className="body-intro" style={{ maxWidth: "560px" }}>
            Herunder ser du et udvalg af vores projekter — villaer, sommerhuse, tilbygninger og specialbyggerier. Alle tegnet fra bunden til den enkelte bygherre.
          </p>
          <div className="about-tags" style={{ marginTop: "1.5rem" }}>
            <Link href="/kontakt" className="tag tag-dark">Book gratis møde →</Link>
            <Link href="/villaer" className="tag">Se projekter</Link>
          </div>
        </div>
      </section>

      <section className="s s-off">
        <div className="s-inner">
          <div className="insp-grid">
            {images.map((img, i) => (
              <div key={i} className="insp-item">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    ...(img.rotate ? { transform: "rotate(90deg)", transformOrigin: "center" } : {}),
                  }}
                  sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <Footer />
    </>
  );
}
