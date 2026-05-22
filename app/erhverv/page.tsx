import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import ImageGrid from "@/components/ImageGrid";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Erhvervsbyggeri — arkitekt til kontor og butik — Yderskov Arkitekter",
  description:
    "Arkitekttegnet erhvervsbyggeri i Aalborg og Danmark. Kontorer, butikker, fabrikker og produktionslokaler. Gratis første møde.",
  alternates: { canonical: "https://yderskov.dk/erhverv" },
};

const projectGalleries = [
  {
    eyebrow: "Projekt",
    title: "Kontormiljø\nfor IT-virksomhed, Aalborg.",
    images: [
      { src: "/images/Assensvej Kontormiljø/Aalborg-Assensvej-kontormiljø.webp", alt: "Kontormiljø for IT-virksomhed, Aalborg — Yderskov Arkitekter" },
      { src: "/images/Assensvej Kontormiljø/Aalborg-Assensvej-kontormiljø-kontor.webp", alt: "Kontor i kontormiljø, Aalborg — Yderskov Arkitekter" },
      { src: "/images/Assensvej Kontormiljø/Aalborg-Assensvej-kontormiljø-glasvæg.webp", alt: "Glasvæg i kontormiljø, Aalborg — Yderskov Arkitekter" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Fabrik ombygget\ntil lejligheder i Aarhus centrum.",
    images: [
      { src: "/images/Fabrik Aarhus/fabrik aarhus yderskov.webp", alt: "Fabrik Aarhus — Yderskov Arkitekter" },
      { src: "/images/Fabrik Aarhus/fabrik ombygget yderskov.webp", alt: "Fabrik Aarhus — Yderskov Arkitekter" },
      { src: "/images/Fabrik Aarhus/fabrik ombygget køkken og altan yderskov.webp", alt: "Fabrik Aarhus — Yderskov Arkitekter" },
    ],
    dark: true,
  },
  {
    eyebrow: "Projekt",
    title: "Udlejningsboliger\ni Hals.",
    images: [
      { src: "/images/Hals Rækkehuse/Aalborgvej20 Hals udlejnkng Yderskov.webp", alt: "Hals rækkehuse — Yderskov Arkitekter" },
      { src: "/images/Hals Rækkehuse/Aalborgvej30 hals udlejning yderskov.webp", alt: "Hals rækkehuse — Yderskov Arkitekter" },
      { src: "/images/Hals Rækkehuse/Aalborgvej40 hals udlejning yderskov.webp", alt: "Hals rækkehuse — Yderskov Arkitekter" },
    ],
    dark: false,
  },
];

const faqItems = [
  {
    q: "Hvad koster erhvervsbyggeri med arkitekt?",
    a: "Prisen afhænger af projektets type og omfang. Vi giver et præcist tilbud baseret på jeres behov og ønsker.",
  },
  {
    q: "Hvilke typer erhvervsprojekter arbejder I med?",
    a: "Vi tegner kontorer, butikker, lager, produktionslokaler, restauranter og andre erhvervsbygninger.",
  },
  {
    q: "Håndterer I myndighedsgodkendelse for erhverv?",
    a: "Ja — vi søger og håndterer alle nødvendige tilladelser og godkendelser fra kommunen.",
  },
  {
    q: "Kan I tilpasse eksisterende erhvervslokaler?",
    a: "Absolut. Vi tegner ombygning og renovering af eksisterende erhvervslokaler til nye formål.",
  },
];

export default function ErhvervPage() {
  return (
    <>
      <Nav />
      <Hero
        slides={[{ src: "/images/Assensvej Kontormiljø/Aalborg-Assensvej-kontormiljø.webp", alt: "Erhvervsbyggeri — Yderskov Arkitekter" }]}
        tag="Erhverv"
        subtitle="Erhverv"
        lines={[
          "Dine rammer sætter tonen for din forretning. Lad os tegne dem.",
          "Gratis og uforpligtende første idemøde. Vi kommer ud til jer.",
        ]}
        italicLines={[0, 1]}
      />

      <section className="s">
        <div className="s-inner">
          <div className="text-2col">
            <div>
              <span className="eyebrow">Erhvervsbyggeri</span>
              <h1 className="sec-hed">Erhvervsbyggeri<br />tegnet til jeres behov.</h1>
            </div>
            <div>
              <p className="body-p">
                Vi tegner erhvervsbyggeri der afspejler jeres virksomhed — fra funktionelle kontorlokaler til produktionsfaciliteter med arkitektonisk identitet.
              </p>
              <p className="body-p">
                Vi håndterer hele processen fra idé til indvielse — med focus på jeres budget og tidsplan.
              </p>
              <p className="body-p">
                <Link href="#kontakt" className="text-link">→ Fortæl os om jeres projekt</Link>
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

      <div className="stats-bg">
        <div className="stats-inner">
          <div className="stat"><div className="stat-num">24<sup> timer</sup></div><div className="stat-lbl">Svar inden</div></div>
          <div className="stat"><div className="stat-num">300<sup>+</sup></div><div className="stat-lbl">Projekter gennemført</div></div>
          <div className="stat"><div className="stat-num">10<sup>+</sup></div><div className="stat-lbl">Igangværende projekter</div></div>
          <div className="stat"><div className="stat-num">2009</div><div className="stat-lbl">Grundlagt</div></div>
        </div>
      </div>

      <section className="s">
        <div className="s-inner">
          <span className="eyebrow">Spørgsmål og svar</span>
          <h2 className="sec-hed">FAQ — erhverv</h2>
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
              <h2 className="sec-hed">Fortæl os om<br />jeres erhvervsprojekt</h2>
              <p style={{ marginTop: "1.5rem" }}>Ring eller skriv til os. Vi svarer inden 24 timer.</p>
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
