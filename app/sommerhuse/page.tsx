import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import ImageGrid from "@/components/ImageGrid";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Arkitekttegnet sommerhus — Priser & projekter | Yderskov",
  description:
    "Få tegnet et unikt sommerhus tilpasset din grund og udsigt. Se priser og projekter hos Yderskov. Fast pris, høj kvalitet og gratis første møde!",
  alternates: { canonical: "https://yderskov.com/sommerhuse" },
};

const projectGalleries = [
  {
    eyebrow: "Projekt",
    title: "Sommerhus med\nstore vinduespartier, Hals.",
    images: [
      { src: "/images/Torndalsvej/Hals-Torndalsvej-terrasse.webp", alt: "Terrasse ved sommerhus i Hals — Yderskov Arkitekter" },
      { src: "/images/Torndalsvej/Hals-Torndalsvej-køkken.webp", alt: "Køkken i sommerhus i Hals — Yderskov Arkitekter" },
      { src: "/images/Torndalsvej/Hals-Torndalsvej-stue.webp", alt: "Stue i sommerhus i Hals — Yderskov Arkitekter" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Sommerhus\ntil udsigtsgrund, Løkken.",
    images: [
      { src: "/images/Løkken sommerhus/Løkken-Alexandravej-sommerhus-indgangsparti.webp", alt: "Indgangsparti ved sommerhus i Løkken — Yderskov Arkitekter" },
      { src: "/images/Løkken sommerhus/Løkken-Alexandravej-sommerhus-terrasse.webp", alt: "Terrasse ved sommerhus i Løkken — Yderskov Arkitekter" },
      { src: "/images/Løkken sommerhus/Løkken-Alexandravej-sommerhus-sidebygning.webp", alt: "Sidebygning ved sommerhus i Løkken — Yderskov Arkitekter" },
    ],
    dark: true,
  },
  {
    eyebrow: "Projekt",
    title: "Sommerhus\nmed pool, Ålbæk.",
    images: [
      { src: "/images/Løvevej/Ålbæk-poolhus-terrasse.webp", alt: "Arkitekttegnet poolhus i Ålbæk — Yderskov Arkitekter" },
      { src: "/images/Løvevej/Ålbæk-poolhus-pool.webp", alt: "Indendørs pool i arkitekttegnet sommerhus — Yderskov Arkitekter" },
      { src: "/images/Løvevej/Ålbæk-poolhus-køkken.webp", alt: "Moderne køkken med ø i poolhus — Yderskov Arkitekter" },
      { src: "/images/Løvevej/Ålbæk-poolhus-køkken-spise-plads-alkove.webp", alt: "Køkken, spiseplads og alkove i poolhus — Yderskov Arkitekter" },
      { src: "/images/Løvevej/Ålbæk-poolhus-aktivitetsrum.webp", alt: "Aktivitetsrum med bordfodbold og billardbord — Yderskov Arkitekter" },
      { src: "/images/Løvevej/Ålbæk-poolhus-badmiljø.webp", alt: "Badmiljø i arkitekttegnet poolhus — Yderskov Arkitekter" },
      { src: "/images/Løvevej/Ålbæk-poolhus-toilet.webp", alt: "Badeværelse i arkitekttegnet poolhus — Yderskov Arkitekter" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Nyt\nsommerhus, Løkken.",
    images: [
      { src: "/images/Harald Jensens Vej/Løkken-sommerhus-Haraldjensensvej-indkørsel.webp", alt: "Nyt sommerhus i Løkken — Yderskov Arkitekter" },
      { src: "/images/Harald Jensens Vej/Løkken-sommerhus-Haraldjensensvej-terrasse.webp", alt: "Terrasse ved sommerhus i Løkken — Yderskov Arkitekter" },
      { src: "/images/Harald Jensens Vej/Løkken-sommerhus-Haraldjensensvej--udebruser.webp", alt: "Udebruser ved sommerhus i Løkken — Yderskov Arkitekter" },
    ],
    dark: false,
  },
];

const faqItems = [
  {
    q: "Hvad koster et arkitekttegnet sommerhus?",
    a: "Et arkitekttegnet sommerhus starter fra 12.000 kr. pr. m². Prisen afhænger af størrelse, materialer og placering. Kontakt os for en uforpligtende vurdering.",
  },
  {
    q: "Kan I tegne sommerhuse til specielle grunde?",
    a: "Ja — vi er specialister i at tilpasse sommerhuset til grunden, hvad enten det er en udsigtsgrund, klitgrund eller skovgrund.",
  },
  {
    q: "Kræver et nyt sommerhus byggetilladelse?",
    a: "Ja, de fleste nye sommerhuse kræver byggetilladelse. Vi søger og håndterer hele processen med kommunen.",
  },
  {
    q: "Kan et sommerhus laves til helårsbrug?",
    a: "Det afhænger af lokalplanen for grunden. Vi rådgiver om mulighederne og søger dispensation hvis relevant.",
  },
  {
    q: "Arbejder I med faste priser?",
    a: "Ja. Vi tilbyder fast pris på arkitekthonoraret, så du altid kender dine udgifter fra start.",
  },
  {
    q: "Kan I tegne et sommerhus der egner sig til udlejning?",
    a: "Absolut. Vi designer sommerhuse der er attraktive for lejere — med god plads, lys og faciliteter.",
  },
];

export default function SommerhusePage() {
  const projectSchema = {
    "@context": "https://schema.org",
    "@graph": projectGalleries.map((p) => {
      const location = p.title.split(",").pop()?.trim().replace(".", "").replace(/\n/g, " ") || "Danmark";
      return {
        "@type": "SingleFamilyResidence",
        "name": p.title.replace(/\n/g, " "),
        "description": `Arkitekttegnet sommerhus i ${location} tegnet af Yderskov Arkitekter.`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": location,
          "addressCountry": "DK",
        },
        "image": p.images.map((img) => `https://yderskov.com${img.src}`),
        "architect": {
          "@type": "LocalBusiness",
          "name": "Yderskov Arkitekter",
          "url": "https://yderskov.com/",
        },
      };
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <Nav />
      <Hero
        slides={[{ src: "/images/Torndalsvej/Hals-Torndalsvej-terrasse.webp", alt: "Arkitekttegnet sommerhus — Yderskov Arkitekter" }]}
        tag="Sommerhuse"
        subtitle="Sommerhuse"
        lines={[
          "Jeres sommerhus skal dufte af hav, smage af frihed og holde i generationer.",
          "Gratis og uforpligtende første idemøde. Vi kommer ud til jer.",
        ]}
        italicLines={[0, 1]}
      />

      <section className="s">
        <div className="s-inner">
          <div className="text-2col">
            <div>
              <span className="eyebrow">Arkitekttegnede sommerhuse</span>
              <h1 className="sec-hed">Arkitekttegnede sommerhuse<br />fra idé til nøglefærdigt.</h1>
            </div>
            <div>
              <p className="body-p">
                Dit sommerhus skal passe til netop din grund — uanset om det er ved kysten, i skoven eller på et udsigtsareal. Vi tegner, projekterer og bygger med egne håndværkere.
              </p>
              <p className="body-p">
                Se vores sommerhusprojekter og lad dig inspirere på <Link href="/inspiration" className="text-link">vores inspirationsside</Link>. Som erfaren <Link href="/arkitekt-aalborg" className="text-link">arkitekt i Aalborg</Link> og resten af Jylland rådgiver vi gerne. Du kan også læse mere om <Link href="/priser" className="text-link">vores priser</Link> og faste aftaler. Gratis første møde på grunden.
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
            <ImageGrid images={gallery.images} />
          </div>
        </section>
      ))}

      {/* Catalog */}
      <section className="s s-off">
        <div className="s-inner">
          <div className="text-2col">
            <div>
              <span className="eyebrow">Projektkatalog</span>
              <h2 className="sec-hed">Download vores<br />sommerhus-katalog.</h2>
            </div>
            <div>
              <p className="body-p">
                Se alle vores sommerhusprojekter samlet i ét katalog — med billeder, beskrivelser og fakta om hvert projekt. Kataloget er klar til print.
              </p>
              <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
                <a
                  href="/katalog-sommerhuse-print.pdf"
                  download="Yderskov-Arkitekter-Sommerhus-katalog.pdf"
                  style={{ display: "inline-block", padding: "0.75rem 1.5rem", background: "#161616", color: "#fff", fontWeight: 500, fontSize: "0.875rem", letterSpacing: "0.04em", textDecoration: "none" }}
                >
                  Download katalog
                </a>
                <a
                  href="/katalog-sommerhuse.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-block", padding: "0.75rem 1.5rem", border: "1px solid #161616", color: "#161616", fontWeight: 500, fontSize: "0.875rem", letterSpacing: "0.04em", textDecoration: "none" }}
                >
                  Vis katalog
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-bg">
        <div className="stats-inner">
          <div className="stat"><div className="stat-num">12.000<sup> kr.</sup></div><div className="stat-lbl">Fra pr. m²</div></div>
          <div className="stat"><div className="stat-num">24<sup> timer</sup></div><div className="stat-lbl">Svar inden</div></div>
          <div className="stat"><div className="stat-num">10<sup>+</sup></div><div className="stat-lbl">Igangværende projekter</div></div>
          <div className="stat"><div className="stat-num">300<sup>+</sup></div><div className="stat-lbl">Projekter gennemført</div></div>
        </div>
      </div>

      <section className="s">
        <div className="s-inner">
          <span className="eyebrow">Spørgsmål og svar</span>
          <h2 className="sec-hed">FAQ — sommerhuse</h2>
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
              <h2 className="sec-hed">Lad os skabe<br />dit drømmesommerhus</h2>
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
