<script lang="ts">
	import '@fontsource-variable/inter';
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MobileCta from '$lib/components/MobileCta.svelte';
	import BackToTop from '$lib/components/BackToTop.svelte';

	let { children } = $props();
</script>

<Nav />
{@render children()}
<Footer />
<MobileCta />
<BackToTop />
