<script lang="ts" module>
	export interface HeroSlide {
		src: string;
		alt: string;
		style?: string;
	}
</script>

<script lang="ts">
	import Image from '$lib/components/Image.svelte';

	interface Props {
		slides: HeroSlide[];
	}

	let { slides }: Props = $props();

	const isCarousel = $derived(slides.length > 1);
	let current = $state(0);
	let prev = $state<number | null>(null);
	let isVisible = $state(true);
	let containerRef: HTMLDivElement | null = $state(null);

	function goTo(index: number) {
		prev = current;
		current = index;
	}

	$effect(() => {
		if (!isCarousel || !containerRef) return;
		const el = containerRef;
		const observer = new IntersectionObserver(
			([entry]) => {
				isVisible = entry.isIntersecting;
			},
			{ threshold: 0 }
		);
		observer.observe(el);
		return () => observer.disconnect();
	});

	$effect(() => {
		if (!isCarousel) return;
		const id = setInterval(() => {
			if (isVisible) goTo((current + 1) % slides.length);
		}, 5000);
		return () => clearInterval(id);
	});
</script>

<!-- Slides -->
<div bind:this={containerRef} aria-hidden="true">
	{#each slides as slide, i (slide.src)}
		<div class={`hero-slide${i === current ? ' active' : i === prev ? ' prev' : ''}`}>
			<Image
				src={slide.src}
				alt={slide.alt}
				fill
				sizes="100vw"
				style={`object-fit: cover;${slide.style ? ' ' + slide.style : ''}`}
				priority={i === 0}
			/>
		</div>
	{/each}
</div>

<!-- Dots -->
{#if isCarousel}
	<div class="hero-dots">
		{#each slides as _, i (i)}
			<button class={`hero-dot${i === current ? ' active' : ''}`} onclick={() => goTo(i)} aria-label={`Slide ${i + 1}`}></button>
		{/each}
	</div>
{/if}
