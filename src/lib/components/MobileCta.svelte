<script lang="ts">
	import { page } from '$app/state';

	const pathname = $derived(page.url.pathname);

	function handleScroll(e: MouseEvent) {
		if (pathname === '/kontakt') {
			const el = document.getElementById('heroContactForm');
			if (el) {
				e.preventDefault();
				const y = el.getBoundingClientRect().top + window.scrollY - 100;
				window.scrollTo(0, y);
			}
		}
	}
</script>

<div class="mobile-cta" role="region" aria-label="Kontakt">
	<a href="tel:29723427" class="mobile-cta-btn mobile-cta-call">
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.93.37 1.84.72 2.71a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.37-1.29a2 2 0 0 1 2.11-.45c.87.35 1.78.59 2.71.72A2 2 0 0 1 22 16.92z"/>
		</svg>
		Ring
	</a>
	<a href="/kontakt#heroContactForm" class="mobile-cta-btn mobile-cta-book" onclick={handleScroll}>
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
		</svg>
		Skriv
	</a>
</div>
