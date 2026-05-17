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
    href: "/blog/bolig-med-niveauer",
    date: "13 / 06 / 2026",
    cat: "Villa & boligdesign",
    catKey: "villa",
    title: "Design af bolig med niveauer — sådan udnytter du højdeforskellene.",
    excerpt: "En bolig med niveauer skaber rumlig variation, naturlig zonering og en særlig oplevelse af at bevæge sig gennem hjemmet. Her gennemgår vi split-level, terrænfølgende huse og hvad du skal tænke på.",
  },
  {
    href: "/blog/betonterrasse",
    date: "06 / 06 / 2026",
    cat: "Villa & boligdesign",
    catKey: "villa",
    title: "Betonterrasse — hvad skal du vide inden du vælger det?",
    excerpt: "Beton er holdbart, formbart og lav-vedligeholdelse. Men der er forskel på en veldesignet betonterrasse og én der krakkelerer efter tre vintre. Her gennemgår vi overflade, fuger, afvanding og vedligeholdelse.",
  },
  {
    href: "/blog/gaardhave",
    date: "30 / 05 / 2026",
    cat: "Villa & boligdesign",
    catKey: "villa",
    title: "Hvordan laver man en gårdhave?",
    excerpt: "En gårdhave er et af de mest intime uderum du kan give din bolig — beskyttet, grønt og tæt forbundet med indendørsarealerne. Her gennemgår vi placering, størrelse, belægning og beplantning.",
  },
  {
    href: "/blog/sedumtag",
    date: "23 / 05 / 2026",
    cat: "Villa & boligdesign",
    catKey: "villa",
    title: "Sedumtag — hvad er det, og er det det rigtige tag til dit hus?",
    excerpt: "Et sedumtag er et levende tag beplantet med stenurt. Det håndterer regnvand, forlænger tagets levetid og ser smukt ud. Her gennemgår vi hvad du skal vide inden du vælger det.",
  },
  {
    href: "/blog/hjemmekontor",
    date: "16 / 05 / 2026",
    cat: "Villa & boligdesign",
    catKey: "villa",
    title: "Sådan skabes et godt hjemmekontor.",
    excerpt: "Et hjemmekontor er ikke bare et skrivebord i et hjørne. Her gennemgår vi placering, dagslys, akustik og alt det andet der gør et hjemmekontor til et sted man faktisk arbejder godt.",
  },
  {
    href: "/blog/udsigt",
    date: "09 / 05 / 2026",
    cat: "Villa & boligdesign",
    catKey: "villa",
    title: "Hvordan planlægger man udsigt fra en bolig?",
    excerpt: "Udsigt er en af de mest værdifulde kvaliteter i en bolig — men den skal planlægges fra første streg. Her gennemgår vi hvordan du maksimerer udsigten uden at gå på kompromis med privatliv og energi.",
  },
  {
    href: "/blog/inde-ude",
    date: "01 / 05 / 2026",
    cat: "Villa & boligdesign",
    catKey: "villa",
    title: "Hvordan laver man en god overgang mellem inde og ude?",
    excerpt: "En god overgang mellem inde og ude forlænger boligen og gør hverdagen rigere. Her gennemgår vi de vigtigste greb — fra terrassedøre og niveauforskelle til materialer og overdækning.",
  },
  {
    href: "/blog/legeomraade",
    date: "25 / 04 / 2026",
    cat: "Villa & boligdesign",
    catKey: "villa",
    title: "Hvordan designer man et legeområde i haven?",
    excerpt: "Et godt legeområde i haven er ikke bare et rutsjebane og en gynge. Her gennemgår vi placering, underlag, udstyr og hvordan du planlægger et legeområde der vokser med børnene.",
  },
  {
    href: "/blog/multirum",
    date: "25 / 04 / 2026",
    cat: "Villa & boligdesign",
    catKey: "villa",
    title: "Hvordan indretter man et multirum i en bolig?",
    excerpt: "Et multirum er boligens mest fleksible rum — det kan være hjemmekontor, gæsteværelse og hobbylokale på én gang. Her gennemgår vi hvordan du indretter det rigtigt.",
  },
  {
    href: "/blog/lille-sommerhus",
    date: "16 / 04 / 2026",
    cat: "Sommerhus",
    catKey: "sommerhus",
    title: "Hvordan bygger man et lille sommerhus?",
    excerpt: "Et lille sommerhus kan være mindst lige så godt som et stort — hvis det er tegnet rigtigt. Her gennemgår vi planløsning, materialer, regler og økonomi.",
  },
  {
    href: "/blog/koekken-design",
    date: "16 / 04 / 2026",
    cat: "Villa & boligdesign",
    catKey: "villa",
    title: "Hvordan designer man et godt køkkenrum?",
    excerpt: "Køkkenet er boligens arbejdsrum og samlingssted på én gang. Her gennemgår vi de vigtigste principper — fra planløsning og arbejdstrekant til lys, materialer og ventilation.",
  },
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
    href: "/blog/laengehus",
    date: "25 / 02 / 2026",
    cat: "Villa & boligdesign",
    catKey: "villa",
    title: "Hvordan planlægger man et længehus?",
    excerpt: "Længehuset er en af de mest klassiske og tidløse boligformer i Danmark. Her gennemgår vi orientering, planløsning, dagslys, terrasse og materialer.",
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
    href: "/blog/orangeri",
    date: "14 / 02 / 2026",
    cat: "Villa & boligdesign",
    catKey: "villa",
    title: "Hvordan designer man et orangeri ved huset?",
    excerpt: "Et orangeri er en af de mest stemningsfulde tilbygninger du kan give dit hus. Her gennemgår vi placering, konstruktion, glastyper, opvarmning og indretning.",
  },
  {
    href: "/blog/boligdetalje-trappe",
    date: "14 / 02 / 2026",
    cat: "Villa & boligdesign",
    catKey: "villa",
    title: "Boligdetalje #3: Trappen — sådan planlægger du trappen i dit arkitekttegnede hus.",
    excerpt: "Trappen er en af de mest iøjnefaldende detaljer i et arkitekttegnet hus. Her gennemgår vi placering, konstruktion, materialer, gelænder og lys.",
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
  {
    href: "/blog/hvad-er-fordelene-ved-store-vinduespartier",
    date: "15 / 04 / 2024",
    cat: "Arkitekt & proces",
    catKey: "arkitekt",
    title: "Hvad er fordelene ved store vinduespartier?",
    excerpt: "Store vinduer skaber lys og forbindelse til naturen. Læs om fordelene ved store vinduespartier — og hvad du skal tænke på når du planlægger dem.",
  },
  {
    href: "/blog/hvordan-designer-man-et-sommerhus-til-udsigtsgrunde",
    date: "27 / 02 / 2024",
    cat: "Sommerhus",
    catKey: "sommerhus",
    title: "Sådan designer du et sommerhus til udsigtsgrunde — arkitekt vejledning.",
    excerpt: "Et sommerhus på udsigtsgrund skal udnytte udsigten, lyset og naturens kvaliteter. Læs om designprincipper for sommerhuse på udsigtsgrunde.",
  },
];

const categories = [
  { key: "alle", label: "Alle" },
  { key: "villa", label: "Villa & boligdesign" },
  { key: "sommerhus", label: "Sommerhus" },
  { key: "arkitekt", label: "Arkitekt & proces" },
  { key: "grund", label: "Grund & placering" },
];

function parseDate(dateStr: string): Date {
  const [day, month, year] = dateStr.split(" / ").map(Number);
  return new Date(year, month - 1, day);
}

export default function BlogPage() {
  const [active, setActive] = useState("alle");

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const published = posts.filter((p) => parseDate(p.date) <= today);
  const filtered = active === "alle" ? published : published.filter((p) => p.catKey === active);

  return (
    <>
      <Nav />
      <Hero
        slides={[{ src: "/images/Godthåbsvej/yderskov-ombygning-efter-2.webp", alt: "Ombygning — Yderskov Arkitekter" }]}
        showTabs={false}
        tag="Blog"
        lines={[
          "Arkitektur er mere end tegninger. Her skriver vi om processen og byggerierne bag.",
          "Byggeri tegnet kun til jer, til jeres grund, jeres ønsker og jeres budget.",
          "Gratis og uforpligtende første idemøde. Vi kommer ud til jer.",
        ]}
        italicLines={[1, 2]}
      />

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
