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
      '/images/Karetmagervej/Sæby-ny-villa-funkis-haveside-2.webp',
      '/images/Karetmagervej/Sæby-ny-villa-funkis-hjørne.webp',
      '/images/Karetmagervej/Sæby-ny-villa-funkis-gårdside.webp',
      '/images/Karetmagervej/Sæby-ny-villa-funkis-haveside-3.webp',
      '/images/Karetmagervej/Sæby-ny-villa-funkis-haveside-4.webp',
      '/images/Karetmagervej/Sæby-ny-villa-funkis-indgang.webp',
      '/images/Karetmagervej/Sæby-ny-villa-funkis-hvid-bygning.webp',
      '/images/Karetmagervej/Sæby-ny-villa-funkis-terrasse-pergola.webp',
      '/images/Karetmagervej/Sæby-ny-villa-funkis-under-opførelse.webp',
      '/images/Karetmagervej/Sæby-ny-villa-funkis-køkken.webp',
      '/images/Karetmagervej/Sæby-ny-villa-funkis-loft-køkken.webp',
      '/images/Karetmagervej/Sæby-ny-villa-funkis-køkken-spiseplads.webp',
      '/images/Karetmagervej/Sæby-ny-villa-funkis-køkken-stue.webp',
      '/images/Karetmagervej/Sæby-ny-villa-funkis-bad.webp',
      '/images/Karetmagervej/Sæby-ny-villa-funkis-badekar.webp',
      '/images/Karetmagervej/Sæby-ny-villa-funkis-brusekabine.webp',
      '/images/Karetmagervej/Sæby-ny-villa-funkis-gang.webp',
    ],
  },
  {
    num: 2,
    title: 'Moderne villa med markant tag',
    location: 'Sæby, Nordjylland',
    size: '230 m² bolig · 50 m² garage',
    year: '2016',
    description: 'Elegant vinkelvilla i Sæby opført på en stor grund med et karakteristisk sort tegltag med kinesisk svej ved tagfoden og klassiske hvide, småsprodsede vinduespartier. Bygningen forener et herskabeligt, klassisk udtryk med en moderne, åben planløsning. Den tilhørende fliseterrasse og store grønne have skaber fantastiske rammer for udelivet.',
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
      '/images/Lerstien/Frederikshavn-lerstien-vejside.webp',
      '/images/Lerstien/Frederikshavn-lerstien-terrasse-byview.webp',
      '/images/Lerstien/Frederikshavn-lerstien-terrasse.webp',
      '/images/Lerstien/Frederikshavn-lerstien-køkken.webp',
      '/images/Lerstien/Frederikshavn-lerstien-overdækket-terrasse.webp',
      '/images/Billeder til blogindlæg/Gaspejs som rumdeler i sommerhus arkitekt yderskov.webp',
      '/images/Lerstien/Frederikshavn-lerstien-søjle.webp',
      '/images/Lerstien/Frederikshavn-lerstien-terrasse-2.webp',
    ],
  },
  {
    num: 4,
    title: 'Funkisvilla nær Hammer Bakker',
    location: 'Vestbjerg, Nordjylland',
    size: '205 m² bolig · 70 m² garage · 6 m² overdækning',
    year: '',
    description: 'Funkisvilla tilpasset en grund med fald og skøn udsigt over den omkringliggende natur og det åbne landskab. Naturen og lyset trækkes ind i boligen ved at designe huset med store skydedørspartier og åbne facader. Familien elsker deres hund og har selvfølgelig bryggers med hundevaskeplads.',
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
      '/images/Gartnerhaven/Hjørring-gartnehaven-ny-villa-haveside.webp',
      '/images/Gartnerhaven/Hjørring-garnterhaven-ny-villa.webp',
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
  {
    num: 7,
    title: 'Engelsk colonial stil',
    location: 'Aalborg, Nordjylland',
    size: '430 m² herskabelig bolig',
    year: '2023',
    description: 'Eksklusiv herskabsvilla i engelsk colonial-stil opført i Aalborg. Den rødmurede facade med markante hvide pudsede gesimser, søjleprydet indgangsparti og mørke sprossede vinduer komplementeres af en smuk forhave med frodige vinranker. Indvendigt rummer villaen luksuriøse faciliteter, herunder en storslået hall med en elegant svungen trappe, sildebensparket, hjemmebiograf og stuer en-suite.',
    images: [
      '/images/Ikarosvej/Aalborg-Ikarosvej-ny-villa-indkørsel.webp',
      '/images/Ikarosvej/Ikarosvej facade.webp',
      '/images/Ikarosvej/Ikarosvej forhave med vin.webp',
      '/images/Ikarosvej/ikarosvej facade mod have.webp',
      '/images/Ikarosvej/ikarosvej hall.webp',
    ],
  },
  {
    num: 8,
    title: 'Engelsk villa ved fjorden',
    location: 'Nørholm, Nordjylland',
    size: '350 m² landejendom',
    year: '2024',
    description: 'Herskabelig engelsk villa opført på en stor hesteejendom nær Aalborg med en enestående udsigt over Limfjorden. Villaen er tegnet til en familie på tre med udgangspunkt i et postkort familien kom med til tegnestuen, der viste deres drømmebolig. Villaen byder på eksklusive rammer med en rummelig hall, et stort køkken, stuer ensuite og flere badeværelser, der tilsammen forener det klassiske herregårdsudtryk med moderne landliv.',
    images: [
      '/images/Nørholmsvej/Engelsk villa facade mod Nørholmsvej.avif',
      '/images/Nørholmsvej/Engelsk villa på stor plæne.webp',
      '/images/Nørholmsvej/Engelsk villa fra havesiden.webp',
      '/images/Nørholmsvej/Engelsk villa fra gavl.webp',
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
    description: 'Lyst sommerhus i Hals, smukt beliggende på en åben lyngslette omgivet af et fredeligt skovområde. Huset er tegnet med store glaspartier, der sikrer et fantastisk lysindfald og tæt kontakt til naturen. Indvendigt er køkkenet adskilt fra stuen med en elegant rumdeler, som skaber en perfekt balance mellem funktionel opdeling og den åbne rumfornemmelse.',
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
    description: 'Klassisk sort træsommerhus opført på en dejlig åben grund i Løkken med storslået panoramaudsigt over landskabet nær Vesterhavet. Bygningen er nænsomt integreret i det sarte landskab med en stor, ugeneret træterrasse, der smyger sig om huset.',
    images: [
      '/images/Løkken sommerhus/Løkken-Alexandravej-sommerhus-terrasse.webp',
      '/images/Løkken sommerhus/Løkken-Alexandravej-sommerhus-indgangsparti.webp',
      '/images/Løkken sommerhus/Løkken-Alexandravej-sommerhus-sidebygning.webp',
    ],
  },
  {
    num: 3,
    title: 'Sommerhus med indendørs pool',
    location: 'Ålbæk, Nordjylland',
    size: '185 m² wellness-hus · pool & spa',
    year: '2023',
    description: 'Eksklusivt luksussommerhus i Ålbæk beklædt med lyst træ, tegnet som et wellness-fristed. Huset rummer en storslået wellness-afdeling med swimmingpool, sauna samt både indvendig og udvendig spa. Indvendigt er der lyst køkkenalrum, hyggelig hems og et aktivitetsrum med billard. Huset rummer flere værelser og badeværelser og er egnet til en stor familie eller udlejning.',
    images: [
      '/images/Løvevej/Ålbæk-poolhus-terrasse.webp',
      '/images/Løvevej/Ålbæk-poolhus-pool.webp',
      '/images/Løvevej/Ålbæk-poolhus-køkken.webp',
      '/images/Løvevej/Løvevej køkken ophold.webp',
      '/images/Løvevej/LØVEVEJ-BAD.webp',
      '/images/Løvevej/Løvevej hems.webp',
      '/images/Løvevej/Ålbæk-poolhus-aktivitetsrum.webp',
      '/images/Løvevej/Ålbæk-poolhus-badmiljø.webp',
    ],
  },
  {
    num: 4,
    title: 'Moderne sommerhus',
    location: 'Løkken, Nordjylland',
    size: '115 m² fritidshus',
    year: '2024',
    description: 'Moderne sommerhus i Løkken i et stramt formsprog med mørk listebeklædning. Huset er gennemtænkt med store glaspartier, en stor ugeneret træterrasse og en integreret udebruser.',
    images: [
      '/images/Harald Jensens Vej/Løkken-sommerhus-Haraldjensensvej-indkørsel.webp',
      '/images/Harald Jensens Vej/Løkken-sommerhus-Haraldjensensvej-terrasse.webp',
      '/images/Harald Jensens Vej/Løkken-sommerhus-Haraldjensensvej--udebruser.webp',
    ],
  },
  {
    num: 5,
    title: 'Sommerhus med biopejs',
    location: 'Løkken, Nordjylland',
    size: '115 m² fritidshus',
    year: '2024',
    description: 'Arkitekttegnet sommerhus i Løkken med minimalistisk nordisk interiør. Opholdsrummet har lyst plankegulv og en central mur med indbygget biopejs som rumdeler mod køkkenet. Det lyse egetræskøkken har betonbordplader, og der er direkte udgang til en stor træterrasse med udebruser.',
    images: [
      '/images/Marensvej sommerhus/Sommerhus marensvej grønhøj stue og pejs.webp',
      '/images/Marensvej sommerhus/Sommerhus marensvej grønhøj køkken.webp',
      '/images/Marensvej sommerhus/Sommerhus marensvej grønhøj køkkeborde.webp',
      '/images/Marensvej sommerhus/Sommerhus marensvej grønhøj terrasse.webp',
      '/images/Marensvej sommerhus/Sommerhus marensvej grønhøj terrasse udebrus.webp',
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
    description: 'Gennemgribende transformation af en klassisk 1950\'er-villa i Brønderslev. Huset er opgraderet fra slidt murværk til en moderne, hvidpudset facade med mørke vinduesrammer og store skydedørspartier. Indvendigt er boligen åbnet op med et imponerende køkken-alrum med loft til kip, store vinduespartier, direkte adgang til en nyopført træterrasse mod haven og 4 værelser samt fritliggende multirum.',
    images: [
      '/images/Godthåbsvej/yderskov-ombygning-efter-3.webp',
      '/images/Godthåbsvej/yderskov-ombygning-efter-1.webp',
      '/images/Godthåbsvej/yderskov-ombygning-efter-2.webp',
      '/images/Godthåbsvej/Brønderslev-ombygning-efter-koekken-2.webp',
    ],
    beforeImages: [
      '/images/Godthåbsvej/yderskov-ombygning-foer-3.webp',
      '/images/Godthåbsvej/yderskov-ombygning-foer-1.webp',
      '/images/Godthåbsvej/yderskov-ombygning-foer-2.webp',
    ],
  },
  {
    num: 2,
    title: 'Villa med lys tilbygning',
    location: 'Hasseris i Aalborg',
    size: '45 m² tilbygning · terrasse',
    year: '2021',
    description: 'Stilfuld tilbygning til en traditionel murstensvilla i Hasseris. Tilbygningen er udført med en mørk træbeklædning, der danner en flot kontrast til det gule murværk, og afsluttes med zinkinddækninger samt store hjørnevinduer. Den tilfører boligen et lyst, åbent opholdsrum med direkte udgang til husets træterrasse og en smukt anlagt have.',
    images: [
      '/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-bagside.webp',
      '/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-terrasse.webp',
      '/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-vindue.webp',
    ],
  },
  {
    num: 3,
    title: 'Tilbygning & træterrasse',
    location: 'Aalborg, Nordjylland',
    size: '35 m² tilbygning · overdækning',
    year: '2022',
    description: 'Elegant og moderne tilbygning i Aalborg udført med mørke facadeplader, der tilfører huset værdifulde kvadratmeter og masser af dagslys. Tilbygningen åbner sig mod haven via en stor, specialbygget træterrasse i flere niveauer, som trapper naturligt ned mod plænen og integrerer uderummet i hverdagen.',
    images: [
      '/images/Neptunvej/Aalborg-neptunvej-tilbygning-terrasse.webp',
      '/images/Neptunvej/Aalborg-neptunvej-tilbygning-terrasse-og-plæne.webp',
      '/images/Neptunvej/Aalborg-neptunvej-tilbygning.haveside.webp',
    ],
  },
  {
    num: 4,
    title: 'Ombygning af 70\'er-villa',
    location: 'Hasseris i Aalborg',
    size: 'Facaderenovering · ny planløsning',
    year: '2022',
    description: 'Totalrenovering af en klassisk 1970\'er-villa i Hasseris. Den mørke facade er forvandlet med en lys, hvidpudset overflade kombineret med sort træbeklædning og detaljer i zink. En ny terrasse. Planløsningen er gennemgribende optimeret for at skabe et stort, sammenhængende køkken-alrum med store vinduespartier mod haven.',
    images: [
      '/images/Gravenstenvej/Aalborg-gravenstenvej-renovering-haveside.webp',
      '/images/Gravenstenvej/Aalborg-gravenstenvej-renovering-vejside.webp',
      '/images/Gravenstenvej/Aalborg-gravenstenvej-renovering-terrassearbejde.webp',
    ],
  },
  {
    num: 5,
    title: 'Totalrenovering af parcelhus',
    location: 'Brønderslev, Nordjylland',
    size: 'Komplet ombygning · energirenovering',
    year: '2023',
    description: 'Markant totalrenovering og modernisering af et ældre parcelhus i Brønderslev. Bygningen er transformeret fra et traditionelt murstenshus til en lys, hvidpudset ejendom med et stærkt arkitektonisk udtryk. Renoveringen omfatter store vinduespartier, to etager samt et tårn med siddepladser og udkik over et stort opland. Desuden moderne energiløsninger, en nyindrettet have med grusbelagt indkørsel samt store glaspartier mod den private baghave. Bemærk “før-billedet” og sammenlign de to meget forskellige boliger.',
    images: [
      '/images/Emils hus Olufsgade/Brønderslev-olufsgade-efter-indkørsel.webp',
      '/images/Emils hus Olufsgade/Brønderslev-olufsgade-efter-vejside.webp',
      '/images/Emils hus Olufsgade/Brønderslev-olufsgade-efter-haveside.webp',
      '/images/Emils hus Olufsgade/Brønderslev-olufsgade-foer-vejside.webp',
    ],
  },
];

const skitseProjects = [
  // VILLA-SKITSER
  {
    title: 'Skitseforslag: Ny villa',
    location: 'Hou, Nordjylland',
    size: 'Skitseforslag · villa',
    year: '',
    description: 'Skitseforslag til en moderne og rummelig villa i Hou med store glaspartier og en god forbindelse mellem inde- og uderum.',
    images: [
      '/images/Skitseforslag/Skitseforslag-Hou.webp',
    ],
  },
  {
    title: 'Skitseforslag: Tilbygning & modernisering',
    location: 'Brovst, Nordjylland',
    size: 'Skitseforslag · tilbygning',
    year: '',
    description: 'Skitseforslag til en større ombygning og tilbygning af en eksisterende bolig i Brovst for at skabe bedre lysindfald og ekstra opholdsareal.',
    images: [
      '/images/Skitseforslag/Skitseforslag-om-og-tilbygning-Brovst.webp',
    ],
  },
  // SOMMERHUS-SKITSER
  {
    title: 'Skitseforslag: Kompakt sommerhus',
    location: 'Danmark',
    size: '50 m² skitseforslag',
    year: '',
    description: 'Skitseforslag til et kompakt og funktionelt sommerhus på 50 kvadratmeter, der udnytter pladsen optimalt med fokus på det enkle udeliv.',
    images: [
      '/images/Skitseforslag/Skitseforslag-50m2-Sommerhus.webp',
    ],
  },
  {
    title: 'Skitseforslag: Sommerhus',
    location: 'Blokhus, Nordjylland',
    size: 'Skitseforslag · sommerhus',
    year: '',
    description: 'Skitseforslag til et moderne træsommerhus i Blokhus, tegnet til at falde naturligt ind i klitlandskabet med store træterrasser.',
    images: [
      '/images/Skitseforslag/Skitseforslag-Blokhus.webp',
    ],
  },
  {
    title: 'Skitseforslag: Sommerhus',
    location: 'Løkken, Nordjylland',
    size: 'Skitseforslag · sommerhus',
    year: '',
    description: 'Skitseforslag til et klassisk sort træsommerhus i Løkken med et lyst, åbent køkken-alrum og direkte udgang til terrassen.',
    images: [
      '/images/Skitseforslag/Skitseforslag-Loekken.webp',
    ],
  },
  {
    title: 'Skitseforslag: Sommerhus med fladt tag',
    location: 'Løkken, Nordjylland',
    size: 'Skitseforslag · sommerhus',
    year: '',
    description: 'Skitseforslag til et moderne, kubistisk sommerhus med fladt tag i Løkken, tegnet med store glaspartier og overdækkede uderum.',
    images: [
      '/images/Skitseforslag/Skitseforslag-Loekken-fladt-tag.webp',
    ],
  },
  {
    title: 'Skitseforslag: Sommerhus i Løkken Syd',
    location: 'Løkken, Nordjylland',
    size: 'Skitseforslag · sommerhus',
    year: '',
    description: 'Skitseforslag til et sommerhus beliggende i Løkken Syd, hvor opholdsrummene er orienteret mod solen og udsigten over landskabet.',
    images: [
      '/images/Skitseforslag/Skitseforslag-Loekken-syd.webp',
    ],
  },
  // LEJLIGHED-SKITSER
  {
    title: 'Skitseforslag: Lejlighedsrenovering',
    location: 'Ågade, Aalborg',
    size: 'Skitseforslag · plantegning',
    year: '',
    description: 'Plantegning og skitseforslag til den gennemgribende renovering af herskabslejligheden på Ågade i Aalborg med fokus på optimering af planløsningen.',
    images: [
      '/images/Ågade 25/Aalborg-Ågade-renovering-plantegning.webp',
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

  const separatorImages = {
    villaer: await imgB64('/images/Karetmagervej/Sæby-ny-villa-funkis-haveside.webp', 1200),
    tilbygninger: await imgB64('/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-bagside.webp', 1200),
    sommerhuse: await imgB64('/images/Harald Jensens Vej/Løkken-sommerhus-Haraldjensensvej-terrasse.webp', 1200),
    skitser: await imgB64('/images/Skitseforslag/Skitseforslag-Loekken.webp', 1200)
  };

  // Pre-process project images
  for (const p of catalogProjects) {
    p.img0 = await imgB64(p.images[0], 1000);
    p.img1 = p.images[1] ? await imgB64(p.images[1], 520) : null;
    p.img2 = p.images[2] ? await imgB64(p.images[2], 520) : null;
    p.img3 = p.images[3] ? await imgB64(p.images[3], 520) : null;

    p.galleryPages = [];
    if (p.images.length > 4 && (!p.beforeImages || p.beforeImages.length === 0)) {
      const remainingImages = p.images.slice(4);
      for (let j = 0; j < remainingImages.length; j += 12) {
        const chunk = remainingImages.slice(j, j + 12);
        const chunkB64 = [];
        for (const imgPath of chunk) {
          chunkB64.push(await imgB64(imgPath, 600));
        }
        p.galleryPages.push({
          images: chunkB64,
          pageNumber: null
        });
      }
    }

    if (p.beforeImages && p.beforeImages.length > 0) {
      p.bimg0 = await imgB64(p.beforeImages[0], 1000);
      p.bimg1 = p.beforeImages[1] ? await imgB64(p.beforeImages[1], 520) : null;
      p.bimg2 = p.beforeImages[2] ? await imgB64(p.beforeImages[2], 520) : null;
    }
  }

  let displayedPageNum = 4;
  let physicalPageNum = 5;
  const processedProjects = [];
  for (let i = 0; i < catalogProjects.length; i++) {
    const p = catalogProjects[i];
    const needsSeparator = i === 0 || p.section !== catalogProjects[i - 1].section;
    if (needsSeparator) {
      p.separatorPhysicalPage = physicalPageNum;
      console.log(`[SEPARATOR] Section: ${p.section} -> Physical Page: ${physicalPageNum}`);
      physicalPageNum++; // Separator page (no page number shown, not counted in displayedPageNum)
    }
    
    p.pageNumber = displayedPageNum;
    p.physicalPage = physicalPageNum;
    console.log(`Project: ${p.title} (${p.location}) -> Page number: ${displayedPageNum}, Physical Page: ${physicalPageNum}`);
    displayedPageNum++;
    physicalPageNum++;

    for (const gp of p.galleryPages) {
      gp.pageNumber = displayedPageNum;
      gp.physicalPage = physicalPageNum;
      console.log(`Project: ${p.title} -> Gallery Page number: ${displayedPageNum}, Physical Page: ${physicalPageNum}`);
      displayedPageNum++;
      physicalPageNum++;
    }

    if (p.beforeImages && p.beforeImages.length > 0) {
      p.beforePageNumber = displayedPageNum;
      p.beforePhysicalPage = physicalPageNum;
      console.log(`Project: ${p.title} -> Before page number: ${displayedPageNum}, Physical Page: ${physicalPageNum}`);
      displayedPageNum++;
      physicalPageNum++;
    }
    processedProjects.push(p);
  }

  const backCoverPhysicalPage = physicalPageNum;

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
  .cover { position: relative; background:${printFriendly ? '#fff' : '#161616'}; ${printFriendly ? 'border: 1px solid #ececec;' : ''} }
  .cover-hero { position:absolute; inset:0; z-index:1; }
  .cover-hero img { width:100%; height:100%; object-fit:cover; opacity:${printFriendly ? 0.08 : 1.0}; }
  .cover-overlay-gradient {
    position: absolute;
    inset: 0;
    z-index: 2;
    background: ${printFriendly 
      ? 'none' 
      : 'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.7) 100%)'};
  }
  .cover-content-layout {
    position: relative;
    z-index: 3;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${printFriendly ? '#111' : '#fff'};
  }
  .page-even.cover .cover-content-layout { padding: 24mm 26mm 24mm 20mm; }
  .page-odd.cover .cover-content-layout { padding: 24mm 20mm 24mm 26mm; }
  .cover-top-brand {
    width: 100%;
  }
  .cover-brand-name {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    font-size: 24pt;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: ${printFriendly ? '#111' : '#fff'};
    margin-bottom: 4mm;
  }
  .cover-brand-line {
    width: 100%;
    height: 0.5pt;
    background: ${printFriendly ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.4)'};
  }
  .cover-bottom-title {
    text-align: left;
  }
  .cover-main-title {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    font-size: 54pt;
    font-weight: 300;
    letter-spacing: -0.01em;
    color: ${printFriendly ? '#111' : '#fff'};
    line-height: 1.1;
    margin-bottom: 2mm;
  }
  .cover-label-tag {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    font-size: 11pt;
    font-weight: 700;
    letter-spacing: 0.18em;
    color: ${printFriendly ? '#555' : 'rgba(255,255,255,0.8)'};
  }

  /* INTRO PAGE */
  .intro-page { display:flex; flex-direction:column; }
  .page-even.intro-page, .page-even.toc-page, .page-even.proc-page { padding: 20mm 24mm 20mm 18mm; }
  .page-odd.intro-page, .page-odd.toc-page, .page-odd.proc-page { padding: 20mm 18mm 20mm 24mm; }
  .intro-eyebrow { font-size:7pt; font-weight:500; letter-spacing:0.2em; color:#999; text-transform:uppercase; margin-bottom:4mm; }
  .intro-heading { font-size:28pt; font-weight:500; letter-spacing:-0.02em; color:#111; margin-bottom:8mm; }
  .intro-text { font-size:9.5pt; font-weight:300; color:#444; line-height:1.75; flex:1; }
  .intro-text p { margin-bottom:4.5mm; }
  .intro-text strong { font-weight:500; color:#111; }
  .intro-signature { margin-top:8mm; font-size:9.5pt; font-weight:500; color:#111; line-height:1.4; }
  .intro-signature span { font-weight:300; color:#777; }
  .intro-page-num { position:absolute; bottom:5mm; font-size:7pt; color:#ccc; }
  .page-even .intro-page-num { left:18mm; right:auto; }
  .page-odd .intro-page-num { right:18mm; left:auto; }
  .intro-footer { margin-top:auto; padding-top:6mm; border-top:0.3pt solid #ececec; display:flex; align-items:center; gap:4mm; }
  .intro-footer-logo { height:6mm; opacity:0.15; }
  .intro-footer-text { font-size:7.5pt; color:#bbb; font-weight:300; }

  /* TOC */
  .toc-page { display:flex; flex-direction:column; }
  .toc-eyebrow { font-size:7pt; font-weight:500; letter-spacing:0.2em; color:#999; text-transform:uppercase; margin-bottom:4mm; }
  .toc-heading { font-size:28pt; font-weight:500; letter-spacing:-0.02em; color:#111; margin-bottom:6mm; }
  .toc-list {
    column-count: 2;
    column-gap: 12mm;
    flex: 1;
  }
  .toc-item {
    display:flex;
    align-items:baseline;
    padding:1.6mm 0;
    border-bottom:0.3pt solid #ececec;
    break-inside: avoid;
  }
  .toc-num { font-size:7.5pt; font-weight:500; color:#bbb; width:8mm; flex-shrink:0; }
  .toc-name { font-size:9.5pt; font-weight:400; color:#111; flex:1; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
  .toc-loc { font-size:7.5pt; font-weight:300; color:#999; margin-left:2mm; }
  .toc-pg { font-size:8pt; font-weight:500; color:#999; margin-left:3mm; width:6mm; text-align:right; flex-shrink:0; }
  .toc-footer { margin-top:auto; padding-top:8mm; border-top:0.3pt solid #ececec; display:flex; align-items:center; gap:4mm; }
  .toc-footer-logo { height:6mm; opacity:0.3; }
  .toc-footer-text { font-size:7.5pt; color:#bbb; font-weight:300; }

  /* PROCESS PAGE */
  .proc-page { display:flex; flex-direction:column; }
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
  .page-even .proj-top { padding: 11mm 20mm 5mm 14mm; }
  .page-odd .proj-top { padding: 11mm 14mm 5mm 20mm; }
  .proj-eyebrow { font-size:7pt; font-weight:500; letter-spacing:0.18em; color:#bbb; text-transform:uppercase; margin-bottom:2.5mm; }
  .proj-title { font-size:21pt; font-weight:500; letter-spacing:-0.025em; color:#111; line-height:1.1; margin-bottom:2.5mm; }
  .proj-meta { font-size:7.5pt; font-weight:300; color:#888; letter-spacing:0.04em; margin-bottom:3mm; }
  .proj-desc { font-size:8.5pt; font-weight:300; color:#555; line-height:1.75; max-width:158mm; }
  .proj-imgs { flex:1; display:flex; flex-direction:column; min-height:0; }
  .proj-img-main {
    flex:1;
    overflow:hidden;
    min-height:0;
    background:#f7f6f3;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .page-even .proj-img-main { margin: 3mm 20mm 2mm 14mm; }
  .page-odd .proj-img-main { margin: 3mm 14mm 2mm 20mm; }
  .proj-img-main img { max-width:100%; max-height:100%; object-fit:contain; display:block; }
  .proj-img-row { display:flex; gap:2mm; height:46mm; }
  .page-even .proj-img-row { margin: 0 20mm 9mm 14mm; }
  .page-odd .proj-img-row { margin: 0 14mm 9mm 20mm; }
  .proj-img-row div { flex:1; overflow:hidden; position:relative; }
  .before-badge {
    position: absolute;
    top: 2.5mm;
    left: 2.5mm;
    background: rgba(0,0,0,0.65);
    color: #fff;
    padding: 0.8mm 2.2mm;
    font-size: 7pt;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    border-radius: 2px;
    z-index: 2;
  }
  .proj-img-row img { width:100%; height:100%; object-fit:cover; display:block; }
  .proj-page-num { position:absolute; bottom:5mm; font-size:7pt; color:#ccc; }
  .page-even .proj-page-num { left:14mm; right:auto; }
  .page-odd .proj-page-num { right:14mm; left:auto; }

  /* BACK */
  .back { background:${printFriendly ? '#fff' : '#161616'}; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:0; ${printFriendly ? 'border: 1px solid #ececec;' : ''} }
  .back-icon { width:42mm; filter:${printFriendly ? 'none' : 'invert(1) brightness(2)'}; margin-bottom:11mm; }
  .back-div { width:12mm; height:0.4pt; background:${printFriendly ? '#ececec' : 'rgba(255,255,255,0.18)'}; margin-bottom:11mm; }
  .back-info { text-align:center; }
  .back-info p { font-size:9.5pt; font-weight:300; color:${printFriendly ? '#555' : 'rgba(255,255,255,0.55)'}; line-height:2.1; }
  .back-cvr { margin-top:11mm; font-size:7.5pt; color:${printFriendly ? '#bbb' : 'rgba(255,255,255,0.28)'}; letter-spacing:0.12em; }
  .back-disclaimer { margin-top:3mm; font-size:7pt; color:${printFriendly ? '#ccc' : 'rgba(255,255,255,0.2)'}; font-weight:300; }
</style>
</head>
<body>

<!-- COVER -->
<div class="page cover page-odd">
  <div class="cover-hero"><img src="${coverImg}" /></div>
  <div class="cover-overlay-gradient"></div>
  <div class="cover-content-layout">
    <div class="cover-top-brand">
      <div class="cover-brand-name">Arkitekt Yderskov</div>
      <div class="cover-label-tag" style="margin-bottom:4mm">Vi dækker hele landet</div>
      <div class="cover-brand-line"></div>
    </div>
    <div class="cover-bottom-title">
      <div class="cover-main-title">${coverTitle}</div>
    </div>
  </div>
</div>

<!-- PRESENTATION -->
<div class="page intro-page page-even">
  <div class="intro-eyebrow">Velkommen · yderskov.com</div>
  <div class="intro-heading">Find inspiration til dit byggeri</div>
  <div class="intro-text">
    <p>Drømmen om at bygge nyt, bygge til eller renovere starter altid med en god idé og en portion inspiration. Dette katalog er skabt som et inspirationsværktøj til jer, der går med byggeplaner. Her kan I se et lille udvalg af vores afsluttede projekter, studere plantegninger og lade jer inspirere af forskellige arkitektoniske former, materialevalg og lysindfald.</p>
    <p>Hos <strong>Arkitekttegnestuen Yderskov</strong> har vi mere end 25 års erfaring med at tegne og opføre unikke huse og byggerier i hele Danmark. Vi har stået i spidsen for over 300 vellykkede byggerier – lige fra moderne funkisvillaer og naturskønne sommerhuse til funktionelle tilbygninger. Vores tegnestue adskiller sig ved at tilbyde en samlet proces med faste håndværkere, hvilket giver jer en god byggeproces.</p>
    <p>Brug dette katalog som et moodboard. Tag noter, sæt kryds ved de løsninger, I kan lide, og tag kataloget med til vores første møde. Vi tilbyder altid et <strong>gratis og helt uforpligtende idémøde</strong> f.eks. på jeres byggegrund, hvor vi sammen kan drøfte mulighederne for at realisere jeres drømmebyggeri.</p>
    <p>Vi glæder os til at høre om jeres tanker.</p>
    <div class="intro-signature">
      Chris Yderskov<br />
      <span>Indehaver &amp; Arkitekt, Arkitekttegnestuen Yderskov</span>
    </div>
  </div>
  <div class="intro-footer">
    <img class="intro-footer-logo" src="${logoData}" />
    <span class="intro-footer-text">Arkitekttegnestuen Yderskov ApS · yderskov.com · cy@yderskov.com · 29 72 34 27</span>
  </div>
  <div class="intro-page-num">1</div>
</div>

<!-- TOC -->
<div class="page toc-page page-odd">
  <div class="toc-eyebrow">Katalog — ${name}</div>
  <div class="toc-heading">Indholdsfortegnelse</div>
  <div class="toc-list">
    <div class="toc-item">
      <span class="toc-num">00</span>
      <span class="toc-name">Processen fra A til Z</span>
      <span class="toc-loc">Byggeforløbet</span>
      <span class="toc-pg">3</span>
    </div>
    ${processedProjects.map((p) => `
    <div class="toc-item">
      <span class="toc-num">${p.num < 10 ? '0' + p.num : p.num}</span>
      <span class="toc-name">${p.title}</span>
      <span class="toc-loc">${p.location}</span>
      <span class="toc-pg">${p.pageNumber}</span>
    </div>`).join('')}
  </div>
  <div class="toc-footer">
    <img class="toc-footer-logo" src="${logoData}" />
    <span class="toc-footer-text">Arkitekttegnestuen Yderskov ApS · yderskov.com · cy@yderskov.com · 29 72 34 27</span>
  </div>
  <div class="intro-page-num">2</div>
</div>

<!-- PROCESS -->
<div class="page proc-page page-even">
  <div class="proc-eyebrow">Din proces · yderskov.com</div>
  <div class="proc-heading">Fra første møde til indflytning</div>
  <div class="proc-timeline">
    <div class="proc-step">
      <div class="proc-step-num-box">01</div>
      <div class="proc-step-content">
        <h3 class="proc-step-title">Gratis idémøde på grunden</h3>
        <p class="proc-step-desc">Vi mødes f.eks. på jeres byggegrund til en gratis og uforpligtende snak om jeres planer, behov og budget. Vi vurderer her grundens potentiale, dagslysforhold og lokalplanens muligheder.</p>
      </div>
    </div>
    <div class="proc-step">
      <div class="proc-step-num-box">02</div>
      <div class="proc-step-content">
        <h3 class="proc-step-title">Skitseforslag</h3>
        <p class="proc-step-desc">Vi udarbejder de første skitser med planløsninger, facader og situationsplan samt et prisskøn på byggeriet.</p>
      </div>
    </div>
    <div class="proc-step">
      <div class="proc-step-num-box">03</div>
      <div class="proc-step-content">
        <h3 class="proc-step-title">Endeligt myndighedsprojekt</h3>
        <p class="proc-step-desc">Når skitserne er godkendt af jer, udarbejder vi det fulde myndighedsprojekt. Dette indeholder alle nødvendige tekniske tegninger, ansøgningsskema med relevant information, beregninger m.v. til ansøgning om byggetilladelse.</p>
      </div>
    </div>
    <div class="proc-step">
      <div class="proc-step-num-box">04</div>
      <div class="proc-step-content">
        <h3 class="proc-step-title">Byggetilladelse</h3>
        <p class="proc-step-desc">Vi varetager al kommunikation med kommunen til vi modtager byggetilladelsen.</p>
      </div>
    </div>
    <div class="proc-step">
      <div class="proc-step-num-box">05</div>
      <div class="proc-step-content">
        <h3 class="proc-step-title">Byggefase</h3>
        <p class="proc-step-desc">Vores faste håndværkere beregner en pris på byggeriet. Huset opføres under tilsyn og økonomisk koordinering af os.</p>
      </div>
    </div>
    <div class="proc-step">
      <div class="proc-step-num-box">06</div>
      <div class="proc-step-content">
        <h3 class="proc-step-title">Nøglefærdig aflevering</h3>
        <p class="proc-step-desc">Vi færdigmelder byggeriet hos kommunen og I kan tage det i brug.</p>
      </div>
    </div>
  </div>
  <div class="proc-footer">
    <img class="proc-footer-logo" src="${logoData}" />
    <span class="proc-footer-text">Arkitekttegnestuen Yderskov ApS · yderskov.com · cy@yderskov.com · 29 72 34 27</span>
  </div>
  <div class="intro-page-num">3</div>
</div>

<!-- PROJECTS -->
${processedProjects.map((p, idx) => {
  let htmlBlock = '';
  const needsSeparator = idx === 0 || p.section !== processedProjects[idx - 1].section;
  if (needsSeparator) {
    const sectionTitle = p.section === 'villaer' ? 'Villaer' : (p.section === 'tilbygninger' ? 'Om- og tilbygning' : (p.section === 'sommerhuse' ? 'Sommerhuse' : 'Skitseforslag'));
    htmlBlock += `
<div class="page cover ${p.separatorPhysicalPage % 2 === 0 ? 'page-even' : 'page-odd'}" style="background:${printFriendly ? '#fff' : '#161616'}; ${printFriendly ? 'border: 1px solid #ececec;' : ''}">
  <div class="cover-hero"><img src="${separatorImages[p.section]}" /></div>
  <div class="cover-overlay-gradient"></div>
  <div class="cover-content-layout">
    <!-- Top brand line (identical to main cover) -->
    <div class="cover-top-brand">
      <div class="cover-brand-name">YDERSKOV</div>
      <div class="cover-brand-line"></div>
    </div>
    
    <!-- Middle Logo and Company Name -->
    <div style="display:flex; flex-direction:column; align-items:center; gap:5mm;">
      <img src="${iconData}" style="width:32mm; height:32mm; filter:${printFriendly ? 'none' : 'invert(1) brightness(2)'};" />
      <div style="font-size:10.5pt; font-weight:300; letter-spacing:0.18em; text-transform:uppercase; color:${printFriendly ? '#555' : 'rgba(255,255,255,0.75)'}; margin-top:2mm; font-family:'Helvetica Neue', Arial, sans-serif;">Arkitekttegnestuen Yderskov</div>
    </div>
    
    <!-- Bottom Section Title (identical styling to main cover) -->
    <div class="cover-bottom-title">
      <div class="cover-main-title">${sectionTitle}</div>
      <div class="cover-label-tag">PROJEKTKATALOG</div>
    </div>
  </div>
</div>
`;
  }

  htmlBlock += `
<div class="page proj-page ${p.physicalPage % 2 === 0 ? 'page-even' : 'page-odd'}">
  <div class="proj-top">
    <div class="proj-eyebrow">Projekt ${p.num < 10 ? '0' + p.num : p.num} &nbsp;·&nbsp; ${p.location}</div>
    <div class="proj-title">${p.title}</div>
    ${p.size || p.year ? `<div class="proj-meta">${[p.size, p.year].filter(Boolean).join(' · ')}</div>` : ''}
    <div class="proj-desc">${p.description}</div>
  </div>
  <div class="proj-imgs">
    <div class="proj-img-main" style="position: relative;">
      ${p.images[0] && (p.images[0].includes('foer') || p.images[0].includes('før')) ? `<div class="before-badge">Før</div>` : ''}
      <img src="${p.img0}" />
    </div>
    <div class="proj-img-row">
      ${p.img1 ? `<div>
        ${p.images[1] && (p.images[1].includes('foer') || p.images[1].includes('før')) ? `<div class="before-badge">Før</div>` : ''}
        <img src="${p.img1}" />
      </div>` : ''}
      ${p.img2 ? `<div>
        ${p.images[2] && (p.images[2].includes('foer') || p.images[2].includes('før')) ? `<div class="before-badge">Før</div>` : ''}
        <img src="${p.img2}" />
      </div>` : ''}
      ${p.img3 ? `<div>
        ${p.images[3] && (p.images[3].includes('foer') || p.images[3].includes('før')) ? `<div class="before-badge">Før</div>` : ''}
        <img src="${p.img3}" />
      </div>` : ''}
    </div>
  </div>
  <div class="proj-page-num">${p.pageNumber}</div>
</div>
`;

  if (p.galleryPages && p.galleryPages.length > 0) {
    p.galleryPages.forEach((gp) => {
      const numImages = gp.images.length;
      let gridStyles = '';
      
      if (numImages > 9) {
        gridStyles = `grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(4, 1fr);`;
      } else if (numImages > 6) {
        gridStyles = `grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(3, 1fr);`;
      } else if (numImages > 4) {
        gridStyles = `grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(3, 1fr);`;
      } else if (numImages === 4) {
        gridStyles = `grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(2, 1fr);`;
      } else if (numImages === 3) {
        gridStyles = `grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(2, 1fr);`;
      } else if (numImages === 2) {
        gridStyles = `grid-template-columns: repeat(2, 1fr); grid-template-rows: 1fr;`;
      } else if (numImages === 1) {
        gridStyles = `grid-template-columns: 1fr; grid-template-rows: 1fr;`;
      }

      const isEven = gp.physicalPage % 2 === 0;
      const topPadding = isEven ? '11mm 20mm 4mm 14mm' : '11mm 14mm 4mm 20mm';
      const gridMargin = isEven ? '0 20mm 12mm 14mm' : '0 14mm 12mm 20mm';
      htmlBlock += `
<div class="page proj-page ${isEven ? 'page-even' : 'page-odd'}">
  <div class="proj-top" style="padding: ${topPadding};">
    <div class="proj-eyebrow">Projekt ${p.num < 10 ? '0' + p.num : p.num} &nbsp;·&nbsp; ${p.location} (Galleri)</div>
    <div class="proj-title" style="font-size: 16pt; margin-bottom: 0;">${p.title}</div>
  </div>
  <div style="margin: ${gridMargin}; display: grid; ${gridStyles} gap: 2.5mm; flex: 1; min-height: 0;">
    ${gp.images.map((imgSrc, i) => {
      let itemStyle = '';
      if (numImages === 3 && i === 2) {
        itemStyle = 'grid-column: span 2;';
      } else if (numImages === 5 && i === 4) {
        itemStyle = 'grid-column: span 2;';
      } else if (numImages === 7 && i === 6) {
        itemStyle = 'grid-column: span 3;';
      } else if (numImages === 11 && i === 10) {
        itemStyle = 'grid-column: span 2;';
      }
      return `
        <div style="overflow: hidden; height: 100%; ${itemStyle} ${numImages === 1 ? 'background: #f7f6f3; display: flex; align-items: center; justify-content: center;' : ''}">
          <img src="${imgSrc}" style="${numImages === 1 ? 'max-width: 100%; max-height: 100%; object-fit: contain;' : 'width: 100%; height: 100%; object-fit: cover;'} display: block;" />
        </div>
      `;
    }).join('')}
  </div>
  <div class="proj-page-num">${gp.pageNumber}</div>
</div>
`;
    });
  }

  // Render before-images facing page if present
  if (p.beforeImages && p.beforeImages.length > 0) {
    htmlBlock += `
<div class="page proj-page ${p.beforePhysicalPage % 2 === 0 ? 'page-even' : 'page-odd'}">
  <div class="proj-top">
    <div class="proj-eyebrow">Før &nbsp;·&nbsp; ${p.title}</div>
    <div class="proj-title" style="font-size:16pt;">Sådan så det ud før</div>
  </div>
  <div class="proj-imgs">
    <div class="proj-img-main"><img src="${p.bimg0}" /></div>
    <div class="proj-img-row">
      ${p.bimg1 ? `<div><img src="${p.bimg1}" /></div>` : ''}
      ${p.bimg2 ? `<div><img src="${p.bimg2}" /></div>` : ''}
    </div>
  </div>
  <div class="proj-page-num">${p.beforePageNumber}</div>
</div>
`;
  }

  return htmlBlock;
}).join('')}

<!-- BACK COVER -->
<div class="page back ${backCoverPhysicalPage % 2 === 0 ? 'page-even' : 'page-odd'}">
  <img class="back-icon" src="${logoData}" />
  <div class="back-div"></div>
  <div class="back-info">
    <p>📞 29 72 34 27</p>
    <p>cy@yderskov.com</p>
    <p>yderskov.com</p>
    <p>Danserhøj 38, 9700 Brønderslev</p>
  </div>
  <div class="back-cvr">CVR: 39391813</div>
  <div class="back-disclaimer">Der tages forbehold for prisændringer og trykfejl</div>
</div>

</body>
</html>`;

  const tmpPath = path.resolve(`tmp-catalog-${name}-${printFriendly ? 'print' : 'online'}.html`);
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

  if (fs.existsSync('out')) {
    fs.copyFileSync(`public/${pdfFileName}`, `out/${pdfFileName}`);
  }

  await page.close();
  // fs.unlinkSync(tmpPath);

  const size = fs.statSync(`public/${pdfFileName}`).size;
  console.log(`Done generating ${name} (${printFriendly ? 'print' : 'online'})! PDF size: ${(size / 1024 / 1024).toFixed(1)} MB`);
}

try {
  const combinedProjects = [
    ...villaProjects.map((p, idx) => ({ ...p, num: idx + 1, section: 'villaer' })),
    ...tilbygningProjects.map((p, idx) => ({ ...p, num: villaProjects.length + idx + 1, section: 'tilbygninger' })),
    ...sommerhusProjects.map((p, idx) => ({ ...p, num: villaProjects.length + tilbygningProjects.length + idx + 1, section: 'sommerhuse' })),
    ...skitseProjects.map((p, idx) => ({ ...p, num: villaProjects.length + tilbygningProjects.length + sommerhusProjects.length + idx + 1, section: 'skitser' })),
  ];

  const coverSub = 'villaer<br />om- og tilbygninger<br />sommerhuse<br />skitser';

  // Generate online catalog (black back cover)
  await runGenerator('inspiration', 'Inspiration', coverSub, '/images/Lerstien/Frederikshavn-lerstien-terrasse-byview.webp', combinedProjects, false);

  // Generate print-friendly catalog (white back cover)
  await runGenerator('inspiration', 'Inspiration', coverSub, '/images/Lerstien/Frederikshavn-lerstien-terrasse-byview.webp', combinedProjects, true);
} catch (err) {
  console.error('An error occurred during generation:', err);
} finally {
  await browser.close();
  console.log('Browser closed.');
}
