<script lang="ts">
	import PrisResultDoc from './PrisResultDoc.svelte';

	const BASE: Record<'vandret' | 'skrånende', number> = {
		vandret: 13000,
		skrånende: 15500
	};
	const EXT_VÆGGE = [
		{ label: 'Mur', adj: 0 },
		{ label: 'Træ', adj: -500 },
		{ label: 'Pudsede', adj: 600 }
	];
	const TAG = [
		{ label: 'Tegl', adj: 0 },
		{ label: 'Tagsten', adj: -200 },
		{ label: 'Tagpap', adj: -700 },
		{ label: 'Eternit', adj: -400 }
	];
	const INT_VÆGGE = [
		{ label: 'Gips', adj: 0 },
		{ label: 'Mur', adj: 1200 },
		{ label: 'Pudset', adj: 700 }
	];
	const GULV = [
		{ label: 'Trægulv', adj: 0 },
		{ label: 'Fliser', adj: -300 },
		{ label: 'Beton', adj: -600 }
	];
	const LOFTER = [
		{ label: 'Gips', adj: 0 },
		{ label: 'Troldtekt', adj: 400 },
		{ label: 'Profil', adj: 250 }
	];
	const VÅDRUMS = [
		{ label: 'Ingen', adj: 0 },
		{ label: 'Toilet', adj: 1200 },
		{ label: 'Toilet/bad', adj: 2200 },
		{ label: 'Bryggers', adj: 900 },
		{ label: 'Køkken', adj: 1800 }
	];

	const VINDUE_PRIS = 11000;
	const DØR_PRIS = 18000;
	const SPÆND = 0.15;

	type Opt = { label: string; adj: number };

	function lbl(opts: Opt[], adj: number) {
		return opts.find((o) => o.adj === adj)?.label ?? '';
	}

	function fmt(n: number) {
		return new Intl.NumberFormat('da-DK', {
			style: 'currency',
			currency: 'DKK',
			maximumFractionDigits: 0
		}).format(n);
	}

	// Animated counter (eased) mirroring the React useAnimatedNumber hook.
	function useAnimatedNumber(target: number) {
		let value = $state(target);
		let prevValue = target;
		let raf: number | null = null;

		$effect(() => {
			const to = target;
			const from = prevValue;
			if (from === to) return;
			const start = performance.now();
			const duration = 500;

			const tick = (now: number) => {
				const p = Math.min((now - start) / duration, 1);
				const eased = 1 - Math.pow(1 - p, 3);
				value = Math.round(from + (to - from) * eased);
				if (p < 1) {
					raf = requestAnimationFrame(tick);
				} else {
					prevValue = to;
				}
			};
			if (raf) cancelAnimationFrame(raf);
			raf = requestAnimationFrame(tick);
			return () => {
				if (raf) cancelAnimationFrame(raf);
			};
		});

		return {
			get value() {
				return value;
			}
		};
	}

	let grund = $state<'vandret' | 'skrånende'>('vandret');
	let areal = $state('');
	let rum = $state('');
	let vinduer = $state('');
	let terrassedøre = $state('');
	let extVægge = $state(EXT_VÆGGE[0].adj);
	let tag = $state(TAG[0].adj);
	let intVægge = $state(INT_VÆGGE[0].adj);
	let gulv = $state(GULV[0].adj);
	let lofter = $state(LOFTER[0].adj);
	let vådrum = $state(VÅDRUMS[0].adj);
	let result = $state<{
		min: number;
		max: number;
		snap: {
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
	} | null>(null);

	// Live beregning
	const m2 = $derived(parseFloat(areal) || 0);
	const nVin = $derived(Math.max(0, parseInt(vinduer) || 0));
	const nDøre = $derived(Math.max(0, parseInt(terrassedøre) || 0));
	const adj = $derived(extVægge + tag + intVægge + gulv + lofter + vådrum);
	const liveTotal = $derived(
		m2 > 0 ? m2 * (BASE[grund] + adj) + nVin * VINDUE_PRIS + nDøre * DØR_PRIS : 0
	);
	const liveMin = $derived(Math.round(liveTotal * (1 - SPÆND)));
	const liveMax = $derived(Math.round(liveTotal * (1 + SPÆND)));

	const animMin = useAnimatedNumber(liveMin);
	const animMax = useAnimatedNumber(liveMax);

	function beregn() {
		if (m2 <= 0) return;
		result = {
			min: liveMin,
			max: liveMax,
			snap: {
				grund,
				areal,
				rum,
				vinduer,
				terrassedøre,
				extVægge: lbl(EXT_VÆGGE, extVægge),
				tag: lbl(TAG, tag),
				intVægge: lbl(INT_VÆGGE, intVægge),
				gulv: lbl(GULV, gulv),
				lofter: lbl(LOFTER, lofter),
				vådrum: lbl(VÅDRUMS, vådrum)
			}
		};
	}
</script>

{#if result}
	<PrisResultDoc {result} onReset={() => (result = null)} />
{:else}
	<div class="calc2">
		<div class="calc2-top">
			<div class="calc2-top-field">
				<p class="calc2-group-label">Grund</p>
				<div class="calc2-opts">
					{#each ['vandret', 'skrånende'] as g (g)}
						<button
							type="button"
							class={`calc2-opt${grund === g ? ' calc2-opt-active' : ''}`}
							onclick={() => (grund = g as 'vandret' | 'skrånende')}
						>
							{g.charAt(0).toUpperCase() + g.slice(1)}
						</button>
					{/each}
				</div>
			</div>

			<div class="calc2-top-field">
				<label class="calc2-group-label" for="c2-areal">Bygningens areal</label>
				<div class="calc2-num-wrap">
					<input
						id="c2-areal"
						type="number"
						min="1"
						max="10000"
						placeholder="120"
						class="calc2-num"
						bind:value={areal}
					/>
					<span class="calc2-num-unit">m²</span>
				</div>
			</div>

			<div class="calc2-top-field">
				<label class="calc2-group-label" for="c2-rum">Antal rum</label>
				<div class="calc2-num-wrap">
					<input id="c2-rum" type="number" min="1" max="50" placeholder="4" class="calc2-num" bind:value={rum} />
				</div>
			</div>
		</div>

		<div class="calc2-cols">
			<div class="calc2-col">
				<p class="calc2-col-title calc2-col-title-strong">Indvendig</p>
				<div class="calc2-group">
					<p class="calc2-group-label">Vægge</p>
					<div class="calc2-opts">
						{#each INT_VÆGGE as o (o.label)}
							<button type="button" class={`calc2-opt${intVægge === o.adj ? ' calc2-opt-active' : ''}`} onclick={() => (intVægge = o.adj)}>
								{o.label}
							</button>
						{/each}
					</div>
				</div>
				<div class="calc2-group">
					<p class="calc2-group-label">Gulv</p>
					<div class="calc2-opts">
						{#each GULV as o (o.label)}
							<button type="button" class={`calc2-opt${gulv === o.adj ? ' calc2-opt-active' : ''}`} onclick={() => (gulv = o.adj)}>
								{o.label}
							</button>
						{/each}
					</div>
				</div>
				<div class="calc2-group">
					<p class="calc2-group-label">Lofter</p>
					<div class="calc2-opts">
						{#each LOFTER as o (o.label)}
							<button type="button" class={`calc2-opt${lofter === o.adj ? ' calc2-opt-active' : ''}`} onclick={() => (lofter = o.adj)}>
								{o.label}
							</button>
						{/each}
					</div>
				</div>
				<div class="calc2-group">
					<p class="calc2-group-label">Vådrums- og køkkeninstallationer</p>
					<div class="calc2-opts">
						{#each VÅDRUMS as o (o.label)}
							<button type="button" class={`calc2-opt${vådrum === o.adj ? ' calc2-opt-active' : ''}`} onclick={() => (vådrum = o.adj)}>
								{o.label}
							</button>
						{/each}
					</div>
				</div>
			</div>

			<div class="calc2-col">
				<p class="calc2-col-title calc2-col-title-strong">Udvendig</p>
				<div class="calc2-group">
					<p class="calc2-group-label">Vægge</p>
					<div class="calc2-opts">
						{#each EXT_VÆGGE as o (o.label)}
							<button type="button" class={`calc2-opt${extVægge === o.adj ? ' calc2-opt-active' : ''}`} onclick={() => (extVægge = o.adj)}>
								{o.label}
							</button>
						{/each}
					</div>
				</div>
				<div class="calc2-group">
					<p class="calc2-group-label">Tag</p>
					<div class="calc2-opts">
						{#each TAG as o (o.label)}
							<button type="button" class={`calc2-opt${tag === o.adj ? ' calc2-opt-active' : ''}`} onclick={() => (tag = o.adj)}>
								{o.label}
							</button>
						{/each}
					</div>
				</div>
				<div class="calc2-group">
					<p class="calc2-group-label">Vinduer antal</p>
					<div class="calc2-num-wrap">
						<input type="number" min="0" max="50" placeholder="0" class="calc2-num" bind:value={vinduer} />
					</div>
				</div>
				<div class="calc2-group">
					<p class="calc2-group-label">Terrassedøre antal</p>
					<div class="calc2-num-wrap">
						<input type="number" min="0" max="20" placeholder="0" class="calc2-num" bind:value={terrassedøre} />
					</div>
				</div>
			</div>
		</div>

		<!-- Live prisskøn -->
		<div class="calc2-live">
			{#if m2 > 0}
				<div class="calc2-live-prices">
					<div class="calc2-live-price">
						<span class="calc2-live-lbl">Laveste skøn</span>
						<span class="calc2-live-num">{fmt(animMin.value)}</span>
					</div>
					<div class="calc2-live-sep"></div>
					<div class="calc2-live-price">
						<span class="calc2-live-lbl">Højeste skøn</span>
						<span class="calc2-live-num">{fmt(animMax.value)}</span>
					</div>
				</div>
				<p class="calc2-live-note">Vejledende · inkl. moms · opdateres løbende</p>
			{:else}
				<p class="calc2-live-empty">—</p>
			{/if}
		</div>

		<button type="button" class="calc2-btn" onclick={beregn}>Beregn dit prisskøn</button>
	</div>
{/if}
