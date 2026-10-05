<script lang="ts">
	import { page } from '$app/state';

	const pathname = $derived(page.url.pathname);

	function handleLogoClick(e: MouseEvent) {
		if (pathname === '/') {
			e.preventDefault();
			window.scrollTo(0, 0);
		}
	}
</script>

<footer>
	<div class="ftop">
		<div class="fbrand fcol">
			<a href="/" aria-label="Yderskov Arkitekter — forside" onclick={handleLogoClick}>
				<img src="/images/logofiles/SVG/Arkitect 5.svg" alt="Arkitekttegnestuen Yderskov" class="footer-logo" width="160" height="128" />
			</a>
			<p>
				Arkitekttegnede villaer, sommerhuse og tilbygninger med fast pris i Aalborg og Danmark.
			</p>
		</div>

		<div class="fcol">
			<p class="fcol-h">Ydelser</p>
			<ul>
				<li><a href="/villaer">Villaer</a></li>
				<li><a href="/sommerhuse">Sommerhuse</a></li>
				<li><a href="/tilbygninger">Tilbygninger</a></li>
				<li><a href="/erhverv">Erhverv</a></li>
			</ul>
		</div>

		<div class="fcol">
			<p class="fcol-h">Firma</p>
			<ul>
				<li><a href="/blog">Blog</a></li>
				<li><a href="/om">Om</a></li>
				<li><a href="/faq">FAQ</a></li>
				<li><a href="/kontakt">Kontakt</a></li>
			</ul>
		</div>

		<div class="fcol">
			<p class="fcol-h">Kontakt</p>
			<ul>
				<li><a href="mailto:cy@yderskov.com">cy@yderskov.com</a></li>
				<li><a href="tel:29723427">29 72 34 27</a></li>
			</ul>
		</div>
	</div>

	<div class="fbot">
		<div>
			<p>Copyright © 2024 Arkitekttegnestuen Yderskov ApS</p>
			<p style="margin-top: 0.25rem; opacity: 0.65;">Der tages forbehold for prisændringer og trykfejl</p>
			<p style="margin-top: 0.25rem;"><a href="/privatlivspolitik">Privatlivspolitik</a></p>
		</div>
		<div style="text-align: right;">
			<p>CVR: 39391813</p>
			<p style="margin-top: 0.25rem;">Forsikringsselskab: TopDanmark</p>
			<p style="margin-top: 0.25rem;">Bank: Sparekassen Danmark, Brønderslev</p>
			<p style="margin-top: 0.25rem;">Revisor: LG-Revision, Nørresundby</p>
		</div>
	</div>
</footer>
