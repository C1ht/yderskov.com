import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Priser — arkitekt fast pris — Yderskov Arkitekter",
  description:
    "Se priser på arkitektydelser hos Yderskov Arkitekter. Fast pris på skitse, myndighedsprojekt, byggestyring og mere. Gratis første møde.",
  alternates: { canonical: "https://yderskov.dk/priser" },
};

const byggeriPrices = [
  { type: "Ny villa", price: "Fra 15.000 kr. pr. m²", desc: "Inkl. alle håndværkerydelser, materialer og byggestyring." },
  { type: "Tilbygning", price: "Fra 14.000 kr. pr. m²", desc: "Inkl. integration med eksisterende bygning." },
  { type: "Sommerhus", price: "Fra 14.000 kr. pr. m²", desc: "Inkl. alle håndværkerydelser og materialer." },
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
    q: "Hvad er en fast pris?",
    a: "En fast pris betyder at du kender arkitektens honorar fra første dag. Ingen overraskelser undervejs.",
  },
  {
    q: "Er det første møde gratis?",
    a: "Ja — det første møde er altid gratis og uforpligtende. Vi kommer ud til dig.",
  },
  {
    q: "Hvad er inkluderet i byggeprisen pr. m²?",
    a: "Byggeprisen pr. m² inkluderer alle håndværkerydelser og materialer. Arkitekthonoraret kommer oveni.",
  },
  {
    q: "Kan I give et samlet tilbud?",
    a: "Ja — vi giver gerne et samlet tilbud der dækker både arkitekthonorar og håndværkerudgifter.",
  },
  {
    q: "Hvad er forskellen på skitse og myndighedsprojekt?",
    a: "En skitse viser designet og mulighederne. Et myndighedsprojekt er de tekniske tegninger der bruges til at søge byggetilladelse.",
  },
  {
    q: "Hvornår betaler jeg?",
    a: "Vi fakturerer løbende efter aftalte milepæle. Ingen stor engangsudgift fra starten.",
  },
];

export default function PriserPage() {
  return (
    <>
      <Nav />
      <Hero
        slides={[{ src: "/images/Harald Jensens Vej/IMG_2937.jpeg", alt: "Tilbygning — Yderskov Arkitekter" }]}
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
                Vi tilbyder fast pris på arkitekthonoraret — så du altid ved hvad du betaler. Det første møde er altid gratis og uforpligtende.
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
          <div className="stat"><div className="stat-num">15.000<sup> kr.</sup></div><div className="stat-lbl">Fra pr. m²</div></div>
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
