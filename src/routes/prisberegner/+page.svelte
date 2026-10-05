<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import PrisCalculator from '$lib/components/PrisCalculator.svelte';
	import HeroForm from '$lib/components/HeroForm.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	const calculatorSchema = {
		'@context': 'https://schema.org',
		'@type': 'WebApplication',
		name: 'Prisberegner til tilbygning — Yderskov Arkitekter',
		url: 'https://yderskov.com/prisberegner',
		applicationCategory: 'UtilityApplication',
		operatingSystem: 'Any',
		offers: { '@type': 'Offer', price: '0', priceCurrency: 'DKK' },
		provider: { '@type': 'ProfessionalService', name: 'Yderskov Arkitekter', url: 'https://yderskov.com' }
	};

	const timeline = [
		{ n: '1', titel: 'Gratis første møde', tekst: 'Vi kommer ud til dig — gratis og uforpligtende. Vi lytter til dine ønsker og vurderer mulighederne på din grund.' },
		{ n: '2', titel: 'Skitseforslag', tekst: 'Vi udarbejder et skitseforslag med planløsning, facader og et samlet indtryk af projektet.' },
		{ n: '3', titel: 'Myndighedsprojekt', tekst: 'Vi tegner og beregner projektet til brug for ansøgning om byggetilladelse.' },
		{ n: '4', titel: 'Byggetilladelse', tekst: 'Vi sender ansøgningen til kommunen og følger op indtil tilladelsen er i hus.' },
		{ n: '5', titel: 'Prisindhentning', tekst: 'Vi indhenter tilbud fra håndværkere og forhandler den bedste pris til dig.' },
		{ n: '6', titel: 'Byggefase', tekst: 'Vi styrer byggeriet og koordinerer håndværkerne, så du slipper for bekymringer.' },
		{ n: '7', titel: 'Aflevering til bygherre', tekst: 'Vi gennemgår byggeriet med dig og sikrer at alt er udført korrekt og som aftalt.' },
		{ n: '8', titel: 'Færdigmelding hos kommunen', tekst: 'Vi sørger for færdigmelding hos kommunen, som udsteder ibrugtagningstilladelse.' }
	];
</script>

<svelte:head>
	<title>Prisberegner til tilbygning — Beregn prisskøn | Yderskov</title>
	<meta
		name="description"
		content="Prøv vores gratis prisberegner og få et lynhurtigt prisskøn på din tilbygning. Vælg tag, mur, gulv og beregn dine byggeomkostninger online med det samme!"
	/>
	<link rel="canonical" href="https://yderskov.com/prisberegner" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="da_DK" />
	<meta property="og:url" content="https://yderskov.com/prisberegner" />
	<meta property="og:siteName" content="Yderskov Arkitekter" />
	<meta property="og:image" content="https://yderskov.com/images/Gjøl/Gjøl-ny-villa-have.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Prisberegner til tilbygning — Beregn prisskøn | Yderskov" />
	<meta
		name="twitter:description"
		content="Prøv vores gratis prisberegner og få et lynhurtigt prisskøn på din tilbygning. Vælg tag, mur, gulv og beregn dine byggeomkostninger online med det samme!"
	/>
	<meta name="twitter:image" content="https://yderskov.com/images/Gjøl/Gjøl-ny-villa-have.webp" />
	{@html `<script type="application/ld+json">${JSON.stringify(calculatorSchema).replace(/</g, '\\u003c')}</script>`}
</svelte:head>

<Breadcrumbs items={[{ label: 'Prisberegner' }]} />
<Hero
	slides={[
		{ src: '/images/Gjøl/Gjøl-ny-villa-have.webp', alt: 'Ny villa i Gjøl — Arkitekttegnestuen Yderskov' }
	]}
	tag="Prisberegner"
	showForm={false}
	lines={[
		'I har tankerne, vi sætter stregerne.',
		'Byggeri tegnet kun til jer, til jeres grund, jeres ønsker og jeres budget.',
		'Gratis og uforpligtende første idemøde. Vi kommer ud til jer.'
	]}
	italicLines={[1, 2]}
/>

<!-- Intro -->
<section class="s pb-intro-bg">
	<div class="s-inner">
		<div class="pb-intro-grid">
			<div class="pb-intro-text">
				<span class="eyebrow">Prisberegner</span>
				<h1 class="sec-hed">Få et prisskøn<br />over din tilbygning.</h1>
				<p class="body-intro">
					Udfyld felterne og få et vejledende skøn over byggeomkostninger baseret på materialer du vælger. Du kan også se et <a href="/prisberegner/demo" class="text-link">eksempel på et prisskøn her</a>. Et gratis arkitektmøde giver dig dog altid det mest præcise billede.
				</p>
				<p class="body-p">
					Priser er inkl. moms og baseret på aktuelle markedspriser. Kontakt os for mere info om tilbud.
				</p>
				<div class="about-tags" style="margin-top: 1.5rem;">
					<a href="/kontakt" class="tag tag-dark">Book gratis møde →</a>
					<a href="/priser" class="tag">Se alle priser</a>
				</div>
			</div>
			<div class="pb-intro-img">
				<Image
					src="/images/Neptunvej/Aalborg-neptunvej-tilbygning-terrasse.webp"
					alt="Tilbygning og renovering — Arkitekttegnestuen Yderskov"
					fill
					sizes="(max-width: 768px) 100vw, 50vw"
					style="object-fit: cover;"
				/>
			</div>
		</div>
	</div>
</section>

<!-- Calculator -->
<section class="s s-off">
	<div class="s-inner">
		<span class="eyebrow">Beregner</span>
		<h2 class="sec-hed">Beregn dit projekt</h2>
		<div class="calc-guide">
			<p class="calc-guide-step"><span>1</span> Vælg om grunden er vandret eller skrånende.</p>
			<p class="calc-guide-step"><span>2</span> Indtast bygningens areal i m² og antal rum. Er du i tvivl om arealet, så brug et rundt tal — skønnet er vejledende.</p>
			<p class="calc-guide-step"><span>3</span> Vælg materialer indvendigt og udvendigt. Jo flere detaljer du udfylder, jo mere præcist bliver skønnet.</p>
			<p class="calc-guide-step"><span>4</span> Klik <strong>Beregn</strong> og se dit vejledende prisskøn med det samme.</p>
		</div>
		<PrisCalculator />
	</div>
</section>

<!-- USP-punkter + disclaimer -->
<section class="s">
	<div class="s-inner">
		<div class="pb-usps">
			<div class="pb-usp">
				<span class="pb-usp-num">1</span>
				<div>
					<p class="pb-usp-title">Prisskøn på 30 sekunder</p>
					<p class="pb-usp-body">Udfyld felterne og få et prisskøn med det samme.</p>
				</div>
			</div>
			<div class="pb-usp">
				<span class="pb-usp-num">2</span>
				<div>
					<p class="pb-usp-title">Rigtige arkitekter — ikke typehusfabrikanter</p>
					<p class="pb-usp-body">Vi laver unikke løsninger tilpasset din grund, dine ønsker og dit budget.</p>
				</div>
			</div>
			<div class="pb-usp">
				<span class="pb-usp-num">3</span>
				<div>
					<p class="pb-usp-title">Fra idé til færdigt projekt</p>
					<p class="pb-usp-body">Vi hjælper hele vejen — fra første streg til færdigmelding.</p>
				</div>
			</div>
		</div>

		<div class="pb-disclaimer">
			<p class="pb-disclaimer-title">Dette er et vejledende prisskøn — ikke et tilbud</p>
			<p class="pb-disclaimer-body">
				Skønnet omfatter kun entrepriseomkostninger baseret på de valgte materialer.
				Ikke medregnet: byggetilladelse og gebyr, jordbundsundersøgelser, landinspektør,
				rådgiverhonorar samt ukendte og uforudsete udgifter afhængig af projekt.
			</p>
		</div>
	</div>
</section>

<!-- Tidslinje -->
<section class="s">
	<div class="s-inner">
		<span class="eyebrow">Processen</span>
		<h2 class="sec-hed">Fra idé til færdigt byggeri</h2>
		<div class="pb-timeline">
			{#each timeline as s (s.n)}
				<div class="pb-tl-step">
					<div class="pb-tl-num">{s.n}</div>
					<div class="pb-tl-connector"></div>
					<div class="pb-tl-content">
						<p class="pb-tl-titel">{s.titel}</p>
						<p class="pb-tl-tekst">{s.tekst}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Kontakt -->
<section class="s s-off" id="kontakt">
	<div class="s-inner">
		<div class="form-layout">
			<div class="form-meta">
				<span class="eyebrow">Kontakt os</span>
				<h2 class="sec-hed">Book et gratis<br />arkitektmøde</h2>
				<p style="margin-top: 1.5rem;">Vi kommer ud til dig — gratis og uforpligtende. Ring eller skriv til os.</p>
				<p><a href="tel:29723427">29 72 34 27</a></p>
				<p><a href="mailto:cy@yderskov.com">cy@yderskov.com</a></p>
			</div>
			<HeroForm />
		</div>
	</div>
</section>
