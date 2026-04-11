export type Section = { heading: string; paragraphs: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  date: string;
  cat: string;
  catKey: string;
  lead: string;
  sections: Section[];
};

export const posts: BlogPost[] = [
  {
    slug: "velegnet-byggegrund",
    metaTitle: "Hvordan vurderer man om en byggegrund er velegnet? — Yderskov Arkitekter",
    title: "Hvordan vurderer man om en byggegrund er velegnet?",
    description: "Ikke alle byggegrunde er skabt ens. Her guider vi dig gennem de vigtigste faktorer — og forklarer hvordan en arkitekt kan vejlede dig til det rigtige valg.",
    date: "09 / 04 / 2026",
    cat: "Grund & placering",
    catKey: "grund",
    lead: "Valget af byggegrund er en af de vigtigste beslutninger i hele byggeprocessen. En velegnet byggegrund giver dig de bedste betingelser for at bygge en villa der passer til dine ønsker — og en arkitekt kan vejlede dig allerede inden du skriver under.",
    sections: [
      {
        heading: "Hvad gør en byggegrund velegnet?",
        paragraphs: [
          "En velegnet byggegrund er ikke bare et spørgsmål om kvadratmeter og pris. Det handler om jordbundsforhold, terræn, orientering mod sol og vind, adgangsforhold og ikke mindst hvad lokalplanen tillader at bygge.",
          "En byggegrund med god soleksponering, fast bund og hensigtsmæssig form giver dig frihed til at designe den villa du drømmer om — uden at blive begrænset af grundens egne udfordringer.",
        ],
      },
      {
        heading: "Jordbund og geoteknik",
        paragraphs: [
          "Jordbunden er afgørende for fundamentets pris og kompleksitet. Blød eller fyldig jord kan kræve pæle- eller pladefundament, som hurtigt løber op i ekstra udgifter. En geoteknisk undersøgelse inden køb er altid en god investering.",
          "En arkitekt kan vejlede dig om hvilke undersøgelser der er relevante for netop den byggegrund du overvejer — og hvad resultaterne betyder for dit byggeprojekt.",
        ],
      },
      {
        heading: "Lokalplan og bygningsreglement",
        paragraphs: [
          "Selv om en grund ser perfekt ud, kan lokalplanen begrænse hvad du må bygge. Bebyggelsesprocent, maksimal bygningshøjde, taghældning og facadematerialer kan alle være fastsat i lokalplanen.",
          "Læs altid den gældende lokalplan grundigt inden køb. En arkitekt kan gennemgå den med dig og forklare hvad det konkret betyder for dine byggeplaner.",
        ],
      },
      {
        heading: "Orientering og udsigt",
        paragraphs: [
          "En vel-disponeret villa udnytter sollys og udsigt til det fulde. En sydvendt have og mulighed for store vinduespartier mod det bedste udsyn er kvaliteter der er svære at kompensere for bagefter.",
          "Når du vurderer en byggegrund, bør du besøge den på forskellige tidspunkter af dagen og i forskellige årstider. En arkitekt kan allerede på skitsestadiet vise dig hvordan solen rammer huset henover året.",
        ],
      },
      {
        heading: "Adgangsforhold og infrastruktur",
        paragraphs: [
          "Hvordan er vejadgang til grunden? Er kloak, vand og el tilsluttet eller skal det etableres? Tilslutningsafgifter og anlægsomkostninger kan løbe op og bør med i budgettet fra start.",
        ],
      },
      {
        heading: "Få arkitekten med tidligt",
        paragraphs: [
          "Mange bygherrer venter med at involvere en arkitekt til efter grundkøbet. Men en arkitekt kan vejlede dig allerede i grundsøgningsfasen — og hjælpe dig med at undgå en byggegrund der ser god ud på papir men byder på uventede komplikationer.",
          "Hos Yderskov Arkitekter tilbyder vi et gratis, uforpligtende første møde. Ring eller skriv til os og fortæl om den grund du overvejer.",
        ],
      },
    ],
  },
  {
    slug: "stor-terrasse",
    metaTitle: "Hvordan planlægger man en stor terrasse? — Yderskov Arkitekter",
    title: "Hvordan planlægger man en stor terrasse?",
    description: "En stor terrasse kræver god planlægning for at fungere optimalt. Her gennemgår vi de vigtigste overvejelser — fra placering og materialer til havebyggeri og uderum.",
    date: "02 / 04 / 2026",
    cat: "Villa & boligdesign",
    catKey: "villa",
    lead: "En stor terrasse er mere end et stykke belægning foran huset. Den er et uderum — en forlængelse af boligen der, hvis den planlægges rigtigt, bruges hele sommerhalvåret. Her er de vigtigste overvejelser når du planlægger en stor terrasse.",
    sections: [
      {
        heading: "Terrassen som uderum",
        paragraphs: [
          "Den bedste terrasse er den der føles som en naturlig forlængelse af huset indvendig. Det kræver at størrelse, placering og orientering er tænkt ind fra starten — helst allerede når huset tegnes.",
          "Et uderum fungerer bedst når det er afgrænset på to eller tre sider — af huset, en mur, en hæk eller en pergola. Det giver læ, privatliv og en fornemmelse af rum frem for blot en åben flade.",
        ],
      },
      {
        heading: "Placering og orientering",
        paragraphs: [
          "En sydvendt eller sydvestvendt terrasse giver sol fra midt på dagen til sen eftermiddag — det er typisk der familien samles. En østvendt terrasse er god til morgenmad og formiddagskaffe, mens en vestvendt fanger aftensolen.",
          "En arkitekt kan allerede i skitsefasen vise dig præcis hvordan solen rammer terrassen henover dagen og årstiden — og dermed hjælpe dig med at træffe det rigtige valg.",
        ],
      },
      {
        heading: "Størrelse og zonering",
        paragraphs: [
          "En stor terrasse fungerer bedst når den er opdelt i zoner: en spiseplads, en loungezone og eventuelt en overdækket del til regnvejrsdage. Tre separate områder på hver 15–20 m² giver mere fleksibilitet end én stor åben flade på 50 m².",
          "Tænk også i niveauer. En terrasse i to niveauer — et tæt på huset og et ude i haven — skaber bevægelse og gør uderummet mere interessant at opholde sig i.",
        ],
      },
      {
        heading: "Materialer til havebyggeri",
        paragraphs: [
          "Valget af belægningsmateriale sætter tonen for hele uderummet. Trædæk i hardwood eller komposit er varmt og naturligt — og passer godt til moderne arkitektur. Betonfliser i stort format giver et mere urbant udtryk og er næsten vedligeholdelsesfrit.",
          "Til havebyggeri generelt — mure, trapper, kanter — anbefaler vi at bruge de samme eller beslægtede materialer som på selve terrassen. Det giver helhed og sammenhæng i haven.",
        ],
      },
      {
        heading: "Arkitekt eller havearkitekt?",
        paragraphs: [
          "En arkitekt og en havearkitekt supplerer hinanden godt i et terrasseprojekt. Arkitekten sikrer at terrassen hænger arkitektonisk og konstruktivt sammen med huset — havearkitekten tager sig af beplantning, belysning og de mere havemæssige detaljer.",
          "Hos Yderskov tegner vi terrassen som en integreret del af husprojektet. Vi samarbejder gerne med en havearkitekt om de grønne elementer, men sikrer at det hele fungerer som én helhed.",
        ],
      },
      {
        heading: "Vand på terrassen",
        paragraphs: [
          "Et vandelement løfter en terrasse fra det ordinære til noget der virkelig føles gennemtænkt. Vand tilføjer bevægelse, lyd og refleksioner — og skaber en ro i uderummet som ingen anden detalje kan.",
          "Et spejlbassin er en af de mest effektfulde løsninger. Det behøver ikke være stort — selv et bassin på 60–80 cm i bredden og 5-8 meter i længden kan spejle himlen, husfladen og beplantningen og give terrassen en helt særlig karakter. Vandoverfladen skal ligge præcist i niveau for at spejleffekten virker optimalt, så det kræver omhyggelig udførelse.",
          "Indramningen af bassinet er afgørende for det samlede udtryk. Rustent cortentstål — også kaldet weathering steel — er et populært valg. Det orange-brune patina er levende og forandrer sig over tid, og materialet holder i årtier uden vedligeholdelse. Cortenstål som kant giver et industrielt, råt modspil til vandets blødhed og til eventuelle bløde beplantningselementer rundt om terrassen.",
          "En betonkant er et andet stærkt alternativ — særligt i et hus med moderne, minimalistisk arkitektur. Støbt beton i flush-niveau med terrassedækket giver et rent og næsten usynligt udtryk, hvor bassinet synes at ligge direkte i belægningen. Her er det materialevalget på selve terrassen der bestemmer om beton eller cortenstål passer bedst.",
          "Tænk vandbassinets placering ind tidligt i projektet — det kræver afløb, overløb og eventuelt teknisk rum til pumpe og filter. En arkitekt sikrer at det løses rigtigt fra starten, så det ikke bliver en dyr eftermontering.",
        ],
      },
      {
        heading: "Overdækning og læ",
        paragraphs: [
          "Et fast udhæng over terrassen — integreret i husets tag — er den bedste og mest holdbare løsning. Det giver læ for regn og sol, og gør terrassen brugbar langt flere dage om året.",
          "Pergola, markise og sejl er gode alternativer hvis huset ikke er tegnet med udhæng fra starten. En havearkitekt kan hjælpe med at vælge den løsning der passer bedst til din have og dit hus.",
        ],
      },
    ],
  },
  {
    slug: "skraanende-grund",
    metaTitle: "Hvordan udnytter man en skrånende grund? — Yderskov Arkitekter",
    title: "Hvordan udnytter man en skrånende grund?",
    description: "En skrånende grund er ikke en ulempe — den er en arkitektonisk mulighed. Her gennemgår vi hvordan niveauer, trin og trappe kan skabe et hus med helt særlig karakter.",
    date: "07 / 02 / 2026",
    cat: "Grund & placering",
    catKey: "grund",
    lead: "Mange bygherrer ser en skrånende grund som en udfordring. En erfaren arkitekt ser den som en mulighed. Terrænforskelle giver anledning til en opbygning med forskudte niveauer, spændende rumforløb og udsyn der er svært at opnå på en flad grund. Her er det du skal vide om at bygge på skrå.",
    sections: [
      {
        heading: "Skråningen som arkitektonisk ressource",
        paragraphs: [
          "En skrånende grund tvinger arkitekten til at tænke i tre dimensioner fra første skitse. I stedet for et hus der blot ligger på terrænet, opstår der mulighed for et hus der følger skråningen — delvist nedgravet i bakkesiden, med terrasser i flere niveauer og vinduer der udnytter det frie udsyn på tværs af terrænet.",
          "Resultatet kan blive et hjem med en rumlig kompleksitet og en forbindelse til landskabet som et hus på flad grund sjældent opnår. Det kræver dog en arkitekt der forstår at arbejde med terrænet frem for imod det.",
        ],
      },
      {
        heading: "Opbygning — split-level og forskudte niveauer",
        paragraphs: [
          "Den klassiske løsning på en skrånende grund er split-level-opbygningen: huset er inddelt i to eller flere niveauer der forskydes et halvt etageplan ad gangen i takt med terrænet. I stedet for en fuld trappe fra stue til etage er der blot fire til seks trin mellem hvert niveau. Parterreplanen — det niveau der ligger i direkte kontakt med terrænet — forskydes dermed i takt med skråningen og kan åbne sig mod haven i flere retninger på én gang.",
          "Denne opbygning giver huset et naturligt flow — man bevæger sig gradvist op eller ned gennem huset i takt med at funktionerne skifter. Det skaber variation og dynamik i planløsningen uden at huset føles som et traditionelt to-etagers hus.",
        ],
      },
      {
        heading: "Hvilke rum hører til i det lavestliggende niveau?",
        paragraphs: [
          "Det nedre niveau — det der er delvist nedgravet i bakken — egner sig bedst til rum der ikke kræver meget dagslys, eller som tjener en mere praktisk funktion. Bryggers, teknikrum, garage, hobbyrum, hjemmebiograf eller et ekstra soveværelse til gæster er alle oplagte kandidater.",
          "Det nedre niveau holder naturligt en jævn og kølig temperatur hele året, hvilket også gør det velegnet til vinkælder eller opbevaringsrum. Med lyskasser eller nedsænkede terrasser kan man trække dagslys ind selv i de lavestliggende rum.",
        ],
      },
      {
        heading: "Hvilke rum hører til i toppen?",
        paragraphs: [
          "Det øvre niveau er reserveret til de rum der vinder mest ved udsyn, lys og forbindelsen til omgivelserne. Stue, køkken og spiseplads placeres højest — her er udsigten bedst og lyset friest. En generøs terrasse i direkte forlængelse af stuerummet er næsten altid en del af løsningen.",
          "Soveværelser kan med fordel placeres et niveau under stuen — lidt tilbage i bakken, lidt mere privat og roligt. Det giver en naturlig adskillelse af dag- og nattezone som mange oplever som en stor kvalitet i hverdagen.",
        ],
      },
      {
        heading: "Trin og trappe som designelement",
        paragraphs: [
          "På en skrånende grund bliver trin og trappe en gennemgående del af arkitekturen — både inde og ude. Udvendige trin i beton, natursten eller træ forbinder terrasserne og følger terrænet ned mod haven. Indvendigt er trappen ikke bare en praktisk forbindelse mellem niveauerne, men et rum i sig selv.",
          "En åben trappe med brede trin, solid håndliste og godt lys fra oven kan blive husets mest karakteristiske indre element. Her er det værd at investere i materialer og detaljer — det er den detalje besøgende bemærker og husker.",
        ],
      },
      {
        heading: "Fundament og jordarbejde",
        paragraphs: [
          "En skrånende grund kræver mere jordarbejde og et mere komplekst fundament end en flad grund. Afhængigt af skråningsmønstret kan der være behov for støttemure, pilotering eller et fundament der trappes ned ad bakken i takt med terrænet.",
          "Det er vigtigt at få en geoteknisk rapport inden projektering — og at en arkitekt koordinerer tæt med konstruktøren om funderingsløsningen. Det er her de uventede udgifter opstår hvis man ikke er grundig fra starten. Derfor er det altid vigtigt at rådføre sig med en arkitekt i forbindelse med byggeri på en skrånende grund.",
        ],
      },
    ],
  },
  {
    slug: "boligdetalje-hems",
    metaTitle: "Boligdetalje #1: Hemsen — Yderskov Arkitekter",
    title: "Boligdetalje #1: Hemsen — sådan planlægger du en hems i dit arkitekttegnede hus.",
    description: "En hems er en af de mest karakteristiske detaljer i et arkitekttegnet hus. Her gennemgår vi hvordan du planlægger den rigtigt — fra rumhøjde og konstruktion til lys og adgang.",
    date: "31 / 01 / 2026",
    cat: "Villa & boligdesign",
    catKey: "villa",
    lead: "En hems er én af de arkitektoniske detaljer der med det samme fortæller at et hus er tegnet af en arkitekt. Den udnytter rummets fulde højde, skaber et intimt rum-i-rum og giver huset en karakter som ingen standardløsning kan kopiere. Men en hems kræver omtanke fra starten — her er det du skal vide.",
    sections: [
      {
        heading: "Hvad er en hems?",
        paragraphs: [
          "En hems er et hævet platform eller mellemstokværk der er bygget ind i et rum med tilstrækkelig loftshøjde. Den kan bruges som soveplads, læsehjørne, arbejdsrum, legeområde for børn eller blot som et visuelt element der giver rummet dybde og spænding. På 4,5 m² er der plads til det der virkelig betyder noget — en hvilestol og en stak bøger, en stjernekikkert vendt mod et stort gavlvindue eller et skråvindue og en mørk aftenhimmel, eller en ekstra soveplads til gæster og børn der vil sove højt og tæt på loftet. Sidst men ikke mindst kan en hems også udgøre rum til ekstra opbevaring i det lille hus — f.eks. til vintertøj, kufferter, hynder til havemøbler m.v.",
          "Det, der adskiller hemsen fra en almindelig etage, er dens åbenhed mod rummet nedenunder. En hems er ikke lukket inde — den er en del af det store rum og bidrager til en oplevelse af højde og volumen som er svær at opnå på anden vis.",
        ],
      },
      {
        heading: "Rumhøjde — det afgørende krav",
        paragraphs: [
          "En hems kræver som minimum en loftshøjde på omkring 4,5 meter for at fungere komfortabelt. Under hemsen skal der være minimum 2,2 meter til at stå oprejst — og over hemsen bør der være mindst 1,6 til 1,8 meter for at man kan sidde eller ligge uden at føle sig klemt.",
          "Disse krav bestemmer meget tidligt i projektet om en hems er realistisk. Det er en af grundene til at en arkitekt bør tænke hemsen ind allerede ved første skitse — ikke tilføje den bagefter, når rummets proportioner er låst fast.",
          "Bemærk desuden at en hems ifølge bygningsreglementet må have et areal på maksimalt 4,5 m² for at være lovlig uden at tælle med som en selvstændig etage. En arkitekt kender reglerne og sikrer, at hemsen projekteres korrekt i forhold til byggetilladelsen.",
        ],
      },
      {
        heading: "Konstruktion og bærende princip",
        paragraphs: [
          "En hems kan udføres i stål, træ eller beton — eller en kombination. Stålkonstruktion med trædæk er en af de mest anvendte løsninger: den er slankt, bærer langt uden mellemsøjler og giver et let og industrielt udtryk. En trækonstruktion giver et varmere og mere organisk udtryk og er lettere at integrere i et træbyggeri.",
          "Den bærende konstruktion skal projekteres af en arkitekt i samarbejde med en konstruktør. Det er ikke en detalje man improviserer sig frem til på byggepladsen — bæreevne, nedbøjning og fastgøring til ydervægge skal beregnes præcist.",
        ],
      },
      {
        heading: "Adgang — trappen som designelement",
        paragraphs: [
          "Trappen til hemsen er et af rummets mest synlige elementer — og en oplagt mulighed for at tilføje karakter. En væghængt ståltrappe med åbne trin giver et let og skulpturelt udtryk. En trappe i massivt træ med brede trin er varmere og mere traditionel. En stige i stål eller eg er den mest pladsbesparende løsning og fungerer godt til en hems der bruges til søvn eller leg snarere end dagligt arbejde.",
          "Placeringen af trappen bestemmer rummets flow. En trappe midt i rummet gør hemsen til et synligt omdrejningspunkt — en trappe langs væggen er mere diskret og efterlader gulvfladen fri.",
        ],
      },
      {
        heading: "Lys på og under hemsen",
        paragraphs: [
          "En hems kan skabe skygge i rummet nedenunder hvis den ikke er tænkt ind i lysplanen. Ovenlys direkte over hemsen — enten via et ovenlysvinduer i taget eller et stort vinduesparti i gavlen — er den bedste løsning. Det giver dagslys på selve hemsen og lader lyset trænge ned i rummet langs konstruktionen.",
          "Under hemsen opstår naturligt et mere intimt og lunt rum — perfekt til en sofa, et læsehjørne eller en arbejdsplads. Her fungerer nedhængt pendellys eller indbyggede spots godt til at skabe stemning og adskille zonen visuelt fra resten af rummet.",
        ],
      },
      {
        heading: "Hemsen som boligdetalje der øger værdien",
        paragraphs: [
          "En gennemtænkt hems er ikke blot en praktisk tilføjelse — den er en af de detaljer der giver et hjem identitet og huskes af alle der besøger det. Den fortæller at huset er tegnet med omtanke, at arkitekten har udnyttet rummets fulde potentiale og at der er tænkt i oplevelser snarere end blot kvadratmeter.",
          "Hos Yderskov Arkitekter tegner vi gerne hemsen som en integreret del af husprojektet. Kontakt os for et gratis første møde — og fortæl os om du drømmer om en hems.",
        ],
      },
    ],
  },
  {
    slug: "udekokken",
    metaTitle: "Hvordan planlægger man et udekøkken? — Yderskov Arkitekter",
    title: "Hvordan planlægger man et udekøkken?",
    description: "Et udekøkken forlænger sæsonen og samler familien udenfor. Her gennemgår vi opbygning, materialer, vandtilslutning og alt det andet du skal tage stilling til.",
    date: "24 / 01 / 2026",
    cat: "Villa & boligdesign",
    catKey: "villa",
    lead: "Et udekøkken er en af de tilføjelser til terrassen der virkelig forandrer måden familien bruger haven på. Når grillen, vasken og bordpladen er fast installeret udenfor, rykker hverdagen og festerne naturligt ud i uderummet. Det bedste resultat får du når en arkitekt tænker udekøkkenet ind som en del af den samlede designproces — fra husets første skitse til det færdige terrassemiljø. Her er det du skal tænke over inden du bygger.",
    sections: [
      {
        heading: "Placering på terrassen",
        paragraphs: [
          "Udekøkkenet bør ligge tæt på husets indendørs køkken — helst med direkte adgang via terrassedør. Det gør det nemt at bære mad, service og varer frem og tilbage, og vandtilslutning og afløb er billigere at trække over en kort afstand.",
          "Tænk også over vinden. Grill og bålsted skal placeres så røgen ikke blæser ind mod huset eller over spisepladsen. En arkitekt kan allerede i skitsefasen vise dig den optimale placering i forhold til vindretning, sol og adgang fra huset. En overdækning over udekøkkenet gør det brugbart også på regnvejrsdage og beskytter materialerne mod vejr og vind.",
        ],
      },
      {
        heading: "Opbygning og konstruktion",
        paragraphs: [
          "De fleste udekøkkener opbygges som en fast konstruktion i murværk, beton eller stålramme med beklædning. En fast opbygning holder bedre end modulløsninger og kan skræddersys til præcis den plads og de funktioner du ønsker.",
          "Tænk i arbejdsflow: forberedelse, tilberedning og anretning. Grillen — eller eventuelt et integreret bålsted — placeres i den ene ende, stålvasken i midten og bordpladen til anretning i den anden. Det giver et naturligt flow og gør det rart at arbejde ved.",
        ],
      },
      {
        heading: "Vandtilslutning og afløb",
        paragraphs: [
          "En stålvask i udekøkkenet kræver vandtilslutning og afløb. Det er det tekniske element de fleste undervurderer. Vandledningen skal frostsikres — enten ved at den kan tømmes inden vinteren, eller ved at føres med en varmekabel.",
          "Afløbet skal kobles til kloaksystemet — ikke bare løbe ud på terræn. Få det projekteret rigtigt fra starten, så du undgår at grave op igen bagefter. En arkitekt eller installatør kan hjælpe med at koordinere det med resten af havebyggeriet.",
        ],
      },
      {
        heading: "Bordplade og materialer",
        paragraphs: [
          "Bordpladen i et udekøkken skal tåle sol, frost, varme og fugt. De bedste materialer er granit, porcelænsfliser i stort format eller kompakt laminat beregnet til uderug. Rustfrit stål er hygiejnisk og holdbart men kan blive meget varmt i direkte sol.",
          "Til selve opbygningen fungerer beton og murværk bedst — det holder formen, tåler vejret og kan beklædes med sten, klinker eller cortenstål alt efter det udtryk du ønsker. Havebyggeri i disse materialer kræver håndværksmæssig omhu men holder i årtier. En arkitekt sikrer at materialerne i udekøkkenet spiller sammen med husets facade og terrassens belægning, så det hele fremstår som ét sammenhængende projekt.",
        ],
      },
      {
        heading: "Grill, bålsted og varme",
        paragraphs: [
          "En integreret grill — gas eller kul — er omdrejningspunktet i de fleste udekøkkener. Et indbygget bålsted ved siden af tilføjer en anden dimension: hygge, lys og varme til de køligere aftener, og mulighed for at samle familien om ilden efter maden.",
          "Bålstedet skal bygges i ildfast materiale og have ordentlig trækkanal. Placer det så røgen stiger væk fra siddepladserne. Kombiner det gerne med en overdækning der beskytter mod regn men stadig giver tilstrækkeligt frit areal til at røgen kan stige.",
        ],
      },
      {
        heading: "Overdækning over udekøkkenet",
        paragraphs: [
          "En overdækning er næsten uundværlig over et udekøkken. Den beskytter materialerne, gør det muligt at bruge køkkenet i regnvejr og forlænger sæsonen betydeligt. Et fast udhæng integreret i husets tag er den bedste løsning — en selvstændig pergola med tag er et godt alternativ.",
          "Tænk overdækning og belysning sammen. God arbejdsbelysning over bordpladen og vask, og stemningslys over spise- og loungezonerne gør udekøkkenet til et naturligt samlingssted for familien fra foråret til langt ind i oktober. Planlægger du udekøkken i forbindelse med et nyt hus eller en større terrasse, er det oplagt at lade arkitekten designe det hele i én proces — det giver det bedste resultat og er som regel billigere end at tilføje det bagefter.",
        ],
      },
    ],
  },
  {
    slug: "villa-til-familien",
    metaTitle: "Villa til familien — Arkitekt Yderskov",
    title: "Sådan bygger du en villa der passer til familien – også om 20 år.",
    description: "Når du bygger ny villa som børnefamilie, er det fristende at fokusere på behovene her og nu. Men en god arkitekt tænker også 10 og 20 år frem.",
    date: "16 / 01 / 2026",
    cat: "Villa & boligdesign",
    catKey: "villa",
    lead: "Når du bygger ny villa som børnefamilie, er det fristende at fokusere på behovene her og nu. Men en god arkitekt tænker også 10 og 20 år frem. For familien forandrer sig – og huset bør kunne følge med.",
    sections: [
      { heading: "Tænk i afdelinger", paragraphs: ["En af de smarteste løsninger for børnefamilier er at dele huset i to naturlige afdelinger – en børneafdeling og en voksen-/forældreafdeling – med et centralt fællesrum imellem. Det giver børnene selvstændighed og privatliv i deres del af huset, forældrene ro i deres afdeling og et fælles midtpunkt i form af køkken, alrum og opholdsrum hvor familien samles."] },
      { heading: "Det centrale rum – familiens hjerte", paragraphs: ["Køkken-alrummet er familiens naturlige samlingspunkt. Her laves mad, laves lektier, snakkes og hygges. Vi designer altid dette rum med ekstra omhu – med godt lys, plads til alle og en naturlig forbindelse til haven og terrassen."] },
      { heading: "Multirummet – fremtidens fleksibilitet", paragraphs: ["Et klogt greb er at bygge et såkaldt multirum – et rum der i dag kan bruges som legeværelse, hobbyrum eller gæsteværelse, men som nemt kan omfunktioneres når behovene ændrer sig."] },
      { heading: "Badeværelser – invester i det fra starten", paragraphs: ["Mange børnefamilier nøjes med ét eller to badeværelser. Men morgenkøen er reel – og den bliver ikke bedre når teenagerne kommer til. Vi anbefaler at planlægge med mindst ét badeværelse til børneafdelingen og ét til forældrene fra dag ét."] },
      { heading: "Når børnene flytter hjemmefra", paragraphs: ["Det sker hurtigere end man tror. Og pludselig sidder I med fire soveværelser I ikke bruger. Hvis huset er klogt planlagt kan børneafdelingen omdannes til en udlejningsenhed, en selvstændig lejlighed til bedsteforældre eller et hjemmekontor med eget badeværelse og indgang."] },
      { heading: "Vores erfaring med børnefamilier", paragraphs: ["Hos Arkitekttegnestuen Yderskov har vi hjulpet mange børnefamilier med at bygge huse der fungerer både nu og om 20 år. Vi stiller de rigtige spørgsmål fra starten – så huset passer til jeres liv i dag og kan vokse med jer."] },
    ],
  },
  {
    slug: "villa-seniorer",
    metaTitle: "Fremtidssikr dit hjem — Arkitekt Yderskov",
    title: "Når modne mennesker bygger — sådan fremtidssikrer du dit hjem.",
    description: "Flere og flere danskere over 50 vælger at bygge nyt med arkitekt frem for at renovere. Her deler vi de vigtigste overvejelser om fremtidssikring.",
    date: "09 / 01 / 2026",
    cat: "Villa & boligdesign",
    catKey: "villa",
    lead: "Flere og flere danskere over 50 vælger at bygge nyt frem for at renovere det gamle hus. Det giver en fantastisk mulighed for at skabe præcis det hjem du drømmer om – og bygge det så du kan have glæde af det i rigtig mange år fremover.",
    sections: [
      { heading: "Ét plan – den smarteste løsning", paragraphs: ["Et hus i ét plan er den mest fremtidssikrede løsning. Ingen trapper, ingen niveauforskelle, ingen begrænsninger hvis mobiliteten en dag bliver reduceret. Soveværelse, badeværelse, køkken og opholdsrum er alt sammen tilgængeligt uden at skulle klatre."] },
      { heading: "Trapper – hvis de ikke kan undgås", paragraphs: ["Hvis huset har trapper skal de designes rigtigt fra starten. Det betyder brede trin der er nemme at gå på, ikke for stejl stigning, solid håndliste i begge sider og god belysning."] },
      { heading: "Dørbredder – den detalje de fleste glemmer", paragraphs: ["Standard døråbninger er typisk 72 til 80 cm – og det er for smalt hvis du en dag bruger rollator eller kørestol. Vi anbefaler altid døråbninger på minimum 90 cm i et fremtidssikret hus – særligt til badeværelse, soveværelse og hoveddør. Det koster næsten ingenting ekstra at bygge det rigtigt fra starten."] },
      { heading: "Dørtrin – fjern dem helt", paragraphs: ["Dørtrin og niveauforskelle er en af de mest oversete faldgruber i ældre boliger. I et nyt hus er der ingen grund til at have dem. Vi designer altid niveaufri adgang mellem inde og ude og mellem rummene."] },
      { heading: "Badeværelset – tænk det rigtigt fra starten", paragraphs: ["Badeværelset er det rum der oftest skal ombygges når behovene ændrer sig. Byg det rigtigt fra starten med niveaufri bruseløsning uden brusekabine, plads til at vende rundt med rollator eller kørestol, støttegreb ved toilet og bruser samt brede døre."] },
      { heading: "Køkkenet – ergonomi og komfort", paragraphs: ["Et fremtidssikret køkken har arbejdshøjder der kan justeres, skuffer frem for underskabe der kræver at du knæler, god belysning over arbejdsflader og plads til at bevæge sig frit rundt."] },
      { heading: "Vores erfaring med modne bygherrer", paragraphs: ["Hos Arkitekttegnestuen Yderskov har vi stor erfaring med at hjælpe modne par og singler med at bygge det hus de skal bo i resten af livet. Vi stiller de rigtige spørgsmål – også dem du måske ikke selv har tænkt på endnu."] },
    ],
  },
  {
    slug: "spoergsmaal-og-svar",
    metaTitle: "Spørgsmål og svar fra vores kunder — Yderskov Arkitekter",
    title: "Se svar på mange af de spørgsmål Arkitekttegnestuen Yderskov har fået fra kunder.",
    description: "Gennem årene har vi besvaret tusindvis af spørgsmål fra kunder. Her samler vi de mest stillede spørgsmål – og vores svar.",
    date: "02 / 01 / 2026",
    cat: "Arkitekt & proces",
    catKey: "arkitekt",
    lead: "Gennem årene har vi hos Arkitekttegnestuen Yderskov besvaret tusindvis af spørgsmål fra kunder. Her samler vi de mest stillede spørgsmål – og vores svar.",
    sections: [
      { heading: "Hvad koster det at bygge med arkitekt?", paragraphs: ["Arkitekttegnet byggeri starter typisk fra ca. 15.000 kr. pr. m². Prisen afhænger af størrelse, materialer og løsning. Vi giver altid et prisoverslag tidligt i forløbet."] },
      { heading: "Er første møde gratis?", paragraphs: ["Ja – altid. Vi tilbyder et gratis og uforpligtende første møde hvor vi gennemgår dit projekt og dine muligheder. Det gør vi fordi det er vigtigt for os, at vores kunder føler, at de spiller godt sammen med os. Derfor er mødet gratis og uforpligtende."] },
      { heading: "Hvor lang tid tager det?", paragraphs: ["Fra første møde til færdigt byggeri skal du typisk regne med 9 til 15 måneder afhængigt af projektets størrelse og kommunens sagsbehandlingstid, byggeriets kompleksitet, vejrforholdene under byggeperioden m.v."] },
      { heading: "Arbejder I i hele Danmark?", paragraphs: ["Ja – vi hjælper kunder i hele landet. Vi har base i Brønderslev, men kommer altid gerne ud til kunden. Vi har opgaver i hele Jylland og flere i Københavnsområdet."] },
      { heading: "Kan I hjælpe med byggetilladelse?", paragraphs: ["Ja – vi håndterer hele myndighedsprocessen og kommunikerer direkte med kommunen på dine vegne."] },
      { heading: "Kan I give fast pris?", paragraphs: ["Ja – vi tilbyder fast pris på hele projektet når arbejdstegningerne er færdige og projektet er fuldt defineret."] },
      { heading: "Arbejder I med typehuse?", paragraphs: ["Nej – vi arbejder udelukkende med unikke løsninger tegnet til den enkelte kunde, grund og økonomi."] },
      { heading: "Hvordan kommer jeg i gang?", paragraphs: ["Ring på 29 72 34 27 eller skriv til cy@yderskov.com. Vi vender tilbage inden 24 timer."] },
    ],
  },
  {
    slug: "arkitekthonorar",
    metaTitle: "Hvad koster en arkitekt — honorar og fast pris — Yderskov Arkitekter",
    title: "Hvad koster en arkitekt — honorar og fast pris?",
    description: "Hvad er forskellen på arkitekthonorar og fast pris? Her forklarer vi forskellen – og hvorfor vi hos Yderskov tilbyder fast pris.",
    date: "22 / 12 / 2025",
    cat: "Arkitekt & proces",
    catKey: "arkitekt",
    lead: "Hvad er forskellen på arkitekthonorar og fast pris? Når du bygger med arkitekt støder du på to forskellige prismodeller. Her forklarer vi forskellen – og hvorfor vi hos Yderskov tilbyder fast pris.",
    sections: [
      {
        heading: "Hvad er arkitekthonorar?",
        paragraphs: [
          "Det traditionelle arkitekthonorar beregnes typisk som en procentdel af byggesummen – ofte 10 til 15 procent. Jo dyrere byggeriet bliver, jo mere betaler du til arkitekten. Det kan give en uheldig incitamentsstruktur.",
          "Derudover betaler du håndværkerne særskilt – og koordineringen mellem arkitekt og håndværkere er dit eget ansvar.",
        ],
      },
      {
        heading: "Hvad betyder fast pris?",
        paragraphs: [
          "Med fast pris kender du den samlede pris på hele projektet før du siger \"ja tak\" – arkitekt, håndværkere og materialer. Der er ingen ubehagelige overraskelser undervejs.",
        ],
      },
      {
        heading: "Hvorfor tilbyder Yderskov fast pris?",
        paragraphs: [
          "Vi mener at du som kunde skal have fuld gennemsigtighed. Når vi kender projektet til bunds kan vi give en fast pris der dækker hele forløbet fra skitse til aflevering. Det giver tryghed og overblik.",
        ],
      },
      {
        heading: "Er fast pris altid muligt?",
        paragraphs: [
          "Fast pris gives typisk efter arbejdstegningerne er færdige og projektet er fuldt defineret. I de tidlige faser arbejder vi med et prisoverslag der løbende præciseres.",
        ],
      },
    ],
  },
  {
    slug: "sommerhus-helarsbrug",
    metaTitle: "Sommerhus til helårsbrug — Arkitekt Yderskov",
    title: "Drømmer du om at bo fast i dit sommerhus?",
    description: "Mange drømmer om et sommerhus til helårsbrug – men hvad siger reglerne? En arkitekt giver dig svaret.",
    date: "25 / 02 / 2025",
    cat: "Sommerhus",
    catKey: "sommerhus",
    lead: "Mange drømmer om et sommerhus der kan bruges hele året – men hvad siger reglerne egentlig? Her giver vi dig svaret.",
    sections: [
      {
        heading: "Sommerhus vs. helårshus",
        paragraphs: [
          "I Danmark skelner man mellem sommerhuse og helårshuse. Et sommerhus må som udgangspunkt kun benyttes til midlertidigt ophold – altså ikke som permanent bolig. Et helårshus må bruges hele året.",
        ],
      },
      {
        heading: "Må jeg ikke bo i mit sommerhus hele året?",
        paragraphs: [
          "Der er visse undtagelser. Pensionister og efterlønsmodtagere må i mange tilfælde bo i deres sommerhus hele året, hvis de har ejet det i mindst ét år. Reglerne varierer dog fra kommune til kommune, så har du planer om at bruge dit sommerhus mere eller mindre permanent, er det en god idé at afstemme med kommunen.",
        ],
      },
      {
        heading: "Kan jeg bruge et sommerhus til helårsbrug?",
        paragraphs: [
          "Ja – og det gør mange. Et godt isoleret sommerhus med varmepumpe og energirigtige vinduer kan bruges komfortabelt hele året selvom det formelt set er et sommerhus. Det er et populært valg hos mange af vores kunder.",
        ],
      },
      {
        heading: "Hvad med byggetilladelse?",
        paragraphs: [
          "Reglerne for at bygge sommerhuse i sommerhusområder er anderledes end for helårshuse. Der er begrænsninger på størrelse, højde og bebyggelsesprocent. Vi kender reglerne og hjælper med at finde den bedste løsning for dig — første møde er gratis.",
        ],
      },
    ],
  },
  {
    slug: "hvordan-vurderer-man-om-en-byggegrund-er-god",
    metaTitle: "Hvordan vurderer man om en byggegrund er god? — Yderskov Arkitekter",
    title: "Hvordan vurderer man om en byggegrund er god?",
    description: "Hvad kigger en arkitekt efter på en byggegrund? Vi gennemgår de vigtigste parametre — fra orientering og terræn til lokalplan og naboforhold.",
    date: "04 / 09 / 2024",
    cat: "Grund & placering",
    catKey: "grund",
    lead: "Ikke alle grunde er skabt ens. Inden der tegnes en eneste streg kigger arkitekten på en lang række parametre — og nogle af dem er ikke indlysende. Her gennemgår vi hvad der kendetegner en god byggegrund.",
    sections: [
      {
        heading: "Orientering og sol",
        paragraphs: [
          "Det første en arkitekt kigger på er grundens orientering i forhold til verdenshjørnerne. En sydvendt have giver sol det meste af dagen og er guld værd for terrasse og opholdszoner. En nordvendt grund er ikke ubrugelig — men den stiller større krav til placering og vinduesarealerne.",
          "En god tommelfingerregel: kig på hvor solen er om eftermiddagen. Dét er typisk der familien opholder sig mest — og dét er der terrassedøren skal vende.",
        ],
      },
      {
        heading: "Terræn og jordbund",
        paragraphs: [
          "Skrånende grunde er ikke nødvendigvis dårlige — de kan skabe mulighed for spændende arkitektur med forskudte niveauer og kælder i terræn. Men de kræver mere projektering og kan betyde ekstra udgifter til fundering og jordarbejde.",
          "Jordbundskvalitet er svær at vurdere uden en geoteknisk rapport. Vi anbefaler altid at bestille én inden køb — særligt på grunde tæt på vand eller tidligere landbrugsarealer.",
        ],
      },
      {
        heading: "Naboforhold og lokalplan",
        paragraphs: [
          "Lokalplanen sætter rammerne for hvad der må bygges: byggehøjde, afstand til skel, tagform, materialevalg. Inden købet bør du læse lokalplanen grundigt — og helst gennemgå den med en arkitekt som kan vurdere hvad den konkret betyder for dit projekt.",
          "Naboforhold handler også om udsigt og privathed. En høj hæk mod vest kan betyde at du mister aftensolen. Tætte naboer mod syd kan kræve at huset placeres anderledes end du forestillede dig.",
        ],
      },
      {
        heading: "Adgang og forsyning",
        paragraphs: [
          "Tjek at grunden har ordentlig vejadgang og at der er tilslutning til kloak, vand og el. På ubebyggede grunde langt fra by kan disse tilslutninger være dyre og langvarige — og det skal med i budgettet.",
        ],
      },
      {
        heading: "Vores vurdering",
        paragraphs: [
          "Hos Yderskov tilbyder vi altid en gratis første vurdering af en byggegrund inden du køber. Det er en times arbejde der kan spare dig for store overraskelser — og give dig en realistisk idé om hvad der kan skabes på netop den grund.",
        ],
      },
    ],
  },
  {
    slug: "hvad-er-fordelene-ved-store-vinduespartier",
    metaTitle: "Hvad er fordelene ved store vinduespartier? — Yderskov Arkitekter",
    title: "Hvad er fordelene ved store vinduespartier?",
    description: "Store vinduespartier giver lys og udsigt — men hvornår giver det bedst mening? Vi gennemgår fordele, overvejelser og arkitektens tilgang.",
    date: "04 / 09 / 2024",
    cat: "Arkitekt & proces",
    catKey: "arkitekt",
    lead: "Store vinduer er et af de arkitektoniske greb der oftest gør den største forskel i en bolig. De ændrer stemningen, forbindelsen til omgivelserne og oplevelsen af rummet — men de kræver omtanke for at virke optimalt.",
    sections: [
      {
        heading: "Lys er boligens vigtigste råmateriale",
        paragraphs: [
          "Dagslys er det der giver en bolig liv. Store sydvendte vinduespartier kan fordoble lysindfaldet i et rum og skabe en helt anden oplevelse af rumhøjde og rumfornemmelse — selv i et hus med relativt lav loftshøjde.",
          "I et arkitekttegnet hus planlægger vi vinduesplaceringen ud fra solens bane hen over grunden. Det betyder at lyset er aktivt — det flyttes med solen og skaber forskellige stemninger morgen, middag og aften.",
        ],
      },
      {
        heading: "Forbindelsen mellem inde og ude",
        paragraphs: [
          "Store glaspartier mod haven eller terrasse giver en visuel og fysisk forbindelse som er svær at erstatte med andre midler. Terrassedøre i fuld højde gør overgangen smidig — man \"åbner\" huset og lader uderummet blive en del af opholdsarealet.",
          "Det er særligt effektivt i forbindelse med en overdækket terrasse, hvor taget videreføres udenfor og skaber en naturlig forlængelse af stuerummet.",
        ],
      },
      {
        heading: "Energi og overophedning",
        paragraphs: [
          "Store sydvendte glaspartier kan give overophedning om sommeren hvis de ikke tænkes ind korrekt. Her spiller udhæng og solafskærmning en vigtig rolle — en korrekt dimensioneret tagkant kan afskærme den høje sommersol mens vintersolens lave vinkel stadig lukkes ind og giver gratis varme.",
          "Moderne energiglas har meget lave U-værdier og er ikke længere en energimæssig ulempe i de fleste tilfælde. Vi dimensionerer altid vinduespartier i forhold til orienteringen og energirammen.",
        ],
      },
      {
        heading: "Privatliv",
        paragraphs: [
          "Store vinduer virker bedst når de vender mod noget — en have, et landskab, vand. Mod vejen eller tætte naboer kræver de en bevidst strategi: højtsiddende vinduer, opakglas, strategisk beplantning eller forskudt placering.",
          "Det er en af de afvejninger vi altid diskuterer i de første skitser — hvad enten det gælder en villa eller et sommerhus.",
        ],
      },
    ],
  },
  {
    slug: "hvordan-designer-man-et-sommerhus-til-udsigtsgrunde",
    metaTitle: "Sommerhus til udsigtsgrund — Arkitekt Yderskov",
    title: "Hvordan designer man et sommerhus til udsigtsgrunde?",
    description: "En udsigtsgrund stiller særlige krav til sommerhusdesignet. Vi gennemgår hvordan arkitekten orienterer huset og skaber balance mellem udsigt og privatliv.",
    date: "04 / 09 / 2024",
    cat: "Sommerhus",
    catKey: "sommerhus",
    lead: "En udsigtsgrund er et privilegium — men også en arkitektonisk opgave. Udsigten skal fanges, lyset skal udnyttes og privatlivet skal bevares. Her gennemgår vi de vigtigste greb når sommerhuset skal orienteres mod vand og natur.",
    sections: [
      {
        heading: "Orienter huset mod udsigten",
        paragraphs: [
          "Det lyder indlysende, men det er ikke altid enkelt. Grunden har en adgangsvej, en form og en orientering der ikke nødvendigvis peger mod det smukkeste udsyn. Arkitektens opgave er at placere huset så de vigtigste opholdsrum — stue, køkken, terrasse — vender mod udsigten, selv om det kræver en mere kompleks planløsning.",
          "I nogle tilfælde betyder det at indgangen er placeret i \"ryggen\" af huset, mens forsiden åbner sig mod vandet. Det kan føles uvant, men skaber til gengæld en stærk oplevelse når man træder ind og ser udsigten for første gang.",
        ],
      },
      {
        heading: "Store glaspartier mod udsigten",
        paragraphs: [
          "Terrænhøjde og afstand til vandet afgør hvad der er nødvendigt. På en højtliggende grund med udsigt over fjorden er det nok med store vinduer i normalhøjde. Tæt ved vandet — eller på en flad grund — kan gulv-til-loft-glas gøre den afgørende forskel.",
          "Vi dimensionerer altid glasarealerne i forhold til energirammen og solorienteringen. Et vestvendt glasparti mod fjorden kan give overophedning om sommeren — her er en markise eller udvendigt solsejl en god investering.",
        ],
      },
      {
        heading: "Terrassens placering og niveau",
        paragraphs: [
          "Terrassen er det rum der bruges mest i et sommerhus — og den skal placeres der hvor udsigten er bedst og vinden er mindst. På skrånende grunde kan en platform i to niveauer løse begge dele: et overdækket niveau tæt på huset og et åbent dæk længere ud mod udsigten.",
          "Materialet er vigtigt. Trædæk i hardwood eller komposit holder sig godt ved vand og hav — og giver et varmt, naturligt udtryk der matcher sommerhusarkitekturen.",
        ],
      },
      {
        heading: "Privatliv uden at miste udsigten",
        paragraphs: [
          "På populære sommerhusgunde er naboerne tæt på. Et sommerhus med store glaspartier mod vandet vender ofte også ud mod naboernes adgangsvej eller terrasse. Her kan en bevidst skel-beplantning, en pergola med klatreplanter eller en afskærmende mur løse problemet uden at lukke for udsigten.",
          "Vi tegner altid sommerhuset i sammenhæng med grunden — og ser på naboforhold, indkig og udsigt som én samlet opgave.",
        ],
      },
    ],
  },
  {
    slug: "valg-af-byggegrund",
    metaTitle: "Valg af byggegrund — Arkitekt Yderskov",
    title: "Valget af grund er en af de vigtigste beslutninger du træffer når du skal bygge villa.",
    description: "Valget af grund er en af de vigtigste beslutninger når du bygger. En arkitekt gennemgår hvad du skal se efter.",
    date: "31 / 08 / 2024",
    cat: "Grund & placering",
    catKey: "grund",
    lead: "Valget af grund er en af de vigtigste beslutninger du træffer når du skal bygge villa.",
    sections: [
      { heading: "Grundens størrelse og form", paragraphs: ["En stor grund giver flere muligheder – men en lille grund kan også udnyttes optimalt med den rette arkitektur. Vi er vant til at arbejde med både store og udfordrende grunde."] },
      { heading: "Orientering og lys", paragraphs: ["Hvordan ligger grunden i forhold til verdenshjørnerne? Sydvendte grunde giver mest sol og lys i huset. Vi designer altid huset så det udnytter lyset bedst muligt."] },
      { heading: "Udsigt og naboer", paragraphs: ["Er der en smuk udsigt der skal udnyttes? Eller er der naboer tæt på der kræver hensyn til privatliv? Det påvirker vinduernes placering og husets orientering."] },
      { heading: "Jordbundsforhold", paragraphs: ["Dårlige jordbundsforhold kan kræve dyrere fundamentløsninger. Vi anbefaler altid at få lavet en jordbundsundersøgelse inden køb."] },
      { heading: "Lokalplan", paragraphs: ["Tjek altid grundens lokalplan inden køb. Den kan have begrænsninger på bygningshøjde, bebyggelsesprocent, facadematerialer og meget mere."] },
      { heading: "Få en arkitekt med på råd", paragraphs: ["Mange af vores kunder kontakter os allerede inden de køber grund – mange gange er vi med ude at se grunden inden køb og det er en rigtig god idé. Vi kan hurtigt vurdere grundens muligheder og begrænsninger."] },
    ],
  },
  {
    slug: "sommerhus-udlejning",
    metaTitle: "Sommerhus til udlejning — Arkitekt Yderskov",
    title: "Sommerhus til udlejning — sådan får du høj belægning hele året.",
    description: "Drømmer du om et sommerhus til udlejning der aldrig står tomt? Arkitekt Yderskov fortæller hvad der driver høj belægning hele året.",
    date: "29 / 08 / 2024",
    cat: "Sommerhus",
    catKey: "sommerhus",
    lead: "Drømmer du om et sommerhus der aldrig står tomt? Så er der én ting du skal vide om det tyske marked – og det handler om badeværelser.",
    sections: [
      {
        heading: "Tyskerne er Danmarks største sommerhuskunder",
        paragraphs: [
          "Tyske familier er en af de største grupper af sommerhuslejere i Danmark – særligt i Nordjylland. De kommer typisk i større grupper hvor flere familier rejser sammen og deler et stort sommerhus.",
        ],
      },
      {
        heading: "Derfor kræver de eget badeværelse",
        paragraphs: [
          "Når to eller tre familier deler et sommerhus er det afgørende for komforten at hver familie har sit eget badeværelse direkte i forbindelse med soveværelset. Det giver privatliv og en fornemmelse af hotelophold og ikke mindst eliminerer det morgenkø – og det er en af de absolut højest prioriterede funktioner for tyske sommerhuslejere.",
        ],
      },
      {
        heading: "Hvad vi har lært af praksis",
        paragraphs: [
          "Hos Arkitekttegnestuen Yderskov har vi netop tegnet et stort udlejningssommerhus med hele seks badeværelser – ét til hvert soveværelse. Erfaringen viser at den slags sommerhuse er meget lettere at leje ud og kan opnå en markant højere lejepris.",
        ],
      },
      {
        heading: "Hvad koster det ekstra?",
        paragraphs: [
          "Et badeværelse pr. soveværelse kræver mere plads og flere VVS-installationer – men investeringen tjener sig hurtigt hjem via højere lejeindtægter og bedre belægning.",
        ],
      },
      {
        heading: "Vil du bygge udlejningssommerhus?",
        paragraphs: [
          "Vi har stor erfaring med arkitekttegnede udlejningssommerhuse og hjælper dig med at planlægge et hus der er optimeret til din udlejning – både funktionelt, æstetisk og økonomisk.",
        ],
      },
    ],
  },
  {
    slug: "tinyhouse",
    metaTitle: "Tinyhouse i Danmark — Arkitekt Yderskov",
    title: "Tinyhouse i Danmark — regler, pris og muligheder.",
    description: "Tinyhouses er populære – men hvad er det egentlig, og er det rette for dig? En arkitekt gennemgår regler og muligheder i Danmark.",
    date: "27 / 08 / 2024",
    cat: "Villa & boligdesign",
    catKey: "villa",
    lead: "Tinyhouses er på alles læber i disse år. Men hvad er et tinyhouse egentlig – og er det den rette løsning for dig?",
    sections: [
      { heading: "Hvad er et tinyhouse?", paragraphs: ["Et tinyhouse er et lille hus – typisk mellem 15 og 50 m² – der er designet til at maksimere funktionalitet på minimal plads. Mange tinyhouses er bygget med fokus på bæredygtighed, enkelhed og lavt energiforbrug."] },
      { heading: "Hvad er fordelene ved et tiny house?", paragraphs: ["Et tinyhouse er billigere at bygge og vedligeholde end et traditionelt hus. Det kræver mindre energi og tvinger dig til at tænke kreativt over hvad du egentlig har brug for. Mange oplever at et tinyhouse giver en friere og mere overskuelig tilværelse."] },
      { heading: "Hvad er ulemperne?", paragraphs: ["Pladsen er naturligvis begrænset. Et tinyhouse er ikke løsningen for en stor familie – men kan være perfekt som sommerhus, gæstehus, atelier eller bolig for en eller to personer."] },
      { heading: "Hvad med reglerne?", paragraphs: ["Et tinyhouse kræver byggetilladelse ligesom alle andre bygninger. Placeringen skal overholde lokalplanens regler. Vi har erfaring med tinyhouses og kender reglerne."] },
      { heading: "Tinyhouse med sedumtag", paragraphs: ["Hos Yderskov har vi tegnet et smukt tinyhouse med sedumtag – et grønt tag der isolerer godt og ser fantastisk ud."] },
    ],
  },
  {
    slug: "tilgaengelig-bolig",
    metaTitle: "Tilgængelig bolig — byg for alle — Arkitekt Yderskov",
    title: "Tilgængelig bolig — sådan bygger eller ombygger du et hjem for alle i familien.",
    description: "En gennemgribende ombygning med arkitekt kan skabe de fysiske rammer der gør det muligt at leve et selvstændigt og værdigt liv.",
    date: "22 / 08 / 2024",
    cat: "Villa & boligdesign",
    catKey: "villa",
    lead: "Når et menneske får et alvorligt handicap opstår der hurtigt et praktisk spørgsmål om boligen. Er det overhovedet muligt at bo her? En gennemgribende ombygning af en almindelig bolig kan i mange tilfælde skabe de fysiske rammer, der gør det muligt at leve et selvstændigt og værdigt liv – i det hjem og det miljø, man kender.",
    sections: [
      {
        heading: "Hvad kræver det?",
        paragraphs: [
          "For mennesker med et betydeligt handicap handler det ikke om enkelte justeringer – det handler om at gentænke boligen fra bunden med tilgængelighed som præmis. Det kan betyde et badeværelse dimensioneret til pleje, med loftslift, plads til to hjælpere, niveaufri bruser og de rette overflader og håndgreb.",
          "Et køkken med hæve-sænke-borde og arbejdsflader der giver mulighed for at fungere siddende i kørestol. Soveværelse og opholdsrum der er indrettet til at en loftslift kan føre fra det ene rum til det andet. Brede døre, frie passager og gulvbelægninger der fungerer for kørestol.",
        ],
      },
      {
        heading: "Værdighed i indretningen",
        paragraphs: [
          "Noget vi lægger stor vægt på er, at løsningerne skal føles som en del af hjemmet – ikke som en medicinsk installation. En loftslift behøver ikke se klinisk ud. Et plejevenligt badeværelse kan godt være smukt.",
          "For mange svært handicappede og deres familier er det afgørende at bo i en bolig der føles normal – ikke som et midlertidigt ophold på en institution. Det er en del af det vi arbejder med.",
        ],
      },
      {
        heading: "Materialer, udstyr og leverandører – vi vejleder",
        paragraphs: [
          "Der er mange valg undervejs, og markedet for hjælpemidler og tilgængeligt udstyr er stort og uoverskueligt. Vi hjælper med at vælge de løsninger der passer til den konkrete situation – loftsskinnesystemer, hæve-sænke-løsninger, badeværelsesudstyr, gulvbelægninger, dørsystemer og meget mere.",
        ],
      },
      {
        heading: "Der er ofte betydelige tilskudsmuligheder",
        paragraphs: [
          "Det er vigtigt at vide, at kommunerne i mange tilfælde er forpligtet til at bidrage til denne type boligindretning. Servicelovens §116 giver mulighed for støtte til nødvendige boligændringer for personer med varigt nedsat fysisk funktionsevne.",
          "Hjælpemidler som loftslifte kan desuden i mange tilfælde bevilges særskilt via kommunen efter Servicelovens §112. Vi hjælper med at kortlægge hvilke muligheder der er relevante i den konkrete situation.",
        ],
      },
      {
        heading: "Start samtalen tidligt",
        paragraphs: [
          "Jo tidligere man involverer en arkitekt, jo bedre. En god plan fra begyndelsen sparer både tid, penge og frustrationer – og sikrer at løsningen holder, også når behovene eventuelt ændrer sig over tid.",
        ],
      },
    ],
  },
  {
    slug: "hvad-er-et-myndighedsprojekt",
    metaTitle: "Hvad er et myndighedsprojekt? — Yderskov Arkitekter",
    title: "Hvad er et myndighedsprojekt?",
    description: "Når du skal bygge nyt eller bygge til, hører du ofte ordet myndighedsprojekt. Her forklarer vi hvad det er og hvorfor det er nødvendigt.",
    date: "20 / 08 / 2024",
    cat: "Arkitekt & proces",
    catKey: "arkitekt",
    lead: "Når du skal bygge nyt eller bygge til, hører du ofte ordet \"myndighedsprojekt\". Men hvad er det egentlig – og hvorfor er det nødvendigt?",
    sections: [
      {
        heading: "Definitionen",
        paragraphs: [
          "Et myndighedsprojekt er den samling af tegninger og dokumenter der skal indsendes til kommunen for at få en byggetilladelse. Det er kommunens grundlag for at vurdere om dit byggeri overholder gældende regler og love.",
        ],
      },
      {
        heading: "Hvad indeholder et myndighedsprojekt?",
        paragraphs: [
          "Et myndighedsprojekt indeholder typisk situationsplan der viser bygningen placeret på grunden, plantegninger der viser rummenes størrelse og placering, facadetegninger der viser bygningens ydre udtryk fra alle sider, snittegninger der viser konstruktionsprincipperne samt en energirammeberegning der dokumenterer bygningens energiforbrug.",
          "Desuden ansøgning om byggetilladelse, evt. ansøgning om nedrivningstilladelse, dispensationsansøgninger og forskellige detailtegninger.",
        ],
      },
      {
        heading: "Hvem må lave det?",
        paragraphs: [
          "Et myndighedsprojekt skal udarbejdes af en person med de rette faglige kompetencer – typisk en arkitekt eller bygningskonstruktør. Hvis ikke kommunen godkender materialet, risikerer man at ansøgningen bliver afvist.",
          "Hos Yderskov har vi mange års erfaring med udarbejdelse af myndighedsprojekter i alle omfang og til alle typer byggerier.",
        ],
      },
      {
        heading: "Hvad sker der efter byggetilladelsen?",
        paragraphs: [
          "Når byggetilladelsen er godkendt kan byggeriet starte. Vi udarbejder herefter detaljerede arbejdstegninger og beskrivelser som håndværkerne bygger efter.",
        ],
      },
    ],
  },
  {
    slug: "byggetilladelse-tilbygning",
    metaTitle: "Byggetilladelse til tilbygning — Yderskov Arkitekter",
    title: "Hvad skal der til for at få en byggetilladelse til en tilbygning?",
    description: "Byggetilladelse kan virke som en jungle af regler. Men det behøver ikke være kompliceret – hvis du har den rette hjælp.",
    date: "18 / 08 / 2024",
    cat: "Arkitekt & proces",
    catKey: "arkitekt",
    lead: "Byggetilladelse kan virke som en jungle af regler og skemaer. Men det behøver ikke være kompliceret – hvis du har den rette hjælp. Her gennemgår vi processen med byggetilladelse trin for trin.",
    sections: [
      {
        heading: "Hvornår kræves byggetilladelse?",
        paragraphs: [
          "De fleste tilbygninger kræver byggetilladelse. Som udgangspunkt skal du søge tilladelse hvis tilbygningen er over 10 m² eller ændrer husets ydre fremtræden. Mindre udhuse og carporte kan i visse tilfælde opføres uden tilladelse – men reglerne varierer fra kommune til kommune.",
        ],
      },
      {
        heading: "Hvad skal ansøgningen indeholde?",
        paragraphs: [
          "En byggeansøgning indeholder typisk situationsplan der viser bygningen på grunden, plantegninger og facadetegninger, redegørelse for konstruktioner og materialer samt dokumentation for at byggeriet overholder lokalplan og bygningsreglement.",
        ],
      },
      {
        heading: "Hvor lang tid tager det at få en byggetilladelse?",
        paragraphs: [
          "Sagsbehandlingstiden varierer fra kommune til kommune – typisk fra 4 til 12 uger. Vi anbefaler altid at søge i god tid inden byggeriet skal starte.",
        ],
      },
      {
        heading: "Hvordan kan Arkitekt Yderskov hjælpe med byggetilladelse?",
        paragraphs: [
          "Hos Arkitekttegnestuen Yderskov håndterer vi hele myndighedsprocessen for dig. Vi udarbejder alle nødvendige tegninger og dokumenter og kommunikerer direkte med kommunen – så du slipper for bøvlet.",
        ],
      },
    ],
  },
  {
    slug: "hvad-er-et-skitseforslag",
    metaTitle: "Arkitektens første streger til dit byggeri — Yderskov Arkitekter",
    title: "Arkitektens første streger til dit byggeri.",
    description: "Når du kontakter Arkitekttegnestuen Yderskov starter vi altid med et skitseforslag. Men hvad er det egentlig – og hvad koster det?",
    date: "15 / 08 / 2024",
    cat: "Arkitekt & proces",
    catKey: "arkitekt",
    lead: "Når du kontakter Arkitekttegnestuen Yderskov starter vi altid med et skitseforslag. Men hvad er det egentlig – og hvad koster det?",
    sections: [
      {
        heading: "Hvad er et skitseforslag?",
        paragraphs: [
          "Et skitseforslag er de første tegninger af dit projekt. Det viser grundlæggende hvordan huset eller tilbygningen kan se ud – planløsning, facade og placering på grunden. Det er ikke detaljerede arbejdstegninger, men et grundlag for at I kan se og diskutere løsningen.",
        ],
      },
      {
        heading: "Hvad indeholder et skitseforslag fra Yderskov?",
        paragraphs: [
          "Vores skitseforslag indeholder plantegning der viser rummenes placering og størrelse, facadetegninger der viser husets ydre udtryk samt et prisoverslag på det samlede projekt.",
        ],
      },
      {
        heading: "Hvad koster et skitseforslag?",
        paragraphs: [
          "Det første møde på tegnestuen er altid gratis. Her fortæller I om jeres ønsker og byggebudget. Her aftaler vi også pris på skitsefasen, som afhænger af projektets størrelse og kompleksitet.",
          "Vi er altid transparente om prisen fra starten og I får et skriftligt tilbud på skitseforslaget kort tid efter mødet.",
        ],
      },
      {
        heading: "Hvorfor er skitsefasen vigtig?",
        paragraphs: [
          "Skitsefasen er en af de store beslutninger. Her besluttes hvordan huset skal se ud. En god skitse sparer tid og penge senere i processen fordi alle er enige om projektets udseende inden vi går videre.",
          "Nogle bygherrere ønsker flere skitser for at have et bredere grundlag at træffe beslutning udfra. Når bygherre har besluttet, hvordan huset skal se ud i fht. skitsen, holder vi møde på tegnestuen om den, inden projektet kan gå videre.",
        ],
      },
    ],
  },
  {
    slug: "hvad-laver-en-arkitekt",
    metaTitle: "Hvad laver en arkitekt udover at tegne huse? — Yderskov Arkitekter",
    title: "Hvad laver en arkitekt udover at tegne huse?",
    description: "Mange ved godt at arkitekter tegner huse – men hvad laver de udover det? Her giver vi et indblik i hvad du får når du hyrer os.",
    date: "13 / 08 / 2024",
    cat: "Arkitekt & proces",
    catKey: "arkitekt",
    lead: "Mange ved godt at arkitekter tegner huse – men hvad laver de egentlig udover det? Her giver vi dig et indblik i hvad du får når du hyrer Arkitekttegnestuen Yderskov.",
    sections: [
      {
        heading: "1. Rådgivning og idéudvikling",
        paragraphs: [
          "Det starter med en samtale. Vi lytter til dine ønsker, ser på grunden og kommer med idéer og løsninger du måske ikke selv havde tænkt på. Det er her de gode projekter starter.",
          "Første møde er altid gratis og uforpligtende hos os. Det er det fordi det er vigtigt, vi \"spiller sammen\" og det får vi en fornemmelse af på første møde.",
        ],
      },
      {
        heading: "2. Skitseforslag",
        paragraphs: [
          "Vi tegner et skitseforslag der viser hvordan huset eller tilbygningen kan se ud. Her kan du se og forholde dig til løsningen inden vi går videre. Nogle bygherrer vil gerne have flere skitser, andre kan beslutte sig allerede efter den første.",
        ],
      },
      {
        heading: "3. Myndighedsprojekt og byggetilladelse",
        paragraphs: [
          "Vi udarbejder alle nødvendige tegninger og dokumenter til kommunen og søger byggetilladelse på dine vegne.",
        ],
      },
      {
        heading: "4. Arbejdstegninger",
        paragraphs: [
          "Når byggetilladelsen er på plads, udarbejder vi detaljerede arbejdstegninger og beskrivelser, som håndværkerne bygger efter.",
        ],
      },
      {
        heading: "5. Styring af byggeri",
        paragraphs: [
          "Hos Yderskov stopper vi ikke ved tegnebordet. Vi har egne håndværkere og styrer hele byggeprocessen – fra første spadestik til aflevering.",
        ],
      },
      {
        heading: "En tryg proces fra start til slut",
        paragraphs: [
          "Du har ét kontaktpunkt gennem hele forløbet. Det giver tryghed, færre fejl og et bedre slutresultat.",
        ],
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
