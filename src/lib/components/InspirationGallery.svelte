<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import { inspirationImages, type GalleryImage } from '$lib/data/inspiration-images';

	function getCategoriesForImage(img: GalleryImage): string[] {
		return img.cats || [];
	}

	const images = inspirationImages;

	let activeCategory = $state<string>('all');
	let selected = $state<number | null>(null);
	let limit = $state(24);
	let favorites = $state<string[]>([]);
	let touchStart = $state<number | null>(null);
	let touchEnd = $state<number | null>(null);

	$effect(() => {
		const saved = localStorage.getItem('yderskov_favorites');
		if (saved) {
			try {
				favorites = JSON.parse(saved);
			} catch (e) {
				console.error('Fejl ved indlæsning af favoritter:', e);
			}
		}
	});

	function toggleFavorite(src: string, e?: MouseEvent) {
		if (e) {
			e.stopPropagation();
			e.preventDefault();
		}
		favorites = favorites.includes(src)
			? favorites.filter((s) => s !== src)
			: [...favorites, src];
		localStorage.setItem('yderskov_favorites', JSON.stringify(favorites));
	}

	const filteredImages = $derived(
		activeCategory === 'all'
			? images
			: activeCategory === 'favorites'
				? images.filter((img) => favorites.includes(img.src))
				: images.filter((img) => getCategoriesForImage(img).includes(activeCategory))
	);

	function close() {
		selected = null;
	}
	function prev() {
		if (selected === null) return;
		selected = (selected - 1 + filteredImages.length) % filteredImages.length;
	}
	function next() {
		if (selected === null) return;
		selected = (selected + 1) % filteredImages.length;
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

	const activeImg = $derived(selected !== null ? filteredImages[selected] : null);
	const visibleImages = $derived(filteredImages.slice(0, limit));

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
		if (distance > minSwipeDistance) {
			next();
		} else if (distance < -minSwipeDistance) {
			prev();
		}
		touchStart = null;
		touchEnd = null;
	}

	const categories = [
		{ id: 'all', label: 'Alle' },
		{ id: 'villaer', label: 'Villaer' },
		{ id: 'sommerhuse', label: 'Sommerhuse' },
		{ id: 'indendørs', label: 'Indendørs' },
		{ id: 'udendørs', label: 'Udendørs & Terrasser' },
		{ id: 'skitser', label: 'Skitser' },
		{ id: 'favorites', label: `Mine favoritter (${favorites.length})` }
	];

	const gridImgStyle = (img: GalleryImage) => {
		return `width: 100%; height: auto; display: block;${img.rotate ? ' transform: rotate(90deg); transform-origin: center;' : ''}${img.rotateCCW ? ' transform: rotate(-90deg); transform-origin: center;' : ''}`;
	};
</script>

<!-- Category filters -->
<div
	class="gallery-filters"
	style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2.5rem;"
>
	{#each categories as cat (cat.id)}
		<button
			onclick={() => {
				activeCategory = cat.id;
				limit = 24;
			}}
			class={`tag ${activeCategory === cat.id ? 'tag-dark' : ''}`}
			style={`cursor: pointer; border: 1px solid var(--border); padding: 0.5rem 1.1rem; font-size: 0.78rem; font-weight: 400; background: ${activeCategory === cat.id ? 'var(--text)' : 'transparent'}; color: ${activeCategory === cat.id ? '#fff' : 'var(--sub)'}; border-radius: 6px; font-family: var(--sans); letter-spacing: 0.02em; transition: all 0.15s ease;`}
		>
			{cat.label}
		</button>
	{/each}
</div>

{#if activeCategory === 'favorites' && filteredImages.length === 0}
	<div
		style="text-align: center; padding: 5rem 2rem; background: var(--off); border-radius: 16px; margin-top: 1rem; border: 1px dashed var(--border);"
	>
		<div style="color: #d4910a; margin-bottom: 1rem; display: inline-flex;">
			<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
				<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
			</svg>
		</div>
		<h3 style="font-size: 1.15rem; font-weight: 400; color: var(--text); margin-bottom: 0.5rem;">
			Dit inspirationsboard er tomt
		</h3>
		<p style="font-size: 0.82rem; color: var(--sub); max-width: 440px; margin: 0 auto; line-height: 1.6;">
			Når du browser inspirationsgalleriet, kan du klikke på hjerte-ikonet øverst til højre på billederne for at gemme dine favoritter her.
		</p>
	</div>
{:else}
	<div class="insp-grid">
		{#each visibleImages as img, i (i)}
			{@const isFav = favorites.includes(img.src)}
			<div
				class="insp-item"
				onclick={() => (selected = i)}
				role="button"
				aria-label={img.alt}
				tabindex="0"
				onkeydown={(e) => e.key === 'Enter' && (selected = i)}
				style="position: relative;"
			>
				<Image
					src={img.src}
					alt={img.alt}
					width={800}
					height={600}
					class={img.rotateMobile ? 'insp-rotate-mobile' : ''}
					style={gridImgStyle(img)}
					sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 25vw"
				/>

				<button
					type="button"
					class={`fav-btn${isFav ? ' is-fav' : ''}`}
					onclick={(e) => toggleFavorite(img.src, e)}
					aria-label={isFav ? 'Fjern fra inspirationsboard' : 'Gem på inspirationsboard'}
				>
					<svg width="16" height="16" viewBox="0 0 24 24" fill={isFav ? '#d4910a' : 'none'} stroke={isFav ? '#d4910a' : 'currentColor'} stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
					</svg>
				</button>
			</div>
		{/each}
	</div>
{/if}

{#if limit < filteredImages.length}
	<div style="display: flex; justify-content: center; margin-top: 3rem; margin-bottom: 1.5rem;">
		<button
			onclick={() => (limit += 24)}
			class="tag tag-dark"
			style="cursor: pointer; border: none; padding: 0.8rem 2rem; font-size: 0.9rem;"
		>
			Vis flere billeder →
		</button>
	</div>
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

		<button
			class="lb-arrow lb-prev"
			onclick={(e) => {
				e.stopPropagation();
				prev();
			}}
			aria-label="Forrige"
		>‹</button>

		<div class="lb-img-wrap" onclick={(e) => e.stopPropagation()} role="presentation">
			<Image
				src={activeImg.src}
				alt={activeImg.alt}
				width={1600}
				height={1200}
				style="max-width: 90vw; max-height: 80vh; width: auto; height: auto; display: block; border-radius: 4px;"
				priority
			/>

			<div style="display: flex; justify-content: center; margin-top: 1.25rem; gap: 1rem; align-items: center;">
				<button
					type="button"
					class={`lb-fav-toggle-btn${favorites.includes(activeImg.src) ? ' is-fav' : ''}`}
					onclick={() => toggleFavorite(activeImg.src)}
					style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.15); color: #fff; padding: 0.55rem 1.25rem; border-radius: 20px; font-size: 0.78rem; cursor: pointer; font-family: var(--sans); transition: all 0.2s ease;"
				>
					<svg width="14" height="14" viewBox="0 0 24 24" fill={favorites.includes(activeImg.src) ? '#d4910a' : 'none'} stroke={favorites.includes(activeImg.src) ? '#d4910a' : 'currentColor'} stroke-width="2.5">
						<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
					</svg>
					{favorites.includes(activeImg.src) ? 'Fjern fra inspirationsboard' : 'Gem på inspirationsboard'}
				</button>
			</div>

			{#if activeImg.alt}
				<p
					style="color: rgba(255, 255, 255, 0.75); font-size: 0.85rem; font-weight: 300; text-align: center; margin-top: 0.85rem; letter-spacing: -0.01em; font-family: var(--sans); padding: 0 1rem;"
				>
					{activeImg.alt.split(' — ')[0]}
				</p>
			{/if}
		</div>

		<button
			class="lb-arrow lb-next"
			onclick={(e) => {
				e.stopPropagation();
				next();
			}}
			aria-label="Næste"
		>›</button>
	</div>
{/if}
