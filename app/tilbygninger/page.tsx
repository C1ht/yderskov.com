import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import ImageGrid from "@/components/ImageGrid";
import CtaBand from "@/components/CtaBand";
import InspirationGallery from "@/components/InspirationGallery";

export const metadata: Metadata = {
  title: "Arkitekt til om- & tilbygning — Priser & cases | Yderskov",
  description:
    "Skal du bygge til eller bygge om? Få tegnet din tilbygning af en arkitekt til fast pris. Se priser og eksempler på ombygning. Book et gratis møde!",
};

const projectGalleries = [
  {
    eyebrow: "Projekt",
    title: "Ombygning og\nmodernisering af 50er-villa, Brønderslev nær Aalborg.",
    location: "Brønderslev, Nordjylland",
    size: "Komplet ombygning · nyt køkken-alrum",
    year: "2023",
    description: "Denne klassiske 1950'er-villa i Brønderslev har fået en komplet ombygning og modernisering. Huset er forvandlet fra et slidt murstenshus til en moderne, hvidpudset villa med mørke vinduesrammer og store skydedøre, der kan åbnes helt op til haven. Indvendigt har vi åbnet huset op med et lyst køkken-alrum med højt til loftet (loft til kip) og store vinduer. Der er desuden indrettet to moderne badeværelser og fire gode værelser. I det tilhørende anneks (multirum) er der ligeledes lavet et badeværelse samt et lille tekøkken, og der er direkte udgang til en ny, stor træterrasse fra hovedhuset.",
    images: [
      { src: "/images/Godthåbsvej/Brønderslev-ombygning-efter-3.webp", alt: "Haveside med birketræ efter modernisering, Brønderslev — Arkitekttegnestuen Yderskov" },
      { src: "/images/Godthåbsvej/Brønderslev-ombygning-efter-2.webp", alt: "Gårdside med skydedøre efter modernisering, Brønderslev — Arkitekttegnestuen Yderskov" },
      { src: "/images/Godthåbsvej/Brønderslev-ombygning-efter-1.webp", alt: "Indgangsside efter modernisering, Brønderslev — Arkitekttegnestuen Yderskov" },
      { src: "/images/Godthåbsvej/Brønderslev-ombygning-efter-4.webp", alt: "Facade efter modernisering, Brønderslev — Arkitekttegnestuen Yderskov" },
      { src: "/images/Godthåbsvej/Brønderslev-ombygning-efter-køkken.webp", alt: "Nyt køkken efter modernisering, Brønderslev — Arkitekttegnestuen Yderskov" },
    ],
    afterLabel: "Efter ombygning",
    beforeLabel: "Før ombygning",
    beforeImages: [
      { src: "/images/Godthåbsvej/Brønderslev-ombygning-foer-3.webp", alt: "Side med birketræ før modernisering, Brønderslev — Arkitekttegnestuen Yderskov" },
      { src: "/images/Godthåbsvej/Brønderslev-ombygning-foer-2.webp", alt: "Haveside før modernisering, Brønderslev — Arkitekttegnestuen Yderskov" },
      { src: "/images/Godthåbsvej/Brønderslev-ombygning-foer-1.webp", alt: "Indgangsside før modernisering, Brønderslev — Arkitekttegnestuen Yderskov" },
      { src: "/images/Godthåbsvej/Brønderslev-ombygning-foer-4.webp", alt: "Facade før modernisering, Brønderslev — Arkitekttegnestuen Yderskov" },
    ],
    dark: true,
  },
  {
    eyebrow: "Projekt",
    title: "Villa med\ntilbygning, Hasseris i Aalborg.",
    location: "Hasseris, Aalborg",
    size: "45 m² tilbygning · terrasse",
    year: "2021",
    description: "Vi har tegnet en tilbygning på 45 kvadratmeter til en traditionel murstensvilla i Hasseris. For at skabe en flot kontrast til de eksisterende gule mursten, er tilbygningen beklædt med mørkt træ. Bygningen afsluttes med zinkkanter og store hjørnevinduer, der lukker masser af dagslys ind. Indvendigt har familien fået en lys og åben stue med direkte udgang til en ny træterrasse, som forbinder huset med den hyggelige have.",
    images: [
      { src: "/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-terrasse.webp", alt: "Terrasse ved villa med tilbygning i Hasseris i Aalborg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-bagside.webp", alt: "Bagside af villa med tilbygning i Hasseris i Aalborg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-vindue.webp", alt: "Vinduesparti i villa med tilbygning i Hasseris i Aalborg — Arkitekttegnestuen Yderskov" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Tilbygning og\nrenovering, Aalborg.",
    location: "Aalborg, Nordjylland",
    size: "35 m² tilbygning · overdækning",
    year: "2022",
    description: "Med denne tilbygning i Aalborg har vi bygget 35 kvadratmeter til det eksisterende hus for at skabe et ekstra lyst opholdsrum med masser af dagslys. Tilbygningen er udført i lodret træbeklædning med brede beklædningsbrædder, som giver huset et enkelt og moderne udtryk. Vi har tegnet en stor træterrasse i flere niveauer, der trapper naturligt ned til græsplænen. Terrassen forbinder stuen og haven på en praktisk måde, så det er nemt at bruge uderummet i det daglige, når vejret tillader det.",
    images: [
      { src: "/images/Neptunvej/Aalborg-neptunvej-tilbygning-terrasse.webp", alt: "Terrasse ved tilbygning i Aalborg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Neptunvej/Aalborg-neptunvej-tilbygning-terrasse-og-plæne.webp", alt: "Terrasse and plæne ved tilbygning i Aalborg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Neptunvej/Aalborg-neptunvej-tilbygning.haveside.webp", alt: "Haveside ved tilbygning i Aalborg — Arkitekttegnestuen Yderskov" },
    ],
    dark: true,
  },
  {
    eyebrow: "Projekt",
    title: "Ombygning af\neksisterende 70er-villa, Hasseris i Aalborg.",
    location: "Hasseris, Aalborg",
    size: "Facaderenovering · ny planløsning",
    year: "2022",
    description: "Dette projekt i Hasseris er en komplet renovering af en traditionel 1970'er-villa. Den oprindelige mørke facade er blevet pudset hvid og kombineret med lodret, sort træbeklædning og zinkdetaljer, hvilket giver huset et helt nyt liv. Indvendigt har vi ændret planløsningen for at skabe et stort, lyst køkken-alrum med store vinduespartier ud mod haven. Der er desuden opført en stor, ny træterrasse, som gør det nemt at træde direkte ud og nyde haven.",
    images: [
      { src: "/images/Gravenstenvej/Aalborg-gravenstenvej-renovering-vejside.webp", alt: "Vejside efter ombygning af 70er-villa i Hasseris i Aalborg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Gravenstenvej/Aalborg-gravenstenvej-renovering-haveside.webp", alt: "Haveside efter ombygning af 70er-villa i Hasseris i Aalborg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Gravenstenvej/Aalborg-gravenstenvej-renovering-terrassearbejde.webp", alt: "Terrassearbejde ved ombygning i Hasseris i Aalborg — Arkitekttegnestuen Yderskov" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Lille, gammelt parcelhus\nombygget to moderne bolig, Brønderslev nær Aalborg.",
    location: "Brønderslev, Nordjylland",
    size: "Komplet ombygning · energirenovering",
    year: "2023",
    description: "Markant totalrenovering og modernisering af et ældre parcelhus i Brønderslev. Bygningen er transformeret fra et traditionelt murstenshus til en lys, hvidpudset ejendom med et stærkt arkitektonisk udtryk. Renoveringen omfatter store vinduespartier, to etager samt et tårn med siddepladser og udkik over et stort opland. Desuden moderne energiløsninger, en nyindrettet have med grusbelagt indkørsel samt store glaspartier mod den private baghave. Bemærk “før-billedet” og sammenlign de to meget forskellige boliger.",
    images: [
      { src: "/images/Emils hus Olufsgade/Brønderslev-olufsgade-efter-vejside.webp", alt: "Vejside efter ombygning i Brønderslev — Arkitekttegnestuen Yderskov" },
      { src: "/images/Emils hus Olufsgade/Brønderslev-olufsgade-efter-indkørsel.webp", alt: "Indkørsel efter ombygning i Brønderslev — Arkitekttegnestuen Yderskov" },
      { src: "/images/Emils hus Olufsgade/Brønderslev-olufsgade-efter-haveside.webp", alt: "Haveside efter ombygning i Brønderslev — Arkitekttegnestuen Yderskov" },
      { src: "/images/Emils hus Olufsgade/Brønderslev-olufsgade-efter-forhave.webp", alt: "Forhave efter ombygning i Brønderslev — Arkitekttegnestuen Yderskov" },
      { src: "/images/Emils hus Olufsgade/Brønderslev-olufsgade-efter-bagside.webp", alt: "Bagside efter ombygning i Brønderslev — Arkitekttegnestuen Yderskov" },
    ],
    afterLabel: "Efter ombygning",
    beforeLabel: "Før ombygning",
    beforeImages: [
      { src: "/images/Emils hus Olufsgade/Brønderslev-olufsgade-foer-vejside.webp", alt: "Vejside før ombygning i Brønderslev — Arkitekttegnestuen Yderskov" },
    ],
  },
];

const faqItems = [
  {
    q: "Hvad koster en tilbygning?",
    a: "En tilbygning koster typisk fra 14.000–19.000 kr. pr. m². Dette er typisk lidt lavere end nybyggeri, da fundamentet og den eksisterende bygning ofte reducerer kompleksiteten. Prisen afhænger af størrelse, konstruktion og materialer.",
  },
  {
    q: "Kræver en tilbygning byggetilladelse?",
    a: "Det afhænger af størrelsen. Tilbygninger over 35 m² kræver normalt byggetilladelse. Vi håndterer hele processen med kommunen.",
  },
  {
    q: "Hvad kan I hjælpe med udover tilbygninger?",
    a: "Vi tegner alt fra nye køkkener og badeværelser til fuld ombygning af planløsning, udskiftning af tag og energirenovering.",
  },
  {
    q: "Kan jeg se eksempler på jeres tilbygninger?",
    a: "Ja — se vores projekter på denne side. Vi kan også vise referencer fra projekter i dit område.",
  },
  {
    q: "Hvordan starter processen?",
    a: "Med et gratis, uforpligtende møde hos jer. Vi kigger på mulighederne og giver et prisestimat på stedet.",
  },
  {
    q: "Har I egne håndværkere?",
    a: "Ja. Vi styrer processen med vores egne faste håndværkere — det giver ét samlet ansvar og bedre styring af økonomi og tid.",
  },
];

export default function TilbygningerPage() {
  const projectSchema = {
    "@context": "https://schema.org",
    "@graph": projectGalleries.map((p) => {
      const location = p.title.split(",").pop()?.trim().replace(".", "").replace(/\n/g, " ") || "Danmark";
      return {
        "@type": "SingleFamilyResidence",
        "name": p.title.replace(/\n/g, " "),
        "description": `Arkitekttegnet om- eller tilbygning i ${location} udført af Yderskov Arkitekter.`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": location,
          "addressCountry": "DK",
        },
        "image": [
          ...p.images.map((img) => `https://yderskov.com${img.src}`),
          ...('beforeImages' in p && Array.isArray(p.beforeImages) ? p.beforeImages.map((img) => `https://yderskov.com${img.src}`) : [])
        ],
        "architect": {
          "@type": "LocalBusiness",
          "name": "Yderskov Arkitekter",
          "url": "https://yderskov.com/",
        },
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
        slides={[{ src: "/images/Godthåbsvej/Brønderslev-ombygning-efter-2.webp", alt: "Ombygning og modernisering af 50er-villa, Brønderslev nær Aalborg — Arkitekttegnestuen Yderskov" }]}
        tag="Om- og tilbygninger"
        subtitle="Om- og tilbygninger"
        lines={[
          "Jeres hus har allerede en sjæl. Vi hjælper den med at vokse.",
          "Gratis og uforpligtende første idemøde. Vi kommer ud til jer.",
        ]}
        italicLines={[0, 1]}
      />

      <section className="s">
        <div className="s-inner">
          <div className="text-2col">
            <div>
              <span className="eyebrow">Om- og tilbygninger</span>
              <h1 className="sec-hed">Om- og tilbygninger<br />med arkitekttegnet kvalitet.</h1>
            </div>
            <div>
              <p className="body-p">
                Din bolig rummer sandsynligvis mere potentiale end du tror. Vi ser mulighederne og tegner en løsning der giver mere lys, plads og en bedre planløsning. Søger du en <Link href="/arkitekt-aalborg" className="text-link">arkitekt i Aalborg</Link> til din ombygning, står vi klar. Se også vores færdige <Link href="/villaer" className="text-link">villaer</Link> samt vores <Link href="/prisberegner" className="text-link">prisberegner</Link>.
              </p>
              <p className="body-p">
                Vi styrer hele projektet — fra tegning og byggetilladelse til den færdige tilbygning med egne håndværkere.
              </p>
              <p className="body-p">
                Tilbygninger starter fra 14.000 kr./m² — lidt lavere end nybyggeri, da fundamentet og den eksisterende bygning ofte reducerer kompleksiteten.
              </p>
              <p className="body-p">
                <Link href="#kontakt" className="text-link">→ Kom i gang</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {projectGalleries.map((gallery, i) => (
        <section key={i} className={`s${gallery.dark ? " s-off" : ""}`}>
          <div className="s-inner">
            <div className="proj-header">
              <div>
                <span className="eyebrow">{gallery.eyebrow}</span>
                <h2 className="sec-hed" style={{ marginBottom: 0, whiteSpace: "pre-line" }}>
                  {gallery.title}
                </h2>
                {"location" in gallery && gallery.location && (
                  <p className="proj-meta">
                    {gallery.location}{gallery.size ? ` · ${gallery.size}` : ""}{gallery.year ? ` · ${gallery.year}` : ""}
                  </p>
                )}
                {"description" in gallery && gallery.description && (
                  <p className="proj-desc">{gallery.description}</p>
                )}
              </div>
            </div>
            {"afterLabel" in gallery && <p className="proj-grid-label">{gallery.afterLabel}</p>}
            <ImageGrid images={gallery.images} />
            {"beforeImages" in gallery && gallery.beforeImages && (
              <>
                <p className="proj-grid-label" style={{ marginTop: "2rem" }}>{gallery.beforeLabel}</p>
                <ImageGrid images={gallery.beforeImages} />
              </>
            )}
          </div>
        </section>
      ))}

      <div className="stats-bg">
        <div className="stats-inner">
          <div className="stat"><div className="stat-num">14.000<sup> kr.</sup></div><div className="stat-lbl">Fra pr. m²</div></div>
          <div className="stat"><div className="stat-num">24<sup> timer</sup></div><div className="stat-lbl">Svar inden</div></div>
          <div className="stat"><div className="stat-num">10<sup>+</sup></div><div className="stat-lbl">Igangværende projekter</div></div>
          <div className="stat"><div className="stat-num">300<sup>+</sup></div><div className="stat-lbl">Projekter gennemført</div></div>
        </div>
      </div>

      <section className="s">
        <div className="s-inner">
          <span className="eyebrow">Spørgsmål og svar</span>
          <h2 className="sec-hed">FAQ — tilbygninger</h2>
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

      {/* Inspiration Galleri */}
      <section className="s s-off">
        <div className="s-inner">
          <span className="eyebrow">Galleri</span>
          <h2 className="sec-hed">Inspiration</h2>
          <InspirationGallery />
        </div>
      </section>

      <CtaBand />

      <section className="s form-bg" id="kontakt">
        <div className="s-inner">
          <div className="form-layout">
            <div className="form-meta">
              <span className="eyebrow">Kontakt os</span>
              <h2 className="sec-hed">Lad os se<br />mulighederne</h2>
              <p style={{ marginTop: "1.5rem" }}>Ring eller skriv til os. Vi svarer inden 24 timer og tilbyder et gratis, uforpligtende møde hos jer.</p>
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
