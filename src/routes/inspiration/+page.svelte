<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import InspirationGallery from '$lib/components/InspirationGallery.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	const inspirationSchema = {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: 'Inspiration & galleri — Yderskov Arkitekter',
		description:
			'Få inspiration til dit byggeprojekt. Gå på opdagelse i vores galleri af afsluttede villaer, sommerhuse samt om- og tilbygninger.',
		url: 'https://yderskov.com/inspiration'
	};
</script>

<svelte:head>
	<title>Inspiration & galleri — Yderskov Arkitekter</title>
	<meta
		name="description"
		content="Få inspiration til dit byggeprojekt. Gå på opdagelse i vores galleri af afsluttede villaer, sommerhuse samt om- og tilbygninger."
	/>
	<link rel="canonical" href="https://yderskov.com/inspiration" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="da_DK" />
	<meta property="og:url" content="https://yderskov.com/inspiration" />
	<meta property="og:siteName" content="Yderskov Arkitekter" />
	<meta property="og:image" content="https://yderskov.com/images/Lerstien/Frederikshavn-lerstien-terrasse-byview.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Inspiration & galleri — Yderskov Arkitekter" />
	<meta
		name="twitter:description"
		content="Få inspiration til dit byggeprojekt. Gå på opdagelse i vores galleri af afsluttede villaer, sommerhuse samt om- og tilbygninger."
	/>
	<meta name="twitter:image" content="https://yderskov.com/images/Lerstien/Frederikshavn-lerstien-terrasse-byview.webp" />
	{@html `<script type="application/ld+json">${JSON.stringify(inspirationSchema).replace(/</g, '\\u003c')}</script>`}
</svelte:head>

<Breadcrumbs items={[{ label: 'Inspiration' }]} />
<Hero
	slides={[
		{ src: '/images/Lerstien/Frederikshavn-lerstien-terrasse-byview.webp', alt: 'Inspiration galleri — Arkitekttegnestuen Yderskov' }
	]}
	tag="Inspiration"
	subtitle="Inspiration"
	lines={[
		'Gå på opdagelse i vores afsluttede projekter og få idéer til dit eget byggeri.',
		'Billedgalleri med eksempler på villaer, sommerhuse og tilbygninger.'
	]}
	italicLines={[0, 1]}
	showTabs={false}
	showQuote={false}
	showForm={false}
/>

<!-- Intro -->
<section class="s">
	<div class="s-inner">
		<div class="text-2col">
			<div>
				<span class="eyebrow">Galleri</span>
				<h1 class="sec-hed">Få inspiration til<br />dit næste projekt.</h1>
			</div>
			<div>
				<p class="body-p">
					Her har vi samlet et udvalg af billeder fra vores færdige byggerier. Du kan filtrere billederne efter kategori for at finde netop det, der interesserer dig – uanset om det er moderne villaer, sommerhuse, skitser eller indendørs detaljer.
				</p>
				<p class="body-p">
					Galleriet spænder over hele processen: fra de tidlige skitseforslag og materialevalg til de færdige rum – køkkener, badeværelser, ovenlys og de detaljer, der ofte gør den største forskel i hverdagen. Se det som en samling af konkrete eksempler på, hvad der kan lade sig gøre inden for jeres budget og på jeres grund.
				</p>
				<p class="body-p">
					Tag gerne dine yndlingsbilleder med som inspiration til vores første gratis, uforpligtende idémøde.
				</p>
				<p class="body-p">
					<a href="#kontakt" class="text-link">→ Book et gratis idémøde</a>
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Inspiration Galleri -->
<section class="s s-off" style="padding-top: 3rem;">
	<div class="s-inner">
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
				<p style="margin-top: 1.5rem;">Ring eller skriv til os. Vi svarer altid inden for 24 timer og tilbyder et gratis, uforpligtende idemøde direkte på din byggegrund.</p>
				<p><a href="tel:29723427">ring 29 72 34 27</a></p>
				<p><a href="mailto:cy@yderskov.com">cy@yderskov.com</a></p>
			</div>
			<ContactForm />
		</div>
	</div>
</section>
