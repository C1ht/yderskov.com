<script lang="ts">
	let visible = $state(false);

	$effect(() => {
		const onScroll = () => {
			visible = window.scrollY > 800;
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

{#if visible}
	<button
		type="button"
		class="back-to-top"
		onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
		aria-label="Til toppen"
	>
		<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<line x1="12" y1="19" x2="12" y2="5" />
			<polyline points="5 12 12 5 19 12" />
		</svg>
	</button>
{/if}
