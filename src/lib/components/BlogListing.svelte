<script lang="ts">
	import Image from '$lib/components/Image.svelte';

	type Post = {
		href: string;
		date: string;
		cat: string;
		catKey: string;
		title: string;
		subtitle?: string;
		excerpt: string;
		image?: string;
	};

	type Category = {
		key: string;
		label: string;
	};

	interface BlogListingProps {
		posts: Post[];
		categories: Category[];
	}

	let { posts, categories }: BlogListingProps = $props();

	function parseDate(dateStr: string): Date {
		const [day, month, year] = dateStr.split(' / ').map(Number);
		return new Date(year, month - 1, day);
	}

	let active = $state('alle');
	let sortAsc = $state(false);
	let limit = $state(12);

	const today = new Date();
	today.setHours(0, 0, 0, 0);

	const published = $derived(posts.filter((p) => parseDate(p.date) <= today));
	const filtered = $derived(
		active === 'alle' ? published : published.filter((p) => p.catKey === active)
	);
	const sorted = $derived(
		[...filtered].sort((a, b) => {
			const diff = parseDate(b.date).getTime() - parseDate(a.date).getTime();
			return sortAsc ? -diff : diff;
		})
	);
	const visible = $derived(sorted.slice(0, limit));
</script>

<div
	class="blog-filters"
	style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;"
>
	<div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
		{#each categories as cat (cat.key)}
			<button
				class={`blog-filter-btn${active === cat.key ? ' active' : ''}`}
				onclick={() => {
					active = cat.key;
					limit = 12;
				}}
			>
				{cat.label}
			</button>
		{/each}
	</div>
	<div style="display: flex; gap: 0.5rem;">
		<button
			class={`blog-filter-btn${!sortAsc ? ' active' : ''}`}
			onclick={() => {
				sortAsc = false;
				limit = 12;
			}}
		>
			Nyeste først
		</button>
		<button
			class={`blog-filter-btn${sortAsc ? ' active' : ''}`}
			onclick={() => {
				sortAsc = true;
				limit = 12;
			}}
		>
			Ældste først
		</button>
	</div>
</div>

<div class="post-grid">
	{#each visible as post (post.href)}
		<a href={post.href} class="post-card">
			<div class="post-card-inner">
				<div class="post-card-content">
					<span class="post-date">{post.date}</span>
					<span class="post-cat">{post.cat}</span>
					<p class="post-title">{post.title}</p>
					{#if post.subtitle}<p class="post-subtitle">{post.subtitle}</p>{/if}
					<p class="post-excerpt">{post.excerpt}</p>
					<span class="post-link">Læs mere →</span>
				</div>
				{#if post.image}
					<div class="post-card-image" style="position: relative;">
						<Image
							src={post.image}
							alt={post.title.includes('Arkitekttegnestuen Yderskov') ? post.title : `${post.title} — Arkitekttegnestuen Yderskov`}
							width={96}
							height={96}
							style="object-fit: cover;"
						/>
					</div>
				{/if}
			</div>
		</a>
	{/each}
</div>

{#if limit < sorted.length}
	<div style="display: flex; justify-content: center; margin-top: 2.5rem;">
		<button
			onclick={() => (limit += 12)}
			class="tag tag-dark"
			style="cursor: pointer; border: none; padding: 0.8rem 2rem; font-size: 0.9rem;"
		>
			Indlæs flere →
		</button>
	</div>
{/if}
