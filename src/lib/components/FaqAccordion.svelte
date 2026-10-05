<script lang="ts">
	interface Props {
		items: { q: string; a: string }[];
	}

	let { items }: Props = $props();

	let openIndex = $state<number | null>(null);

	function toggle(idx: number) {
		openIndex = openIndex === idx ? null : idx;
	}
</script>

<div class="faq-accordion-list">
	{#each items as item, idx (idx)}
		{@const isOpen = openIndex === idx}
		<div class={`faq-accordion-item${isOpen ? ' faq-open' : ''}`}>
			<button
				type="button"
				class="faq-accordion-header"
				onclick={() => toggle(idx)}
				aria-expanded={isOpen}
			>
				<span class="faq-accordion-q">{item.q}</span>
				<span class="faq-accordion-icon" aria-hidden="true">
					<svg
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						style={`transform: ${isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}; transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);`}
					>
						<polyline points="6 9 12 15 18 9" />
					</svg>
				</span>
			</button>
			<div
				class="faq-accordion-body"
				style={`max-height: ${isOpen ? '300px' : '0px'}; opacity: ${isOpen ? 1 : 0}; transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease;`}
			>
				<div class="faq-accordion-content">
					<p class="faq-a">{item.a}</p>
				</div>
			</div>
		</div>
	{/each}
</div>
