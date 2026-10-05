<script lang="ts">
	import { submitLead } from '$lib/submitLead';

	const BUDGET_TIPS = [
		{ titel: 'Vælg standardmaterialer', tekst: 'Standardiserede produkter giver samme kvalitet som specialløsninger til 20–40 % lavere pris.' },
		{ titel: 'Hold tilbygningen i ét plan', tekst: 'Kælder og ekstra etager øger prisen markant. Et enkelt plan er det mest prisvenlige valg.' },
		{ titel: 'Brug eksisterende konstruktioner', tekst: 'Genbrug af eksisterende adgange og installationer sænker entrepriseprisen.' },
		{ titel: 'Afklar alle ønsker inden opstart', tekst: 'Ændringer undervejs er dyre. En grundig planlægningsfase forebygger fordyrende tillægsarbejder.' },
		{ titel: 'Indhent mindst 3 tilbud', tekst: 'Håndværkerpriser varierer 15–30 % på samme opgave. En arkitekt forhandler altid den bedste pris til jer — enten ved udbud eller ved prisforhandling med flere håndværkere.' },
		{ titel: 'Vælg de rigtige håndværkere', tekst: 'En arkitekt hjælper med at vurdere tilbud og sikre at du får kvalitet til den rigtige pris.' },
		{ titel: 'Sæt en buffer af', tekst: 'Afsæt 10–15 % af budgettet til uforudsete udgifter. Det giver ro i byggeprocessen og forebygger ubehagelige overraskelser.' },
		{ titel: 'Vælg en enkel tagform', tekst: 'Et sadeltag eller pultag er markant billigere end komplekse tagformer med valme, kviste og mange samlinger.' },
		{ titel: 'Brug en arkitekt fra starten', tekst: 'En arkitekt betaler sig selv hjem — ved at undgå fejl, forhandle priser og sikre at projektet holder budgettet fra første streg.' }
	];

	function fmt(n: number) {
		return new Intl.NumberFormat('da-DK', {
			style: 'currency',
			currency: 'DKK',
			maximumFractionDigits: 0
		}).format(n);
	}

	function today() {
		return new Date().toLocaleDateString('da-DK', { day: 'numeric', month: 'long', year: 'numeric' });
	}

	type Snapshot = {
		grund: string;
		areal: string;
		rum: string;
		vinduer: string;
		terrassedøre: string;
		extVægge: string;
		tag: string;
		intVægge: string;
		gulv: string;
		lofter: string;
		vådrum: string;
	};
	type Result = { min: number; max: number; snap: Snapshot };

	interface Props {
		result: Result;
		onReset: (() => void) | null;
	}

	let { result, onReset }: Props = $props();

	const s = result.snap;
	const nVin = parseInt(s.vinduer) || 0;
	const nDøre = parseInt(s.terrassedøre) || 0;
	const rum = parseInt(s.rum) || 0;

	let navn = $state('');
	let email = $state('');
	let telefon = $state('');
	let lokation = $state('');
	let submitted = $state(false);
	let loading = $state(false);
	let error = $state<string | null>(null);

	async function handleSendEmail(e: SubmitEvent) {
		e.preventDefault();
		error = null;
		loading = true;

		const message = `
Brugeren har foretaget en prisberegning på en tilbygning.

Specifikationer:
- Areal: ${s.areal} m²
- Rum: ${rum} stk.
- Terræn: ${s.grund === 'skrånende' ? 'Skrånende grund' : 'Vandret grund'}
- Ydervægge: ${s.extVægge}
- Tag: ${s.tag}
- Indervægge: ${s.intVægge}
- Gulv: ${s.gulv}
- Lofter: ${s.lofter}
- Vådrum/installationer: ${s.vådrum}
- Vinduespartier: ${nVin} stk.
- Terrassedøre: ${nDøre} stk.

Estimeret prisområde:
- Minimum: ${fmt(result.min)}
- Maksimum: ${fmt(result.max)}
`;

		try {
			const ok = await submitLead({
				name: navn,
				email,
				phone: telefon,
				projekt: 'Prisberegning Tilbygning',
				location: lokation,
				message,
				_page: window.location.pathname
			});
			if (!ok) throw new Error();
			submitted = true;
		} catch {
			error = 'Noget gik galt. Prøv igen, eller ring til os direkte på 29 72 34 27.';
		} finally {
			loading = false;
		}
	}
</script>

<div class="dr">
	<!-- ══ HEADER ══════════════════════════════════════════ -->
	<div class="dr-head">
		<div>
			<p class="dr-head-name">Arkitekttegnestuen Yderskov</p>
			<p class="dr-head-tagline">Tanke + Streger</p>
		</div>
		<div class="dr-head-right">
			<p class="dr-head-type">Vejledende prisskøn · Tilbygning</p>
			<p class="dr-head-date">{today()}</p>
		</div>
	</div>

	<!-- ══ 1. PROJEKT ══════════════════════════════════════ -->
	<div class="dr-block">
		<p class="dr-eyebrow">1 · Projekt</p>
		<h2 class="dr-block-title">Projektbeskrivelse</h2>

		<div class="dr-hero-stats">
			<div class="dr-hero-stat">
				<span class="dr-hero-val">{s.areal} m²</span>
				<span class="dr-hero-lbl">Bygningens areal</span>
			</div>
			{#if rum > 0}
				<div class="dr-hero-stat">
					<span class="dr-hero-val">{rum}</span>
					<span class="dr-hero-lbl">Antal rum</span>
				</div>
			{/if}
			<div class="dr-hero-stat">
				<span class="dr-hero-val">{s.grund.charAt(0).toUpperCase() + s.grund.slice(1)}</span>
				<span class="dr-hero-lbl">Grund</span>
			</div>
		</div>

		<div class="dr-details">
			<div class="dr-details-col">
				<p class="dr-details-heading">Udvendig</p>
				<div class="dr-row"><span class="dr-row-label">Facader</span><span class="dr-row-value">{s.extVægge}</span></div>
				<div class="dr-row"><span class="dr-row-label">Tag</span><span class="dr-row-value">{s.tag}</span></div>
				{#if nVin > 0}<div class="dr-row"><span class="dr-row-label">Vinduer</span><span class="dr-row-value">{nVin} stk.</span></div>{/if}
				{#if nDøre > 0}<div class="dr-row"><span class="dr-row-label">Terrassedøre</span><span class="dr-row-value">{nDøre} stk.</span></div>{/if}
			</div>
			<div class="dr-details-col">
				<p class="dr-details-heading">Indvendig</p>
				<div class="dr-row"><span class="dr-row-label">Vægge</span><span class="dr-row-value">{s.intVægge}</span></div>
				<div class="dr-row"><span class="dr-row-label">Gulv</span><span class="dr-row-value">{s.gulv}</span></div>
				<div class="dr-row"><span class="dr-row-label">Lofter</span><span class="dr-row-value">{s.lofter}</span></div>
				{#if s.vådrum !== 'Ingen'}<div class="dr-row"><span class="dr-row-label">Installationer</span><span class="dr-row-value">{s.vådrum}</span></div>{/if}
			</div>
		</div>
	</div>

	<!-- ══ 2. PRISSKØN ═════════════════════════════════════ -->
	<div class="dr-block dr-block-price">
		<p class="dr-eyebrow">2 · Økonomi</p>
		<h2 class="dr-block-title">Vejledende prisskøn</h2>

		<div class="dr-price-cards">
			<div class="dr-price-card">
				<p class="dr-price-card-lbl">Laveste skøn</p>
				<p class="dr-price-card-num">{fmt(result.min)}</p>
			</div>
			<div class="dr-price-card">
				<p class="dr-price-card-lbl">Højeste skøn</p>
				<p class="dr-price-card-num">{fmt(result.max)}</p>
			</div>
		</div>
		<p class="dr-price-note">Alle priser er inkl. moms · OBS: Dette er udelukkende et uforpligtende, vejledende prisskøn</p>

		<div class="dr-incl-grid">
			<div class="dr-incl-col">
				<p class="dr-incl-heading">Inkluderet i skønnet</p>
				<ul class="dr-incl-list">
					<li>Håndværkerydelser</li>
					<li>Materialer til hver entreprise</li>
					<li>Overflader</li>
					<li>Konstruktioner</li>
					<li>m.v.</li>
				</ul>
			</div>
			<div class="dr-incl-col">
				<p class="dr-incl-heading">Ikke inkluderet</p>
				<ul class="dr-incl-list">
					<li>Byggetilladelse og gebyr</li>
					<li>Jordbundsundersøgelser</li>
					<li>Landinspektør</li>
					<li>Rådgiverhonorar</li>
					<li>Uforudsete udgifter</li>
				</ul>
			</div>
		</div>
	</div>

	{#if submitted}
		<div class="dr-email-success no-print">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 0.5rem;">
				<polyline points="20 6 9 17 4 12" />
			</svg>
			<p style="font-weight: 500; font-size: 0.95rem;">Prisskønnet er sendt!</p>
			<p style="font-size: 0.82rem; opacity: 0.85; margin-top: 0.25rem;">Tjek din indbakke om et øjeblik. Vi har også modtaget dine specifikationer.</p>
		</div>
	{:else}
		<div class="dr-email-card no-print">
			<p style="font-size: 0.68rem; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: #b87c08;">Gem dit resultat</p>
			<h3 style="font-size: 1.1rem; font-weight: 300; color: var(--text); margin: 0.3rem 0 0.5rem 0;">Få prisskønnet sendt til din e-mail</h3>
			<p style="font-size: 0.8rem; color: var(--sub); line-height: 1.5;">
				Indtast dine oplysninger nedenfor. Så sender vi dig en komplet rapport med dine specifikationer og prisovervejelser.
			</p>
			<form onsubmit={handleSendEmail} class="dr-email-form">
				<div class="dr-email-inputs">
					<input type="text" placeholder="Dit navn *" bind:value={navn} required class="dr-email-input" />
					<input type="email" placeholder="Din e-mail *" bind:value={email} required class="dr-email-input" />
					<input type="tel" placeholder="Dit telefonnummer *" bind:value={telefon} required class="dr-email-input" />
					<input type="text" placeholder="Hvor i landet skal der bygges? *" bind:value={lokation} required class="dr-email-input" />
				</div>

				{#if error}
					<p style="color: #d93025; font-size: 0.8rem; margin-top: 0.25rem;">
						{error}
					</p>
				{/if}

				<button type="submit" disabled={loading} class="dr-email-submit-btn">
					{loading ? 'Sender...' : 'Send prisskøn →'}
				</button>
			</form>
		</div>
	{/if}

	<div class="dr-print-bar" style="display: flex; gap: 1rem; justify-content: flex-end;">
		<button type="button" class="dr-print-btn" onclick={() => window.print()}>
			<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
				<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>
			</svg>
			Gem som PDF / Print prisoverslag
		</button>
	</div>

	<!-- ══ 3. BUDGET-TIPS ══════════════════════════════════ -->
	<div class="dr-block">
		<p class="dr-eyebrow">3 · Råd</p>
		<h2 class="dr-block-title">Idéer til at holde budgettet</h2>
		<div class="dr-tips-grid">
			{#each BUDGET_TIPS as tip, i (i)}
				<div class="dr-tip">
					<span class="dr-tip-num">{i + 1}</span>
					<div>
						<p class="dr-tip-titel">{tip.titel}</p>
						<p class="dr-tip-tekst">{tip.tekst}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- ══ 4. ANBEFALING ═══════════════════════════════════ -->
	<div class="dr-block dr-block-rec">
		<p class="dr-eyebrow dr-eyebrow-light">4 · Anbefaling</p>
		<h2 class="dr-block-title dr-block-title-light">Vores anbefaling</h2>
		<p class="dr-rec-p">En arkitekt kan hjælpe med at prioritere, tilpasse løsninger og rådgive om materialevalg — så byggeriet holdes inden for den økonomiske ramme.</p>
		<p class="dr-rec-p">Et godt projekt starter med et godt overblik. En arkitekt hjælper med at få styr på alle detaljer — fra byggetilladelse og tegninger til valg af de rigtige løsninger og håndværkere og frem til det færdige byggeri.</p>
		<p class="dr-rec-p">Det giver en tryggere proces og et bedre slutresultat.</p>
	</div>

	<!-- ══ CTA ════════════════════════════════════════════ -->
	<div class="dr-cta">
		<div class="dr-cta-text">
			<p class="dr-cta-headline">Få et gratis arkitektmøde</p>
			<p class="dr-cta-body">
				Dette prisskøn er et godt udgangspunkt — men et møde med en arkitekt giver dig en mere retvisende pris, konkrete løsninger og svar på alle dine spørgsmål. Vi kommer ud til dig. Gratis og uforpligtende.
			</p>
			<ul class="dr-cta-list">
				<li>Gratis første møde — vi kommer ud til dig</li>
				<li>Fast pris på arkitekthonoraret fra dag ét</li>
				<li>Vi styrer hele processen med egne håndværkere</li>
				<li>Svar inden 24 timer</li>
			</ul>
		</div>
		<div class="dr-cta-action">
			<p class="dr-cta-number-label">Ring direkte</p>
			<a href="tel:29723427" class="dr-cta-number">29 72 34 27</a>
			<!-- Opkaldsknap kun på mobil -->
			<a href="tel:29723427" class="dr-cta-call-btn">
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
				</svg>
				Ring og book gratis møde
			</a>
			<a href="mailto:cy@yderskov.com" class="dr-cta-mail">cy@yderskov.com</a>
			{#if onReset}
				<button type="button" class="dr-reset-btn" onclick={onReset}>
					Prøv et andet projekt
				</button>
			{/if}
		</div>
	</div>

	<!-- ══ FIRMA-FOOTER ════════════════════════════════════ -->
	<div class="dr-foot">
		<div class="dr-foot-contact">
			<div>
				<p class="dr-foot-name">Arkitekttegnestuen Yderskov ApS</p>
				<div class="dr-foot-details">
					<div class="dr-foot-col">
						<p class="dr-foot-lbl">Adresse</p>
						<p class="dr-foot-val">Danserhøj 38<br />9700 Brønderslev</p>
					</div>
					<div class="dr-foot-col">
						<p class="dr-foot-lbl">Telefon</p>
						<p class="dr-foot-val">29 72 34 27</p>
					</div>
					<div class="dr-foot-col">
						<p class="dr-foot-lbl">Email</p>
						<p class="dr-foot-val">cy@yderskov.com</p>
					</div>
					<div class="dr-foot-col">
						<p class="dr-foot-lbl">CVR</p>
						<p class="dr-foot-val">39391813</p>
					</div>
				</div>
			</div>
		</div>

		<p class="dr-foot-disclaimer">
			Skønnet er uforpligtende og alene baseret på de oplyste arealer og valgte materialer. Faktiske byggeomkostninger afhænger af grundforhold, konstruktionsdetaljer, håndværkerpriser og projektets specifikke løsninger. Skønnet omfatter ikke byggetilladelse, jordbundsundersøgelser, landinspektør, rådgiverhonorar samt ukendte og uforudsete udgifter.
		</p>
	</div>
</div>
