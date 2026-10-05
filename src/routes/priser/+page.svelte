<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	const byggeriPrices = [
		{ type: 'Ny villa', price: 'Fra 15.000 kr. pr. m²', desc: 'Inkl. alle håndværkerydelser, materialer og byggestyring.' },
		{ type: 'Tilbygning', price: 'Fra 14.000 kr. pr. m²', desc: 'Inkl. integration med eksisterende bygning.' },
		{ type: 'Sommerhus', price: 'Fra 12.000 kr. pr. m²', desc: 'Inkl. alle håndværkerydelser og materialer.' },
		{ type: 'Lejlighed', price: 'Fra 16.000 kr. pr. m²', desc: 'Inkl. fuld renovering med arkitekttegnede løsninger.' }
	];

	const arkitektYdelser = [
		{ name: 'Skitseforslag', price: 'Fra kr. 12.500 inkl. moms', desc: 'Første tegningsudkast der viser mulighederne for dit projekt.' },
		{ name: 'Myndighedsprojekt', price: 'Fra kr. 18.750 inkl. moms', desc: 'Tegninger og dokumentation til byggetilladelse hos kommunen.' },
		{ name: 'Udbudsmateriale', price: 'Fra kr. 18.750 inkl. moms', desc: 'Detaljerede tegninger og beskrivelser til håndværkere.' },
		{ name: 'Byggestyring / tilsyn', price: 'Fast pris aftales', desc: 'Vi styrer håndværkere og sikrer kvalitet og økonomi.' },
		{ name: 'Færdigmelding', price: 'Fra kr. 6.250 inkl. moms', desc: 'Afsluttende dokumentation og færdigmelding til kommunen.' },
		{ name: 'LCA-beregning', price: 'Fra kr. 6.250 inkl. moms', desc: 'Obligatorisk livscyklusanalyse for nybyggeri over 100 m².' },
		{ name: 'Energiberegning', price: 'Fra kr. 6.250 inkl. moms', desc: 'Beregning af bygningens energiforbrug og energiklasse.' },
		{ name: 'Varmetabsberegning', price: 'Fra kr. 3.125 inkl. moms', desc: 'Beregning af varmetab til brug for varmepumpe og VVS.' },
		{ name: 'Landinspektør', price: 'Fra kr. 9.375 inkl. moms', desc: 'Afsætning af bygning på grunden og koordinatsæt.' },
		{ name: 'Energimærkning + blowerdoor', price: 'Fra kr. 8.125 inkl. moms', desc: 'Energimærke og lufttæthedstest af den færdige bygning.' },
		{ name: 'Gebyr til kommunen', price: 'Fra kr. 4.375 inkl. moms', desc: 'Kommunens byggesagsgebyr varierer efter projektets størrelse.' },
		{ name: 'Boreprøve / jordbundsanalyse', price: 'Fra kr. 9.375 inkl. moms', desc: 'Analyse af jordbundsforhold til brug for fundering.' }
	];

	const faqItems = [
		{
			q: 'Hvad koster en arkitekttegnet villa pr. m²?',
			a: 'En ny arkitekttegnet villa opført med vores egne faste håndværkere koster typisk fra 15.000 kr. pr. m² som et fuldstændig nøglefærdigt og indflytningsklart byggeri. Denne m²-pris inkluderer alle materialer, løn og komplet byggestyring.'
		},
		{
			q: 'Hvad koster et arkitekttegnet sommerhus pr. m²?',
			a: 'Et arkitekttegnet sommerhus koster typisk fra 12.000 kr. pr. m² inkl. moms, materialer og håndværkere. Prisen pr. m² afhænger blandt andet af de valgte vinduespartier, tagform samt jordbunden.'
		},
		{
			q: 'Hvad koster en tilbygning pr. m²?',
			a: 'En tilbygning til et eksisterende hus koster typisk fra 14.000 kr. pr. m² inkl. moms, materialer og håndværkere. Prisen pr. m² afhænger især af tagløsningen (f.eks. fladt tag eller sadeltag) og tilslutningsarbejdet.'
		},
		{
			q: 'Hvad koster en ombygning eller renovering af hus/lejlighed?',
			a: 'En indvendig ombygning og totalrenovering koster typisk fra 16.000 kr. pr. m². Arealer som køkken og badeværelse (vådrum) er væsentligt dyrere end almindelige stuer og soveværelser.'
		},
		{
			q: 'Hvad koster det at hyre en arkitekt?',
			a: 'Vi tilbyder faste, gennemskuelige priser på vores arkitektydelser. Et komplet skitseforslag koster fra 12.500 kr. inkl. moms, og et færdigt myndighedsprojekt til byggetilladelse koster fra 18.750 kr. inkl. moms.'
		},
		{
			q: 'Er det første møde med arkitekten gratis?',
			a: 'Ja, det første idémøde er altid 100% gratis og uforpligtende hos Yderskov Arkitekter. We kører gerne ud og mødes direkte på din byggegrund eller adresse for at drøfte dit projekt.'
		}
	];

	const faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqItems.map((item) => ({
			'@type': 'Question',
			name: item.q,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.a
			}
		}))
	};
</script>

<svelte:head>
	<title>Hvad koster en arkitekt? Se vores faste priser | Yderskov</title>
	<meta
		name="description"
		content="Hvad koster en arkitekt? Se vores gennemskuelige priser på skitseforslag, myndighedsprojekter og byggestyring. Få fast pris og et gratis første møde."
	/>
	<link rel="canonical" href="https://yderskov.com/priser" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="da_DK" />
	<meta property="og:url" content="https://yderskov.com/priser" />
	<meta property="og:siteName" content="Yderskov Arkitekter" />
	<meta property="og:image" content="https://yderskov.com/images/Løkken sommerhus/Løkken-Alexandravej-sommerhus-terrasse.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Hvad koster en arkitekt? Se vores faste priser | Yderskov" />
	<meta
		name="twitter:description"
		content="Hvad koster en arkitekt? Se vores gennemskuelige priser på skitseforslag, myndighedsprojekter og byggestyring. Få fast pris og et gratis første møde."
	/>
	<meta name="twitter:image" content="https://yderskov.com/images/Løkken sommerhus/Løkken-Alexandravej-sommerhus-terrasse.webp" />
	{@html `<script type="application/ld+json">${JSON.stringify(faqSchema).replace(/</g, '\\u003c')}</script>`}
</svelte:head>

<Breadcrumbs items={[{ label: 'Priser' }]} />
<Hero
	slides={[
		{ src: '/images/Løkken sommerhus/Løkken-Alexandravej-sommerhus-terrasse.webp', alt: 'Arkitekttegnet sommerhus i Løkken — Arkitekttegnestuen Yderskov' }
	]}
	tag="Priser"
	subtitle="Priser"
	lines={[
		'Fast honorar, tæt kontakt. Du ved altid hvad du betaler og hvem du kan ringe til.',
		'Gratis og uforpligtende første idemøde. Vi kommer ud til jer.'
	]}
	italicLines={[0, 1]}
/>

<!-- Intro -->
<section class="s">
	<div class="s-inner">
		<div class="text-2col">
			<div>
				<span class="eyebrow">Priser og ydelser</span>
				<h1 class="sec-hed">Fast pris.<br />Ingen overraskelser.</h1>
			</div>
			<div>
				<p class="body-intro">
					Vi tilbyder fast pris på arkitekthonoraret — så du altid ved hvad du betaler. Prøv også vores <a href="/prisberegner" class="text-link">prisberegner</a> eller se et <a href="/prisberegner/demo" class="text-link">demo-prisskøn</a> med det samme. Det første møde er altid gratis og uforpligtende.
				</p>
				<p class="body-p">
					Alle priser er inkl. moms og er vejledende. Kontakt os for et præcist tilbud baseret på dit projekt.
				</p>
				<div class="about-tags" style="margin-top: 1.5rem;">
					<a href="/kontakt" class="tag tag-dark">Book gratis møde →</a>
					<a href="/faq" class="tag">Se FAQ</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Byggeri priser -->
<section class="s s-off">
	<div class="s-inner">
		<span class="eyebrow">Byggeri</span>
		<h2 class="sec-hed">Priser på byggeri</h2>
		<div class="pricing-grid" style="margin-top: 2rem;">
			{#each byggeriPrices as item (item.type)}
				<div class="pricing-item">
					<p class="pricing-name">{item.type}</p>
					<p class="pricing-desc">{item.desc}</p>
					<p class="pricing-price">{item.price}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Arkitektydelser -->
<section class="s">
	<div class="s-inner">
		<span class="eyebrow">Arkitekthonorar</span>
		<h2 class="sec-hed">Priser på arkitektydelser</h2>
		<div class="pricing-grid" style="margin-top: 2rem;">
			{#each arkitektYdelser as item (item.name)}
				<div class="pricing-item">
					<p class="pricing-name">{item.name}</p>
					<p class="pricing-desc">{item.desc}</p>
					<p class="pricing-price">{item.price}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- FAQ -->
<section class="s">
	<div class="s-inner">
		<span class="eyebrow">Spørgsmål og svar</span>
		<h2 class="sec-hed">FAQ — priser</h2>
		<div class="faq-grid">
			{#each faqItems as item, i (i)}
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
				<h2 class="sec-hed">Få et<br />uforpligtende tilbud</h2>
				<p style="margin-top: 1.5rem;">Ring eller skriv til os. Vi svarer inden 24 timer og giver et præcist tilbud baseret på dit projekt.</p>
				<p><a href="tel:29723427">29 72 34 27</a></p>
				<p><a href="mailto:cy@yderskov.com">cy@yderskov.com</a></p>
			</div>
			<ContactForm />
		</div>
	</div>
</section>
