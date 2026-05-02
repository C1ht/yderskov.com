import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import ImageGrid from "@/components/ImageGrid";

export const metadata: Metadata = {
  title: "Om- og tilbygning — arkitekt pris og projekter — Yderskov Arkitekter",
  description:
    "Arkitekttegnede tilbygninger og ombygninger i Aalborg og Danmark. Se projekter, priser og proces. Gratis første møde.",
  alternates: { canonical: "https://yderskov.dk/tilbygninger" },
};

const projectGalleries = [
  {
    eyebrow: "Projekt",
    title: "Ombygning og\nmodernisering af 50er-villa.",
    images: [
      { src: "/images/Godthåbsvej/yderskov-ombygning-efter-2.jpg", alt: "Ombygning — Yderskov Arkitekter" },
      { src: "/images/Godthåbsvej/yderskov-ombygning-efter-3.jpg", alt: "Ombygning — Yderskov Arkitekter" },
      { src: "/images/Godthåbsvej/yderskov-ombygning-efter-4.jpg", alt: "Ombygning — Yderskov Arkitekter" },
    ],
    dark: true,
  },
  {
    eyebrow: "Projekt",
    title: "Villa med\ntilbygning.",
    images: [
      { src: "/images/Leonoravej villa tilbygning/IMG_7376.jpeg", alt: "Villa med tilbygning — Yderskov Arkitekter" },
      { src: "/images/Leonoravej villa tilbygning/IMG_7378.jpeg", alt: "Villa med tilbygning — Yderskov Arkitekter" },
      { src: "/images/Leonoravej villa tilbygning/IMG_7379.jpeg", alt: "Villa med tilbygning — Yderskov Arkitekter" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Tilbygning og\nrenovering.",
    images: [
      { src: "/images/Neptunvej/IMG_2588.jpeg", alt: "Tilbygning — Yderskov Arkitekter" },
      { src: "/images/Neptunvej/IMG_2589.jpeg", alt: "Tilbygning — Yderskov Arkitekter" },
      { src: "/images/Neptunvej/IMG_2592.jpeg", alt: "Tilbygning — Yderskov Arkitekter" },
    ],
    dark: true,
  },
  {
    eyebrow: "Projekt",
    title: "Ombygning af\neksisterende 70er-villa.",
    images: [
      { src: "/images/Gravenstenvej/EEBD18F8-48F7-43CE-AE15-91FF91953CF7-2.jpg", alt: "Ombygning — Yderskov Arkitekter" },
      { src: "/images/Gravenstenvej/IMG_9584.jpg", alt: "Ombygning — Yderskov Arkitekter" },
      { src: "/images/Gravenstenvej/IMG_9883.jpg", alt: "Ombygning — Yderskov Arkitekter" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Lille, gammelt parcelhus\nombygget til moderne bolig.",
    images: [
      { src: "/images/Emils hus Olufsgade/villa-emil.jpg", alt: "Ombygning — Yderskov Arkitekter" },
      { src: "/images/Emils hus Olufsgade/IMG_8303.jpeg", alt: "Ombygning — Yderskov Arkitekter" },
      { src: "/images/Emils hus Olufsgade/IMG_8307.jpeg", alt: "Ombygning — Yderskov Arkitekter" },
    ],
    dark: true,
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
      <Hero slides={[{ src: "/images/Leonoravej villa tilbygning/IMG_7376.jpeg", alt: "Villa med tilbygning — Yderskov Arkitekter" }]} />

      <section className="s">
        <div className="s-inner">
          <div className="text-2col">
            <div>
              <span className="eyebrow">Om- og tilbygninger</span>
              <h1 className="sec-hed">Om- og tilbygninger<br />med arkitekttegnet kvalitet.</h1>
            </div>
            <div>
              <p className="body-p">
                Din bolig rummer sandsynligvis mere potentiale end du tror. Vi ser mulighederne og tegner en løsning der giver mere lys, plads og en bedre planløsning.
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
            <ImageGrid images={gallery.images} />
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
