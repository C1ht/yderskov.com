<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import ExpandableText from '$lib/components/ExpandableText.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	const miniFAQ = [
		{
			q: 'Hvem er Chris Yderskov?',
			a: 'Chris Yderskov er indehaver og arkitekt hos tegnestuen. Han er uddannet fra Byggeteknisk højskole Aalborg og har arbejdet med byggeri siden 2009.'
		},
		{
			q: 'Hvad gør jer anderledes?',
			a: 'Vi tilbyder en komplet løsning med fast pris og egne håndværkere. Du taler altid direkte med arkitekten — ingen mellemled.'
		},
		{
			q: 'Hvilke geografiske områder dækker I?',
			a: 'Vi er baseret i Nordjylland og tegner mange projekter i Aalborg og omegn, men dækker også projekter på Sjælland samt i resten af Danmark.'
		},
		{
			q: 'Hvad er jeres erfaring?',
			a: 'Tegnestuen er grundlagt i 2009 og har gennemført 300+ projekter — villaer, sommerhuse, tilbygninger og erhvervsprojekter.'
		},
		{
			q: 'Er det første møde gratis?',
			a: 'Ja — det første møde er altid gratis og uforpligtende. Vi kommer gerne ud til dig på grunden.'
		},
		{
			q: 'Hvad koster det at bruge jer?',
			a: 'Vi arbejder med faste priser, så du altid kender dine udgifter. Se vores prisside for vejledende priser.'
		}
	];

	const aboutSchema = {
		'@context': 'https://schema.org',
		'@type': 'AboutPage',
		url: 'https://yderskov.com/om',
		mainEntity: {
			'@type': 'ProfessionalService',
			name: 'Yderskov Arkitekter',
			url: 'https://yderskov.com',
			telephone: '+4529723427',
			email: 'cy@yderskov.com',
			foundingDate: '2009',
			address: { '@type': 'PostalAddress', addressCountry: 'DK', addressRegion: 'Nordjylland' },
			areaServed: { '@type': 'Country', name: 'Danmark' }
		}
	};

	const faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: miniFAQ.map((item) => ({
			'@type': 'Question',
			name: item.q,
			acceptedAnswer: { '@type': 'Answer', text: item.a }
		}))
	};
</script>

<svelte:head>
	<title>Arkitekt Nordjylland — Yderskov Tegnestue med fast pris</title>
	<meta
		name="description"
		content="Mød Yderskov Arkitekter. Personlig tegnestue i Nordjylland, der tegner unikke huse til fast pris i Aalborg, på Sjælland & i resten af Danmark."
	/>
	<link rel="canonical" href="https://yderskov.com/om" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="da_DK" />
	<meta property="og:url" content="https://yderskov.com/om" />
	<meta property="og:siteName" content="Yderskov Arkitekter" />
	<meta property="og:image" content="https://yderskov.com/images/Lerstien/Frederikshavn-lerstien-terrasse.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Arkitekt Nordjylland — Yderskov Tegnestue med fast pris" />
	<meta
		name="twitter:description"
		content="Mød Yderskov Arkitekter. Personlig tegnestue i Nordjylland, der tegner unikke huse til fast pris i Aalborg, på Sjælland & i resten af Danmark."
	/>
	<meta name="twitter:image" content="https://yderskov.com/images/Lerstien/Frederikshavn-lerstien-terrasse.webp" />
	{@html `<script type="application/ld+json">${JSON.stringify(aboutSchema).replace(/</g, '\\u003c')}</script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(faqSchema).replace(/</g, '\\u003c')}</script>`}
</svelte:head>

<Breadcrumbs items={[{ label: 'Om' }]} />
<Hero
	slides={[
		{
			src: '/images/Lerstien/Frederikshavn-lerstien-terrasse.webp',
			alt: 'Terrasse på udsigtsvilla i Frederikshavn — Arkitekttegnestuen Yderskov'
		}
	]}
	tag="Om os"
	subtitle="Om os"
	lines={[
		'I har tankerne, vi sætter stregerne.',
		'Byggeri tegnet kun til jer, til jeres grund, jeres ønsker og jeres budget.',
		'Gratis og uforpligtende første idemøde. Vi kommer ud til jer.'
	]}
	italicLines={[1, 2]}
/>

<!-- Intro -->
<section class="s">
	<div class="s-inner">
		<div class="text-2col">
			<div>
				<span class="eyebrow">Arkitekttegnestuen</span>
				<h1 class="sec-hed">Om Arkitekttegnestuen<br />Yderskov</h1>
				<p style="font-size: 1.1rem; font-weight: 200; color: var(--sub); margin-top: 1rem; letter-spacing: -0.01em; line-height: 1.6;">
					— arkitekt med samlet proces og styr på økonomien
				</p>
			</div>
			<div>
				<p class="body-intro">
					Arkitekttegnestuen Yderskov ApS er din lokale <a href="/arkitekt-aalborg" class="text-link">arkitekt i Aalborg</a>, Nordjylland og på Sjælland. Vi har speciale i arkitekttegnede villaer, sommerhuse, tilbygninger og erhvervsprojekter.
				</p>
				<p class="body-p">
					Vi arbejder med en samlet proces fra idé til færdigt byggeri — med egne faste håndværkere og fokus på at holde styr på din økonomi undervejs.
				</p>
				<p class="body-p">
					Tegnestuen blev grundlagt i 2009 og har siden tegnet og bygget projekter i hele Danmark — med særligt fokus på vores nærområde i Aalborg og Nordjylland, samt en voksende portefølje af spændende projekter på Sjælland.
				</p>
				<div class="about-tags">
					<a href="/kontakt" class="tag tag-dark">Kontakt os →</a>
					<a href="/priser" class="tag">Se priser</a>
					<a href="/faq" class="tag">FAQ</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Who are we -->
<section class="s s-off">
	<div class="s-inner">
		<div class="text-2col">
			<div>
				<span class="eyebrow">Baggrund</span>
				<h2 class="sec-hed">Hvem er<br />vi?</h2>
				<p class="body-p">Vi er en mindre tegnestue med fokus på kvalitet og direkte dialog. Hos os taler du altid direkte med arkitekten — ingen mellemled.</p>
				<p class="body-p">Vi tager ansvar for hele processen og sikrer at du altid har overblik over økonomi og fremdrift.</p>
			</div>
			<div class="info-box">
				<p class="info-box-hed">Hvem står bag Arkitekttegnestuen Yderskov?</p>
				<span class="info-box-lbl">Arkitekt</span>
				<ul>
					<li>Chris Yderskov — indehaver og arkitekt</li>
					<li>Uddannet fra Byggeteknisk højskole Aalborg</li>
					<li>Specialiseret i boligbyggeri og erhverv</li>
					<li>Tegnestuen grundlagt i 2009</li>
				</ul>
				<span class="info-box-lbl">Projekter</span>
				<ul>
					<li>Nybyggeri — villaer, sommerhuse, erhverv</li>
					<li>Tilbygninger og ombygninger</li>
					<li>Renovering og energiforbedring</li>
					<li>Special og wellness</li>
				</ul>
				<span class="info-box-lbl">Geografi</span>
				<ul>
					<li>Aalborg &amp; Nordjylland</li>
					<li>Sjælland &amp; København</li>
					<li>Projekter i hele Danmark</li>
					<li>Danserhøj 38, 9700 Brønderslev</li>
				</ul>
				<a href="/kontakt" class="info-box-link">Få en uforpligtende snak</a>
				<p class="info-box-tel">
					<a href="tel:29723427">ring 29 72 34 27</a>
				</p>
			</div>
		</div>
	</div>
</section>

<!-- SEO Section -->
<section class="s s-off" style="border-top: 1px solid var(--border);">
	<div class="s-inner">
		<div class="text-2col">
			<div>
				<span class="eyebrow">Din tegnestue i Nordjylland</span>
				<h2 class="sec-hed" style="font-size: clamp(1.5rem, 3.5vw, 2.2rem); line-height: 1.25;">
					Lokal forankring &amp;<br />landsdækkende rækkevidde
				</h2>
				<p style="font-size: 0.95rem; color: var(--light); margin-top: 1rem;">
					Søger du en kompetent <strong>arkitekt Nordjylland</strong> eller en erfaren <strong>tegnestue Nordjylland</strong>? Vi er altid klar til at drøfte dit næste byggeprojekt.
				</p>
			</div>
			<div>
				<ExpandableText fadeColor="var(--off)">
					<p class="body-p">
						Som en veletableret <strong>tegnestue i Nordjylland</strong> har Yderskov gennem mere end 15 år hjulpet private bygherrer med at realisere deres boligdrømme. Vi har base i Brønderslev, og som <strong>arkitekt Nordjylland</strong> tegner og opfører vi unikke huse i Aalborg, Hjørring, Frederikshavn og i hele den nordjyske region. Vores dybe lokalkendskab til de gældende lokalplaner og de enkelte kommuners byggesagsbehandling sikrer dig en tryg og smidig proces fra de første skitser til det færdige myndighedsprojekt.
					</p>
					<p class="body-p">
						Selvom vi er en stolt nordjysk tegnestue, stopper vores engagement ikke ved Limfjorden. Hos Yderskov ser vi det som en stor styrke, at vi er en yderst fleksibel og fuldt landsdækkende tegnestue. Vi påtager os aktivt opgaver i hele landet, og vi har gennem årene opbygget en stærk portefølje af spændende projekter på Sjælland og i Københavnsområdet. Senest har vi udført opgaver i <strong>Køge, Odsherred, Gilleleje, Brønshøj og Ramløse</strong>. Vi elsker at rejse efter de rette projekter, og geografisk afstand er aldrig en hindring for os. Vi er altid klar til at køre efter opgaverne og mødes med jer direkte på jeres byggegrund for at drøfte mulighederne.
					</p>
					<p class="body-p">
						Når du vælger Yderskov som din foretrukne arkitekt, får du en samarbejdspartner, der tager hånd om hele forløbet fra start til slut. Vi adskiller os fra mange andre traditionelle tegnestuer ved at tilbyde en samlet proces. Det betyder, at vi ikke blot tegner dit hus, men også følger projektet helt til dørs i tæt samarbejde med vores egne faste tømrer- og murerhold. Dette eliminerer de klassiske misforståelser mellem tegnebordet og byggepladsen, hvilket sparer dig for både tid, bekymringer og uforudsete udgifter. Dertil arbejder vi med en fast pris, som sikrer fuldstændig økonomisk gennemsigtighed gennem hele projektet.
					</p>
					<p class="body-p">
						Hvad enten du drømmer om en moderne, lys funkisvilla med panoramaudsigt, et klassisk sommerhus i pagt med naturen eller en gennemtænkt tilbygning, der giver jeres eksisterende bolig den plads, I mangler, står vi klar til at hjælpe. Vi tror på den tætte og direkte personlige dialog. Hos os taler du som bygherre altid direkte med arkitekten gennem alle byggeriets faser, så der aldrig opstår tvivl om dine ønsker. Uanset om dit byggeprojekt er placeret i Nordjylland, i Trekantområdet, på Sjælland eller i Storkøbenhavn, bringer vi vores erfaring, fleksibilitet og faglige stolthed i spil for at skabe det perfekte hjem til dig.
					</p>
				</ExpandableText>
			</div>
		</div>
	</div>
</section>

<!-- Our approach -->
<section class="s">
	<div class="s-inner">
		<div class="text-2col">
			<div>
				<span class="eyebrow">Vores tilgang</span>
				<h2 class="sec-hed">Et hus tegnet<br />til dig og din grund.</h2>
			</div>
			<div>
				<p class="body-p">
					Byggerier kan hurtigt blive dyre hvis der ikke er styr på processen fra start. Vi har set det mange gange: urealistiske budgetter, ufuldstændige tegninger og manglende koordinering.
				</p>
				<p class="body-p">
					Hos os starter vi med at forstå jeres ønsker og budget. Derefter tegner vi et hus der passer til grunden — og holder prisen fra første dag.
				</p>
				<p class="body-p">
					Med egne håndværkere har vi fuld kontrol over kvalitet og fremdrift. Det er én samtalepartner fra idé til indflytning.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Mini FAQ -->
<section class="s">
	<div class="s-inner">
		<span class="eyebrow">Spørgsmål og svar</span>
		<h2 class="sec-hed">Om tegnestuen</h2>
		<div class="faq-grid">
			{#each miniFAQ as item, i (i)}
				<div class="faq-item">
					<p class="faq-q">{item.q}</p>
					<p class="faq-a">{item.a}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<CtaBand />

<!-- Contact -->
<section class="s form-bg" id="kontakt">
	<div class="s-inner">
		<div class="form-layout">
			<div class="form-meta">
				<span class="eyebrow">Kontakt os</span>
				<h2 class="sec-hed">Lad os tage<br />en snak</h2>
				<p style="margin-top: 1.5rem;">Ring eller skriv til os. Vi svarer inden 24 timer og tilbyder et gratis, uforpligtende møde.</p>
				<p><a href="tel:29723427">ring 29 72 34 27</a></p>
				<p><a href="mailto:cy@yderskov.com">cy@yderskov.com</a></p>
			</div>
			<ContactForm />
		</div>
	</div>
</section>
