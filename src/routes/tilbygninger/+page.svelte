<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import ImageGrid from '$lib/components/ImageGrid.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import InspirationGallery from '$lib/components/InspirationGallery.svelte';
	import ProjectDescription from '$lib/components/ProjectDescription.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import { projectGalleries, faqItems } from '$lib/data/tilbygninger';

	const projectSchema = $derived({
		'@context': 'https://schema.org',
		'@graph': projectGalleries.map((p: any) => {
			const location = p.title.split(',').pop()?.trim().replace('.', '').replace(/\n/g, ' ') || 'Danmark';
			return {
				'@type': 'SingleFamilyResidence',
				name: p.title.replace(/\n/g, ' '),
				description: `Arkitekttegnet om- eller tilbygning i ${location} udført af Yderskov Arkitekter.`,
				address: {
					'@type': 'PostalAddress',
					addressLocality: location,
					addressCountry: 'DK'
				},
				image: [
					...p.images.map((img: any) => `https://yderskov.com${img.src}`),
					...('beforeImages' in p && Array.isArray(p.beforeImages)
						? p.beforeImages.map((img: any) => `https://yderskov.com${img.src}`)
						: [])
				],
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
	<title>Arkitekt til om- & tilbygning — Priser & cases | Yderskov</title>
	<meta
		name="description"
		content="Skal du bygge til eller bygge om? Få tegnet din tilbygning af en arkitekt til fast pris. Se priser og eksempler på ombygning. Book et gratis møde!"
	/>
	<link rel="canonical" href="https://yderskov.com/tilbygninger" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="da_DK" />
	<meta property="og:url" content="https://yderskov.com/tilbygninger" />
	<meta property="og:siteName" content="Yderskov Arkitekter" />
	<meta property="og:image" content="https://yderskov.com/images/Godthåbsvej/Brønderslev-ombygning-efter-3.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Arkitekt til om- & tilbygning — Priser & cases | Yderskov" />
	<meta
		name="twitter:description"
		content="Skal du bygge til eller bygge om? Få tegnet din tilbygning af en arkitekt til fast pris. Se priser og eksempler på ombygning. Book et gratis møde!"
	/>
	<meta name="twitter:image" content="https://yderskov.com/images/Godthåbsvej/Brønderslev-ombygning-efter-3.webp" />
	{@html `<script type="application/ld+json">${JSON.stringify(projectSchema).replace(/</g, '\\u003c')}</script>`}
</svelte:head>

<Breadcrumbs items={[{ label: 'Om- og tilbygninger' }]} />
<Hero
	slides={[
		{
			src: '/images/Godthåbsvej/Brønderslev-ombygning-efter-2.webp',
			alt: 'Ombygning og modernisering af 50er-villa, Brønderslev nær Aalborg — Arkitekttegnestuen Yderskov'
		}
	]}
	tag="Om- og tilbygninger"
	subtitle="Om- og tilbygninger"
	lines={[
		'Jeres hus har allerede en sjæl. Vi hjælper den med at vokse.',
		'Gratis og uforpligtende første idemøde. Vi kommer ud til jer.'
	]}
	italicLines={[0, 1]}
/>

<section class="s">
	<div class="s-inner">
		<div class="text-2col">
			<div>
				<span class="eyebrow">Om- og tilbygninger</span>
				<h1 class="sec-hed">Om- og tilbygninger<br />med arkitekttegnet kvalitet.</h1>
			</div>
			<div>
				<p class="body-p">
					Din bolig rummer sandsynligvis mere potentiale end du tror. Vi ser mulighederne og tegner en løsning der giver mere lys, plads og en bedre planløsning. Søger du en <a href="/arkitekt-aalborg" class="text-link">arkitekt i Aalborg</a> til din ombygning, står vi klar. Se også vores færdige <a href="/villaer" class="text-link">villaer</a> samt vores <a href="/prisberegner" class="text-link">prisberegner</a>.
				</p>
				<p class="body-p">
					Vi styrer hele projektet — fra tegning og byggetilladelse til den færdige tilbygning med egne håndværkere.
				</p>
				<p class="body-p">
					Tilbygninger starter fra 14.000 kr./m² — lidt lavere end nybyggeri, da fundamentet og den eksisterende bygning ofte reducerer kompleksiteten.
				</p>
				<p class="body-p">
					<a href="#kontakt" class="text-link">→ Kom i gang</a>
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Prisberegner-banner -->
<div class="announcement-bar">
	<div class="announcement-inner">
		<span class="announcement-badge">Gratis værktøj</span>
		<div class="announcement-body">
			<p class="announcement-title">Nysgerrig på prisen for <strong>din tilbygning</strong>?</p>
			<p class="announcement-sub">Prøv vores interaktive prisberegner og få et vejledende prisskøn på under 2 minutter.</p>
		</div>
		<a href="/prisberegner" class="announcement-cta">Prøv prisberegneren →</a>
	</div>
</div>

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
		<h2 class="sec-hed">FAQ — tilbygninger</h2>
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
				<h2 class="sec-hed">Lad os se<br />mulighederne</h2>
				<p style="margin-top: 1.5rem;">Ring eller skriv til os. Vi svarer inden 24 timer og tilbyder et gratis, uforpligtende møde hos jer.</p>
				<p><a href="tel:29723427">29 72 34 27</a></p>
				<p><a href="mailto:cy@yderskov.com">cy@yderskov.com</a></p>
			</div>
			<ContactForm />
		</div>
	</div>
</section>
