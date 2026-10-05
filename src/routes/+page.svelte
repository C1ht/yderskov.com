<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ProjectGrid from '$lib/components/ProjectGrid.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import { localBusinessSchema, projects, testimonials, blogPosts } from '$lib/data/home-data';
	import ProcessIllustration from '$lib/components/ProcessIllustration.svelte';
</script>

<svelte:head>
	<title>Arkitekt til villa, sommerhus og tilbygning — Yderskov Arkitekter</title>
	<meta
		name="description"
		content="Drømmer du om en arkitekttegnet villa, sommerhus eller tilbygning? Yderskov Arkitekter tegner til fast pris og kommer til dig. Gratis første møde."
	/>
	<link rel="canonical" href="https://yderskov.com/" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="da_DK" />
	<meta property="og:url" content="https://yderskov.com/" />
	<meta property="og:siteName" content="Yderskov Arkitekter" />
	<meta property="og:image" content="https://yderskov.com/images/Lerstien/Frederikshavn-lerstien-terrasse-byview.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Arkitekt til villa, sommerhus og tilbygning — Yderskov Arkitekter" />
	<meta
		name="twitter:description"
		content="Drømmer du om en arkitekttegnet villa, sommerhus eller tilbygning? Yderskov Arkitekter tegner til fast pris og kommer til dig. Gratis første møde."
	/>
	<meta name="twitter:image" content="https://yderskov.com/images/Lerstien/Frederikshavn-lerstien-terrasse-byview.webp" />
	{@html `<script type="application/ld+json">${JSON.stringify(localBusinessSchema).replace(/</g, '\\u003c')}</script>`}
</svelte:head>

<h1 class="sr-only">Arkitekt til villa, sommerhus og tilbygning — Yderskov Arkitekter, landsdækkende</h1>

<Hero
	slides={[
		{
			src: '/images/Lerstien/Frederikshavn-lerstien-terrasse-byview.webp',
			alt: 'Udsigtsvilla med terrasse og byudsigt, Frederikshavn — Arkitekttegnestuen Yderskov'
		}
	]}
	tag="Hjem"
	subtitle="Vi dækker hele landet"
	subtitleStyle="font-size: clamp(1.2rem, 3vw, 2.1rem); font-weight: 400;"
	bodyStyle="justify-content: flex-start; padding-top: clamp(9rem, 16vh, 18rem);"
	showQuote
	bright
	lines={[]}
	show24h={false}
/>

<!-- Trust strip -->
<div class="trust-strip">
	<div class="trust-strip-inner">
		<div class="trust-item">
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
			<span><strong>300+</strong> projekter gennemført</span>
		</div>
		<div class="trust-item">
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
			<span>Svar inden <strong>24 timer</strong></span>
		</div>
		<div class="trust-item">
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2 15.09 8.26 22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>
			<span>Gratis første møde</span>
		</div>
		<div class="trust-item">
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
			<span>Fast pris</span>
		</div>
	</div>
</div>

<!-- Hvorfor vælge os -->
<section class="s why-us-section">
	<div class="s-inner">
		<div class="why-us-header">
			<span class="eyebrow">Hvorfor vælge os</span>
			<h2 class="sec-hed">4 gode grunde til at vælge Yderskov</h2>
		</div>
		<div class="why-us-grid">
			<a href="/priser" class="why-us-card">
				<div class="why-us-title-row">
					<div class="why-us-icon-wrapper">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
							<line x1="7" y1="7" x2="7.01" y2="7" stroke-width="2.5" />
						</svg>
					</div>
					<h3>Fast pris på arkitekthonorar</h3>
				</div>
				<p>Vi tilbyder <span class="text-link" style="font-size: inherit;">fast pris på arkitekthonoraret</span>, så du kender de præcise udgifter fra start. Ingen uforudsete regninger.</p>
			</a>

			<a href="/om" class="why-us-card">
				<div class="why-us-title-row">
					<div class="why-us-icon-wrapper">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
						</svg>
					</div>
					<h3>Vi styrer håndværkere og byggeøkonomien</h3>
				</div>
				<p>Vi koordinerer og styrer håndværkerne for dig, så du er sikret kvalitet og økonomi hele vejen til et <span class="text-link" style="font-size: inherit;">nøglefærdigt resultat</span>.</p>
			</a>

			<a href="/om" class="why-us-card">
				<div class="why-us-title-row">
					<div class="why-us-icon-wrapper">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
						</svg>
					</div>
					<h3>Kontakt med samme arkitekt hver gang</h3>
				</div>
				<p>Hos os taler du med den <span class="text-link" style="font-size: inherit;">samme projekterende arkitekt</span> gennem hele forløbet. Det giver tryghed, tæt dialog og sparer værdifuld tid.</p>
			</a>

			<a href="/kontakt" class="why-us-card">
				<div class="why-us-title-row">
					<div class="why-us-icon-wrapper">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
							<circle cx="12" cy="10" r="3" />
						</svg>
					</div>
					<h3>Gratis idémøde med arkitekt på din grund</h3>
				</div>
				<p>Vi kommer ud på din byggegrund eller adresse til et <span class="text-link" style="font-size: inherit;">gratis idémøde</span> for en uforpligtende professionel vurdering og sparring på dine idéer.</p>
			</a>
		</div>
	</div>
</section>

<!-- Sommerhus prisnyt -->
<div class="announcement-bar">
	<div class="announcement-inner">
		<div class="announcement-badge">Nyt</div>
		<div class="announcement-body">
			<p class="announcement-title">Byg nyt <a href="/sommerhuse" style="text-decoration: underline; color: inherit;">sommerhus</a> fra <strong><a href="/priser" style="text-decoration: underline; color: #b87c08;">kr. 12.000 pr. m²</a></strong></p>
			<p class="announcement-sub">Arkitekttegnet og nøglefærdigt til fast pris med egne håndværkere. Første møde er gratis.</p>
		</div>
		<a href="/sommerhuse" class="announcement-cta">Se sommerhuse →</a>
		<a href="/priser" class="announcement-cta" style="background: transparent; border: 1px solid var(--text); color: var(--text) !important;">Se priser →</a>
	</div>
</div>

<!-- Projekter -->
<section class="s home-projects" style="border-bottom: 1px solid var(--border);">
	<div class="s-inner">
		<div class="proj-header">
			<div>
				<span class="eyebrow">Udvalgte projekter</span>
				<h2 class="sec-hed" style="margin-bottom: 0;">Vores projekter</h2>
			</div>
			<a href="/villaer" class="proj-see">Se alle projekter →</a>
		</div>
		<ProjectGrid {projects} />
	</div>
</section>

<!-- Hvad er dit projekt -->
<section class="s" style="padding-top: 3rem; padding-bottom: 3rem;">
	<div class="s-inner">
		<div style="margin-bottom: 1.75rem;">
			<span class="eyebrow">Se hvad vi kan tilbyde</span>
			<h2 class="sec-hed" style="margin-bottom: 0;">Hvad er dit projekt?</h2>
		</div>
		<div class="project-choice">
			<a href="/villaer" class="project-choice-card">
				<div>
					<p class="project-choice-title">Ny villa eller hus</p>
					<p class="project-choice-sub">Vi tegner din drømmebolig fra bunden — tilpasset grunden, familien og budgettet.</p>
				</div>
				<div class="project-choice-arr">→</div>
			</a>
			<a href="/tilbygninger" class="project-choice-card">
				<div>
					<p class="project-choice-title">Om- og tilbygning</p>
					<p class="project-choice-sub">Din bolig rummer mere end du tror. Vi ser mulighederne og skaber mere lys, plads og en planløsning der endelig passer til jer.</p>
				</div>
				<div class="project-choice-arr">→</div>
			</a>
			<a href="/sommerhuse" class="project-choice-card">
				<div>
					<p class="project-choice-title">Sommerhus</p>
					<p class="project-choice-sub">Dit fristed tegnet netop til dig — til din grund, din udsigt og dine drømme om den perfekte ferie.</p>
				</div>
				<div class="project-choice-arr">→</div>
			</a>
		</div>
	</div>
</section>

<!-- Processen -->
<section class="s s-off">
	<div class="s-inner">
		<span class="eyebrow">Sådan arbejder vi</span>
		<h2 class="sec-hed">Processen fra idé til nøgle</h2>
		<ProcessIllustration />
	</div>
</section>

<!-- Om os -->
<section class="s s-off">
	<div class="s-inner">
		<div class="text-2col">
			<div>
				<span class="eyebrow">Om tegnestuen</span>
				<h2 class="sec-hed" style="font-size: clamp(1.6rem, 3.5vw, 2.6rem); line-height: 1.15;">Landsdækkende arkitekttegnestue:<br />Vi kommer til dig, uanset hvor i landet du bygger</h2>
				<div class="about-tags" style="margin-top: 1.5rem;">
					<a href="/kontakt" class="tag tag-dark">Kontakt os →</a>
					<a href="/priser" class="tag">Se priser</a>
					<a href="/om" class="tag">Om os</a>
				</div>
			</div>
			<div>
				<p class="body-intro">
					<strong>Arkitekt nær Aalborg med opgaver over hele Danmark – 25 års erfaring med kvalitet og økonomisk overblik.</strong> Hvad koster en arkitekt i Aalborg? Det spørgsmål stiller mange – og hos Arkitekttegnestuen Yderskov får du altid et ærligt svar fra dag ét. Vi har hjulpet vores kunder med byggeri i 25 år, og gennemskuelig økonomi er ikke bare et løfte – det er måden vi arbejder på.
				</p>
				<p class="body-p" style="margin-top: 1.5rem; font-weight: bold;">
					Tilbygning eller ombygning i Aalborg? Eller måske Køge og <a href="/arkitekt-sjaelland" class="text-link" style="font-weight: inherit;">Gilleleje</a> eller Vejle?
				</p>
				<p class="body-p">
					Mange vælger at bygge til eller om frem for at flytte. Det er ofte den klogeste investering – og med en lokal arkitekt nær Aalborg der kender kommunens regler og de lokale byggeforhold. Vi får det bedste ud af din eksisterende bolig, uanset om det er et ekstra værelse, en ny tagetage, et åbent køkken-alrum eller en komplet ny planløsning - og uanset om du vil bygge i Aalborg eller København. Vi kommer over hele landet.
				</p>
				<p class="body-p" style="margin-top: 1.5rem; font-weight: bold;">
					Nybyggeri af villa eller sommerhus nær Aalborg eller <a href="/arkitekt-sjaelland" class="text-link" style="font-weight: inherit;">Vallensbæk</a>?
				</p>
				<p class="body-p">
					Danmark byder på nogle af de smukkeste sommerhusområder – fra Jammerbugt til Mariagerfjord, fra Gilleleje til Odsherred. Vi tegner dit drømmehus eller sommerhus tilpasset netop det sted, det skal stå – og holder dig orienteret om økonomi og fremdrift hele vejen. Ingen overraskelser.
				</p>
				<p class="body-p" style="margin-top: 1.5rem; font-weight: bold;">
					Det får du hos Arkitekttegnestuen Yderskov:
				</p>
				<ul class="body-p" style="padding-left: 1.2rem; margin-top: 0.5rem; list-style-type: disc;">
					<li style="margin-bottom: 0.3rem;">Nybyggeri af villa og sommerhus nær Aalborg og i resten af landet</li>
					<li style="margin-bottom: 0.3rem;">Tilbygning og ombygning tilpasset dit budget</li>
					<li style="margin-bottom: 0.3rem;">Ombygning af planløsning, tagetage, køkken-alrum eller...</li>
					<li style="margin-bottom: 0.3rem;">Mindre erhvervsbyggeri i Nordjylland</li>
					<li style="margin-bottom: 0.3rem;">Byggetilladelse og myndighedskontakt i Aalborg Kommune</li>
					<li style="margin-bottom: 0.3rem;">Fuld gennemskuelighed i byggeøkonomien – altid</li>
				</ul>
				<p class="body-p" style="margin-top: 1.5rem;">
					Vi er en lille tegnestue med stort engagement. Hos os er du ikke et sagsnummer – du er et menneske med en drøm om et bedre hjem eller det perfekte sommerhus. Du kan se mere <a href="/priser" class="text-link">om vores priser</a> og læse mere <a href="/om" class="text-link">om tegnestuen</a>.
				</p>
				<p class="body-p" style="margin-top: 1rem;">
					Ring til os og få en uforpligtende snak om dit byggeprojekt i Aalborg eller Nordjylland. Vi giver et bud på prisen fra dag ét.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Anbefalinger -->
<section class="s">
	<div class="s-inner">
		<span class="eyebrow">Hvad siger kunderne</span>
		<h2 class="sec-hed">Anbefalinger</h2>
		<div class="testimonials-grid">
			{#each testimonials as t, i (i)}
				<div class="testimonial-card">
					<p class="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
					<p class="testimonial-name">— {t.name}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Blog -->
<div class="blog-bg">
	<div class="blog-inner">
		<div class="blog-head">
			<h2 class="sec-hed">Fra arkitektens blog</h2>
			<a href="/blog" class="blog-see">Se alle indlæg →</a>
		</div>
		<div class="bgrid">
			{#each blogPosts as post (post.href)}
				<a href={post.href} class="bcard">
					{#if post.image}
						<div class="bcard-img-wrapper" style="width: 100%; height: 180px; position: relative; margin-bottom: 1rem; border-radius: 8px; overflow: hidden;">
							<Image src={post.image} alt={post.title} fill style="object-fit: cover;" sizes="(max-width: 768px) 100vw, 33vw" />
						</div>
					{/if}
					<span class="bdate">{post.date}</span>
					<h3>{post.title}</h3>
					<p>{post.excerpt}</p>
					<span class="blink">Læs mere →</span>
				</a>
			{/each}
		</div>
	</div>
</div>

<CtaBand />
