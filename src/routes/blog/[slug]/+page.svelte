<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { posts } from '$lib/data/posts';
	import { parseParagraph, categoryLinks } from '$lib/parseParagraph';

	let { data }: { data: { post: import('$lib/data/posts').BlogPost } } = $props();

	const post = $derived(data.post);

	const dateParts = $derived(post.date.split('/').map((s) => s.trim()));
	const dateISO = $derived(
		dateParts.length === 3 ? `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}` : undefined
	);
	const schemaImageUrl = $derived(
		post.image
			? `https://yderskov.com${post.image}`
			: 'https://yderskov.com/images/topbanner-new.webp'
	);
	const imageUrl = $derived(schemaImageUrl);

	const blogSchema = $derived({
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: post.title,
		description: post.description,
		image: schemaImageUrl,
		datePublished: dateISO,
		author: {
			'@type': 'Organization',
			name: 'Yderskov Arkitekter',
			url: 'https://yderskov.com/'
		},
		publisher: {
			'@type': 'Organization',
			name: 'Yderskov Arkitekter',
			logo: {
				'@type': 'ImageObject',
				// Google's Article/BlogPosting rich results only accept raster
				// logos (PNG/JPG/WebP) here — an SVG silently fails validation.
				url: 'https://yderskov.com/icon-512.png'
			}
		},
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `https://yderskov.com/blog/${post.slug}`
		}
	});

	const links = $derived(post.relatedLinks ?? categoryLinks[post.catKey] ?? []);
	const morePosts = $derived(posts.filter((p) => p.slug !== post.slug).slice(0, 3));
</script>

<svelte:head>
	<title>{post.metaTitle}</title>
	<meta name="description" content={post.description} />
	<link rel="canonical" href={`https://yderskov.com/blog/${post.slug}`} />
	<meta property="og:type" content="article" />
	<meta property="og:locale" content="da_DK" />
	<meta property="og:title" content={post.metaTitle} />
	<meta property="og:description" content={post.description} />
	<meta property="og:url" content={`https://yderskov.com/blog/${post.slug}`} />
	<meta property="og:siteName" content="Yderskov Arkitekter" />
	<meta property="og:image" content={imageUrl} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={post.metaTitle} />
	<meta name="twitter:description" content={post.description} />
	<meta name="twitter:image" content={imageUrl} />
	{@html `<script type="application/ld+json">${JSON.stringify(blogSchema).replace(/</g, '\\u003c')}</script>`}
</svelte:head>

<Breadcrumbs noHero items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />

<article>
	<!-- Article header -->
	<section class="s" style="padding-bottom: 3rem;">
		<div class="s-inner" style="max-width: 740px;">
			<span class="eyebrow">{post.cat}</span>
			<h1 class="sec-hed" style="font-size: clamp(1.8rem, 4vw, 2.8rem); margin-bottom: 1.5rem;">
				{post.title}
			</h1>
			<p
				style="font-size: 0.72rem; font-weight: 300; color: var(--light); letter-spacing: 0.08em; margin-bottom: 2rem;"
			>
				{post.date}
			</p>
			<p
				style="font-size: 1.05rem; font-weight: 300; color: var(--sub); line-height: 1.75; border-left: 3px solid var(--border); padding-left: 1.25rem;"
			>
				{#each parseParagraph(post.lead) as seg, i (i)}{#if seg.type === 'text'}{seg.value}{:else}<a
						href={seg.href}
						target={seg.external ? '_blank' : undefined}
						rel={seg.external ? 'noopener noreferrer' : undefined}
						style="text-decoration: underline;">{seg.label}</a
					>{/if}{/each}
			</p>
			{#if post.images && post.images.length > 0}
				<div class="blog-gallery">
					{#each post.images as img, index (index)}
						<div style="border-radius: 12px; overflow: hidden; aspect-ratio: 4/3; position: relative;">
							<Image
								src={img}
								alt={`${post.title.includes('Arkitekttegnestuen Yderskov') ? post.title.replace(/ — Arkitekttegnestuen Yderskov$/, '') : post.title} - billede ${index + 1} — Arkitekttegnestuen Yderskov`}
								fill
								sizes="(max-width: 900px) 100vw, 50vw"
								style="object-fit: cover;"
							/>
						</div>
					{/each}
				</div>
			{:else if post.image}
				<div style="margin-top: 2.5rem; border-radius: 12px; overflow: hidden; aspect-ratio: 16/10; position: relative;">
					<Image
						src={post.image}
						alt={post.title.includes('Arkitekttegnestuen Yderskov') ? post.title : `${post.title} — Arkitekttegnestuen Yderskov`}
						fill
						sizes="(max-width: 900px) 100vw, 80vw"
						style="object-fit: cover;"
						priority
					/>
				</div>
			{/if}
		</div>
	</section>

	<!-- Article body -->
	<section class="s" style="padding-top: 2rem; background: var(--off);">
		<div class="s-inner" style="max-width: 740px;">
			{#each post.sections as section, i (i)}
				{#if section.type === 'case'}
					<div class="case-block">
						<span class="case-pill">Cases fra praksis</span>
						<h2 style="font-size: 1.05rem; font-weight: 400; color: var(--text); letter-spacing: -0.02em; margin-bottom: 0.85rem;">
							{section.heading}
						</h2>
						{#each section.paragraphs as p, j (j)}
							<p class="body-p">
								{#each parseParagraph(p) as seg, k (k)}{#if seg.type === 'text'}{seg.value}{:else}<a
										href={seg.href}
										target={seg.external ? '_blank' : undefined}
										rel={seg.external ? 'noopener noreferrer' : undefined}
										style="text-decoration: underline;">{seg.label}</a
									>{/if}{/each}
							</p>
						{/each}
					</div>
				{:else}
					<div style="margin-bottom: 2.5rem;">
						<h2 style="font-size: 1.05rem; font-weight: 400; color: var(--text); letter-spacing: -0.02em; margin-bottom: 0.85rem;">
							{section.heading}
						</h2>
						{#each section.paragraphs as p, j (j)}
							<p class="body-p">
								{#each parseParagraph(p) as seg, k (k)}{#if seg.type === 'text'}{seg.value}{:else}<a
										href={seg.href}
										target={seg.external ? '_blank' : undefined}
										rel={seg.external ? 'noopener noreferrer' : undefined}
										style="text-decoration: underline;">{seg.label}</a
									>{/if}{/each}
							</p>
						{/each}
					</div>
				{/if}
			{/each}
		</div>
	</section>

	<!-- Se også -->
	{#if links.length > 0}
		<section class="s" style="padding-top: 1rem; padding-bottom: 0;">
			<div class="s-inner" style="max-width: 740px;">
				<div class="see-also">
					<p class="see-also-label">Se også</p>
					<div class="see-also-links">
						{#each links as l, i (i)}
							<a href={l.href} class="see-also-link">{l.label} →</a>
						{/each}
					</div>
				</div>
			</div>
		</section>
	{/if}

	<!-- CTA strip -->
	<section class="s" style="padding-top: 3rem; padding-bottom: 3rem;">
		<div class="s-inner" style="max-width: 740px;">
			<div
				style="background: var(--dark); border-radius: 16px; padding: 2.5rem; display: flex; justify-content: space-between; align-items: center; gap: 2rem; flex-wrap: wrap;"
			>
				<div>
					<p style="font-size: 1rem; font-weight: 300; color: #fff; margin-bottom: 0.4rem;">
						Gratis og uforpligtende første møde
					</p>
					<p style="font-size: 0.8rem; font-weight: 300; color: rgba(255,255,255,0.55);">
						Vi svarer inden 24 timer
					</p>
				</div>
				<a
					href="/kontakt"
					style="background: #fff; color: var(--text); border-radius: 980px; padding: 0.6rem 1.4rem; font-size: 0.82rem; font-weight: 400; white-space: nowrap;"
				>
					Book gratis møde →
				</a>
			</div>
		</div>
	</section>
</article>

<!-- Contact form -->
<section class="s form-bg">
	<div class="s-inner" style="max-width: 900px;">
		<div class="form-layout">
			<div class="form-meta">
				<span class="eyebrow">Kontakt os</span>
				<h2 class="sec-hed">Fortæl os om<br />dit projekt</h2>
				<p style="margin-top: 1.5rem;">
					Ring eller skriv til os. Vi svarer inden 24 timer og tilbyder et gratis, uforpligtende møde.
				</p>
				<p><a href="tel:29723427">29 72 34 27</a></p>
				<p><a href="mailto:cy@yderskov.com">cy@yderskov.com</a></p>
			</div>
			<ContactForm />
		</div>
	</div>
</section>

<!-- More posts -->
<div class="blog-bg">
	<div class="blog-inner">
		<div class="blog-head">
			<h2 class="sec-hed">Flere indlæg</h2>
			<a href="/blog" class="blog-see">Se alle →</a>
		</div>
		<div class="bgrid">
			{#each morePosts as p (p.slug)}
				<a href={`/blog/${p.slug}`} class="bcard">
					<span class="bdate">{p.date}</span>
					<h3>{p.title}</h3>
					<p>{p.description}</p>
					<span class="blink">Læs mere →</span>
				</a>
			{/each}
		</div>
	</div>
</div>
