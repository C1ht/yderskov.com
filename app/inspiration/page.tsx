import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import InspirationGallery from "@/components/InspirationGallery";

export const metadata: Metadata = {
  title: "Inspiration — arkitekttegnede projekter — Yderskov Arkitekter",
  description:
    "Lad dig inspirere af vores projekter — villaer, sommerhuse, tilbygninger og specialbyggerier tegnet af Yderskov Arkitekter i Aalborg og hele Danmark.",
  alternates: { canonical: "https://yderskov.dk/inspiration" },
};

const images: { src: string; alt: string }[] = [
  { src: "/images/Godthåbsvej/Brønderslev-ombygning-efter-4.webp", alt: "Moderniseret 50er-villa, Brønderslev — Yderskov Arkitekter" },
  { src: "/images/Torndalsvej/Hals-Torndalsvej-terrasse.webp", alt: "Terrasse ved sommerhus i Hals — Yderskov Arkitekter" },
  { src: "/images/Gartnerhaven/Hjørring-garnterhaven-ny-villa.webp", alt: "Klassisk ny villa i Hjørring — Yderskov Arkitekter" },
  { src: "/images/Lerstien/Frederikshavn-lerstien-terrasse.webp", alt: "Terrasse på udsigtsvilla i Frederikshavn — Yderskov Arkitekter" },
  { src: "/images/Løkken sommerhus/Løkken-Alexandravej-sommerhus-terrasse.webp", alt: "Terrasse ved sommerhus i Løkken — Yderskov Arkitekter" },
  { src: "/images/Højgården/Vestsbjerg-ny-funkisvilla-haveside.webp", alt: "Funkisvilla med niveauforskelle, Vestbjerg — Yderskov Arkitekter" },
  { src: "/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-bagside.webp", alt: "Villa med tilbygning i Hasseris — Yderskov Arkitekter" },
  { src: "/images/Gartnerhaven/Hjørring-gartnehaven-ny-villa-haveside.webp", alt: "Haveside på klassisk villa i Hjørring — Yderskov Arkitekter" },
  { src: "/images/Hanebjælken/Vestbjerg-Hanebjælken-ny-villa-værelsesfløj.webp", alt: "Værelsesfløj på villa i Vestbjerg — Yderskov Arkitekter" },
  { src: "/images/Løkken sommerhus/Løkken-Alexandravej-sommerhus-indgangsparti.webp", alt: "Indgangsparti ved sommerhus i Løkken — Yderskov Arkitekter" },
  { src: "/images/Neptunvej/Aalborg-neptunvej-tilbygning-terrasse.webp", alt: "Terrasse ved tilbygning i Aalborg — Yderskov Arkitekter" },
  { src: "/images/Karetmagervej/Sæby-ny-villa-funkis-haveside.webp", alt: "Haveside på funkisvilla i Sæby — Yderskov Arkitekter" },
  { src: "/images/Løvevej/Ålbæk-poolhus-terrasse.webp", alt: "Sommerhus med pool, Ålbæk — Yderskov Arkitekter" },
  { src: "/images/Lerstien/Frederikshavn-lerstien-vejside.webp", alt: "Vejside på udsigtsvilla i Frederikshavn — Yderskov Arkitekter" },
  { src: "/images/Gravenstenvej/Aalborg-gravenstenvej-renovering-vejside.webp", alt: "Ombygning af 70er-villa i Hasseris — Yderskov Arkitekter" },
  { src: "/images/Gartnerhaven/Hjørring-gartnerhaven-indkørsel.webp", alt: "Indkørsel til klassisk villa i Hjørring — Yderskov Arkitekter" },
  { src: "/images/Hanebjælken/Vestbjerg-Hanebjælken-ny-villa-haveside.webp", alt: "Villa med ensidig taghældning i Vestbjerg — Yderskov Arkitekter" },
  { src: "/images/Løkken sommerhus/Løkken-Alexandravej-sommerhus-sidebygning.webp", alt: "Sidebygning ved sommerhus i Løkken — Yderskov Arkitekter" },
  { src: "/images/Harald Jensens Vej/Løkken-sommerhus-Haraldjensensvej-terrasse.webp", alt: "Terrasse ved nyt sommerhus i Løkken — Yderskov Arkitekter" },
  { src: "/images/Gartnerhaven/Hjørring-gartnerhaven-ny-villa-gårdmiljø.webp", alt: "Gårdmiljø ved villa i Hjørring — Yderskov Arkitekter" },
  { src: "/images/Højgården/Vestsbjerg-ny-funkisvilla-indgangsparti.webp", alt: "Indgangsparti på funkisvilla i Vestbjerg — Yderskov Arkitekter" },
  { src: "/images/Emils hus Olufsgade/Brønderslev-olufsgade-efter-indkørsel.webp", alt: "Ombygning af parcelhus, Brønderslev — Yderskov Arkitekter" },
  { src: "/images/Harald Jensens Vej/Løkken-sommerhus-Haraldjensensvej-indkørsel.webp", alt: "Nyt sommerhus i Løkken — Yderskov Arkitekter" },
  { src: "/images/Torndalsvej/Hals-Torndalsvej-indgang.webp", alt: "Indgang til sommerhus i Hals — Yderskov Arkitekter" },
  { src: "/images/Karetmagervej/Sæby-ny-villa-funkis-vejside.webp", alt: "Vejside på funkisvilla i Sæby — Yderskov Arkitekter" },
  { src: "/images/villa sæby/Sæby-ny-villa-kinesisk-tag-haveside.webp", alt: "Moderne villa med kinesisk tag, Sæby — Yderskov Arkitekter" },
  { src: "/images/Lerstien/Frederikshavn-lerstien-terrasse-byview.webp", alt: "Udsigtsvilla med byudsigt, Frederikshavn — Yderskov Arkitekter" },
  { src: "/images/Løvevej/Ålbæk-poolhus-pool.webp", alt: "Indendørs pool i sommerhus, Ålbæk — Yderskov Arkitekter" },
  { src: "/images/Hanebjælken/Vestbjerg-Hanebjælken-ny-villa-overdækket-terrasse.webp", alt: "Overdækket terrasse på villa i Vestbjerg — Yderskov Arkitekter" },
  { src: "/images/Neptunvej/Aalborg-neptunvej-tilbygning-terrasse-og-plæne.webp", alt: "Terrasse og plæne ved tilbygning i Aalborg — Yderskov Arkitekter" },
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
          <InspirationGallery images={images} />
        </div>
      </section>

      <CtaBand />
      <Footer />
    </>
  );
}
