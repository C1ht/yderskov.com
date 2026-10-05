<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import FaqAccordion from '$lib/components/FaqAccordion.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { sections } from '$lib/data/faq-sections';

	const faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: sections.flatMap((s: any) =>
			s.items.map((item: any) => ({
				'@type': 'Question',
				name: item.q,
				acceptedAnswer: { '@type': 'Answer', text: item.a }
			}))
		)
	};
</script>

<svelte:head>
	<title>Spørgsmål & svar om arkitekt, priser og byggeri | Yderskov</title>
	<meta
		name="description"
		content="Få svar på dine spørgsmål om arkitektpriser, byggeproces, myndighedsprojekter og håndværkere. Læs vores FAQ og bliv klar til dit byggeprojekt."
	/>
	<link rel="canonical" href="https://yderskov.com/faq" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="da_DK" />
	<meta property="og:url" content="https://yderskov.com/faq" />
	<meta property="og:siteName" content="Yderskov Arkitekter" />
	<meta property="og:image" content="https://yderskov.com/images/Løvevej/Ålbæk-poolhus-terrasse.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Spørgsmål & svar om arkitekt, priser og byggeri | Yderskov" />
	<meta
		name="twitter:description"
		content="Få svar på dine spørgsmål om arkitektpriser, byggeproces, myndighedsprojekter og håndværkere. Læs vores FAQ og bliv klar til dit byggeprojekt."
	/>
	<meta name="twitter:image" content="https://yderskov.com/images/Løvevej/Ålbæk-poolhus-terrasse.webp" />
	{@html `<script type="application/ld+json">${JSON.stringify(faqSchema).replace(/</g, '\\u003c')}</script>`}
</svelte:head>

<Breadcrumbs items={[{ label: 'FAQ' }]} />
<Hero
	slides={[
		{ src: '/images/Løvevej/Ålbæk-poolhus-terrasse.webp', alt: 'Arkitekttegnet bolig — Arkitekttegnestuen Yderskov' }
	]}
	tag="FAQ"
	subtitle="FAQ"
	lines={[
		'I har tankerne, vi sætter stregerne.',
		'Byggeri tegnet kun til jer, til jeres grund, jeres ønsker og jeres budget.',
		'Gratis og uforpligtende første idemøde. Vi kommer ud til jer.'
	]}
	italicLines={[1, 2]}
/>

<section class="s">
	<div class="s-inner">
		<div style="max-width: 640px;">
			<span class="eyebrow">Spørgsmål og svar</span>
			<h1 class="sec-hed">Ofte stillede spørgsmål</h1>
			<p class="body-p" style="margin-top: 1rem;">
				Her har vi samlet svar på de spørgsmål vi oftest får. Du kan også læse om <a href="/om" class="text-link">vores proces</a> eller se vores prissatser på <a href="/priser" class="text-link">vores prisside</a>. Finder du ikke svar på dit spørgsmål, er du altid velkommen til at <a href="/kontakt" class="text-link">kontakte os</a>.
			</p>
		</div>
	</div>
</section>

{#each sections as section, i (i)}
	<section class={`s${i % 2 === 1 ? ' s-off' : ''}`}>
		<div class="s-inner">
			<span class="eyebrow">{section.title}</span>
			<h2 class="sec-hed">{section.title}</h2>
			<FaqAccordion items={section.items} />
		</div>
	</section>
{/each}

<CtaBand />

<section class="s form-bg" id="kontakt">
	<div class="s-inner">
		<div class="form-layout">
			<div class="form-meta">
				<span class="eyebrow">Stadig spørgsmål?</span>
				<h2 class="sec-hed">Spørg os<br />direkte</h2>
				<p style="margin-top: 1.5rem;">Ring eller skriv til os. Vi svarer inden 24 timer.</p>
				<p><a href="tel:29723427">29 72 34 27</a></p>
				<p><a href="mailto:cy@yderskov.com">cy@yderskov.com</a></p>
			</div>
			<ContactForm />
		</div>
	</div>
</section>
