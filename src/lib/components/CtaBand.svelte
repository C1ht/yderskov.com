<script lang="ts">
	interface Props {
		title?: string;
		sub?: string;
	}

	let { title = 'Skal vi tegne dit hus?', sub = 'Gratis og uforpligtende første møde. Vi vender tilbage inden 24 timer.' }: Props = $props();
</script>

<section class="cta-band">
	<div class="cta-band-inner">
		<div class="cta-band-text">
			<h2 class="cta-band-title">{title}</h2>
			<p class="cta-band-sub">{sub}</p>
		</div>
		<div class="cta-band-actions">
			<a href="tel:29723427" class="cta-band-btn cta-band-call">
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.93.37 1.84.72 2.71a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.37-1.29a2 2 0 0 1 2.11-.45c.87.35 1.78.59 2.71.72A2 2 0 0 1 22 16.92z"/>
				</svg>
				29 72 34 27
			</a>
			<a href="/kontakt#heroContactForm" class="cta-band-btn cta-band-book">Book gratis møde</a>
		</div>
	</div>
</section>
