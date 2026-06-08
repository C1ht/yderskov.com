import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Arkitekt Nordjylland | Yderskov Tegnestue",
  description:
    "Yderskov er en anerkendt tegnestue i Nordjylland. Vi tilbyder arkitekttjenester i Aalborg, på Sjælland og i hele Danmark.",
  alternates: { canonical: "https://yderskov.com/om" },
};

const miniFAQ = [
  {
    q: "Hvem er Chris Yderskov?",
    a: "Chris Yderskov er indehaver og arkitekt hos tegnestuen. Han er uddannet fra Byggeteknisk højskole Aalborg og har arbejdet med byggeri siden 2009.",
  },
  {
    q: "Hvad gør jer anderledes?",
    a: "Vi tilbyder en komplet løsning med fast pris og egne håndværkere. Du taler altid direkte med arkitekten — ingen mellemled.",
  },
  {
    q: "Hvilke geografiske områder dækker I?",
    a: "Vi er baseret i Nordjylland og tegner mange projekter i Aalborg og omegn, men dækker også projekter på Sjælland samt i resten af Danmark.",
  },
  {
    q: "Hvad er jeres erfaring?",
    a: "Tegnestuen er grundlagt i 2009 og har gennemført 300+ projekter — villaer, sommerhuse, tilbygninger og erhvervsprojekter.",
  },
  {
    q: "Er det første møde gratis?",
    a: "Ja — det første møde er altid gratis og uforpligtende. Vi kommer gerne ud til dig på grunden.",
  },
  {
    q: "Hvad koster det at bruge jer?",
    a: "Vi arbejder med faste priser, så du altid kender dine udgifter. Se vores prisside for vejledende priser.",
  },
];

export default function OmPage() {
  return (
    <>
      <Nav />
      <Hero
        slides={[{ src: "/images/Lerstien/Frederikshavn-lerstien-terrasse.webp", alt: "Arkitekttegnestuen Yderskov" }]}
        tag="Om os"
        subtitle="Om os"
        lines={[
          "I har tankerne, vi sætter stregerne.",
          "Byggeri tegnet kun til jer, til jeres grund, jeres ønsker og jeres budget.",
          "Gratis og uforpligtende første idemøde. Vi kommer ud til jer.",
        ]}
        italicLines={[1, 2]}
      />

      {/* Intro */}
      <section className="s">
        <div className="s-inner">
          <div className="text-2col">
            <div>
              <span className="eyebrow">Arkitekttegnestuen</span>
              <h1 className="sec-hed">Om Arkitekttegnestuen<br />Yderskov</h1>
              <p style={{ fontSize: "1.1rem", fontWeight: 200, color: "var(--sub)", marginTop: "1rem", letterSpacing: "-0.01em", lineHeight: 1.6 }}>
                — arkitekt med samlet proces og styr på økonomien
              </p>
            </div>
            <div>
              <p className="body-intro">
                Arkitekttegnestuen Yderskov ApS er din lokale <Link href="/arkitekt-aalborg" className="text-link">arkitekt i Aalborg</Link>, Nordjylland og på Sjælland. Vi har speciale i arkitekttegnede villaer, sommerhuse, tilbygninger og erhvervsprojekter.
              </p>
              <p className="body-p">
                Vi arbejder med en samlet proces fra idé til færdigt byggeri — med egne faste håndværkere og fokus på at holde styr på din økonomi undervejs.
              </p>
              <p className="body-p">
                Tegnestuen blev grundlagt i 2009 og har siden tegnet og bygget projekter i hele Danmark — med særligt fokus på vores nærområde i Aalborg og Nordjylland, samt en voksende portefølje af spændende projekter på Sjælland.
              </p>
              <div className="about-tags">
                <Link href="/kontakt" className="tag tag-dark">Kontakt os →</Link>
                <Link href="/priser" className="tag">Se priser</Link>
                <Link href="/faq" className="tag">FAQ</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who are we */}
      <section className="s s-off">
        <div className="s-inner">
          <div className="text-2col">
            <div>
              <span className="eyebrow">Baggrund</span>
              <h2 className="sec-hed">Hvem er<br />vi?</h2>
              <p className="body-p">Vi er en mindre tegnestue med fokus på kvalitet og direkte dialog. Hos os taler du altid direkte med arkitekten — ingen mellemled.</p>
              <p className="body-p">Vi tager ansvar for hele processen og sikrer at du altid har overblik over økonomi og fremdrift.</p>
            </div>
            <div className="info-box">
              <p className="info-box-hed">Hvem står bag Arkitekttegnestuen Yderskov?</p>
              <span className="info-box-lbl">Arkitekt</span>
              <ul>
                <li>Chris Yderskov — indehaver og arkitekt</li>
                <li>Uddannet fra Byggeteknisk højskole Aalborg</li>
                <li>Specialiseret i boligbyggeri og erhverv</li>
                <li>Tegnestuen grundlagt i 2009</li>
              </ul>
              <span className="info-box-lbl">Projekter</span>
              <ul>
                <li>Nybyggeri — villaer, sommerhuse, erhverv</li>
                <li>Tilbygninger og ombygninger</li>
                <li>Renovering og energiforbedring</li>
                <li>Special og wellness</li>
              </ul>
              <span className="info-box-lbl">Geografi</span>
              <ul>
                <li>Aalborg &amp; Nordjylland</li>
                <li>Sjælland &amp; København</li>
                <li>Projekter i hele Danmark</li>
                <li>Danserhøj 38, 9700 Brønderslev</li>
              </ul>
              <Link href="/kontakt" className="info-box-link">Få en uforpligtende snak</Link>
              <p className="info-box-tel">
                <a href="tel:29723427">ring 29 72 34 27</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section className="s s-off" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="s-inner">
          <div className="text-2col">
            <div>
              <span className="eyebrow">Din tegnestue i Nordjylland</span>
              <h2 className="sec-hed" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", lineHeight: 1.25 }}>
                Lokal forankring &amp;<br />landsdækkende rækkevidde
              </h2>
              <p style={{ fontSize: "0.95rem", color: "var(--light)", marginTop: "1rem" }}>
                Søger du en kompetent <strong>arkitekt Nordjylland</strong> eller en erfaren <strong>tegnestue Nordjylland</strong>? Vi er altid klar til at drøfte dit næste byggeprojekt.
              </p>
            </div>
            <div>
              <p className="body-p">
                 Som en veletableret <strong>tegnestue i Nordjylland</strong> har Yderskov gennem mere end 15 år hjulpet private bygherrer med at realisere deres boligdrømme. Vi har base i Brønderslev, og som <strong>arkitekt Nordjylland</strong> tegner og opfører vi unikke huse i Aalborg, Hjørring, Frederikshavn og i hele den nordjyske region. Vores dybe lokalkendskab til de gældende lokalplaner og de enkelte kommuners byggesagsbehandling sikrer dig en tryg og smidig proces fra de første skitser til det færdige myndighedsprojekt.
              </p>
              <p className="body-p">
                Selvom vi er en stolt nordjysk tegnestue, stopper vores engagement ikke ved Limfjorden. Hos Yderskov ser vi det som en stor styrke, at vi er en yderst fleksibel og fuldt landsdækkende tegnestue. Vi påtager os aktivt opgaver i hele landet, og vi har gennem årene opbygget en stærk portefølje af spændende projekter på Sjælland og i Københavnsområdet. Senest har vi udført opgaver i <strong>Køge, Odsherred, Brønshøj og Ramløse</strong>. Vi elsker at rejse efter de rette projekter, og geografisk afstand er aldrig en hindring for os. Vi er altid klar til at køre efter opgaverne og mødes med jer direkte på jeres byggegrund for at drøfte mulighederne.
              </p>
              <p className="body-p">
                Når du vælger Yderskov som din foretrukne arkitekt, får du en samarbejdspartner, der tager hånd om hele forløbet fra start til slut. Vi adskiller os fra mange andre traditionelle tegnestuer ved at tilbyde en samlet totalentreprise. Det betyder, at vi ikke blot tegner dit hus, men også står for den konkrete opførelse i tæt samarbejde med vores egne faste tømrer- og murerhold. Dette eliminerer de klassiske misforståelser mellem tegnebordet og byggepladsen, hvilket sparer dig for både tid, bekymringer og uforudsete udgifter. Dertil arbejder vi med en fast pris, som sikrer fuldstændig økonomisk gennemsigtighed gennem hele projektet.
              </p>
              <p className="body-p">
                Hvad enten du drømmer om en moderne, lys funkisvilla med panoramaudsigt, et klassisk sommerhus i pagt med naturen eller en gennemtænkt tilbygning, der giver jeres eksisterende bolig den plads, I mangler, står vi klar til at hjælpe. Vi tror på den tætte og direkte personlige dialog. Hos os taler du som bygherre altid direkte med arkitekten gennem alle byggeriets faser, så der aldrig opstår tvivl om dine ønsker. Uanset om dit byggeprojekt er placeret i Nordjylland, i Trekantområdet, på Sjælland eller i Storkøbenhavn, bringer vi vores erfaring, fleksibilitet og faglige stolthed i spil for at skabe det perfekte hjem til dig.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="s">
        <div className="s-inner">
          <div className="text-2col">
            <div>
              <span className="eyebrow">Vores tilgang</span>
              <h2 className="sec-hed">Et hus tegnet<br />til dig og din grund.</h2>
            </div>
            <div>
              <p className="body-p">
                Byggerier kan hurtigt blive dyre hvis der ikke er styr på processen fra start. Vi har set det mange gange: urealistiske budgetter, ufuldstændige tegninger og manglende koordinering.
              </p>
              <p className="body-p">
                Hos os starter vi med at forstå jeres ønsker og budget. Derefter tegner vi et hus der passer til grunden — og holder prisen fra første dag.
              </p>
              <p className="body-p">
                Med egne håndværkere har vi fuld kontrol over kvalitet og fremdrift. Det er én samtalepartner fra idé til indflytning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-bg">
        <div className="stats-inner">
          <div className="stat"><div className="stat-num">2009</div><div className="stat-lbl">Grundlagt</div></div>
          <div className="stat"><div className="stat-num">300<sup>+</sup></div><div className="stat-lbl">Projekter gennemført</div></div>
          <div className="stat"><div className="stat-num">10<sup>+</sup></div><div className="stat-lbl">Igangværende projekter</div></div>
          <div className="stat"><div className="stat-num">24<sup> timer</sup></div><div className="stat-lbl">Svar inden</div></div>
        </div>
      </div>

      {/* Mini FAQ */}
      <section className="s">
        <div className="s-inner">
          <span className="eyebrow">Spørgsmål og svar</span>
          <h2 className="sec-hed">Om tegnestuen</h2>
          <div className="faq-grid">
            {miniFAQ.map((item, i) => (
              <div key={i} className="faq-item">
                <p className="faq-q">{item.q}</p>
                <p className="faq-a">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />

      {/* Contact */}
      <section className="s form-bg" id="kontakt">
        <div className="s-inner">
          <div className="form-layout">
            <div className="form-meta">
              <span className="eyebrow">Kontakt os</span>
              <h2 className="sec-hed">Lad os tage<br />en snak</h2>
              <p style={{ marginTop: "1.5rem" }}>Ring eller skriv til os. Vi svarer inden 24 timer og tilbyder et gratis, uforpligtende møde.</p>
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
