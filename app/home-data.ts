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
  { num: "01", title: "Gratis idémøde på grunden", desc: "Vi mødes direkte på din byggegrund til et gratis, uforpligtende møde. Vi drøfter dine drømme og behov, og vurderer grundens muligheder." },
  { num: "02", title: "Skitseforslag", desc: "Vi udarbejder de første skitser med planløsninger og situationsplan samt et realistisk prisoverslag." },
  { num: "03", title: "Endeligt myndighedsprojekt", desc: "Når skitserne er godkendt, tegner og projekterer vi det fulde myndighedsprojekt med alle tekniske tegninger og snit." },
  { num: "04", title: "Byggetilladelse & Fast pris", desc: "Vi håndterer hele ansøgningen hos kommunen." },
  { num: "05", title: "Byggefase med egne håndværkere", desc: "Vores egne faste murer- og tømrerhold opfører huset under tæt tilsyn fra tegnestuen." },
  { num: "06", title: "Nøglefærdig aflevering", desc: "Efter en grundig fælles gennemgang afleverer vi nøglerne." },
];
import { posts } from "./blog/posts";

export const blogPosts = posts.slice(0, 3).map(post => ({
  href: `/blog/${post.slug}`,
  date: post.date,
  title: post.title,
  excerpt: post.description,
  image: post.image || null
}));

