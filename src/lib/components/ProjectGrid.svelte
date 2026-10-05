<script lang="ts">
	import Image from '$lib/components/Image.svelte';

	type Project = { src: string; title: string };

	interface Props {
		projects: Project[];
	}

	let { projects }: Props = $props();
</script>

<div class="proj-grid">
	{#each projects as p (p.src)}
		<div class="proj-card">
			<Image
				src={p.src}
				alt={p.title}
				fill
				sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
				style="object-fit: cover;"
			/>
			<div class="proj-foot">
				<span class="proj-title">{p.title}</span>
			</div>
		</div>
	{/each}
</div>
