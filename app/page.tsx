import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";

export const metadata: Metadata = {
  title: "Arkitekt til villa, sommerhus og tilbygning — Yderskov Arkitekter",
  description:
    "Arkitekttegnede villaer, sommerhuse og tilbygninger med fast pris og egne håndværkere. Gratis første møde. Se projekter og priser.",
  alternates: { canonical: "https://yderskov.dk/" },
};

const projects = [
  { src: "/images/Torndalsvej/IMG_3181.webp", title: "Arkitekttegnet sommerhus" },
  { src: "/images/Karetmagervej/IMG_9184.webp", title: "Funkis villa" },
  { src: "/images/Løvevej/house2.webp", title: "Sommerhus med pool" },
  { src: "/images/Gravenstenvej/EEBD18F8-48F7-43CE-AE15-91FF91953CF7-2.webp", title: "Ombygning af villa" },
  { src: "/images/Harald Jensens Vej/IMG_2937.webp", title: "Nyt sommerhus" },
  { src: "/images/Godthåbsvej/yderskov-ombygning-efter-2.webp", title: "Ombygning og modernisering" },
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
    href: "/blog/hvordan-vurderer-man-om-en-byggegrund-er-god",
    date: "04 / 09 / 2024",
    title: "Hvad laver en arkitekt i et byggeprojekt?",
    excerpt: "Vil du vide hvad en arkitekt laver, så læs med her.",
  },
  {
    href: "/blog/hvad-er-fordelene-ved-store-vinduespartier",
    date: "04 / 09 / 2024",
    title: "Arkitekttegnet hus eller typehus — hvad er forskellen?",
    excerpt: "Vi gennemgår fordele og ulemper ved begge valg.",
  },
  {
    href: "/blog/hvordan-designer-man-et-sommerhus-til-udsigtsgrunde",
    date: "04 / 09 / 2024",
    title: "Hvad koster et arkitekttegnet sommerhus?",
    excerpt: "Få indblik i hvad det koster at bygge et arkitekttegnet sommerhus.",
  },
];

export default function HomePage() {
  return (
    <>
      <Nav />

      <Hero slides={[{ src: "/images/Lerstien/IMG_7931.webp", alt: "Arkitekttegnet villa — Yderskov" }]} tag="Hjem" showQuote />

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

      {/* Stats */}
      <div className="stats-bg">
        <div className="stats-inner">
          <div className="stat">
            <div className="stat-num">15.000<sup> kr.</sup></div>
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
      <section className="s">
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

      {/* Om os */}
      <section className="s s-off">
        <div className="s-inner">
          <div className="text-2col">
            <div>
              <span className="eyebrow">Om tegnestuen</span>
              <h2 className="sec-hed">Vi er arkitekter<br />med styr på processen.</h2>
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
          <div className="process-steps" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
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

      {/* Contact strip */}
      <section className="s contact-bg">
        <div className="contact-strip">
          <div className="contact-detail">
            <label>Ring til os</label>
            <p><a href="tel:29723427">29 72 34 27</a></p>
          </div>
          <div className="contact-detail">
            <label>Skriv til os</label>
            <p><a href="mailto:cy@yderskov.com">cy@yderskov.com</a></p>
          </div>
          <div className="contact-detail">
            <label>Book gratis møde</label>
            <p>
              <Link href="/kontakt" style={{ color: "var(--accent)", fontWeight: 400 }}>
                Kontakt os →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
