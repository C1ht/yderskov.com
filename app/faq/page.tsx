import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "FAQ — spørgsmål og svar om arkitekt — Yderskov Arkitekter",
  description:
    "Svar på de mest stillede spørgsmål om arkitekt, byggeri, priser og proces hos Yderskov Arkitekter.",
  alternates: { canonical: "https://yderskov.dk/faq" },
};

const sections = [
  {
    title: "Priser & proces",
    items: [
      { q: "Hvad koster det at hyre en arkitekt?", a: "Prisen afhænger af projektets størrelse og kompleksitet. Vi arbejder med faste priser, så du altid ved hvad du betaler. Kontakt os for en uforpligtende vurdering af dit projekt." },
      { q: "Er det første møde gratis?", a: "Ja — det første møde er altid gratis og uforpligtende. Vi kommer ud til dig på grunden og giver en vurdering af mulighederne." },
      { q: "Hvad er inkluderet i prisen?", a: "Vi tilbyder fast pris på alle ydelser — fra skitseforslag og myndighedsprojekt til byggestyring og færdigmelding. Alt specificeres i tilbuddet." },
      { q: "Hvornår betaler jeg?", a: "Vi fakturerer løbende efter aftalte milepæle. Ingen stor engangsudgift fra starten." },
      { q: "Kan I give et samlet tilbud på arkitekt og byggeri?", a: "Ja — vi giver gerne et samlet tilbud der dækker både arkitekthonorar og håndværkerudgifter med egne håndværkere." },
      { q: "Arbejder I med faste priser?", a: "Ja. Vi tilbyder fast pris på arkitekthonoraret, så du altid kender dine udgifter. Ingen ubehagelige overraskelser undervejs." },
      { q: "Hvad er forskellen på skitse og myndighedsprojekt?", a: "En skitse viser designet og mulighederne. Et myndighedsprojekt er de tekniske tegninger der bruges til at søge byggetilladelse." },
      { q: "Tager I projekter uden for Nordjylland?", a: "Ja — vi arbejder primært i Nordjylland, men tager gerne projekter i hele Danmark." },
      { q: "Hvad er jeres svartid?", a: "Vi svarer normalt inden for 24 timer på alle henvendelser." },
      { q: "Kan jeg se referencer?", a: "Ja — vi viser gerne referencer og kan sætte dig i kontakt med tidligere kunder i dit område." },
    ],
  },
  {
    title: "Villa & nybyg",
    items: [
      { q: "Hvad koster det at bygge en ny villa?", a: "En arkitekttegnet villa starter fra 15.000 kr. pr. m². Prisen afhænger af størrelse, materialer og kompleksitet." },
      { q: "Hvor lang tid tager det at bygge en ny villa?", a: "Fra første møde til indflytning tager det typisk 12-18 måneder. Det afhænger af projektets størrelse og kommunens sagsbehandlingstid." },
      { q: "Hvad er forskellen på arkitekttegnet hus og typehus?", a: "Et arkitekttegnet hus designes specifikt til din grund og dine ønsker. Et typehus er et standardprodukt. Vi tilpasser alt fra planløsning til facader." },
      { q: "Søger I byggetilladelse?", a: "Ja — vi håndterer hele myndighedsprocessen, herunder byggetilladelse, BR-krav og kommunal godkendelse." },
      { q: "Kan I hjælpe med at finde en byggegrund?", a: "Vi kan rådgive om hvad der gør en grund god til dit projekt, men vi formidler ikke grunde." },
      { q: "Hvad er energikravene til nyt byggeri?", a: "Nyt byggeri skal overholde BR18 energikravene. Vi sikrer at din villa opfylder kravene og beregner energiforbrug og energiklasse." },
    ],
  },
  {
    title: "Om- & tilbygning",
    items: [
      { q: "Hvad koster en tilbygning?", a: "En tilbygning koster typisk fra 14.000–19.000 kr. pr. m². Prisen afhænger af størrelse, konstruktion og materialer." },
      { q: "Kræver en tilbygning byggetilladelse?", a: "Det afhænger af størrelsen. Tilbygninger over 35 m² kræver normalt byggetilladelse. Vi håndterer hele processen." },
      { q: "Kan I lave en ombygning af planløsning?", a: "Ja — vi tegner alt fra nye køkkener og badeværelser til fuld ombygning af planløsning." },
      { q: "Hvad er mulighederne for min bolig?", a: "Det afhænger af din grund, lokalplanen og boligens konstruktion. Vi vurderer mulighederne ved et gratis møde." },
      { q: "Kan I tilbygge et sommerhus?", a: "Ja — vi tegner tilbygninger til sommerhuse og søger eventuel dispensation fra sommerhusreglerne." },
      { q: "Kan man bygge op i stedet for ud?", a: "Ja — i visse tilfælde er det muligt at tilbygge i højden. Det afhænger af lokalplanen og konstruktionen." },
      { q: "Hvad med bærende vægge?", a: "Vi beregner og tegner konstruktioner der involverer bærende vægge og sikrer godkendelse fra en statiker." },
      { q: "Kan I hjælpe med energirenovering?", a: "Ja — vi tegner energirenoveringer og søger eventuelle tilskud og godkendelser." },
    ],
  },
  {
    title: "Sommerhus",
    items: [
      { q: "Hvad koster et arkitekttegnet sommerhus?", a: "Et arkitekttegnet sommerhus starter fra 14.000 kr. pr. m². Prisen afhænger af størrelse, materialer og placering." },
      { q: "Kan sommerhuset bruges hele året?", a: "Det afhænger af lokalplanen. Vi rådgiver om mulighederne og søger dispensation hvis relevant." },
      { q: "Kan I tegne sommerhuse til udsigtsgrunde?", a: "Ja — vi er specialister i at tilpasse sommerhuset til grunden, hvad enten det er en udsigtsgrund, klitgrund eller skovgrund." },
      { q: "Hvad er reglerne for sommerhuse?", a: "Sommerhuse er reguleret af planloven, lokalplaner og bygningsreglementet. Vi kender reglerne og sikrer at dit sommerhus overholder dem." },
      { q: "Kan vi udleje sommerhuset?", a: "Ja — vi designer gerne sommerhuse der er attraktive for lejere med god plads, lys og faciliteter." },
      { q: "Kan I tegne en tilbygning til mit eksisterende sommerhus?", a: "Ja — vi tegner tilbygninger og ombygninger af eksisterende sommerhuse." },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: sections.flatMap((s) =>
    s.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav />
      <Hero
        slides={[{ src: "/images/Løvevej/Ålbæk-poolhus-terrasse.webp", alt: "Arkitekttegnet bolig — Yderskov Arkitekter" }]}
        tag="FAQ"
        subtitle="FAQ"
        lines={[
          "I har tankerne, vi sætter stregerne.",
          "Byggeri tegnet kun til jer, til jeres grund, jeres ønsker og jeres budget.",
          "Gratis og uforpligtende første idemøde. Vi kommer ud til jer.",
        ]}
        italicLines={[1, 2]}
      />

      <section className="s">
        <div className="s-inner">
          <div style={{ maxWidth: "640px" }}>
            <span className="eyebrow">Spørgsmål og svar</span>
            <h1 className="sec-hed">Ofte stillede spørgsmål</h1>
            <p className="body-p" style={{ marginTop: "1rem" }}>
              Her har vi samlet svar på de spørgsmål vi oftest får. Du kan også læse om <Link href="/om" className="text-link">vores proces</Link> eller se vores prissatser på <Link href="/priser" className="text-link">vores prisside</Link>. Finder du ikke svar på dit spørgsmål, er du altid velkommen til at <Link href="/kontakt" className="text-link">kontakte os</Link>.
            </p>
          </div>
        </div>
      </section>

      {sections.map((section, i) => (
        <section key={i} className={`s${i % 2 === 1 ? " s-off" : ""}`}>
          <div className="s-inner">
            <span className="eyebrow">{section.title}</span>
            <h2 className="sec-hed">{section.title}</h2>
            <div className="faq-grid">
              {section.items.map((item, j) => (
                <div key={j} className="faq-item">
                  <p className="faq-q">{item.q}</p>
                  <p className="faq-a">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBand />

      <section className="s form-bg" id="kontakt">
        <div className="s-inner">
          <div className="form-layout">
            <div className="form-meta">
              <span className="eyebrow">Stadig spørgsmål?</span>
              <h2 className="sec-hed">Spørg os<br />direkte</h2>
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
