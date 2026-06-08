import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Hvad koster en arkitekt? Se vores faste priser | Yderskov",
  description:
    "Hvad koster en arkitekt? Se vores gennemskuelige priser på skitseforslag, myndighedsprojekter og byggestyring. Få fast pris og et gratis første møde.",
  alternates: { canonical: "https://yderskov.com/priser" },
};

const byggeriPrices = [
  { type: "Ny villa", price: "Fra 14.000 kr. pr. m²", desc: "Inkl. alle håndværkerydelser, materialer og byggestyring." },
  { type: "Tilbygning", price: "Fra 14.000 kr. pr. m²", desc: "Inkl. integration med eksisterende bygning." },
  { type: "Sommerhus", price: "Fra 12.000 kr. pr. m²", desc: "Inkl. alle håndværkerydelser og materialer." },
  { type: "Lejlighed", price: "Fra 16.000 kr. pr. m²", desc: "Inkl. fuld renovering med arkitekttegnede løsninger." },
];

const arkitektYdelser = [
  { name: "Skitseforslag", price: "Fra kr. 12.500 inkl. moms", desc: "Første tegningsudkast der viser mulighederne for dit projekt." },
  { name: "Myndighedsprojekt", price: "Fra kr. 18.750 inkl. moms", desc: "Tegninger og dokumentation til byggetilladelse hos kommunen." },
  { name: "Udbudsmateriale", price: "Fra kr. 18.750 inkl. moms", desc: "Detaljerede tegninger og beskrivelser til håndværkere." },
  { name: "Byggestyring / tilsyn", price: "Fast pris aftales", desc: "Vi styrer håndværkere og sikrer kvalitet og økonomi." },
  { name: "Færdigmelding", price: "Fra kr. 6.250 inkl. moms", desc: "Afsluttende dokumentation og færdigmelding til kommunen." },
  { name: "LCA-beregning", price: "Fra kr. 6.250 inkl. moms", desc: "Obligatorisk livscyklusanalyse for nybyggeri over 100 m²." },
  { name: "Energiberegning", price: "Fra kr. 6.250 inkl. moms", desc: "Beregning af bygningens energiforbrug og energiklasse." },
  { name: "Varmetabsberegning", price: "Fra kr. 3.125 inkl. moms", desc: "Beregning af varmetab til brug for varmepumpe og VVS." },
  { name: "Landinspektør", price: "Fra kr. 9.375 inkl. moms", desc: "Afsætning af bygning på grunden og koordinatsæt." },
  { name: "Energimærkning + blowerdoor", price: "Fra kr. 8.125 inkl. moms", desc: "Energimærke og lufttæthedstest af den færdige bygning." },
  { name: "Gebyr til kommunen", price: "Fra kr. 4.375 inkl. moms", desc: "Kommunens byggesagsgebyr varierer efter projektets størrelse." },
  { name: "Boreprøve / jordbundsanalyse", price: "Fra kr. 9.375 inkl. moms", desc: "Analyse af jordbundsforhold til brug for fundering." },
];

const faqItems = [
  {
    q: "Hvad koster en arkitekttegnet villa pr. m²?",
    a: "En ny arkitekttegnet villa opført med vores egne faste håndværkere koster typisk fra 14.000 kr. pr. m² som et fuldstændig nøglefærdigt og indflytningsklart byggeri. Denne m²-pris inkluderer alle materialer, løn og komplet byggestyring.",
  },
  {
    q: "Hvad koster et arkitekttegnet sommerhus pr. m²?",
    a: "Et arkitekttegnet sommerhus koster typisk fra 12.000 kr. pr. m² inkl. moms, materialer og håndværkere. Prisen pr. m² afhænger blandt andet af de valgte vinduespartier, tagform samt jordbunden.",
  },
  {
    q: "Hvad koster en tilbygning pr. m²?",
    a: "En tilbygning til et eksisterende hus koster typisk fra 14.000 kr. pr. m² inkl. moms, materialer og håndværkere. Prisen pr. m² afhænger især af tagløsningen (f.eks. fladt tag eller sadeltag) og tilslutningsarbejdet.",
  },
  {
    q: "Hvad koster en ombygning eller renovering af hus/lejlighed?",
    a: "En indvendig ombygning og totalrenovering koster typisk fra 16.000 kr. pr. m². Arealer som køkken og badeværelse (vådrum) er væsentligt dyrere end almindelige stuer og soveværelser.",
  },
  {
    q: "Hvad koster det at hyre en arkitekt?",
    a: "Vi tilbyder faste, gennemskuelige priser på vores arkitektydelser. Et komplet skitseforslag koster fra 12.500 kr. inkl. moms, og et færdigt myndighedsprojekt til byggetilladelse koster fra 18.750 kr. inkl. moms.",
  },
  {
    q: "Er det første møde med arkitekten gratis?",
    a: "Ja, det første idémøde er altid 100% gratis og uforpligtende hos Yderskov Arkitekter. We kører gerne ud og mødes direkte på din byggegrund eller adresse for at drøfte dit projekt.",
  },
];

export default function PriserPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav />
      <Hero
        slides={[{ src: "/images/Løkken sommerhus/Løkken-Alexandravej-sommerhus-terrasse.webp", alt: "Arkitekttegnet sommerhus i Løkken — Yderskov Arkitekter" }]}
        tag="Priser"
        subtitle="Priser"
        lines={[
          "Fast honorar, tæt kontakt. Du ved altid hvad du betaler og hvem du kan ringe til.",
          "Gratis og uforpligtende første idemøde. Vi kommer ud til jer.",
        ]}
        italicLines={[0, 1]}
      />

      {/* Intro */}
      <section className="s">
        <div className="s-inner">
          <div className="text-2col">
            <div>
              <span className="eyebrow">Priser og ydelser</span>
              <h1 className="sec-hed">Fast pris.<br />Ingen overraskelser.</h1>
            </div>
            <div>
              <p className="body-intro">
                Vi tilbyder fast pris på arkitekthonoraret — så du altid ved hvad du betaler. Prøv også vores <Link href="/prisberegner" className="text-link">prisberegner</Link> eller se et <Link href="/prisberegner/demo" className="text-link">demo-prisskøn</Link> med det samme. Det første møde er altid gratis og uforpligtende.
              </p>
              <p className="body-p">
                Alle priser er inkl. moms og er vejledende. Kontakt os for et præcist tilbud baseret på dit projekt.
              </p>
              <div className="about-tags" style={{ marginTop: "1.5rem" }}>
                <Link href="/kontakt" className="tag tag-dark">Book gratis møde →</Link>
                <Link href="/faq" className="tag">Se FAQ</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Byggeri priser */}
      <section className="s s-off">
        <div className="s-inner">
          <span className="eyebrow">Byggeri</span>
          <h2 className="sec-hed">Priser på byggeri</h2>
          <div className="pricing-grid" style={{ marginTop: "2rem" }}>
            {byggeriPrices.map((item) => (
              <div key={item.type} className="pricing-item">
                <p className="pricing-name">{item.type}</p>
                <p className="pricing-desc">{item.desc}</p>
                <p className="pricing-price">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arkitektydelser */}
      <section className="s">
        <div className="s-inner">
          <span className="eyebrow">Arkitekthonorar</span>
          <h2 className="sec-hed">Priser på arkitektydelser</h2>
          <div className="pricing-grid" style={{ marginTop: "2rem" }}>
            {arkitektYdelser.map((item) => (
              <div key={item.name} className="pricing-item">
                <p className="pricing-name">{item.name}</p>
                <p className="pricing-desc">{item.desc}</p>
                <p className="pricing-price">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-bg">
        <div className="stats-inner">
          <div className="stat"><div className="stat-num">12.000<sup> kr.</sup></div><div className="stat-lbl">Fra pr. m² (sommerhus)</div></div>
          <div className="stat"><div className="stat-num">24<sup> timer</sup></div><div className="stat-lbl">Svar inden</div></div>
          <div className="stat"><div className="stat-num">300<sup>+</sup></div><div className="stat-lbl">Projekter gennemført</div></div>
          <div className="stat"><div className="stat-num">0<sup> kr.</sup></div><div className="stat-lbl">Første møde</div></div>
        </div>
      </div>

      {/* FAQ */}
      <section className="s">
        <div className="s-inner">
          <span className="eyebrow">Spørgsmål og svar</span>
          <h2 className="sec-hed">FAQ — priser</h2>
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

      {/* Contact */}
      <section className="s form-bg" id="kontakt">
        <div className="s-inner">
          <div className="form-layout">
            <div className="form-meta">
              <span className="eyebrow">Kontakt os</span>
              <h2 className="sec-hed">Få et<br />uforpligtende tilbud</h2>
              <p style={{ marginTop: "1.5rem" }}>Ring eller skriv til os. Vi svarer inden 24 timer og giver et præcist tilbud baseret på dit projekt.</p>
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
