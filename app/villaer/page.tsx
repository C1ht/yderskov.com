import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import ImageGrid from "@/components/ImageGrid";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Arkitekttegnet villa — Se priser & projekter | Yderskov",
  description:
    "Drømmer du om en arkitekttegnet villa? Se projekter, priser og byggeproces hos Yderskov. Vi tilbyder fast pris, egne håndværkere & gratis første møde.",
  alternates: { canonical: "https://yderskov.com/villaer" },
};

const projectGalleries = [
  {
    eyebrow: "Projekt",
    title: "Funkis træ,\nglas og eternit, Sæby.",
    location: "Sæby, Nordjylland",
    size: "230 m² bolig · 60 m² garage",
    year: "2023",
    description: "Funkisvilla opført i listebeklædning med åbne facader og store vinduespartier. Huset er beliggende op ad skov og natur, og det betød meget for familien at byggeriet blev indpasset omhyggeligt i det omgivende område.",
    images: [
      { src: "/images/Karetmagervej/Sæby-ny-villa-funkis-forside.webp", alt: "Funkisvilla i træ, glas og eternit, Sæby — Yderskov Arkitekter" },
      { src: "/images/Karetmagervej/Sæby-ny-villa-funkis-haveside.webp", alt: "Haveside på funkisvilla i Sæby — Yderskov Arkitekter" },
      { src: "/images/Karetmagervej/Sæby-ny-villa-funkis-vejside.webp", alt: "Vejside på funkisvilla i Sæby — Yderskov Arkitekter" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Moderne villa\nmed markant tag, Sæby.",
    location: "Sæby, Nordjylland",
    size: "230 m² bolig · 50 m² garage",
    year: "2016",
    description: "Vinkelvilla på stor grund med kinesisk svej på sort tegltag og småsprodsede vinduer. Familiens ønske om et markant, klassisk udtryk er kombineret med en moderne og rummelig planløsning.",
    images: [
      { src: "/images/villa sæby/Sæby-ny-villa-kinesisk-tag-haveside.webp", alt: "Moderne villa med kinesisk tag, haveside, Sæby — Yderskov Arkitekter" },
      { src: "/images/villa sæby/Sæby-ny-villa-kinesisk-tag-haveside-2.webp", alt: "Moderne villa med kinesisk tag, haveside, Sæby — Yderskov Arkitekter" },
      { src: "/images/villa sæby/Sæby-ny-villa-kinesisk-tag-vejside.webp", alt: "Moderne villa med kinesisk tag, vejside, Sæby — Yderskov Arkitekter" },
    ],
    dark: true,
  },
  {
    eyebrow: "Projekt",
    title: "Udsigtsvilla med\nnaturlige materialer, Frederikshavn.",
    location: "Frederikshavn, Nordjylland",
    size: "208 m² bolig · 63 m² garage · 37 m² overdækning",
    year: "2021",
    description: "Udsigtsvilla med vandudsigt, tegnet til en skrånende naturgrund med skrappe myndighedskrav om indpasning i den beplantede skrænt. Familien ønskede et hus der svævede udover bakken — en oase med nye og naturlige materialer. Garageanlæg er placeret under huset, da grunden har markant fald.",
    images: [
      { src: "/images/Lerstien/Frederikshavn-lerstien-terrasse-byview.webp", alt: "Udsigtsvilla med terrasse og byudsigt, Frederikshavn — Yderskov Arkitekter" },
      { src: "/images/Lerstien/Frederikshavn-lerstien-terrasse.webp", alt: "Terrasse på udsigtsvilla i Frederikshavn — Yderskov Arkitekter" },
      { src: "/images/Lerstien/Frederikshavn-lerstien-vejside.webp", alt: "Vejside på udsigtsvilla i Frederikshavn — Yderskov Arkitekter" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Funkis\nvilla, Vestbjerg.",
    location: "Vestbjerg, Nordjylland",
    size: "205 m² bolig · 70 m² garage · 6 m² overdækning",
    year: "",
    description: "Funkisvilla tilpasset en grund med markant fald — halvdelen af huset ligger nede, halvdelen oppe, så niveauerne følger terrænet naturligt. Indgangspartiet er forhøjet og beklædt med lister for tydeligt at markere husets entré. Store skydedørspartier og åbne facader giver lys og udsigt. Familien ønskede niveauforskelle indendørs, åben forbindelse mellem soveværelse og bad, og en stor garage. Bryggers med hundevaskeplads.",
    images: [
      { src: "/images/Højgården/Vestsbjerg-ny-funkisvilla-haveside.webp", alt: "Funkisvilla med niveauforskelle, haveside, Vestbjerg — Yderskov Arkitekter" },
      { src: "/images/Højgården/Vestsbjerg-ny-funkisvilla-indgangsparti.webp", alt: "Indgangsparti på funkisvilla i Vestbjerg — Yderskov Arkitekter" },
      { src: "/images/Højgården/Vestsbjerg-ny-funkisvilla-vejside.webp", alt: "Funkisvilla med niveauforskelle, vejside, Vestbjerg — Yderskov Arkitekter" },
    ],
    dark: true,
  },
  {
    eyebrow: "Projekt",
    title: "Klassisk\nvilla, Hjørring.",
    location: "Hjørring, Nordjylland",
    size: "215 m² bolig · 42 m² garage",
    year: "2022",
    description: "Klassisk villa med traditionelt formsprog, symmetrisk facade og omhyggeligt udvalgte materialer. Huset er placeret i et etableret villakvarter med god forbindelse til naturen. Familien ønskede et klassisk udtryk med moderne funktionalitet indvendigt — store, lyse opholdsrum med direkte udgang til det ugenerede gårdhavemiljø. Materialerne er valgt ud fra et ønske om minimal vedligeholdelse og lang levetid.",
    images: [
      { src: "/images/Gartnerhaven/Hjørring-garnterhaven-ny-villa.webp", alt: "Klassisk ny villa i Hjørring — Yderskov Arkitekter" },
      { src: "/images/Gartnerhaven/Hjørring-gartnehaven-ny-villa-haveside.webp", alt: "Haveside på klassisk villa i Hjørring — Yderskov Arkitekter" },
      { src: "/images/Gartnerhaven/Hjørring-gartnerhaven-indkørsel.webp", alt: "Indkørsel til klassisk villa i Hjørring — Yderskov Arkitekter" },
      { src: "/images/Gartnerhaven/Hjørring-gartnerhaven-ny-villa-gårdmiljø.webp", alt: "Gårdmiljø ved klassisk villa i Hjørring — Yderskov Arkitekter" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Villa med\nensidig taghældning, Vestbjerg.",
    location: "Vestbjerg, Nordjylland",
    size: "190 m² bolig · 55 m² garage · 22 m² overdækning",
    year: "2023",
    description: "Villa med ensidig taghældning og overdækket terrasse i direkte forbindelse med stuens store glaspartier. Huset er udformet med en tydelig fløjstruktur, der skaber naturlig zonering mellem opholdsrum og børne-/forældreafdelinger. Familien lagde vægt på optimalt lysindfald, god loftshøjde og en flydende overgang mellem inde og ude under den overdækkede terrasse.",
    images: [
      { src: "/images/Hanebjælken/Vestbjerg-Hanebjælken-ny-villa-haveside.webp", alt: "Villa med ensidig taghældning, haveside, Vestbjerg — Yderskov Arkitekter" },
      { src: "/images/Hanebjælken/Vestbjerg-Hanebjælken-ny-villa-overdækket-terrasse.webp", alt: "Overdækket terrasse på villa i Vestbjerg — Yderskov Arkitekter" },
      { src: "/images/Hanebjælken/Vestbjerg-Hanebjælken-ny-villa-værelsesfløj.webp", alt: "Værelsesfløj på villa med ensidig taghældning, Vestbjerg — Yderskov Arkitekter" },
    ],
    dark: false,
  },
];

const faqItems = [
  {
    q: "Hvad koster det at bygge en arkitekttegnet villa?",
    a: "En arkitekttegnet villa starter typisk fra 15.000 kr. pr. m². Prisen afhænger af størrelse, materialer og kompleksitet. Kontakt os for en præcis vurdering.",
  },
  {
    q: "Hvad er forskellen på en arkitekttegnet villa og en typehus?",
    a: "En arkitekttegnet villa tegnes specifikt til din grund og dine ønsker. Et typehus er et standardiseret produkt. Vi tilpasser alt fra planløsning til facader.",
  },
  {
    q: "Hvor lang tid tager det at bygge en villa?",
    a: "Fra første møde til indflytning tager det typisk 12-18 måneder. Byggetiden afhænger af projektets kompleksitet og kommunens sagsbehandlingstid.",
  },
  {
    q: "Søger I byggetilladelse?",
    a: "Ja — vi håndterer hele myndighedsprocessen, herunder byggetilladelse, BR-krav og kommunal godkendelse.",
  },
  {
    q: "Arbejder I med faste priser?",
    a: "Ja. Vi tilbyder fast pris på arkitekthonoraret, så du altid kender dine udgifter. Ingen ubehagelige overraskelser undervejs.",
  },
  {
    q: "Hvad er jeres geografiske område?",
    a: "Vi arbejder primært i Nordjylland og Aalborg-området, men tager gerne projekter i hele Danmark.",
  },
];

export default function VillaerPage() {
  return (
    <>
      <Nav />
      <Hero
        slides={[{ src: "/images/Karetmagervej/Sæby-ny-villa-funkis-haveside.webp", alt: "Arkitekttegnet villa — Yderskov Arkitekter" }]}
        tag="Villaer"
        subtitle="Villaer"
        lines={[
          "Jeres villa skal fortælle jeres historie, fra første streg til sidste mursten.",
          "Gratis og uforpligtende første idemøde. Vi kommer ud til jer.",
        ]}
        italicLines={[0, 1]}
      />

      {/* Intro */}
      <section className="s">
        <div className="s-inner">
          <div className="text-2col">
            <div>
              <span className="eyebrow">Arkitekttegnede villaer</span>
              <h1 className="sec-hed">Arkitekttegnede villaer<br />fra idé til nøglefærdigt.</h1>
            </div>
            <div>
              <p className="body-p">
                Hvert villaprojekt starter med en grundig dialog om jeres ønsker, behov og økonomi. Vi tegner, projekterer og bygger — med egne håndværkere og ét samlet ansvar. Som jeres <Link href="/arkitekt-aalborg" className="text-link">arkitekt i Aalborg</Link> og resten af landet hjælper vi jer hele vejen. Læs mere om <Link href="/om" className="text-link">vores tegnestue</Link> eller få et overblik over <Link href="/priser" className="text-link">vores prissatser</Link>.
              </p>
              <p className="body-p">
                Se vores projekter og lad dig inspirere. Kontakt os for et gratis første møde direkte på grunden.
              </p>
              <p className="body-p">
                <Link href="#kontakt" className="text-link">→ Kom i gang</Link>
              </p>
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

      {/* Catalog */}
      <section className="s s-off">
        <div className="s-inner">
          <div className="text-2col">
            <div>
              <span className="eyebrow">Projektkatalog</span>
              <h2 className="sec-hed">Download vores<br />villa-katalog.</h2>
            </div>
            <div>
              <p className="body-p">
                Se alle vores villaprojekter samlet i ét katalog — med billeder, beskrivelser og fakta om hvert projekt. Kataloget er klar til print.
              </p>
              <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
                <a
                  href="/katalog-villaer.pdf"
                  download="Yderskov-Arkitekter-Villa-katalog.pdf"
                  style={{ display: "inline-block", padding: "0.75rem 1.5rem", background: "#161616", color: "#fff", fontWeight: 500, fontSize: "0.875rem", letterSpacing: "0.04em", textDecoration: "none" }}
                >
                  Download katalog
                </a>
                <a
                  href="/katalog-villaer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-block", padding: "0.75rem 1.5rem", border: "1px solid #161616", color: "#161616", fontWeight: 500, fontSize: "0.875rem", letterSpacing: "0.04em", textDecoration: "none" }}
                >
                  Vis katalog
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-bg">
        <div className="stats-inner">
          <div className="stat">
            <div className="stat-num">15.000<sup> kr.</sup></div>
            <div className="stat-lbl">Fra pr. m²</div>
          </div>
          <div className="stat">
            <div className="stat-num">24<sup> timer</sup></div>
            <div className="stat-lbl">Svar inden</div>
          </div>
          <div className="stat">
            <div className="stat-num">10<sup>+</sup></div>
            <div className="stat-lbl">Igangværende projekter</div>
          </div>
          <div className="stat">
            <div className="stat-num">300<sup>+</sup></div>
            <div className="stat-lbl">Projekter gennemført</div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="s">
        <div className="s-inner">
          <span className="eyebrow">Spørgsmål og svar</span>
          <h2 className="sec-hed">FAQ — villaer</h2>
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

      {/* Contact form */}
      <section className="s form-bg" id="kontakt">
        <div className="s-inner">
          <div className="form-layout">
            <div className="form-meta">
              <span className="eyebrow">Kontakt os</span>
              <h2 className="sec-hed">Lad os skabe<br />dit drømmehus</h2>
              <p style={{ marginTop: "1.5rem" }}>Ring eller skriv til os. Vi svarer inden 24 timer og tilbyder et gratis, uforpligtende møde direkte på grunden.</p>
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
