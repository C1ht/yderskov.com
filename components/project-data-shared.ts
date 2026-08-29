export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectGallery {
  eyebrow: string;
  title: string;
  location: string;
  size: string;
  year: string;
  description: string;
  images: ProjectImage[];
  dark: boolean;
  afterLabel?: string;
  beforeLabel?: string;
  beforeImages?: ProjectImage[];
}

export const sommerhuseProjects: ProjectGallery[] = [
  {
    eyebrow: "Projekt",
    title: "Sommerhus med\nstore vinduespartier, Hals.",
    location: "Hals, Nordjylland",
    size: "95 m² fritidshus · stor terrasse",
    year: "2022",
    description: "Dette sommerhus i Hals ligger på en åben lynggrund omgivet af skov. Huset er tegnet med store glaspartier, som lukker masser af dagslys ind og giver et godt kig til naturen. Indvendigt er der åben forbindelse mellem køkkenet og stuen, hvilket giver en lys og luftig rumfornemmelse. De lyse, nordiske materialer skaber en rolig og hyggelig sommerhusstemning, og en stor træterrasse løber hele vejen rundt om huset.",
    images: [
      { src: "/images/Torndalsvej/Hals-Torndalsvej-terrasse.webp", alt: "Terrasse ved sommerhus i Hals — Arkitekttegnestuen Yderskov" },
      { src: "/images/Torndalsvej/Hals-Torndalsvej-køkken.webp", alt: "Køkken i sommerhus i Hals — Arkitekttegnestuen Yderskov" },
      { src: "/images/Torndalsvej/Hals-Torndalsvej-stue.webp", alt: "Stue i sommerhus i Hals — Arkitekttegnestuen Yderskov" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Sommerhus\ntil udsigtsgrund, Løkken.",
    location: "Løkken, Nordjylland",
    size: "110 m² fritidshus · klitgrund",
    year: "2020",
    description: "Dette klassiske, sorte træsommerhus ligger på en åben grund i Løkken med en fantastisk udsigt over det smukke landskab tæt på Vesterhavet. Huset er tegnet, så det tilpasser sig terrænnet. En stor, ugeneret træterrasse smyger sig hele vejen rundt om huset og skaber læfyldte hyggekroge, hvor man kan sidde i læ for vestenvinden. Byggeriet danner de perfekte rammer om den traditionelle og hyggelige danske sommerhusstemning.",
    images: [
      { src: "/images/Løkken sommerhus/Løkken-Alexandravej-sommerhus-indgangsparti.webp", alt: "Indgangsparti ved sommerhus i Løkken — Arkitekttegnestuen Yderskov" },
      { src: "/images/Løkken sommerhus/Løkken-Alexandravej-sommerhus-terrasse.webp", alt: "Terrasse ved sommerhus i Løkken — Arkitekttegnestuen Yderskov" },
      { src: "/images/Løkken sommerhus/Løkken-Alexandravej-sommerhus-sidebygning.webp", alt: "Sidebygning ved sommerhus i Løkken — Arkitekttegnestuen Yderskov" },
    ],
    dark: true,
  },
  {
    eyebrow: "Projekt",
    title: "Sommerhus med\npool, Ålbæk.",
    location: "Ålbæk, Nordjylland",
    size: "185 m² wellness-hus · pool & spa",
    year: "2023",
    description: "Dette store sommerhus i Ålbæk er beklædt med lyst træ og tegnet med fokus på wellness og samvær. Indenfor er der en stor poolafdeling med en swimmingpool, en sauna og et indbygget spabad. Huset rummer desuden et lyst køkken-alrum med en hyggelig hems og et stort aktivitetsrum med billard og bordfodbold til de regnfulde dage. Med flere gode soveværelser og badeværelser er sommerhuset perfekt indrettet til, at en stor familie eller flere generationer kan holde ferie sammen, og det egner sig også rigtig godt til udlejning.",
    images: [
      { src: "/images/Løvevej/Ålbæk-poolhus-terrasse.webp", alt: "Arkitekttegnet poolhus i Ålbæk — Arkitekttegnestuen Yderskov" },
      { src: "/images/Løvevej/Ålbæk-poolhus-pool.webp", alt: "Indendørs pool i arkitekttegnet sommerhus — Arkitekttegnestuen Yderskov" },
      { src: "/images/Løvevej/Ålbæk-poolhus-køkken.webp", alt: "Moderne køkken med ø i poolhus — Arkitekttegnestuen Yderskov" },
      { src: "/images/Løvevej/Løvevej køkken ophold.webp", alt: "Køkken og opholdsstue i poolhus — Arkitekttegnestuen Yderskov" },
      { src: "/images/Løvevej/LØVEVEJ-BAD.webp", alt: "Flot badeværelse i poolhus — Arkitekttegnestuen Yderskov" },
      { src: "/images/Løvevej/Løvevej hems.webp", alt: "Hyggelig hems i poolhus — Arkitekttegnestuen Yderskov" },
      { src: "/images/Løvevej/Ålbæk-poolhus-køkken-spise-plads-alkove.webp", alt: "Køkken, spiseplads og alkove i poolhus — Arkitekttegnestuen Yderskov" },
      { src: "/images/Løvevej/Ålbæk-poolhus-aktivitetsrum.webp", alt: "Aktivitetsrum med bordfodbold og billardbord — Arkitekttegnestuen Yderskov" },
      { src: "/images/Løvevej/Ålbæk-poolhus-badmiljø.webp", alt: "Badmiljø i arkitekttegnet poolhus — Arkitekttegnestuen Yderskov" },
      { src: "/images/Løvevej/Ålbæk-poolhus-toilet.webp", alt: "Badeværelse i arkitekttegnet poolhus — Arkitekttegnestuen Yderskov" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Nyt\nsommerhus, Løkken.",
    location: "Løkken, Nordjylland",
    size: "115 m² fritidshus",
    year: "2024",
    description: "Dette nye sommerhus i Løkken er bygget i en moderne, enkel stil og beklædt med lodrette, mørke trælister. Vi har tegnet huset med store glaspartier, som lader lyset strømme frit igennem rummene og forbinder stuen direkte med haven. En stor træterrasse løber ugeneret langs huset og skaber gode lækroge til de solrige dage. Som en ekstra detalje er der bygget en praktisk, integreret udebruser på terrassen, som er perfekt efter en tur på stranden.",
    images: [
      { src: "/images/Harald Jensens Vej/Løkken-sommerhus-Haraldjensensvej-indkørsel.webp", alt: "Nyt sommerhus i Løkken — Arkitekttegnestuen Yderskov" },
      { src: "/images/Harald Jensens Vej/Løkken-sommerhus-Haraldjensensvej-terrasse.webp", alt: "Terrasse ved sommerhus i Løkken — Arkitekttegnestuen Yderskov" },
      { src: "/images/Harald Jensens Vej/Løkken-sommerhus-Haraldjensensvej--udebruser.webp", alt: "Udebruser ved sommerhus i Løkken — Arkitekttegnestuen Yderskov" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Sommerhus med\nbiopejs, Løkken.",
    location: "Løkken, Nordjylland",
    size: "115 m² fritidshus",
    year: "2024",
    description: "Dette sommerhus i Løkken er tegnet i en lys, nordisk stil med lyse trægulve. Huset har en central mur i midten, der deler stuen og køkkenet op, og heri er der indbygget en hyggelig biopejs, som kan ses fra begge sider. Det lyse egetræskøkken har solide betonbordplader, som giver rummet kant. Fra opholdsrummet er der direkte udgang til en stor træterrasse, hvor vi har monteret en integreret udebruser til at skylle sandet af efter en strandtur. [Læs vores case og se detaljerne om den indbyggede biopejs her](/blog/indbygget-biopejs-sommerhus).",
    images: [
      { src: "/images/Marensvej sommerhus/Sommerhus marensvej grønhøj stue og pejs.webp", alt: "Stue med indbygget biopejs i sommerhus, Løkken — Arkitekttegnestuen Yderskov" },
      { src: "/images/Marensvej sommerhus/Sommerhus marensvej grønhøj køkken.webp", alt: "Køkken i moderne sommerhus, Løkken — Arkitekttegnestuen Yderskov" },
      { src: "/images/Marensvej sommerhus/Sommerhus marensvej grønhøj køkkeborde.webp", alt: "Køkkenø med betonbordplade i sommerhus, Løkken — Arkitekttegnestuen Yderskov" },
      { src: "/images/Marensvej sommerhus/Sommerhus marensvej grønhøj terrasse.webp", alt: "Terrasse ved sommerhus i Løkken — Arkitekttegnestuen Yderskov" },
      { src: "/images/Marensvej sommerhus/Sommerhus marensvej grønhøj terrasse udebrus.webp", alt: "Udebruser på terrasse ved sommerhus, Løkken — Arkitekttegnestuen Yderskov" },
    ],
    dark: true,
  },
  {
    eyebrow: "Projekt",
    title: "Præmieret\nstråtækt sommerhus, Løkken.",
    location: "Løkken, Nordjylland",
    size: "Renovering · tilbygning med badeværelse",
    year: "",
    description: "Dette ældre stråtækte sommerhus uden for Løkken er ovalt i plan og blev i sin tid præmieret for sin særlige form og udtryk. Bygherrerne henvendte sig til Yderskov med ønske om at få huset renoveret og tilbygget med lidt mere plads — og med et rigtigt badeværelse, som huset manglede. Tilbygningen føjer sig ydmygt til husets bløde, organiske linjer, og indvendigt er de buede overflader og det særlige lys bevaret, mens komforten nu er helt i tid med nutiden. Et flot eksempel på, hvordan et præmieret hus kan få nyt liv uden at miste sin karakter.",
    images: [
      { src: "/images/Sommerhus stråtækt Løkken/Løkken-stråtækt-sommerhus-facade.webp", alt: "Ovalt stråtækt sommerhus i Løkken — Arkitekttegnestuen Yderskov" },
      { src: "/images/Sommerhus stråtækt Løkken/Løkken-stråtækt-sommerhus-indgang.webp", alt: "Indgangsparti på renoveret stråtækt sommerhus i Løkken — Arkitekttegnestuen Yderskov" },
      { src: "/images/Sommerhus stråtækt Løkken/Løkken-stråtækt-sommerhus-tilbygning.webp", alt: "Tilbygning til stråtækt sommerhus i Løkken — Arkitekttegnestuen Yderskov" },
      { src: "/images/Sommerhus stråtækt Løkken/Løkken-stråtækt-sommerhus-renovering-isolering.webp", alt: "Renovering med isolering i stråtækt sommerhus, Løkken — Arkitekttegnestuen Yderskov" },
      { src: "/images/Sommerhus stråtækt Løkken/Løkken-stråtækt-sommerhus-tagkonstruktion.webp", alt: "Buet tagkonstruktion i stråtækt sommerhus, Løkken — Arkitekttegnestuen Yderskov" },
      { src: "/images/Sommerhus stråtækt Løkken/Løkken-stråtækt-sommerhus-buet-loft.webp", alt: "Buet loft med halvrundt vindue i stråtækt sommerhus, Løkken — Arkitekttegnestuen Yderskov" },
    ],
    dark: false,
  }
];

export const villaerProjects: ProjectGallery[] = [
  {
    eyebrow: "Projekt",
    title: "Funkis træ,\nglas og eternit, Sæby.",
    location: "Sæby, Nordjylland",
    size: "230 m² bolig · 60 m² garage",
    year: "2023",
    description: "Denne moderne funkisvilla i Sæby er tegnet med fokus på rene linjer, minimal vedligeholdelse og en harmonisk indpasning i den omgivende natur. Beliggende direkte op til et fredeligt skovområde, fungerer husets store glaspartier som levende malerier, der trækker skoven og lyset helt ind i boligens hjerte. Facaden byder på en smuk kontrast mellem varm, lodret træ-listebeklædning, store vinduespartier og hvide eternitplader. Indendørs er alrummet designet med ekstra lofthøjde og akustiklofter, der skaber et behageligt indeklima, mens en stor integreret garage fuldender det stramme, kubistiske funkisudtryk.",
    images: [
      { src: "/images/Karetmagervej/Sæby-ny-villa-funkis-forside.webp", alt: "Funkisvilla i træ, glas og eternit, Sæby — Arkitekttegnestuen Yderskov" },
      { src: "/images/Karetmagervej/Sæby-ny-villa-funkis-haveside.webp", alt: "Haveside på funkisvilla i Sæby — Arkitekttegnestuen Yderskov" },
      { src: "/images/Karetmagervej/Sæby-ny-villa-funkis-vejside.webp", alt: "Vejside på funkisvilla i Sæby — Arkitekttegnestuen Yderskov" },
      { src: "/images/Karetmagervej/Sæby-ny-villa-funkis-køkken.webp", alt: "Køkken i funkisvilla, Sæby — Arkitekttegnestuen Yderskov" },
      { src: "/images/Karetmagervej/Sæby-ny-villa-funkis-køkken-stue.webp", alt: "Køkken mod stue i funkisvilla, Sæby — Arkitekttegnestuen Yderskov" },
      { src: "/images/Karetmagervej/Sæby-ny-villa-funkis-køkken-spiseplads.webp", alt: "Køkken-alrum og spiseplads, Sæby — Arkitekttegnestuen Yderskov" },
      { src: "/images/Karetmagervej/Sæby-ny-villa-funkis-bad.webp", alt: "Badeværelse med fliser, Sæby — Arkitekttegnestuen Yderskov" },
      { src: "/images/Karetmagervej/Sæby-ny-villa-funkis-gang.webp", alt: "Gang med ovenlys, Sæby — Arkitekttegnestuen Yderskov" },
      { src: "/images/Karetmagervej/Sæby-ny-villa-funkis-haveside-2.webp", alt: "Haveside og terrasse, Sæby — Arkitekttegnestuen Yderskov" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Moderne villa\nmed markant tag, Sæby.",
    location: "Sæby, Nordjylland",
    size: "230 m² bolig · 50 m² garage",
    year: "2016",
    description: "Denne elegante vinkelvilla i Sæby er et enestående eksempel på, hvordan klassisk herskabelighed og moderne funktionalitet kan smelte sammen. Det mest markante træk ved huset er det smukke, sortglasserede tegltag, der med sin karakteristiske tagfod har et kinesisk inspireret svej, som giver en unik, svungen tagprofil. Facaden prydes af klassiske, hvide småsprodsede vinduespartier, der skaber et tidløst og herskabeligt udtryk. Store dobbeltdøre åbner op to en solrig fliseterrasse og en stor, grøn have, der danner de perfekte rammer om udelivet.",
    images: [
      { src: "/images/villa sæby/Sæby-ny-villa-kinesisk-tag-haveside.webp", alt: "Moderne villa med kinesisk tag, haveside, Sæby — Arkitekttegnestuen Yderskov" },
      { src: "/images/villa sæby/Sæby-ny-villa-kinesisk-tag-haveside-2.webp", alt: "Moderne villa med kinesisk tag, haveside, Sæby — Arkitekttegnestuen Yderskov" },
      { src: "/images/villa sæby/Sæby-ny-villa-kinesisk-tag-vejside.webp", alt: "Moderne villa med kinesisk tag, vejside, Sæby — Arkitekttegnestuen Yderskov" },
    ],
    dark: true,
  },
  {
    eyebrow: "Projekt",
    title: "Udsigtsvilla med\nnaturlige materialer, Frederikshavn.",
    location: "Frederikshavn, Nordjylland",
    size: "208 m² bolig · 63 m² garage · 37 m² overdækning",
    year: "2021",
    description: "Denne eksklusive udsigtsvilla i Frederikshavn er nænsomt tilpasset en udfordrende, skrånende naturgrund med skrappe myndighedskrav om landskabelig indpasning. Arkitekturen er designet, så villaen nærmest svæver ud over skrænten, hvilket sikrer en storslået panoramaudsigt over byen og Kattegat. Materialevalget tager afsæt i naturens egne toner med fokus på minimal vedligeholdelse, herunder rå beton og varme træelementer. På grund af det markante fald i terrænet er garageanlægget integreret i underetagen under selve boligen, hvilket skaber en optimal udnyttelse af grundens niveauer. Du kan læse mere om indretningen og se billeder af [køkken-alrummet i denne udsigtsvilla i vores blogindlæg](/blog/hvordan-designer-man-et-godt-koekkenrum).",
    images: [
      { src: "/images/Lerstien/Frederikshavn-lerstien-vejside.webp", alt: "Vejside på udsigtsvilla i Frederikshavn — Arkitekttegnestuen Yderskov" },
      { src: "/images/Lerstien/Frederikshavn-lerstien-terrasse-byview.webp", alt: "Udsigtsvilla med terrasse og byudsigt, Frederikshavn — Arkitekttegnestuen Yderskov" },
      { src: "/images/Lerstien/Frederikshavn-lerstien-terrasse.webp", alt: "Terrasse på udsigtsvilla i Frederikshavn — Arkitekttegnestuen Yderskov" },
      { src: "/images/Lerstien/Frederikshavn-lerstien-overdækket-terrasse.webp", alt: "Overdækket terrasse på udsigtsvilla i Frederikshavn — Arkitekttegnestuen Yderskov" },
      { src: "/images/Lerstien/Frederikshavn-lerstien-køkken.webp", alt: "Køkken og opholdsrum, udsigtsvilla i Frederikshavn — Arkitekttegnestuen Yderskov" },
      { src: "/images/Lerstien/Frederikshavn-lerstien-søjle.webp", alt: "Strukturelle detaljer og søjle, udsigtsvilla i Frederikshavn — Arkitekttegnestuen Yderskov" },
      { src: "/images/Lerstien/Frederikshavn-lerstien-terrasse-2.webp", alt: "Terrasse og facade, udsigtsvilla i Frederikshavn — Arkitekttegnestuen Yderskov" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Funkisvilla nær\nHammer Bakker.",
    location: "Vestbjerg, Nordjylland",
    size: "205 m² bolig · 70 m² garage · 6 m² overdækning",
    year: "",
    description: "Denne store funkisvilla i Vestbjerg er tilpasset en skrående grund med en flot udsigt over det åbne naturlandskab. Vi har tegnet huset med store skydedøre i glas, som gør det nemt at trække dagslyset og naturen helt ind i opholdsrummene. Familien er glade for hunde, og derfor har vi indrettet et praktisk bryggers med en indbygget hundevaskeplads i gulvniveau, så hunden nemt kan vaskes efter en gåtur. [Læs om hundevaskepladsen her](/blog/hundevaskeplads-vestbjerg) og se [indretningen af den tilhørende garage her](/blog/funkisvilla-vestbjerg-garage).",
    images: [
      { src: "/images/Højgården/Vestsbjerg-ny-funkisvilla-haveside.webp", alt: "Funkisvilla nær Hammer Bakker, haveside, Vestbjerg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Højgården/Vestsbjerg-ny-funkisvilla-indgangsparti.webp", alt: "Indgangsparti på funkisvilla i Vestbjerg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Højgården/Vestsbjerg-ny-funkisvilla-vejside.webp", alt: "Funkisvilla nær Hammer Bakker, vejside, Vestbjerg — Arkitekttegnestuen Yderskov" },
    ],
    dark: true,
  },
  {
    eyebrow: "Projekt",
    title: "Klassisk\nvilla, Hjørring.",
    location: "Hjørring, Nordjylland",
    size: "215 m² bolig · 42 m² garage",
    year: "2022",
    description: "Denne klassiske villa i Hjørring er opført i tråd med den klassiske danske byggestil, hvor der er lagt vægt på et traditionelt og tidløst formsprog samt eksklusive, robuste materialer med lang levetid. Villaen er placeret i et etableret villakvarter med god forbindelse til naturen og optimal udnyttelse af dagslyset. Bygherren ønskede en bolig, der forener et roligt ydre med moderne funktionalitet og store, lyse opholdsrum. Huset danner rammen om et ugeneret og læfyldt gårdhavemiljø, som forlænger stuen og køkken-alrummet ud under åben himmel. Du kan læse mere om arkitekturen bag et hyggeligt uderum i vores [guide to at designe en funktionel gårdhave](/blog/gaardhave).",
    images: [
      { src: "/images/Gartnerhaven/Hjørring-garnterhaven-ny-villa.webp", alt: "Klassisk ny villa i Hjørring — Arkitekttegnestuen Yderskov" },
      { src: "/images/Gartnerhaven/Hjørring-gartnehaven-ny-villa-haveside.webp", alt: "Haveside på klassisk villa i Hjørring — Arkitekttegnestuen Yderskov" },
      { src: "/images/Gartnerhaven/Hjørring-gartnerhaven-indkørsel.webp", alt: "Indkørsel til klassisk villa i Hjørring — Arkitekttegnestuen Yderskov" },
      { src: "/images/Gartnerhaven/Hjørring-gartnerhaven-ny-villa-gårdmiljø.webp", alt: "Gårdmiljø ved klassisk villa i Hjørring — Arkitekttegnestuen Yderskov" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Villa med\nensidig taghældning, Vestbjerg.",
    location: "Vestbjerg, Nordjylland",
    size: "190 m² bolig · 55 m² garage · 22 m² overdækning",
    year: "2023",
    description: "Denne moderne villa i Vestbjerg er tegnet med et ensidigt skråt tag (ensidig taghældning), som giver rigtig god lofthøjde og masser af dagslys i de store rum. Huset er bygget op i praktiske fløje, der deler boligen op i en separat børneafdeling og en forældreafdeling, med køkken-alrummet i midten som det naturlige samlingspunkt. Stuens store glaspartier og brede skydedøre gør det nemt at gå direkte ud på den overdækkede terrasse, der fungerer som en hyggelig udestue om sommeren. [Læs mere om hvordan vi skaber overgangen mellem ude og inde her](/blog/overgang-mellem-ude-og-inde).",
    images: [
      { src: "/images/Hanebjælken/Vestbjerg-Hanebjælken-ny-villa-haveside.webp", alt: "Villa med ensidig taghældning, haveside, Vestbjerg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Hanebjælken/Vestbjerg-Hanebjælken-ny-villa-overdækket-terrasse.webp", alt: "Overdækket terrasse på villa i Vestbjerg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Hanebjælken/Vestbjerg-Hanebjælken-ny-villa-værelsesfløj.webp", alt: "Værelsesfløj på villa med ensidig taghældning, Vestbjerg — Arkitekttegnestuen Yderskov" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Engelsk villa\ni colonial-stil, Aalborg.",
    location: "Aalborg, Nordjylland",
    size: "430 m² herskabelig bolig",
    year: "2023",
    description: "Denne store villa i Aalborg er opført for et dansk par, der var vendt hjem til Danmark efter at have boet i USA. De ønskede en bolig inspireret af den klassiske, amerikanske byggestil (colonial-stil). Villaen er bygget med en rød murstensfacade, hvide gesimser, søjler ved indgangspartiet og mørke sprossede vinduer, og i forhaven vokser der frodige vinranker. Indendørs er der en stor hall med en flot, svungen trappe og sildebensparket. Huset rummer desuden hyggelige stuer ensuite og egen hjemmebiograf.",
    images: [
      { src: "/images/Ikarosvej/Aalborg-Ikarosvej-ny-villa-indkørsel.webp", alt: "Engelsk villa i colonial-stil, indkørsel, Aalborg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Ikarosvej/Ikarosvej facade.webp", alt: "Engelsk villa i colonial-stil, facade, Aalborg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Ikarosvej/Ikarosvej forhave med vin.webp", alt: "Forhave ved engelsk villa i colonial-stil, Aalborg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Ikarosvej/ikarosvej facade mod have.webp", alt: "Haveside på engelsk villa i colonial-stil, Aalborg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Ikarosvej/ikarosvej hall.webp", alt: "Hall i engelsk villa i colonial-stil, Aalborg — Arkitekttegnestuen Yderskov" },
    ],
    dark: true,
  },
  {
    eyebrow: "Projekt",
    title: "Engelsk villa\nved fjorden, Aalborg.",
    location: "Nørholm nær Aalborg, Nordjylland",
    size: "350 m² landejendom",
    year: "2024",
    description: "Denne store engelske villa er bygget på a stor hesteejendom tæt på Aalborg, hvor der er en rigtig flot udsigt over Limfjorden. Huset er tegnet til en familie på tre. Parret kom til os med et postkort, der viste deres absolutte drømmebolig, og det blev udgangspunktet for hele byggeriet. Villaen er indrettet med en rummelig hall, et stort og lyst køkken, hyggelige stuer ensuite og flere badeværelser. [Læs hele historien om drømmen om det engelske herresæde her](/blog/villa-herresaede-noerholm-aalborg).",
    images: [
      { src: "/images/Nørholmsvej/Engelsk villa facade mod Nørholmsvej.avif", alt: "Facade på engelsk villa ved fjorden, Nørholm — Arkitekttegnestuen Yderskov" },
      { src: "/images/Nørholmsvej/Engelsk villa på stor plæne.webp", alt: "Engelsk villa ved fjorden på stor plæne, Nørholm — Arkitekttegnestuen Yderskov" },
      { src: "/images/Nørholmsvej/Engelsk villa fra havesiden.webp", alt: "Haveside på engelsk villa ved fjorden, Nørholm — Arkitekttegnestuen Yderskov" },
      { src: "/images/Nørholmsvej/Engelsk villa fra gavl.webp", alt: "Gavl på engelsk villa ved fjorden, Nørholm — Arkitekttegnestuen Yderskov" },
    ],
    dark: false,
  }
];

export const tilbygningerProjects: ProjectGallery[] = [
  {
    eyebrow: "Projekt",
    title: "Ombygning og\nmodernisering af 50er-villa, Brønderslev nær Aalborg.",
    location: "Brønderslev, Nordjylland",
    size: "Komplet ombygning · nyt køkken-alrum",
    year: "2023",
    description: "Denne klassiske 1950'er-villa i Brønderslev har fået en komplet ombygning og modernisering. Huset er forvandlet fra et slidt murstenshus to en moderne, hvidpudset villa med mørke vinduesrammer og store skydedøre, der kan åbnes helt op til haven. Indvendigt har vi åbnet huset op med et lyst køkken-alrum med højt til loftet (loft til kip) og store vinduer. Der er desuden indrettet to moderne badeværelser og fire gode værelser. I det tilhørende anneks (multirum) er der ligeledes lavet et badeværelse samt et lille tekøkken, og der er direkte udgang til en ny, stor træterrasse fra hovedhuset.",
    images: [
      { src: "/images/Godthåbsvej/Brønderslev-ombygning-efter-3.webp", alt: "Haveside med birketræ efter modernisering, Brønderslev — Arkitekttegnestuen Yderskov" },
      { src: "/images/Godthåbsvej/Brønderslev-ombygning-efter-2.webp", alt: "Gårdside med skydedøre efter modernisering, Brønderslev — Arkitekttegnestuen Yderskov" },
      { src: "/images/Godthåbsvej/Brønderslev-ombygning-efter-1.webp", alt: "Indgangsside efter modernisering, Brønderslev — Arkitekttegnestuen Yderskov" },
      { src: "/images/Godthåbsvej/Brønderslev-ombygning-efter-4.webp", alt: "Facade efter modernisering, Brønderslev — Arkitekttegnestuen Yderskov" },
      { src: "/images/Godthåbsvej/Brønderslev-ombygning-efter-køkken.webp", alt: "Nyt køkken efter modernisering, Brønderslev — Arkitekttegnestuen Yderskov" },
    ],
    afterLabel: "Efter ombygning",
    beforeLabel: "Før ombygning",
    beforeImages: [
      { src: "/images/Godthåbsvej/Brønderslev-ombygning-foer-3.webp", alt: "Side med birketræ før modernisering, Brønderslev — Arkitekttegnestuen Yderskov" },
      { src: "/images/Godthåbsvej/Brønderslev-ombygning-foer-2.webp", alt: "Haveside før modernisering, Brønderslev — Arkitekttegnestuen Yderskov" },
      { src: "/images/Godthåbsvej/Brønderslev-ombygning-foer-1.webp", alt: "Indgangsside før modernisering, Brønderslev — Arkitekttegnestuen Yderskov" },
      { src: "/images/Godthåbsvej/Brønderslev-ombygning-foer-4.webp", alt: "Facade før modernisering, Brønderslev — Arkitekttegnestuen Yderskov" },
    ],
    dark: true,
  },
  {
    eyebrow: "Projekt",
    title: "Villa med\ntilbygning, Hasseris i Aalborg.",
    location: "Hasseris, Aalborg",
    size: "45 m² tilbygning · terrasse",
    year: "2021",
    description: "Vi har tegnet en tilbygning på 45 kvadratmeter til en traditionel murstensvilla i Hasseris. For at skabe en flot kontrast til de eksisterende gule mursten, er tilbygningen beklædt med mørkt træ. Bygningen afsluttes med zinkkanter og store hjørnevinduer, der lukker masser af dagslys ind. Indvendigt har familien fået en lys og åben stue med direkte udgang til en ny træterrasse, som forbinder huset med den hyggelige have.",
    images: [
      { src: "/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-terrasse.webp", alt: "Terrasse ved villa med tilbygning i Hasseris i Aalborg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-bagside.webp", alt: "Bagside af villa med tilbygning i Hasseris i Aalborg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-vindue.webp", alt: "Vinduesparti i villa med tilbygning i Hasseris i Aalborg — Arkitekttegnestuen Yderskov" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Tilbygning og\nrenovering, Aalborg.",
    location: "Aalborg, Nordjylland",
    size: "35 m² tilbygning · overdækning",
    year: "2022",
    description: "Med denne tilbygning i Aalborg har vi bygget 35 kvadratmeter til det eksisterende hus for at skabe et ekstra lyst opholdsrum med masser af dagslys. Tilbygningen er udført i lodret træbeklædning med brede beklædningsbrædder, som giver huset et enkelt og moderne udtryk. Vi har tegnet en stor træterrasse i flere niveauer, der trapper naturligt ned til græsplænen. Terrassen forbinder stuen og haven på en praktisk måde, så det er nemt at bruge uderummet i det daglige, når vejret tillader det.",
    images: [
      { src: "/images/Neptunvej/Aalborg-neptunvej-tilbygning-terrasse.webp", alt: "Terrasse ved tilbygning i Aalborg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Neptunvej/Aalborg-neptunvej-tilbygning-terrasse-og-plæne.webp", alt: "Terrasse and plæne ved tilbygning i Aalborg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Neptunvej/Aalborg-neptunvej-tilbygning.haveside.webp", alt: "Haveside ved tilbygning i Aalborg — Arkitekttegnestuen Yderskov" },
    ],
    dark: true,
  },
  {
    eyebrow: "Projekt",
    title: "Ombygning af\neksisterende 70er-villa, Hasseris i Aalborg.",
    location: "Hasseris, Aalborg",
    size: "Facaderenovering · ny planløsning",
    year: "2022",
    description: "Dette projekt i Hasseris er en komplet renovering af en traditionel 1970'er-villa. Den oprindelige mørke facade er blevet pudset hvid og kombineret med lodret, sort træbeklædning og zinkdetaljer, hvilket giver huset et helt nyt liv. Indvendigt har vi ændret planløsningen for at skabe et stort, lyst køkken-alrum med store vinduespartier ud mod haven. Der er desuden opført en stor, ny træterrasse, som gør det nemt at træde direkte ud og nyde haven.",
    images: [
      { src: "/images/Gravenstenvej/Aalborg-gravenstenvej-renovering-vejside.webp", alt: "Vejside efter ombygning af 70er-villa i Hasseris i Aalborg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Gravenstenvej/Aalborg-gravenstenvej-renovering-haveside.webp", alt: "Haveside efter ombygning af 70er-villa i Hasseris i Aalborg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Gravenstenvej/Aalborg-gravenstenvej-renovering-terrassearbejde.webp", alt: "Terrassearbejde ved ombygning i Hasseris i Aalborg — Arkitekttegnestuen Yderskov" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Lille, gammelt parcelhus\nombygget til moderne bolig, Brønderslev nær Aalborg.",
    location: "Brønderslev, Nordjylland",
    size: "Komplet ombygning · energirenovering",
    year: "2023",
    description: "Dette projekt er en stor totalrenovering og modernisering af et ældre parcelhus i Brønderslev. Huset er blevet fuldstændig forvandlet fra et almindeligt murstenshus til en lys, moderne bolig i to etager. Som en helt særlig detalje har huset fået sit eget tårn med siddepladser i toppen, hvorfra der er en fantastisk udsigt over hele området. Renoveringen, som omfatter store glaspartier mod den private baghave, moderne energiløsninger og en flot, grusbelagt indkørsel, er foretaget af [yderskovbygogbolig.dk](https://yderskovbygogbolig.dk). Prøv at sammenligne med 'før-billedet' og se den store forvandling af huset.",
    images: [
      { src: "/images/Emils hus Olufsgade/Brønderslev-olufsgade-efter-vejside.webp", alt: "Vejside efter ombygning i Brønderslev — Arkitekttegnestuen Yderskov" },
      { src: "/images/Emils hus Olufsgade/Brønderslev-olufsgade-efter-indkørsel.webp", alt: "Indkørsel efter ombygning i Brønderslev — Arkitekttegnestuen Yderskov" },
      { src: "/images/Emils hus Olufsgade/Brønderslev-olufsgade-efter-haveside.webp", alt: "Haveside efter ombygning i Brønderslev — Arkitekttegnestuen Yderskov" },
      { src: "/images/Emils hus Olufsgade/Brønderslev-olufsgade-efter-forhave.webp", alt: "Forhave efter ombygning i Brønderslev — Arkitekttegnestuen Yderskov" },
      { src: "/images/Emils hus Olufsgade/Brønderslev-olufsgade-efter-bagside.webp", alt: "Bagside efter ombygning i Brønderslev — Arkitekttegnestuen Yderskov" },
    ],
    afterLabel: "Efter ombygning",
    beforeLabel: "Før ombygning",
    beforeImages: [
      { src: "/images/Emils hus Olufsgade/Brønderslev-olufsgade-foer-vejside.webp", alt: "Vejside før ombygning i Brønderslev — Arkitekttegnestuen Yderskov" },
    ],
    dark: false,
  }
];

export const erhvervProjects: ProjectGallery[] = [
  {
    eyebrow: "Projekt",
    title: "Kontormiljø\nfor IT-virksomhed, Aalborg.",
    location: "Aalborg, Nordjylland",
    size: "320 m² kontor og faciliteter",
    year: "2022",
    description: "Vi har tegnet og indrettet dette åbne kontormiljø for en IT-virksomhed i Aalborg. For at skabe et godt arbejdsmiljø har vi fokuseret på at lukke masser af dagslys ind i alle lokaler. Mødelokaler og kontorer er opdelt med glasvægge, som har fået materede detaljer. Det gør det muligt at holde møder ugeneret og uden indkig, samtidig med at kontoret bevarer sin lyse og åbne rumfornemmelse.",
    images: [
      { src: "/images/Assensvej Kontormiljø/Aalborg-Assensvej-kontormiljø.webp", alt: "Kontormiljø for IT-virksomhed, Aalborg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Assensvej Kontormiljø/Aalborg-Assensvej-kontormiljø-kontor.webp", alt: "Kontor i kontormiljø, Aalborg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Assensvej Kontormiljø/Aalborg-Assensvej-kontormiljø-glasvæg.webp", alt: "Glasvæg i kontormiljø, Aalborg — Arkitekttegnestuen Yderskov" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Fabrik ombygget\ntil lejligheder i bycentrum, Aarhus.",
    location: "Aarhus Centrum",
    size: "1.200 m² (12 lejligheder)",
    year: "2021",
    description: "Da vi overtog projektet, blev den nedlagte fabriksbygning brugt som kostumelager for Aarhus Teater. Vi har bygget den om til 12 moderne og lyse lejligheder i Aarhus centrum. For at bevare bygningens historie og rå stemning, har vi beholdt de gamle rå murstensvægge, de synlige stålspær og de store, industrielle sprossevinduer, som giver et fantastisk lysindfald. Lejlighederne er indrettet enkelt med funktionelle køkkener, der passer godt til stilen. Flere af lejlighederne har fået deres egen private altan, så beboerne kan nyde udelivet midt i byen.",
    images: [
      { src: "/images/Fabrik Aarhus/Aarhus-fabrik-ombygget-køkken-og-altan.webp", alt: "Køkken og altan i ombygget fabrik, Aarhus — Arkitekttegnestuen Yderskov" },
    ],
    afterLabel: "Efter renovering",
    beforeLabel: "Før renovering",
    beforeImages: [
      { src: "/images/Fabrik Aarhus/Aarhus-fabrik-ombygget.webp", alt: "Ombygget fabrik i Aarhus centrum — Arkitekttegnestuen Yderskov" },
      { src: "/images/Fabrik Aarhus/Aarhus-fabrik-ombygget-lejligheder.webp", alt: "Fabrik ombygget til lejligheder i Aarhus — Arkitekttegnestuen Yderskov" },
    ],
    dark: true,
  },
  {
    eyebrow: "Projekt",
    title: "Udlejningsboliger,\nHals.",
    location: "Hals, Nordjylland",
    size: "6 boliger á 85-95 m²",
    year: "2023",
    description: "Vi har tegnet flere nye rækkehuse som udlejningsboliger i Hals. Husene er opført i gode materialer, der kræver minimal vedligeholdelse, med en flot kombination af lyse mursten og lodret, mørkt træværk. Hver bolig har sit eget indgangsparti, en lille nem og privat have samt en rigtig god indretning på 85-95 kvadratmeter. Boligerne er tegnet, så de udnytter dagslyset bedst muligt og henvender sig bredt til både yngre og ældre lejere.",
    images: [
      { src: "/images/Hals Rækkehuse/Hals-Aalborgvej20-udlejning-indgangsparti.webp", alt: "Indgangsparti, udlejningsboliger i Hals — Arkitekttegnestuen Yderskov" },
      { src: "/images/Hals Rækkehuse/Hals-Aalborgvej30-udlejning-.webp", alt: "Udlejningsbolig, Hals — Arkitekttegnestuen Yderskov" },
      { src: "/images/Hals Rækkehuse/Hals-Aalborgvej40-udlejning-.webp", alt: "Udlejningsbolig, Hals — Arkitekttegnestuen Yderskov" },
    ],
    dark: false,
  },
];
