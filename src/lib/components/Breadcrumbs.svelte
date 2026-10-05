<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		items: { label: string; href?: string }[];
		noHero?: boolean;
		children?: Snippet;
	}

	let { items, noHero = false }: Props = $props();

	const trail: { label: string; href?: string }[] = [{ label: 'Forside', href: '/' }, ...items];

	const schema = $derived({
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: trail.map((item, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: item.label,
			...(item.href ? { item: `https://yderskov.com${item.href}` } : {})
		}))
	});
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>`}
</svelte:head>

<!-- Plain div, not <nav> — the site has a global `nav { position: fixed }`
		rule for the main header that would otherwise leak onto this. -->
<div class={`breadcrumbs${noHero ? ' breadcrumbs-no-hero' : ''}`} role="navigation" aria-label="Brødkrumme">
	<div class="s-inner breadcrumbs-inner">
		<ol>
			{#each trail as item, i (i)}
				<li>
					{#if item.href}
						<a href={item.href}>{item.label}</a>
					{:else}
						<span aria-current="page">{item.label}</span>
					{/if}
					{#if i < trail.length - 1}
						<span class="breadcrumb-sep" aria-hidden="true">/</span>
					{/if}
				</li>
			{/each}
		</ol>
	</div>
</div>
