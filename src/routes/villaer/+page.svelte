<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import ImageGrid from '$lib/components/ImageGrid.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import InspirationGallery from '$lib/components/InspirationGallery.svelte';
	import ProjectDescription from '$lib/components/ProjectDescription.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { projectGalleries, faqItems } from '$lib/data/villaer';

	const projectSchema = $derived({
		'@context': 'https://schema.org',
		'@graph': projectGalleries.map((p: any) => {
			const floorSizeMatch = p.size.match(/(\d+)\s*m²\s*bolig/);
			const floorSize = floorSizeMatch ? parseInt(floorSizeMatch[1]) : undefined;
			const locality = p.location.split(',')[0].trim();
			return {
				'@type': 'SingleFamilyResidence',
				name: p.title.replace(/\n/g, ' '),
				description: p.description.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'),
				address: {
					'@type': 'PostalAddress',
					addressLocality: locality,
					addressCountry: 'DK'
				},
				image: p.images.map((img: any) => `https://yderskov.com${img.src}`),
				architect: {
					'@type': 'LocalBusiness',
					name: 'Yderskov Arkitekter',
					url: 'https://yderskov.com/'
				},
				yearBuilt: p.year ? parseInt(p.year) : undefined,
				floorSize: floorSize
					? {
							'@type': 'QuantitativeValue',
							value: floorSize,
							unitText: 'm²'
						}
					: undefined
			};
		})
	});
</script>

<svelte:head>
	<title>Arkitekttegnet villa — Se priser & projekter | Yderskov</title>
	<meta
		name="description"
		content="Drømmer du om en arkitekttegnet villa? Se projekter, priser og byggeproces hos Yderskov. Vi tilbyder fast pris, egne håndværkere & gratis første møde."
	/>
	<link rel="canonical" href="https://yderskov.com/villaer" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="da_DK" />
	<meta property="og:url" content="https://yderskov.com/villaer" />
	<meta property="og:siteName" content="Yderskov Arkitekter" />
	<meta property="og:image" content="https://yderskov.com/images/Karetmagervej/Sæby-ny-villa-funkis-forside.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Arkitekttegnet villa — Se priser & projekter | Yderskov" />
	<meta
		name="twitter:description"
		content="Drømmer du om en arkitekttegnet villa? Se projekter, priser og byggeproces hos Yderskov. Vi tilbyder fast pris, egne håndværkere & gratis første møde."
	/>
	<meta name="twitter:image" content="https://yderskov.com/images/Karetmagervej/Sæby-ny-villa-funkis-forside.webp" />
	{@html `<script type="application/ld+json">${JSON.stringify(projectSchema).replace(/</g, '\\u003c')}</script>`}
</svelte:head>

<Hero
	slides={[
		{ src: '/images/Karetmagervej/Sæby-ny-villa-funkis-haveside.webp', alt: 'Arkitekttegnet villa — Arkitekttegnestuen Yderskov' }
	]}
	tag="Villaer"
	subtitle="Villaer"
	lines={[
		'Jeres villa skal fortælle jeres historie, fra første streg til sidste mursten.',
		'Gratis og uforpligtende første idemøde. Vi kommer ud til jer.'
	]}
	italicLines={[0, 1]}
/>
<Breadcrumbs items={[{ label: 'Villaer' }]} />

<!-- Intro -->
<section class="s">
	<div class="s-inner">
		<div class="text-2col">
			<div>
				<span class="eyebrow">Arkitekttegnede villaer</span>
				<h1 class="sec-hed">Arkitekttegnede villaer<br />fra idé til nøglefærdigt.</h1>
			</div>
			<div>
				<p class="body-p">
					Hvert villaprojekt starter med en grundig dialog om jeres ønsker, behov og økonomi. Vi tegner, projekterer og bygger — med egne håndværkere og ét samlet ansvar. Som jeres <a href="/arkitekt-aalborg" class="text-link">arkitekt i Aalborg</a> og resten af landet hjælper vi jer hele vejen. Læs mere om <a href="/om" class="text-link">vores tegnestue</a> eller få et overblik over <a href="/priser" class="text-link">vores prissatser</a>.
				</p>
				<p class="body-p">
					Se vores projekter og lad dig inspirere. Kontakt os for et gratis første møde direkte på grunden.
				</p>
				<p class="body-p">
					<a href="#kontakt" class="text-link">→ Kom i gang</a>
				</p>
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
		<span class="eyebrow">Spørgsmål og svar</span>
		<h2 class="sec-hed">FAQ — villaer</h2>
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

<!-- Contact form -->
<section class="s form-bg" id="kontakt">
	<div class="s-inner">
		<div class="form-layout">
			<div class="form-meta">
				<span class="eyebrow">Kontakt os</span>
				<h2 class="sec-hed">Lad os skabe<br />dit drømmehus</h2>
				<p style="margin-top: 1.5rem;">Ring eller skriv til os. Vi svarer inden 24 timer og tilbyder et gratis, uforpligtende møde direkte på grunden.</p>
				<p><a href="tel:29723427">29 72 34 27</a></p>
				<p><a href="mailto:cy@yderskov.com">cy@yderskov.com</a></p>
			</div>
			<ContactForm />
		</div>
	</div>
</section>
