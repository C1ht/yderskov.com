import puppeteer from 'puppeteer-core';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const root = 'C:/Users/Lotte/Documents/yderskov-nextjs/yderskov/public';

async function imgB64(src, width = 1000) {
  const full = root + src;
  if (!fs.existsSync(full)) return '';
  const buf = await sharp(full).resize(width, null, { withoutEnlargement: true }).jpeg({ quality: 82 }).toBuffer();
  return 'data:image/jpeg;base64,' + buf.toString('base64');
}

function svgB64(src) {
  const full = root + src;
  if (!fs.existsSync(full)) return '';
  return 'data:image/svg+xml;base64,' + fs.readFileSync(full).toString('base64');
}

const logoData = svgB64('/images/logofiles/SVG/Arkitect 5.svg');
const iconData = svgB64('/images/logofiles/SVG/Arkitect 5icon.svg');

const villaProjects = [
  {
    num: 1,
    title: 'Funkis i træ, glas og eternit',
    location: 'Sæby, Nordjylland',
    size: '230 m² bolig · 60 m² garage',
    year: '2023',
    description: 'Funkisvilla opført i listebeklædning med åbne facader og store vinduespartier. Huset er beliggende op ad skov og natur, og det betød meget for familien at byggeriet blev indpasset omhyggeligt i det omgivende område.',
    images: [
      '/images/Karetmagervej/Sæby-ny-villa-funkis-haveside.webp',
      '/images/Karetmagervej/Sæby-ny-villa-funkis-forside.webp',
      '/images/Karetmagervej/Sæby-ny-villa-funkis-vejside.webp',
    ],
  },
  {
    num: 2,
    title: 'Moderne villa med markant tag',
    location: 'Sæby, Nordjylland',
    size: '230 m² bolig · 50 m² garage',
    year: '2016',
    description: 'Vinkelvilla på stor grund med kinesisk svej på sort tegltag og småsprodsede vinduer. Familiens ønske om et markant, klassisk udtryk er kombineret med en moderne og rummelig planløsning.',
    images: [
      '/images/villa sæby/Sæby-ny-villa-kinesisk-tag-haveside.webp',
      '/images/villa sæby/Sæby-ny-villa-kinesisk-tag-haveside-2.webp',
      '/images/villa sæby/Sæby-ny-villa-kinesisk-tag-vejside.webp',
    ],
  },
  {
    num: 3,
    title: 'Udsigtsvilla med naturlige materialer',
    location: 'Frederikshavn, Nordjylland',
    size: '208 m² bolig · 63 m² garage · 37 m² overdækning',
    year: '2021',
    description: 'Udsigtsvilla med vandudsigt, tegnet til en skrånende naturgrund med skrappe myndighedskrav om indpasning i den beplantede skrænt. Familien ønskede et hus der svævede udover bakken — en oase med naturlige materialer og fri udsigt.',
    images: [
      '/images/Lerstien/Frederikshavn-lerstien-terrasse-byview.webp',
      '/images/Lerstien/Frederikshavn-lerstien-terrasse.webp',
      '/images/Lerstien/Frederikshavn-lerstien-vejside.webp',
    ],
  },
  {
    num: 4,
    title: 'Funkisvilla med niveauforskelle',
    location: 'Vestbjerg, Nordjylland',
    size: '205 m² bolig · 70 m² garage · 6 m² overdækning',
    year: '',
    description: 'Funkisvilla tilpasset en grund med markant fald — halvdelen af huset ligger nede, halvdelen oppe, så niveauerne følger terrænet naturligt. Store skydedørspartier og åbne facader giver lys og udsigt.',
    images: [
      '/images/Højgården/Vestsbjerg-ny-funkisvilla-haveside.webp',
      '/images/Højgården/Vestsbjerg-ny-funkisvilla-indgangsparti.webp',
      '/images/Højgården/Vestsbjerg-ny-funkisvilla-vejside.webp',
    ],
  },
  {
    num: 5,
    title: 'Klassisk villa',
    location: 'Hjørring, Nordjylland',
    size: '215 m² bolig · 42 m² garage',
    year: '2022',
    description: 'Klassisk villa med traditionelt formsprog, symmetrisk facade og omhyggeligt udvalgte materialer. Huset er placeret i et etableret villakvarter med god forbindelse til naturen. Familien ønskede et klassisk udtryk med moderne funktionalitet indvendigt — store, lyse opholdsrum med direkte udgang til det ugenerede gårdhavemiljø. Materialerne er valgt ud fra et ønske om minimal vedligeholdelse.',
    images: [
      '/images/Gartnerhaven/Hjørring-garnterhaven-ny-villa.webp',
      '/images/Gartnerhaven/Hjørring-gartnehaven-ny-villa-haveside.webp',
      '/images/Gartnerhaven/Hjørring-gartnerhaven-indkørsel.webp',
    ],
  },
  {
    num: 6,
    title: 'Villa med ensidig taghældning',
    location: 'Vestbjerg, Nordjylland',
    size: '190 m² bolig · 55 m² garage · 22 m² overdækning',
    year: '2023',
    description: 'Villa med ensidig taghældning og overdækket terrasse i direkte forbindelse med stuens store glaspartier. Huset er udformet med en tydelig fløjstruktur, der skaber naturlig zonering mellem opholdsrum og børne-/forældreafdelinger. Familien lagde vægt på optimalt lysindfald, god loftshøjde og en flydende overgang mellem inde og ude under den overdækkede terrasse.',
    images: [
      '/images/Hanebjælken/Vestbjerg-Hanebjælken-ny-villa-haveside.webp',
      '/images/Hanebjælken/Vestbjerg-Hanebjælken-ny-villa-overdækket-terrasse.webp',
      '/images/Hanebjælken/Vestbjerg-Hanebjælken-ny-villa-værelsesfløj.webp',
    ],
  },
];

const sommerhusProjects = [
  {
    num: 1,
    title: 'Sommerhus med store vinduespartier',
    location: 'Hals, Nordjylland',
    size: '95 m² fritidshus · stor terrasse',
    year: '2022',
    description: 'Lyst og indbydende sommerhus i Hals med store vinduespartier, der inviterer naturen helt indenfor. Sommerhuset er indrettet med fokus på fællesskab, åben forbindelse mellem køkken-alrum og stue, samt direkte udgang til et stort, ugeneret terrasseområde.',
    images: [
      '/images/Torndalsvej/Hals-Torndalsvej-terrasse.webp',
      '/images/Torndalsvej/Hals-Torndalsvej-køkken.webp',
      '/images/Torndalsvej/Hals-Torndalsvej-stue.webp',
    ],
  },
  {
    num: 2,
    title: 'Sommerhus til udsigtsgrund',
    location: 'Løkken, Nordjylland',
    size: '110 m² fritidshus · klitgrund',
    year: '2020',
    description: 'Klassisk sommerhus beliggende på en kuperet klitgrund i Løkken med storslået udsigt over landskabet og Vesterhavet. Huset er nænsomt tilpasset terrænet og råder over en ugeneret solterrasse med udendørs bruser.',
    images: [
      '/images/Harald Jensens Vej/Løkken-sommerhus-Haraldjensensvej-indkørsel.webp',
      '/images/Harald Jensens Vej/Løkken-sommerhus-Haraldjensensvej-terrasse.webp',
      '/images/Harald Jensens Vej/Løkken-sommerhus-Haraldjensensvej--udebruser.webp',
    ],
  },
  {
    num: 3,
    title: 'Sommerhus med indendørs pool',
    location: 'Ålbæk, Nordjylland',
    size: '185 m² wellness-hus · pool & spa',
    year: '2023',
    description: 'Luksussommerhus i Ålbæk med indendørs swimmingpool, aktivitetsrum med billard og moderne køkken-alrum. Sommerhuset er tegnet til at rumme flere generationer og er ideelt to både familiehygge og udlejning.',
    images: [
      '/images/Løvevej/Ålbæk-poolhus-terrasse.webp',
      '/images/Løvevej/Ålbæk-poolhus-pool.webp',
      '/images/Løvevej/Ålbæk-poolhus-køkken.webp',
    ],
  },
];

const tilbygningProjects = [
  {
    num: 1,
    title: 'Modernisering af 50\'er-villa',
    location: 'Brønderslev, Nordjylland',
    size: 'Komplet ombygning · nyt køkken-alrum',
    year: '2023',
    description: 'Gennemgribende modernisering og ombygning af en 1950\'er-villa i Brønderslev. Huset er blevet åbnet op med store skydedørspartier mod haven og et nyt, lyst køkken-alrum, hvilket har givet boligen et nutidigt arkitektonisk løft.',
    images: [
      '/images/Godthåbsvej/Brønderslev-ombygning-efter-3.webp',
      '/images/Godthåbsvej/Brønderslev-ombygning-efter-2.webp',
      '/images/Godthåbsvej/Brønderslev-ombygning-efter-1.webp',
    ],
  },
  {
    num: 2,
    title: 'Villa med lys tilbygning',
    location: 'Hasseris, Aalborg',
    size: '45 m² tilbygning · terrasse',
    year: '2021',
    description: 'Moderne tilbygning i Hasseris, der udvider den eksisterende murstensvilla med et lyst opholdsrum. Store vinduespartier og en overdækket terrasse skaber en glidende overgang til haven.',
    images: [
      '/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-terrasse.webp',
      '/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-bagside.webp',
      '/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-vindue.webp',
    ],
  },
  {
    num: 3,
    title: 'Tilbygning & træterrasse',
    location: 'Aalborg, Nordjylland',
    size: '35 m² tilbygning · overdækning',
    year: '2022',
    description: 'Tegnestuens bud på en elegant tilbygning i Aalborg med en stor træterrasse, der smelter sammen med plænen. Tilbygningen tilfører boligen vigtige kvadratmeter og optimerer lysindfaldet.',
    images: [
      '/images/Neptunvej/Aalborg-neptunvej-tilbygning-terrasse.webp',
      '/images/Neptunvej/Aalborg-neptunvej-tilbygning-terrasse-og-plæne.webp',
      '/images/Neptunvej/Aalborg-neptunvej-tilbygning.haveside.webp',
    ],
  },
  {
    num: 4,
    title: 'Ombygning af 70\'er-villa',
    location: 'Hasseris, Aalborg',
    size: 'Facaderenovering · ny planløsning',
    year: '2022',
    description: 'Renovering og ombygning af en klassisk 1970\'er-villa i Hasseris. Facaden er opdateret til et rent, moderne look, og planløsningen er optimeret til familiens behov.',
    images: [
      '/images/Gravenstenvej/Aalborg-gravenstenvej-renovering-vejside.webp',
      '/images/Gravenstenvej/Aalborg-gravenstenvej-renovering-haveside.webp',
      '/images/Gravenstenvej/Aalborg-gravenstenvej-renovering-terrassearbejde.webp',
    ],
  },
  {
    num: 5,
    title: 'Totalrenovering af parcelhus',
    location: 'Brønderslev, Nordjylland',
    size: 'Komplet ombygning · energirenovering',
    year: '2023',
    description: 'Ombygning og totalrenovering af et ældre, traditionelt parcelhus i Brønderslev. Boligen er transformeret til et energivenligt, lyst og moderne hjem med en stærk visuel profil.',
    images: [
      '/images/Emils hus Olufsgade/Brønderslev-olufsgade-efter-vejside.webp',
      '/images/Emils hus Olufsgade/Brønderslev-olufsgade-efter-indkørsel.webp',
      '/images/Emils hus Olufsgade/Brønderslev-olufsgade-efter-haveside.webp',
    ],
  },
];

console.log('Launching browser...');
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
});

async function runGenerator(name, coverTitle, coverSub, coverImgSrc, catalogProjects, printFriendly = false) {
  console.log(`Generating catalog for ${name} (printFriendly=${printFriendly})...`);
  const coverImg = await imgB64(coverImgSrc, 1200);

  // Pre-process project images
  for (const p of catalogProjects) {
    p.img0 = await imgB64(p.images[0], 1000);
    p.img1 = await imgB64(p.images[1], 520);
    p.img2 = p.images[2] ? await imgB64(p.images[2], 520) : null;
  }

  const tocStartPage = 5;

  const html = `<!DOCTYPE html>
<html lang="da">
<head>
<meta charset="UTF-8">
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  html, body { width:210mm; background:#fff; font-family: 'Helvetica Neue', Arial, sans-serif; }
  .page {
    width:210mm; height:297mm;
    position:relative; overflow:hidden;
    break-after:page; page-break-after:always;
  }
  .page:last-child { break-after:auto; page-break-after:auto; }

  /* COVER */
  .cover { background:#161616; }
  .cover-hero { position:absolute; inset:0; }
  .cover-hero img { width:100%; height:100%; object-fit:cover; opacity:0.2; }
  .cover-overlay { position:relative; z-index:1; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:space-between; padding:22mm 18mm; }
  .cover-logo { width:54mm; filter:invert(1) brightness(2); }
  .cover-center { text-align:center; }
  .cover-label { font-size:8pt; font-weight:300; letter-spacing:0.28em; color:rgba(255,255,255,0.5); text-transform:uppercase; margin-bottom:7mm; }
  .cover-title { font-size:56pt; font-weight:500; letter-spacing:-0.03em; color:#fff; line-height:1; }
  .cover-sub { font-size:10pt; font-weight:300; color:rgba(255,255,255,0.45); margin-top:5mm; letter-spacing:0.07em; }
  .cover-bottom { text-align:center; }
  .cover-site { font-size:8pt; font-weight:300; color:rgba(255,255,255,0.35); letter-spacing:0.14em; }

  /* INTRO PAGE */
  .intro-page { padding:20mm 18mm; display:flex; flex-direction:column; }
  .intro-eyebrow { font-size:7pt; font-weight:500; letter-spacing:0.2em; color:#999; text-transform:uppercase; margin-bottom:4mm; }
  .intro-heading { font-size:28pt; font-weight:500; letter-spacing:-0.02em; color:#111; margin-bottom:8mm; }
  .intro-text { font-size:9.5pt; font-weight:300; color:#444; line-height:1.75; flex:1; }
  .intro-text p { margin-bottom:4.5mm; }
  .intro-text strong { font-weight:500; color:#111; }
  .intro-signature { margin-top:8mm; font-size:9.5pt; font-weight:500; color:#111; line-height:1.4; }
  .intro-signature span { font-weight:300; color:#777; }
  .intro-page-num { position:absolute; bottom:5mm; right:18mm; font-size:7pt; color:#ccc; }

  /* TOC */
  .toc-page { padding:20mm 18mm; display:flex; flex-direction:column; }
  .toc-eyebrow { font-size:7pt; font-weight:500; letter-spacing:0.2em; color:#999; text-transform:uppercase; margin-bottom:4mm; }
  .toc-heading { font-size:28pt; font-weight:500; letter-spacing:-0.02em; color:#111; margin-bottom:10mm; }
  .toc-list { flex:1; }
  .toc-item { display:flex; align-items:baseline; padding:4mm 0; border-bottom:0.3pt solid #ececec; }
  .toc-item:first-child { border-top:0.3pt solid #ececec; }
  .toc-num { font-size:7pt; color:#bbb; width:8mm; flex-shrink:0; }
  .toc-name { font-size:11.5pt; font-weight:400; color:#111; flex:1; }
  .toc-loc { font-size:8pt; font-weight:300; color:#999; margin-left:4mm; }
  .toc-pg { font-size:8.5pt; font-weight:300; color:#bbb; margin-left:5mm; width:6mm; text-align:right; flex-shrink:0; }
  .toc-footer { margin-top:auto; padding-top:8mm; border-top:0.3pt solid #ececec; display:flex; align-items:center; gap:4mm; }
  .toc-footer-logo { height:6mm; opacity:0.3; }
  .toc-footer-text { font-size:7.5pt; color:#bbb; font-weight:300; }

  /* PROCESS PAGE */
  .proc-page { padding:20mm 18mm; display:flex; flex-direction:column; }
  .proc-eyebrow { font-size:7pt; font-weight:500; letter-spacing:0.2em; color:#999; text-transform:uppercase; margin-bottom:4mm; }
  .proc-heading { font-size:28pt; font-weight:500; letter-spacing:-0.02em; color:#111; margin-bottom:10mm; }
  .proc-timeline { display:flex; flex-direction:column; gap:4.5mm; flex:1; }
  .proc-step { display:flex; gap:6mm; align-items:flex-start; }
  .proc-step-num-box {
    display:flex; align-items:center; justify-content:center;
    width:9mm; height:9mm; border-radius:50%; background:#161616; color:#fff;
    font-size:9pt; font-weight:500; flex-shrink:0;
  }
  .proc-step-content { flex:1; padding-top:1.5mm; }
  .proc-step-title { font-size:11pt; font-weight:500; color:#111; margin-bottom:1mm; }
  .proc-step-desc { font-size:8.5pt; font-weight:300; color:#555; line-height:1.6; }
  .proc-footer { margin-top:auto; padding-top:6mm; border-top:0.3pt solid #ececec; display:flex; align-items:center; gap:4mm; }
  .proc-footer-logo { height:6mm; opacity:0.3; }
  .proc-footer-text { font-size:7.5pt; color:#bbb; font-weight:300; }

  /* PROJECT */
  .proj-page { display:flex; flex-direction:column; }
  .proj-top { padding:11mm 14mm 5mm; }
  .proj-eyebrow { font-size:7pt; font-weight:500; letter-spacing:0.18em; color:#bbb; text-transform:uppercase; margin-bottom:2.5mm; }
  .proj-title { font-size:21pt; font-weight:500; letter-spacing:-0.025em; color:#111; line-height:1.1; margin-bottom:2.5mm; }
  .proj-meta { font-size:7.5pt; font-weight:300; color:#888; letter-spacing:0.04em; margin-bottom:3mm; }
  .proj-desc { font-size:8.5pt; font-weight:300; color:#555; line-height:1.75; max-width:158mm; }
  .proj-imgs { flex:1; display:flex; flex-direction:column; min-height:0; }
  .proj-img-main { flex:1; overflow:hidden; margin:3mm 14mm 2mm; min-height:0; }
  .proj-img-main img { width:100%; height:100%; object-fit:cover; display:block; }
  .proj-img-row { display:flex; gap:2mm; height:46mm; margin:0 14mm 9mm; }
  .proj-img-row div { flex:1; overflow:hidden; }
  .proj-img-row img { width:100%; height:100%; object-fit:cover; display:block; }
  .proj-page-num { position:absolute; bottom:5mm; right:14mm; font-size:7pt; color:#ccc; }

  /* BACK */
  .back { background:${printFriendly ? '#fff' : '#161616'}; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:0; ${printFriendly ? 'border: 1px solid #ececec;' : ''} }
  .back-icon { width:17mm; filter:${printFriendly ? 'none' : 'invert(1) brightness(2)'}; margin-bottom:9mm; }
  .back-name { font-size:12pt; font-weight:400; color:${printFriendly ? '#111' : '#fff'}; letter-spacing:0.06em; margin-bottom:11mm; }
  .back-div { width:12mm; height:0.4pt; background:${printFriendly ? '#ececec' : 'rgba(255,255,255,0.18)'}; margin-bottom:11mm; }
  .back-info { text-align:center; }
  .back-info p { font-size:9.5pt; font-weight:300; color:${printFriendly ? '#555' : 'rgba(255,255,255,0.55)'}; line-height:2.1; }
  .back-cvr { margin-top:11mm; font-size:7.5pt; color:${printFriendly ? '#bbb' : 'rgba(255,255,255,0.28)'}; letter-spacing:0.12em; }
</style>
</head>
<body>

<!-- COVER -->
<div class="page cover">
  <div class="cover-hero"><img src="${coverImg}" /></div>
  <div class="cover-overlay">
    <img class="cover-logo" src="${logoData}" />
    <div class="cover-center">
      <div class="cover-label">Arkitekttegnestuen Yderskov · Projektkatalog</div>
      <div class="cover-title">${coverTitle}</div>
      <div class="cover-sub">${coverSub}</div>
    </div>
    <div class="cover-bottom"><div class="cover-site">yderskov.com</div></div>
  </div>
</div>

<!-- PRESENTATION -->
<div class="page intro-page">
  <div class="intro-eyebrow">Velkommen · yderskov.com</div>
  <div class="intro-heading">God læse- og kikkelyst</div>
  <div class="intro-text">
    <p>Drømmen om at bygge nyt, bygge til eller renovere starter altid med en god idé og en sund portion inspiration. Dette katalog er skabt som et inspirationsværktøj til jer, der går med byggeplaner. Her kan I se et udvalg af vores afsluttede projekter, studere plantegninger og lade jer inspirere af forskellige arkitektoniske former, materialevalg og lysindfald.</p>
    <p>Hos <strong>Yderskov Arkitekter</strong> har vi mere end 15 års erfaring med at tegne og opføre unikke huse i hele Danmark. Vi har stået i spidsen for over 300 vellykkede byggerier – lige fra moderne funkisvillaer og naturskønne sommerhuse til funktionelle tilbygninger. Vores tegnestue adskiller sig ved at tilbyde en samlet totalentreprise med egne faste håndværkere, hvilket garanterer jer en tryg proces til en <strong>fast, bindende pris</strong> uden ubehagelige budgetskred.</p>
    <p>Brug dette katalog som et moodboard. Tag noter, sæt krydser ved de løsninger, I kan lide, og tag kataloget med til vores første møde. Vi tilbyder altid et <strong>gratis og helt uforpligtende idémøde</strong> direkte på jeres byggegrund, hvor vi sammen kan drøfte mulighederne for at realisere jeres drømmehjem.</p>
    <p>Vi glæder os til at høre om jeres tanker.</p>
    <div class="intro-signature">
      Christian Yderskov<br />
      <span>Indehaver &amp; Arkitekt, Yderskov Arkitekter</span>
    </div>
  </div>
  <div class="intro-footer">
    <img class="intro-footer-logo" src="${logoData}" />
    <span class="intro-footer-text">Arkitekttegnestuen Yderskov ApS · yderskov.com · cy@yderskov.com · 29 72 34 27</span>
  </div>
  <div class="intro-page-num">2</div>
</div>

<!-- TOC -->
<div class="page toc-page">
  <div class="toc-eyebrow">Katalog — ${name}</div>
  <div class="toc-heading">Indholdsfortegnelse</div>
  <div class="toc-list">
    <div class="toc-item">
      <span class="toc-num">00</span>
      <span class="toc-name">Processen fra A til Z</span>
      <span class="toc-loc">Byggeforløbet</span>
      <span class="toc-pg">4</span>
    </div>
    ${catalogProjects.map((p, i) => `
    <div class="toc-item">
      <span class="toc-num">0${p.num}</span>
      <span class="toc-name">${p.title}</span>
      <span class="toc-loc">${p.location}</span>
      <span class="toc-pg">${tocStartPage + i}</span>
    </div>`).join('')}
  </div>
  <div class="toc-footer">
    <img class="toc-footer-logo" src="${logoData}" />
    <span class="toc-footer-text">Arkitekttegnestuen Yderskov ApS · yderskov.com · cy@yderskov.com · 29 72 34 27</span>
  </div>
  <div class="intro-page-num">3</div>
</div>

<!-- PROCESS -->
<div class="page proc-page">
  <div class="proc-eyebrow">Din proces · yderskov.com</div>
  <div class="proc-heading">Fra første møde til indflytning</div>
  <div class="proc-timeline">
    <div class="proc-step">
      <div class="proc-step-num-box">01</div>
      <div class="proc-step-content">
        <h3 class="proc-step-title">Gratis idémøde på grunden</h3>
        <p class="proc-step-desc">Vi mødes direkte på jeres byggegrund til en uforpligtende snak om jeres drømme, behov og budget. Vi vurderer her grundens potentiale, dagslysforhold og lokalplanens muligheder.</p>
      </div>
    </div>
    <div class="proc-step">
      <div class="proc-step-num-box">02</div>
      <div class="proc-step-content">
        <h3 class="proc-step-title">Skitseforslag &amp; 3D-visualisering</h3>
        <p class="proc-step-desc">Vi udarbejder de første skitser med planløsninger, facader og situationsplan. I modtager en fotorealistisk 3D-model af huset, samt et realistisk prisoverslag på byggeriet.</p>
      </div>
    </div>
    <div class="proc-step">
      <div class="proc-step-num-box">03</div>
      <div class="proc-step-content">
        <h3 class="proc-step-title">Endeligt myndighedsprojekt</h3>
        <p class="proc-step-desc">Når skitserne er godkendt af jer, udarbejder vi det fulde myndighedsprojekt. Dette indeholder alle nødvendige tekniske tegninger, snit og beregninger til ansøgningen.</p>
      </div>
    </div>
    <div class="proc-step">
      <div class="proc-step-num-box">04</div>
      <div class="proc-step-content">
        <h3 class="proc-step-title">Byggetilladelse &amp; Fast bindende pris</h3>
        <p class="proc-step-desc">Vi styrer hele kommunens byggesagsbehandling til tilladelsen er i hus. Her underskriver vi en fast, bindende kontraktpris på hele byggeriet – så I slipper for uforudsete udgifter.</p>
      </div>
    </div>
    <div class="proc-step">
      <div class="proc-step-num-box">05</div>
      <div class="proc-step-content">
        <h3 class="proc-step-title">Byggefase med egne håndværkere</h3>
        <p class="proc-step-desc">Vi tager det fulde totalentrepriseansvar. Vores egne faste murer- og tømrerhold opfører huset. Vi koordinerer og kvalitetssikrer hele forløbet fra start til aflevering.</p>
      </div>
    </div>
    <div class="proc-step">
      <div class="proc-step-num-box">06</div>
      <div class="proc-step-content">
        <h3 class="proc-step-title">Nøglefærdig aflevering</h3>
        <p class="proc-step-desc">Efter endt byggeri foretager vi en grundig fælles gennemgang af huset. I får overdraget nøglerne til et rengjort, fejlfrit og indflytningsklart drømmehjem.</p>
      </div>
    </div>
  </div>
  <div class="proc-footer">
    <img class="proc-footer-logo" src="${logoData}" />
    <span class="proc-footer-text">Arkitekttegnestuen Yderskov ApS · yderskov.com · cy@yderskov.com · 29 72 34 27</span>
  </div>
  <div class="intro-page-num">4</div>
</div>

<!-- PROJECTS -->
${catalogProjects.map((p, i) => `
<div class="page proj-page">
  <div class="proj-top">
    <div class="proj-eyebrow">Projekt 0${p.num} &nbsp;·&nbsp; ${p.location}</div>
    <div class="proj-title">${p.title}</div>
    ${p.size || p.year ? `<div class="proj-meta">${[p.size, p.year].filter(Boolean).join(' · ')}</div>` : ''}
    <div class="proj-desc">${p.description}</div>
  </div>
  <div class="proj-imgs">
    <div class="proj-img-main"><img src="${p.img0}" /></div>
    <div class="proj-img-row">
      <div><img src="${p.img1}" /></div>
      ${p.img2 ? `<div><img src="${p.img2}" /></div>` : ''}
    </div>
  </div>
  <div class="proj-page-num">${tocStartPage + i}</div>
</div>`).join('')}

<!-- BACK COVER -->
<div class="page back">
  <img class="back-icon" src="${iconData}" />
  <div class="back-name">Arkitekttegnestuen Yderskov</div>
  <div class="back-div"></div>
  <div class="back-info">
    <p>📞 29 72 34 27</p>
    <p>cy@yderskov.com</p>
    <p>yderskov.com</p>
    <p>Danserhøj 38, 9700 Brønderslev</p>
  </div>
  <div class="back-cvr">CVR: 39391813</div>
</div>

</body>
</html>`;

  const tmpPath = path.resolve(`tmp-catalog-${name}.html`);
  fs.writeFileSync(tmpPath, html, 'utf8');

  const page = await browser.newPage();
  await page.goto('file:///' + tmpPath.replace(/\\/g, '/'), { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1500));

  const pdfFileName = printFriendly ? `katalog-${name}-print.pdf` : `katalog-${name}.pdf`;
  await page.pdf({
    path: `public/${pdfFileName}`,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await page.close();
  fs.unlinkSync(tmpPath);

  const size = fs.statSync(`public/${pdfFileName}`).size;
  console.log(`Done generating ${name} (${printFriendly ? 'print' : 'online'})! PDF size: ${(size / 1024 / 1024).toFixed(1)} MB`);
}

try {
  // Generate online catalogs (black back cover)
  await runGenerator('villaer', 'Villaer', 'Arkitekttegnede villaer i Danmark', '/images/Lerstien/Frederikshavn-lerstien-terrasse-byview.webp', villaProjects, false);
  await runGenerator('sommerhuse', 'Sommerhuse', 'Arkitekttegnede sommerhuse i Danmark', '/images/Torndalsvej/Hals-Torndalsvej-terrasse.webp', sommerhusProjects, false);
  await runGenerator('tilbygninger', 'Tilbygninger', 'Arkitekttegnede om- og tilbygninger', '/images/Godthåbsvej/Brønderslev-ombygning-efter-3.webp', tilbygningProjects, false);

  // Generate print-friendly catalogs (white back cover)
  await runGenerator('villaer', 'Villaer', 'Arkitekttegnede villaer i Danmark', '/images/Lerstien/Frederikshavn-lerstien-terrasse-byview.webp', villaProjects, true);
  await runGenerator('sommerhuse', 'Sommerhuse', 'Arkitekttegnede sommerhuse i Danmark', '/images/Torndalsvej/Hals-Torndalsvej-terrasse.webp', sommerhusProjects, true);
  await runGenerator('tilbygninger', 'Tilbygninger', 'Arkitekttegnede om- og tilbygninger', '/images/Godthåbsvej/Brønderslev-ombygning-efter-3.webp', tilbygningProjects, true);
} catch (err) {
  console.error('An error occurred during generation:', err);
} finally {
  await browser.close();
  console.log('Browser closed.');
}
