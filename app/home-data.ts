export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Yderskov Arkitekter",
  url: "https://yderskov.com",
  telephone: "+4529723427",
  email: "cy@yderskov.com",
  address: { "@type": "PostalAddress", addressCountry: "DK", addressRegion: "Nordjylland" },
  areaServed: { "@type": "Country", name: "Danmark" },
  description: "Arkitekttegnede villaer, sommerhuse og tilbygninger med fast pris og egne håndværkere. Gratis første møde.",
  priceRange: "$$",
  foundingDate: "2009",
  sameAs: ["https://yderskov.com"],
};

export const projects = [
  { src: "/images/Vestvej/Grønhøj-Vestvej-sommerhus-indkørsel.webp",                              title: "Arkitekttegnet sommerhus" },
  { src: "/images/Strandkanten/Sæby-strandkanten-ny-funkisvilla.webp",                            title: "Ny funkisvilla" },
  { src: "/images/Løvevej/Ålbæk-poolhus-terrasse.webp",                                           title: "Sommerhus med pool" },
  { src: "/images/Emils hus Olufsgade/Brønderslev-olufsgade-efter-renovering-indkørsel.webp",     title: "Ombygning af parcelhus" },
  { src: "/images/Harald Jensens Vej/Løkken-sommerhus-Haraldjensensvej-terrasse.webp",            title: "Nyt sommerhus" },
  { src: "/images/Gravenstenvej/Aalborg-gravenstenvej-renovering-haveside.webp",                   title: "Ombygning af villa" },
];

export const testimonials = [
  { quote: "Vores allerbedste anbefalinger til Arkitekttegnestuen Yderskov. De lyttede til vores ønsker og leverede langt over vores forventninger.", name: "Cathrine Rasmussen" },
  { quote: "Processen var nem og overskuelig fra start til slut. Vi fik præcis det hus vi drømte om — til den pris vi aftalte.", name: "Morten & Lene Kjærgaard" },
  { quote: "Fantastisk samarbejde. Arkitekten var altid tilgængelig og sikrede at alt gik som planlagt — med egne håndværkere.", name: "Susanne Bonde" },
  { quote: "Vi er så glade for vores nye sommerhus. Det passer perfekt til grunden og udsigten. Kan varmt anbefales!", name: "Jens & Hanne Nielsen" },
];

export const processSteps = [
  { num: "01", title: "Gratis første møde",          desc: "Vi kommer ud til dig — gratis og uforpligtende. Vi lytter til dine ønsker og vurderer mulighederne på din grund." },
  { num: "02", title: "Skitseforslag",               desc: "Vi udarbejder et skitseforslag med planløsning, facader og et samlet indtryk af projektet." },
  { num: "03", title: "Myndighedsprojekt",           desc: "Vi tegner og beregner projektet til brug for ansøgning om byggetilladelse." },
  { num: "04", title: "Byggetilladelse",             desc: "Vi sender ansøgningen til kommunen og følger op indtil tilladelsen er i hus." },
  { num: "05", title: "Prisindhentning",             desc: "Vi indhenter tilbud fra håndværkere og forhandler den bedste pris til dig." },
  { num: "06", title: "Byggefase",                   desc: "Vi styrer byggeriet og koordinerer håndværkerne, så du slipper for bekymringer." },
  { num: "07", title: "Aflevering til bygherre",     desc: "Vi gennemgår byggeriet med dig og sikrer at alt er udført korrekt og som aftalt." },
  { num: "08", title: "Færdigmelding hos kommunen",  desc: "Vi sørger for færdigmelding hos kommunen, som udsteder ibrugtagningstilladelse." },
];

export const blogPosts = [
  { href: "/blog/velegnet-byggegrund", date: "09 / 04 / 2026", title: "Hvordan vurderer man om en byggegrund er velegnet?",           excerpt: "Vi gennemgår hvad du skal kigge efter — før du køber grunden." },
  { href: "/blog/lille-sommerhus",     date: "16 / 04 / 2026", title: "Hvordan bygger man et lille sommerhus?",                       excerpt: "Lille areal behøver ikke betyde lille oplevelse. Vi viser hvordan." },
  { href: "/blog/bolig-med-niveauer", date: "08 / 04 / 2025", title: "Design af bolig med niveauer — sådan udnytter du højdeforskellene.", excerpt: "Niveauforskelle giver dynamik, lys og bedre udnyttelse af grunden." },
];
