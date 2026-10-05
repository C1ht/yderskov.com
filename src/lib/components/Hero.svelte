<script lang="ts">
	import HeroForm from './HeroForm.svelte';
	import HeroCarousel from './HeroCarousel.svelte';
	import type { HeroSlide } from './HeroCarousel.svelte';

	interface Props {
		slides?: HeroSlide[];
		title?: string;
		tag?: string;
		subtitle?: string;
		subtitleStyle?: string;
		lines?: string[];
		italicLines?: number[];
		showForm?: boolean;
		showTabs?: boolean;
		showQuote?: boolean;
		bright?: boolean;
		show24h?: boolean;
		bodyStyle?: string;
	}

	let {
		slides = [
			{ src: '/images/Lerstien/Frederikshavn-lerstien-terrasse-byview.webp', alt: 'Udsigtsvilla, Frederikshavn — Arkitekttegnestuen Yderskov' },
			{ src: '/images/Torndalsvej/Hals-Torndalsvej-terrasse.webp', alt: 'Arkitekttegnet sommerhus, Hals — Arkitekttegnestuen Yderskov' },
			{ src: '/images/Karetmagervej/Sæby-ny-villa-funkis-haveside.webp', alt: 'Funkisvilla, Sæby — Arkitekttegnestuen Yderskov' },
			{ src: '/images/Løvevej/Ålbæk-poolhus-terrasse.webp', alt: 'Sommerhus med pool, Ålbæk — Arkitekttegnestuen Yderskov' },
			{ src: '/images/Godthåbsvej/Brønderslev-ombygning-efter-2.webp', alt: 'Moderniseret villa, Brønderslev — Arkitekttegnestuen Yderskov' },
			{ src: '/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-bagside.webp', alt: 'Villa med tilbygning, Hasseris i Aalborg — Arkitekttegnestuen Yderskov' }
		],
		title = 'Arkitekt Yderskov',
		tag,
		subtitle = 'Tanker & Streger',
		subtitleStyle,
		lines = [
			'I har tankerne, vi sætter stregerne.',
			'Gratis og uforpligtende første idemøde. Vi kommer ud til jer.',
			'Byggeri tegnet kun til jer, til jeres grund, jeres ønsker og jeres budget.'
		],
		italicLines = [1],
		showForm = true,
		showTabs = false,
		showQuote = true,
		bright = false,
		show24h = true,
		bodyStyle
	}: Props = $props();
</script>

<section class={`hero${bright ? ' hero-bright' : ''}`}>
	<!-- Image carousel — isolated interactive component -->
	<HeroCarousel {slides} />

	<div class="hero-overlay"></div>

	<div class="hero-body" style={bodyStyle}>
		<div class="hero-main">
			<div class="hero-left">
				<!-- LCP element — server-rendered, no JS dependency -->
				<p class="hero-left-super hero-tag">Arkitekt Yderskov</p>
				<p class="hero-left-title" style={subtitleStyle}>{subtitle === 'Tanker & Streger' && tag !== 'Hjem' ? tag : subtitle}</p>
				{#each lines as line, i (i)}
					<p
						class="hero-left-sub"
						style={`${italicLines.includes(i) ? 'font-style: italic;' : ''}${i > 0 ? 'margin-top: 0.5rem;' : ''}`}
					>
						{line}
					</p>
				{/each}
				{#if show24h}
					<span class="hero-24h" style="margin-top: 0.85rem;">
						Vi vender tilbage inden 24 timer på alle henvendelser
					</span>
				{/if}

				{#if showQuote}
					<div class="hero-mini-quote">
						&ldquo;Hvis vi kunne give Chris ti stjerner ville vi give ham det.&rdquo;
						<p class="hero-mini-quote-name">— Cathrine Rasmussen, Sæby</p>
					</div>
				{/if}
			</div>

			{#if showForm}
				<div class="hero-right">
					<!-- Unique id: avoids colliding with the page's own dedicated
						#heroContactForm section, which is the real target for
						"Skriv"/"Book gratis møde" anchor links (this hero copy is
						hidden on mobile, so it must never be the id anchors land on). -->
					<HeroForm id="heroInlineForm" />
				</div>
			{/if}
		</div>
	</div>

	{#if showTabs}
		<div class="hero-tabs">
			<a href="/villaer" class="hero-tab">Ny villa</a>
			<a href="/tilbygninger" class="hero-tab">Om- og tilbygning</a>
			<a href="/sommerhuse" class="hero-tab">Sommerhus</a>
			<a href="/erhverv" class="hero-tab">Erhverv</a>
			<a href="/special" class="hero-tab">Special</a>
		</div>
	{/if}

	<!-- Subtle mobile-only cue that there's more content below -->
	<div class="hero-scroll-hint" aria-hidden="true">
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<polyline points="6 9 12 15 18 9" />
		</svg>
	</div>
</section>
