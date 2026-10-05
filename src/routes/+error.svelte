<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>Siden blev ikke fundet — Yderskov Arkitekter</title>
	<meta name="robots" content="noindex, follow" />
</svelte:head>

<div
	style={`position: relative; min-height: 85vh; display: flex; align-items: center; justify-content: center; padding: 4rem 2rem; background-image: url('/images/Gjøl/Gjøl-ny-villa-have.webp'); background-size: cover; background-position: center; ${page.status === 404 ? '' : ''}`}
>
	<!-- Dark overlay for contrast -->
	<div
		style="position: absolute; inset: 0; background: rgba(0, 0, 0, 0.45); backdrop-filter: blur(2px); z-index: 1;"
	></div>

	<!-- Glassmorphic dark card -->
	<div
		style="position: relative; z-index: 2; max-width: 560px; width: 100%; background: rgba(22, 22, 22, 0.88); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 3rem 2.5rem; text-align: center; box-shadow: 0 20px 40px rgba(0,0,0,0.3);"
	>
		<div
			style="display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 64px; border-radius: 50%; background: rgba(184, 124, 8, 0.15); color: #d4910a; margin-bottom: 1.5rem; border: 1px solid rgba(212, 145, 10, 0.3);"
		>
			<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
				<circle cx="12" cy="12" r="10" />
				<line x1="12" y1="8" x2="12" y2="12" />
				<line x1="12" y1="16" x2="12.01" y2="16" />
			</svg>
		</div>

		<span class="eyebrow" style="display: block; color: #d4910a; letter-spacing: 0.15em; font-size: 0.8rem; text-transform: uppercase;">Fejl 404</span>
		<h1 class="sec-hed" style="font-size: clamp(1.8rem, 4vw, 2.5rem); margin: 0.75rem 0 1.25rem 0; font-weight: 300; color: #ffffff; letter-spacing: -0.01em;">Siden blev ikke fundet</h1>

		<p style="margin-bottom: 2.5rem; color: rgba(255, 255, 255, 0.7); font-size: 0.88rem; line-height: 1.6;">
			Beklager, men den side du leder efter findes desværre ikke. Den kan være flyttet, eller linket kan være forældet.
		</p>

		<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem;">
			<a href="/" style="padding: 0.8rem 1.4rem; border-radius: 8px; text-decoration: none; font-size: 0.85rem; background: #d4910a; color: #ffffff; border: 1px solid #d4910a; font-weight: 400;">Gå til forsiden</a>
			<a href="/sommerhuse" style="padding: 0.8rem 1.4rem; border-radius: 8px; text-decoration: none; font-size: 0.85rem; background: rgba(255,255,255,0.08); color: #ffffff; border: 1px solid rgba(255,255,255,0.15); font-weight: 400;">Se sommerhuse</a>
			<a href="/prisberegner" style="padding: 0.8rem 1.4rem; border-radius: 8px; text-decoration: none; font-size: 0.85rem; background: rgba(255,255,255,0.08); color: #ffffff; border: 1px solid rgba(255,255,255,0.15); font-weight: 400;">Prisberegner</a>
			<a href="/kontakt" style="padding: 0.8rem 1.4rem; border-radius: 8px; text-decoration: none; font-size: 0.85rem; background: rgba(255,255,255,0.08); color: #ffffff; border: 1px solid rgba(255,255,255,0.15); font-weight: 400;">Book gratis møde</a>
		</div>
	</div>
</div>
