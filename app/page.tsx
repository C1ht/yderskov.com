import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Arkitekt til villa, sommerhus og tilbygning — Yderskov Arkitekter",
  description:
    "Arkitekttegnede villaer, sommerhuse og tilbygninger med fast pris og egne håndværkere. Gratis første møde. Se projekter og priser.",
  alternates: { canonical: "https://yderskov.dk/" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Yderskov Arkitekter",
  url: "https://yderskov.dk",
  telephone: "+4529723427",
  email: "cy@yderskov.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "DK",
    addressRegion: "Nordjylland",
  },
  areaServed: { "@type": "Country", name: "Danmark" },
  description: "Arkitekttegnede villaer, sommerhuse og tilbygninger med fast pris og egne håndværkere. Gratis første møde.",
  priceRange: "$$",
  foundingDate: "2009",
  sameAs: ["https://yderskov.dk"],
};

const projects = [
  { src: "/images/Vestvej/Grønhøj-Vestvej-sommerhus-indkørsel.webp", title: "Arkitekttegnet sommerhus" },
  { src: "/images/Strandkanten/Sæby-strandkanten-ny-funkisvilla.webp", title: "Ny funkisvilla" },
  { src: "/images/Løvevej/Ålbæk-poolhus-terrasse.webp", title: "Sommerhus med pool" },
  { src: "/images/Emils hus Olufsgade/Brønderslev-olufsgade-efter-renovering-indkørsel.webp", title: "Ombygning af parcelhus" },
  { src: "/images/Harald Jensens Vej/Løkken-sommerhus-Haraldjensensvej-terrasse.webp", title: "Nyt sommerhus" },
  { src: "/images/Gravenstenvej/Aalborg-gravenstenvej-renovering-haveside.webp", title: "Ombygning af villa" },
];

const testimonials = [
  {
    quote: "Vores allerbedste anbefalinger til Arkitekttegnestuen Yderskov. De lyttede til vores ønsker og leverede langt over vores forventninger.",
    name: "Cathrine Rasmussen",
  },
  {
    quote: "Processen var nem og overskuelig fra start til slut. Vi fik præcis det hus vi drømte om — til den pris vi aftalte.",
    name: "Morten & Lene Kjærgaard",
  },
  {
    quote: "Fantastisk samarbejde. Arkitekten var altid tilgængelig og sikrede at alt gik som planlagt — med egne håndværkere.",
    name: "Susanne Bonde",
  },
  {
    quote: "Vi er så glade for vores nye sommerhus. Det passer perfekt til grunden og udsigten. Kan varmt anbefales!",
    name: "Jens & Hanne Nielsen",
  },
];

const processSteps = [
  { num: "01", title: "Gratis første møde", desc: "Vi kommer ud til dig — gratis og uforpligtende. Vi lytter til dine ønsker og vurderer mulighederne på din grund." },
  { num: "02", title: "Skitseforslag", desc: "Vi udarbejder et skitseforslag med planløsning, facader og et samlet indtryk af projektet." },
  { num: "03", title: "Myndighedsprojekt", desc: "Vi tegner og beregner projektet til brug for ansøgning om byggetilladelse." },
  { num: "04", title: "Byggetilladelse", desc: "Vi sender ansøgningen til kommunen og følger op indtil tilladelsen er i hus." },
  { num: "05", title: "Prisindhentning", desc: "Vi indhenter tilbud fra håndværkere og forhandler den bedste pris til dig." },
  { num: "06", title: "Byggefase", desc: "Vi styrer byggeriet og koordinerer håndværkerne, så du slipper for bekymringer." },
  { num: "07", title: "Aflevering til bygherre", desc: "Vi gennemgår byggeriet med dig og sikrer at alt er udført korrekt og som aftalt." },
  { num: "08", title: "Færdigmelding hos kommunen", desc: "Vi sørger for færdigmelding hos kommunen, som udsteder ibrugtagningstilladelse." },
];

const blogPosts = [
  {
    href: "/blog/velegnet-byggegrund",
    date: "09 / 04 / 2026",
    title: "Hvordan vurderer man om en byggegrund er velegnet?",
    excerpt: "Vi gennemgår hvad du skal kigge efter — før du køber grunden.",
  },
  {
    href: "/blog/lille-sommerhus",
    date: "16 / 04 / 2026",
    title: "Hvordan bygger man et lille sommerhus?",
    excerpt: "Lille areal behøver ikke betyde lille oplevelse. Vi viser hvordan.",
  },
  {
    href: "/blog/bolig-med-niveauer",
    date: "08 / 04 / 2025",
    title: "Design af bolig med niveauer — sådan udnytter du højdeforskellene.",
    excerpt: "Niveauforskelle giver dynamik, lys og bedre udnyttelse af grunden.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <Nav />

      <Hero
        slides={[{ src: "/images/Lerstien/Frederikshavn-lerstien-terrasse-byview.webp", alt: "Udsigtsvilla med terrasse og byudsigt, Frederikshavn — Yderskov Arkitekter" }]}
        tag="Hjem"
        showQuote
        bright
        lines={[
          "I har tankerne, vi sætter stregerne.",
          "Byggeri tegnet kun til jer, til jeres grund, jeres ønsker og jeres budget.",
          "Gratis og uforpligtende første idemøde. Vi kommer ud til jer.",
        ]}
        italicLines={[1, 2]}
      />

      {/* Trust strip */}
      <div className="trust-strip">
        <div className="trust-strip-inner">
          <div className="trust-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
            <span><strong>300+</strong> projekter gennemført</span>
          </div>
          <div className="trust-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>Svar inden <strong>24 timer</strong></span>
          </div>
          <div className="trust-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2 15.09 8.26 22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>
            <span>Gratis første møde</span>
          </div>
          <div className="trust-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <span>Fast pris fra første dag</span>
          </div>
        </div>
      </div>

      {/* Hvad er dit projekt */}
      <section className="s" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div className="s-inner">
          <div style={{ marginBottom: "1.75rem" }}>
            <span className="eyebrow">Se hvad vi kan tilbyde</span>
            <h2 className="sec-hed" style={{ marginBottom: 0 }}>
              Hvad er dit projekt?
            </h2>
          </div>
          <div className="project-choice">
            <Link href="/villaer" className="project-choice-card">
              <div>
                <p className="project-choice-title">Ny villa eller hus</p>
                <p className="project-choice-sub">
                  Vi tegner din drømmebolig fra bunden — tilpasset grunden, familien og budgettet.
                </p>
              </div>
              <div className="project-choice-arr">→</div>
            </Link>
            <Link href="/tilbygninger" className="project-choice-card">
              <div>
                <p className="project-choice-title">Om- og tilbygning</p>
                <p className="project-choice-sub">
                  Din bolig rummer mere end du tror. Vi ser mulighederne og skaber mere lys, plads og en planløsning der endelig passer til jer.
                </p>
              </div>
              <div className="project-choice-arr">→</div>
            </Link>
            <Link href="/sommerhuse" className="project-choice-card">
              <div>
                <p className="project-choice-title">Sommerhus</p>
                <p className="project-choice-sub">
                  Dit fristed tegnet netop til dig — til din grund, din udsigt og dine drømme om den perfekte ferie.
                </p>
              </div>
              <div className="project-choice-arr">→</div>
            </Link>
          </div>
        </div>
      </section>

      <div className="home-stats-projects">
        {/* Stats */}
        <div className="stats-bg home-stats">
          <div className="stats-inner">
            <div className="stat">
              <div className="stat-num">14.000<sup> kr.</sup></div>
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

        {/* Projekter */}
        <section className="s home-projects">
          <div className="s-inner">
            <div className="proj-header">
              <div>
                <span className="eyebrow">Udvalgte projekter</span>
                <h2 className="sec-hed" style={{ marginBottom: 0 }}>Vores projekter</h2>
              </div>
              <Link href="/villaer" className="proj-see">Se alle projekter →</Link>
            </div>
            <ProjectGrid projects={projects} />
          </div>
        </section>
      </div>

      {/* Om os */}
      <section className="s s-off">
        <div className="s-inner">
          <div className="text-2col">
            <div>
              <span className="eyebrow">Om tegnestuen</span>
              <h1 className="sec-hed">Vi er arkitekter<br />med styr på processen.</h1>
              <div className="about-tags" style={{ marginTop: "1.5rem" }}>
                <Link href="/kontakt" className="tag tag-dark">Kontakt os →</Link>
                <Link href="/priser" className="tag">Se priser</Link>
                <Link href="/om" className="tag">Om os</Link>
              </div>
            </div>
            <div>
              <p className="body-intro">
                Arkitekttegnestuen Yderskov ApS er en tegnestue i Nordjylland med speciale i arkitekttegnede villaer, sommerhuse, tilbygninger og erhvervsprojekter.
              </p>
              <p className="body-p">
                Vi arbejder med en samlet proces fra idé til færdigt byggeri — med egne faste håndværkere og fokus på at holde styr på din økonomi undervejs.
              </p>
              <p className="body-p">
                Tegnestuen blev grundlagt i 2009 og har siden arbejdet med projekter i hele Danmark, primært i Nordjylland og Aalborg-området.
              </p>
              <p className="body-p">
                Hos os taler du altid direkte med arkitekten — ingen mellemled, fast pris fra første dag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="s">
        <div className="s-inner">
          <span className="eyebrow">Hvad siger kunderne</span>
          <h2 className="sec-hed">Anbefalinger</h2>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                <p className="testimonial-name">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="s s-off">
        <div className="s-inner">
          <span className="eyebrow">Sådan arbejder vi</span>
          <h2 className="sec-hed">Processen fra idé til nøgle</h2>
          <div className="process-steps">
            {processSteps.map((step) => (
              <div key={step.num} className="process-step">
                <div className="process-step-num">{step.num}</div>
                <p className="process-step-title">{step.title}</p>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <div className="blog-bg">
        <div className="blog-inner">
          <div className="blog-head">
            <h2 className="sec-hed">Fra arkitektens blog</h2>
            <Link href="/blog" className="blog-see">Se alle indlæg →</Link>
          </div>
          <div className="bgrid">
            {blogPosts.map((post) => (
              <Link key={post.href} href={post.href} className="bcard">
                <span className="bdate">{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="blink">Læs mere →</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <CtaBand />

      <Footer />
    </>
  );
}
