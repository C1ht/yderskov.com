<script lang="ts">
	import { parseParagraph } from '$lib/parseParagraph';

	// Below this length the text fits comfortably in ~3 lines already, so a
	// "Læs mere" toggle would have nothing meaningful to reveal.
	const TRUNCATE_THRESHOLD = 220;

	interface Props {
		text: string;
		className?: string;
		style?: string;
	}

	let { text, className = 'proj-desc', style }: Props = $props();

	let expanded = $state(false);
	const needsToggle = $derived(text.length > TRUNCATE_THRESHOLD);
	const segments = $derived(parseParagraph(text));
</script>

<p class={`${className}${needsToggle && !expanded ? ' proj-desc-clamped' : ''}`} {style}>
	{#each segments as seg, i (i)}{#if seg.type === 'text'}{seg.value}{:else}<a
			href={seg.href}
			target={seg.external ? '_blank' : undefined}
			rel={seg.external ? 'noopener noreferrer' : undefined}
			style="text-decoration: underline;">{seg.label}</a
		>{/if}{/each}
</p>
{#if needsToggle}
	<button type="button" class="proj-desc-toggle" onclick={() => (expanded = !expanded)}>
		{expanded ? 'Vis mindre' : 'Læs mere'}
	</button>
{/if}
