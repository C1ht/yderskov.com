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

const projects = [
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
    size: '',
    year: '',
    description: 'Klassisk villa med traditionelt formsprog, symmetrisk facade og omhyggeligt udvalgte materialer. Huset er placeret i et etableret villakvarter med god forbindelse til naturen og de grønne omgivelser.',
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
    size: '',
    year: '',
    description: 'Villa med ensidig taghældning og overdækket terrasse i direkte forbindelse med stuens store glaspartier. Huset er udformet med en tydelig fløjstruktur der skaber naturlig zonering mellem ophold og privaterum.',
    images: [
      '/images/Hanebjælken/Vestbjerg-Hanebjælken-ny-villa-haveside.webp',
      '/images/Hanebjælken/Vestbjerg-Hanebjælken-ny-villa-overdækket-terrasse.webp',
      '/images/Hanebjælken/Vestbjerg-Hanebjælken-ny-villa-værelsesfløj.webp',
    ],
  },
];

console.log('Pre-processing images...');
const coverImg = await imgB64('/images/Lerstien/Frederikshavn-lerstien-terrasse-byview.webp', 1200);
const logoData = svgB64('/images/logofiles/SVG/Arkitect 5.svg');
const iconData = svgB64('/images/logofiles/SVG/Arkitect 5icon.svg');

// Pre-process project images
for (const p of projects) {
  p.img0 = await imgB64(p.images[0], 1000);
  p.img1 = await imgB64(p.images[1], 520);
  p.img2 = p.images[2] ? await imgB64(p.images[2], 520) : null;
  console.log(`  processed project ${p.num}: ${p.title}`);
}

const tocStartPage = 3;

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
  .back { background:#161616; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:0; }
  .back-icon { width:17mm; filter:invert(1) brightness(2); margin-bottom:9mm; }
  .back-name { font-size:12pt; font-weight:400; color:#fff; letter-spacing:0.06em; margin-bottom:11mm; }
  .back-div { width:12mm; height:0.4pt; background:rgba(255,255,255,0.18); margin-bottom:11mm; }
  .back-info { text-align:center; }
  .back-info p { font-size:9.5pt; font-weight:300; color:rgba(255,255,255,0.55); line-height:2.1; }
  .back-cvr { margin-top:11mm; font-size:7.5pt; color:rgba(255,255,255,0.28); letter-spacing:0.12em; }
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
      <div class="cover-title">Villaer</div>
      <div class="cover-sub">Arkitekttegnede villaer i Danmark</div>
    </div>
    <div class="cover-bottom"><div class="cover-site">yderskov.dk</div></div>
  </div>
</div>

<!-- TOC -->
<div class="page toc-page">
  <div class="toc-eyebrow">Katalog — villaer</div>
  <div class="toc-heading">Indholdsfortegnelse</div>
  <div class="toc-list">
    ${projects.map((p, i) => `
    <div class="toc-item">
      <span class="toc-num">0${p.num}</span>
      <span class="toc-name">${p.title}</span>
      <span class="toc-loc">${p.location}</span>
      <span class="toc-pg">${tocStartPage + i}</span>
    </div>`).join('')}
  </div>
  <div class="toc-footer">
    <img class="toc-footer-logo" src="${logoData}" />
    <span class="toc-footer-text">Arkitekttegnestuen Yderskov ApS · yderskov.dk · cy@yderskov.com · 29 72 34 27</span>
  </div>
</div>

<!-- PROJECTS -->
${projects.map((p, i) => `
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
    <p>29 72 34 27</p>
    <p>cy@yderskov.com</p>
    <p>yderskov.dk</p>
    <p>Damsøvej 38, 9700 Brønderslev</p>
  </div>
  <div class="back-cvr">CVR: 39391813</div>
</div>

</body>
</html>`;

const tmpPath = path.resolve('tmp-catalog.html');
fs.writeFileSync(tmpPath, html, 'utf8');

console.log('Launching browser...');
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
});

const page = await browser.newPage();
await page.goto('file:///' + tmpPath.replace(/\\/g, '/'), { waitUntil: 'networkidle0', timeout: 30000 });
await new Promise(r => setTimeout(r, 1500));

await page.pdf({
  path: 'public/katalog-villaer.pdf',
  format: 'A4',
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});

await browser.close();
fs.unlinkSync(tmpPath);

const size = fs.statSync('public/katalog-villaer.pdf').size;
console.log(`Done! PDF: ${(size / 1024 / 1024).toFixed(1)} MB`);
