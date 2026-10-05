<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		collapsedHeight?: number;
		fadeColor?: string;
	}

	let { children, collapsedHeight = 130, fadeColor = 'var(--white)' }: Props = $props();

	let expanded = $state(false);
</script>

<div>
	<div
		style={`max-height: ${expanded ? 'none' : collapsedHeight + 'px'}; overflow: hidden; position: relative;`}
	>
		{@render children()}
		{#if !expanded}
			<div
				aria-hidden="true"
				style={`position: absolute; bottom: 0; left: 0; right: 0; height: 2.5rem; background: linear-gradient(to bottom, transparent, ${fadeColor}); pointer-events: none;`}
			/>
		{/if}
	</div>
	<button
		type="button"
		class="proj-desc-toggle"
		style={`margin-top: ${expanded ? '0.25rem' : '0.5rem'};`}
		onclick={() => (expanded = !expanded)}
	>
		{expanded ? 'Vis mindre' : 'Læs mere'}
	</button>
</div>
