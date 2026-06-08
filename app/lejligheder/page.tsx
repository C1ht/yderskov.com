import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import ImageGrid from "@/components/ImageGrid";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Arkitekt til lejlighed — Renovering & ombygning | Yderskov",
  description:
    "Få hjælp af en arkitekt til renovering og ombygning af din lejlighed. Vi maksimerer dagslys og planløsning til fast pris. Få et gratis første møde!",
  alternates: { canonical: "https://yderskov.com/lejligheder" },
};

const faqItems = [
  {
    q: "Hvad koster det at renovere en lejlighed med arkitekt?",
    a: "En lejlighedsrenovering starter typisk fra 16.000 kr. pr. m². Prisen afhænger af projektets omfang og materialevalg.",
  },
  {
    q: "Hvad kan en arkitekt bidrage med i en lejlighedsrenovering?",
    a: "En arkitekt sikrer at renoveringen er gennemtænkt — fra planløsning og lysforhold til materialevalg og myndighedsgodkendelse.",
  },
  {
    q: "Kræver lejlighedsrenovering tilladelse?",
    a: "Afhænger af projektets omfang. Bærende vægge og ændringer til installationer kræver normalt tilladelse. Vi håndterer dette.",
  },
  {
    q: "Kan I hjælpe med at samle to lejligheder?",
    a: "Ja — vi tegner sammenlægning af lejligheder og håndterer alle tekniske og myndighedsmæssige krav.",
  },
];

export default function LejlighederPage() {
  const projectSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Apartment",
        "name": "Lejlighedsrenovering I, Ågade, Aalborg",
        "description": "Arkitekttegnet lejlighedsrenovering og ombygning i Ågade, Aalborg udført af Yderskov Arkitekter.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Aalborg",
          "addressCountry": "DK",
        },
        "image": [
          "https://yderskov.com/images/Ågade 25/Aalborg-Ågade-renovering-plantegning.webp",
          "https://yderskov.com/images/Ågade 25/Aalborg-Ågade-renovering-bad.webp",
          "https://yderskov.com/images/Ågade 25/Aalborg-Ågade-renovering-køkken.webp",
          "https://yderskov.com/images/Ågade 25/Aalborg-Ågade-renovering-vinduer.webp",
          "https://yderskov.com/images/Ågade 25/Aalborg-Ågade-renovering-soveværelse.webp",
          "https://yderskov.com/images/Ågade 25/Aalborg-Ågade-renovering-køkkenbordplads.webp",
          "https://yderskov.com/images/Ågade 25/Aalborg-Ågade-renovering-gang.webp",
          "https://yderskov.com/images/Ågade 25/Aalborg-Ågade-renovering-køkken-indpakket.webp",
          "https://yderskov.com/images/Ågade 25/Aalborg-Ågade-renovering-køkken-undervejs.webp",
          "https://yderskov.com/images/Ågade 25/Aalborg-Ågade-renovering-niche-amerikanerkøleskab.webp",
        ],
        "architect": {
          "@type": "LocalBusiness",
          "name": "Yderskov Arkitekter",
          "url": "https://yderskov.com/",
        },
      },
      {
        "@type": "Apartment",
        "name": "Lejlighedsrenovering III (1. th), Reberbansgade, Aalborg",
        "description": "Arkitekttegnet lejlighedsrenovering af 1. th i Reberbansgade, Aalborg udført af Yderskov Arkitekter.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Aalborg",
          "addressCountry": "DK",
        },
        "image": [
          "https://yderskov.com/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-køkken.webp",
          "https://yderskov.com/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-opvaskemaskine.webp",
          "https://yderskov.com/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-soveværelse.webp",
          "https://yderskov.com/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-stur.webp",
          "https://yderskov.com/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-stue-soveværelseskik.webp",
          "https://yderskov.com/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-soveværelse-stuekik.webp",
          "https://yderskov.com/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-køkken-kogesektion.webp",
          "https://yderskov.com/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-køkkengulv.webp",
          "https://yderskov.com/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-stuegulv.webp",
          "https://yderskov.com/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-badmiljø.webp",
          "https://yderskov.com/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-toilet.webp",
        ],
        "architect": {
          "@type": "LocalBusiness",
          "name": "Yderskov Arkitekter",
          "url": "https://yderskov.com/",
        },
      },
      {
        "@type": "Apartment",
        "name": "Lejlighedsrenovering III (1. tv), Reberbansgade, Aalborg",
        "description": "Arkitekttegnet lejlighedsrenovering af 1. tv i Reberbansgade, Aalborg udført af Yderskov Arkitekter.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Aalborg",
          "addressCountry": "DK",
        },
        "image": [
          "https://yderskov.com/images/Reberbansgade/Aalborg-reberbansgade-renovering-1tv-køkken-.webp",
          "https://yderskov.com/images/Reberbansgade/Aalborg-reberbansgade-renovering-1tv-køkkenhylder.webp",
          "https://yderskov.com/images/Reberbansgade/Aalborg-reberbansgade-renovering-1tv-toilet.webp",
        ],
        "architect": {
          "@type": "LocalBusiness",
          "name": "Yderskov Arkitekter",
          "url": "https://yderskov.com/",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <Nav />
      <Hero
        slides={[{ src: "/images/Ågade 25/Aalborg-Ågade-renovering-køkken.webp", alt: "Lejlighedsrenovering, Ågade, Aalborg — Yderskov Arkitekter", style: { transform: "rotate(180deg)" } }]}
        tag="Lejligheder"
        subtitle="Lejligheder"
        lines={[
          "Selv få kvadratmeter kan føles som præcis nok, når de er tegnet rigtigt.",
          "Gratis og uforpligtende første idemøde. Vi kommer ud til jer.",
        ]}
        italicLines={[0, 1]}
      />

      <section className="s">
        <div className="s-inner">
          <div className="text-2col">
            <div>
              <span className="eyebrow">Lejligheder</span>
              <h1 className="sec-hed">Lejlighedsrenovering<br />med arkitekt.</h1>
            </div>
            <div>
              <p className="body-p">
                Vi tegner og projekterer lejlighedsrenoveringer — fra enkle opdateringer til fuld ombygning af planløsning. Se også vores andre <Link href="/villaer" className="text-link">villaer og byggeprojekter</Link>, eller læs mere om <Link href="/om" className="text-link">vores tegnestue</Link> og vores samlede proces.
              </p>
              <p className="body-p">
                Vi håndterer tegninger, myndighedsgodkendelse og koordinering med håndværkere.
              </p>
              <p className="body-p">
                <Link href="#kontakt" className="text-link">→ Kom i gang</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="s s-off">
        <div className="s-inner">
          <div className="proj-header">
            <div>
              <span className="eyebrow">Projekt</span>
              <h2 className="sec-hed" style={{ marginBottom: 0 }}>Lejlighedsrenovering I<br />Ågade, Aalborg.</h2>
            </div>
          </div>
          <p className="proj-grid-label">Efter ombygning</p>
          <ImageGrid images={[
            { src: "/images/Ågade 25/Aalborg-Ågade-renovering-plantegning.webp", alt: "Plantegning, lejlighedsrenovering Ågade — Yderskov Arkitekter" },
            { src: "/images/Ågade 25/Aalborg-Ågade-renovering-bad.webp", alt: "Færdigt badeværelse i lejlighedsrenovering, Ågade — Yderskov Arkitekter" },
            { src: "/images/Ågade 25/Aalborg-Ågade-renovering-køkken.webp", alt: "Færdigt køkken i lejlighedsrenovering, Ågade — Yderskov Arkitekter", imgStyle: { transform: "rotate(180deg)" } },
            { src: "/images/Ågade 25/Aalborg-Ågade-renovering-vinduer.webp", alt: "Restaurerede originale vinduer i lejlighedsrenovering, Ågade — Yderskov Arkitekter" },
          ]} />
          <p className="proj-grid-label" style={{ marginTop: "2rem" }}>Under ombygning</p>
          <ImageGrid images={[
            { src: "/images/Ågade 25/Aalborg-Ågade-renovering-soveværelse.webp", alt: "Soveværelse i lejlighedsrenovering, Ågade — Yderskov Arkitekter" },
            { src: "/images/Ågade 25/Aalborg-Ågade-renovering-køkkenbordplads.webp", alt: "Køkkenbordplads i lejlighedsrenovering, Ågade — Yderskov Arkitekter" },
            { src: "/images/Ågade 25/Aalborg-Ågade-renovering-gang.webp", alt: "Gang under renovering, Ågade — Yderskov Arkitekter" },
            { src: "/images/Ågade 25/Aalborg-Ågade-renovering-køkken-indpakket.webp", alt: "Køkken under montering, Ågade — Yderskov Arkitekter" },
            { src: "/images/Ågade 25/Aalborg-Ågade-renovering-køkken-undervejs.webp", alt: "Køkken undervejs, Ågade — Yderskov Arkitekter" },
            { src: "/images/Ågade 25/Aalborg-Ågade-renovering-niche-amerikanerkøleskab.webp", alt: "Niche til amerikanerkøleskab under renovering, Ågade — Yderskov Arkitekter" },
          ]} />
        </div>
      </section>

      <section className="s">
        <div className="s-inner">
          <div className="proj-header">
            <div>
              <span className="eyebrow">Projekt</span>
              <h2 className="sec-hed" style={{ marginBottom: 0 }}>Lejlighedsrenovering III<br />Reberbansgade, Aalborg.</h2>
            </div>
          </div>
          <ImageGrid images={[
            { src: "/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-køkken.webp", alt: "Køkken i lejlighedsrenovering, Reberbansgade — Yderskov Arkitekter" },
            { src: "/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-opvaskemaskine.webp", alt: "Opvaskemaskine i køkken, Reberbansgade — Yderskov Arkitekter" },
            { src: "/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-soveværelse.webp", alt: "Soveværelse i lejlighedsrenovering, Reberbansgade — Yderskov Arkitekter" },
            { src: "/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-stur.webp", alt: "Stue i lejlighedsrenovering, Reberbansgade — Yderskov Arkitekter" },
            { src: "/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-stue-soveværelseskik.webp", alt: "Kik fra stue mod soveværelse, Reberbansgade — Yderskov Arkitekter" },
            { src: "/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-soveværelse-stuekik.webp", alt: "Kik fra soveværelse mod stue, Reberbansgade — Yderskov Arkitekter" },
            { src: "/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-køkken-kogesektion.webp", alt: "Kogesektion i køkken, Reberbansgade — Yderskov Arkitekter" },
            { src: "/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-køkkengulv.webp", alt: "Køkkengulv i lejlighedsrenovering, Reberbansgade — Yderskov Arkitekter" },
            { src: "/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-stuegulv.webp", alt: "Stuegulv i lejlighedsrenovering, Reberbansgade — Yderskov Arkitekter" },
            { src: "/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-badmiljø.webp", alt: "Badeværelse i lejlighedsrenovering, Reberbansgade — Yderskov Arkitekter" },
            { src: "/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-toilet.webp", alt: "Toilet i lejlighedsrenovering, Reberbansgade — Yderskov Arkitekter" },
          ]} />
        </div>
      </section>

      <section className="s">
        <div className="s-inner">
          <div className="proj-header">
            <div>
              <span className="eyebrow">Projekt</span>
              <h2 className="sec-hed" style={{ marginBottom: 0 }}>Lejlighedsrenovering III<br />Reberbansgade, Aalborg.</h2>
            </div>
          </div>
          <ImageGrid images={[
            { src: "/images/Reberbansgade/Aalborg-reberbansgade-renovering-1tv-køkken-.webp", alt: "Køkken i lejlighedsrenovering, Reberbansgade — Yderskov Arkitekter" },
            { src: "/images/Reberbansgade/Aalborg-reberbansgade-renovering-1tv-køkkenhylder.webp", alt: "Køkkenhylder i lejlighedsrenovering, Reberbansgade — Yderskov Arkitekter" },
            { src: "/images/Reberbansgade/Aalborg-reberbansgade-renovering-1tv-toilet.webp", alt: "Toilet i lejlighedsrenovering, Reberbansgade — Yderskov Arkitekter" },
          ]} />
        </div>
      </section>

      <div className="stats-bg">
        <div className="stats-inner">
          <div className="stat"><div className="stat-num">16.000<sup> kr.</sup></div><div className="stat-lbl">Fra pr. m²</div></div>
          <div className="stat"><div className="stat-num">24<sup> timer</sup></div><div className="stat-lbl">Svar inden</div></div>
          <div className="stat"><div className="stat-num">10<sup>+</sup></div><div className="stat-lbl">Igangværende projekter</div></div>
          <div className="stat"><div className="stat-num">300<sup>+</sup></div><div className="stat-lbl">Projekter gennemført</div></div>
        </div>
      </div>

      <section className="s">
        <div className="s-inner">
          <span className="eyebrow">Spørgsmål og svar</span>
          <h2 className="sec-hed">FAQ — lejligheder</h2>
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
              <h2 className="sec-hed">Fortæl os om<br />dit projekt</h2>
              <p style={{ marginTop: "1.5rem" }}>Ring eller skriv til os. Vi svarer inden 24 timer og tilbyder et gratis, uforpligtende møde.</p>
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
