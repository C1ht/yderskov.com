import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import ImageGrid from "@/components/ImageGrid";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Om- og tilbygning — arkitekt pris og projekter — Yderskov Arkitekter",
  description:
    "Arkitekttegnede tilbygninger og ombygninger i Aalborg og Danmark. Se projekter, priser og proces. Gratis første møde.",
  alternates: { canonical: "https://yderskov.com/tilbygninger" },
};

const projectGalleries = [
  {
    eyebrow: "Projekt",
    title: "Ombygning og\nmodernisering af 50er-villa, Brønderslev nær Aalborg.",
    images: [
      { src: "/images/Godthåbsvej/Brønderslev-ombygning-efter-3.webp", alt: "Haveside med birketræ efter modernisering, Brønderslev — Yderskov Arkitekter" },
      { src: "/images/Godthåbsvej/Brønderslev-ombygning-efter-2.webp", alt: "Gårdside med skydedøre efter modernisering, Brønderslev — Yderskov Arkitekter" },
      { src: "/images/Godthåbsvej/Brønderslev-ombygning-efter-1.webp", alt: "Indgangsside efter modernisering, Brønderslev — Yderskov Arkitekter" },
      { src: "/images/Godthåbsvej/Brønderslev-ombygning-efter-4.webp", alt: "Facade efter modernisering, Brønderslev — Yderskov Arkitekter" },
      { src: "/images/Godthåbsvej/Brønderslev-ombygning-efter-køkken.webp", alt: "Nyt køkken efter modernisering, Brønderslev — Yderskov Arkitekter" },
    ],
    afterLabel: "Efter ombygning",
    beforeLabel: "Før ombygning",
    beforeImages: [
      { src: "/images/Godthåbsvej/Brønderslev-ombygning-foer-3.webp", alt: "Side med birketræ før modernisering, Brønderslev — Yderskov Arkitekter" },
      { src: "/images/Godthåbsvej/Brønderslev-ombygning-foer-2.webp", alt: "Haveside før modernisering, Brønderslev — Yderskov Arkitekter" },
      { src: "/images/Godthåbsvej/Brønderslev-ombygning-foer-1.webp", alt: "Indgangsside før modernisering, Brønderslev — Yderskov Arkitekter" },
      { src: "/images/Godthåbsvej/Brønderslev-ombygning-foer-4.webp", alt: "Facade før modernisering, Brønderslev — Yderskov Arkitekter" },
    ],
    dark: true,
  },
  {
    eyebrow: "Projekt",
    title: "Villa med\ntilbygning, Hasseris.",
    images: [
      { src: "/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-terrasse.webp", alt: "Terrasse ved villa med tilbygning i Hasseris — Yderskov Arkitekter" },
      { src: "/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-bagside.webp", alt: "Bagside af villa med tilbygning i Hasseris — Yderskov Arkitekter" },
      { src: "/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-vindue.webp", alt: "Vinduesparti i villa med tilbygning i Hasseris — Yderskov Arkitekter" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Tilbygning og\nrenovering, Aalborg.",
    images: [
      { src: "/images/Neptunvej/Aalborg-neptunvej-tilbygning-terrasse.webp", alt: "Terrasse ved tilbygning i Aalborg — Yderskov Arkitekter" },
      { src: "/images/Neptunvej/Aalborg-neptunvej-tilbygning-terrasse-og-plæne.webp", alt: "Terrasse og plæne ved tilbygning i Aalborg — Yderskov Arkitekter" },
      { src: "/images/Neptunvej/Aalborg-neptunvej-tilbygning.haveside.webp", alt: "Haveside ved tilbygning i Aalborg — Yderskov Arkitekter" },
    ],
    dark: true,
  },
  {
    eyebrow: "Projekt",
    title: "Ombygning af\neksisterende 70er-villa, Hasseris.",
    images: [
      { src: "/images/Gravenstenvej/Aalborg-gravenstenvej-renovering-vejside.webp", alt: "Vejside efter ombygning af 70er-villa i Hasseris — Yderskov Arkitekter" },
      { src: "/images/Gravenstenvej/Aalborg-gravenstenvej-renovering-haveside.webp", alt: "Haveside efter ombygning af 70er-villa i Hasseris — Yderskov Arkitekter" },
      { src: "/images/Gravenstenvej/Aalborg-gravenstenvej-renovering-terrassearbejde.webp", alt: "Terrassearbejde ved ombygning i Hasseris — Yderskov Arkitekter" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Lille, gammelt parcelhus\nombygget til moderne bolig, Brønderslev nær Aalborg.",
    images: [
      { src: "/images/Emils hus Olufsgade/Brønderslev-olufsgade-efter-vejside.webp", alt: "Vejside efter ombygning i Brønderslev — Yderskov Arkitekter" },
      { src: "/images/Emils hus Olufsgade/Brønderslev-olufsgade-efter-indkørsel.webp", alt: "Indkørsel efter ombygning i Brønderslev — Yderskov Arkitekter" },
      { src: "/images/Emils hus Olufsgade/Brønderslev-olufsgade-efter-haveside.webp", alt: "Haveside efter ombygning i Brønderslev — Yderskov Arkitekter" },
      { src: "/images/Emils hus Olufsgade/Brønderslev-olufsgade-efter-forhave.webp", alt: "Forhave efter ombygning i Brønderslev — Yderskov Arkitekter" },
      { src: "/images/Emils hus Olufsgade/Brønderslev-olufsgade-efter-bagside.webp", alt: "Bagside efter ombygning i Brønderslev — Yderskov Arkitekter" },
    ],
    afterLabel: "Efter ombygning",
    beforeLabel: "Før ombygning",
    beforeImages: [
      { src: "/images/Emils hus Olufsgade/Brønderslev-olufsgade-foer-vejside.webp", alt: "Vejside før ombygning i Brønderslev — Yderskov Arkitekter" },
    ],
    dark: false,
  },
];

const faqItems = [
  {
    q: "Hvad koster en tilbygning?",
    a: "En tilbygning koster typisk fra 14.000–19.000 kr. pr. m². Prisen afhænger af størrelse, konstruktion og materialer.",
  },
  {
    q: "Kræver en tilbygning byggetilladelse?",
    a: "Det afhænger af størrelsen. Tilbygninger over 35 m² kræver normalt byggetilladelse. Vi håndterer hele processen med kommunen.",
  },
  {
    q: "Hvad kan I hjælpe med udover tilbygninger?",
    a: "Vi tegner alt fra nye køkkener og badeværelser til fuld ombygning af planløsning, udskiftning af tag og energirenovering.",
  },
  {
    q: "Kan jeg se eksempler på jeres tilbygninger?",
    a: "Ja — se vores projekter på denne side. Vi kan også vise referencer fra projekter i dit område.",
  },
  {
    q: "Hvordan starter processen?",
    a: "Med et gratis, uforpligtende møde hos jer. Vi kigger på mulighederne og giver et prisestimat på stedet.",
  },
  {
    q: "Har I egne håndværkere?",
    a: "Ja. Vi styrer processen med vores egne faste håndværkere — det giver ét samlet ansvar og bedre styring af økonomi og tid.",
  },
];

export default function TilbygningerPage() {
  return (
    <>
      <Nav />
      <Hero
        slides={[{ src: "/images/Godthåbsvej/Brønderslev-ombygning-efter-2.webp", alt: "Ombygning og modernisering af 50er-villa, Brønderslev nær Aalborg — Yderskov Arkitekter" }]}
        tag="Om- og tilbygninger"
        subtitle="Om- og tilbygninger"
        lines={[
          "Jeres hus har allerede en sjæl. Vi hjælper den med at vokse.",
          "Gratis og uforpligtende første idemøde. Vi kommer ud til jer.",
        ]}
        italicLines={[0, 1]}
      />

      <section className="s">
        <div className="s-inner">
          <div className="text-2col">
            <div>
              <span className="eyebrow">Om- og tilbygninger</span>
              <h1 className="sec-hed">Om- og tilbygninger<br />med arkitekttegnet kvalitet.</h1>
            </div>
            <div>
              <p className="body-p">
                Din bolig rummer sandsynligvis mere potentiale end du tror. Vi ser mulighederne og tegner en løsning der giver mere lys, plads og en bedre planløsning. Søger du en <Link href="/arkitekt-aalborg" className="text-link">arkitekt i Aalborg</Link> til din ombygning, står vi klar. Se også vores færdige <Link href="/villaer" className="text-link">villaer</Link> samt vores <Link href="/prisberegner" className="text-link">prisberegner</Link>.
              </p>
              <p className="body-p">
                Vi styrer hele projektet — fra tegning og byggetilladelse til den færdige tilbygning med egne håndværkere.
              </p>
              <p className="body-p">
                <Link href="#kontakt" className="text-link">→ Kom i gang</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {projectGalleries.map((gallery, i) => (
        <section key={i} className={`s${gallery.dark ? " s-off" : ""}`}>
          <div className="s-inner">
            <div className="proj-header">
              <div>
                <span className="eyebrow">{gallery.eyebrow}</span>
                <h2 className="sec-hed" style={{ marginBottom: 0, whiteSpace: "pre-line" }}>
                  {gallery.title}
                </h2>
              </div>
            </div>
            {"afterLabel" in gallery && <p className="proj-grid-label">{gallery.afterLabel}</p>}
            <ImageGrid images={gallery.images} />
            {"beforeImages" in gallery && gallery.beforeImages && (
              <>
                <p className="proj-grid-label" style={{ marginTop: "2rem" }}>{gallery.beforeLabel}</p>
                <ImageGrid images={gallery.beforeImages} />
              </>
            )}
          </div>
        </section>
      ))}

      <div className="stats-bg">
        <div className="stats-inner">
          <div className="stat"><div className="stat-num">14.000<sup> kr.</sup></div><div className="stat-lbl">Fra pr. m²</div></div>
          <div className="stat"><div className="stat-num">24<sup> timer</sup></div><div className="stat-lbl">Svar inden</div></div>
          <div className="stat"><div className="stat-num">10<sup>+</sup></div><div className="stat-lbl">Igangværende projekter</div></div>
          <div className="stat"><div className="stat-num">300<sup>+</sup></div><div className="stat-lbl">Projekter gennemført</div></div>
        </div>
      </div>

      <section className="s">
        <div className="s-inner">
          <span className="eyebrow">Spørgsmål og svar</span>
          <h2 className="sec-hed">FAQ — tilbygninger</h2>
          <div className="faq-grid">
            {faqItems.map((item, i) => (
              <div key={i} className="faq-item">
                <p className="faq-q">{item.q}</p>
                <p className="faq-a">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />

      <section className="s form-bg" id="kontakt">
        <div className="s-inner">
          <div className="form-layout">
            <div className="form-meta">
              <span className="eyebrow">Kontakt os</span>
              <h2 className="sec-hed">Lad os se<br />mulighederne</h2>
              <p style={{ marginTop: "1.5rem" }}>Ring eller skriv til os. Vi svarer inden 24 timer og tilbyder et gratis, uforpligtende møde hos jer.</p>
              <p><a href="tel:29723427">29 72 34 27</a></p>
              <p><a href="mailto:cy@yderskov.com">cy@yderskov.com</a></p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
