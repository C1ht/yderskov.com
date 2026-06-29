import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import CtaBand from "@/components/CtaBand";
import InspirationGallery from "@/components/InspirationGallery";
import ImageGrid from "@/components/ImageGrid";

export const metadata: Metadata = {
  title: "Arkitekt Sjælland & København — Tegnestue | Yderskov",
  description:
    "Leder du efter en arkitekt på Sjælland el. i Kbh? Yderskov tegnestue tilbyder jysk grundighed, fast pris & gratis første møde direkte på din byggegrund!",
  alternates: { canonical: "https://yderskov.com/arkitekt-sjaelland" },
};

const sjaellandFAQ = [
  {
    q: "Påtager I jer opgaver på Sjælland, når I har base i Nordjylland?",
    a: "Ja, absolut. Vi arbejder landsdækkende og har udført adskillige projekter på Sjælland og i Københavnsområdet, herunder i Køge, Odsherred, Brønshøj og Ramløse. Vi kører og rejser gerne efter de rigtige opgaver.",
  },
  {
    q: "Er det første idémøde på Sjælland også gratis?",
    a: "Ja. Det første idemøde er 100% gratis og uforpligtende. Vi kommer gerne ud og mødes direkte på jeres byggegrund på Sjælland for at vurdere mulighederne.",
  },
  {
    q: "Hvordan fungerer byggeprocessen på Sjælland?",
    a: "Vi rådgiver, tegner og står for hele myndighedsprojektet. Vi samarbejder med faste underentreprenører og håndværkere, så I får en samlet fast pris og en fuldstændig tryg byggeproces.",
  },
  {
    q: "Hvilke typer projekter laver I på Sjælland?",
    a: "Vi tegner og opfører alt fra nye, eksklusive villaer og fritidshuse til gennemtænkte ombygninger og tilbygninger på eksisterende boliger.",
  },
];

const projectGalleries = [
  {
    eyebrow: "Projekt",
    title: "Funkis træ,\nglas og eternit, Sæby.",
    location: "Sæby, Nordjylland",
    size: "230 m² bolig · 60 m² garage",
    year: "2023",
    description: "Funkisvilla opført i listebeklædning med åbne facader og store vinduespartier. Huset er beliggende op ad skov og natur, og det betød meget for familien at byggeriet blev indpasset omhyggeligt i det omgivende område.",
    images: [
      { src: "/images/Karetmagervej/Sæby-ny-villa-funkis-forside.webp", alt: "Funkisvilla i træ, glas og eternit, Sæby — Arkitekttegnestuen Yderskov" },
      { src: "/images/Karetmagervej/Sæby-ny-villa-funkis-haveside.webp", alt: "Haveside på funkisvilla i Sæby — Arkitekttegnestuen Yderskov" },
      { src: "/images/Karetmagervej/Sæby-ny-villa-funkis-vejside.webp", alt: "Vejside på funkisvilla i Sæby — Arkitekttegnestuen Yderskov" },
      { src: "/images/Karetmagervej/Sæby-ny-villa-funkis-køkken.webp", alt: "Køkken i funkisvilla, Sæby — Arkitekttegnestuen Yderskov" },
      { src: "/images/Karetmagervej/Sæby-ny-villa-funkis-køkken-stue.webp", alt: "Køkken mod stue i funkisvilla, Sæby — Arkitekttegnestuen Yderskov" },
      { src: "/images/Karetmagervej/Sæby-ny-villa-funkis-køkken-spiseplads.webp", alt: "Køkken-alrum og spiseplads, Sæby — Arkitekttegnestuen Yderskov" },
      { src: "/images/Karetmagervej/Sæby-ny-villa-funkis-bad.webp", alt: "Badeværelse med fliser, Sæby — Arkitekttegnestuen Yderskov" },
      { src: "/images/Karetmagervej/Sæby-ny-villa-funkis-gang.webp", alt: "Gang med ovenlys, Sæby — Arkitekttegnestuen Yderskov" },
      { src: "/images/Karetmagervej/Sæby-ny-villa-funkis-haveside-2.webp", alt: "Haveside og terrasse, Sæby — Arkitekttegnestuen Yderskov" },
    ],
    dark: true,
  },
  {
    eyebrow: "Projekt",
    title: "Sommerhus med\npool, Ålbæk.",
    location: "Ålbæk, Nordjylland",
    size: "185 m² wellness-hus · pool & spa",
    year: "2023",
    description: "Eksklusivt luksussommerhus i Ålbæk beklædt med lyst træ, tegnet som et wellness-fristed. Huset rummer en storslået wellness-afdeling med swimmingpool, sauna samt både indvendig og udvendig spa. Indvendigt er der lyst køkkenalrum, hyggelig hems og et aktivitetsrum med billard. Huset rummer flere værelser og badeværelser og er egnet til en stor familie eller udlejning.",
    images: [
      { src: "/images/Løvevej/Ålbæk-poolhus-terrasse.webp", alt: "Arkitekttegnet poolhus i Ålbæk — Arkitekttegnestuen Yderskov" },
      { src: "/images/Løvevej/Ålbæk-poolhus-pool.webp", alt: "Indendørs pool i arkitekttegnet sommerhus — Arkitekttegnestuen Yderskov" },
      { src: "/images/Løvevej/Ålbæk-poolhus-køkken.webp", alt: "Moderne køkken med ø i poolhus — Arkitekttegnestuen Yderskov" },
      { src: "/images/Løvevej/Løvevej køkken ophold.webp", alt: "Køkken og opholdsstue i poolhus — Arkitekttegnestuen Yderskov" },
      { src: "/images/Løvevej/LØVEVEJ-BAD.webp", alt: "Flot badeværelse i poolhus — Arkitekttegnestuen Yderskov" },
      { src: "/images/Løvevej/Løvevej hems.webp", alt: "Hyggelig hems i poolhus — Arkitekttegnestuen Yderskov" },
      { src: "/images/Løvevej/Ålbæk-poolhus-køkken-spise-plads-alkove.webp", alt: "Køkken, spiseplads og alkove i poolhus — Arkitekttegnestuen Yderskov" },
      { src: "/images/Løvevej/Ålbæk-poolhus-aktivitetsrum.webp", alt: "Aktivitetsrum med bordfodbold og billardbord — Arkitekttegnestuen Yderskov" },
      { src: "/images/Løvevej/Ålbæk-poolhus-badmiljø.webp", alt: "Badmiljø i arkitekttegnet poolhus — Arkitekttegnestuen Yderskov" },
      { src: "/images/Løvevej/Ålbæk-poolhus-toilet.webp", alt: "Badeværelse i arkitekttegnet poolhus — Arkitekttegnestuen Yderskov" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Udsigtsvilla med\nnaturlige materialer, Frederikshavn.",
    location: "Frederikshavn, Nordjylland",
    size: "208 m² bolig · 63 m² garage · 37 m² overdækning",
    year: "2021",
    description: "Udsigtsvilla tegnet til en skrånende naturgrund med panoramaudsigt. Huset svæver over bakken med en oase af naturlige materialer, mens garagen er integreret i underetagen.",
    images: [
      { src: "/images/Lerstien/Frederikshavn-lerstien-vejside.webp", alt: "Vejside på udsigtsvilla i Frederikshavn — Arkitekttegnestuen Yderskov" },
      { src: "/images/Lerstien/Frederikshavn-lerstien-terrasse-byview.webp", alt: "Udsigtsvilla med terrasse og byudsigt, Frederikshavn — Arkitekttegnestuen Yderskov" },
      { src: "/images/Lerstien/Frederikshavn-lerstien-terrasse.webp", alt: "Terrasse på udsigtsvilla i Frederikshavn — Arkitekttegnestuen Yderskov" },
      { src: "/images/Lerstien/Frederikshavn-lerstien-overdækket-terrasse.webp", alt: "Overdækket terrasse på udsigtsvilla i Frederikshavn — Arkitekttegnestuen Yderskov" },
      { src: "/images/Lerstien/Frederikshavn-lerstien-køkken.webp", alt: "Køkken og opholdsrum, udsigtsvilla i Frederikshavn — Arkitekttegnestuen Yderskov" },
      { src: "/images/Billeder til blogindlæg/Gaspejs som rumdeler i sommerhus arkitekt yderskov.webp", alt: "Gaspejs som rumdeler i sommerhus — Arkitekttegnestuen Yderskov" },
      { src: "/images/Lerstien/Frederikshavn-lerstien-søjle.webp", alt: "Strukturelle detaljer og søjle, udsigtsvilla i Frederikshavn — Arkitekttegnestuen Yderskov" },
      { src: "/images/Lerstien/Frederikshavn-lerstien-terrasse-2.webp", alt: "Terrasse og facade, udsigtsvilla i Frederikshavn — Arkitekttegnestuen Yderskov" },
    ],
    dark: true,
  },
];

export default function ArkitektSjaellandPage() {
  return (
    <>
      <Nav />
      <Hero
        slides={[{ src: "/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-terrasse.webp", alt: "Arkitekttegnet villa tilbygning — Arkitekttegnestuen Yderskov" }]}
        tag="Arkitekt Sjælland"
        subtitle="Arkitekt Sjælland"
        lines={[
          "Fra første idé til færdigt byggeri på Sjælland og i Københavnsområdet.",
          "Landsdækkende tegnestue med jysk grundighed, fleksibilitet og fast pris.",
          "Gratis og uforpligtende første idemøde direkte på din byggegrund.",
        ]}
        italicLines={[1, 2]}
      />

      {/* Intro */}
      <section className="s">
        <div className="s-inner">
          <div className="text-2col">
            <div>
              <span className="eyebrow">Landsdækkende arkitekt</span>
              <h1 className="sec-hed">Arkitekt Sjælland</h1>
              <p style={{ fontSize: "1.1rem", fontWeight: 200, color: "var(--sub)", marginTop: "1rem", letterSpacing: "-0.01em", lineHeight: 1.6 }}>
                — Yderskov Tegnestue på Sjælland og i København
              </p>
            </div>
            <div>
              <p className="body-intro">
                Søger du en erfaren <strong>arkitekt Sjælland</strong>? Yderskov Tegnestue er en fleksibel, landsdækkende partner. Selvom vi har base i Nordjylland, tegner og opfører vi huse over hele landet — uden at geografisk afstand er en hindring. Vi pakker gerne bilen og mødes direkte på din byggegrund.
              </p>
              <p className="body-p">
                Vi har stor aktivitet i øst og har i øjeblikket byggerier i gang i <strong>Odsherred, Køge, Ramløse og Brønshøj</strong>. Vores projekter spænder over alt fra arkitekttegnede villaer og eksklusive sommerhuse til funktionelle tilbygninger.
              </p>
              <p className="body-p">
                Hos Yderskov får du fuld økonomisk tryghed. Vi projekterer, tegner og opfører dit byggeri til en <strong>aftalt fast pris</strong>. Det sikrer dig mod budgetskred og besvær med koordinering — du får ét enkelt kontaktpunkt og en tryg proces fra første skitse til færdigt nøglefærdigt hus.
              </p>
              <p className="body-p">
                Uanset om du planlægger en ny villa i Storkøbenhavn, et sommerhus i Nordsjælland eller en tilbygning i Køge-området, bringer vi vores jyske grundighed med over Storebælt. Vi tilbyder et <strong>gratis og uforpligtende idémøde</strong> direkte på din grund. Kontakt os i dag for at høre mere.
              </p>
              <div className="about-tags" style={{ marginTop: "2rem" }}>
                <Link href="#kontakt" className="tag tag-dark">Book gratis idémøde →</Link>
                <Link href="/villaer" className="tag">Se vores villaer</Link>
                <Link href="/priser" className="tag">Se priser</Link>
              </div>
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
                {"location" in gallery && (
                  <p className="proj-meta">
                    {gallery.location}{gallery.size ? ` · ${gallery.size}` : ""}{gallery.year ? ` · ${gallery.year}` : ""}
                  </p>
                )}
                {"description" in gallery && (
                  <p className="proj-desc">{gallery.description}</p>
                )}
              </div>
            </div>
            <ImageGrid images={gallery.images} />
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="s">
        <div className="s-inner">
          <span className="eyebrow">FAQ</span>
          <h2 className="sec-hed">Ofte stillede spørgsmål</h2>
          <div className="faq-grid">
            {sjaellandFAQ.map((item, i) => (
              <div key={i} className="faq-item">
                <p className="faq-q" style={{ fontWeight: 500 }}>{item.q}</p>
                <p className="faq-a">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Galleri */}
      <section className="s s-off">
        <div className="s-inner">
          <span className="eyebrow">Galleri</span>
          <h2 className="sec-hed">Inspiration</h2>
          <InspirationGallery />
        </div>
      </section>

      <CtaBand />

      {/* Contact Form */}
      <section className="s form-bg" id="kontakt">
        <div className="s-inner">
          <div className="form-layout">
            <div className="form-meta">
              <span className="eyebrow">Kontakt os</span>
              <h2 className="sec-hed">Lad os drøfte<br />dit projekt</h2>
              <p style={{ marginTop: "1.5rem" }}>Ring eller skriv til os. Vi svarer altid inden for 24 timer og tilbyder et gratis, uforpligtende idemøde direkte på din byggegrund på Sjælland.</p>
              <p><a href="tel:29723427">ring 29 72 34 27</a></p>
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
