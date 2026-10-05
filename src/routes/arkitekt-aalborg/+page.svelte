<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import InspirationGallery from '$lib/components/InspirationGallery.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { faqItems as aalborgFAQ } from '$lib/data/arkitekt-aalborg';

	const aalborgSchema = {
		'@context': 'https://schema.org',
		'@type': 'ProfessionalService',
		name: 'Yderskov Arkitekter - Aalborg',
		url: 'https://yderskov.com/arkitekt-aalborg',
		telephone: '+4529723427',
		email: 'cy@yderskov.com',
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Aalborg',
			addressRegion: 'Nordjylland',
			addressCountry: 'DK'
		},
		description:
			'Erfaren arkitekttegnestue i Aalborg. Vi tegner og bygger din villa, dit sommerhus eller din tilbygning i Aalborg og hele Nordjylland med fast pris.',
		areaServed: [
			{ '@type': 'AdministrativeArea', name: 'Aalborg' },
			{ '@type': 'AdministrativeArea', name: 'Nordjylland' }
		]
	};
</script>

<svelte:head>
	<title>Arkitekt Aalborg — Tegnestue med fast pris | Yderskov</title>
	<meta
		name="description"
		content="Vil du bygge i Aalborg? Få en arkitekttegnet villa til fast pris med egne håndværkere. Book et gratis første møde på din byggegrund — vi kommer til dig!"
	/>
	<link rel="canonical" href="https://yderskov.com/arkitekt-aalborg" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="da_DK" />
	<meta property="og:url" content="https://yderskov.com/arkitekt-aalborg" />
	<meta property="og:siteName" content="Yderskov Arkitekter" />
	<meta property="og:image" content="https://yderskov.com/images/Karetmagervej/Sæby-ny-villa-funkis-haveside.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Arkitekt Aalborg — Tegnestue med fast pris | Yderskov" />
	<meta
		name="twitter:description"
		content="Vil du bygge i Aalborg? Få en arkitekttegnet villa til fast pris med egne håndværkere. Book et gratis første møde på din byggegrund — vi kommer til dig!"
	/>
	<meta name="twitter:image" content="https://yderskov.com/images/Karetmagervej/Sæby-ny-villa-funkis-haveside.webp" />
	{@html `<script type="application/ld+json">${JSON.stringify(aalborgSchema).replace(/</g, '\\u003c')}</script>`}
</svelte:head>

<Breadcrumbs items={[{ label: 'Arkitekt Aalborg' }]} />
<Hero
	slides={[
		{ src: '/images/Karetmagervej/Sæby-ny-villa-funkis-haveside.webp', alt: 'Arkitekttegnet villa i Nordjylland — Arkitekttegnestuen Yderskov' }
	]}
	tag="Arkitekt Aalborg"
	subtitle="Arkitekt Aalborg"
	lines={[
		'Fra første idé til færdigt byggeri i Aalborg og hele Nordjylland.',
		'Vi tegner huse tilpasset det nordjyske landskab, jeres ønsker og jeres budget.',
		'Gratis og uforpligtende idémøde direkte på din byggegrund.'
	]}
	italicLines={[1, 2]}
/>

<!-- Intro -->
<section class="s">
	<div class="s-inner">
		<div class="text-2col">
			<div>
				<span class="eyebrow">Din lokale arkitekt</span>
				<h1 class="sec-hed">Arkitekt Aalborg</h1>
				<p style="font-size: 1.1rem; font-weight: 200; color: var(--sub); margin-top: 1rem; letter-spacing: -0.01em; line-height: 1.6;">
					— Yderskov Tegnestue i Aalborg og Nordjylland
				</p>
			</div>
			<div>
				<p class="body-intro">
					Søger du en <strong>arkitekt i Aalborg</strong>? Yderskov Tegnestue tegner og opfører arkitekttegnede villaer, sommerhuse og tilbygninger i Aalborg og hele Nordjylland med udgangspunkt i dine ønsker og grundens muligheder.
				</p>
				<p class="body-p">
					Vi har stor erfaring med alt fra moderne funkisvillaer i Hasseris til familiehuse i Vestbjerg samt tilbygninger i Gug og Nørresundby. Vores dybe kendskab til Aalborg Kommunes lokalplaner sikrer en hurtig og gnidningsfri godkendelsesproces.
				</p>
				<p class="body-p">
					Hos os får du fuld økonomisk tryghed. Vi står for hele processen — fra første streg til færdigt byggeri — med egne håndværkere til en <strong>aftalt fast pris</strong>. Kontakt os for et <strong>gratis idémøde</strong> direkte på din byggegrund.
				</p>
				<div class="about-tags" style="margin-top: 2rem;">
					<a href="#kontakt" class="tag tag-dark">Book gratis idémøde →</a>
					<a href="/villaer" class="tag">Se vores villaer</a>
					<a href="/priser" class="tag">Se priser</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Local expertise -->
<section class="s s-off">
	<div class="s-inner">
		<div class="text-2col">
			<div>
				<span class="eyebrow">Lokalt fokus</span>
				<h2 class="sec-hed">Erfaren arkitekt<br />i Aalborg og omegn.</h2>
				<p class="body-p" style="margin-top: 1rem;">
					Vi har tegnet og opført en lang række projekter i Aalborg og Nordjylland – fra villaer i Hasseris og Vestbjerg til sommerhuse på vestkysten. Vi har erfaringen og det lokale netværk til at tilpasse byggeriet til grundens forhold og bringe dit projekt sikkert i mål.
				</p>
			</div>
			<div class="info-box">
				<p class="info-box-hed">Tegnestuen Yderskov i tal</p>
				<span class="info-box-lbl">Erfaring &amp; projekter</span>
				<ul>
					<li>Grundlagt i 2009 af Chris Yderskov</li>
					<li>300+ afleverede byggeprojekter</li>
					<li>Egen tegnestue og fast tømrer- &amp; murerhold</li>
				</ul>
				<span class="info-box-lbl">Vores ydelser</span>
				<ul>
					<li>Skitseforslag</li>
					<li>Myndighedsprojekt &amp; byggetilladelse</li>
					<li>Nøglefærdigt byggeri til fast pris</li>
				</ul>
				<span class="info-box-lbl">Geografi</span>
				<ul>
					<li>Aalborg, Nørresundby og hele Nordjylland</li>
					<li>Projekter på Sjælland og i resten af Danmark</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Local Projects -->
<section class="s">
	<div class="s-inner">
		<span class="eyebrow">Portefølje</span>
		<div class="proj-header">
			<div>
				<h2 class="sec-hed">Udvalgte projekter i Nordjylland</h2>
				<p class="proj-desc">Vi tegner huse, der komplementerer deres omgivelser og opfylder familiens unikke behov.</p>
			</div>
			<a href="/villaer" class="proj-see">Se alle villaer →</a>
		</div>
		<div class="proj-grid">
			<a href="/villaer" class="proj-card" id="proj-vestbjerg">
				<Image
					src="/images/Højgården/Vestsbjerg-ny-funkisvilla-haveside.webp"
					alt="Funkisvilla nær Hammer Bakker — Arkitekttegnestuen Yderskov"
					fill
					sizes="(max-width: 900px) 50vw, 33vw"
					style="object-fit: cover;"
				/>
				<div class="proj-foot">
					<span class="proj-title">Funkisvilla nær Hammer Bakker</span>
					<span class="proj-arr">→</span>
				</div>
			</a>
			<a href="/villaer" class="proj-card" id="proj-hjoerring">
				<Image
					src="/images/Gartnerhaven/Hjørring-garnterhaven-ny-villa.webp"
					alt="Klassisk ny villa i Hjørring — Arkitekttegnestuen Yderskov"
					fill
					sizes="(max-width: 900px) 50vw, 33vw"
					style="object-fit: cover;"
				/>
				<div class="proj-foot">
					<span class="proj-title">Klassisk villa, Hjørring</span>
					<span class="proj-arr">→</span>
				</div>
			</a>
			<a href="/sommerhuse" class="proj-card" id="proj-loekken">
				<Image
					src="/images/Løkken sommerhus/Løkken-Alexandravej-sommerhus-terrasse.webp"
					alt="Arkitekttegnet sommerhus i Løkken — Arkitekttegnestuen Yderskov"
					fill
					sizes="(max-width: 900px) 50vw, 33vw"
					style="object-fit: cover;"
				/>
				<div class="proj-foot">
					<span class="proj-title">Sommerhus, Løkken</span>
					<span class="proj-arr">→</span>
				</div>
			</a>
		</div>
	</div>
</section>

<!-- FAQ -->
<section class="s s-off">
	<div class="s-inner">
		<span class="eyebrow">FAQ</span>
		<h2 class="sec-hed">Ofte stillede spørgsmål</h2>
		<div class="faq-grid">
			{#each aalborgFAQ as item, i (i)}
				<div class="faq-item">
					<p class="faq-q" style="font-weight: 500;">{item.q}</p>
					<p class="faq-a">{item.a}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Inspiration Galleri -->
<section class="s s-off">
	<div class="s-inner">
		<span class="eyebrow">Galleri</span>
		<h2 class="sec-hed">Inspiration</h2>
		<InspirationGallery />
	</div>
</section>

<CtaBand />

<!-- Contact Form -->
<section class="s form-bg" id="kontakt">
	<div class="s-inner">
		<div class="form-layout">
			<div class="form-meta">
				<span class="eyebrow">Kontakt os</span>
				<h2 class="sec-hed">Lad os drøfte<br />dit projekt</h2>
				<p style="margin-top: 1.5rem;">Ring eller skriv til os. Vi svarer altid inden for 24 timer og tilbyder et gratis, uforpligtende møde direkte på din byggegrund i Aalborg-området.</p>
				<p><a href="tel:29723427">ring 29 72 34 27</a></p>
				<p><a href="mailto:cy@yderskov.com">cy@yderskov.com</a></p>
			</div>
			<ContactForm />
		</div>
	</div>
</section>
