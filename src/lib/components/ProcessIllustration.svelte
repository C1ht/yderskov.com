<script lang="ts">
	interface Step {
		num: string;
		title: string;
		desc: string;
	}

	const steps: Step[] = [
		{
			num: '01',
			title: 'Idémøde',
			desc: 'Vi mødes hos jer eller på tegnestuen og I fortæller om jeres planer. Vi vender ønsker, muligheder og økonomi.'
		},
		{
			num: '02',
			title: 'Skitser',
			desc: 'Udfra den info I gav på idemødet tegner vores arkitekt en skitse til jer. Den består oftest af planer, snit og facader. En skitse er et udkast og ikke et færdigt projekt.'
		},
		{
			num: '03',
			title: 'Myndighed',
			desc: 'Med udgangspunkt i skitse og jeres ønsker udformer arkitekten et myndighedsprojekt med tegninger og ansøgning om byggetilladelse.'
		},
		{
			num: '04',
			title: 'Tilladelse & Pris',
			desc: 'Kommunen udsteder byggetilladelse til jer og arkitekten indhenter de bedste priser hos håndværkere.'
		},
		{
			num: '05',
			title: 'Byggeri',
			desc: 'Byggeriet kører og arkitekten fører løbende tilsyn med byggeriet og styrer økonomien for jer.'
		},
		{
			num: '06',
			title: 'Nøgle',
			desc: 'Det færdige byggeri afleveres til jer og arkitekten færdigmelder til kommunen så I får ibrugtagningstilladelse.'
		}
	];

	let tip = $state<Tooltip | null>(null);
	let touchGuard = $state(false);

	interface Tooltip {
		text: string;
		top: number;
		left: number;
		placement: 'top' | 'right';
	}

	function show(el: HTMLElement, text: string) {
		const r = el.getBoundingClientRect();
		if (window.innerWidth <= 800) {
			tip = { text, top: r.top + r.height / 2, left: r.right + 12, placement: 'right' };
		} else {
			tip = { text, top: r.top - 12, left: r.left + r.width / 2, placement: 'top' };
		}
	}
	function hide() {
		tip = null;
	}
	function endTouch(e: TouchEvent) {
		e.preventDefault();
		hide();
		setTimeout(() => {
			touchGuard = false;
		}, 800);
	}
</script>

<div class="process-ill-wrapper">
	<div class="process-ill">
		{#each steps as step, i (step.num)}
			<div class="process-ill-step">
				<div
					class="process-ill-icon"
					onmouseenter={(e) => {
						if (!touchGuard) show(e.currentTarget, step.desc);
					}}
					onmouseleave={hide}
					ontouchstart={(e) => {
						touchGuard = true;
						show(e.currentTarget, step.desc);
					}}
					ontouchend={endTouch}
					ontouchcancel={endTouch}
				>
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
						{#if step.num === '01'}
							<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
							<circle cx="12" cy="10" r="3" />
						{:else if step.num === '02'}
							<path d="M12 19l7-7 3 3-7 7-3-3z" />
							<path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
							<path d="M2 2l7.586 7.586" />
							<circle cx="11" cy="11" r="2" />
						{:else if step.num === '03'}
							<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
							<polyline points="14 2 14 8 20 8" />
							<line x1="16" y1="13" x2="8" y2="13" />
							<line x1="16" y1="17" x2="8" y2="17" />
							<polyline points="10 9 9 9 8 9" />
						{:else if step.num === '04'}
							<rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
							<line x1="16" y1="2" x2="16" y2="6" />
							<line x1="8" y1="2" x2="8" y2="6" />
							<line x1="3" y1="10" x2="21" y2="10" />
							<path d="M9 16l2 2 4-4" />
						{:else if step.num === '05'}
							<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
						{:else}
							<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
						{/if}
					</svg>
				</div>
				<div class="process-ill-text">
					<span class="process-ill-num">{step.num}</span>
					<span class="process-ill-title">{step.title}</span>
				</div>
				{#if i !== steps.length - 1}
					<div class="process-ill-line"></div>
				{/if}
			</div>
		{/each}
	</div>
	<div
		class="process-ill-tooltip"
		data-placement={tip?.placement ?? 'top'}
		role="tooltip"
		style={`top: ${tip?.top ?? 0}px; left: ${tip?.left ?? 0}px; transform: ${tip?.placement === 'right' ? 'translate(0, -50%)' : 'translate(-50%, -100%)'}; opacity: ${tip ? 1 : 0}; visibility: ${tip ? 'visible' : 'hidden'};`}
	>
		{tip?.text}
	</div>
</div>
