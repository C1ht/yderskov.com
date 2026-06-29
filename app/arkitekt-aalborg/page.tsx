import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import CtaBand from "@/components/CtaBand";
import InspirationGallery from "@/components/InspirationGallery";

export const metadata: Metadata = {
  title: "Arkitekt Aalborg — Tegnestue med fast pris | Yderskov",
  description:
    "Vil du bygge i Aalborg? Få en arkitekttegnet villa til fast pris med egne håndværkere. Book et gratis første møde på din byggegrund — vi kommer til dig!",
  alternates: { canonical: "https://yderskov.com/arkitekt-aalborg" },
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
  return (
    <>
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
                Hvis du planlægger at bygge nyt eller bygge til og søger en dygtig <strong>arkitekt Aalborg</strong>, er Yderskov Tegnestue din ideelle partner. Med over 15 års erfaring inden for privat boligbyggeri har vi etableret os som en af de førende og mest troværdige arkitekter i regionen.
              </p>
              <p className="body-p">
                Som din lokale <strong>arkitekt Aalborg</strong> tegner og projekterer vi alt fra eksklusive funkisvillaer i Hasseris i Aalborg og moderne familiehuse i Vestbjerg til funktionelle tilbygninger i Gug og Nørresundby. Vi har et indgående kendskab til Aalborg Kommunes lokalplaner, byggeprocedurer og de særlige geotekniske forhold i området, hvilket sikrer dig en gnidningsfri byggesagsbehandling.
              </p>
              <p className="body-p">
                Hos Yderskov tror vi på, at god arkitektur skal gå hånd i hånd med økonomisk tryghed. Mange bygherrer frygter, at et samarbejde med en <strong>arkitekt Aalborg</strong> kan medføre uforudsigelige ekstraregninger og budgetskred. Det har vi gjort op med. Vi tilbyder en unik samlet proces. Vi tegner projektet, udarbejder myndighedsprojektet og bygger boligen med vores egne faste tømrer- og murerhold. Det betyder, at vi kan give dig en fast pris på hele projektet, inden spaden stikkes i jorden. Du slipper for ubehagelige overraskelser og skal kun kommunikere med én enkelt ansvarlig part gennem hele forløbet.
              </p>
              <p className="body-p">
                Som en erfaren tegnestue i Nordjylland tegner vi huse, der tager udgangspunkt i grundens unikke kvaliteter, dagslysets gang og din families hverdagsliv. Vores tegnestue i Brønderslev ligger kun en kort køretur fra Aalborg, og vi mødes altid gerne med dig direkte på din byggegrund i Aalborg-området til et gratis, uforpligtende idémøde. Her kan vi drøfte dine visioner, vurdere grundens potentiale og give dig de første råd om placering og formsprog.
              </p>
              <p className="body-p">
                Uanset om du vil bygge en herskabelig patriciervilla, et minimalistisk længehus eller en moderne tilbygning, der komplementerer din nuværende bolig, sikrer vi en proces præget af høj faglig kvalitet, fleksibilitet og tæt personlig dialog. Kontakt Yderskov i dag og hør, hvordan vi som din <strong>arkitekt Aalborg</strong> kan hjælpe dig sikkert i mål med din byggedrøm.
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
                Vi har gennemført en lang række projekter i Aalborg-området — herunder moderne funkisvillaer i Vestbjerg, arkitekttegnede villaer i Hjørring og eksklusive renoveringer. 
              </p>
              <p className="body-p">
                Uanset om du skal bygge på en skrånende grund med udsigt, tilpasse et hus til et historisk kvarter i Hasseris i Aalborg, eller opføre et klassisk sommerhus ved den nordjyske vestkyst, har vi erfaringen og det lokale netværk til at bringe projektet sikkert i mål.
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

      {/* Katalog */}
      <section className="s catalog-section" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="s-inner">
          <div className="catalog-card">
            <div className="catalog-visual">
              <div className="catalog-mockup">
                <div className="book">
                  {/* Fanned page layers behind the cover */}
                  <div className="page-layer page-layer-3"></div>
                  <div className="page-layer page-layer-2"></div>
                  <div className="page-layer page-layer-1"></div>

                  <div className="book-cover">
                    <img src="/images/Lerstien/Frederikshavn-lerstien-terrasse-byview.webp" alt="Arkitekttegnestuen Yderskov Inspirationskatalog" />
                    <div className="book-overlay">
                      <div className="book-top-brand">
                        <div className="book-brand-name">YDERSKOV</div>
                        <div className="book-brand-line"></div>
                      </div>
                      <div className="book-bottom-title">
                        <div className="book-title">Inspiration</div>
                        <div className="book-subtitle">PROJEKTKATALOG</div>
                      </div>
                    </div>
                  </div>
                  <div className="book-spine"></div>
                </div>
              </div>
            </div>

            <div className="catalog-content">
              <span className="eyebrow">Projektkatalog</span>
              <h2 className="sec-hed">Få inspiration til dit byggeprojekt</h2>
              <p className="body-p" style={{ marginTop: "1rem" }}>
                Vi har samlet et udsnit af vores projekter i et inspirationskatalog. Gå på opdagelse i vores afsluttede villaer, sommerhuse samt om- og tilbygninger. Få inspiration til materialevalg, planløsninger og lysindfald. Tag gerne kataloget med til vores første gratis, uforpligtende møde.
              </p>
              
              <div className="catalog-actions">
                <a
                  href="/katalog-inspiration.pdf?v=3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-katalog-open"
                >
                  Se vores inspirationskatalog →
                </a>
                <a
                  href="/katalog-inspiration.pdf?v=3"
                  download="Yderskov-Arkitekter-Inspirationskatalog.pdf"
                  className="btn-katalog-download"
                >
                  Download inspirationskatalog
                </a>
              </div>
              
              <div className="catalog-extra">
                <a
                  href="/katalog-inspiration-print.pdf?v=3"
                  download="Yderskov-Arkitekter-Inspirationskatalog-Print.pdf"
                  className="catalog-print-link"
                >
                  Hent print-venlig version (hvid baggrund)
                </a>
              </div>
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
              <img src="/images/Højgården/Vestsbjerg-ny-funkisvilla-haveside.webp" alt="Funkisvilla nær Hammer Bakker — Arkitekttegnestuen Yderskov" />
              <div className="proj-foot">
                <span className="proj-title">Funkisvilla nær Hammer Bakker</span>
                <span className="proj-arr">→</span>
              </div>
            </Link>
            <Link href="/villaer" className="proj-card" id="proj-hjoerring">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Gartnerhaven/Hjørring-garnterhaven-ny-villa.webp" alt="Klassisk ny villa i Hjørring — Arkitekttegnestuen Yderskov" />
              <div className="proj-foot">
                <span className="proj-title">Klassisk villa, Hjørring</span>
                <span className="proj-arr">→</span>
              </div>
            </Link>
            <Link href="/sommerhuse" className="proj-card" id="proj-loekken">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Løkken sommerhus/Løkken-Alexandravej-sommerhus-terrasse.webp" alt="Arkitekttegnet sommerhus i Løkken — Arkitekttegnestuen Yderskov" />
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
