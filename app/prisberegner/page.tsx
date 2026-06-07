import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PrisCalculator from "@/components/PrisCalculator";
import HeroForm from "@/components/HeroForm";

export const metadata: Metadata = {
  title: "Prisberegner tilbygning — vejledende prisskøn — Yderskov Arkitekter",
  description:
    "Få et vejledende prisskøn over din tilbygning baseret på materialevalg. Beregn byggeomkostninger for mur, tag, gulv og mere.",
  alternates: { canonical: "https://yderskov.dk/prisberegner" },
};


export default function PrisberegnPage() {
  return (
    <>
      <Nav />
      <Hero
        slides={[{ src: "/images/Gjøl/Gjøl-ny-villa-have.webp", alt: "Ny villa i Gjøl — Yderskov Arkitekter" }]}
        tag="Prisberegner"
        showForm={false}
        lines={[
          "I har tankerne, vi sætter stregerne.",
          "Byggeri tegnet kun til jer, til jeres grund, jeres ønsker og jeres budget.",
          "Gratis og uforpligtende første idemøde. Vi kommer ud til jer.",
        ]}
        italicLines={[1, 2]}
      />

      {/* Intro */}
      <section className="s pb-intro-bg">
        <div className="s-inner">
          <div className="pb-intro-grid">
            <div className="pb-intro-text">
              <span className="eyebrow">Prisberegner</span>
              <h1 className="sec-hed">Få et prisskøn<br />over din tilbygning.</h1>
              <p className="body-intro">
                Udfyld felterne og få et vejledende skøn over byggeomkostninger baseret på materialer du vælger. Du kan også se et <Link href="/prisberegner/demo" className="text-link">eksempel på et prisskøn her</Link>. Et gratis arkitektmøde giver dig dog altid det mest præcise billede.
              </p>
              <p className="body-p">
                Priser er inkl. moms og baseret på aktuelle markedspriser. Kontakt os for mere info om tilbud.
              </p>
              <div className="about-tags" style={{ marginTop: "1.5rem" }}>
                <Link href="/kontakt" className="tag tag-dark">Book gratis møde →</Link>
                <Link href="/priser" className="tag">Se alle priser</Link>
              </div>
            </div>
            <div className="pb-intro-img">
              <Image
                src="/images/Neptunvej/Aalborg-neptunvej-tilbygning-terrasse.webp"
                alt="Tilbygning og renovering — Yderskov Arkitekter"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="s s-off">
        <div className="s-inner">
          <span className="eyebrow">Beregner</span>
          <h2 className="sec-hed">Beregn dit projekt</h2>
          <div className="calc-guide">
            <p className="calc-guide-step"><span>1</span> Vælg om grunden er vandret eller skrånende.</p>
            <p className="calc-guide-step"><span>2</span> Indtast bygningens areal i m² og antal rum. Er du i tvivl om arealet, så brug et rundt tal — skønnet er vejledende.</p>
            <p className="calc-guide-step"><span>3</span> Vælg materialer indvendigt og udvendigt. Jo flere detaljer du udfylder, jo mere præcist bliver skønnet.</p>
            <p className="calc-guide-step"><span>4</span> Klik <strong>Beregn</strong> og se dit vejledende prisskøn med det samme.</p>
          </div>
          <PrisCalculator />
        </div>
      </section>

      {/* USP-punkter + disclaimer */}
      <section className="s">
        <div className="s-inner">
          <div className="pb-usps">
            <div className="pb-usp">
              <span className="pb-usp-num">1</span>
              <div>
                <p className="pb-usp-title">Prisskøn på 30 sekunder</p>
                <p className="pb-usp-body">Udfyld felterne og få et prisskøn med det samme.</p>
              </div>
            </div>
            <div className="pb-usp">
              <span className="pb-usp-num">2</span>
              <div>
                <p className="pb-usp-title">Rigtige arkitekter — ikke typehusfabrikanter</p>
                <p className="pb-usp-body">Vi laver unikke løsninger tilpasset din grund, dine ønsker og dit budget.</p>
              </div>
            </div>
            <div className="pb-usp">
              <span className="pb-usp-num">3</span>
              <div>
                <p className="pb-usp-title">Fra idé til færdigt projekt</p>
                <p className="pb-usp-body">Vi hjælper hele vejen — fra første streg til færdigmelding.</p>
              </div>
            </div>
          </div>

          <div className="pb-disclaimer">
            <p className="pb-disclaimer-title">Dette er et vejledende prisskøn — ikke et tilbud</p>
            <p className="pb-disclaimer-body">
              Skønnet omfatter kun entrepriseomkostninger baseret på de valgte materialer.
              Ikke medregnet: byggetilladelse og gebyr, jordbundsundersøgelser, landinspektør,
              rådgiverhonorar samt ukendte og uforudsete udgifter afhængig af projekt.
            </p>
          </div>
        </div>
      </section>

      {/* Tidslinje */}
      <section className="s">
        <div className="s-inner">
          <span className="eyebrow">Processen</span>
          <h2 className="sec-hed">Fra idé til færdigt byggeri</h2>
          <div className="pb-timeline">
            {[
              { n: "1", titel: "Gratis første møde", tekst: "Vi kommer ud til dig — gratis og uforpligtende. Vi lytter til dine ønsker og vurderer mulighederne på din grund." },
              { n: "2", titel: "Skitseforslag", tekst: "Vi udarbejder et skitseforslag med planløsning, facader og et samlet indtryk af projektet." },
              { n: "3", titel: "Myndighedsprojekt", tekst: "Vi tegner og beregner projektet til brug for ansøgning om byggetilladelse." },
              { n: "4", titel: "Byggetilladelse", tekst: "Vi sender ansøgningen til kommunen og følger op indtil tilladelsen er i hus." },
              { n: "5", titel: "Prisindhentning", tekst: "Vi indhenter tilbud fra håndværkere og forhandler den bedste pris til dig." },
              { n: "6", titel: "Byggefase", tekst: "Vi styrer byggeriet og koordinerer håndværkerne, så du slipper for bekymringer." },
              { n: "7", titel: "Aflevering til bygherre", tekst: "Vi gennemgår byggeriet med dig og sikrer at alt er udført korrekt og som aftalt." },
              { n: "8", titel: "Færdigmelding hos kommunen", tekst: "Vi sørger for færdigmelding hos kommunen, som udsteder ibrugtagningstilladelse." },
            ].map((s) => (
              <div key={s.n} className="pb-tl-step">
                <div className="pb-tl-num">{s.n}</div>
                <div className="pb-tl-connector" />
                <div className="pb-tl-content">
                  <p className="pb-tl-titel">{s.titel}</p>
                  <p className="pb-tl-tekst">{s.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section className="s s-off" id="kontakt">
        <div className="s-inner">
          <div className="form-layout">
            <div className="form-meta">
              <span className="eyebrow">Kontakt os</span>
              <h2 className="sec-hed">Book et gratis<br />arkitektmøde</h2>
              <p style={{ marginTop: "1.5rem" }}>Vi kommer ud til dig — gratis og uforpligtende. Ring eller skriv til os.</p>
              <p><a href="tel:29723427">29 72 34 27</a></p>
              <p><a href="mailto:cy@yderskov.com">cy@yderskov.com</a></p>
            </div>
            <HeroForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
