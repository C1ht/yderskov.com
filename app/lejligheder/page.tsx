import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import ImageGrid from "@/components/ImageGrid";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Arkitekttegnet lejlighed — renovering og ombygning — Yderskov Arkitekter",
  description:
    "Arkitekttegnet lejlighedsrenovering og ombygning. Vi tegner og projekterer dit lejlighedsprojekt. Gratis første møde.",
  alternates: { canonical: "https://yderskov.dk/lejligheder" },
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
  return (
    <>
      <Nav />
      <Hero
        slides={[{ src: "/images/Ågade 25/Aalborg-Ågade-renovering-køkken.webp", alt: "Lejlighedsrenovering, Ågade, Aalborg — Yderskov Arkitekter" }]}
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
                Vi tegner og projekterer lejlighedsrenoveringer — fra enkle opdateringer til fuld ombygning af planløsning. Med arkitektfaglig sparring sikrer vi at resultatet holder i mange år.
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
            { src: "/images/Ågade 25/Aalborg-Ågade-renovering-køkken.webp", alt: "Færdigt køkken i lejlighedsrenovering, Ågade — Yderskov Arkitekter" },
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
