import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import CtaBand from "@/components/CtaBand";
import CatalogDownloadButtons from "@/components/CatalogDownloadButtons";
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
        slides={[{ src: "/images/Lerstien/Frederikshavn-lerstien-terrasse-byview.webp", alt: "Udsigtsvilla med terrasse og byudsigt, Frederikshavn — Arkitekttegnestuen Yderskov" }]}
        tag="Hjem"
        subtitle="Vi dækker hele landet"
        subtitleStyle={{ fontSize: "clamp(1.2rem, 3vw, 2.1rem)", fontWeight: 400 }}
        bodyStyle={{ justifyContent: "flex-start", paddingTop: "clamp(9rem, 16vh, 18rem)" }}
        showQuote
        bright
        lines={[]}
        show24h={false}
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
                    <Image
                      src="/images/Lerstien/Frederikshavn-lerstien-terrasse-byview.webp"
                      alt="Arkitekttegnestuen Yderskov Inspirationskatalog"
                      width={300}
                      height={400}
                      style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    />
                    <div className="book-overlay">
                      <div className="book-top-brand">
                        <div className="book-brand-name">Arkitekt Yderskov</div>
                        <div className="book-brand-sub">Vi dækker hele landet</div>
                        <div className="book-brand-line"></div>
                      </div>
                      <div className="book-bottom-title">
                        <div className="book-title">Inspiration</div>
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
              
              <CatalogDownloadButtons />
            </div>
          </div>
        </div>
      </section>

      {/* Hvorfor vælge os */}
      <section className="s why-us-section">
        <div className="s-inner">
          <div className="why-us-header">
            <span className="eyebrow">Hvorfor vælge os</span>
            <h2 className="sec-hed">4 gode grunde til at vælge Yderskov</h2>
          </div>
          <div className="why-us-grid">
            <div className="why-us-card">
              <div className="why-us-title-row">
                <div className="why-us-icon-wrapper">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                    <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth="2.5" />
                  </svg>
                </div>
                <h3>Fast pris på arkitekthonorar</h3>
              </div>
              <p>Vi tilbyder <Link href="/priser" className="text-link" style={{ fontSize: "inherit" }}>fast pris på arkitekthonoraret</Link>, så du kender de præcise udgifter fra start. Ingen uforudsete regninger.</p>
            </div>

            <div className="why-us-card">
              <div className="why-us-title-row">
                <div className="why-us-icon-wrapper">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>Vi styrer håndværkere og byggeøkonomien</h3>
              </div>
              <p>Vi koordinerer og styrer håndværkerne for dig, så du er sikret kvalitet og økonomi hele vejen til et <Link href="/om" className="text-link" style={{ fontSize: "inherit" }}>nøglefærdigt resultat</Link>.</p>
            </div>

            <div className="why-us-card">
              <div className="why-us-title-row">
                <div className="why-us-icon-wrapper">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3>Kontakt med samme arkitekt hver gang</h3>
              </div>
              <p>Hos os taler du med den <Link href="/om" className="text-link" style={{ fontSize: "inherit" }}>samme projekterende arkitekt</Link> gennem hele forløbet. Det giver tryghed, tæt dialog og sparer værdifuld tid.</p>
            </div>

            <div className="why-us-card">
              <div className="why-us-title-row">
                <div className="why-us-icon-wrapper">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3>Gratis idémøde med arkitekt på din grund</h3>
              </div>
              <p>Vi kommer ud på din byggegrund eller adresse til et <Link href="/kontakt" className="text-link" style={{ fontSize: "inherit" }}>gratis idémøde</Link> for en uforpligtende professionel vurdering og sparring på dine idéer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sommerhus prisnyt */}
      <div className="announcement-bar">
        <div className="announcement-inner">
          <div className="announcement-badge">Nyt</div>
          <div className="announcement-body">
            <p className="announcement-title">Byg nyt <Link href="/sommerhuse" style={{ textDecoration: "underline", color: "inherit" }}>sommerhus</Link> fra <strong><Link href="/priser" style={{ textDecoration: "underline", color: "#b87c08" }}>kr. 12.000 pr. m²</Link></strong></p>
            <p className="announcement-sub">Arkitekttegnet og nøglefærdigt til fast pris med egne håndværkere. Første møde er gratis.</p>
          </div>
          <Link href="/sommerhuse" className="announcement-cta">Se sommerhuse →</Link>
          <Link href="/priser" className="announcement-cta" style={{ background: "transparent", border: "1px solid var(--text)", color: "var(--text) !important" }}>Se priser →</Link>
        </div>
      </div>

      {/* Projekter */}
      <section className="s home-projects" style={{ borderBottom: "1px solid var(--border)" }}>
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

      {/* Stats */}
      <div className="stats-bg home-stats">
        <div className="stats-inner">
          <div className="stat"><div className="stat-num">12.000<sup> kr.</sup></div><div className="stat-lbl">Fra pr. m² (sommerhus)</div></div>
          <div className="stat"><div className="stat-num">24<sup> timer</sup></div><div className="stat-lbl">Svar inden</div></div>
          <div className="stat"><div className="stat-num">10<sup>+</sup></div><div className="stat-lbl">Igangværende projekter</div></div>
          <div className="stat"><div className="stat-num">300<sup>+</sup></div><div className="stat-lbl">Projekter gennemført</div></div>
        </div>
      </div>

      {/* Om os */}
      <section className="s s-off">
        <div className="s-inner">
          <div className="text-2col">
            <div>
              <span className="eyebrow">Om tegnestuen</span>
              <h1 className="sec-hed" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", lineHeight: 1.15 }}>Landsdækkende arkitekttegnestue:<br />Vi kommer til dig, uanset hvor i landet du bygger</h1>
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
                Tilbygning eller ombygning i Aalborg? Eller måske Køge og <Link href="/arkitekt-sjaelland" className="text-link">Gilleleje</Link> eller Vejle?
              </p>
              <p className="body-p">
                Mange vælger at bygge til eller om frem for at flytte. Det er ofte den klogeste investering – og med en lokal arkitekt nær Aalborg der kender kommunens regler og de lokale byggeforhold. Vi finder det bedste ud af din eksisterende bolig, uanset om det er et ekstra værelse, en ny tagetage, et åbent køkken-alrum eller en komplet ny planløsning - og uanset om du vil bygge i Aalborg eller København. Vi kommer over hele landet.
              </p>
              <p className="body-p" style={{ marginTop: "1.5rem", fontWeight: "bold" }}>
                Nybyggeri af villa eller sommerhus nær Aalborg eller <Link href="/arkitekt-sjaelland" className="text-link">Vallensbæk</Link>?
              </p>
              <p className="body-p">
                Nordjylland byder på nogle af Danmarks smukkeste sommerhusområder – fra Jammerbugten til Mariagerfjord. Vi tegner dit drømmehus eller sommerhus tilpasset netop det sted, det skal stå – og holder dig orienteret om økonomi og fremdrift hele vejen. Ingen overraskelser.
              </p>
              <p className="body-p" style={{ marginTop: "1.5rem", fontWeight: "bold" }}>
                Det får du hos Arkitekttegnestuen Yderskov:
              </p>
              <ul className="body-p" style={{ paddingLeft: "1.2rem", marginTop: "0.5rem", listStyleType: "disc" }}>
                <li style={{ marginBottom: "0.3rem" }}>Nybyggeri af villa og sommerhus nær Aalborg og i resten af landet</li>
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
