<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import ImageGrid from '$lib/components/ImageGrid.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import InspirationGallery from '$lib/components/InspirationGallery.svelte';
	import ProjectDescription from '$lib/components/ProjectDescription.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { sjaellandFAQ, projectGalleries } from '$lib/data/arkitekt-sjaelland';

	const sjaellandSchema = {
		'@context': 'https://schema.org',
		'@type': 'ProfessionalService',
		name: 'Yderskov Arkitekter - Sjælland',
		url: 'https://yderskov.com/arkitekt-sjaelland',
		telephone: '+4529723427',
		email: 'cy@yderskov.com',
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'København & Sjælland',
			addressCountry: 'DK'
		},
		description:
			'Erfaren landsdækkende arkitekttegnestue. Vi tegner og bygger din villa, dit sommerhus eller din tilbygning på hele Sjælland og i Københavnsområdet til fast pris.',
		areaServed: [
			{ '@type': 'AdministrativeArea', name: 'Sjælland' },
			{ '@type': 'AdministrativeArea', name: 'København' }
		]
	};
</script>

<svelte:head>
	<title>Arkitekt Sjælland & København — Tegnestue | Yderskov</title>
	<meta
		name="description"
		content="Arkitekt på Sjælland: Yderskov Tegnestue tegner og bygger villaer, sommerhuse og tilbygninger i København, Køge, Ramløse, Brønshøj, Odsherred & Gilleleje til fast pris."
	/>
	<link rel="canonical" href="https://yderskov.com/arkitekt-sjaelland" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="da_DK" />
	<meta property="og:url" content="https://yderskov.com/arkitekt-sjaelland" />
	<meta property="og:siteName" content="Yderskov Arkitekter" />
	<meta property="og:image" content="https://yderskov.com/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-terrasse.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Arkitekt Sjælland & København — Tegnestue | Yderskov" />
	<meta
		name="twitter:description"
		content="Arkitekt på Sjælland: Yderskov Tegnestue tegner og bygger villaer, sommerhuse og tilbygninger i København, Køge, Ramløse, Brønshøj, Odsherred & Gilleleje til fast pris."
	/>
	<meta name="twitter:image" content="https://yderskov.com/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-terrasse.webp" />
	{@html `<script type="application/ld+json">${JSON.stringify(sjaellandSchema).replace(/</g, '\\u003c')}</script>`}
</svelte:head>

<Breadcrumbs items={[{ label: 'Arkitekt Sjælland' }]} />
<Hero
	slides={[
		{
			src: '/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-terrasse.webp',
			alt: 'Arkitekttegnet villa tilbygning — Arkitekttegnestuen Yderskov'
		}
	]}
	tag="Arkitekt Sjælland"
	subtitle="Arkitekt Sjælland"
	lines={[
		'Fra første idé til færdigt byggeri på Sjælland og i Københavnsområdet.',
		'Landsdækkende tegnestue med jysk grundighed, fleksibilitet og fast pris.',
		'Gratis og uforpligtende første idemøde direkte på din byggegrund.'
	]}
	italicLines={[1, 2]}
/>

<!-- Intro -->
<section class="s">
	<div class="s-inner">
		<div class="text-2col">
			<div>
				<span class="eyebrow">Landsdækkende arkitekt</span>
				<h1 class="sec-hed">Arkitekt Sjælland</h1>
				<p style="font-size: 1.1rem; font-weight: 200; color: var(--sub); margin-top: 1rem; letter-spacing: -0.01em; line-height: 1.6;">
					— Yderskov Tegnestue på Sjælland og i København
				</p>
			</div>
			<div>
				<p class="body-intro">
					Søger du en erfaren <strong>arkitekt på Sjælland</strong>? Yderskov Tegnestue er din landsdækkende partner. Selvom vi har base i Nordjylland, tegner og opfører vi huse på hele Sjælland og i København uden besvær med geografisk afstand.
				</p>
				<p class="body-p">
					Vi har pt. byggerier flere steder på <span class="place-hl">Sjælland</span>: en ny villa i <span class="place-hl">Køge</span>, ombygning og renovering i <span class="place-hl">Ramløse</span>, om- og tilbygning i <span class="place-hl">Brønshøj</span> samt flere sommerhusbyggerier i <span class="place-hl">Odsherred</span> og <span class="place-hl">Gilleleje</span>. Vores portefølje dækker alt fra unikke arkitekttegnede villaer og sommerhuse til gennemtænkte tilbygninger.
				</p>
				<p class="body-p">
					Hos os får du fuld tryghed. Vi står for hele processen og opfører dit byggeri til en <strong>aftalt fast pris</strong>, så du undgår budgetskred. Kontakt os for et <strong>gratis idémøde</strong> direkte på din byggegrund.
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

<!-- Project galleries -->
{#each projectGalleries as gallery, i (i)}
	<section class={`s${gallery.dark ? ' s-off' : ''}`}>
		<div class="s-inner">
			<div class="proj-header">
				<div>
					<span class="eyebrow">{gallery.eyebrow}</span>
					<h2 class="sec-hed" style="margin-bottom: 0; white-space: pre-line;">
						{gallery.title}
					</h2>
					{#if gallery.location}
						<p class="proj-meta">
							{gallery.location}{gallery.size ? ` · ${gallery.size}` : ''}{gallery.year ? ` · ${gallery.year}` : ''}
						</p>
					{/if}
					{#if gallery.description}
						<ProjectDescription text={gallery.description} />
					{/if}
				</div>
			</div>
			<ImageGrid images={gallery.images} />
		</div>
	</section>
{/each}

<!-- FAQ -->
<section class="s">
	<div class="s-inner">
		<span class="eyebrow">FAQ</span>
		<h2 class="sec-hed">Ofte stillede spørgsmål</h2>
		<div class="faq-grid">
			{#each sjaellandFAQ as item, i (i)}
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
				<p style="margin-top: 1.5rem;">Ring eller skriv til os. Vi svarer altid inden for 24 timer og tilbyder et gratis, uforpligtende idemøde direkte på din byggegrund på Sjælland.</p>
				<p><a href="tel:29723427">ring 29 72 34 27</a></p>
				<p><a href="mailto:cy@yderskov.com">cy@yderskov.com</a></p>
			</div>
			<ContactForm />
		</div>
	</div>
</section>
