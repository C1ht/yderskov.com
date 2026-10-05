<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import ImageGrid from '$lib/components/ImageGrid.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import InspirationGallery from '$lib/components/InspirationGallery.svelte';
	import ProjectDescription from '$lib/components/ProjectDescription.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { faqItems } from '$lib/data/lejligheder';

	const projectSchema = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Apartment',
				name: 'Lejlighedsrenovering I, Aalborg',
				description: 'Arkitekttegnet lejlighedsrenovering og ombygning i Aalborg udført af Yderskov Arkitekter.',
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Aalborg',
					addressCountry: 'DK'
				},
				image: [
					'https://yderskov.com/images/Ågade 25/Aalborg-Ågade-renovering-plantegning.webp',
					'https://yderskov.com/images/Ågade 25/Aalborg-Ågade-renovering-bad.webp',
					'https://yderskov.com/images/Ågade 25/Aalborg-Ågade-renovering-køkken.webp',
					'https://yderskov.com/images/Ågade 25/Aalborg-Ågade-renovering-vinduer.webp',
					'https://yderskov.com/images/Ågade 25/Aalborg-Ågade-renovering-soveværelse.webp',
					'https://yderskov.com/images/Ågade 25/Aalborg-Ågade-renovering-køkkenbordplads.webp',
					'https://yderskov.com/images/Ågade 25/Aalborg-Ågade-renovering-gang.webp',
					'https://yderskov.com/images/Ågade 25/Aalborg-Ågade-renovering-køkken-indpakket.webp',
					'https://yderskov.com/images/Ågade 25/Aalborg-Ågade-renovering-køkken-undervejs.webp',
					'https://yderskov.com/images/Ågade 25/Aalborg-Ågade-renovering-niche-amerikanerkøleskab.webp'
				],
				architect: {
					'@type': 'LocalBusiness',
					name: 'Yderskov Arkitekter',
					url: 'https://yderskov.com/'
				}
			},
			{
				'@type': 'Apartment',
				name: 'Lejlighedsrenovering III (1. th), Aalborg',
				description: 'Arkitekttegnet lejlighedsrenovering af 1. th i Aalborg udført af Yderskov Arkitekter.',
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Aalborg',
					addressCountry: 'DK'
				},
				image: [
					'https://yderskov.com/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-køkken.webp',
					'https://yderskov.com/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-opvaskemaskine.webp',
					'https://yderskov.com/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-soveværelse.webp',
					'https://yderskov.com/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-stur.webp',
					'https://yderskov.com/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-stue-soveværelseskik.webp',
					'https://yderskov.com/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-soveværelse-stuekik.webp',
					'https://yderskov.com/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-køkken-kogesektion.webp',
					'https://yderskov.com/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-køkkengulv.webp',
					'https://yderskov.com/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-stuegulv.webp',
					'https://yderskov.com/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-badmiljø.webp',
					'https://yderskov.com/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-toilet.webp'
				],
				architect: {
					'@type': 'LocalBusiness',
					name: 'Yderskov Arkitekter',
					url: 'https://yderskov.com/'
				}
			},
			{
				'@type': 'Apartment',
				name: 'Lejlighedsrenovering III (1. tv), Aalborg',
				description: 'Arkitekttegnet lejlighedsrenovering af 1. tv i Aalborg udført af Yderskov Arkitekter.',
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Aalborg',
					addressCountry: 'DK'
				},
				image: [
					'https://yderskov.com/images/Reberbansgade/Aalborg-reberbansgade-renovering-1tv-køkken-.webp',
					'https://yderskov.com/images/Reberbansgade/Aalborg-reberbansgade-renovering-1tv-køkkenhylder.webp',
					'https://yderskov.com/images/Reberbansgade/Aalborg-reberbansgade-renovering-1tv-toilet.webp'
				],
				architect: {
					'@type': 'LocalBusiness',
					name: 'Yderskov Arkitekter',
					url: 'https://yderskov.com/'
				}
			}
		]
	};
</script>

<svelte:head>
	<title>Arkitekt til lejlighed — Renovering & ombygning | Yderskov</title>
	<meta
		name="description"
		content="Få hjælp af en arkitekt til renovering og ombygning af din lejlighed. Vi maksimerer dagslys og planløsning til fast pris. Få et gratis første møde!"
	/>
	<link rel="canonical" href="https://yderskov.com/lejligheder" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="da_DK" />
	<meta property="og:url" content="https://yderskov.com/lejligheder" />
	<meta property="og:siteName" content="Yderskov Arkitekter" />
	<meta property="og:image" content="https://yderskov.com/images/Ågade 25/Aalborg-Ågade-renovering-køkken.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Arkitekt til lejlighed — Renovering & ombygning | Yderskov" />
	<meta
		name="twitter:description"
		content="Få hjælp af en arkitekt til renovering og ombygning af din lejlighed. Vi maksimerer dagslys og planløsning til fast pris. Få et gratis første møde!"
	/>
	<meta name="twitter:image" content="https://yderskov.com/images/Ågade 25/Aalborg-Ågade-renovering-køkken.webp" />
	{@html `<script type="application/ld+json">${JSON.stringify(projectSchema).replace(/</g, '\\u003c')}</script>`}
</svelte:head>

<Breadcrumbs items={[{ label: 'Lejligheder' }]} />
<Hero
	slides={[
		{ src: '/images/Ågade 25/Aalborg-Ågade-renovering-køkken.webp', alt: 'Lejlighedsrenovering, Aalborg — Arkitekttegnestuen Yderskov' }
	]}
	tag="Lejligheder"
	subtitle="Lejligheder"
	lines={[
		'Selv få kvadratmeter kan føles som præcis nok, når de er tegnet rigtigt.',
		'Gratis og uforpligtende første idemøde. Vi kommer ud til jer.'
	]}
	italicLines={[0, 1]}
/>

<section class="s">
	<div class="s-inner">
		<div class="text-2col">
			<div>
				<span class="eyebrow">Lejligheder</span>
				<h1 class="sec-hed">Lejlighedsrenovering<br />med arkitekt.</h1>
			</div>
			<div>
				<p class="body-p">
					Vi tegner og projekterer lejlighedsrenoveringer — fra enkle opdateringer til fuld ombygning af planløsning. Se også vores andre <a href="/villaer" class="text-link">villaer og byggeprojekter</a>, eller læs mere om <a href="/om" class="text-link">vores tegnestue</a> og vores samlede proces.
				</p>
				<p class="body-p">
					Vi håndterer tegninger, myndighedsgodkendelse og koordinering med håndværkere.
				</p>
				<p class="body-p">
					<a href="#kontakt" class="text-link">→ Kom i gang</a>
				</p>
			</div>
		</div>
	</div>
</section>

<section class="s s-off">
	<div class="s-inner">
		<div class="proj-header">
			<div>
				<span class="eyebrow">Projekt</span>
				<h2 class="sec-hed" style="margin-bottom: 0;">Lejlighedsrenovering I<br />Aalborg.</h2>
				<ProjectDescription
					text="Denne ældre lejlighed i Aalborg har gennemgået en totalrenovering for at optimere pladsen og bringe mere dagslys ind i rummene. Vi har ændret planløsningen og åbnet op til et lyst køkken, samtidig med at vi har bevaret og nænsomt restaureret de smukke, originale vinduer. Badeværelset er moderniseret med enkle løsninger, så de få kvadratmeter udnyttes bedst muligt, og der er gjort plads til praktiske detaljer som en indbygget niche til amerikanerkøleskab."
					style="margin-top: 1.25rem; max-width: 680px; color: var(--sub);"
				/>
			</div>
		</div>
		<p class="proj-grid-label">Efter ombygning</p>
		<ImageGrid
			images={[
				{ src: '/images/Ågade 25/Aalborg-Ågade-renovering-plantegning.webp', alt: 'Plantegning, lejlighedsrenovering — Arkitekttegnestuen Yderskov' },
				{ src: '/images/Ågade 25/Aalborg-Ågade-renovering-bad.webp', alt: 'Færdigt badeværelse i lejlighedsrenovering — Arkitekttegnestuen Yderskov' },
				{ src: '/images/Ågade 25/Aalborg-Ågade-renovering-køkken.webp', alt: 'Færdigt køkken i lejlighedsrenovering — Arkitekttegnestuen Yderskov' },
				{ src: '/images/Ågade 25/Aalborg-Ågade-renovering-vinduer.webp', alt: 'Restaurerede originale vinduer i lejlighedsrenovering — Arkitekttegnestuen Yderskov' }
			]}
		/>
		<p class="proj-grid-label" style="margin-top: 2rem;">Under ombygning</p>
		<ImageGrid
			images={[
				{ src: '/images/Ågade 25/Aalborg-Ågade-renovering-soveværelse.webp', alt: 'Soveværelse i lejlighedsrenovering — Arkitekttegnestuen Yderskov' },
				{ src: '/images/Ågade 25/Aalborg-Ågade-renovering-køkkenbordplads.webp', alt: 'Køkkenbordplads i lejlighedsrenovering — Arkitekttegnestuen Yderskov' },
				{ src: '/images/Ågade 25/Aalborg-Ågade-renovering-gang.webp', alt: 'Gang under renovering — Arkitekttegnestuen Yderskov' },
				{ src: '/images/Ågade 25/Aalborg-Ågade-renovering-køkken-indpakket.webp', alt: 'Køkken under montering — Arkitekttegnestuen Yderskov' },
				{ src: '/images/Ågade 25/Aalborg-Ågade-renovering-køkken-undervejs.webp', alt: 'Køkken undervejs — Arkitekttegnestuen Yderskov' },
				{ src: '/images/Ågade 25/Aalborg-Ågade-renovering-niche-amerikanerkøleskab.webp', alt: 'Niche til amerikanerkøleskab under renovering — Arkitekttegnestuen Yderskov' }
			]}
		/>
	</div>
</section>

<section class="s">
	<div class="s-inner">
		<div class="proj-header">
			<div>
				<span class="eyebrow">Projekt</span>
				<h2 class="sec-hed" style="margin-bottom: 0;">Lejlighedsrenovering III (1. th)<br />Aalborg.</h2>
				<ProjectDescription
					text="Dette projekt i Aalborg er den ene halvdel af en oprindelig stor herskabslejlighed, som vi har opdelt i to mindre, moderne boliger. Lejligheden (1. th) har fået en gennemgribende renovering med helt nye gulve, et lyst, moderne køkken og et stilrent badeværelse. Vi har skabt et åbent kig mellem stuen og soveværelset, hvilket får hele lejligheden til at virke markant større og mere luftig. Badeværelset og toilettet er opdateret med lyse materialer, og det nye køkken er indrettet med fokus på god plads til både madlavning og opbevaring."
					style="margin-top: 1.25rem; max-width: 680px; color: var(--sub);"
				/>
			</div>
		</div>
		<ImageGrid
			images={[
				{ src: '/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-køkken.webp', alt: 'Køkken i lejlighedsrenovering — Arkitekttegnestuen Yderskov' },
				{ src: '/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-opvaskemaskine.webp', alt: 'Opvaskemaskine i køkken — Arkitekttegnestuen Yderskov' },
				{ src: '/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-soveværelse.webp', alt: 'Soveværelse i lejlighedsrenovering — Arkitekttegnestuen Yderskov' },
				{ src: '/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-stur.webp', alt: 'Stue i lejlighedsrenovering — Arkitekttegnestuen Yderskov' },
				{ src: '/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-stue-soveværelseskik.webp', alt: 'Kik fra stue mod soveværelse — Arkitekttegnestuen Yderskov' },
				{ src: '/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-soveværelse-stuekik.webp', alt: 'Kik fra soveværelse mod stue — Arkitekttegnestuen Yderskov' },
				{ src: '/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-køkken-kogesektion.webp', alt: 'Kogesektion i køkken — Arkitekttegnestuen Yderskov' },
				{ src: '/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-køkkengulv.webp', alt: 'Køkkengulv i lejlighedsrenovering — Arkitekttegnestuen Yderskov' },
				{ src: '/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-stuegulv.webp', alt: 'Stuegulv i lejlighedsrenovering — Arkitekttegnestuen Yderskov' },
				{ src: '/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-badmiljø.webp', alt: 'Badeværelse i lejlighedsrenovering — Arkitekttegnestuen Yderskov' },
				{ src: '/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-toilet.webp', alt: 'Toilet i lejlighedsrenovering — Arkitekttegnestuen Yderskov' }
			]}
		/>
	</div>
</section>

<section class="s">
	<div class="s-inner">
		<div class="proj-header">
			<div>
				<span class="eyebrow">Projekt</span>
				<h2 class="sec-hed" style="margin-bottom: 0;">Lejlighedsrenovering III (1. tv)<br />Aalborg.</h2>
				<ProjectDescription
					text="Dette projekt i Aalborg er den anden halvdel af den oprindelige store herskabslejlighed, som er blevet opdelt i to mindre boliger. I denne lejlighed (1. tv) har vi fokuseret på at skabe en funktionel planløsning, der udnytter kvadratmeterne fuldt ud. Køkkenet er enkelt og moderne med smarte opbevaringsløsninger og åbne hylder, der bevarer en lys atmosfære, mens det tilhørende toilet er renoveret i en enkel og ren stil."
					style="margin-top: 1.25rem; max-width: 680px; color: var(--sub);"
				/>
			</div>
		</div>
		<ImageGrid
			images={[
				{ src: '/images/Reberbansgade/Aalborg-reberbansgade-renovering-1tv-køkken-.webp', alt: 'Køkken i lejlighedsrenovering — Arkitekttegnestuen Yderskov' },
				{ src: '/images/Reberbansgade/Aalborg-reberbansgade-renovering-1tv-køkkenhylder.webp', alt: 'Køkkenhylder i lejlighedsrenovering — Arkitekttegnestuen Yderskov' },
				{ src: '/images/Reberbansgade/Aalborg-reberbansgade-renovering-1tv-toilet.webp', alt: 'Toilet i lejlighedsrenovering — Arkitekttegnestuen Yderskov' }
			]}
		/>
	</div>
</section>

<section class="s">
	<div class="s-inner">
		<span class="eyebrow">Spørgsmål og svar</span>
		<h2 class="sec-hed">FAQ — lejligheder</h2>
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

<!-- Inspiration Galleri -->
<section class="s s-off">
	<div class="s-inner">
		<span class="eyebrow">Galleri</span>
		<h2 class="sec-hed">Inspiration</h2>
		<InspirationGallery />
	</div>
</section>

<CtaBand />

<section class="s form-bg" id="kontakt">
	<div class="s-inner">
		<div class="form-layout">
			<div class="form-meta">
				<span class="eyebrow">Kontakt os</span>
				<h2 class="sec-hed">Fortæl os om<br />dit projekt</h2>
				<p style="margin-top: 1.5rem;">Ring eller skriv til os. Vi svarer inden 24 timer og tilbyder et gratis, uforpligtende møde.</p>
				<p><a href="tel:29723427">29 72 34 27</a></p>
				<p><a href="mailto:cy@yderskov.com">cy@yderskov.com</a></p>
			</div>
			<ContactForm />
		</div>
	</div>
</section>
