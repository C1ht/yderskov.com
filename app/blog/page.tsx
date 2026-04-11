"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

type Post = {
  href: string;
  date: string;
  cat: string;
  catKey: string;
  title: string;
  excerpt: string;
};

const posts: Post[] = [
  // 2026
  {
    href: "/blog/velegnet-byggegrund",
    date: "09 / 04 / 2026",
    cat: "Grund & placering",
    catKey: "grund",
    title: "Hvordan vurderer man om en byggegrund er velegnet?",
    excerpt: "Ikke alle byggegrunde er skabt ens. Her guider vi dig gennem de vigtigste faktorer — og forklarer hvordan en arkitekt kan vejlede dig til det rigtige valg.",
  },
  {
    href: "/blog/stor-terrasse",
    date: "02 / 04 / 2026",
    cat: "Villa & boligdesign",
    catKey: "villa",
    title: "Hvordan planlægger man en stor terrasse?",
    excerpt: "En stor terrasse kræver god planlægning for at fungere optimalt. Her gennemgår vi de vigtigste overvejelser — fra placering og materialer til havebyggeri og uderum.",
  },
  {
    href: "/blog/skraanende-grund",
    date: "07 / 02 / 2026",
    cat: "Grund & placering",
    catKey: "grund",
    title: "Hvordan udnytter man en skrånende grund?",
    excerpt: "En skrånende grund er ikke en ulempe — den er en arkitektonisk mulighed. Her gennemgår vi hvordan niveauer, trin og trappe kan skabe et hus med helt særlig karakter.",
  },
  {
    href: "/blog/boligdetalje-hems",
    date: "31 / 01 / 2026",
    cat: "Villa & boligdesign",
    catKey: "villa",
    title: "Boligdetalje #1: Hemsen — sådan planlægger du en hems i dit arkitekttegnede hus.",
    excerpt: "En hems er en af de mest karakteristiske detaljer i et arkitekttegnet hus. Her gennemgår vi hvordan du planlægger den rigtigt — fra rumhøjde og konstruktion til lys og adgang.",
  },
  {
    href: "/blog/udekokken",
    date: "24 / 01 / 2026",
    cat: "Villa & boligdesign",
    catKey: "villa",
    title: "Hvordan planlægger man et udekøkken?",
    excerpt: "Et udekøkken forlænger sæsonen og samler familien udenfor. Her gennemgår vi opbygning, materialer, vandtilslutning og alt det andet du skal tage stilling til.",
  },
  {
    href: "/blog/villa-til-familien",
    date: "16 / 01 / 2026",
    cat: "Villa & boligdesign",
    catKey: "villa",
    title: "Sådan bygger du en villa der passer til familien – også om 20 år.",
    excerpt: "Når du bygger ny villa som børnefamilie, er det fristende at fokusere på behovene her og nu. Men en god arkitekt tænker også 10 og 20 år frem.",
  },
  {
    href: "/blog/villa-seniorer",
    date: "09 / 01 / 2026",
    cat: "Villa & boligdesign",
    catKey: "villa",
    title: "Når modne mennesker bygger — sådan fremtidssikrer du dit hjem.",
    excerpt: "Flere og flere danskere over 50 vælger at bygge nyt frem for at renovere det gamle hus. Her deler vi de vigtigste overvejelser om fremtidssikring.",
  },
  {
    href: "/blog/spoergsmaal-og-svar",
    date: "02 / 01 / 2026",
    cat: "Arkitekt & proces",
    catKey: "arkitekt",
    title: "Se svar på mange af de spørgsmål Arkitekttegnestuen Yderskov har fået fra kunder.",
    excerpt: "Gennem årene har vi besvaret tusindvis af spørgsmål fra kunder. Her samler vi de mest stillede spørgsmål – og vores svar.",
  },
  // 2025
  {
    href: "/blog/arkitekthonorar",
    date: "22 / 12 / 2025",
    cat: "Arkitekt & proces",
    catKey: "arkitekt",
    title: "Hvad koster en arkitekt — honorar og fast pris?",
    excerpt: "Hvad er forskellen på arkitekthonorar og fast pris? Her forklarer vi forskellen – og hvorfor vi hos Yderskov tilbyder fast pris med fuld gennemsigtighed.",
  },
  {
    href: "/blog/sommerhus-helarsbrug",
    date: "25 / 02 / 2025",
    cat: "Sommerhus",
    catKey: "sommerhus",
    title: "Drømmer du om at bo fast i dit sommerhus?",
    excerpt: "Mange drømmer om et sommerhus der kan bruges hele året – men hvad siger reglerne egentlig? Her giver vi dig svaret.",
  },
  // 2024
  {
    href: "/blog/hvordan-vurderer-man-om-en-byggegrund-er-god",
    date: "04 / 09 / 2024",
    cat: "Grund & placering",
    catKey: "grund",
    title: "Sådan vurderer du om en byggegrund er god — guide til byggegrundets kvalitet.",
    excerpt: "En god byggegrund øger værdien af dit fremtidigt hus. Læs om hvad du skal lede efter når du handler byggegrund — og hvad du skal være opmærksom på.",
  },
  {
    href: "/blog/hvad-er-fordelene-ved-store-vinduespartier",
    date: "04 / 09 / 2024",
    cat: "Arkitekt & proces",
    catKey: "arkitekt",
    title: "Hvad er fordelene ved store vinduespartier?",
    excerpt: "Store vinduer skaber lys og forbindelse til naturen. Læs om fordelene ved store vinduespartier — og hvad du skal tænke på når du planlægger dem.",
  },
  {
    href: "/blog/hvordan-designer-man-et-sommerhus-til-udsigtsgrunde",
    date: "04 / 09 / 2024",
    cat: "Sommerhus",
    catKey: "sommerhus",
    title: "Sådan designer du et sommerhus til udsigtsgrunde — arkitekt vejledning.",
    excerpt: "Et sommerhus på udsigtsgrund skal udnytte udsigten, lyset og naturens kvaliteter. Læs om designprincipper for sommerhuse på udsigtsgrunde.",
  },
  {
    href: "/blog/valg-af-byggegrund",
    date: "31 / 08 / 2024",
    cat: "Grund & placering",
    catKey: "grund",
    title: "Valg af byggegrund — hvad betyder det for dit hus?",
    excerpt: "Valget af byggegrund har stor betydning for dit fremtidigt hus — fra arkitektur til økonomi. Læs om vigtige faktorer når du vælger byggegrund.",
  },
  {
    href: "/blog/sommerhus-udlejning",
    date: "29 / 08 / 2024",
    cat: "Sommerhus",
    catKey: "sommerhus",
    title: "Sommerhus til udlejning — sådan optimerer du for indtjening.",
    excerpt: "Et sommerhus til udlejning kan være en rentabel investering. Læs om hvordan du tilrettelægger dit sommerhus til udlejning — design og økonomi.",
  },
  {
    href: "/blog/tinyhouse",
    date: "27 / 08 / 2024",
    cat: "Villa & boligdesign",
    catKey: "villa",
    title: "Kan man bygge et tinyhouse i Danmark?",
    excerpt: "Tinyhouses bliver mere populær, men hvad siger lovgivningen i Danmark? Her ser vi på hvordan du kan bygge små boliger lovligt i Danmark.",
  },
  {
    href: "/blog/tilgaengelig-bolig",
    date: "22 / 08 / 2024",
    cat: "Villa & boligdesign",
    catKey: "villa",
    title: "Sådan tegner du en tilgængelig bolig — også når du bliver ældre.",
    excerpt: "En god bolig skal kunne tilpasses dit liv — uanset om du er 30 eller 80 år. Læs om principper for tilgængelige boliger som holder i hele livet.",
  },
  {
    href: "/blog/hvad-er-et-myndighedsprojekt",
    date: "20 / 08 / 2024",
    cat: "Arkitekt & proces",
    catKey: "arkitekt",
    title: "Hvad er et myndighedsprojekt?",
    excerpt: "Et myndighedsprojekt er tegningerne der skal til for at få byggetilladelse. Her forklarer vi hvad der indgår — og hvad det koster.",
  },
  {
    href: "/blog/byggetilladelse-tilbygning",
    date: "18 / 08 / 2024",
    cat: "Arkitekt & proces",
    catKey: "arkitekt",
    title: "Byggetilladelse til tilbygning — hvad skal du søge om?",
    excerpt: "En tilbygning kræver normalt byggetilladelse. Læs hvad der skal til for at få tilladelse — og hvad du kan undgå at søge om.",
  },
  {
    href: "/blog/hvad-er-et-skitseforslag",
    date: "15 / 08 / 2024",
    cat: "Arkitekt & proces",
    catKey: "arkitekt",
    title: "Hvad er et skitseforslag?",
    excerpt: "En skitse er det første tegningsudkast på dit byggeprojekt. Læs hvad en skitse indeholder — og hvad det koster at få tegnet en skitse.",
  },
  {
    href: "/blog/hvad-laver-en-arkitekt",
    date: "13 / 08 / 2024",
    cat: "Arkitekt & proces",
    catKey: "arkitekt",
    title: "Hvad laver en arkitekt i et byggeprojekt?",
    excerpt: "En arkitekt kan være til stor hjælp i et byggeprojekt — fra at tegne dit hus til at styre hele processen med håndværkere og økonomi.",
  },
];

const categories = [
  { key: "alle", label: "Alle" },
  { key: "villa", label: "Villa & boligdesign" },
  { key: "sommerhus", label: "Sommerhus" },
  { key: "arkitekt", label: "Arkitekt & proces" },
  { key: "grund", label: "Grund & placering" },
];

export default function BlogPage() {
  const [active, setActive] = useState("alle");

  const filtered = active === "alle" ? posts : posts.filter((p) => p.catKey === active);

  return (
    <>
      <Nav />
      <Hero showForm={false} showTabs={false} />

      <section className="s">
        <div className="s-inner">
          <div style={{ maxWidth: "640px", marginBottom: "2.5rem" }}>
            <span className="eyebrow">Fra arkitektens blog</span>
            <h1 className="sec-hed">Arkitektens blog</h1>
            <p className="body-p" style={{ marginTop: "1rem" }}>
              Her skriver vi om alt der har med arkitektur og byggeri at gøre — fra processen og priserne til konkrete designvalg.
            </p>
          </div>

          <div className="blog-filters">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`blog-filter-btn${active === cat.key ? " active" : ""}`}
                onClick={() => setActive(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="post-grid">
            {filtered.map((post) => (
              <Link key={post.href} href={post.href} className="post-card">
                <span className="post-date">{post.date}</span>
                <span className="post-cat">{post.cat}</span>
                <p className="post-title">{post.title}</p>
                <p className="post-excerpt">{post.excerpt}</p>
                <span className="post-link">Læs mere →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
