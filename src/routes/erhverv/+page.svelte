<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import ImageGrid from '$lib/components/ImageGrid.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import InspirationGallery from '$lib/components/InspirationGallery.svelte';
	import ProjectDescription from '$lib/components/ProjectDescription.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { projectGalleries, faqItems } from '$lib/data/erhverv';

	const projectSchema = $derived({
		'@context': 'https://schema.org',
		'@graph': projectGalleries.map((p: any) => {
			const location = p.title.split(',').pop()?.trim().replace('.', '').replace(/\n/g, ' ') || 'Danmark';
			const isApartment = p.title.toLowerCase().includes('lejlighed') || p.title.toLowerCase().includes('bolig');
			const images = [
				...p.images.map((img: any) => `https://yderskov.com${img.src}`),
				...('beforeImages' in p && Array.isArray(p.beforeImages)
					? p.beforeImages.map((img: any) => `https://yderskov.com${img.src}`)
					: [])
			];
			return {
				'@type': isApartment ? 'ApartmentComplex' : 'CommercialProperty',
				name: p.title.replace(/\n/g, ' '),
				description: `Arkitekttegnet erhvervs- eller boligbyggeri i ${location} udført af Yderskov Arkitekter.`,
				address: {
					'@type': 'PostalAddress',
					addressLocality: location,
					addressCountry: 'DK'
				},
				image: images,
				architect: {
					'@type': 'LocalBusiness',
					name: 'Yderskov Arkitekter',
					url: 'https://yderskov.com/'
				}
			};
		})
	});
</script>

<svelte:head>
	<title>Erhvervsbyggeri — Arkitekttegnede kontorer | Yderskov</title>
	<meta
		name="description"
		content="Vi tegner erhvervsbyggeri, der matcher jeres behov — fra kontorer til udlejningsboliger og ombygninger. Få arkitektrådgivning til aftalt fast pris."
	/>
	<link rel="canonical" href="https://yderskov.com/erhverv" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="da_DK" />
	<meta property="og:url" content="https://yderskov.com/erhverv" />
	<meta property="og:siteName" content="Yderskov Arkitekter" />
	<meta property="og:image" content="https://yderskov.com/images/Assensvej Kontormiljø/Aalborg-Assensvej-kontormiljø.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Erhvervsbyggeri — Arkitekttegnede kontorer | Yderskov" />
	<meta
		name="twitter:description"
		content="Vi tegner erhvervsbyggeri, der matcher jeres behov — fra kontorer til udlejningsboliger og ombygninger. Få arkitektrådgivning til aftalt fast pris."
	/>
	<meta name="twitter:image" content="https://yderskov.com/images/Assensvej Kontormiljø/Aalborg-Assensvej-kontormiljø.webp" />
	{@html `<script type="application/ld+json">${JSON.stringify(projectSchema).replace(/</g, '\\u003c')}</script>`}
</svelte:head>

<Breadcrumbs items={[{ label: 'Erhverv' }]} />
<Hero
	slides={[
		{ src: '/images/Hals Rækkehuse/Hals-Aalborgvej40-udlejning-.webp', alt: 'Udlejningsboliger i Hals — Arkitekttegnestuen Yderskov' }
	]}
	tag="Erhverv"
	subtitle="Erhverv"
	lines={[
		'Dine rammer sætter tonen for din forretning. Lad os tegne dem.',
		'Gratis og uforpligtende første idemøde. Vi kommer ud til jer.'
	]}
	italicLines={[0, 1]}
/>

<section class="s">
	<div class="s-inner">
		<div class="text-2col">
			<div>
				<span class="eyebrow">Erhvervsbyggeri</span>
				<h1 class="sec-hed">Erhvervsbyggeri<br />tegnet til jeres behov.</h1>
			</div>
			<div>
				<p class="body-p">
					Vi tegner erhvervsbyggeri der afspejler jeres virksomhed — fra funktionelle kontorlokaler til produktionsfaciliteter med arkitektonisk identitet. Læs mere om <a href="/om" class="text-link">vores samlede proces</a> eller se vores generelle <a href="/priser" class="text-link">priser på erhverv og bolig</a>.
				</p>
				<p class="body-p">
					Vi håndterer hele processen fra idé til indvielse — med focus på jeres budget og tidsplan.
				</p>
				<p class="body-p">
					<a href="#kontakt" class="text-link">→ Fortæl os om jeres projekt</a>
				</p>
			</div>
		</div>
	</div>
</section>

{#each projectGalleries as gallery, i (i)}
	<section class={`s${gallery.dark ? ' s-off' : ''}`}>
		<div class="s-inner">
			<div class="proj-header">
				<div>
					<span class="eyebrow">{gallery.eyebrow}</span>
					{#if 'beforeImages' in gallery && gallery.beforeImages}
						<span class="proj-ba-badge">
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85 1 6.5 2.5" />
								<path d="M21 3v6h-6" />
							</svg>
							Før / Efter
						</span>
					{/if}
					<h2 class="sec-hed" style="margin-bottom: 0; white-space: pre-line;">
						{gallery.title}
					</h2>
					{#if 'location' in gallery && gallery.location}
						<p class="proj-meta">
							{gallery.location}{gallery.size ? ` · ${gallery.size}` : ''}{gallery.year ? ` · ${gallery.year}` : ''}
						</p>
					{/if}
					{#if 'description' in gallery && gallery.description}
						<ProjectDescription text={gallery.description} />
					{/if}
				</div>
			</div>
			{#if 'afterLabel' in gallery}<p class="proj-grid-label">{gallery.afterLabel}</p>{/if}
			<ImageGrid images={gallery.images} />
			{#if 'beforeImages' in gallery && gallery.beforeImages}
				<p class="proj-grid-label" style="margin-top: 2rem;">{gallery.beforeLabel}</p>
				<ImageGrid images={gallery.beforeImages} />
			{/if}
		</div>
	</section>
{/each}

<section class="s">
	<div class="s-inner">
		<span class="eyebrow">Spørgsmål og svar</span>
		<h2 class="sec-hed">FAQ — erhverv</h2>
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
				<h2 class="sec-hed">Fortæl os om<br />jeres erhvervsprojekt</h2>
				<p style="margin-top: 1.5rem;">Ring eller skriv til os. Vi svarer inden 24 timer.</p>
				<p><a href="tel:29723427">29 72 34 27</a></p>
				<p><a href="mailto:cy@yderskov.com">cy@yderskov.com</a></p>
			</div>
			<ContactForm />
		</div>
	</div>
</section>
