<script lang="ts">
	import PrisResultDemo from '$lib/components/PrisResultDemo.svelte';
</script>

<svelte:head>
	<meta name="robots" content="noindex" />
	<link rel="canonical" href="https://yderskov.com/prisberegner/demo" />
	<title>Vejledende prisskøn — demo | Yderskov Arkitekter</title>
</svelte:head>

<section class="s s-off">
	<div class="s-inner">
		<div style="margin-bottom: 2rem;">
			<span class="eyebrow">Demo</span>
			<h1 class="sec-hed">Vejledende prisskøn</h1>
			<p class="body-p" style="margin-top: 1rem;">
				Dette er et forenklet prisskøn. Du kan prøve den fulde <a href="/prisberegner" class="text-link">prisberegner her</a>, eller gå til vores <a href="/kontakt" class="text-link">kontaktside</a> for at aftale et gratis idémøde.
			</p>
		</div>
		<PrisResultDemo />
	</div>
</section>
