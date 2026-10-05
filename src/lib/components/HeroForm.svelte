<script lang="ts">
	import { submitLead } from '$lib/submitLead';

	interface Props {
		id?: string;
	}

	let { id = 'heroContactForm' }: Props = $props();

	let submitted = $state(false);
	let loading = $state(false);
	let error = $state<string | null>(null);

	$effect(() => {
		if (id !== 'heroContactForm') return;
		if (typeof window !== 'undefined' && window.location.hash === '#heroContactForm') {
			const el = document.getElementById(id);
			if (el) {
				setTimeout(() => {
					const y = el.getBoundingClientRect().top + window.scrollY - 100;
					window.scrollTo(0, y);
				}, 0);
			}
		}
	});

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		error = null;
		const form = e.currentTarget as HTMLFormElement;
		const data = new FormData(form);

		const name = (data.get('navn') as string)?.trim();
		const email = (data.get('email') as string)?.trim();
		const phone = (data.get('telefon') as string)?.trim();
		const location = (data.get('lokation') as string)?.trim();
		const message = (data.get('besked') as string)?.trim();

		if (!name || !email || !phone || !location || !message) {
			error = 'Venligst udfyld alle felter (navn, e-mail, telefonnummer, byggested og beskrivelse).';
			return;
		}

		loading = true;

		try {
			const ok = await submitLead({
				name,
				email,
				phone,
				projekt: (data.get('projekt') as string) || 'Andet',
				location,
				message,
				_page: window.location.pathname
			});
			if (!ok) throw new Error();
			submitted = true;
		} catch {
			error = 'Noget gik galt. Prøv igen, eller ring til os på 29 72 34 27.';
		} finally {
			loading = false;
		}
	}
</script>

{#if submitted}
	<div class="hero-form form-success">
		<div class="form-success-check" aria-hidden="true">
			<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<polyline points="20 6 9 17 4 12" />
			</svg>
		</div>
		<p class="form-success-title">Tak for din besked!</p>
		<p class="form-success-text">Vi ringer dig op inden 24 timer.</p>
		<p class="form-success-text" style="margin-top: 0.6rem;">
			Haster det? Ring <a href="tel:29723427">29 72 34 27</a>
		</p>
	</div>
{:else}
	<form class="hero-form" id={id} onsubmit={handleSubmit}>
		<p class="hero-form-title">Fortæl os om dit projekt</p>
		<p style="font-size: 0.7rem; color: var(--light); margin-top: 0; margin-bottom: 1rem;">
			* Markeringsfelter skal udfyldes
		</p>
		<input type="text" name="navn" placeholder="Navn *" required />
		<input type="email" name="email" placeholder="E-mail *" required />
		<input type="tel" name="telefon" placeholder="Telefon *" required />
		<select name="projekt" value="" required>
			<option value="" disabled>Projekttype *</option>
			<option value="ny-villa">Ny villa</option>
			<option value="sommerhus">Nyt sommerhus</option>
			<option value="tilbygning">Om- og tilbygning</option>
			<option value="erhverv">Erhverv</option>
			<option value="andet">Andet</option>
		</select>
		<input type="text" name="lokation" placeholder="Hvor i landet skal der bygges? *" required />
		<textarea name="besked" placeholder="Beskriv kort dit projekt… *" required></textarea>

		{#if error}
			<p style="color: #d93025; font-size: 0.8rem; margin-top: -0.2rem; margin-bottom: 0.6rem; text-align: center; line-height: 1.4;">
				{error}
			</p>
		{/if}

		<button type="submit" disabled={loading}>
			{loading ? 'Sender…' : 'Send besked →'}
		</button>
		<p class="form-or-call">
			Eller ring <a href="tel:29723427">29 72 34 27</a>
		</p>
		<p style="font-size: 0.76rem; color: var(--sub); text-align: center; margin-top: 0.3rem;">
			Vi vender tilbage inden 24 timer
		</p>
	</form>
{/if}
