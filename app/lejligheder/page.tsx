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
        slides={[{ src: "/images/Ågade 25/IMG_3965.webp", alt: "Lejlighedsrenovering — Yderskov Arkitekter" }]}
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
              <h2 className="sec-hed" style={{ marginBottom: 0 }}>Lejlighedsrenovering I<br />i Aalborg, Ågade.</h2>
            </div>
          </div>
          <ImageGrid images={[
            { src: "/images/Ågade 25/IMG_00161.webp", alt: "Lejlighedsrenovering — Yderskov Arkitekter" },
            { src: "/images/Ågade 25/IMG_3965.webp", alt: "Lejlighedsrenovering — Yderskov Arkitekter" },
            { src: "/images/Ågade 25/IMG_3966.webp", alt: "Lejlighedsrenovering — Yderskov Arkitekter" },
            { src: "/images/Ågade 25/ågade.webp", alt: "Lejlighedsrenovering — Yderskov Arkitekter" },
            { src: "/images/Ågade 25/IMG_1216.webp", alt: "Lejlighedsrenovering — Yderskov Arkitekter" },
            { src: "/images/Ågade 25/IMG_4513.webp", alt: "Lejlighedsrenovering — Yderskov Arkitekter" },
            { src: "/images/Ågade 25/IMG_4514.webp", alt: "Lejlighedsrenovering — Yderskov Arkitekter" },
            { src: "/images/Ågade 25/IMG_4515.webp", alt: "Lejlighedsrenovering — Yderskov Arkitekter" },
            { src: "/images/Ågade 25/IMG_7399.webp", alt: "Lejlighedsrenovering — Yderskov Arkitekter" },
            { src: "/images/Ågade 25/IMG_9570 (1).webp", alt: "Lejlighedsrenovering — Yderskov Arkitekter" },
          ]} />
        </div>
      </section>

      <section className="s">
        <div className="s-inner">
          <div className="proj-header">
            <div>
              <span className="eyebrow">Projekt</span>
              <h2 className="sec-hed" style={{ marginBottom: 0 }}>Lejlighedsrenovering II<br />i Aalborg, Reberbansgade.</h2>
            </div>
          </div>
          <ImageGrid images={[
            { src: "/images/Reberbansgade/køkken stor.webp", alt: "Lejlighedsrenovering II — Yderskov Arkitekter" },
            { src: "/images/Reberbansgade/IMG_1188.webp", alt: "Lejlighedsrenovering II — Yderskov Arkitekter" },
            { src: "/images/Reberbansgade/køkken stor (2).webp", alt: "Lejlighedsrenovering II — Yderskov Arkitekter" },
            { src: "/images/Reberbansgade/soveværele stor.webp", alt: "Lejlighedsrenovering II — Yderskov Arkitekter" },
            { src: "/images/Reberbansgade/IMG_1193.webp", alt: "Lejlighedsrenovering II — Yderskov Arkitekter" },
            { src: "/images/Reberbansgade/toilet l ille.webp", alt: "Lejlighedsrenovering II — Yderskov Arkitekter" },
            { src: "/images/Reberbansgade/stuegulv.webp", alt: "Lejlighedsrenovering II — Yderskov Arkitekter" },
            { src: "/images/Reberbansgade/køkkengulv.webp", alt: "Lejlighedsrenovering II — Yderskov Arkitekter" },
          ]} />
        </div>
      </section>

      <section className="s">
        <div className="s-inner">
          <div className="proj-header">
            <div>
              <span className="eyebrow">Projekt</span>
              <h2 className="sec-hed" style={{ marginBottom: 0 }}>Lejlighedsrenovering III<br />i Aalborg, Reberbansgade.</h2>
            </div>
          </div>
          <ImageGrid images={[
            { src: "/images/Reberbansgade/køkken lille 2.webp", alt: "Lejlighedsrenovering III — Yderskov Arkitekter" },
            { src: "/images/Reberbansgade/køkken lille.webp", alt: "Lejlighedsrenovering III — Yderskov Arkitekter" },
            { src: "/images/Reberbansgade/IMG_1202.webp", alt: "Lejlighedsrenovering III — Yderskov Arkitekter" },
            { src: "/images/Reberbansgade/IMG_1212.webp", alt: "Lejlighedsrenovering III — Yderskov Arkitekter" },
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
