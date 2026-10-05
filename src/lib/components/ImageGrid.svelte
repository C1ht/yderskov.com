<script lang="ts">
	import Image from '$lib/components/Image.svelte';

	type ImageItem = { src: string; alt: string; imgStyle?: string };

	interface Props {
		images: ImageItem[];
		ctaHref?: string | null;
		ctaLabel?: string;
	}

	let {
		images,
		ctaHref = '/kontakt#heroContactForm',
		ctaLabel = 'Vil du have noget lignende? →'
	}: Props = $props();

	let selected = $state<number | null>(null);
	let touchStart = $state<number | null>(null);
	let touchEnd = $state<number | null>(null);

	function close() {
		selected = null;
	}
	function prev() {
		if (selected === null) return;
		selected = (selected - 1 + images.length) % images.length;
	}
	function next() {
		if (selected === null) return;
		selected = (selected + 1) % images.length;
	}

	$effect(() => {
		if (selected === null) return;
		const handler = (e: KeyboardEvent) => {
			if (e.key === 'Escape') close();
			if (e.key === 'ArrowLeft') prev();
			if (e.key === 'ArrowRight') next();
		};
		window.addEventListener('keydown', handler);
		document.body.style.overflow = 'hidden';
		return () => {
			window.removeEventListener('keydown', handler);
			document.body.style.overflow = '';
		};
	});

	function handleTouchStart(e: TouchEvent) {
		touchStart = e.targetTouches[0].clientX;
	}
	function handleTouchMove(e: TouchEvent) {
		touchEnd = e.targetTouches[0].clientX;
	}
	function handleTouchEnd() {
		if (!touchStart || !touchEnd) return;
		const distance = touchStart - touchEnd;
		const minSwipeDistance = 50;
		if (distance > minSwipeDistance) next();
		else if (distance < -minSwipeDistance) prev();
		touchStart = null;
		touchEnd = null;
	}

	const activeImg = $derived(selected !== null ? images[selected] : null);
</script>

<div class="grid-3">
	{#each images as img, i (img.src)}
		<div
			class="card"
			onclick={() => (selected = i)}
			role="button"
			aria-label={`Se ${img.alt} i fuld størrelse`}
			tabindex="0"
			onkeydown={(e) => e.key === 'Enter' && (selected = i)}
		>
			<Image
				src={img.src}
				alt={img.alt}
				fill
				sizes="(max-width: 768px) 100vw, 33vw"
				style={`object-fit: cover;${img.imgStyle ? ' ' + img.imgStyle : ''}`}
			/>
		</div>
	{/each}
</div>

{#if ctaHref}
	<a href={ctaHref} class="proj-inline-cta">{ctaLabel}</a>
{/if}

{#if selected !== null && activeImg}
	<div
		class="lb-backdrop"
		onclick={close}
		role="dialog"
		aria-modal="true"
		ontouchstart={handleTouchStart}
		ontouchmove={handleTouchMove}
		ontouchend={handleTouchEnd}
	>
		<button class="lb-close" onclick={close} aria-label="Luk">✕</button>

		{#if images.length > 1}
			<button
				class="lb-arrow lb-prev"
				onclick={(e) => {
					e.stopPropagation();
					prev();
				}}
				aria-label="Forrige"
			>‹</button>
		{/if}

		<div
			class="lb-img-wrap"
			onclick={(e) => e.stopPropagation()}
			role="presentation"
		>
			<Image
				src={activeImg.src}
				alt={activeImg.alt}
				width={1600}
				height={1200}
				style="max-width: 90vw; max-height: 80vh; width: auto; height: auto; display: block; border-radius: 4px;"
				priority
			/>
		</div>

		{#if images.length > 1}
			<button
				class="lb-arrow lb-next"
				onclick={(e) => {
					e.stopPropagation();
					next();
				}}
				aria-label="Næste"
			>›</button>
		{/if}
	</div>
{/if}
