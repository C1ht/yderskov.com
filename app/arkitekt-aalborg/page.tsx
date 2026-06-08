import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Arkitekt Aalborg — arkitekttegnede villaer med fast pris — Yderskov",
  description:
    "Søger du en arkitekt i Aalborg eller Nordjylland? Yderskov Arkitekter tegner unikke huse med fast pris, egne faste håndværkere og én samlet proces.",
  alternates: { canonical: "https://yderskov.dk/arkitekt-aalborg" },
};

const aalborgFAQ = [
  {
    q: "Hvorfor vælge en arkitekt med kendskab til Aalborg og Nordjylland?",
    a: "Lokalt kendskab sikrer en smidig proces med Aalborg Kommune. Vi kender lokalplanerne, jordbundsforholdene i regionen og de arkitektoniske traditioner i områder som Hasseris, Vestbjerg og Gug.",
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
  return (
    <>
      <Nav />
      <Hero
        slides={[{ src: "/images/Karetmagervej/Sæby-ny-villa-funkis-haveside.webp", alt: "Arkitekttegnet villa i Nordjylland — Yderskov Arkitekter" }]}
        tag="Arkitekt Aalborg"
        subtitle="Arkitekt i Aalborg"
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
              <h1 className="sec-hed">Unik arkitektur.<br />Tryg byggeproces.</h1>
              <p style={{ fontSize: "1.1rem", fontWeight: 200, color: "var(--sub)", marginTop: "1rem", letterSpacing: "-0.01em", lineHeight: 1.6 }}>
                — Arkitekttegnestuen Yderskov i Aalborg og Nordjylland
              </p>
            </div>
            <div>
              <p className="body-intro">
                Går du med drømme om at bygge nyt eller lave en tilbygning i Aalborg, Nørresundby eller omegn? Hos Yderskov Arkitekter forener vi stærkt arkitektonisk design med fuldstændig økonomisk tryghed.
              </p>
              <p className="body-p">
                Mange frygter, at et arkitekttegnet hus bliver uforudsigeligt dyrt. Vi har løst dette ved at tilbyde en samlet proces: Vi tegner dit projekt, projekterer myndighedsgodkendelsen og bygger det med vores egne faste håndværkere. 
              </p>
              <p className="body-p">
                Det giver dig én enkelt samarbejdspartner fra start til slut, fast pris på både tegnearbejde og byggeri, samt fuld kontrol over kvaliteten.
              </p>
              <div className="about-tags">
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
              <h2 className="sec-hed">Vi kender<br />Aalborg.</h2>
              <p className="body-p" style={{ marginTop: "1rem" }}>
                Vi har gennemført en lang række projekter i Aalborg-området — herunder moderne funkisvillaer i Vestbjerg, arkitekttegnede villaer i Hjørring og eksklusive renoveringer. 
              </p>
              <p className="body-p">
                Uanset om du skal bygge på en skrånende grund med udsigt, tilpasse et hus til et historisk kvarter i Hasseris, eller opføre et klassisk sommerhus ved den nordjyske vestkyst, har vi erfaringen og det lokale netværk til at bringe projektet sikkert i mål.
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
                <li>Skitseforslag &amp; visualisering</li>
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Højgården/Vestsbjerg-ny-funkisvilla-haveside.webp" alt="Funkisvilla med niveauforskelle i Vestbjerg" />
              <div className="proj-foot">
                <span className="proj-title">Funkisvilla, Vestbjerg</span>
                <span className="proj-arr">→</span>
              </div>
            </Link>
            <Link href="/villaer" className="proj-card" id="proj-hjoerring">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Gartnerhaven/Hjørring-garnterhaven-ny-villa.webp" alt="Klassisk ny villa i Hjørring" />
              <div className="proj-foot">
                <span className="proj-title">Klassisk villa, Hjørring</span>
                <span className="proj-arr">→</span>
              </div>
            </Link>
            <Link href="/sommerhuse" className="proj-card" id="proj-loekken">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Løkken sommerhus/Løkken-Alexandravej-sommerhus-terrasse.webp" alt="Arkitekttegnet sommerhus i Løkken" />
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
