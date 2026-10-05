<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import BlogListing from '$lib/components/BlogListing.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { posts } from '$lib/data/blog-listing';

	const categories = [
		{ key: 'alle', label: 'Alle' },
		{ key: 'villa', label: 'Villa & boligdesign' },
		{ key: 'sommerhus', label: 'Sommerhus' },
		{ key: 'arkitekt', label: 'Arkitekt & proces' },
		{ key: 'grund', label: 'Grund & placering' },
		{ key: 'boligdetalje', label: 'Boligdetaljer' },
		{ key: 'case', label: 'Cases fra praksis' }
	];

	const blogSchema = {
		'@context': 'https://schema.org',
		'@type': 'Blog',
		name: 'Yderskov Arkitekter — Blog',
		url: 'https://yderskov.com/blog',
		publisher: { '@type': 'ProfessionalService', name: 'Yderskov Arkitekter', url: 'https://yderskov.com' },
		blogPost: posts.slice(0, 20).map((p) => ({
			'@type': 'BlogPosting',
			headline: p.title,
			url: `https://yderskov.com${p.href}`
		}))
	};
</script>

<svelte:head>
	<title>Blog — Arkitektens tanker om byggeri | Yderskov Arkitekter</title>
	<meta
		name="description"
		content="Læs om arkitektur, byggeri og processen bag — fra prisberegning og lokalplaner til færdige villaer og sommerhuse. Blog fra Arkitekttegnestuen Yderskov."
	/>
	<link rel="canonical" href="https://yderskov.com/blog" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="da_DK" />
	<meta property="og:url" content="https://yderskov.com/blog" />
	<meta property="og:siteName" content="Yderskov Arkitekter" />
	<meta property="og:image" content="https://yderskov.com/images/Ikarosvej/Aalborg-Ikarosvej-ny-villa-indkørsel.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://yderskov.com/images/Ikarosvej/Aalborg-Ikarosvej-ny-villa-indkørsel.webp" />
	{@html `<script type="application/ld+json">${JSON.stringify(blogSchema).replace(/</g, '\\u003c')}</script>`}
</svelte:head>

<Breadcrumbs items={[{ label: 'Blog' }]} />
<Hero
	slides={[
		{ src: '/images/Ikarosvej/Aalborg-Ikarosvej-ny-villa-indkørsel.webp', alt: 'Ny villa i Aalborg — Arkitekttegnestuen Yderskov' }
	]}
	showTabs={false}
	tag="Blog"
	subtitle="Blog"
	lines={[
		'Arkitektur er mere end tegninger. Her skriver vi om processen og byggerierne bag.',
		'Byggeri tegnet kun til jer, til jeres grund, jeres ønsker og jeres budget.',
		'Gratis og uforpligtende første idemøde. Vi kommer ud til jer.'
	]}
	italicLines={[1, 2]}
/>

<section class="s">
	<div class="s-inner">
		<div style="max-width: 640px; margin-bottom: 2.5rem;">
			<span class="eyebrow">Fra arkitektens blog</span>
			<h1 class="sec-hed">Arkitektens blog</h1>
			<p class="body-p" style="margin-top: 1rem;">
				Her skriver vi om alt, der har med arkitektur og byggeri at gøre — fra <a href="/priser" class="text-link">vores priser</a> og <a href="/om" class="text-link">vores samlede proces</a> til konkrete designvalg og færdige byggerier.
			</p>
		</div>

		<BlogListing {posts} {categories} />
	</div>
</section>
