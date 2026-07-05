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
  title: "Arkitekttegnet sommerhus — Priser & projekter | Yderskov",
  description:
    "Få tegnet et unikt sommerhus tilpasset din grund og udsigt. Se priser og projekter hos Yderskov. Fast pris, høj kvalitet og gratis første møde!",
  alternates: { canonical: "https://yderskov.com/sommerhuse" },
};

const projectGalleries = [
  {
    eyebrow: "Projekt",
    title: "Sommerhus med\nstore vinduespartier, Hals.",
    location: "Hals, Nordjylland",
    size: "95 m² fritidshus · stor terrasse",
    year: "2022",
    description: "Dette sommerhus i Hals ligger på en åben lynggrund omgivet af skov. Huset er tegnet med store glaspartier, som lukker masser af dagslys ind og giver et godt kig til naturen. Indvendigt er der åben forbindelse mellem køkkenet og stuen, hvilket giver en lys og luftig rumfornemmelse. De lyse, nordiske materialer skaber en rolig og hyggelig sommerhusstemning, og en stor træterrasse løber hele vejen rundt om huset.",
    images: [
      { src: "/images/Torndalsvej/Hals-Torndalsvej-terrasse.webp", alt: "Terrasse ved sommerhus i Hals — Arkitekttegnestuen Yderskov" },
      { src: "/images/Torndalsvej/Hals-Torndalsvej-køkken.webp", alt: "Køkken i sommerhus i Hals — Arkitekttegnestuen Yderskov" },
      { src: "/images/Torndalsvej/Hals-Torndalsvej-stue.webp", alt: "Stue i sommerhus i Hals — Arkitekttegnestuen Yderskov" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Sommerhus\ntil udsigtsgrund, Løkken.",
    location: "Løkken, Nordjylland",
    size: "110 m² fritidshus · klitgrund",
    year: "2020",
    description: "Dette klassiske, sorte træsommerhus ligger på en åben grund i Løkken med en fantastisk udsigt over det smukke landskab tæt på Vesterhavet. Huset er tegnet, så det tilpasser sig terrænnet. En stor, ugeneret træterrasse smyger sig hele vejen rundt om huset og skaber læfyldte hyggekroge, hvor man kan sidde i læ for vestenvinden. Byggeriet danner de perfekte rammer om den traditionelle og hyggelige danske sommerhusstemning.",
    images: [
      { src: "/images/Løkken sommerhus/Løkken-Alexandravej-sommerhus-indgangsparti.webp", alt: "Indgangsparti ved sommerhus i Løkken — Arkitekttegnestuen Yderskov" },
      { src: "/images/Løkken sommerhus/Løkken-Alexandravej-sommerhus-terrasse.webp", alt: "Terrasse ved sommerhus i Løkken — Arkitekttegnestuen Yderskov" },
      { src: "/images/Løkken sommerhus/Løkken-Alexandravej-sommerhus-sidebygning.webp", alt: "Sidebygning ved sommerhus i Løkken — Arkitekttegnestuen Yderskov" },
    ],
    dark: true,
  },
  {
    eyebrow: "Projekt",
    title: "Sommerhus\nmed pool, Ålbæk.",
    location: "Ålbæk, Nordjylland",
    size: "185 m² wellness-hus · pool & spa",
    year: "2023",
    description: "Dette store sommerhus i Ålbæk er beklædt med lyst træ og tegnet med fokus på wellness og samvær. Indenfor er der en stor poolafdeling med en swimmingpool, en sauna og et indbygget spabad. Huset rummer desuden et lyst køkken-alrum med en hyggelig hems og et stort aktivitetsrum med billard og bordfodbold til de regnfulde dage. Med flere gode soveværelser og badeværelser er sommerhuset perfekt indrettet til, at en stor familie eller flere generationer kan holde ferie sammen, og det egner sig også rigtig godt til udlejning.",
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
    title: "Nyt\nsommerhus, Løkken.",
    location: "Løkken, Nordjylland",
    size: "115 m² fritidshus",
    year: "2024",
    description: "Dette nye sommerhus i Løkken er bygget i en moderne, enkel stil og beklædt med lodrette, mørke trælister. Vi har tegnet huset med store glaspartier, som lader lyset strømme frit igennem rummene og forbinder stuen direkte med haven. En stor træterrasse løber ugeneret langs huset og skaber gode lækroge til de solrige dage. Som en ekstra detalje er der bygget en praktisk, integreret udebruser på terrassen, som er perfekt efter en tur på stranden.",
    images: [
      { src: "/images/Harald Jensens Vej/Løkken-sommerhus-Haraldjensensvej-indkørsel.webp", alt: "Nyt sommerhus i Løkken — Arkitekttegnestuen Yderskov" },
      { src: "/images/Harald Jensens Vej/Løkken-sommerhus-Haraldjensensvej-terrasse.webp", alt: "Terrasse ved sommerhus i Løkken — Arkitekttegnestuen Yderskov" },
      { src: "/images/Harald Jensens Vej/Løkken-sommerhus-Haraldjensensvej--udebruser.webp", alt: "Udebruser ved sommerhus i Løkken — Arkitekttegnestuen Yderskov" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Sommerhus med\nbiopejs, Løkken.",
    location: "Løkken, Nordjylland",
    size: "115 m² fritidshus",
    year: "2024",
    description: "Arkitekttegnet sommerhus i Løkken med minimalistisk nordisk interiør. Opholdsrummet har lyst plankegulv og en central mur med indbygget biopejs som rumdeler mod køkkenet. Det lyse egetræskøkken har betonbordplader, og der er direkte udgang til en stor træterrasse med udebruser. [Læs vores case og se detaljerne om den indbyggede biopejs her](/blog/indbygget-biopejs-sommerhus).",
    images: [
      { src: "/images/Harald jensensvej Løkken/Harald jensensvej stue og pejs.webp", alt: "Stue med indbygget biopejs i sommerhus, Løkken — Arkitekttegnestuen Yderskov" },
      { src: "/images/Harald jensensvej Løkken/Harald jensensvej køkken.webp", alt: "Køkken i moderne sommerhus, Løkken — Arkitekttegnestuen Yderskov" },
      { src: "/images/Harald jensensvej Løkken/Harald jensens vej køkkeborde.webp", alt: "Køkkenø med betonbordplade i sommerhus, Løkken — Arkitekttegnestuen Yderskov" },
      { src: "/images/Harald jensensvej Løkken/Harald jensensvej terrasse.webp", alt: "Terrasse ved sommerhus i Løkken — Arkitekttegnestuen Yderskov" },
      { src: "/images/Harald jensensvej Løkken/Harald jensensvej terrasse udebrus.webp", alt: "Udebruser på terrasse ved sommerhus, Løkken — Arkitekttegnestuen Yderskov" },
    ],
    dark: true,
  },
];

const faqItems = [
  {
    q: "Hvad koster et arkitekttegnet sommerhus?",
    a: "Et arkitekttegnet sommerhus starter fra 12.000 kr. pr. m². Prisen afhænger af størrelse, materialer og placering. Kontakt os for en uforpligtende vurdering.",
  },
  {
    q: "Kan I tegne sommerhuse til specielle grunde?",
    a: "Ja — vi er specialister i at tilpasse sommerhuset til grunden, hvad enten det er en udsigtsgrund, klitgrund eller skovgrund.",
  },
  {
    q: "Kræver et nyt sommerhus byggetilladelse?",
    a: "Ja, de fleste nye sommerhuse kræver byggetilladelse. Vi søger og håndterer hele processen med kommunen.",
  },
  {
    q: "Kan et sommerhus laves til helårsbrug?",
    a: "Det afhænger af lokalplanen for grunden. Vi rådgiver om mulighederne og søger dispensation hvis relevant.",
  },
  {
    q: "Arbejder I med faste priser?",
    a: "Ja. Vi tilbyder fast pris på arkitekthonoraret, så du altid kender dine udgifter fra start.",
  },
  {
    q: "Kan I tegne et sommerhus der egner sig til udlejning?",
    a: "Absolut. Vi designer sommerhuse der er attraktive for lejere — med god plads, lys og faciliteter.",
  },
];

export default function SommerhusePage() {
  const projectSchema = {
    "@context": "https://schema.org",
    "@graph": projectGalleries.map((p) => {
      const location = p.title.split(",").pop()?.trim().replace(".", "").replace(/\n/g, " ") || "Danmark";
      return {
        "@type": "SingleFamilyResidence",
        "name": p.title.replace(/\n/g, " "),
        "description": `Arkitekttegnet sommerhus i ${location} tegnet af Yderskov Arkitekter.`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": location,
          "addressCountry": "DK",
        },
        "image": p.images.map((img) => `https://yderskov.com${img.src}`),
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
        slides={[{ src: "/images/Torndalsvej/Hals-Torndalsvej-terrasse.webp", alt: "Arkitekttegnet sommerhus — Arkitekttegnestuen Yderskov" }]}
        tag="Sommerhuse"
        subtitle="Sommerhuse"
        lines={[
          "Jeres sommerhus skal dufte af hav, smage af frihed og holde i generationer.",
          "Gratis og uforpligtende første idemøde. Vi kommer ud til jer.",
        ]}
        italicLines={[0, 1]}
      />

      <section className="s">
        <div className="s-inner">
          <div className="text-2col">
            <div>
              <span className="eyebrow">Arkitekttegnede sommerhuse</span>
              <h1 className="sec-hed">Arkitekttegnede sommerhuse<br />fra idé til nøglefærdigt.</h1>
            </div>
            <div>
              <p className="body-p">
                Dit sommerhus skal passe til netop din grund — uanset om det er ved kysten, i skoven eller på et udsigtsareal. Vi tegner, projekterer og bygger med egne håndværkere.
              </p>
              <p className="body-p">
                Se vores sommerhusprojekter her på siden eller læs mere om <Link href="/om" className="text-link">vores proces</Link>. Som erfaren <Link href="/arkitekt-aalborg" className="text-link">arkitekt i Aalborg</Link> og resten af Jylland rådgiver vi gerne. Du kan også læse mere om <Link href="/priser" className="text-link">vores priser</Link> og faste aftaler. Gratis første møde på grunden.
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
            <ImageGrid images={gallery.images} />
          </div>
        </section>
      ))}

      <div className="stats-bg">
        <div className="stats-inner">
          <div className="stat"><div className="stat-num">12.000<sup> kr.</sup></div><div className="stat-lbl">Fra pr. m²</div></div>
          <div className="stat"><div className="stat-num">24<sup> timer</sup></div><div className="stat-lbl">Svar inden</div></div>
          <div className="stat"><div className="stat-num">10<sup>+</sup></div><div className="stat-lbl">Igangværende projekter</div></div>
          <div className="stat"><div className="stat-num">300<sup>+</sup></div><div className="stat-lbl">Projekter gennemført</div></div>
        </div>
      </div>

      <section className="s">
        <div className="s-inner">
          <span className="eyebrow">Spørgsmål og svar</span>
          <h2 className="sec-hed">FAQ — sommerhuse</h2>
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
              <h2 className="sec-hed">Lad os skabe<br />dit drømmesommerhus</h2>
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
