<script lang="ts">
	let loadMap = $state(false);
</script>

<div class="map-wrap" style="position: relative; cursor: pointer; background: #f4f4f4;">
	{#if !loadMap}
		<div
			onclick={() => (loadMap = true)}
			style="position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #eae8e5; color: #161616; padding: 2rem; text-align: center;"
			role="button"
			tabindex="0"
			onkeydown={(e) => e.key === 'Enter' && (loadMap = true)}
		>
			<!-- Simple abstract map background lines using CSS -->
			<div
				style="position: absolute; inset: 0; opacity: 0.15; background-image: radial-gradient(#161616 1px, transparent 1px), linear-gradient(to right, #161616 1px, transparent 1px), linear-gradient(to bottom, #161616 1px, transparent 1px); background-size: 20px 20px, 100px 100px, 100px 100px;"
			></div>
			<div
				style="position: relative; z-index: 1; background: #fff; padding: 1.2rem 2.2rem; border-radius: 2px; box-shadow: 0 10px 30px rgba(0,0,0,0.06); display: flex; flex-direction: column; align-items: center; gap: 0.5rem;"
			>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
					<circle cx="12" cy="10" r="3" />
				</svg>
				<span style="font-weight: 400; font-size: 0.85rem; letter-spacing: 0.05em; text-transform: uppercase;">
					Vis interaktivt kort
				</span>
			</div>
		</div>
	{:else}
		<iframe
			src="https://www.openstreetmap.org/export/embed.html?bbox=9.985283%2C57.240538%2C10.025283%2C57.260538&layer=mapnik&marker=57.250538%2C10.005283"
			width="100%"
			height="100%"
			style="border: 0; display: block;"
			referrerpolicy="no-referrer-when-downgrade"
			title="Arkitekttegnestuen Yderskov — Danserhøj 38, 9700 Brønderslev"
			aria-label="Kort over Arkitekttegnestuen Yderskov"
		></iframe>
		<a
			href="https://www.google.com/maps/dir/?api=1&destination=57.250538,10.005283"
			target="_blank"
			rel="noopener noreferrer"
			style="position: absolute; bottom: 0.9rem; right: 0.9rem; background: #fff; color: #161616; font-size: 0.72rem; font-weight: 400; letter-spacing: 0.03em; padding: 0.55rem 0.9rem; border-radius: 6px; box-shadow: 0 4px 14px rgba(0,0,0,0.14); text-decoration: none;"
		>
			Åbn i Google Maps →
		</a>
	{/if}
</div>
