<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import ImageGrid from '$lib/components/ImageGrid.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import InspirationGallery from '$lib/components/InspirationGallery.svelte';
	import { sommerhuseProjects as projectGalleriesImported } from '$lib/data/project-data-shared';
	import { faqItems } from '$lib/data/sommerhuse';
	import { parseParagraph } from '$lib/parseParagraph';

	const projectGalleries = projectGalleriesImported;

	const projectSchema = $derived({
		'@context': 'https://schema.org',
		'@graph': projectGalleries.map((p: any) => {
			const location = p.title.split(',').pop()?.trim().replace('.', '').replace(/\n/g, ' ') || 'Danmark';
			return {
				'@type': 'SingleFamilyResidence',
				name: p.title.replace(/\n/g, ' '),
				description: `Arkitekttegnet sommerhus i ${location} tegnet af Yderskov Arkitekter.`,
				address: {
					'@type': 'PostalAddress',
					addressLocality: location,
					addressCountry: 'DK'
				},
				image: p.images.map((img: any) => `https://yderskov.com${img.src}`),
				architect: {
					'@type': 'LocalBusiness',
					name: 'Yderskov Arkitekter',
					url: 'https://yderskov.com/'
				}
			};
		})
	});
</script>

<svelte:head>
	<title>Arkitekttegnet sommerhus — Priser & projekter | Yderskov</title>
	<meta
		name="description"
		content="Få tegnet et unikt sommerhus tilpasset din grund og udsigt. Se priser og projekter hos Yderskov. Fast pris, høj kvalitet og gratis første møde!"
	/>
	<link rel="canonical" href="https://yderskov.com/sommerhuse" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="da_DK" />
	<meta property="og:url" content="https://yderskov.com/sommerhuse" />
	<meta property="og:siteName" content="Yderskov Arkitekter" />
	<meta property="og:image" content="https://yderskov.com/images/Torndalsvej/Hals-Torndalsvej-terrasse.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Arkitekttegnet sommerhus — Priser & projekter | Yderskov" />
	<meta
		name="twitter:description"
		content="Få tegnet et unikt sommerhus tilpasset din grund og udsigt. Se priser og projekter hos Yderskov. Fast pris, høj kvalitet og gratis første møde!"
	/>
	<meta name="twitter:image" content="https://yderskov.com/images/Torndalsvej/Hals-Torndalsvej-terrasse.webp" />
	{@html `<script type="application/ld+json">${JSON.stringify(projectSchema).replace(/</g, '\\u003c')}</script>`}
</svelte:head>

<Hero
	slides={[
		{ src: '/images/Torndalsvej/Hals-Torndalsvej-terrasse.webp', alt: 'Arkitekttegnet sommerhus — Arkitekttegnestuen Yderskov' }
	]}
	tag="Sommerhuse"
	subtitle="Sommerhuse"
	lines={[
		'Jeres sommerhus skal dufte af hav, smage af frihed og holde i generationer.',
		'Gratis og uforpligtende første idemøde. Vi kommer ud til jer.'
	]}
	italicLines={[0, 1]}
/>

<section class="s">
	<div class="s-inner">
		<div class="text-2col">
			<div>
				<span class="eyebrow">Arkitekttegnede sommerhuse</span>
				<h1 class="sec-hed">Arkitekttegnede sommerhuse<br />fra idé til nøglefærdigt.</h1>
			</div>
			<div>
				<p class="body-p">
					Dit sommerhus skal passe til netop din grund — uanset om det er ved kysten, i skoven eller på et udsigtsareal. Vi tegner, projekterer og bygger med egne håndværkere.
				</p>
				<p class="body-p">
					Se vores sommerhusprojekter her på siden eller læs mere om <a href="/om" class="text-link">vores proces</a>. Som erfaren <a href="/arkitekt-aalborg" class="text-link">arkitekt i Aalborg</a> og resten af Jylland rådgiver vi gerne. Du kan også læse mere om <a href="/priser" class="text-link">vores priser</a> og faste aftaler. Gratis første møde på grunden.
				</p>
				<p class="body-p">
					<a href="#kontakt" class="text-link">→ Kom i gang</a>
				</p>
			</div>
		</div>
	</div>
</section>

{#each projectGalleries as gallery, i (i)}
	<section class={`s${gallery.dark ? ' s-off' : ''}`} id={gallery.anchor}>
		<div class="s-inner">
			<div class="proj-header">
				<div>
					<span class="eyebrow">{gallery.eyebrow}</span>
					<h2 class="sec-hed" style="margin-bottom: 0; white-space: pre-line;">
						{gallery.title}
					</h2>
					{#if gallery.location}
						<p class="proj-meta">
							{gallery.location}{gallery.size ? ` · ${gallery.size}` : ''}{gallery.year ? ` · ${gallery.year}` : ''}
						</p>
					{/if}
					{#if gallery.description}
						<p class="proj-desc">
							{#each parseParagraph(gallery.description) as seg, j (j)}{#if seg.type === 'text'}{seg.value}{:else}<a
									href={seg.href}
									target={seg.external ? '_blank' : undefined}
									rel={seg.external ? 'noopener noreferrer' : undefined}
									style="text-decoration: underline;">{seg.label}</a
								>{/if}{/each}
						</p>
					{/if}
				</div>
			</div>
			<ImageGrid images={gallery.images} />
		</div>
	</section>
{/each}

<div class="stats-bg">
	<div class="stats-inner">
		<div class="stat"><div class="stat-num">12.000<sup> kr.</sup></div><div class="stat-lbl">Fra pr. m²</div></div>
		<div class="stat"><div class="stat-num">24<sup> timer</sup></div><div class="stat-lbl">Svar inden</div></div>
		<div class="stat"><div class="stat-num">10<sup>+</sup></div><div class="stat-lbl">Igangværende projekter</div></div>
		<div class="stat"><div class="stat-num">300<sup>+</sup></div><div class="stat-lbl">Projekter gennemført</div></div>
	</div>
</div>

<section class="s">
	<div class="s-inner">
		<span class="eyebrow">Spørgsmål og svar</span>
		<h2 class="sec-hed">FAQ — sommerhuse</h2>
		<div class="faq-grid">
			{#each faqItems as item, i (i)}
				<div class="faq-item">
					<p class="faq-q">{item.q}</p>
					<p class="faq-a">{item.a}</p>
				</div>
			{/each}
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
				<h2 class="sec-hed">Lad os skabe<br />dit drømmesommerhus</h2>
				<p style="margin-top: 1.5rem;">Ring eller skriv til os. Vi svarer inden 24 timer og tilbyder et gratis, uforpligtende møde direkte på grunden.</p>
				<p><a href="tel:29723427">29 72 34 27</a></p>
				<p><a href="mailto:cy@yderskov.com">cy@yderskov.com</a></p>
			</div>
			<ContactForm />
		</div>
	</div>
</section>
