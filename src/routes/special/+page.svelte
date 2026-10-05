<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import ImageGrid from '$lib/components/ImageGrid.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import InspirationGallery from '$lib/components/InspirationGallery.svelte';
	import ProjectDescription from '$lib/components/ProjectDescription.svelte';
	import ExpandableText from '$lib/components/ExpandableText.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	const projectSchema = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'SingleFamilyResidence',
				name: 'Bed & Breakfast, Aalborg',
				description: 'Arkitekttegnet Bed & Breakfast i Aalborg tegnet af Yderskov Arkitekter.',
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Aalborg',
					addressCountry: 'DK'
				},
				image: [
					'https://yderskov.com/images/Bed and breakfast/Aalborg-bed-and-breakfast.webp',
					'https://yderskov.com/images/Bed and breakfast/Aalborg-bed-and-breakfast-køkken.webp',
					'https://yderskov.com/images/Bed and breakfast/Aalborg-bed-and-breakfast-spiseområde.webp'
				],
				architect: {
					'@type': 'LocalBusiness',
					name: 'Yderskov Arkitekter',
					url: 'https://yderskov.com/'
				}
			}
		]
	};
</script>

<svelte:head>
	<title>Specialbyggeri & unik arkitektur | Yderskov Arkitekter</title>
	<meta
		name="description"
		content="Vi tegner specialbyggeri tilpasset dine drømme — fra garage og carport til anneks, wellness og B&B. Få et unikt arkitekttegnet projekt til fast pris."
	/>
	<link rel="canonical" href="https://yderskov.com/special" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="da_DK" />
	<meta property="og:url" content="https://yderskov.com/special" />
	<meta property="og:siteName" content="Yderskov Arkitekter" />
	<meta property="og:image" content="https://yderskov.com/images/Bed and breakfast/Aalborg-bed-and-breakfast.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Specialbyggeri & unik arkitektur | Yderskov Arkitekter" />
	<meta
		name="twitter:description"
		content="Vi tegner specialbyggeri tilpasset dine drømme — fra garage og carport til anneks, wellness og B&B. Få et unikt arkitekttegnet projekt til fast pris."
	/>
	<meta name="twitter:image" content="https://yderskov.com/images/Bed and breakfast/Aalborg-bed-and-breakfast.webp" />
	{@html `<script type="application/ld+json">${JSON.stringify(projectSchema).replace(/</g, '\\u003c')}</script>`}
</svelte:head>

<Breadcrumbs items={[{ label: 'Special' }]} />
<Hero
	slides={[
		{ src: '/images/Bed and breakfast/Aalborg-bed-and-breakfast.webp', alt: 'Bed and breakfast, Aalborg — Arkitekttegnestuen Yderskov' }
	]}
	tag="Special"
	subtitle="Special"
	lines={[
		'En motorcykelgarage, et dansestudio, en hangar til dit sportsfly, et astronomisk observatorium på taget eller noget helt andet. Vi tegner det andre ikke tør.',
		'Gratis og uforpligtende første idemøde. Vi kommer ud til jer.'
	]}
	italicLines={[0, 1]}
/>

<section class="s">
	<div class="s-inner">
		<div class="text-2col">
			<div>
				<span class="eyebrow">Specialprojekter</span>
				<h1 class="sec-hed">Specialbyggeri<br />tegnet til formålet.</h1>
			</div>
			<div>
				<p class="body-p">
					Ikke alle projekter passer i en standardkasse. Vi tegner særlige byggerier — fra wellness og poolhuse til carporte, annekser og <a href="/erhverv" class="text-link">erhvervsbygninger</a> med en unik karakter. Se også vores <a href="/om" class="text-link">om os-side</a> for at lære mere om vores baggrund og samlede proces.
				</p>
				<p class="body-p">
					Uanset hvad du drømmer om, starter vi med at lytte — og finder den bedste arkitektoniske løsning til netop dit projekt.
				</p>
				<p class="body-p">
					<a href="#kontakt" class="text-link">→ Fortæl os om dit projekt</a>
				</p>
			</div>
		</div>
	</div>
</section>

<section class="s s-off">
	<div class="s-inner">
		<div class="proj-header">
			<div>
				<span class="eyebrow">Projekt</span>
				<h2 class="sec-hed" style="margin-bottom: 0;">Bed &amp; Breakfast,<br />Aalborg.</h2>
				<ProjectDescription
					text="Dette projekt, beliggende naturskønt i Aalborgs udkant, er en ombygning af en eksisterende ejendom til en hyggelig og indbydende Bed & Breakfast. Vi har designet lyse fællesarealer med et moderne køkken og en hyggelig spiseplads, hvor gæsterne kan samles. Målet har været at skabe en hjemlig og afslappet atmosfære, som føles rar at være i, samtidig med at indretningen er praktisk og let at holde ren i hverdagen."
					style="margin-top: 1.25rem; max-width: 680px; color: var(--sub);"
				/>
			</div>
		</div>
		<ImageGrid
			images={[
				{ src: '/images/Bed and breakfast/Aalborg-bed-and-breakfast.webp', alt: 'Bed and breakfast, Aalborg — Arkitekttegnestuen Yderskov' },
				{ src: '/images/Bed and breakfast/Aalborg-bed-and-breakfast-køkken.webp', alt: 'Køkken i bed and breakfast, Aalborg — Arkitekttegnestuen Yderskov' },
				{ src: '/images/Bed and breakfast/Aalborg-bed-and-breakfast-spiseområde.webp', alt: 'Spiseområde i bed and breakfast, Aalborg — Arkitekttegnestuen Yderskov' }
			]}
		/>
	</div>
</section>

<section class="s">
	<div class="s-inner">
		<div class="text-2col">
			<div>
				<span class="eyebrow">Unikke behov</span>
				<h2 class="sec-hed">Når byggeriet<br />kræver noget ekstra.</h2>
			</div>
			<div>
				<ExpandableText>
					<p class="body-p">
						Særlige funktioner kræver særlige løsninger. Uanset om det drejer sig om et professionelt lydstudie, et poolhus med avanceret styring af luftfugtighed, eller en garage tilpasset klassiske biler med indbygget værksted, så dykker vi ned i de tekniske og funktionelle krav. Vi forener de praktiske nødvendigheder med en stærk arkitektonisk rød tråd, så bygningen bliver både funktionel og smuk.
					</p>
					<p class="body-p">
						Vi har stor erfaring med at samarbejde med specialiserede konsulenter og ingeniører for at sikre, at komplekse installationer — såsom ventilationsanlæg til indendørs swimmingpools eller akustiske reguleringer — integreres usynligt og elegant i arkitekturen.
					</p>
					<p class="body-p">
						Ingen idé er for vild eller for kompleks. Vi ser udfordringer som en mulighed for at skabe noget helt enestående. Vi guider dig igennem myndighedsbehandling, lokalplaner og tekniske beregninger, så dit drømmeprojekt kan realiseres inden for de givne rammer.
					</p>
				</ExpandableText>
			</div>
		</div>
	</div>
</section>

<!-- Inspiration Galleri -->
<section class="s s-off">
	<div class="s-inner">
		<span class="eyebrow">Galleri</span>
		<h2 class="sec-hed">Inspiration</h2>
		<InspirationGallery />
	</div>
</section>

<CtaBand />

<section class="s form-bg" id="kontakt">
	<div class="s-inner">
		<div class="form-layout">
			<div class="form-meta">
				<span class="eyebrow">Kontakt os</span>
				<h2 class="sec-hed">Fortæl os om<br />dit specielle projekt</h2>
				<p style="margin-top: 1.5rem;">Ring eller skriv til os. Vi svarer inden 24 timer og er klar til en uforpligtende snak.</p>
				<p><a href="tel:29723427">29 72 34 27</a></p>
				<p><a href="mailto:cy@yderskov.com">cy@yderskov.com</a></p>
			</div>
			<ContactForm />
		</div>
	</div>
</section>
