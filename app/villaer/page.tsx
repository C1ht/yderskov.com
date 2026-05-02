import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import ImageGrid from "@/components/ImageGrid";

export const metadata: Metadata = {
  title: "Arkitekttegnet villa — pris og projekter — Yderskov Arkitekter",
  description:
    "Arkitekttegnede villaer i Aalborg og Nordjylland. Se projekter, priser og proces for arkitekt nybyggeri. Gratis første møde.",
  alternates: { canonical: "https://yderskov.dk/villaer" },
};

const projectGalleries = [
  {
    eyebrow: "Projekt",
    title: "Funkis træ,\nglas og eternit.",
    images: [
      { src: "/images/Karetmagervej/IMG_9184.jpeg", alt: "Arkitekttegnet villa — Yderskov Arkitekter" },
      { src: "/images/Karetmagervej/IMG_9182.jpeg", alt: "Arkitekttegnet villa — Yderskov Arkitekter" },
      { src: "/images/Karetmagervej/IMG_9185.jpeg", alt: "Arkitekttegnet villa — Yderskov Arkitekter" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Moderne villa\nmed markant tag.",
    images: [
      { src: "/images/villa sæby/IMG_2472.jpg", alt: "Arkitekttegnet villa — Yderskov Arkitekter" },
      { src: "/images/villa sæby/IMG_2473.jpg", alt: "Arkitekttegnet villa — Yderskov Arkitekter" },
      { src: "/images/villa sæby/IMG_2480.jpeg", alt: "Arkitekttegnet villa — Yderskov Arkitekter" },
    ],
    dark: true,
  },
  {
    eyebrow: "Projekt",
    title: "Villa med\nnaturlige materialer.",
    images: [
      { src: "/images/Lerstien/IMG_7912.jpg", alt: "Arkitekttegnet villa — Yderskov Arkitekter" },
      { src: "/images/Lerstien/IMG_7931.jpg", alt: "Arkitekttegnet villa — Yderskov Arkitekter" },
      { src: "/images/Lerstien/IMG_7936.jpg", alt: "Arkitekttegnet villa — Yderskov Arkitekter" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Funkis\nvilla.",
    images: [
      { src: "/images/Højgården/IMG_2786.jpeg", alt: "Arkitekttegnet villa — Yderskov Arkitekter" },
      { src: "/images/Højgården/IMG_2787.jpeg", alt: "Arkitekttegnet villa — Yderskov Arkitekter" },
      { src: "/images/Højgården/IMG_2790.jpeg", alt: "Arkitekttegnet villa — Yderskov Arkitekter" },
    ],
    dark: true,
  },
  {
    eyebrow: "Projekt",
    title: "Klassisk\nvilla.",
    images: [
      { src: "/images/Gartnerhaven/gartnehaven.jpg", alt: "Arkitekttegnet villa — Yderskov Arkitekter" },
      { src: "/images/Gartnerhaven/IMG_2288.jpg", alt: "Arkitekttegnet villa — Yderskov Arkitekter" },
      { src: "/images/Gartnerhaven/gårdmiljø.jpg", alt: "Arkitekttegnet villa — Yderskov Arkitekter" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Villa med\nensidig taghældning.",
    images: [
      { src: "/images/Hanebjælken/IMG_4752.jpeg", alt: "Arkitekttegnet villa — Yderskov Arkitekter" },
      { src: "/images/Hanebjælken/IMG_4754.jpeg", alt: "Arkitekttegnet villa — Yderskov Arkitekter" },
      { src: "/images/Hanebjælken/IMG_4756.jpeg", alt: "Arkitekttegnet villa — Yderskov Arkitekter" },
    ],
    dark: false,
  },
];

const faqItems = [
  {
    q: "Hvad koster det at bygge en arkitekttegnet villa?",
    a: "En arkitekttegnet villa starter typisk fra 15.000 kr. pr. m². Prisen afhænger af størrelse, materialer og kompleksitet. Kontakt os for en præcis vurdering.",
  },
  {
    q: "Hvad er forskellen på en arkitekttegnet villa og en typehus?",
    a: "En arkitekttegnet villa tegnes specifikt til din grund og dine ønsker. Et typehus er et standardiseret produkt. Vi tilpasser alt fra planløsning til facader.",
  },
  {
    q: "Hvor lang tid tager det at bygge en villa?",
    a: "Fra første møde til indflytning tager det typisk 12-18 måneder. Byggetiden afhænger af projektets kompleksitet og kommunens sagsbehandlingstid.",
  },
  {
    q: "Søger I byggetilladelse?",
    a: "Ja — vi håndterer hele myndighedsprocessen, herunder byggetilladelse, BR-krav og kommunal godkendelse.",
  },
  {
    q: "Arbejder I med faste priser?",
    a: "Ja. Vi tilbyder fast pris på arkitekthonoraret, så du altid kender dine udgifter. Ingen ubehagelige overraskelser undervejs.",
  },
  {
    q: "Hvad er jeres geografiske område?",
    a: "Vi arbejder primært i Nordjylland og Aalborg-området, men tager gerne projekter i hele Danmark.",
  },
];

export default function VillaerPage() {
  return (
    <>
      <Nav />
      <Hero slides={[{ src: "/images/Karetmagervej/IMG_9184.jpeg", alt: "Arkitekttegnet villa — Yderskov Arkitekter" }]} />

      {/* Intro */}
      <section className="s">
        <div className="s-inner">
          <div className="text-2col">
            <div>
              <span className="eyebrow">Arkitekttegnede villaer</span>
              <h1 className="sec-hed">Arkitekttegnede villaer<br />fra idé til nøglefærdigt.</h1>
            </div>
            <div>
              <p className="body-p">
                Hvert villaprojekt starter med en grundig dialog om jeres ønsker, behov og økonomi. Vi tegner, projekterer og bygger — med egne håndværkere og ét samlet ansvar.
              </p>
              <p className="body-p">
                Se vores projekter og lad dig inspirere. Kontakt os for et gratis første møde direkte på grunden.
              </p>
              <p className="body-p">
                <Link href="#kontakt" className="text-link">→ Kom i gang</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project galleries */}
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
            <ImageGrid images={gallery.images} />
          </div>
        </section>
      ))}

      {/* Stats */}
      <div className="stats-bg">
        <div className="stats-inner">
          <div className="stat">
            <div className="stat-num">15.000<sup> kr.</sup></div>
            <div className="stat-lbl">Fra pr. m²</div>
          </div>
          <div className="stat">
            <div className="stat-num">24<sup> timer</sup></div>
            <div className="stat-lbl">Svar inden</div>
          </div>
          <div className="stat">
            <div className="stat-num">10<sup>+</sup></div>
            <div className="stat-lbl">Igangværende projekter</div>
          </div>
          <div className="stat">
            <div className="stat-num">300<sup>+</sup></div>
            <div className="stat-lbl">Projekter gennemført</div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="s">
        <div className="s-inner">
          <span className="eyebrow">Spørgsmål og svar</span>
          <h2 className="sec-hed">FAQ — villaer</h2>
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

      {/* Contact form */}
      <section className="s form-bg" id="kontakt">
        <div className="s-inner">
          <div className="form-layout">
            <div className="form-meta">
              <span className="eyebrow">Kontakt os</span>
              <h2 className="sec-hed">Lad os skabe<br />dit drømmehus</h2>
              <p style={{ marginTop: "1.5rem" }}>Ring eller skriv til os. Vi svarer inden 24 timer og tilbyder et gratis, uforpligtende møde direkte på grunden.</p>
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
