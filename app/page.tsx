import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import CtaBand from "@/components/CtaBand";
import { localBusinessSchema, projects, testimonials, processSteps, blogPosts } from "./home-data";

export const metadata: Metadata = {
  title: "Arkitekt Aalborg | Tegnestue i Nordjylland — Yderskov",
  description:
    "Søger du en arkitekt i Aalborg el. Nordjylland? Yderskov Tegnestue tegner dit drømmehus til fast pris. Få et gratis første møde — vi kommer ud til dig!",
  alternates: { canonical: "https://yderskov.com/" },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

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
            <span>Fast pris</span>
          </div>
        </div>
      </div>

      {/* Sommerhus prisnyt */}
      <div className="announcement-bar">
        <div className="announcement-inner">
          <div className="announcement-badge">Nyt</div>
          <div className="announcement-body">
            <p className="announcement-title">Byg nyt sommerhus fra <strong>kr. 12.000 pr. m²</strong></p>
            <p className="announcement-sub">Vi tegner og bygger arkitekttegnede sommerhuse nøglefærdigt — med fast pris og egne håndværkere. Gratis og uforpligtende første møde.</p>
          </div>
          <Link href="/sommerhuse" className="announcement-cta">Se sommerhuse →</Link>
        </div>
      </div>

      {/* Hvad er dit projekt */}
      <section className="s" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div className="s-inner">
          <div style={{ marginBottom: "1.75rem" }}>
            <span className="eyebrow">Se hvad vi kan tilbyde</span>
            <h2 className="sec-hed" style={{ marginBottom: 0 }}>Hvad er dit projekt?</h2>
          </div>
          <div className="project-choice">
            <Link href="/villaer" className="project-choice-card">
              <div>
                <p className="project-choice-title">Ny villa eller hus</p>
                <p className="project-choice-sub">Vi tegner din drømmebolig fra bunden — tilpasset grunden, familien og budgettet.</p>
              </div>
              <div className="project-choice-arr">→</div>
            </Link>
            <Link href="/tilbygninger" className="project-choice-card">
              <div>
                <p className="project-choice-title">Om- og tilbygning</p>
                <p className="project-choice-sub">Din bolig rummer mere end du tror. Vi ser mulighederne og skaber mere lys, plads og en planløsning der endelig passer til jer.</p>
              </div>
              <div className="project-choice-arr">→</div>
            </Link>
            <Link href="/sommerhuse" className="project-choice-card">
              <div>
                <p className="project-choice-title">Sommerhus</p>
                <p className="project-choice-sub">Dit fristed tegnet netop til dig — til din grund, din udsigt og dine drømme om den perfekte ferie.</p>
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
            <div className="stat"><div className="stat-num">12.000<sup> kr.</sup></div><div className="stat-lbl">Fra pr. m² (sommerhus)</div></div>
            <div className="stat"><div className="stat-num">24<sup> timer</sup></div><div className="stat-lbl">Svar inden</div></div>
            <div className="stat"><div className="stat-num">10<sup>+</sup></div><div className="stat-lbl">Igangværende projekter</div></div>
            <div className="stat"><div className="stat-num">300<sup>+</sup></div><div className="stat-lbl">Projekter gennemført</div></div>
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
              <h1 className="sec-hed">Arkitekt og tegnestue<br />nær Aalborg</h1>
              <div className="about-tags" style={{ marginTop: "1.5rem" }}>
                <Link href="/kontakt" className="tag tag-dark">Kontakt os →</Link>
                <Link href="/priser" className="tag">Se priser</Link>
                <Link href="/om" className="tag">Om os</Link>
              </div>
            </div>
            <div>
              <p className="body-intro">
                <strong>Arkitekt nær Aalborg med opgaver over hele Danmark – 25 års erfaring med kvalitet og økonomisk overblik.</strong> Hvad koster en arkitekt i Aalborg? Det spørgsmål stiller mange – og hos Arkitekttegnestuen Yderskov får du altid et ærligt svar fra dag ét. Vi har hjulpet vores kunder med byggeri i 25 år, og gennemskuelig økonomi er ikke bare et løfte – det er måden vi arbejder på.
              </p>
              <p className="body-p" style={{ marginTop: "1.5rem", fontWeight: "bold" }}>
                Tilbygning eller ombygning i Aalborg? Eller måske Køge og <Link href="/arkitekt-sjaelland" className="text-link">Sjælland</Link> eller Vejle?
              </p>
              <p className="body-p">
                Mange vælger at bygge til eller om frem for at flytte. Det er ofte den klogeste investering – og med en lokal arkitekt nær Aalborg der kender kommunens regler og de lokale byggeforhold. Vi finder det bedste ud af din eksisterende bolig, uanset om det er et ekstra værelse, en ny tagetage, et åbent køkken-alrum eller en komplet ny planløsning - og uanset om du vil bygge i Aalborg eller København. Vi kommer over hele landet.
              </p>
              <p className="body-p" style={{ marginTop: "1.5rem", fontWeight: "bold" }}>
                Nybyggeri af villa eller sommerhus nær Aalborg?
              </p>
              <p className="body-p">
                Nordjylland byder på nogle af Danmarks smukkeste sommerhusområder – fra Jammerbugten til Mariagerfjord. Vi tegner dit drømmehus eller sommerhus tilpasset netop det sted, det skal stå – og holder dig orienteret om økonomi og fremdrift hele vejen. Ingen overraskelser.
              </p>
              <p className="body-p" style={{ marginTop: "1.5rem", fontWeight: "bold" }}>
                Det får du hos Arkitekttegnestuen Yderskov:
              </p>
              <ul className="body-p" style={{ paddingLeft: "1.2rem", marginTop: "0.5rem", listStyleType: "disc" }}>
                <li style={{ marginBottom: "0.3rem" }}>Nybyggeri af villa og sommerhus nær Aalborg og i Nordjylland</li>
                <li style={{ marginBottom: "0.3rem" }}>Tilbygning og ombygning tilpasset dit budget</li>
                <li style={{ marginBottom: "0.3rem" }}>Ombygning af planløsning, tagetage, køkken-alrum eller...</li>
                <li style={{ marginBottom: "0.3rem" }}>Mindre erhvervsbyggeri i Nordjylland</li>
                <li style={{ marginBottom: "0.3rem" }}>Byggetilladelse og myndighedskontakt i Aalborg Kommune</li>
                <li style={{ marginBottom: "0.3rem" }}>Fuld gennemskuelighed i byggeøkonomien – altid</li>
              </ul>
              <p className="body-p" style={{ marginTop: "1.5rem" }}>
                Vi er en lille tegnestue med stort engagement. Hos os er du ikke et sagsnummer – du er et menneske med en drøm om et bedre hjem eller det perfekte sommerhus. Du kan se mere <Link href="/priser" className="text-link">om vores priser</Link> og læse mere <Link href="/om" className="text-link">om tegnestuen</Link>.
              </p>
              <p className="body-p" style={{ marginTop: "1rem" }}>
                Ring til os og få en uforpligtende snak om dit byggeprojekt i Aalborg eller Nordjylland. Vi giver et bud på prisen fra dag ét.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Anbefalinger */}
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

      {/* Processen */}
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

      {/* Blog */}
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
