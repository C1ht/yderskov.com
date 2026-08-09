import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import CtaBand from "@/components/CtaBand";
import InspirationGallery from "@/components/InspirationGallery";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Arkitekt Aalborg — Tegnestue med fast pris | Yderskov",
  description:
    "Vil du bygge i Aalborg? Få en arkitekttegnet villa til fast pris med egne håndværkere. Book et gratis første møde på din byggegrund — vi kommer til dig!",
  alternates: { canonical: "https://yderskov.com/arkitekt-aalborg" },
  openGraph: {
    type: "website",
    locale: "da_DK",
    url: "https://yderskov.com/arkitekt-aalborg",
    siteName: "Yderskov Arkitekter",
    images: [{ url: "https://yderskov.com/images/Karetmagervej/Sæby-ny-villa-funkis-haveside.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arkitekt Aalborg — Tegnestue med fast pris | Yderskov",
    description: "Vil du bygge i Aalborg? Få en arkitekttegnet villa til fast pris med egne håndværkere. Book et gratis første møde på din byggegrund — vi kommer til dig!",
    images: ["https://yderskov.com/images/Karetmagervej/Sæby-ny-villa-funkis-haveside.webp"],
  },
};

const aalborgFAQ = [
  {
    q: "Hvorfor vælge en arkitekt med kendskab til Aalborg og Nordjylland?",
    a: "Lokalt kendskab sikrer en smidig proces med Aalborg Kommune. Vi kender lokalplanerne, jordbundsforholdene i regionen og de arkitektoniske traditioner i områder som Hasseris i Aalborg, Vestbjerg og Gug.",
  },
  {
    q: "Hvordan sikrer I at byggeprisen holder?",
    a: "Vi arbejder med et unikt koncept, hvor vi både tegner huset og bygger det med vores egne faste håndværkere. Det betyder, at vi kan give en fast pris på hele byggeriet fra første dag.",
  },
  {
    q: "Er det første idémøde i Aalborg gratis?",
    a: "Ja — det første møde er 100% gratis og uforpligtende. Vi mødes meget gerne direkte på din byggegrund i Aalborg eller omegn for at vurdere mulighederne.",
  },
  {
    q: "Tegner I også tilbygninger og sommerhuse?",
    a: "Ja. Udover nye villaer tegner og opfører vi mange sommerhuse (f.eks. i Blokhus og Løkken) samt gennemtænkte om- og tilbygninger på eksisterende parcelhuse i Aalborg.",
  },
];

export default function ArkitektAalborgPage() {
  const aalborgSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Yderskov Arkitekter - Aalborg",
    "url": "https://yderskov.com/arkitekt-aalborg",
    "telephone": "+4529723427",
    "email": "cy@yderskov.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Aalborg",
      "addressRegion": "Nordjylland",
      "addressCountry": "DK"
    },
    "description": "Erfaren arkitekttegnestue i Aalborg. Vi tegner og bygger din villa, dit sommerhus eller din tilbygning i Aalborg og hele Nordjylland med fast pris.",
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Aalborg" },
      { "@type": "AdministrativeArea", "name": "Nordjylland" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aalborgSchema) }}
      />
      <Breadcrumbs items={[{ label: "Arkitekt Aalborg" }]} />
      <Nav />
      <Hero
        slides={[{ src: "/images/Karetmagervej/Sæby-ny-villa-funkis-haveside.webp", alt: "Arkitekttegnet villa i Nordjylland — Arkitekttegnestuen Yderskov" }]}
        tag="Arkitekt Aalborg"
        subtitle="Arkitekt Aalborg"
        lines={[
          "Fra første idé til færdigt byggeri i Aalborg og hele Nordjylland.",
          "Vi tegner huse tilpasset det nordjyske landskab, jeres ønsker og jeres budget.",
          "Gratis og uforpligtende idémøde direkte på din byggegrund.",
        ]}
        italicLines={[1, 2]}
      />

      {/* Intro */}
      <section className="s">
        <div className="s-inner">
          <div className="text-2col">
            <div>
              <span className="eyebrow">Din lokale arkitekt</span>
              <h1 className="sec-hed">Arkitekt Aalborg</h1>
              <p style={{ fontSize: "1.1rem", fontWeight: 200, color: "var(--sub)", marginTop: "1rem", letterSpacing: "-0.01em", lineHeight: 1.6 }}>
                — Yderskov Tegnestue i Aalborg og Nordjylland
              </p>
            </div>
            <div>
              <p className="body-intro">
                Søger du en <strong>arkitekt i Aalborg</strong>? Yderskov Tegnestue tegner og opfører arkitekttegnede villaer, sommerhuse og tilbygninger i Aalborg og hele Nordjylland med udgangspunkt i dine ønsker og grundens muligheder.
              </p>
              <p className="body-p">
                Vi har stor erfaring med alt fra moderne funkisvillaer i Hasseris til familiehuse i Vestbjerg samt tilbygninger i Gug og Nørresundby. Vores dybe kendskab til Aalborg Kommunes lokalplaner sikrer en hurtig og gnidningsfri godkendelsesproces.
              </p>
              <p className="body-p">
                Hos os får du fuld økonomisk tryghed. Vi står for hele processen — fra første streg til færdigt byggeri — med egne håndværkere til en <strong>aftalt fast pris</strong>. Kontakt os for et <strong>gratis idémøde</strong> direkte på din byggegrund.
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

      {/* Local expertise */}
      <section className="s s-off">
        <div className="s-inner">
          <div className="text-2col">
            <div>
              <span className="eyebrow">Lokalt fokus</span>
              <h2 className="sec-hed">Erfaren arkitekt<br />i Aalborg og omegn.</h2>
              <p className="body-p" style={{ marginTop: "1rem" }}>
                Vi har tegnet og opført en lang række projekter i Aalborg og Nordjylland – fra villaer i Hasseris og Vestbjerg til sommerhuse på vestkysten. Vi har erfaringen og det lokale netværk til at tilpasse byggeriet til grundens forhold og bringe dit projekt sikkert i mål.
              </p>
            </div>
            <div className="info-box">
              <p className="info-box-hed">Tegnestuen Yderskov i tal</p>
              <span className="info-box-lbl">Erfaring &amp; projekter</span>
              <ul>
                <li>Grundlagt i 2009 af Chris Yderskov</li>
                <li>300+ afleverede byggeprojekter</li>
                <li>Egen tegnestue og fast tømrer- &amp; murerhold</li>
              </ul>
              <span className="info-box-lbl">Vores ydelser</span>
              <ul>
                <li>Skitseforslag</li>
                <li>Myndighedsprojekt &amp; byggetilladelse</li>
                <li>Nøglefærdigt byggeri til fast pris</li>
              </ul>
              <span className="info-box-lbl">Geografi</span>
              <ul>
                <li>Aalborg, Nørresundby og hele Nordjylland</li>
                <li>Projekter på Sjælland og i resten af Danmark</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local Projects */}
      <section className="s">
        <div className="s-inner">
          <span className="eyebrow">Portefølje</span>
          <div className="proj-header">
            <div>
              <h2 className="sec-hed">Udvalgte projekter i Nordjylland</h2>
              <p className="proj-desc">Vi tegner huse, der komplementerer deres omgivelser og opfylder familiens unikke behov.</p>
            </div>
            <Link href="/villaer" className="proj-see">Se alle villaer →</Link>
          </div>
          <div className="proj-grid">
            <Link href="/villaer" className="proj-card" id="proj-vestbjerg">
              <Image
                src="/images/Højgården/Vestsbjerg-ny-funkisvilla-haveside.webp"
                alt="Funkisvilla nær Hammer Bakker — Arkitekttegnestuen Yderskov"
                fill
                sizes="(max-width: 900px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <div className="proj-foot">
                <span className="proj-title">Funkisvilla nær Hammer Bakker</span>
                <span className="proj-arr">→</span>
              </div>
            </Link>
            <Link href="/villaer" className="proj-card" id="proj-hjoerring">
              <Image
                src="/images/Gartnerhaven/Hjørring-garnterhaven-ny-villa.webp"
                alt="Klassisk ny villa i Hjørring — Arkitekttegnestuen Yderskov"
                fill
                sizes="(max-width: 900px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <div className="proj-foot">
                <span className="proj-title">Klassisk villa, Hjørring</span>
                <span className="proj-arr">→</span>
              </div>
            </Link>
            <Link href="/sommerhuse" className="proj-card" id="proj-loekken">
              <Image
                src="/images/Løkken sommerhus/Løkken-Alexandravej-sommerhus-terrasse.webp"
                alt="Arkitekttegnet sommerhus i Løkken — Arkitekttegnestuen Yderskov"
                fill
                sizes="(max-width: 900px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <div className="proj-foot">
                <span className="proj-title">Sommerhus, Løkken</span>
                <span className="proj-arr">→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="s s-off">
        <div className="s-inner">
          <span className="eyebrow">FAQ</span>
          <h2 className="sec-hed">Ofte stillede spørgsmål</h2>
          <div className="faq-grid">
            {aalborgFAQ.map((item, i) => (
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
              <p style={{ marginTop: "1.5rem" }}>Ring eller skriv til os. Vi svarer altid inden for 24 timer og tilbyder et gratis, uforpligtende møde direkte på din byggegrund i Aalborg-området.</p>
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
