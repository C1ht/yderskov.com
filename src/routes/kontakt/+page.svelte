<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import InteractiveMap from '$lib/components/InteractiveMap.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	const contactSchema = {
		'@context': 'https://schema.org',
		'@type': 'ContactPage',
		url: 'https://yderskov.com/kontakt',
		mainEntity: {
			'@type': 'ProfessionalService',
			name: 'Yderskov Arkitekter',
			url: 'https://yderskov.com',
			telephone: '+4529723427',
			email: 'cy@yderskov.com',
			address: { '@type': 'PostalAddress', addressCountry: 'DK', addressRegion: 'Nordjylland' },
			areaServed: { '@type': 'Country', name: 'Danmark' }
		}
	};
</script>

<svelte:head>
	<title>Kontakt Yderskov Arkitekter — Ring eller book gratis møde</title>
	<meta
		name="description"
		content="Har du et byggeprojekt i tankerne? Kontakt Yderskov Arkitekter i dag. Vi tilbyder et gratis og uforpligtende idémøde direkte på din byggegrund."
	/>
	<link rel="canonical" href="https://yderskov.com/kontakt" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="da_DK" />
	<meta property="og:url" content="https://yderskov.com/kontakt" />
	<meta property="og:siteName" content="Yderskov Arkitekter" />
	<meta property="og:image" content="https://yderskov.com/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-bagside.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Kontakt Yderskov Arkitekter — Ring eller book gratis møde" />
	<meta
		name="twitter:description"
		content="Har du et byggeprojekt i tankerne? Kontakt Yderskov Arkitekter i dag. Vi tilbyder et gratis og uforpligtende idémøde direkte på din byggegrund."
	/>
	<meta name="twitter:image" content="https://yderskov.com/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-bagside.webp" />
	{@html `<script type="application/ld+json">${JSON.stringify(contactSchema).replace(/</g, '\\u003c')}</script>`}
</svelte:head>

<Breadcrumbs items={[{ label: 'Kontakt' }]} />
<Hero
	slides={[
		{
			src: '/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-bagside.webp',
			alt: 'Villa med tilbygning — Arkitekttegnestuen Yderskov'
		}
	]}
	showTabs={false}
	tag="Kontakt"
	lines={[
		'I har tankerne, vi sætter stregerne.',
		'Byggeri tegnet kun til jer, til jeres grund, jeres ønsker og jeres budget.',
		'Gratis og uforpligtende første idemøde. Vi kommer ud til jer.'
	]}
	italicLines={[1, 2]}
/>

<section class="s">
	<div class="s-inner">
		<div style="margin-bottom: 2.5rem;">
			<span class="eyebrow">Kontakt</span>
			<h1 class="sec-hed">Kontakt os</h1>
		</div>
		<div class="contact-layout">
			<!-- Firma info -->
			<div>
				<p class="firm-name">Arkitekttegnestuen Yderskov ApS</p>
				<div class="info-list">
					<div class="info-row">
						<span class="info-label">Adresse</span>
						<span class="info-val">Danserhøj 38<br />9700 Brønderslev</span>
					</div>
					<div class="info-row">
						<span class="info-label">Telefon</span>
						<span class="info-val"><a href="tel:29723427">29 72 34 27</a></span>
					</div>
					<div class="info-row">
						<span class="info-label">Email</span>
						<span class="info-val"><a href="mailto:cy@yderskov.com">cy@yderskov.com</a></span>
					</div>
					<div class="info-row">
						<span class="info-label">CVR</span>
						<span class="info-val">39391813</span>
					</div>
					<div class="info-row">
						<span class="info-label">Bank</span>
						<span class="info-val">Sparekassen Danmark, Brønderslev</span>
					</div>
					<div class="info-row">
						<span class="info-label">Revisor</span>
						<span class="info-val">LG Revision, Nørresundby</span>
					</div>
				</div>

				<ul style="list-style: none; margin-top: 2rem; display: flex; flex-direction: column; gap: 0.6rem;">
					<li style="font-size: 0.8rem; font-weight: 300; color: var(--sub); display: flex; align-items: center; gap: 0.6rem;">
						<span style="color: #3a7a3a; font-weight: 400;">✓</span> Svar inden 24 timer
					</li>
					<li style="font-size: 0.8rem; font-weight: 300; color: var(--sub); display: flex; align-items: center; gap: 0.6rem;">
						<span style="color: #3a7a3a; font-weight: 400;">✓</span> Gratis og uforpligtende første møde
					</li>
					<li style="font-size: 0.8rem; font-weight: 300; color: var(--sub); display: flex; align-items: center; gap: 0.6rem;">
						<span style="color: #3a7a3a; font-weight: 400;">✓</span> 300+ gennemførte projekter
					</li>
				</ul>
			</div>

			<!-- Contact form -->
			<ContactForm />
		</div>
	</div>
</section>

<section class="s s-off">
	<div class="s-inner">
		<div class="text-2col">
			<div>
				<span class="eyebrow">Det første skridt</span>
				<h2 class="sec-hed">Det gratis idémøde<br />— hvad kan du forvente?</h2>
			</div>
			<div>
				<p class="body-p">
					Et byggeprojekt starter altid med en god snak. Vi tilbyder et gratis og helt uforpligtende idémøde, hvor vi typisk mødes på din byggegrund eller på den eksisterende ejendom. Her gennemgår vi dine ønsker, behov og budgetrammer, og vi kigger på de fysiske rammer samt eventuelle lokalplaner, der har indflydelse på projektet.
				</p>
				<p class="body-p">
					Under mødet lytter vi til dine visioner og kommer med vores umiddelbare faglige input til, hvordan grunden eller huset kan udnyttes bedst muligt. Se gerne vores galleri af <a href="/villaer" class="text-link">villaer</a>, <a href="/sommerhuse" class="text-link">sommerhuse</a> eller <a href="/tilbygninger" class="text-link">tilbygninger</a> for konkrete eksempler. Vi taler også om de økonomiske realiteter og <a href="/priser" class="text-link">vores faste priser</a>, så vi fra start har afstemt forventningerne.
				</p>
				<p class="body-p">
					Efter mødet udarbejder vi et skriftligt tilbud på arkitektydelsen. Du får dermed et klart overblik over processen og økonomien, før du beslutter dig for at gå videre. Det er enkelt, trygt og helt gennemskueligt.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Map -->
<InteractiveMap />
