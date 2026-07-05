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
    description: "Denne moderne funkisvilla i Sæby er tegnet med fokus på rene linjer, minimal vedligeholdelse og en harmonisk indpasning i den omgivende natur. Beliggende direkte op til et fredeligt skovområde, fungerer husets store glaspartier som levende malerier, der trækker skoven og lyset helt ind i boligens hjerte. Facaden byder på en smuk kontrast mellem varm, lodret træ-listebeklædning, store vinduespartier og hvide eternitplader. Indendørs er alrummet designet med ekstra lofthøjde og akustiklofter, der skaber et behageligt indeklima, mens en stor integreret garage fuldender det stramme, kubistiske funkisudtryk.",
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
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Moderne villa\nmed markant tag, Sæby.",
    location: "Sæby, Nordjylland",
    size: "230 m² bolig · 50 m² garage",
    year: "2016",
    description: "Denne elegante vinkelvilla i Sæby er et enestående eksempel på, hvordan klassisk herskabelighed og moderne funktionalitet kan smelte sammen. Det mest markante træk ved huset er det smukke, sortglasserede tegltag, der med sin karakteristiske tagfod har et kinesisk inspireret svej, som giver en unik, svungen tagprofil. Facaden prydes af klassiske, hvide småsprodsede vinduespartier, der skaber et tidløst og herskabeligt udtryk. Store dobbeltdøre åbner op til en solrig fliseterrasse og en stor, grøn have, der danner de perfekte rammer om udelivet.",
    images: [
      { src: "/images/villa sæby/Sæby-ny-villa-kinesisk-tag-haveside.webp", alt: "Moderne villa med kinesisk tag, haveside, Sæby — Arkitekttegnestuen Yderskov" },
      { src: "/images/villa sæby/Sæby-ny-villa-kinesisk-tag-haveside-2.webp", alt: "Moderne villa med kinesisk tag, haveside, Sæby — Arkitekttegnestuen Yderskov" },
      { src: "/images/villa sæby/Sæby-ny-villa-kinesisk-tag-vejside.webp", alt: "Moderne villa med kinesisk tag, vejside, Sæby — Arkitekttegnestuen Yderskov" },
    ],
    dark: true,
  },
  {
    eyebrow: "Projekt",
    title: "Udsigtsvilla med\nnaturlige materialer, Frederikshavn.",
    location: "Frederikshavn, Nordjylland",
    size: "208 m² bolig · 63 m² garage · 37 m² overdækning",
    year: "2021",
    description: "Denne eksklusive udsigtsvilla i Frederikshavn er nænsomt tilpasset en udfordrende, skrånende naturgrund med skrappe myndighedskrav om landskabelig indpasning. Arkitekturen er designet, så villaen nærmest svæver ud over skrænten, hvilket sikrer en storslået panoramaudsigt over byen og Kattegat. Materialevalget tager afsæt i naturens egne toner med fokus på minimal vedligeholdelse, herunder rå beton og varme træelementer. På grund af det markante fald i terrænet er garageanlægget integreret i underetagen under selve boligen, hvilket skaber en optimal udnyttelse af grundens niveauer. Du kan læse mere om indretningen og se billeder af [køkken-alrummet i denne udsigtsvilla i vores blogindlæg](/blog/hvordan-designer-man-et-godt-koekkenrum).",
    images: [
      { src: "/images/Lerstien/Frederikshavn-lerstien-vejside.webp", alt: "Vejside på udsigtsvilla i Frederikshavn — Arkitekttegnestuen Yderskov" },
      { src: "/images/Lerstien/Frederikshavn-lerstien-terrasse-byview.webp", alt: "Udsigtsvilla med terrasse og byudsigt, Frederikshavn — Arkitekttegnestuen Yderskov" },
      { src: "/images/Lerstien/Frederikshavn-lerstien-terrasse.webp", alt: "Terrasse på udsigtsvilla i Frederikshavn — Arkitekttegnestuen Yderskov" },
      { src: "/images/Lerstien/Frederikshavn-lerstien-overdækket-terrasse.webp", alt: "Overdækket terrasse på udsigtsvilla i Frederikshavn — Arkitekttegnestuen Yderskov" },
      { src: "/images/Lerstien/Frederikshavn-lerstien-køkken.webp", alt: "Køkken og opholdsrum, udsigtsvilla i Frederikshavn — Arkitekttegnestuen Yderskov" },
      { src: "/images/Lerstien/Frederikshavn-lerstien-søjle.webp", alt: "Strukturelle detaljer og søjle, udsigtsvilla i Frederikshavn — Arkitekttegnestuen Yderskov" },
      { src: "/images/Lerstien/Frederikshavn-lerstien-terrasse-2.webp", alt: "Terrasse og facade, udsigtsvilla i Frederikshavn — Arkitekttegnestuen Yderskov" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Funkisvilla nær\nHammer Bakker.",
    location: "Vestbjerg, Nordjylland",
    size: "205 m² bolig · 70 m² garage · 6 m² overdækning",
    year: "",
    description: "Funkisvilla tilpasset en grund med fald og skøn udsigt over den omkringliggende natur og det åbne landskab. Naturen og lyset trækkes ind i boligen med store skydedørspartier. Familien elsker deres hund og har indrettet bryggers med hundevaskeplads. [Læs om hundevaskepladsen her](/blog/hundevaskeplads-vestbjerg) og se [indretningen af den tilhørende garage her](/blog/funkisvilla-vestbjerg-garage).",
    images: [
      { src: "/images/Højgården/Vestsbjerg-ny-funkisvilla-haveside.webp", alt: "Funkisvilla nær Hammer Bakker, haveside, Vestbjerg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Højgården/Vestsbjerg-ny-funkisvilla-indgangsparti.webp", alt: "Indgangsparti på funkisvilla i Vestbjerg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Højgården/Vestsbjerg-ny-funkisvilla-vejside.webp", alt: "Funkisvilla nær Hammer Bakker, vejside, Vestbjerg — Arkitekttegnestuen Yderskov" },
    ],
    dark: true,
  },
  {
    eyebrow: "Projekt",
    title: "Klassisk\nvilla, Hjørring.",
    location: "Hjørring, Nordjylland",
    size: "215 m² bolig · 42 m² garage",
    year: "2022",
    description: "Denne klassiske villa i Hjørring er opført i tråd med den klassiske danske byggestil, hvor der er lagt vægt på et traditionelt og tidløst formsprog samt eksklusive, robuste materialer med lang levetid. Villaen er placeret i et etableret villakvarter med god forbindelse til naturen og optimal udnyttelse af dagslyset. Bygherren ønskede en bolig, der forener et roligt ydre med moderne funktionalitet og store, lyse opholdsrum. Huset danner rammen om et ugeneret og læfyldt gårdhavemiljø, som forlænger stuen og køkken-alrummet ud under åben himmel. Du kan læse mere om arkitekturen bag et hyggeligt uderum i vores [guide til at designe en funktionel gårdhave](/blog/gaardhave).",
    images: [
      { src: "/images/Gartnerhaven/Hjørring-garnterhaven-ny-villa.webp", alt: "Klassisk ny villa i Hjørring — Arkitekttegnestuen Yderskov" },
      { src: "/images/Gartnerhaven/Hjørring-gartnehaven-ny-villa-haveside.webp", alt: "Haveside på klassisk villa i Hjørring — Arkitekttegnestuen Yderskov" },
      { src: "/images/Gartnerhaven/Hjørring-gartnerhaven-indkørsel.webp", alt: "Indkørsel til klassisk villa i Hjørring — Arkitekttegnestuen Yderskov" },
      { src: "/images/Gartnerhaven/Hjørring-gartnerhaven-ny-villa-gårdmiljø.webp", alt: "Gårdmiljø ved klassisk villa i Hjørring — Arkitekttegnestuen Yderskov" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Villa med\nensidig taghældning, Vestbjerg.",
    location: "Vestbjerg, Nordjylland",
    size: "190 m² bolig · 55 m² garage · 22 m² overdækning",
    year: "2023",
    description: "Denne moderne villa i Vestbjerg er tegnet med et ensidigt skråt tag (ensidig taghældning), som giver rigtig god lofthøjde og masser af dagslys i de store rum. Huset er bygget op i praktiske fløje, der deler boligen op i en separat børneafdeling og en forældreafdeling, med køkken-alrummet i midten som det naturlige samlingspunkt. Stuens store glaspartier og brede skydedøre gør det nemt at gå direkte ud på den overdækkede terrasse, der fungerer som en hyggelig udestue om sommeren. [Læs mere om hvordan vi skaber overgangen mellem ude og inde her](/blog/overgang-mellem-ude-og-inde).",
    images: [
      { src: "/images/Hanebjælken/Vestbjerg-Hanebjælken-ny-villa-haveside.webp", alt: "Villa med ensidig taghældning, haveside, Vestbjerg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Hanebjælken/Vestbjerg-Hanebjælken-ny-villa-overdækket-terrasse.webp", alt: "Overdækket terrasse på villa i Vestbjerg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Hanebjælken/Vestbjerg-Hanebjælken-ny-villa-værelsesfløj.webp", alt: "Værelsesfløj på villa med ensidig taghældning, Vestbjerg — Arkitekttegnestuen Yderskov" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Engelsk villa\ni colonial-stil, Aalborg.",
    location: "Aalborg, Nordjylland",
    size: "430 m² herskabelig bolig",
    year: "2023",
    description: "Denne store villa i Aalborg er opført for et dansk par, der var vendt hjem til Danmark efter at have boet i USA. De ønskede en bolig inspireret af den klassiske, amerikanske byggestil (colonial-stil). Villaen er bygget med en rød murstensfacade, hvide gesimser, søjler ved indgangspartiet og mørke sprossede vinduer, og i forhaven vokser der frodige vinranker. Indendørs er der en stor hall med en flot, svungen trappe og sildebensparket. Huset rummer desuden hyggelige stuer ensuite og egen hjemmebiograf.",
    images: [
      { src: "/images/Ikarosvej/Aalborg-Ikarosvej-ny-villa-indkørsel.webp", alt: "Engelsk villa i colonial-stil, indkørsel, Aalborg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Ikarosvej/Ikarosvej facade.webp", alt: "Engelsk villa i colonial-stil, facade, Aalborg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Ikarosvej/Ikarosvej forhave med vin.webp", alt: "Forhave ved engelsk villa i colonial-stil, Aalborg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Ikarosvej/ikarosvej facade mod have.webp", alt: "Haveside på engelsk villa i colonial-stil, Aalborg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Ikarosvej/ikarosvej hall.webp", alt: "Hall i engelsk villa i colonial-stil, Aalborg — Arkitekttegnestuen Yderskov" },
    ],
    dark: true,
  },
  {
    eyebrow: "Projekt",
    title: "Engelsk villa\nved fjorden, Aalborg.",
    location: "Nørholm nær Aalborg, Nordjylland",
    size: "350 m² landejendom",
    year: "2024",
    description: "Herskabelig engelsk villa opført på en stor hesteejendom nær Aalborg med en enestående udsigt over Limfjorden. Villaen er tegnet til en familie på tre med udgangspunkt i et postkort familien kom med til tegnestuen, der viste deres drømmebolig. Villaen byder på eksklusive rammer med en rummelig hall, et stort køkken, stuer ensuite og flere badeværelser. [Læs hele historien om drømmen om det engelske herresæde her](/blog/villa-herresaede-noerholm-aalborg).",
    images: [
      { src: "/images/Nørholmsvej/Engelsk villa facade mod Nørholmsvej.avif", alt: "Facade mod Nørholmsvej, engelsk villa ved fjorden — Arkitekttegnestuen Yderskov" },
      { src: "/images/Nørholmsvej/Engelsk villa på stor plæne.webp", alt: "Engelsk villa ved fjorden på stor plæne, Nørholm — Arkitekttegnestuen Yderskov" },
      { src: "/images/Nørholmsvej/Engelsk villa fra havesiden.webp", alt: "Haveside på engelsk villa ved fjorden, Nørholm — Arkitekttegnestuen Yderskov" },
      { src: "/images/Nørholmsvej/Engelsk villa fra gavl.webp", alt: "Gavl på engelsk villa ved fjorden, Nørholm — Arkitekttegnestuen Yderskov" },
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
  const projectSchema = {
    "@context": "https://schema.org",
    "@graph": projectGalleries.map((p) => {
      const floorSizeMatch = p.size.match(/(\d+)\s*m²\s*bolig/);
      const floorSize = floorSizeMatch ? parseInt(floorSizeMatch[1]) : undefined;
      const locality = p.location.split(",")[0].trim();
      return {
        "@type": "SingleFamilyResidence",
        "name": p.title.replace(/\n/g, " "),
        "description": p.description,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": locality,
          "addressCountry": "DK",
        },
        "image": p.images.map((img) => `https://yderskov.com${img.src}`),
        "architect": {
          "@type": "LocalBusiness",
          "name": "Yderskov Arkitekter",
          "url": "https://yderskov.com/",
        },
        "yearBuilt": p.year ? parseInt(p.year) : undefined,
        "floorSize": floorSize ? {
          "@type": "QuantitativeValue",
          "value": floorSize,
          "unitText": "m²",
        } : undefined,
      };
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <Nav />
      <Hero
        slides={[{ src: "/images/Karetmagervej/Sæby-ny-villa-funkis-haveside.webp", alt: "Arkitekttegnet villa — Arkitekttegnestuen Yderskov" }]}
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
