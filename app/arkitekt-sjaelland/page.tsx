import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import CtaBand from "@/components/CtaBand";
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
    description: "Eksklusivt luksussommerhus i Ålbæk beklædt med lyst træ, tegnet som et wellness-fristed. Huset rummer en storslået wellness-afdeling med swimmingpool, sauna samt både indvendig og udvendig spa. Indvendigt er der lyst køkken-alrum, hyggelig hems og et aktivitetsrum med billard.",
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
                Hvis du leder efter en erfaren <strong>arkitekt Sjælland</strong> til dit kommende byggeprojekt, er Yderskov Tegnestue klar til at hjælpe dig. Selvom vi er en nordjysk baseret tegnestue med rødder i det jyske, har vi en stolt tradition for at tegne og opføre huse over hele landet. 
              </p>
              <p className="body-p">
                Vi påtager os meget aktivt opgaver på Sjælland og i Københavnsområdet, og vi ser det som en af vores største styrker, at vi er en yderst fleksibel og landsdækkende partner. Vi elsker at køre og rejse efter de rette projekter, og geografisk afstand er for os aldrig en hindring — vi pakker gerne bilen og mødes med dig direkte på din grund.
              </p>
              <p className="body-p">
                Vores erfaring som <strong>arkitekt Sjælland</strong> tæller en række succesfulde og vidt forskellige opgaver. Senest har vi hjulpet bygherrer med projekter i <strong>Køge, Odsherred, Brønshøj og Ramløse</strong>. Disse sager spænder fra store, eksklusive familievillaer til sommerhusbyggerier på naturskønne grunde samt komplekse om- og tilbygninger. Fordelen ved at vælge en nordjysk tegnestue som Yderskov til dit sjællandske projekt er vores stærke fokus på sund fornuft, strukturerede processer og økonomisk tryghed.
              </p>
              <p className="body-p">
                Mange sjællandske bygherrer fravælger arkitekter af frygt for uforudsigelige budgetskred. Hos Yderskov tilbyder vi en samlet proces, hvor vi både projekterer, tegner og opfører byggeriet med vores egne faste håndværkere til en aftalt fast pris. Det betyder, at du ikke skal bekymre dig om koordineringen mellem forskellige faggrupper eller frygte ubehagelige ekstraregninger midt i forløbet. Du får ét enkelt kontaktpunkt og en tryg byggeproces fra første streg til færdigt nøglefærdigt hus.
              </p>
              <p className="body-p">
                Vores mål er altid at skabe gennemtænkt arkitektur, der passer præcist til din grund, dagslyset og din families behov. Uanset om du vil opføre en ny villa i Storkøbenhavn, et hyggeligt fristed i Nordsjælland, eller en tilbygning, der udvider dit nuværende hjem i Køge-området, bringer vi vores jyske grundighed og faglige ekspertise med over Storebælt. Vi tilbyder et gratis og helt uforpligtende første idemøde, hvor vi kører ud og ser på din grund. Kontakt Yderskov i dag og lad os tage en snak om, hvordan vi som din <strong>arkitekt Sjælland</strong> kan realisere dine boligdrømme.
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
